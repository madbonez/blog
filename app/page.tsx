import Image from 'next/image';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={`absolute w-full h-full top-0 pt-60 flex flex-col items-center`}
      >
        <div className={`bg-color-profile h-[200px] w-[500px] shadow-xl`}></div>
      </div>
    </>
  );
}
