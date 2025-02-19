import { create } from 'zustand';
import { BirthsResponse } from '@/app/lib/types/Birthday';

type State = {
  birthdays: BirthsResponse | null;
  loading: boolean;
  error: string | null;
  setBirthdays: (birthdays: BirthsResponse) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

const useStore = create<State>()((set) => ({
  birthdays: null,
  loading: false,
  error: null,
  setBirthdays: (birthdays: BirthsResponse) => {
    const sortedBirthdays = {
      ...birthdays,
      births: birthdays.births.sort((a, b) => b.year - a.year),
    };
    set({ birthdays: sortedBirthdays });
  },
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));

export default useStore;
