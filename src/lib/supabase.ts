import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      pages: {
        Row: {
          id: string;
          slug: string;
          title: string;
          content: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['pages']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['pages']['Row']>;
      };
      services: {
        Row: {
          id: string;
          title: string;
          description: string;
          icon: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['services']['Row']>;
      };
      portfolio: {
        Row: {
          id: string;
          title: string;
          description: string;
          image: string;
          technologies: string[];
          link: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['portfolio']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['portfolio']['Row']>;
      };
      team: {
        Row: {
          id: string;
          name: string;
          role: string;
          bio: string;
          image: string;
          social_links: Record<string, string>;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['team']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['team']['Row']>;
      };
      blog: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          featured_image: string;
          author: string;
          created_at: string;
          updated_at: string;
          published: boolean;
        };
        Insert: Omit<Database['public']['Tables']['blog']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['blog']['Row']>;
      };
      faqs: {
        Row: {
          id: string;
          question: string;
          answer: string;
          category: string;
          order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['faqs']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['faqs']['Row']>;
      };
    };
  };
};
