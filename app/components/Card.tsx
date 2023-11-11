import Image from 'next/image';
import Link from 'next/link';

export function Card({
  header,
  description,
  date,
  slug,
}: {
  header: string;
  description: string;
  date: string;
  slug: string[];
}) {
  return (
    <div
      className={`p-4 w-full lg:w-[300px] border-color-border border-2 rounded-md shrink-0 flex-wrap`}
    >
      <h2 className={`flex justify-between items-start`}>
        <Link href={slug.length > 1 ? slug.join('/') : slug[0]}>{header}</Link>
        <div
          className={`space-x-1 flex text-color-span items-center shrink-0 ml-2`}
        >
          <Image src={`/date.svg`} width={12} height={12} alt={`github`} />
          <small className={`shrink-0`}>{date}</small>
        </div>
      </h2>
      <div className={`mt-4`}>{description}</div>
    </div>
  );
}
