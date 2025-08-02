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

        if (error) {
          console.error('Supabase error:', error);
          // If no data in database, use mock data
          setHospitals(getMockHospitals());
        } else {
          setHospitals(data || getMockHospitals());
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setHospitals(getMockHospitals());
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

        if (error) {
          console.error('Supabase error:', error);
          // If no data in database, use mock data
          setDoctors(getMockDoctors());
        } else {
          setDoctors(data || getMockDoctors());
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setDoctors(getMockDoctors());
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

        if (error) {
          console.error('Supabase error:', error);
          // If no data in database, use mock data
          setTreatments(getMockTreatments());
        } else {
          setTreatments(data || getMockTreatments());
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setTreatments(getMockTreatments());
        setError(err instanceof Error ? err.message : 'Failed to fetch treatments');
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  return { treatments, loading, error };
};

// Mock data functions
const getMockHospitals = () => [
  {
    id: '1',
    name: 'Apollo Hospitals',
    location: 'Delhi, Mumbai, Chennai',
    city: 'Delhi',
    state: 'Delhi',
    rating: 4.8,
    total_reviews: 2840,
    specializations: ['Cardiac Surgery', 'Oncology', 'Transplants'],
    accreditations: ['JCI', 'NABH'],
    description: "Asia's leading healthcare group with over 70 hospitals across India.",
    image_url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Fortis Healthcare',
    location: 'Delhi, Bangalore, Mumbai',
    city: 'Delhi',
    state: 'Delhi',
    rating: 4.7,
    total_reviews: 1920,
    specializations: ['Orthopedics', 'Neuroscience', 'Fertility'],
    accreditations: ['JCI', 'NABH', 'ISO'],
    description: 'Renowned for advanced medical technology and expert medical professionals.',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop'
  }
];

const getMockDoctors = () => [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiothoracic Surgery',
    experience_years: 25,
    rating: 4.9,
    total_reviews: 342,
    consultation_fee_usd: 150,
    education: ['MBBS', 'MS Cardiothoracic Surgery', 'Fellowship Harvard'],
    languages: ['English', 'Hindi', 'Tamil'],
    image_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialization: 'Neurosurgery',
    experience_years: 18,
    rating: 4.8,
    total_reviews: 278,
    consultation_fee_usd: 180,
    education: ['MBBS', 'MCh Neurosurgery', 'Fellowship Johns Hopkins'],
    languages: ['English', 'Hindi', 'Punjabi'],
    image_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
  }
];

const getMockTreatments = () => [
  {
    id: '1',
    name: 'Cardiac Bypass Surgery',
    category: 'Cardiology',
    cost_range_min: 8000,
    cost_range_max: 25000,
    duration_days: 7,
    recovery_time_days: 30,
    success_rate: 95.5,
    description: 'Advanced heart surgery to improve blood flow to the heart muscle.'
  },
  {
    id: '2',
    name: 'Hip Replacement',
    category: 'Orthopedics',
    cost_range_min: 6000,
    cost_range_max: 18000,
    duration_days: 3,
    recovery_time_days: 45,
    success_rate: 98.2,
    description: 'Joint replacement surgery to restore mobility and reduce pain.'
  }
];