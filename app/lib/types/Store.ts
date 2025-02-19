import { BirthsResponse } from '@/app/lib/types/Birthday';

export type StoreState = {
  birthdays: BirthsResponse | null;
  loading: boolean;
  error: string | null;
  setBirthdays: (birthdays: BirthsResponse) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};
