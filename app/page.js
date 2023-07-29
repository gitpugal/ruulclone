import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Protocol from '@/components/Protocol';
import Work from '@/components/Work';
import Solutions from '@/components/Solutions';
import Questions from '@/components/Questions';
import UserStories from '@/components/UserStories';
import Grow from '@/components/Grow';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import {BiSolidMessageDetail} from 'react-icons/bi';

export default function Home() {
  return (
    <div className='w-screen bg-[#f6f8fe]  overflow-x-hidden overflow-y-scroll h-screen '>
      <Navbar />
      <Hero />
      <Protocol />
      <Work />
      <Solutions />
      <Questions />
      <UserStories />
      <Grow />
      <Subscribe />
      <Footer />
      <BiSolidMessageDetail className='absolute bottom-10 right-10 bg-[#003e39] rounded-full p-2 shadow-md' color='white' size={70}/>
    </div>
  )
}
