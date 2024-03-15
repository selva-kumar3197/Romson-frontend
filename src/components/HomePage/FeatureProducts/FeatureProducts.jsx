import SwapButton from '@/components/SwapButton';
import React from 'react'
import Slide from 'react-reveal/Slide';

function FeatureProducts() {
    const productList = [
        {
            id: 1,
            title: "Rms Infusion Set",
            image: "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/FeatureProducts/ed9a86f13eda81ca3e09f63c735e533d.png",
            link: "",
        },
        {
            id: 2,
            title: "Intra Cath®-2",
            image: "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/FeatureProducts/2597a8c1e5239de775ce47d4041d4039.png",
            link: "",
        },
        {
            id: 3,
            title: "Romo Vac Set ®",
            image: "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/FeatureProducts/a8ed5cd97264d9def3a8f5a66e942b9d.png",
            link: "",
        },
        {
            id: 4,
            title: "Bi-Valve ®",
            image: "https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/FeatureProducts/fc0dd47e4452534a432a687b59d01d6d.png",
            link: "",
        },

    ]
    return (
        <div className='featureProducts_Top'>
            <div className='featureProducts_Main'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Slide left>
                            <p className='featureProducts_TitleText'>Featured Products</p>
                        </Slide>
                        <Slide right>
                            <p className='featureProducts_paratext'>
                                Explore our wide range of high-quality disposable medical devices and accessories.
                            </p>
                        </Slide>
                    </div>
                    <div className='hidden lg:flex items-center  mr-[4rem] '>
                        <span className='relative'>
                            <svg className="absolute" style={{ right: "30px", top: "47%", zIndex: 2 }} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9603 11.6423C15.18 11.862 15.18 12.2181 14.9603 12.4378L9.22541 18.1727C9.00573 18.3923 8.64963 18.3923 8.42996 18.1727L8.16476 17.9075C7.94508 17.6878 7.94508 17.3317 8.16476 17.112L13.2367 12.0401L8.16476 6.96812C7.94508 6.74844 7.94508 6.39234 8.16476 6.17267L8.42996 5.90747C8.64963 5.68779 9.00573 5.68779 9.22541 5.90747L14.9603 11.6423Z" fill="#006C68" />
                            </svg>
                            <SwapButton
                                className={"mt-6 text-lg "}
                                width={"254px"}
                                text="View All Products"
                                background1={"#fff"}
                                background2={"#AAEFDF"}
                                color1={"#006C68"}
                                color2={"#006C68"}
                            />
                        </span>
                        {/* <span className='flex justify-center align-center'>

                            View All Products
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9603 11.6423C15.18 11.862 15.18 12.2181 14.9603 12.4378L9.22541 18.1727C9.00573 18.3923 8.64963 18.3923 8.42996 18.1727L8.16476 17.9075C7.94508 17.6878 7.94508 17.3317 8.16476 17.112L13.2367 12.0401L8.16476 6.96812C7.94508 6.74844 7.94508 6.39234 8.16476 6.17267L8.42996 5.90747C8.64963 5.68779 9.00573 5.68779 9.22541 5.90747L14.9603 11.6423Z" fill="#006C68" />
                            </svg>
                        </span> */}
                    </div>
                </div>
                <div className='productList_MainCardsConatainer'>
                    {
                        productList?.map((item, index) => (
                            <Slide right key={index}>
                                <div key={index} className='productList_MainCards'>
                                    <h1 className='productList_MainCardsHeaderText'>
                                        {item?.title}
                                    </h1>
                                    <div className=' flex justify-center items-center'>
                                        <div className="request-loader">
                                            <img src={item.image} alt="" />
                                            <div className='featureProductExploreButton'>
                                                Explore
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        ))
                    }
                </div>
                <div className='lg:hidden flex items-center featureProducts_button1 mr-[4rem] '>
                    View All Products
                </div>
            </div>

        </div>
    )
}

export default FeatureProducts