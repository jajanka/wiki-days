import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingCard from '@/app/components/ListingCard';
import { BirthItem } from '@/app/lib/types/Birthday';

const mockItemWithPage = {
  text: 'Richard Green, Australian golfer',
  year: 1971,
  pages: [
    {
      type: 'standard',
      title: 'Richard_Green',
      content_urls: {
        desktop: {
          page: 'https://en.wikipedia.org/wiki/Richard_Green',
        },
      },
      thumbnail: {
        source:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example.jpg/120px-Example.jpg',
        width: 120,
        height: 180,
      },
    },
  ],
};

const mockItemWithoutPage = {
  text: 'Richard Green, Australian golfer',
  year: 1971,
  pages: [],
};

describe('Listing card', () => {
  it('renders correctly with detailed info', () => {
    render(<ListingCard item={mockItemWithPage as BirthItem} />);
    expect(screen.getByText('Richard Green, Australian golfer (b. 1971)')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/Richard_Green'
    );
  });

  it('renders correctly without detailed info', () => {
    render(<ListingCard item={mockItemWithoutPage} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
