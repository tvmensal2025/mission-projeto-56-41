export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activity_categories: {
        Row: {
          avg_score: number | null
          category_name: string
          color_code: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          last_activity_date: string | null
          total_points: number | null
          total_sessions: number | null
          user_id: string | null
        }
        Insert: {
          avg_score?: number | null
          category_name: string
          color_code?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_activity_date?: string | null
          total_points?: number | null
          total_sessions?: number | null
          user_id?: string | null
        }
        Update: {
          avg_score?: number | null
          category_name?: string
          color_code?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_activity_date?: string | null
          total_points?: number | null
          total_sessions?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      activity_sessions: {
        Row: {
          category_id: string | null
          created_at: string | null
          duration_minutes: number | null
          id: string
          intensity_level: number | null
          notes: string | null
          satisfaction_score: number | null
          session_date: string | null
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          intensity_level?: number | null
          notes?: string | null
          satisfaction_score?: number | null
          session_date?: string | null
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          intensity_level?: number | null
          notes?: string | null
          satisfaction_score?: number | null
          session_date?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_sessions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "activity_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_configurations: {
        Row: {
          cost_per_request: number | null
          created_at: string | null
          functionality: string
          id: string
          is_enabled: boolean
          level: string | null
          max_tokens: number
          model: string
          personality: string | null
          priority: number | null
          service: string
          system_prompt: string | null
          temperature: number
          updated_at: string | null
        }
        Insert: {
          cost_per_request?: number | null
          created_at?: string | null
          functionality: string
          id?: string
          is_enabled?: boolean
          level?: string | null
          max_tokens?: number
          model?: string
          personality?: string | null
          priority?: number | null
          service?: string
          system_prompt?: string | null
          temperature?: number
          updated_at?: string | null
        }
        Update: {
          cost_per_request?: number | null
          created_at?: string | null
          functionality?: string
          id?: string
          is_enabled?: boolean
          level?: string | null
          max_tokens?: number
          model?: string
          personality?: string | null
          priority?: number | null
          service?: string
          system_prompt?: string | null
          temperature?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_documents: {
        Row: {
          content: string
          created_at: string | null
          functionality: string
          id: string
          name: string
          type: string
          uploaded_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          functionality?: string
          id?: string
          name: string
          type?: string
          uploaded_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          functionality?: string
          id?: string
          name?: string
          type?: string
          uploaded_at?: string | null
        }
        Relationships: []
      }
      ai_fallback_configs: {
        Row: {
          created_at: string | null
          fallback_config: Json
          functionality: string
          id: string
          last_verified: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          fallback_config: Json
          functionality: string
          id?: string
          last_verified?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          fallback_config?: Json
          functionality?: string
          id?: string
          last_verified?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_system_logs: {
        Row: {
          config_snapshot: Json | null
          created_by: string | null
          description: string | null
          error_details: Json | null
          event_type: string
          functionality: string
          id: string
          level: string
          metadata: Json | null
          timestamp: string | null
        }
        Insert: {
          config_snapshot?: Json | null
          created_by?: string | null
          description?: string | null
          error_details?: Json | null
          event_type: string
          functionality: string
          id?: string
          level: string
          metadata?: Json | null
          timestamp?: string | null
        }
        Update: {
          config_snapshot?: Json | null
          created_by?: string | null
          description?: string | null
          error_details?: Json | null
          event_type?: string
          functionality?: string
          id?: string
          level?: string
          metadata?: Json | null
          timestamp?: string | null
        }
        Relationships: []
      }
      assessments: {
        Row: {
          challenges_faced: string | null
          created_at: string
          goal_achievement_rating: number | null
          id: string
          improvements_noted: string | null
          next_week_goals: string | null
          satisfaction_rating: number | null
          user_id: string
          week_start_date: string
          weight_change: number | null
        }
        Insert: {
          challenges_faced?: string | null
          created_at?: string
          goal_achievement_rating?: number | null
          id?: string
          improvements_noted?: string | null
          next_week_goals?: string | null
          satisfaction_rating?: number | null
          user_id: string
          week_start_date: string
          weight_change?: number | null
        }
        Update: {
          challenges_faced?: string | null
          created_at?: string
          goal_achievement_rating?: number | null
          id?: string
          improvements_noted?: string | null
          next_week_goals?: string | null
          satisfaction_rating?: number | null
          user_id?: string
          week_start_date?: string
          weight_change?: number | null
        }
        Relationships: []
      }
      company_data: {
        Row: {
          admin_email: string | null
          company_description: string | null
          company_name: string | null
          created_at: string | null
          id: string
          max_users: number | null
          subscription_plan: string | null
          updated_at: string | null
        }
        Insert: {
          admin_email?: string | null
          company_description?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          max_users?: number | null
          subscription_plan?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_email?: string | null
          company_description?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          max_users?: number | null
          subscription_plan?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      content_access: {
        Row: {
          access_granted: boolean | null
          content_id: string
          content_type: string
          created_at: string
          expires_at: string | null
          granted_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          access_granted?: boolean | null
          content_id: string
          content_type: string
          created_at?: string
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          access_granted?: boolean | null
          content_id?: string
          content_type?: string
          created_at?: string
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      course_modules: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          id: string
          order_index: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          id?: string
          order_index: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          id?: string
          order_index?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration_minutes: number | null
          id: string
          instructor_name: string | null
          is_premium: boolean | null
          is_published: boolean | null
          price: number | null
          thumbnail_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number | null
          id?: string
          instructor_name?: string | null
          is_premium?: boolean | null
          is_published?: boolean | null
          price?: number | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number | null
          id?: string
          instructor_name?: string | null
          is_premium?: boolean | null
          is_published?: boolean | null
          price?: number | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      custom_saboteurs: {
        Row: {
          characteristics: string[] | null
          color: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          icon: string | null
          id: string
          impact: string | null
          is_active: boolean | null
          name: string
          questions: string[] | null
          strategies: string[] | null
          updated_at: string | null
        }
        Insert: {
          characteristics?: string[] | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          impact?: string | null
          is_active?: boolean | null
          name: string
          questions?: string[] | null
          strategies?: string[] | null
          updated_at?: string | null
        }
        Update: {
          characteristics?: string[] | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          impact?: string | null
          is_active?: boolean | null
          name?: string
          questions?: string[] | null
          strategies?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      daily_advanced_tracking: {
        Row: {
          bedtime: string | null
          comfort_eating: boolean | null
          created_at: string | null
          daily_score: number | null
          date: string
          day_highlight: string | null
          dreams_remembered: boolean | null
          eating_mindfully: boolean | null
          energy_afternoon: number | null
          energy_evening: number | null
          energy_morning: number | null
          first_drink: string | null
          focus_level: number | null
          goals_achieved: number | null
          gratitude_notes: string | null
          id: string
          improvement_area: string | null
          meals_planned: boolean | null
          meditation_minutes: number | null
          mood_general: number | null
          morning_routine_completed: boolean | null
          personal_growth_moment: string | null
          priorities_set: boolean | null
          reminded_to_drink: number | null
          satisfied_with_food: boolean | null
          sleep_quality_notes: string | null
          steps_current: number | null
          steps_goal: number | null
          stress_triggers: string | null
          tomorrow_intention: string | null
          tracking_completion_percent: number | null
          updated_at: string | null
          user_id: string | null
          wake_up_naturally: boolean | null
          wake_up_time: string | null
          water_current_ml: number | null
          water_goal_ml: number | null
          workout_completed: boolean | null
          workout_enjoyment: number | null
          workout_planned: boolean | null
        }
        Insert: {
          bedtime?: string | null
          comfort_eating?: boolean | null
          created_at?: string | null
          daily_score?: number | null
          date?: string
          day_highlight?: string | null
          dreams_remembered?: boolean | null
          eating_mindfully?: boolean | null
          energy_afternoon?: number | null
          energy_evening?: number | null
          energy_morning?: number | null
          first_drink?: string | null
          focus_level?: number | null
          goals_achieved?: number | null
          gratitude_notes?: string | null
          id?: string
          improvement_area?: string | null
          meals_planned?: boolean | null
          meditation_minutes?: number | null
          mood_general?: number | null
          morning_routine_completed?: boolean | null
          personal_growth_moment?: string | null
          priorities_set?: boolean | null
          reminded_to_drink?: number | null
          satisfied_with_food?: boolean | null
          sleep_quality_notes?: string | null
          steps_current?: number | null
          steps_goal?: number | null
          stress_triggers?: string | null
          tomorrow_intention?: string | null
          tracking_completion_percent?: number | null
          updated_at?: string | null
          user_id?: string | null
          wake_up_naturally?: boolean | null
          wake_up_time?: string | null
          water_current_ml?: number | null
          water_goal_ml?: number | null
          workout_completed?: boolean | null
          workout_enjoyment?: number | null
          workout_planned?: boolean | null
        }
        Update: {
          bedtime?: string | null
          comfort_eating?: boolean | null
          created_at?: string | null
          daily_score?: number | null
          date?: string
          day_highlight?: string | null
          dreams_remembered?: boolean | null
          eating_mindfully?: boolean | null
          energy_afternoon?: number | null
          energy_evening?: number | null
          energy_morning?: number | null
          first_drink?: string | null
          focus_level?: number | null
          goals_achieved?: number | null
          gratitude_notes?: string | null
          id?: string
          improvement_area?: string | null
          meals_planned?: boolean | null
          meditation_minutes?: number | null
          mood_general?: number | null
          morning_routine_completed?: boolean | null
          personal_growth_moment?: string | null
          priorities_set?: boolean | null
          reminded_to_drink?: number | null
          satisfied_with_food?: boolean | null
          sleep_quality_notes?: string | null
          steps_current?: number | null
          steps_goal?: number | null
          stress_triggers?: string | null
          tomorrow_intention?: string | null
          tracking_completion_percent?: number | null
          updated_at?: string | null
          user_id?: string | null
          wake_up_naturally?: boolean | null
          wake_up_time?: string | null
          water_current_ml?: number | null
          water_goal_ml?: number | null
          workout_completed?: boolean | null
          workout_enjoyment?: number | null
          workout_planned?: boolean | null
        }
        Relationships: []
      }
      daily_mission_sessions: {
        Row: {
          completed_sections: string[] | null
          created_at: string | null
          date: string
          id: string
          is_completed: boolean | null
          streak_days: number | null
          total_points: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed_sections?: string[] | null
          created_at?: string | null
          date?: string
          id?: string
          is_completed?: boolean | null
          streak_days?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed_sections?: string[] | null
          created_at?: string | null
          date?: string
          id?: string
          is_completed?: boolean | null
          streak_days?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      daily_missions: {
        Row: {
          category: string | null
          created_at: string | null
          current_value: number | null
          date_assigned: string | null
          date_completed: string | null
          description: string | null
          difficulty: string | null
          id: string
          is_completed: boolean | null
          mission_type: string
          points: number | null
          target_value: number | null
          title: string
          user_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          current_value?: number | null
          date_assigned?: string | null
          date_completed?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          is_completed?: boolean | null
          mission_type: string
          points?: number | null
          target_value?: number | null
          title: string
          user_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          current_value?: number | null
          date_assigned?: string | null
          date_completed?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          is_completed?: boolean | null
          mission_type?: string
          points?: number | null
          target_value?: number | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      daily_responses: {
        Row: {
          answer: string
          created_at: string | null
          date: string
          id: string
          points_earned: number | null
          question_id: string
          section: string
          text_response: string | null
          user_id: string | null
        }
        Insert: {
          answer: string
          created_at?: string | null
          date?: string
          id?: string
          points_earned?: number | null
          question_id: string
          section: string
          text_response?: string | null
          user_id?: string | null
        }
        Update: {
          answer?: string
          created_at?: string | null
          date?: string
          id?: string
          points_earned?: number | null
          question_id?: string
          section?: string
          text_response?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      device_sync_log: {
        Row: {
          device_type: string
          error_message: string | null
          id: string
          integration_name: string
          last_sync_date: string | null
          records_synced: number | null
          sync_status: string | null
          sync_type: string
          synced_at: string | null
          user_id: string | null
        }
        Insert: {
          device_type: string
          error_message?: string | null
          id?: string
          integration_name: string
          last_sync_date?: string | null
          records_synced?: number | null
          sync_status?: string | null
          sync_type: string
          synced_at?: string | null
          user_id?: string | null
        }
        Update: {
          device_type?: string
          error_message?: string | null
          id?: string
          integration_name?: string
          last_sync_date?: string | null
          records_synced?: number | null
          sync_status?: string | null
          sync_type?: string
          synced_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      exercise_sessions: {
        Row: {
          avg_heart_rate: number | null
          calories_burned: number | null
          created_at: string | null
          device_type: string | null
          distance_km: number | null
          duration_minutes: number
          ended_at: string | null
          exercise_type: string
          id: string
          max_heart_rate: number | null
          min_heart_rate: number | null
          notes: string | null
          started_at: string | null
          steps: number | null
          user_id: string | null
          zones: Json | null
        }
        Insert: {
          avg_heart_rate?: number | null
          calories_burned?: number | null
          created_at?: string | null
          device_type?: string | null
          distance_km?: number | null
          duration_minutes: number
          ended_at?: string | null
          exercise_type: string
          id?: string
          max_heart_rate?: number | null
          min_heart_rate?: number | null
          notes?: string | null
          started_at?: string | null
          steps?: number | null
          user_id?: string | null
          zones?: Json | null
        }
        Update: {
          avg_heart_rate?: number | null
          calories_burned?: number | null
          created_at?: string | null
          device_type?: string | null
          distance_km?: number | null
          duration_minutes?: number
          ended_at?: string | null
          exercise_type?: string
          id?: string
          max_heart_rate?: number | null
          min_heart_rate?: number | null
          notes?: string | null
          started_at?: string | null
          steps?: number | null
          user_id?: string | null
          zones?: Json | null
        }
        Relationships: []
      }
      exercise_tracking: {
        Row: {
          calories_burned: number | null
          created_at: string | null
          date: string
          duration_minutes: number | null
          energy_after: number | null
          exercise_type: string | null
          id: string
          motivation_level: number | null
          source: string | null
          target_achieved: boolean | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          calories_burned?: number | null
          created_at?: string | null
          date: string
          duration_minutes?: number | null
          energy_after?: number | null
          exercise_type?: string | null
          id?: string
          motivation_level?: number | null
          source?: string | null
          target_achieved?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          calories_burned?: number | null
          created_at?: string | null
          date?: string
          duration_minutes?: number | null
          energy_after?: number | null
          exercise_type?: string | null
          id?: string
          motivation_level?: number | null
          source?: string | null
          target_achieved?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      food_analysis: {
        Row: {
          created_at: string
          emotional_state: string | null
          food_items: Json
          hunger_after: number | null
          hunger_before: number | null
          id: string
          meal_type: string
          nutrition_analysis: Json
          satisfaction_level: number | null
          sofia_analysis: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          emotional_state?: string | null
          food_items: Json
          hunger_after?: number | null
          hunger_before?: number | null
          id?: string
          meal_type: string
          nutrition_analysis: Json
          satisfaction_level?: number | null
          sofia_analysis: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          emotional_state?: string | null
          food_items?: Json
          hunger_after?: number | null
          hunger_before?: number | null
          id?: string
          meal_type?: string
          nutrition_analysis?: Json
          satisfaction_level?: number | null
          sofia_analysis?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      food_patterns: {
        Row: {
          confidence_score: number | null
          context_data: Json | null
          detected_at: string
          id: string
          is_active: boolean | null
          pattern_description: string
          pattern_type: string
          user_id: string
        }
        Insert: {
          confidence_score?: number | null
          context_data?: Json | null
          detected_at?: string
          id?: string
          is_active?: boolean | null
          pattern_description: string
          pattern_type: string
          user_id: string
        }
        Update: {
          confidence_score?: number | null
          context_data?: Json | null
          detected_at?: string
          id?: string
          is_active?: boolean | null
          pattern_description?: string
          pattern_type?: string
          user_id?: string
        }
        Relationships: []
      }
      health_diary: {
        Row: {
          created_at: string
          date: string
          energy_level: number | null
          exercise_minutes: number | null
          id: string
          mood_rating: number | null
          notes: string | null
          sleep_hours: number | null
          user_id: string
          water_intake: number | null
        }
        Insert: {
          created_at?: string
          date?: string
          energy_level?: number | null
          exercise_minutes?: number | null
          id?: string
          mood_rating?: number | null
          notes?: string | null
          sleep_hours?: number | null
          user_id: string
          water_intake?: number | null
        }
        Update: {
          created_at?: string
          date?: string
          energy_level?: number | null
          exercise_minutes?: number | null
          id?: string
          mood_rating?: number | null
          notes?: string | null
          sleep_hours?: number | null
          user_id?: string
          water_intake?: number | null
        }
        Relationships: []
      }
      health_integrations: {
        Row: {
          api_key: string | null
          client_id: string | null
          client_secret: string | null
          config: Json | null
          created_at: string | null
          display_name: string
          enabled: boolean | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          api_key?: string | null
          client_id?: string | null
          client_secret?: string | null
          config?: Json | null
          created_at?: string | null
          display_name: string
          enabled?: boolean | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          api_key?: string | null
          client_id?: string | null
          client_secret?: string | null
          config?: Json | null
          created_at?: string | null
          display_name?: string
          enabled?: boolean | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      heart_rate_data: {
        Row: {
          activity_type: string | null
          created_at: string | null
          device_model: string | null
          device_type: string | null
          heart_rate_bpm: number
          heart_rate_variability: number | null
          id: string
          max_hr: number | null
          recorded_at: string | null
          recovery_time: number | null
          resting_hr: number | null
          stress_level: number | null
          user_id: string | null
          zone_time: Json | null
        }
        Insert: {
          activity_type?: string | null
          created_at?: string | null
          device_model?: string | null
          device_type?: string | null
          heart_rate_bpm: number
          heart_rate_variability?: number | null
          id?: string
          max_hr?: number | null
          recorded_at?: string | null
          recovery_time?: number | null
          resting_hr?: number | null
          stress_level?: number | null
          user_id?: string | null
          zone_time?: Json | null
        }
        Update: {
          activity_type?: string | null
          created_at?: string | null
          device_model?: string | null
          device_type?: string | null
          heart_rate_bpm?: number
          heart_rate_variability?: number | null
          id?: string
          max_hr?: number | null
          recorded_at?: string | null
          recovery_time?: number | null
          resting_hr?: number | null
          stress_level?: number | null
          user_id?: string | null
          zone_time?: Json | null
        }
        Relationships: []
      }
      lessons: {
        Row: {
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_free: boolean | null
          module_id: string
          order_index: number
          title: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_free?: boolean | null
          module_id: string
          order_index: number
          title: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_free?: boolean | null
          module_id?: string
          order_index?: number
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "course_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      life_wheel: {
        Row: {
          career_score: number | null
          created_at: string | null
          evaluation_date: string | null
          family_score: number | null
          finances_score: number | null
          health_score: number | null
          id: string
          leisure_score: number | null
          notes: string | null
          overall_satisfaction: number | null
          personal_growth_score: number | null
          relationships_score: number | null
          spirituality_score: number | null
          user_id: string | null
        }
        Insert: {
          career_score?: number | null
          created_at?: string | null
          evaluation_date?: string | null
          family_score?: number | null
          finances_score?: number | null
          health_score?: number | null
          id?: string
          leisure_score?: number | null
          notes?: string | null
          overall_satisfaction?: number | null
          personal_growth_score?: number | null
          relationships_score?: number | null
          spirituality_score?: number | null
          user_id?: string | null
        }
        Update: {
          career_score?: number | null
          created_at?: string | null
          evaluation_date?: string | null
          family_score?: number | null
          finances_score?: number | null
          health_score?: number | null
          id?: string
          leisure_score?: number | null
          notes?: string | null
          overall_satisfaction?: number | null
          personal_growth_score?: number | null
          relationships_score?: number | null
          spirituality_score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      medical_documents: {
        Row: {
          clinic_name: string | null
          created_at: string | null
          description: string | null
          doctor_name: string | null
          exam_date: string | null
          file_name: string | null
          file_size: number | null
          file_url: string | null
          id: string
          results: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          clinic_name?: string | null
          created_at?: string | null
          description?: string | null
          doctor_name?: string | null
          exam_date?: string | null
          file_name?: string | null
          file_size?: number | null
          file_url?: string | null
          id?: string
          results?: string | null
          status?: string
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          clinic_name?: string | null
          created_at?: string | null
          description?: string | null
          doctor_name?: string | null
          exam_date?: string | null
          file_name?: string | null
          file_size?: number | null
          file_url?: string | null
          id?: string
          results?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      missions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          difficulty: string | null
          id: string
          is_active: boolean | null
          points: number | null
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: string
          is_active?: boolean | null
          points?: number | null
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: string
          is_active?: boolean | null
          points?: number | null
          title?: string
        }
        Relationships: []
      }
      mood_tracking: {
        Row: {
          created_at: string | null
          date: string | null
          energy_level: number | null
          id: string
          mood_emoji: string | null
          mood_score: number | null
          notes: string | null
          sleep_quality: number | null
          stress_level: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          energy_level?: number | null
          id?: string
          mood_emoji?: string | null
          mood_score?: number | null
          notes?: string | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          energy_level?: number | null
          id?: string
          mood_emoji?: string | null
          mood_score?: number | null
          notes?: string | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          admin_level: string | null
          avatar_url: string | null
          birth_date: string | null
          city: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string | null
          selected_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          admin_level?: string | null
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          selected_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          admin_level?: string | null
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          selected_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_selected_session_id_fkey"
            columns: ["selected_session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      saboteur_assessments: {
        Row: {
          assessment_date: string | null
          completed: boolean | null
          completion_time: number | null
          created_at: string | null
          description: string | null
          id: string
          title: string | null
          total_questions: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          assessment_date?: string | null
          completed?: boolean | null
          completion_time?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string | null
          total_questions?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          assessment_date?: string | null
          completed?: boolean | null
          completion_time?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string | null
          total_questions?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      saboteur_responses: {
        Row: {
          answer: number
          assessment_id: string | null
          created_at: string | null
          id: string
          question_id: string
          question_text: string
          saboteur_id: string
          saboteur_name: string
          user_id: string | null
        }
        Insert: {
          answer: number
          assessment_id?: string | null
          created_at?: string | null
          id?: string
          question_id: string
          question_text: string
          saboteur_id: string
          saboteur_name: string
          user_id?: string | null
        }
        Update: {
          answer?: number
          assessment_id?: string | null
          created_at?: string | null
          id?: string
          question_id?: string
          question_text?: string
          saboteur_id?: string
          saboteur_name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saboteur_responses_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "saboteur_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      saboteur_results: {
        Row: {
          assessment_id: string | null
          created_at: string | null
          id: string
          max_possible_score: number
          percentage: number
          recommendations: string | null
          saboteur_id: string
          saboteur_name: string
          score: number
          user_id: string | null
        }
        Insert: {
          assessment_id?: string | null
          created_at?: string | null
          id?: string
          max_possible_score: number
          percentage: number
          recommendations?: string | null
          saboteur_id: string
          saboteur_name: string
          score: number
          user_id?: string | null
        }
        Update: {
          assessment_id?: string | null
          created_at?: string | null
          id?: string
          max_possible_score?: number
          percentage?: number
          recommendations?: string | null
          saboteur_id?: string
          saboteur_name?: string
          score?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saboteur_results_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "saboteur_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          content: Json
          created_at: string | null
          created_by: string | null
          description: string | null
          difficulty: string | null
          estimated_time: number | null
          follow_up_questions: string[] | null
          id: string
          is_active: boolean | null
          materials_needed: string[] | null
          target_saboteurs: string[] | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          content: Json
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty?: string | null
          estimated_time?: number | null
          follow_up_questions?: string[] | null
          id?: string
          is_active?: boolean | null
          materials_needed?: string[] | null
          target_saboteurs?: string[] | null
          title: string
          type?: string
          updated_at?: string | null
        }
        Update: {
          content?: Json
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty?: string | null
          estimated_time?: number | null
          follow_up_questions?: string[] | null
          id?: string
          is_active?: boolean | null
          materials_needed?: string[] | null
          target_saboteurs?: string[] | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sleep_tracking: {
        Row: {
          created_at: string | null
          date: string
          hours: number | null
          id: string
          quality: number | null
          source: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          hours?: number | null
          id?: string
          quality?: number | null
          source?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          hours?: number | null
          id?: string
          quality?: number | null
          source?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      subscription_invoices: {
        Row: {
          amount: number
          asaas_payment_id: string | null
          bank_slip_url: string | null
          created_at: string
          due_date: string
          id: string
          invoice_url: string | null
          paid_date: string | null
          payment_method: string | null
          pix_qr_code: string | null
          status: string | null
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          asaas_payment_id?: string | null
          bank_slip_url?: string | null
          created_at?: string
          due_date: string
          id?: string
          invoice_url?: string | null
          paid_date?: string | null
          payment_method?: string | null
          pix_qr_code?: string | null
          status?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          asaas_payment_id?: string | null
          bank_slip_url?: string | null
          created_at?: string
          due_date?: string
          id?: string
          invoice_url?: string | null
          paid_date?: string | null
          payment_method?: string | null
          pix_qr_code?: string | null
          status?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_invoices_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string
          description: string | null
          features: Json | null
          id: string
          interval_count: number | null
          interval_type: string | null
          is_active: boolean | null
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          interval_count?: number | null
          interval_type?: string | null
          is_active?: boolean | null
          name: string
          price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          interval_count?: number | null
          interval_type?: string | null
          is_active?: boolean | null
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      tracking_achievements: {
        Row: {
          achieved_at: string | null
          achievement_type: string
          current_value: number | null
          description: string | null
          icon: string | null
          id: string
          is_milestone: boolean | null
          points_earned: number | null
          streak_days: number | null
          target_value: number | null
          title: string
          tracking_category: string
          user_id: string | null
        }
        Insert: {
          achieved_at?: string | null
          achievement_type: string
          current_value?: number | null
          description?: string | null
          icon?: string | null
          id?: string
          is_milestone?: boolean | null
          points_earned?: number | null
          streak_days?: number | null
          target_value?: number | null
          title: string
          tracking_category: string
          user_id?: string | null
        }
        Update: {
          achieved_at?: string | null
          achievement_type?: string
          current_value?: number | null
          description?: string | null
          icon?: string | null
          id?: string
          is_milestone?: boolean | null
          points_earned?: number | null
          streak_days?: number | null
          target_value?: number | null
          title?: string
          tracking_category?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_type: string
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          progress: number | null
          target: number | null
          title: string
          unlocked_at: string | null
          user_id: string | null
        }
        Insert: {
          achievement_type: string
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          progress?: number | null
          target?: number | null
          title: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Update: {
          achievement_type?: string
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          progress?: number | null
          target?: number | null
          title?: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_anamnesis: {
        Row: {
          biggest_weight_loss_challenge: string | null
          city_state: string | null
          compulsive_eating_situations: string | null
          created_at: string | null
          current_bmi: number | null
          current_weight: number | null
          daily_energy_level: number | null
          daily_stress_level: number | null
          eats_in_secret: boolean | null
          eats_until_uncomfortable: boolean | null
          emotional_events_during_weight_gain: string | null
          family_depression_anxiety_history: boolean | null
          family_diabetes_history: boolean | null
          family_eating_disorders_history: boolean | null
          family_heart_disease_history: boolean | null
          family_obesity_history: boolean | null
          family_other_chronic_diseases: string | null
          family_thyroid_problems_history: boolean | null
          feels_guilt_after_eating: boolean | null
          food_relationship_score: number | null
          forbidden_foods: Json | null
          full_address: string | null
          general_quality_of_life: number | null
          had_rebound_effect: boolean | null
          has_compulsive_eating: boolean | null
          height_cm: number | null
          highest_adult_weight: number | null
          how_found_method: string | null
          id: string
          ideal_weight_goal: number | null
          least_effective_treatment: string | null
          lowest_adult_weight: number | null
          main_treatment_goals: string | null
          major_weight_gain_periods: string | null
          marital_status: string | null
          most_effective_treatment: string | null
          motivation_for_seeking_treatment: string | null
          physical_activity_frequency: string | null
          physical_activity_type: string | null
          previous_weight_treatments: Json | null
          problematic_foods: Json | null
          profession: string | null
          sleep_hours_per_night: number | null
          sleep_quality_score: number | null
          timeframe_to_achieve_goal: string | null
          treatment_success_definition: string | null
          updated_at: string | null
          user_id: string
          weight_fluctuation_classification: string | null
          weight_gain_started_age: number | null
        }
        Insert: {
          biggest_weight_loss_challenge?: string | null
          city_state?: string | null
          compulsive_eating_situations?: string | null
          created_at?: string | null
          current_bmi?: number | null
          current_weight?: number | null
          daily_energy_level?: number | null
          daily_stress_level?: number | null
          eats_in_secret?: boolean | null
          eats_until_uncomfortable?: boolean | null
          emotional_events_during_weight_gain?: string | null
          family_depression_anxiety_history?: boolean | null
          family_diabetes_history?: boolean | null
          family_eating_disorders_history?: boolean | null
          family_heart_disease_history?: boolean | null
          family_obesity_history?: boolean | null
          family_other_chronic_diseases?: string | null
          family_thyroid_problems_history?: boolean | null
          feels_guilt_after_eating?: boolean | null
          food_relationship_score?: number | null
          forbidden_foods?: Json | null
          full_address?: string | null
          general_quality_of_life?: number | null
          had_rebound_effect?: boolean | null
          has_compulsive_eating?: boolean | null
          height_cm?: number | null
          highest_adult_weight?: number | null
          how_found_method?: string | null
          id?: string
          ideal_weight_goal?: number | null
          least_effective_treatment?: string | null
          lowest_adult_weight?: number | null
          main_treatment_goals?: string | null
          major_weight_gain_periods?: string | null
          marital_status?: string | null
          most_effective_treatment?: string | null
          motivation_for_seeking_treatment?: string | null
          physical_activity_frequency?: string | null
          physical_activity_type?: string | null
          previous_weight_treatments?: Json | null
          problematic_foods?: Json | null
          profession?: string | null
          sleep_hours_per_night?: number | null
          sleep_quality_score?: number | null
          timeframe_to_achieve_goal?: string | null
          treatment_success_definition?: string | null
          updated_at?: string | null
          user_id: string
          weight_fluctuation_classification?: string | null
          weight_gain_started_age?: number | null
        }
        Update: {
          biggest_weight_loss_challenge?: string | null
          city_state?: string | null
          compulsive_eating_situations?: string | null
          created_at?: string | null
          current_bmi?: number | null
          current_weight?: number | null
          daily_energy_level?: number | null
          daily_stress_level?: number | null
          eats_in_secret?: boolean | null
          eats_until_uncomfortable?: boolean | null
          emotional_events_during_weight_gain?: string | null
          family_depression_anxiety_history?: boolean | null
          family_diabetes_history?: boolean | null
          family_eating_disorders_history?: boolean | null
          family_heart_disease_history?: boolean | null
          family_obesity_history?: boolean | null
          family_other_chronic_diseases?: string | null
          family_thyroid_problems_history?: boolean | null
          feels_guilt_after_eating?: boolean | null
          food_relationship_score?: number | null
          forbidden_foods?: Json | null
          full_address?: string | null
          general_quality_of_life?: number | null
          had_rebound_effect?: boolean | null
          has_compulsive_eating?: boolean | null
          height_cm?: number | null
          highest_adult_weight?: number | null
          how_found_method?: string | null
          id?: string
          ideal_weight_goal?: number | null
          least_effective_treatment?: string | null
          lowest_adult_weight?: number | null
          main_treatment_goals?: string | null
          major_weight_gain_periods?: string | null
          marital_status?: string | null
          most_effective_treatment?: string | null
          motivation_for_seeking_treatment?: string | null
          physical_activity_frequency?: string | null
          physical_activity_type?: string | null
          previous_weight_treatments?: Json | null
          problematic_foods?: Json | null
          profession?: string | null
          sleep_hours_per_night?: number | null
          sleep_quality_score?: number | null
          timeframe_to_achieve_goal?: string | null
          treatment_success_definition?: string | null
          updated_at?: string | null
          user_id?: string
          weight_fluctuation_classification?: string | null
          weight_gain_started_age?: number | null
        }
        Relationships: []
      }
      user_assessments: {
        Row: {
          areas: Json
          assessment_type: string
          completed_at: string | null
          created_at: string | null
          id: string
          scores: Json
          total_score: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          areas: Json
          assessment_type: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          scores: Json
          total_score: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          areas?: Json
          assessment_type?: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          scores?: Json
          total_score?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_custom_saboteurs: {
        Row: {
          created_at: string | null
          id: string
          saboteur_id: string | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          saboteur_id?: string | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          saboteur_id?: string | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_custom_saboteurs_saboteur_id_fkey"
            columns: ["saboteur_id"]
            isOneToOne: false
            referencedRelation: "custom_saboteurs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorite_foods: {
        Row: {
          created_at: string
          food_category: string
          food_name: string
          id: string
          last_used: string | null
          nutrition_data: Json | null
          usage_count: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          food_category: string
          food_name: string
          id?: string
          last_used?: string | null
          nutrition_data?: Json | null
          usage_count?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          food_category?: string
          food_name?: string
          id?: string
          last_used?: string | null
          nutrition_data?: Json | null
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_goals: {
        Row: {
          category: string | null
          challenge_id: string | null
          created_at: string | null
          current_value: number | null
          data_fim: string | null
          data_inicio: string | null
          difficulty: string | null
          estimated_points: number | null
          evidence_required: boolean | null
          gordura_corporal_meta_percent: number | null
          id: string
          imc_meta: number | null
          is_group_goal: boolean | null
          peso_meta_kg: number | null
          status: string | null
          target_date: string | null
          target_value: number | null
          unit: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          challenge_id?: string | null
          created_at?: string | null
          current_value?: number | null
          data_fim?: string | null
          data_inicio?: string | null
          difficulty?: string | null
          estimated_points?: number | null
          evidence_required?: boolean | null
          gordura_corporal_meta_percent?: number | null
          id?: string
          imc_meta?: number | null
          is_group_goal?: boolean | null
          peso_meta_kg?: number | null
          status?: string | null
          target_date?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          challenge_id?: string | null
          created_at?: string | null
          current_value?: number | null
          data_fim?: string | null
          data_inicio?: string | null
          difficulty?: string | null
          estimated_points?: number | null
          evidence_required?: boolean | null
          gordura_corporal_meta_percent?: number | null
          id?: string
          imc_meta?: number | null
          is_group_goal?: boolean | null
          peso_meta_kg?: number | null
          status?: string | null
          target_date?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_missions: {
        Row: {
          completed_at: string | null
          date_assigned: string
          id: string
          is_completed: boolean | null
          mission_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          date_assigned?: string
          id?: string
          is_completed?: boolean | null
          mission_id: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          date_assigned?: string
          id?: string
          is_completed?: boolean | null
          mission_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_missions_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "missions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_physical_data: {
        Row: {
          altura_cm: number
          created_at: string | null
          id: string
          idade: number
          nivel_atividade: string | null
          sexo: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          altura_cm: number
          created_at?: string | null
          id?: string
          idade: number
          nivel_atividade?: string | null
          sexo: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          altura_cm?: number
          created_at?: string | null
          id?: string
          idade?: number
          nivel_atividade?: string | null
          sexo?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed_at: string | null
          id: string
          is_completed: boolean | null
          lesson_id: string
          user_id: string
          watch_time_seconds: number | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id: string
          user_id: string
          watch_time_seconds?: number | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id?: string
          user_id?: string
          watch_time_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_scores: {
        Row: {
          created_at: string | null
          current_level: number | null
          daily_score: number | null
          date: string | null
          id: string
          level_points: number | null
          missions_completed: number | null
          streak_days: number | null
          total_missions: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          current_level?: number | null
          daily_score?: number | null
          date?: string | null
          id?: string
          level_points?: number | null
          missions_completed?: number | null
          streak_days?: number | null
          total_missions?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          current_level?: number | null
          daily_score?: number | null
          date?: string | null
          id?: string
          level_points?: number | null
          missions_completed?: number | null
          streak_days?: number | null
          total_missions?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          assigned_at: string | null
          completed_at: string | null
          created_at: string | null
          due_date: string | null
          feedback: Json | null
          id: string
          notes: string | null
          progress: number | null
          session_id: string | null
          started_at: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          due_date?: string | null
          feedback?: Json | null
          id?: string
          notes?: string | null
          progress?: number | null
          session_id?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          due_date?: string | null
          feedback?: Json | null
          id?: string
          notes?: string | null
          progress?: number | null
          session_id?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_sessions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          asaas_customer_id: string | null
          canceled_at: string | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_id: string | null
          status: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          asaas_customer_id?: string | null
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string | null
          status?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          asaas_customer_id?: string | null
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string | null
          status?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      water_tracking: {
        Row: {
          amount_ml: number
          created_at: string | null
          date: string
          id: string
          source: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount_ml: number
          created_at?: string | null
          date: string
          id?: string
          source?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount_ml?: number
          created_at?: string | null
          date?: string
          id?: string
          source?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      weekly_analyses: {
        Row: {
          created_at: string | null
          id: string
          media_imc: number | null
          observacoes: string | null
          peso_final: number | null
          peso_inicial: number | null
          semana_fim: string
          semana_inicio: string
          tendencia: string | null
          user_id: string | null
          variacao_gordura_corporal: number | null
          variacao_massa_muscular: number | null
          variacao_peso: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          media_imc?: number | null
          observacoes?: string | null
          peso_final?: number | null
          peso_inicial?: number | null
          semana_fim: string
          semana_inicio: string
          tendencia?: string | null
          user_id?: string | null
          variacao_gordura_corporal?: number | null
          variacao_massa_muscular?: number | null
          variacao_peso?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          media_imc?: number | null
          observacoes?: string | null
          peso_final?: number | null
          peso_inicial?: number | null
          semana_fim?: string
          semana_inicio?: string
          tendencia?: string | null
          user_id?: string | null
          variacao_gordura_corporal?: number | null
          variacao_massa_muscular?: number | null
          variacao_peso?: number | null
        }
        Relationships: []
      }
      weekly_insights: {
        Row: {
          average_energy: number | null
          average_mood: number | null
          average_stress: number | null
          created_at: string | null
          exercise_frequency: number | null
          id: string
          most_common_gratitude: string | null
          sleep_consistency: number | null
          streak_days: number | null
          total_points: number | null
          user_id: string | null
          water_consistency: number | null
          week_start_date: string
        }
        Insert: {
          average_energy?: number | null
          average_mood?: number | null
          average_stress?: number | null
          created_at?: string | null
          exercise_frequency?: number | null
          id?: string
          most_common_gratitude?: string | null
          sleep_consistency?: number | null
          streak_days?: number | null
          total_points?: number | null
          user_id?: string | null
          water_consistency?: number | null
          week_start_date: string
        }
        Update: {
          average_energy?: number | null
          average_mood?: number | null
          average_stress?: number | null
          created_at?: string | null
          exercise_frequency?: number | null
          id?: string
          most_common_gratitude?: string | null
          sleep_consistency?: number | null
          streak_days?: number | null
          total_points?: number | null
          user_id?: string | null
          water_consistency?: number | null
          week_start_date?: string
        }
        Relationships: []
      }
      weighings: {
        Row: {
          basal_metabolism: number | null
          bmi: number | null
          body_fat: number | null
          body_water: number | null
          bone_mass: number | null
          created_at: string
          device_type: string | null
          id: string
          metabolic_age: number | null
          muscle_mass: number | null
          user_id: string
          weight: number
        }
        Insert: {
          basal_metabolism?: number | null
          bmi?: number | null
          body_fat?: number | null
          body_water?: number | null
          bone_mass?: number | null
          created_at?: string
          device_type?: string | null
          id?: string
          metabolic_age?: number | null
          muscle_mass?: number | null
          user_id: string
          weight: number
        }
        Update: {
          basal_metabolism?: number | null
          bmi?: number | null
          body_fat?: number | null
          body_water?: number | null
          bone_mass?: number | null
          created_at?: string
          device_type?: string | null
          id?: string
          metabolic_age?: number | null
          muscle_mass?: number | null
          user_id?: string
          weight?: number
        }
        Relationships: []
      }
      weight_measurements: {
        Row: {
          agua_corporal_percent: number | null
          body_fat_percent: number | null
          bone_mass_kg: number | null
          circunferencia_abdominal_cm: number | null
          circunferencia_braco_cm: number | null
          circunferencia_perna_cm: number | null
          created_at: string | null
          device_type: string | null
          gordura_corporal_percent: number | null
          gordura_visceral: number | null
          id: string
          idade_metabolica: number | null
          imc: number | null
          massa_muscular_kg: number | null
          measurement_date: string | null
          metabolic_age: number | null
          metabolismo_basal_kcal: number | null
          muscle_mass_kg: number | null
          notes: string | null
          osso_kg: number | null
          overall_health_score: number | null
          peso_kg: number
          risco_metabolico: string | null
          user_id: string | null
          visceral_fat_level: number | null
          vitality_score: number | null
          water_percent: number | null
        }
        Insert: {
          agua_corporal_percent?: number | null
          body_fat_percent?: number | null
          bone_mass_kg?: number | null
          circunferencia_abdominal_cm?: number | null
          circunferencia_braco_cm?: number | null
          circunferencia_perna_cm?: number | null
          created_at?: string | null
          device_type?: string | null
          gordura_corporal_percent?: number | null
          gordura_visceral?: number | null
          id?: string
          idade_metabolica?: number | null
          imc?: number | null
          massa_muscular_kg?: number | null
          measurement_date?: string | null
          metabolic_age?: number | null
          metabolismo_basal_kcal?: number | null
          muscle_mass_kg?: number | null
          notes?: string | null
          osso_kg?: number | null
          overall_health_score?: number | null
          peso_kg: number
          risco_metabolico?: string | null
          user_id?: string | null
          visceral_fat_level?: number | null
          vitality_score?: number | null
          water_percent?: number | null
        }
        Update: {
          agua_corporal_percent?: number | null
          body_fat_percent?: number | null
          bone_mass_kg?: number | null
          circunferencia_abdominal_cm?: number | null
          circunferencia_braco_cm?: number | null
          circunferencia_perna_cm?: number | null
          created_at?: string | null
          device_type?: string | null
          gordura_corporal_percent?: number | null
          gordura_visceral?: number | null
          id?: string
          idade_metabolica?: number | null
          imc?: number | null
          massa_muscular_kg?: number | null
          measurement_date?: string | null
          metabolic_age?: number | null
          metabolismo_basal_kcal?: number | null
          muscle_mass_kg?: number | null
          notes?: string | null
          osso_kg?: number | null
          overall_health_score?: number | null
          peso_kg?: number
          risco_metabolico?: string | null
          user_id?: string | null
          visceral_fat_level?: number | null
          vitality_score?: number | null
          water_percent?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_session_to_users: {
        Args: {
          session_id_param: string
          user_ids_param: string[]
          admin_user_id?: string
        }
        Returns: Json
      }
      calculate_daily_tracking_score: {
        Args: { p_user_id: string; p_date: string }
        Returns: number
      }
      calculate_heart_rate_zones: {
        Args: { age: number; resting_hr?: number }
        Returns: Json
      }
      cleanup_old_ai_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_orphaned_user_sessions: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      sync_device_data: {
        Args: {
          p_user_id: string
          p_integration_name: string
          p_device_type: string
          p_data: Json
        }
        Returns: number
      }
      user_has_active_subscription: {
        Args: { user_uuid: string }
        Returns: boolean
      }
      user_has_content_access: {
        Args: {
          user_uuid: string
          content_type_param: string
          content_id_param: string
        }
        Returns: boolean
      }
      verify_and_restore_ai_config: {
        Args: { func_name: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
