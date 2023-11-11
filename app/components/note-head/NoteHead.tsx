import Image from 'next/image';
import Link from 'next/link';

export function NoteHead() {
  return (
    <div
      className={`        
        bg-color-profile
        shadow-xl
        rounded-lg
        flex
        p-4
        sm:p-[26px]
      `}
    >
      <div className={`flex flex-col h-full justify-between w-full`}>
        <div className={`flex justify-between mb-4`}>
          <Link
            href={'/'}
            className={`text-color-blue flex space-x-1 align-middle`}
          >
            <span>🏠</span>
          </Link>
          <Link
            href={'https://github.com/madbonez/'}
            target={`_blank`}
            className={`text-color-blue flex space-x-1`}
          >
            <span>github</span>
            <Image
              src={`/ext-link.svg`}
              width={12}
              height={12}
              alt={`github`}
            />
          </Link>
        </div>
        <h1 className={`mb-4`}>JavaScript data types and data structures</h1>
        <div className={`flex space-x-2 text-color-span`}>
          <div className={`flex space-x-2`}>
            <Link
              href={'https://github.com/madbonez/'}
              target={`_blank`}
              className={`space-x-1 flex`}
            >
              <Image
                src={`/github.svg`}
                width={12}
                height={12}
                alt={`github`}
              />
              <span>madbonez</span>
            </Link>
            <div className={`space-x-1 flex`}>
              <Image src={`/date.svg`} width={12} height={12} alt={`github`} />
              <small>12.11.23</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
