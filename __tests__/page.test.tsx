import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

jest.useFakeTimers().setSystemTime(1_739_987_188_173);

describe('Main page', () => {
  it('renders visually correct', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
