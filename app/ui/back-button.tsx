import { useRouter } from 'next/navigation';
import styles from './back-button.module.css';

const BackButton: React.FC = ({}) => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles['back-button']}>
      <span>&lt; BACK</span>
    </button>
  );
};

export default BackButton;
