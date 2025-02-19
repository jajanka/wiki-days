'use client';

import styles from './BirthdayAction.module.css';
import React from 'react';
import useStore from '@/app/providers/store';
import axios, { CancelTokenSource } from 'axios';
import { geCurrentMonthAndDate, getDateString } from '@/app/lib/utils';
import { WIKI_BIRTH_URL } from '@/app/lib/constants';

const BirthdayAction = () => {
  const setLoading = useStore((state) => state.setLoading);
  const setBirthdays = useStore((state) => state.setBirthdays);
  const setError = useStore((state) => state.setError);
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
        setError(error.message || 'An error occurred');
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <button className="btn btn-full" onClick={handleFetchBirthdays}>
        Get Birthdays
      </button>
      <div className={styles['date-title']}>{getDateString()}</div>
    </>
  );
};

export default BirthdayAction;
