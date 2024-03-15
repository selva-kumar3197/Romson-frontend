import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import imgUrls from '@/utils/imageURLs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Template from "@/components/Template"
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';

function Quality() {
    const router = useRouter()
    const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

    const certification = [
        { image: imgUrls?.AboutUs?.section5Logo2 }, 
        { image: imgUrls?.AboutUs?.section5Logo1 }, 
        { image: imgUrls?.AboutUs?.section5Logo2 }, 
        { image: imgUrls?.AboutUs?.section5Logo1 }, 
        { image: imgUrls?.AboutUs?.section5Logo2 }
    ];

    const mainImage = [
        { image: imgUrls?.quality?.image1 },
        { image: imgUrls?.quality?.image2 }
    ]


    return (
        <Template>
            <Head>
                <title>Quality And Control - Romsons</title>
            </Head>

            <LazyLoad>
                <Header />
            </LazyLoad>
            
            <LazyLoad>
                <Slide bottom>
                    <div className="quality">
                        <div className="quality_section1">
                            <div className="quality_sectio1_text">
                                <Slide left delay={100}>
                                    <h1 className="text-reveal quality_sectio1_text_heading">{language?.qualityMainText}</h1>
                                </Slide>
                                <Slide right delay={100}>
                                    <span className="quality_sectio1_text_description">{language?.qualityparaText}</span>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </Slide>
            </LazyLoad>

            <LazyLoad>
                <div className='quality_section2'>
                    <div className='quality_section2contentContainer'>
                        <Slide left>
                            <h1 className='quality_section2contentHeadtext'>{language?.qualitysection2HeaderText}</h1>
                        </Slide>
                        <Slide bottom>
                            <div>
                                <p className='quality_section2contentparatext '>{language?.qualitysection2paraText}</p>
                                <p className='quality_section2contentparatext mt-[24px]'>{language?.qualitysection2ulheaderText}</p>
                                <ul className='quality_section2contentul'>
                                    <li>
                                        {language?.qualitysection2li1}
                                    </li>
                                    <li>
                                        {language?.qualitysection2li2}
                                    </li>
                                    <li>
                                        {language?.qualitysection2li3}
                                    </li>
                                    <li>
                                        {language?.qualitysection2li4}
                                    </li>
                                    <li>
                                        {language?.qualitysection2li5}
                                    </li>
                                </ul>
                            </div>
                        </Slide>
                    </div>
                    <div className='quality_section2certificationImageContainer'>
                        {certification?.map((item, index) => (
                            <Slide key={index} bottom delay={100 + (index*200)}>
                                <img key={index} className='w-[147px] h-[147px]' src={item?.image} alt="k" />
                            </Slide>
                        ))}
                    </div>
                    <div className='quality_section2ImageContainer'>
                        {mainImage?.map((item, index) => (
                            <Slide key={index} right={index%2===1} left={index%2===0}>
                            <img key={index} className='quality_section2Imagestyles' src={item?.image} alt="k" />
                            </Slide>
                        ))}
                    </div>
                </div>
            </LazyLoad>

            <LazyLoad>
                <Footer />
            </LazyLoad>
        </Template>
    )
}

export default Quality