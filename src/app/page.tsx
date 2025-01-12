'use client';

import { useRouter } from 'next/navigation';
import ButtonGroup from '../components/ButtonGroup';

export default function Home() {
  const router = useRouter();

  const handleClick = (type: string) => {
    router.push(`/data/${type}`);
  };

  return (
    <div>
      <h2>Select Data to Fetch:</h2>
      <ButtonGroup onClick={handleClick} />
    </div>
  );
}
