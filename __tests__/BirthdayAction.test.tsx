import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BirthdayAction from '@/app/components/BirthdayAction';
import mockAxios from 'jest-mock-axios';
import useStore from '@/app/providers/store';
import { geCurrentMonthAndDate } from '@/app/lib/utils';
import { WIKI_BIRTH_URL } from '@/app/lib/constants';

jest.mock('../app/providers/store', () => {
  const zustand = jest.requireActual('zustand');
  const mockStore = {
    setLoading: jest.fn(),
    setBirthdays: jest.fn(),
    setError: jest.fn(),
  };

  return { __esModule: true, default: zustand.create(() => mockStore) };
});

describe('Action', () => {
  test('on button click does fetch and sets correct loading states', async () => {
    const mockedResponse = { data: { onthisday: { events: [] } } };
    mockAxios.mockResolvedValueOnce(mockedResponse);

    render(<BirthdayAction />);
    const button = screen.getByText('Get Birthdays');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(useStore.getState().setLoading).toHaveBeenCalledWith(true);

    const callUrl = `${WIKI_BIRTH_URL}${geCurrentMonthAndDate()}`;
    expect(mockAxios.get).toHaveBeenCalledWith(callUrl, {
      cancelToken: expect.any(Object),
    });
    mockAxios.mockResponse(mockedResponse);

    await waitFor(() => {
      expect(useStore.getState().setLoading).toHaveBeenCalledWith(false);
    });
  });
});
