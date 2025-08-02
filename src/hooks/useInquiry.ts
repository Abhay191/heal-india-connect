import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

interface InquiryData {
  treatmentCategory: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  preferredLocation?: string;
  budgetRange?: string;
}

export const useInquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitInquiry = async (data: InquiryData) => {
    console.log("Submitting inquiry with data:", data);
    setIsSubmitting(true);
    
    try {
      // For now, we'll create a simple inquiry without authentication
      // In a real app, you'd want proper user authentication
      
      // First, let's try to create or get a profile for this email
      let profileId: string;
      
      // Check if profile exists with this email
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', data.email)
        .single();

      if (existingProfile) {
        profileId = existingProfile.id;
      } else {
        // Create a temporary profile for the inquiry
        const { data: newProfile, error: profileError } = await supabase
          .from('profiles')
          .insert({
            email: data.email,
            full_name: data.name,
            phone: data.phone,
            user_id: crypto.randomUUID(), // Temporary UUID for guest users
            role: 'patient'
          })
          .select('id')
          .single();

        if (profileError) {
          console.error('Profile creation error:', profileError);
          throw new Error('Failed to create profile');
        }
        
        profileId = newProfile.id;
      }

      // Submit inquiry
      const { error } = await supabase
        .from('inquiries')
        .insert({
          patient_id: profileId,
          treatment_category: data.treatmentCategory,
          message: data.message || `Treatment inquiry for ${data.treatmentCategory} from ${data.name}`,
          phone: data.phone,
          preferred_location: data.preferredLocation,
          budget_range: data.budgetRange,
          status: 'new'
        });

      if (error) {
        console.error('Inquiry submission error:', error);
        throw error;
      }

      toast.success("Inquiry submitted successfully!", {
        description: "Our team will contact you within 24 hours."
      });

      return true;
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error("Submission failed", {
        description: "Please try again or contact support directly."
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitInquiry,
    isSubmitting,
  };
};