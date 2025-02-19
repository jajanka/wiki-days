import { create } from 'zustand';
import { BirthsResponse } from '@/app/lib/types/Birthday';
import { StoreState } from '@/app/lib/types/Store';

const useStore = create<StoreState>()((set) => ({
  birthdays: null,
  loading: false,
  error: null,
  setBirthdays: (birthdays: BirthsResponse) => {
    const sortedBirthdays = {
      ...birthdays,
      births: birthdays.births.sort((a, b) => a.year - b.year).reverse(),
    };
    set({ birthdays: sortedBirthdays });
  },
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));

export default useStore;
