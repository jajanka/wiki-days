import styles from './Pagination.module.css';
import { ITEMS_PER_PAGE } from '@/app/lib/constants';

type Props = {
  totalItems: number;
  pageNumber: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
};

const Pagination = ({
  totalItems,
  pageNumber,
  itemsPerPage = ITEMS_PER_PAGE,
  onPageChange = () => {},
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  if (totalItems <= itemsPerPage) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <button
        className={'btn'}
        disabled={pageNumber < 2}
        onClick={() => handlePageChange(pageNumber - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages).keys()].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`btn ${pageNumber === page ? styles.active : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={'btn'}
        disabled={pageNumber >= totalPages}
        onClick={() => handlePageChange(pageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
