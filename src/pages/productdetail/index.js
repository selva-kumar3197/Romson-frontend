import BringingCareCloser from '@/components/BringingCareCloser'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Template from '@/components/Template'
import Head from 'next/head'
import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button1 from '@/components/Button1/Button1'
import Slide from 'react-reveal/Slide';
import SlideSentence from '@/components/SlideSentence'

function ProductDetail() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "flex", right: 20, background: "white", borderRadius: 44, width: 73, height: 73, justifyContent: "center", alignItems: "center" }}
                onClick={onClick}
            >
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0715671 10.5003L20.9287 10.5003M20.9287 10.5003L11.9899 1.56152M20.9287 10.5003L11.9899 19.4391" stroke="#006C68" stroke-width="2.23469" />
                </svg>


            </div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "flex", left: 33, zIndex: 5, background: "white", borderRadius: 44, width: 47, height: 47, justifyContent: "center", alignItems: "center" }}
                onClick={onClick}
            >
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2142 6.50022L1.78564 6.50022M1.78564 6.50022L7.54075 0.745117M1.78564 6.50022L7.54075 12.2553" stroke="#006C68" stroke-width="1.43878" />
                </svg>



            </div>
        );
    }

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

    const dropdowns = [
        'Key Features',
        'Technical Specifications',
        'User Instructions',
        'Unit Consist Of'
    ]

    const [selectedData, setSelectedData] = useState(null)
    const [isDelectedDataOpen, setIsDelectedDataOpen] = useState(false)

    return (
        <Template>
            <Head>
                <title>ProductDetails - Romsons</title>
            </Head>
            <LazyLoad>
                <Header />
            </LazyLoad>

            <LazyLoad>
                <Slide bottom>
                    <div className='productDetailsection1_main'>
                        <Slide bottom delay={800}>
                            <div className='w-[510px] !w'>
                                <p className='productDetailsection1_cta'>
                                    <SlideSentence delay={10}>{"Transfusion"}</SlideSentence>
                                </p>
                                <h1 className='productDetailsection1_productTitle'>
                                    Intra Cath®-2
                                </h1>
                                <p className='productDetailsection1_productdescription'>
                                    Introducing Intra Cath®-2, our advanced medical catheter designed for precision and safety in medical procedures. Engineered with cutting-edge technology, it ensures optimal performance and patient comfort. Elevate your healthcare standards with Intra Cath®-2 today
                                </p>

                                <div className='mt-[45px]'>
                                    {dropdowns.map((item, index) => (
                                        <div key={item} className={selectedData === item ? 'productDetailsection1_productfeaturemainactive' : "productDetailsection1_productfeaturemain"}>
                                            <div className='flex justify-between items-center' onClick={() => { setSelectedData(selectedData === item ? null : item); }}>
                                                <h1 className='productDetailsection1_productKeys'>{item}</h1>
                                                {selectedData == item ? <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1H20" stroke="#006C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                    : <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.5 1.5V20.5" stroke="#006C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M1 11H20" stroke="#006C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>}
                                            </div>
                                            {selectedData === item &&
                                                <div className="dropdown-content">
                                                    {item == 'Key Features' &&
                                                        <div className='mt-[28px]'>
                                                            <p className='productDetailsection1_keyFeaturesDropdown'>Conventional I.V. Cannula.</p>
                                                            <p className='productDetailsection1_keyFeaturesDropdown'>Provided with wing, injection port and luer lock.</p>
                                                        </div>
                                                    }
                                                    {item == 'Technical Specifications' &&
                                                        <div className='mt-[28px]'>
                                                        </div>
                                                    }
                                                    {item == 'User Instructions' && <p>Content for Dropdown 3</p>}
                                                    {item == 'Unit Consist Of' && <p>Content for Dropdown 4</p>}
                                                </div>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Slide>
                        <Slide right delay={300}>
                            <div className='productDetailsection1_leftside'>
                                <div className='productDetailsection1_mainslider'>
                                    <Slider {...settings}>
                                        {productList.map((imageUrl, index) => (
                                            <div key={index}>
                                                <img width={757} height={753} src={imageUrl?.image} alt={`Image ${index + 1}`} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className='productDetailsection1_mainsliderbottombutton'>
                                    Enquire Product
                                </div>
                            </div>
                        </Slide>
                    </div>
                </Slide>
            </LazyLoad>

            <LazyLoad>
                <div className='productDetailsection2_main'>
                    <Slide left>
                        <h1 className='productDetailsection2_title'>
                            Similar Products
                        </h1>
                        <p className='productDetailsection2_description'>
                            Products you might also like to explore
                        </p>
                    </Slide>
                    <Slide right>

                        <div className='flex gap-[25px]  w-full scroll-smooth overflow-x-scroll scrollscurson' style={{ scrollbarWidth: "none" }}>
                            {productList?.map((item, index) => (
                                <div key={item} className='productDetailsection2_cardsconatiner'>
                                    <div className='productDetailsection2_cards'>
                                        <div className='p-[22px]'>
                                            <p className='productDetailsection2_cardstag'>
                                                Transfusion
                                            </p>
                                        </div>
                                        <h1 className='productDetailsection2_cardsTitle'>
                                            {item?.title}
                                        </h1>
                                        <div className='productDetailsection2_cardsImage '>
                                            <img width={382} height={254} className='object-cover' src={item?.image} alt="" />
                                            <Button1 text={"Explore"} classes={'border-[#AAEFDF] border-[1px]'} />
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </Slide>
                </div>
            </LazyLoad>

            <LazyLoad>
                <BringingCareCloser />
            </LazyLoad>

            <LazyLoad>
                <Footer />
            </LazyLoad>
        </Template>
    )
}

export default ProductDetail;