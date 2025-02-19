import { create } from 'zustand';
import { BirthsResponse } from '@/app/lib/types/Birthday';

type State = {
  birthdays: BirthsResponse | null;
  loading: boolean;
  setBirthdays: (birthdays: BirthsResponse) => void;
  setLoading: (loading: boolean) => void;
};

const useStore = create<State>()((set) => ({
  birthdays: null,
  loading: false,
  setBirthdays: (birthdays: BirthsResponse) => {
    const sortedBirthdays = {
      ...birthdays,
      births: birthdays.births.sort((a, b) => b.year - a.year),
    };
    set({ birthdays: sortedBirthdays });
  },
  setLoading: (loading: boolean) => set({ loading }),
}));

export default useStore;
