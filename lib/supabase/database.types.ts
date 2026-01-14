// Generated types for Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      gallery_items: {
        Row: {
          id: string
          tour_slug: string
          tour_name: string
          description: string | null
          images: Json
          display_order: number
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tour_slug: string
          tour_name: string
          description?: string | null
          images: Json
          display_order?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tour_slug?: string
          tour_name?: string
          description?: string | null
          images?: Json
          display_order?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          name: string
          content: string
          rating: number
          location: string | null
          approved: boolean
          created_at: string
          approved_at: string | null
          approved_by: string | null
        }
        Insert: {
          id?: string
          name: string
          content: string
          rating: number
          location?: string | null
          approved?: boolean
          created_at?: string
          approved_at?: string | null
          approved_by?: string | null
        }
        Update: {
          id?: string
          name?: string
          content?: string
          rating?: number
          location?: string | null
          approved?: boolean
          created_at?: string
          approved_at?: string | null
          approved_by?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
