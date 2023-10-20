import { Coda } from 'next/font/google';
import Image from 'next/image';

const coda = Coda({ weight: '400', subsets: ['latin'] });

export function Header() {
  return (
    <div className={`bg-color-profile h-80 flex justify-between`}>
      <Image src="effect1.svg" alt={''} width={409} height={188} />

      <div
        className={`flex flex-col items-center ${coda.className} text-color-blue pt-20 shrink-0`}
      >
        <Image
          className={`mb-4`}
          src="logo.svg"
          width={45}
          height={40}
          alt={``}
        />
        TEMAMALOV BLOG
      </div>

      <Image src="effect2.svg" alt={''} width={371} height={236} />
    </div>
  );
}
