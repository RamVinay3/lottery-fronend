import { HomeIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'; // For v2

import styles from '../_Stylings/bottom-nav.module.css';
import Link from 'next/link';


export default function BottomNav() {
  return (
    <div className={styles.navContainer}>
      <Link href="/home" className={styles.navItem}>
        <HomeIcon className={`${styles.icon} ${styles.homeIcon}`} /> {/* Home icon */}
      </Link>
      <Link href="/event-history" className={styles.navItem}>
        <ClockIcon className={`${styles.icon} ${styles.eventHistoryIcon}`} /> {/* Event History icon */}
      </Link>
      <Link href="/profile" className={styles.navItem}>
        <UserIcon className={`${styles.icon} ${styles.profileIcon}`} /> {/* Profile icon */}
      </Link>
    </div>
  );
}

