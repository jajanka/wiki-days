import { BirthItem } from '@/app/lib/types/Birthday';
import styles from './ListingCard.module.css';
import Image from 'next/image';

const ListingCard = ({ item }: { item: BirthItem }) => {
  const person = item.pages[0];

  return person ? (
    <a href={person.content_urls.desktop.page} className={styles.item} target="_blank">
      <div className={styles.text}>{`${item.text} (b. ${item.year})`}</div>
      {person.thumbnail && (
        <Image
          className={styles.image}
          src={person.thumbnail.source}
          alt={item.text}
          width={person.thumbnail.width}
          height={person.thumbnail.height}
        />
      )}
    </a>
  ) : (
    <div className={styles.item}>
      <div className={styles.text}>{`${item.text} (b. ${item.year})`}</div>
    </div>
  );
};

export default ListingCard;
