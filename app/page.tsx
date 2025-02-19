'use client';

import { useState } from 'react';
import styles from './page.module.css';
import useStore from '@/app/providers/store';
import BirthdayAction from './components/BirthdayAction';
import Pagination from './components/Pagination';
import Listing from './components/Listing';
import Modal from './components/Modal';

export default function Home() {
  const setError = useStore((state) => state.setError);
  const birthdays = useStore((state) => state.birthdays);
  const error = useStore((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className={`${styles.title} ${birthdays && birthdays.births.length > 0 ? styles['has-results'] : ''}`}
      >
        Notable birthdays on this day
      </div>

      <div className={styles.container}>
        {!birthdays && <BirthdayAction />}

        {birthdays && birthdays.births.length < 1 && (
          <div className={styles.noData}>No data available</div>
        )}
      </div>

      {birthdays && birthdays.births.length > 0 && (
        <>
          <Listing items={birthdays} pageNumber={currentPage} />
          <Pagination
            totalItems={birthdays.births.length}
            pageNumber={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
      <Modal
        isOpen={error !== null}
        onClose={() => setError(null)}
        title="Could not fetch birthdays"
      >
        <>
          <div>There was an error fetching birthdays. Please try again later.</div>
          <div className={styles['original-error']}>({error})</div>
        </>
      </Modal>
    </>
  );
}
