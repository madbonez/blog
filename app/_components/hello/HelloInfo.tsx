import Image from 'next/image';
import Link from 'next/link';

export function HelloInfo() {
  return (
    <div className={`flex flex-col h-full justify-between`}>
      <div className={`flex justify-between`}>
        <h1>Малов Артем</h1>
        <Link
          href={'https://github.com/madbonez/'}
          target={`_blank`}
          className={`text-color-blue flex space-x-1`}
        >
          <span>github</span>
          <Image src={`ext-link.svg`} width={12} height={12} alt={`github`} />
        </Link>
      </div>
      <span className={`mt-2 text-color-text`}>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </span>
      <div className={`flex space-x-2 text-color-subtitle`}>
        <div className={`space-x-1 flex`}>
          <Image src={`github.svg`} width={12} height={12} alt={`github`} />
          <Link href={'https://github.com/madbonez/'} target={`_blank`}>
            madbonez
          </Link>
        </div>
        <div className={`space-x-1 flex`}>
          <Image src={`subscribers.svg`} width={12} height={12} alt={`subs`} />
          <span>32 читателя</span>
        </div>
      </div>
    </div>
  );
}
