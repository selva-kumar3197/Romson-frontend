import Header from '@/components/Header/Header'
import Aboutsection from '@/components/HomePage/About/Aboutsection'
import Blog from '@/components/HomePage/Blog/Blog'
import FeatureProducts from '@/components/HomePage/FeatureProducts/FeatureProducts'
import MedicalInfo from '@/components/HomePage/MedicalInfo/MedicalInfo'
import Section1 from '@/components/HomePage/Section1/Section1'
import Section2 from '@/components/HomePage/Section2/Section2'
import Head from 'next/head'
import React from 'react'
import Footer from '@/components/Footer/Footer'
import NewsEvents from '@/components/HomePage/NewsEvents/NewsEvents'
import LazyLoad from 'react-lazyload';
import BringingCareCloser from '@/components/BringingCareCloser'

function Home() {
    return (
        < >
        <div className=' w-full h-screen'>
            <Head>
                <title>Romsons</title>
            </Head>

            <LazyLoad>
                <Header className='' />
            </LazyLoad>

            <LazyLoad>
                <div className='lg:pt-[30px] lg:px-[64px] pb-16'>
                    <Section1 />
                </div>
            </LazyLoad>

            <LazyLoad>
                <Aboutsection />
            </LazyLoad>

            <LazyLoad>
                <MedicalInfo />
            </LazyLoad>

            <LazyLoad>
                <FeatureProducts />
            </LazyLoad>
            
            <LazyLoad>
                <Blog />
            </LazyLoad>

            <LazyLoad>
                <NewsEvents />
            </LazyLoad>

            <LazyLoad>
                <BringingCareCloser/>
            </LazyLoad>
            
            <LazyLoad>
                <Footer />
            </LazyLoad>
        </div>
        </>
    )
}

export default Home