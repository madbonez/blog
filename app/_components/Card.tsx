import Link from 'next/link';
import Image from 'next/image';

export function Card() {
  return (
    <div
      className={`p-4 w-full lg:w-[300px] border-color-border border-2 rounded-md shrink-0 flex-wrap`}
    >
      <h2 className={`flex justify-between items-start`}>
        <Link href={'/note'}>Заголовок очень длинный как собака</Link>
        <div
          className={`space-x-1 flex text-color-span items-center shrink-0 ml-2`}
        >
          <Image src={`date.svg`} width={12} height={12} alt={`github`} />
          <small className={`shrink-0`}>12 сен</small>
        </div>
      </h2>
      <div className={`mt-4`}>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </div>
    </div>
  );
}
