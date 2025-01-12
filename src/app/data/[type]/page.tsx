import { notFound } from 'next/navigation';
import DataDisplay from '../../../components/DataDisplay';
import BackButton from '../../../components/BackButton';
import CacheUpdater from '../../../components/CacheUpdater';

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export const revalidate = 3600;

export default async function DataPage({ params }: PageProps) {
  const { type } = await params;

  const validTypes = ['posts', 'albums', 'users'];
  if (!validTypes.includes(type)) {
    notFound();
  }

  const data = await fetchData(type);

  return (
    <div>
      <h2>Displaying {type}</h2>
      <DataDisplay data={data} type={type} />
      <BackButton />
      <CacheUpdater type={type} />
    </div>
  );
}

async function fetchData(type: string) {
  console.log(`Fetching data for type: ${type}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`, {
    next: { revalidate: 3600, tags: [`data-${type}`] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
