import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="text-black text-sm font-medium hover:underline focus:outline-none"
    >
      BACK
    </button>
  );
};

export default BackButton;
