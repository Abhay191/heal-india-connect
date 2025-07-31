import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data, error } = await supabase
          .from('hospitals')
          .select('*')
          .order('rating', { ascending: false })
          .limit(6);

        if (error) throw error;
        setHospitals(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch hospitals');
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  return { hospitals, loading, error };
};

export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from('doctors')
          .select('*')
          .order('rating', { ascending: false })
          .limit(8);

        if (error) throw error;
        setDoctors(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return { doctors, loading, error };
};

export const useTreatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const { data, error } = await supabase
          .from('treatments')
          .select('*')
          .order('name');

        if (error) throw error;
        setTreatments(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch treatments');
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  return { treatments, loading, error };
};