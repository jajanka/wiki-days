'use client';

import styles from './Listing.module.css';
import React, { useCallback } from 'react';
import ListingCard from '@/app/components/ListingCard';
import { BirthsResponse } from '@/app/lib/types/Birthday';
import { ITEMS_PER_PAGE } from '@/app/lib/constants';

type ListingProps = {
  items: BirthsResponse;
  pageNumber: number;
  itemsPerPage?: number;
};

const Listing = ({ items, pageNumber, itemsPerPage = ITEMS_PER_PAGE }: ListingProps) => {
  const totalItems = items.births.length;

  const paginatedBirthdays = useCallback(() => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.births.slice(startIndex, endIndex);
  }, [items.births, itemsPerPage, pageNumber]);

  return (
    <>
      <div className={styles['list-container']}>
        {paginatedBirthdays().map((item, index) => (
          <React.Fragment key={index}>
            <ListingCard item={item} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Listing;
