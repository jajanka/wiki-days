'use client';

import styles from './Listing.module.css';
import React, { useEffect } from 'react';
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
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedBirthdays = () => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.births.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className={styles.listContainer}>
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
