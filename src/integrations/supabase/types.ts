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
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          cost_estimate: number | null
          created_at: string | null
          doctor_id: string
          hospital_id: string | null
          id: string
          notes: string | null
          patient_id: string
          status: Database["public"]["Enums"]["appointment_status"] | null
          treatment_id: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          cost_estimate?: number | null
          created_at?: string | null
          doctor_id: string
          hospital_id?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          treatment_id?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          cost_estimate?: number | null
          created_at?: string | null
          doctor_id?: string
          hospital_id?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          treatment_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_treatment_id_fkey"
            columns: ["treatment_id"]
            isOneToOne: false
            referencedRelation: "treatments"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          available_days: string[] | null
          available_hours: string | null
          bio: string | null
          consultation_fee_usd: number | null
          created_at: string | null
          education: string[] | null
          experience_years: number | null
          hospital_id: string | null
          id: string
          image_url: string | null
          languages: string[] | null
          name: string
          rating: number | null
          specialization: string
          sub_specializations: string[] | null
          total_reviews: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          available_days?: string[] | null
          available_hours?: string | null
          bio?: string | null
          consultation_fee_usd?: number | null
          created_at?: string | null
          education?: string[] | null
          experience_years?: number | null
          hospital_id?: string | null
          id?: string
          image_url?: string | null
          languages?: string[] | null
          name: string
          rating?: number | null
          specialization: string
          sub_specializations?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          available_days?: string[] | null
          available_hours?: string | null
          bio?: string | null
          consultation_fee_usd?: number | null
          created_at?: string | null
          education?: string[] | null
          experience_years?: number | null
          hospital_id?: string | null
          id?: string
          image_url?: string | null
          languages?: string[] | null
          name?: string
          rating?: number | null
          specialization?: string
          sub_specializations?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctors_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitals"
            referencedColumns: ["id"]
          },
        ]
      }
      hospitals: {
        Row: {
          accreditations: string[] | null
          address: string | null
          bed_count: number | null
          city: string
          created_at: string | null
          description: string | null
          email: string | null
          established_year: number | null
          gallery_urls: string[] | null
          id: string
          image_url: string | null
          location: string
          name: string
          phone: string | null
          rating: number | null
          specializations: string[] | null
          state: string
          total_reviews: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          accreditations?: string[] | null
          address?: string | null
          bed_count?: number | null
          city: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          established_year?: number | null
          gallery_urls?: string[] | null
          id?: string
          image_url?: string | null
          location: string
          name: string
          phone?: string | null
          rating?: number | null
          specializations?: string[] | null
          state: string
          total_reviews?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          accreditations?: string[] | null
          address?: string | null
          bed_count?: number | null
          city?: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          established_year?: number | null
          gallery_urls?: string[] | null
          id?: string
          image_url?: string | null
          location?: string
          name?: string
          phone?: string | null
          rating?: number | null
          specializations?: string[] | null
          state?: string
          total_reviews?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          budget_range: string | null
          coordinator_response: string | null
          created_at: string | null
          id: string
          message: string
          patient_id: string
          phone: string | null
          preferred_location: string | null
          status: Database["public"]["Enums"]["inquiry_status"] | null
          treatment_category: string
          updated_at: string | null
        }
        Insert: {
          budget_range?: string | null
          coordinator_response?: string | null
          created_at?: string | null
          id?: string
          message: string
          patient_id: string
          phone?: string | null
          preferred_location?: string | null
          status?: Database["public"]["Enums"]["inquiry_status"] | null
          treatment_category: string
          updated_at?: string | null
        }
        Update: {
          budget_range?: string | null
          coordinator_response?: string | null
          created_at?: string | null
          id?: string
          message?: string
          patient_id?: string
          phone?: string | null
          preferred_location?: string | null
          status?: Database["public"]["Enums"]["inquiry_status"] | null
          treatment_category?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inquiries_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          country: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          rating: number
          reviewer_id: string
          target_id: string
          target_type: string
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rating: number
          reviewer_id: string
          target_id: string
          target_type: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number
          reviewer_id?: string
          target_id?: string
          target_type?: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      treatments: {
        Row: {
          category: string
          cost_range_max: number | null
          cost_range_min: number | null
          created_at: string | null
          description: string | null
          duration_days: number | null
          id: string
          name: string
          recovery_time_days: number | null
          requirements: string[] | null
          success_rate: number | null
          updated_at: string | null
        }
        Insert: {
          category: string
          cost_range_max?: number | null
          cost_range_min?: number | null
          created_at?: string | null
          description?: string | null
          duration_days?: number | null
          id?: string
          name: string
          recovery_time_days?: number | null
          requirements?: string[] | null
          success_rate?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          cost_range_max?: number | null
          cost_range_min?: number | null
          created_at?: string | null
          description?: string | null
          duration_days?: number | null
          id?: string
          name?: string
          recovery_time_days?: number | null
          requirements?: string[] | null
          success_rate?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      appointment_status: "pending" | "confirmed" | "completed" | "cancelled"
      inquiry_status: "new" | "in_progress" | "responded" | "closed"
      user_role: "patient" | "hospital" | "doctor" | "admin"
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
    Enums: {
      appointment_status: ["pending", "confirmed", "completed", "cancelled"],
      inquiry_status: ["new", "in_progress", "responded", "closed"],
      user_role: ["patient", "hospital", "doctor", "admin"],
    },
  },
} as const
