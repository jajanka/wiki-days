import { BirthItem } from '@/app/lib/types/Birthday';
import styles from './ListingCard.module.css';
import Image from 'next/image';

const ListingCard = ({ item }: { item: BirthItem }) => {
  const person = item.pages[0];
  return (
    <a href={person.content_urls.desktop.page} className={styles.item} target="_blank">
      {item.text}
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
  );
};

export default ListingCard;
