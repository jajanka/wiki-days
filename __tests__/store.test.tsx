import useStore from '@/app/providers/store';

const mockBeforeSort = {
  births: [
    {
      year: 2000,
      text: 'Test',
      pages: [],
    },
    {
      year: 1995,
      text: 'Test',
      pages: [],
    },
    {
      year: 2005,
      text: 'Test',
      pages: [],
    },
    {
      year: 1996,
      text: 'Test',
      pages: [],
    },
  ],
};

const mockAfterSort = {
  births: [
    {
      year: 2005,
      text: 'Test',
      pages: [],
    },
    {
      year: 2000,
      text: 'Test',
      pages: [],
    },
    {
      year: 1996,
      text: 'Test',
      pages: [],
    },
    {
      year: 1995,
      text: 'Test',
      pages: [],
    },
  ],
};

describe('Store', () => {
  it('should sort birthdays by year', () => {
    const { setBirthdays } = useStore.getState();
    setBirthdays(mockBeforeSort);
    expect(useStore.getState().birthdays).toEqual(mockAfterSort);
  });
});
