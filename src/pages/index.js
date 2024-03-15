import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

import MainHome from '@/components/Home/Home'
import Template from "@/components/Template"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Template>
      <MainHome />
    </Template>
  )
}
