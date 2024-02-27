import HomeScreen from '@/screen/Home/HomeScreen'
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <HomeScreen />
    </>
  )
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Home | PhotoLand`,
  };
}
 