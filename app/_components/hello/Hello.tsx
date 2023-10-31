import Image from 'next/image';
import { HelloInfo } from './HelloInfo';

export function Hello() {
  return (
    <div
      className={`        
        bg-color-profile
        shadow-xl
        rounded-lg
        flex
        space-x-0
        sm:space-x-6
        p-4
        sm:p-[26px]
        h-full
      `}
    >
      <Image
        className={`hidden sm:block`}
        src="avatar.png"
        alt={``}
        width={148}
        height={148}
      />

      <HelloInfo />
    </div>
  );
}
