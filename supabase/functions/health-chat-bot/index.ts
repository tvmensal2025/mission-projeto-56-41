import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, userId, conversationHistory = [], imageUrl } = await req.json();
    
    console.log('📨 Mensagem recebida:', message);
    console.log('👤 Usuário:', userId);
    console.log('📸 Imagem URL:', imageUrl);

    // Configurar Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Configurar chaves de API
    const GOOGLE_AI_API_KEY = Deno.env.get('GOOGLE_AI_API_KEY');
    console.log('🔑 Google AI:', GOOGLE_AI_API_KEY ? '✅ Configurada' : '❌ Não encontrada');

    // 🔍 Buscar dados do usuário
    console.log('👤 Buscando dados do usuário...');
    let userProfile = null;
    let userSummary = {
      name: 'Usuário',
      currentWeight: 'N/A',
      weightTrend: 0,
      streak: 0,
      missionsCompleted: 0
    };

    try {
      // Buscar perfil do usuário
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (profile) {
        userProfile = profile;
        userSummary.name = profile.full_name || 'Usuário';
        console.log('👤 Perfil encontrado:', profile.full_name);
      }

      // Buscar último peso
      const { data: weightData } = await supabase
        .from('weight_measurements')
        .select('peso_kg')
        .eq('user_id', userId)
        .order('measurement_date', { ascending: false })
        .limit(1)
        .single();
      
      if (weightData) {
        userSummary.currentWeight = `${weightData.peso_kg}kg`;
        console.log('⚖️ Peso atual:', weightData.peso_kg);
      }

      // Buscar streak de missões
      const { data: streakData } = await supabase
        .from('daily_mission_sessions')
        .select('streak_days')
        .eq('user_id', userId)
        .order('date', { ascending: false })
        .limit(1)
        .single();
      
      if (streakData) {
        userSummary.streak = streakData.streak_days || 0;
        console.log('🔥 Streak atual:', streakData.streak_days);
      }

    } catch (error) {
      console.log('⚠️ Erro ao buscar dados do usuário:', error.message);
    }

    // 🔍 Análise de imagem (se houver)
    let foodAnalysis = null;
    let isImageAnalysis = false;

    if (imageUrl && GOOGLE_AI_API_KEY) {
      console.log('🖼️ Iniciando análise de imagem...');
      isImageAnalysis = true;
      
      try {
        // Prompt especializado para análise de comida
        const imageAnalysisPrompt = `
Analise esta imagem e determine se contém comida/alimentos.

Se contém comida, forneça uma análise nutricional detalhada no formato JSON:
{
  "is_food": true,
  "confidence": 0.9,
  "foods_detected": ["arroz", "feijão", "salada"],
  "meal_type": "almoço",
  "nutritional_assessment": "Refeição balanceada com carboidratos, proteínas e vegetais",
  "positive_points": ["Boa variedade", "Inclui vegetais"],
  "suggestions": ["Adicionar mais proteína", "Reduzir sal"],
  "estimated_calories": 650,
  "health_tips": "Mastigue devagar para melhor digestão"
}

Se NÃO contém comida, retorne:
{
  "is_food": false,
  "confidence": 0.95,
  "detected_content": "descrição do que vê"
}`;

        // Criar um timeout para a chamada da API
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout na API do Google AI')), 30000)
        );

        console.log('🔍 Fazendo chamada para Google AI...');
        const aiResponse = await Promise.race([
          fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GOOGLE_AI_API_KEY}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [
                  { text: imageAnalysisPrompt },
                  { 
                    inline_data: {
                      mime_type: "image/jpeg",
                      data: await fetch(imageUrl).then(r => r.arrayBuffer()).then(buffer => 
                        btoa(String.fromCharCode(...new Uint8Array(buffer)))
                      )
                    }
                  }
                ]
              }],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 1000,
              }
            })
          }),
          timeoutPromise
        ]) as Response;

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiText = aiData.candidates?.[0]?.content?.parts?.[0]?.text;
          
          if (aiText) {
            try {
              // Extrair JSON da resposta
              const jsonMatch = aiText.match(/\{[\s\S]*\}/);
              if (jsonMatch) {
                foodAnalysis = JSON.parse(jsonMatch[0]);
                console.log('🍽️ Análise de comida:', foodAnalysis);
              }
            } catch (parseError) {
              console.log('⚠️ Erro ao parsear análise de comida:', parseError.message);
            }
          }
        }
      } catch (error) {
        console.log('⚠️ Erro na análise de imagem:', error.message);
      }
    }

    // 🤖 Gerar resposta personalizada
    let response = '';

    if (GOOGLE_AI_API_KEY) {
      console.log('🤖 Gerando resposta personalizada...');
      
      try {
        // Construir contexto rico
        let contextPrompt = `
Você é a Sofia, assistente virtual de saúde amigável e motivacional da ${userSummary.name}.

DADOS DO USUÁRIO:
- Nome: ${userSummary.name}
- Peso atual: ${userSummary.currentWeight}
- Streak de missões: ${userSummary.streak} dias

HISTÓRICO DA CONVERSA:
${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

MENSAGEM ATUAL: "${message}"`;

        // Adicionar análise de comida se houver
        if (foodAnalysis && foodAnalysis.is_food) {
          contextPrompt += `

ANÁLISE DE COMIDA DETECTADA:
- Alimentos: ${foodAnalysis.foods_detected?.join(', ')}
- Tipo de refeição: ${foodAnalysis.meal_type}
- Avaliação: ${foodAnalysis.nutritional_assessment}
- Calorias estimadas: ${foodAnalysis.estimated_calories}
- Pontos positivos: ${foodAnalysis.positive_points?.join(', ')}
- Sugestões: ${foodAnalysis.suggestions?.join(', ')}

Responda como Sofia analisando a comida enviada de forma personalizada e motivacional.`;
        } else if (isImageAnalysis && foodAnalysis && !foodAnalysis.is_food) {
          contextPrompt += `

IMAGEM ANALISADA (não é comida):
- Conteúdo detectado: ${foodAnalysis.detected_content}

Responda explicando que viu a imagem mas que não é comida, e pergunte como pode ajudar.`;
        }

        contextPrompt += `

INSTRUÇÕES:
- Seja calorosa, motivacional e empática 
- Use emojis apropriados (máximo 3 por mensagem)
- Personalize com o nome do usuário
- Considere o histórico da conversa
- Dê dicas práticas de saúde quando relevante
- Se analisou comida, seja específica na análise nutricional
- Mantenha o tom da Sofia sempre positivo
- Responda de forma natural e conversacional
- Seja específica e útil

RESPONDA AGORA COMO SOFIA:`;

        // Timeout para a resposta de chat
        const chatTimeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout na resposta do chat')), 20000)
        );

        console.log('💬 Gerando resposta de chat...');
        const aiResponse = await Promise.race([
          fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_AI_API_KEY}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{ text: contextPrompt }]
              }],
              generationConfig: {
                temperature: 0.9,
                maxOutputTokens: 500,
                topP: 0.8,
                topK: 40
              }
            })
          }),
          chatTimeoutPromise
        ]) as Response;

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiText = aiData.candidates?.[0]?.content?.parts?.[0]?.text;
          
          if (aiText) {
            response = aiText;
            console.log('✅ Resposta personalizada gerada');
          } else {
            throw new Error('Resposta vazia da IA');
          }
        } else {
          throw new Error(`Erro na API: ${aiResponse.status}`);
        }
      } catch (error) {
        console.log('⚠️ Erro na IA:', error.message);
        response = `💜 Olá ${userSummary.name}! Desculpe, estou com problemas técnicos. Pode tentar reformular sua pergunta?`;
      }
    } else {
      console.log('⚠️ Google AI API Key não configurada');
      response = `💜 Olá ${userSummary.name}! Como posso te ajudar hoje? (Serviço temporariamente limitado)`;
    }

    const finalResponse = {
      response: response,
      character: 'Sof.ia',
      day: new Date().getDay(),
      foodAnalysis: foodAnalysis,
      userSummary: userSummary
    };

    console.log('✅ Resposta final enviada');

    return new Response(JSON.stringify(finalResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Erro na função:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Erro interno do servidor' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});