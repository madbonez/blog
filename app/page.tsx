import Image from 'next/image';
import { Header } from './_components/Header';
import { Hello } from './_components/hello/Hello';
import { Search } from './_components/Search';
import { Card } from './_components/Card';

export default function Home() {
  return (
    <>
      <Hello />
      <div className={`mt-16`}>
        <Search />
        <div className={`mt-6 flex flex-wrap justify-between pb-6 sm:pb-24`}>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
          <div className={`mt-2 lg:mt-10`}>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
