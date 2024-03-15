import React, { useEffect } from 'react'
import Section2 from '../Section2/Section2'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import SwapButton from '@/components/SwapButton';
import SlideSentence from '@/components/SlideSentence';

function Section1() {
    const router = useRouter()
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    useEffect(() => {
        // gsap.fromTo('.section1-docimage', { scale: 0, display: "none" }, { duration: 2, scale: 1, ease: "circ", display: "flex" });
        // gsap.fromTo('.section2main', {
        //     duration: 1,
        //     ease: 'back.in',
        //     opacity: 1,
        //     display: 'flex',
        // };

        // // Animation for docimage
        // gsap.fromTo('.section1-docimage', { opacity: 0, y: 100 }, { ...commonAnimationSettings, y: 0 });

        // const animationDelay = 0.5; // Adjust this delay as needed

        // const tl = gsap.timeline();

        // // Animation for mainText
        // tl.fromTo('.section1-mainText', { opacity: 0, x: -100 }, { ...commonAnimationSettings, x: 0 });

        // // Animation for paratext, starts after mainText
        // tl.fromTo(
        //     '.section1-paratext',
        //     { opacity: 0, x: -100 },
        //     { ...commonAnimationSettings, x: 0 },
        //     `-=${animationDelay}`
        // );

        // // Animation for button, starts after paratext
        // tl.fromTo(
        //     '.section1-button',
        //     { opacity: 0, x: -100 },
        //     { ...commonAnimationSettings, x: 0 },
        //     `-=${animationDelay}`
        // );

        // // Animation for section2main with scroll trigger
        // gsap.fromTo(
        //     '.section2main',
        //     {
        //         duration: 1,
        //         y: 200,
        //         scrollTrigger: {
        //             start: 'bottom 80%',
        //         },
        //     },
        //     {
        //         duration: 2,
        //         y: 100,
        //         scrollTrigger: {
        //             // Adjust scrollTrigger as needed
        //             start: 'bottom 80%',
        //         },
        //     }
        // );
    }, []);
    return (
        <div>
            <Slide bottom>
                <div className='section1-parentdiv'>
                    <div>
                        <div className='section1-docimage'>
                            <img width='100%' height='100%' className='section1-mainDocImage' src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/homepage-Section1docimage" alt="doc_image" />
                        </div>
                        <div className='lg:absolute lg:top-[25%] lg:left-[48.4%] lg:block hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                                <path opacity="0.3" d="M95 189C146.915 189 189 146.915 189 95C189 43.0852 146.915 1 95 1C43.0852 1 1 43.0852 1 95C1 146.915 43.0852 189 95 189Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M94.9996 181.519C142.783 181.519 181.519 142.783 181.519 94.9996C181.519 47.2164 142.783 8.48047 94.9996 8.48047C47.2164 8.48047 8.48047 47.2164 8.48047 94.9996C8.48047 142.783 47.2164 181.519 94.9996 181.519Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M95.0003 174.04C138.65 174.04 174.036 138.654 174.036 95.0042C174.036 51.3541 138.65 15.9688 95.0003 15.9688C51.3502 15.9688 15.9648 51.3541 15.9648 95.0042C15.9648 138.654 51.3502 174.04 95.0003 174.04Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.6" d="M94.9998 166.554C134.518 166.554 166.554 134.518 166.554 94.9998C166.554 55.4814 134.518 23.4453 94.9998 23.4453C55.4814 23.4453 23.4453 55.4814 23.4453 94.9998C23.4453 134.518 55.4814 166.554 94.9998 166.554Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.7" d="M95.0005 159.071C130.386 159.071 159.071 130.386 159.071 95.0005C159.071 59.6152 130.386 30.9297 95.0005 30.9297C59.6152 30.9297 30.9297 59.6152 30.9297 95.0005C30.9297 130.386 59.6152 159.071 95.0005 159.071Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.8" d="M95.0001 151.59C126.254 151.59 151.59 126.254 151.59 95.0001C151.59 63.7463 126.254 38.4102 95.0001 38.4102C63.7463 38.4102 38.4102 63.7463 38.4102 95.0001C38.4102 126.254 63.7463 151.59 95.0001 151.59Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.9" d="M95.0008 144.107C122.121 144.107 144.107 122.121 144.107 95.0008C144.107 67.8802 122.121 45.8945 95.0008 45.8945C67.8802 45.8945 45.8945 67.8802 45.8945 95.0008C45.8945 122.121 67.8802 144.107 95.0008 144.107Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0004 136.626C117.989 136.626 136.626 117.989 136.626 95.0004C136.626 72.0113 117.989 53.375 95.0004 53.375C72.0113 53.375 53.375 72.0113 53.375 95.0004C53.375 117.989 72.0113 136.626 95.0004 136.626Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.9991 129.139C113.855 129.139 129.141 113.853 129.141 94.9972C129.141 76.1412 113.855 60.8555 94.9991 60.8555C76.1432 60.8555 60.8574 76.1412 60.8574 94.9972C60.8574 113.853 76.1432 129.139 94.9991 129.139Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0006 121.661C109.725 121.661 121.661 109.725 121.661 95.0006C121.661 80.2763 109.725 68.3398 95.0006 68.3398C80.2763 68.3398 68.3398 80.2763 68.3398 95.0006C68.3398 109.725 80.2763 121.661 95.0006 121.661Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.9994 114.178C105.591 114.178 114.176 105.593 114.176 95.0013C114.176 84.4101 105.591 75.8242 94.9994 75.8242C84.4082 75.8242 75.8223 84.4101 75.8223 95.0013C75.8223 105.593 84.4082 114.178 94.9994 114.178Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0009 106.697C101.461 106.697 106.697 101.461 106.697 95.0009C106.697 88.5413 101.461 83.3047 95.0009 83.3047C88.5413 83.3047 83.3047 88.5413 83.3047 95.0009C83.3047 101.461 88.5413 106.697 95.0009 106.697Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='lg:absolute lg:top-[45%] lg:left-[62%] lg:flex lg:items-baseline lg:z-20 hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="33" viewBox="0 0 61 33" fill="none">
                                <ellipse cx="56.6152" cy="29.6425" rx="3.40436" ry="3.35745" transform="rotate(-180 56.6152 29.6425)" fill="white" />
                                <ellipse cx="56.6152" cy="3.35739" rx="3.40436" ry="3.35745" transform="rotate(-180 56.6152 3.35739)" fill="white" />
                                <ellipse cx="30.0096" cy="29.6425" rx="3.40436" ry="3.35745" transform="rotate(-180 30.0096 29.6425)" fill="white" />
                                <ellipse cx="30.0097" cy="3.35739" rx="3.40436" ry="3.35745" transform="rotate(-180 30.0097 3.35739)" fill="white" />
                                <ellipse cx="3.40423" cy="29.6425" rx="3.40436" ry="3.35745" transform="rotate(-180 3.40423 29.6425)" fill="white" />
                                <ellipse cx="3.40423" cy="3.35739" rx="3.40436" ry="3.35745" transform="rotate(-180 3.40423 3.35739)" fill="white" />
                            </svg>
                        </div>
                        <div className='section1-bulrbackgroud'>
                        </div>
                        <div className='lg:py-[118px] px-[24px] py-[32px]'>
                                <p className='section1-mainText'>
                                    <SlideSentence delay={300}>{"Sustaining the life force"}</SlideSentence>
                                </p>
                                <p className='section1-paratext'>
                                    <SlideSentence delay={300}>{"Pioneering in the field of disposable medical devices, leading the way with innovative solutions that improve patient care and safety."}</SlideSentence>
                                </p>
                                <SwapButton
                                    className={"mt-6 text-lg"}
                                    width={"214px"}
                                    text="Learn More"
                                    background1={"#006C68"}
                                    background2={"#fff"}
                                    color1={"#fff"}
                                    color2={"#006C68"}
                                />
                        </div>
                        <div className='lg:absolute lg:bottom-[-15%] lg:left-[52%] lg:flex lg:items-baseline lg:z-[-10] hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="33" viewBox="0 0 60 33" fill="none">
                                <ellipse cx="3.40323" cy="3.35736" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                                <ellipse cx="3.40323" cy="29.6425" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                                <ellipse cx="30.0009" cy="3.35733" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                                <ellipse cx="30.0009" cy="29.6425" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                                <ellipse cx="56.5946" cy="3.35733" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                                <ellipse cx="56.5946" cy="29.6425" rx="3.40323" ry="3.35733" fill="#6CAFAB" fillOpacity="0.37" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                                <path opacity="0.3" d="M95 189C146.915 189 189 146.915 189 95C189 43.0852 146.915 1 95 1C43.0852 1 1 43.0852 1 95C1 146.915 43.0852 189 95 189Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M94.9996 181.519C142.783 181.519 181.519 142.783 181.519 94.9996C181.519 47.2164 142.783 8.48047 94.9996 8.48047C47.2164 8.48047 8.48047 47.2164 8.48047 94.9996C8.48047 142.783 47.2164 181.519 94.9996 181.519Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M95.0003 174.04C138.65 174.04 174.036 138.654 174.036 95.0042C174.036 51.3541 138.65 15.9688 95.0003 15.9688C51.3502 15.9688 15.9648 51.3541 15.9648 95.0042C15.9648 138.654 51.3502 174.04 95.0003 174.04Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.6" d="M94.9998 166.554C134.518 166.554 166.554 134.518 166.554 94.9998C166.554 55.4814 134.518 23.4453 94.9998 23.4453C55.4814 23.4453 23.4453 55.4814 23.4453 94.9998C23.4453 134.518 55.4814 166.554 94.9998 166.554Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.7" d="M95.0005 159.071C130.386 159.071 159.071 130.386 159.071 95.0005C159.071 59.6152 130.386 30.9297 95.0005 30.9297C59.6152 30.9297 30.9297 59.6152 30.9297 95.0005C30.9297 130.386 59.6152 159.071 95.0005 159.071Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.8" d="M95.0001 151.59C126.254 151.59 151.59 126.254 151.59 95.0001C151.59 63.7463 126.254 38.4102 95.0001 38.4102C63.7463 38.4102 38.4102 63.7463 38.4102 95.0001C38.4102 126.254 63.7463 151.59 95.0001 151.59Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.9" d="M95.0008 144.107C122.121 144.107 144.107 122.121 144.107 95.0008C144.107 67.8802 122.121 45.8945 95.0008 45.8945C67.8802 45.8945 45.8945 67.8802 45.8945 95.0008C45.8945 122.121 67.8802 144.107 95.0008 144.107Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0004 136.626C117.989 136.626 136.626 117.989 136.626 95.0004C136.626 72.0113 117.989 53.375 95.0004 53.375C72.0113 53.375 53.375 72.0113 53.375 95.0004C53.375 117.989 72.0113 136.626 95.0004 136.626Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.9991 129.139C113.855 129.139 129.141 113.853 129.141 94.9972C129.141 76.1412 113.855 60.8555 94.9991 60.8555C76.1432 60.8555 60.8574 76.1412 60.8574 94.9972C60.8574 113.853 76.1432 129.139 94.9991 129.139Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0006 121.661C109.725 121.661 121.661 109.725 121.661 95.0006C121.661 80.2763 109.725 68.3398 95.0006 68.3398C80.2763 68.3398 68.3398 80.2763 68.3398 95.0006C68.3398 109.725 80.2763 121.661 95.0006 121.661Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.9994 114.178C105.591 114.178 114.176 105.593 114.176 95.0013C114.176 84.4101 105.591 75.8242 94.9994 75.8242C84.4082 75.8242 75.8223 84.4101 75.8223 95.0013C75.8223 105.593 84.4082 114.178 94.9994 114.178Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.0009 106.697C101.461 106.697 106.697 101.461 106.697 95.0009C106.697 88.5413 101.461 83.3047 95.0009 83.3047C88.5413 83.3047 83.3047 88.5413 83.3047 95.0009C83.3047 101.461 88.5413 106.697 95.0009 106.697Z" stroke="#4A3AFF" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className='section2main'>
                        <Section2 />
                    </div>

                </div>
            </Slide>
        </div>
    )
}

export default Section1