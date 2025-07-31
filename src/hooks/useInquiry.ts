import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();

  const submitInquiry = async (data: InquiryData) => {
    console.log("Submitting inquiry with data:", data);
    setIsSubmitting(true);
    
    try {
      // First, we need to check if the user has a profile
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // Handle anonymous inquiry - for now, we'll show a message
        toast({
          title: "Sign up required",
          description: "Please sign up to submit your inquiry. We'll contact you shortly!",
          variant: "destructive",
        });
        return;
      }

      // Get user's profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!profile) {
        toast({
          title: "Profile not found",
          description: "Please complete your profile first.",
          variant: "destructive",
        });
        return;
      }

      // Submit inquiry
      const { error } = await supabase
        .from('inquiries')
        .insert({
          patient_id: profile.id,
          treatment_category: data.treatmentCategory,
          message: data.message || `Treatment inquiry for ${data.treatmentCategory}`,
          phone: data.phone,
          preferred_location: data.preferredLocation,
          budget_range: data.budgetRange,
        });

      if (error) throw error;

      toast({
        title: "Inquiry submitted successfully!",
        description: "Our team will contact you within 24 hours.",
      });

      return true;
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive",
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