import SlideSentence from '@/components/SlideSentence'
import React, { useEffect } from 'react'

function Section2() {
    const logo = [
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brang_logo1.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo2.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo3.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo4.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo5.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo6.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo3.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo4.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo5.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo6.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo6.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo3.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo4.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo5.png",
        "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/brand_logo6.png"

    ]
    
    return (
        <div className='w-full flex justify-center'>
            <div className='section2-maindiv'>
                <p className='section2-paratext'>
                    <SlideSentence>{"A Name of trust Across the globe"}</SlideSentence>
                    <svg className='lg:block hidden' xmlns="http://www.w3.org/2000/svg" width="94" height="1" viewBox="0 0 94 1" fill="none">
                        <path d="M1 0.1C0.779086 0.1 0.6 0.279086 0.6 0.5C0.6 0.720914 0.779086 0.9 1 0.9V0.1ZM1 0.9H94V0.1H1V0.9Z" fill="#006C68" />
                    </svg>
                </p>
                <div className='scroll-container'>
                    <div className='section2-main items-center gap-[65px]'>
                        {logo.map((image, index) => (
                            <div key={index} className='logo-item'>
                                <img src={image} alt={`Logo ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section2