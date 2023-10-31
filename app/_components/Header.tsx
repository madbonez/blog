import { Coda } from 'next/font/google';
import Image from 'next/image';

const coda = Coda({ weight: '400', subsets: ['latin'] });

export function Header() {
  return (
    <div className={`bg-color-profile relative`}>
      <div className={`h-80 flex justify-between overflow-hidden relative`}>
        <div
          className={`bg-[url('/effect1.svg')] h-[188px] bg-no-repeat w-1/2 bg-right lg:bg-left`}
        ></div>

        <div
          className={`flex flex-col items-center ${coda.className} text-color-blue pt-20 w-[180px] shrink-0`}
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

        <div
          className={`bg-[url('/effect2.svg')] h-[236px] bg-no-repeat w-1/2 bg-left lg:bg-right`}
        ></div>

        <div
          className={`absolute bottom-2 left-0 right-0 ml-auto mr-auto w-[500px] h-12 bg-color-hero blur-[212px] shadow-[212px_212px_212px]`}
        ></div>
      </div>
    </div>
  );
}
