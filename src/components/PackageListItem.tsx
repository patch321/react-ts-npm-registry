import { Link } from 'react-router-dom';
import { PackageSummary } from '../api/types/packageSummary';

interface PackageListItemProps {
  pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
  const uniqueKeywords = Array.from(new Set(pack.keywords || []));
  const renderedKeywords = uniqueKeywords.map((keyword) => (
    <div className='border py-0.5 px-1 text-xs bg-slate-200 rounded' key={keyword}>
      {keyword}
    </div>
  ));
  return (
    <div className='border p-4 rounded flex justify-between items-center'>
      <div className='flex flex-col gap-2'>
        <Link to={`/packages/${encodeURIComponent(pack.name)}`} className='text-xl font-bold'>
          {pack.name}
        </Link>
        <p className='text-sm text-gray-500'>{pack.description}</p>
        <div className='flex gap-1'>{renderedKeywords}</div>
      </div>
      <div className='mr-6'>
        <Link to={`/packages/${encodeURIComponent(pack.name)}`} className='py-2 px-3 rounded bg-black text-white text-lg'>
          View
        </Link>
      </div>
    </div>
  );
}
