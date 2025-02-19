'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { fetchBirthdays } from '@/app/lib/services';
import useStore from '@/app/providers/store';
import Pagination from './components/Pagination';
import Listing from './components/Listing';
import Modal from './components/Modal';
import axios, { CancelTokenSource } from 'axios';
import { geCurrentMonthAndDate, getDateString } from './lib/utils';
import { WIKI_BIRTH_URL } from './lib/constants';

export default function Home() {
  const setLoading = useStore((state) => state.setLoading);
  const setBirthdays = useStore((state) => state.setBirthdays);
  const birthdays = useStore((state) => state.birthdays);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let cancelToken: CancelTokenSource;

  const handleFetchBirthdays = async () => {
    setLoading(true);

    if (cancelToken) {
      cancelToken.cancel('Operation canceled by the user.');
    }

    cancelToken = axios.CancelToken.source();

    axios
      .get(`${WIKI_BIRTH_URL}${geCurrentMonthAndDate()}`, {
        cancelToken: cancelToken.token,
      })
      .then((response) => {
        setBirthdays(response.data);
        // setBirthdays({ births: [] });
      })
      .catch((error) => {
        setIsModalOpen(true);
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  const onPageChange = (page: number) => {
    console.log(page, '_page');
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className={`${styles.title} ${birthdays && birthdays.births.length > 0 ? styles.hasResults : ''}`}
      >
        Notable birthdays on this day
      </div>
      {!birthdays && (
        <div className={styles.container}>
          <button className="btn btn-full" onClick={handleFetchBirthdays}>
            Get Birthdays
          </button>
          <div className={styles.dateTitle}>{getDateString()}</div>
        </div>
      )}

      {birthdays && birthdays.births.length < 1 && (
        <div className={styles.container}>
          <div className={styles.noData}>No data available</div>
        </div>
      )}

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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Could not fetch birthdays"
      >
        <p>There was an error fetching birthdays. Please try again later.</p>
      </Modal>
    </>
  );
}
