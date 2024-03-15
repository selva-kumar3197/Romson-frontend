import React, { useEffect, useRef, useState } from 'react'
import imgUrls from '@/utils/imageURLs'
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteUrl } from '@/utils/urls';
import { Slide } from 'react-reveal';
import Image from "next/image";
import SwapButton from '@/components/SwapButton';
import imageUrls from "@/utils/imageURLs"
import axios from "axios"
import { countryNames } from "@/utils/constants"

function Header() {
    const router = useRouter()
    const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

    const [country, setCountry] = useState("")

    const [headerMenu, setHeaderMenu] = useState(false)
    const [languageDropdown, setLanguageDropdown] = useState(true)
    const [searchOpen, setSearchOpen] = useState(false)

    // header hide on scroll
    // start
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = () => {
        setScrollTop(window.scrollY);
        setScrolling(window.scrollY > scrollTop);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);
    // end

    const getGeoInfo = async () => {
        await axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setCountry((data?.country_name)?.toLowerCase())
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        // gsap.fromTo('.main-header', { y: '-100', delay: 1 }, { y: 0 });
        getGeoInfo()
    }, []);
    return (
        <Slide top>
            <nav className={`main-header bg-white  fixed z-[50] w-full ${scrolling && "hide-header"} ${searchOpen ? "py-[15px] px-[24px] lg:py-[30px] lg:px-[64px] rounded-b-[40px] lg:rounded-b-[40px] shadow-lg" : "py-[15px] px-[24px] lg:pt-[30px] lg:px-[64px]"}`}>
                <div className=" flex flex-wrap items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div>
                            <Image src={imgUrls?.header?.logo} alt='logo' width="0" height="0" className='w-[135px] h-[36px] lg:w-[289px] lg:h-[77px]' />
                        </div>
                    </Link>

                    <div className='hidden items-center justify-between gap-[40px] lg:flex '>
                        <Link href="/about-us">
                            <div className='text-[18px] font-medium leading-7'>
                                <span className="link_parent link--custom main-nav__link flex ">
                                    <span className="link__inner">
                                        <span className="link__default-text">{language.AboutUs}</span>
                                        <span className="link__hover-text">{language.AboutUs}</span>
                                    </span>
                                </span>
                            </div>
                        </Link>
                        <Link href="/product-list">
                            <div className='text-[#006C68] text-[18px] font-medium leading-7'>
                                <span className="link_parent link--custom main-nav__link d-flex ">
                                    <span className="link__inner">
                                        <span className="link__default-text">{language.Products}</span>
                                        <span className="link__hover-text">{language.Products}</span>
                                    </span>
                                </span>
                            </div>
                        </Link>
                        <Link href="/Contact-us">
                            <div className='text-[#006C68] text-[18px] font-medium leading-7'>
                                <span className="link_parent link--custom main-nav__link d-flex ">
                                    <span className="link__inner">
                                        <span className="link__default-text">{language.Contacts}</span>
                                        <span className="link__hover-text">{language.Contacts}</span>
                                    </span>
                                </span>
                            </div>
                        </Link>
                        <Link href="/blogs">
                            <div className='text-[#006C68] text-[18px] font-medium leading-7'>
                                <span className="link_parent link--custom main-nav__link d-flex ">
                                    <span className="link__inner">
                                        <span className="link__default-text">{language.Blogs}</span>
                                        <span className="link__hover-text">{language.Blogs}</span>
                                    </span>
                                </span>
                            </div>
                        </Link>
                    </div>


                    <div className='lg:order-2 flex justify-between items-center gap-0 lg:gap-[40px]'>
                        <div className="flex items-center space-x-1 lg:space-x-0 rtl:space-x-reverse">
                            <div onClick={() => setSearchOpen(!searchOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px] lg:w-[24px] lg:h-[25px]' width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M18.6543 18.095L21.5838 21.023C21.7204 21.1645 21.796 21.3539 21.7943 21.5506C21.7926 21.7472 21.7137 21.9353 21.5747 22.0744C21.4356 22.2134 21.2475 22.2923 21.0509 22.294C20.8542 22.2957 20.6648 22.2201 20.5233 22.0835L17.5938 19.154C15.6794 20.7942 13.2042 21.6291 10.6875 21.4836C8.17083 21.3382 5.8083 20.2236 4.09568 18.3737C2.38306 16.5239 1.45347 14.0827 1.50199 11.5622C1.55051 9.04181 2.57335 6.63813 4.35589 4.85559C6.13844 3.07305 8.54211 2.0502 11.0625 2.00169C13.583 1.95317 16.0242 2.88275 17.874 4.59537C19.7239 6.308 20.8385 8.67053 20.9839 11.1872C21.1294 13.7039 20.2945 16.1791 18.6543 18.0935V18.095ZM11.2503 20C13.4383 20 15.5368 19.1308 17.0839 17.5836C18.6311 16.0365 19.5003 13.938 19.5003 11.75C19.5003 9.56196 18.6311 7.46354 17.0839 5.91637C15.5368 4.36919 13.4383 3.5 11.2503 3.5C9.06227 3.5 6.96385 4.36919 5.41667 5.91637C3.8695 7.46354 3.0003 9.56196 3.0003 11.75C3.0003 13.938 3.8695 16.0365 5.41667 17.5836C6.96385 19.1308 9.06227 20 11.2503 20Z" fill="#006C68" />
                                </svg>
                            </div>
                            <div>
                                <button onClick={() => { setLanguageDropdown(!languageDropdown) }} type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-[#006C68]  rounded-lg cursor-pointer gap-[10px] lg:gap-[12px] ">
                                    <svg className='hidden lg:block lg:w-[24px] lg:h-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                                        <path d="M12.0003 1.5C18.0756 1.5 23.0003 6.4247 23.0003 12.5C23.0003 18.5753 18.0756 23.5 12.0003 23.5C5.92501 23.5 1.00031 18.5753 1.00031 12.5C1.00031 6.4247 5.92501 1.5 12.0003 1.5ZM12.0003 22.125C12.7175 22.125 13.7372 21.5079 14.6596 19.6632C15.016 18.9504 15.324 18.1111 15.5643 17.175H8.43631C8.67666 18.1111 8.98466 18.9504 9.34106 19.6632C10.2634 21.5079 11.2826 22.125 12.0003 22.125ZM8.14481 15.8H15.8558C16.0291 14.7754 16.1253 13.666 16.1253 12.5C16.1269 11.4874 16.0515 10.4762 15.8998 9.475H8.10081C7.94908 10.4762 7.87369 11.4874 7.87531 12.5C7.87531 13.666 7.97156 14.7754 8.14481 15.8ZM16.98 17.175C16.556 18.9801 15.8932 20.5174 15.0737 21.624C17.3449 20.8557 19.249 19.2698 20.4153 17.175H16.98ZM21.0445 15.8C21.4299 14.7425 21.6265 13.6255 21.6253 12.5C21.6253 11.4434 21.4548 10.4265 21.1402 9.475H17.2902C17.4311 10.4772 17.5013 11.488 17.5003 12.5C17.5003 13.6495 17.4123 14.7583 17.2484 15.8H21.0445ZM6.75221 15.8C6.58292 14.7082 6.4987 13.6049 6.50031 12.5C6.50031 11.4511 6.57346 10.4359 6.71096 9.475H2.86041C2.53808 10.4509 2.3743 11.4722 2.37531 12.5C2.37531 13.6594 2.58046 14.771 2.95611 15.8H6.75221ZM3.58476 17.175C4.7512 19.2699 6.65549 20.8558 8.92691 21.624C8.10741 20.5174 7.44466 18.9801 7.02061 17.175H3.58421H3.58476ZM8.36811 8.1H15.6325C15.3834 7.05225 15.0506 6.1189 14.6596 5.3368C13.7372 3.4921 12.7181 2.875 12.0003 2.875C11.2831 2.875 10.2634 3.4921 9.34106 5.3368C8.95001 6.1189 8.61726 7.0528 8.36811 8.1ZM17.0427 8.1H20.5627C19.4153 5.8728 17.447 4.17885 15.0737 3.37605C15.9345 4.53875 16.6225 6.17555 17.0427 8.1ZM8.92691 3.37605C6.55361 4.17885 4.58533 5.8728 3.43791 8.1H6.95791C7.37811 6.17555 8.06616 4.53875 8.92691 3.37605Z" fill="#006C68" />
                                    </svg>
                                    <div className='flex gap-[10px] items-center text-[12px] lg:text-[18px] uppercase'>
                                        {router.locale || router.defaultLocale}
                                        <svg className='w-[10px] h-[6px] lg:w-[14px] lg:h-[9px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.4815 0.846077C13.6851 1.04995 13.7995 1.32632 13.7995 1.61446C13.7995 1.90261 13.6851 2.17897 13.4815 2.38285L7.68231 8.182C7.47843 8.38563 7.20207 8.5 6.91392 8.5C6.62577 8.5 6.34941 8.38563 6.14553 8.182L0.346381 2.38285C0.239551 2.28331 0.153865 2.16326 0.0944356 2.02988C0.0350059 1.8965 0.00305036 1.75252 0.000474399 1.60652C-0.00210156 1.46052 0.0247549 1.3155 0.0794424 1.18011C0.13413 1.04472 0.215528 0.921728 0.31878 0.818476C0.422032 0.715224 0.545023 0.633825 0.680416 0.579138C0.815809 0.52445 0.96083 0.497593 1.10683 0.500169C1.25283 0.502745 1.39681 0.534701 1.53019 0.594131C1.66357 0.653561 1.78361 0.739247 1.88316 0.846077L6.91392 5.87684L11.9447 0.846077C12.1486 0.642454 12.4249 0.52808 12.7131 0.52808C13.0012 0.52808 13.2776 0.642454 13.4815 0.846077Z" fill="#006C68" />
                                        </svg>
                                    </div>
                                </button>
                                <div className={`z-[80] ${languageDropdown ? "hidden" : ""} absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`} id="language-dropdown-menu">
                                    <ul className=" font-medium" role="none">
                                        <li className='border-b-[1px] border-[#DEE0E3] ' onClick={() => window.open(siteUrl+"/nl", "_self")}>
                                            <Link href="#" className="block px-5 py-4 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">
                                                <div className="inline-flex items-center gap-[8px] font-normal text-black text-[16px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <g clipPath="url(#clip0_2558_1089)">
                                                            <path d="M9.995 20.4154C15.5151 20.4154 19.99 15.9405 19.99 10.4204C19.99 4.90036 15.5151 0.425446 9.995 0.425446C4.47491 0.425446 0 4.90036 0 10.4204C0 15.9405 4.47491 20.4154 9.995 20.4154Z" fill="#F0F0F0" />
                                                            <path d="M9.9949 0.425446C5.69744 0.425446 2.03381 3.13784 0.621582 6.94394H19.3683C17.956 3.13784 14.2924 0.425446 9.9949 0.425446Z" fill="#A2001D" />
                                                            <path d="M9.9949 20.4154C14.2924 20.4154 17.956 17.703 19.3682 13.8969H0.621582C2.03381 17.703 5.69744 20.4154 9.9949 20.4154Z" fill="#0052B4" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2558_1089">
                                                                <rect width="19.99" height="19.99" fill="white" transform="translate(0 0.425446)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Dutch
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='border-b-[1px] border-[#DEE0E3]' onClick={() => window.open(siteUrl+"/es", "_self")}>
                                            <Link href="#" className="block px-5 py-4 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">
                                                <div className="inline-flex items-center gap-[8px] font-normal text-black text-[16px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <g clipPath="url(#clip0_2558_1099)">
                                                            <path d="M0 10.6234C0 11.846 0.219929 13.0168 0.621681 14.0999L9.995 14.9691L19.3683 14.1C19.7701 13.0168 19.99 11.846 19.99 10.6234C19.99 9.40083 19.7701 8.23009 19.3683 7.14692L9.995 6.27779L0.621681 7.14688C0.219929 8.23009 0 9.40083 0 10.6234Z" fill="#FFDA44" />
                                                            <path d="M19.3682 7.14691C17.956 3.34085 14.2924 0.628418 9.9949 0.628418C5.69744 0.628418 2.03381 3.34085 0.621582 7.14691H19.3682ZM0.621582 14.0999C2.03381 17.906 5.69744 20.6184 9.9949 20.6184C14.2924 20.6184 17.956 17.906 19.3682 14.0999H0.621582Z" fill="#D80027" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2558_1099">
                                                                <rect width="19.99" height="19.99" fill="white" transform="translate(0 0.628418)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Spanish
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='border-b-[1px] border-[#DEE0E3]' onClick={() => window.open(siteUrl+"/en", "_self")}>
                                            <Link href="#" className="block px-5 py-4 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">
                                                <div className="inline-flex items-center gap-[8px] font-normal text-black text-[16px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <g clipPath="url(#clip0_2558_1108)">
                                                            <path d="M9.995 20.8648C15.5151 20.8648 19.99 16.3899 19.99 10.8698C19.99 5.34972 15.5151 0.874802 9.995 0.874802C4.47491 0.874802 0 5.34972 0 10.8698C0 16.3899 4.47491 20.8648 9.995 20.8648Z" fill="#F0F0F0" />
                                                            <path d="M2.06603 4.78464C1.28127 5.80613 0.68891 6.98347 0.344238 8.26247H5.5439L2.06603 4.78464ZM19.6455 8.26251C19.3008 6.98354 18.7088 5.8062 17.9237 4.78472L14.446 8.26251H19.6455ZM0.344238 13.4772C0.688988 14.7562 1.281 15.9336 2.06603 16.955L5.54375 13.4772H0.344238ZM16.08 2.94096C15.0586 2.15588 13.8812 1.56391 12.6022 1.21916V6.41879L16.08 2.94104V2.94096ZM3.90972 18.7986C4.9312 19.5834 6.10854 20.1758 7.38751 20.5205V15.3209L3.90972 18.7986ZM7.38747 1.21916C6.1085 1.56391 4.93116 2.15592 3.90972 2.94096L7.38747 6.41871V1.21916ZM12.6023 20.5204C13.8813 20.1757 15.0586 19.5837 16.08 18.7986L12.6023 15.3209V20.5204ZM14.446 13.4772L17.9237 16.955C18.7088 15.9336 19.3008 14.7562 19.6455 13.4772H14.446Z" fill="#0052B4" />
                                                            <path d="M19.9054 9.56577H11.2988V0.959408C10.8719 0.90385 10.4368 0.874802 9.995 0.874802C9.55315 0.874802 9.1181 0.90385 8.69096 0.959408V9.56604H0.0846061C0.029048 9.9929 0 10.428 0 10.8698C0 11.3117 0.029048 11.7467 0.0846061 12.1738H8.69124V20.7805C9.12355 20.8368 9.55905 20.8649 9.995 20.8648C10.4309 20.8648 10.8664 20.8365 11.2987 20.7802V12.1736H19.9054C19.9617 11.7413 19.99 11.3058 19.99 10.8698C19.99 10.4339 19.9617 9.9984 19.9054 9.56612V9.56577ZM12.6024 13.4769L17.0626 17.9374C17.2677 17.7323 17.4634 17.5179 17.6501 17.2957L13.8316 13.4772L12.6024 13.4772L12.6024 13.4769ZM7.38759 13.4769H7.38752L2.92744 17.9374C3.1325 18.1425 3.34688 18.3382 3.56911 18.5249L7.38759 14.7063V13.4772V13.4769ZM7.38759 8.26212V8.26204L2.92744 3.80224C2.72231 4.0073 2.52663 4.22168 2.33992 4.44391L6.15844 8.26243H7.38752L7.38759 8.26212ZM12.6024 8.26212L17.0626 3.80224C16.8575 3.59711 16.6431 3.40143 16.4209 3.21476L12.6024 7.03328V8.26243V8.26212Z" fill="#D80027" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2558_1108">
                                                                <rect width="19.99" height="19.99" fill="white" transform="translate(0 0.874802)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    English
                                                </div>
                                            </Link>
                                        </li>
                                        <li onClick={() => window.open(siteUrl+"/de", "_self")}>
                                            <Link href="#" className="block px-5 py-4 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">
                                                <div className="inline-flex items-center gap-[8px] font-normal text-black text-[16px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <g clipPath="url(#clip0_2558_1116)">
                                                            <path d="M0.621582 14.3463C2.03381 18.1524 5.69744 20.8648 9.9949 20.8648C14.2924 20.8648 17.956 18.1524 19.3682 14.3463L9.9949 13.4772L0.621582 14.3463Z" fill="#FFDA44" />
                                                            <path d="M9.9949 0.874802C5.69744 0.874802 2.03381 3.58719 0.621582 7.3933L9.9949 8.26239L19.3682 7.3933C17.956 3.58719 14.2924 0.874802 9.9949 0.874802Z" fill="black" />
                                                            <path d="M0.621681 7.3933C0.219929 8.47646 0 9.64721 0 10.8698C0 12.0924 0.219929 13.2631 0.621681 14.3463H19.3684C19.7701 13.2631 19.99 12.0924 19.99 10.8698C19.99 9.64721 19.7701 8.47646 19.3683 7.3933H0.621681Z" fill="#D80027" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2558_1116">
                                                                <rect width="19.99" height="19.99" fill="white" transform="translate(0 0.874802)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    German
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <GoogleTranslate/> */}
                            <button onClick={() => setHeaderMenu(!headerMenu)} data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg lg:hidden " aria-controls="navbar-language" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <circle cx="21" cy="21" r="21" fill="#F8F8F8" />
                                    <path d="M12 24.25H30.75M12 18H30.75" stroke="#006C68" strokeWidth="2.05714" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <Link target="_blank" href={country === countryNames?.INDIA ? "https://www.romsons.in/" : "https://www.romsons.com/international"}>
                            <div className='text-[#006C68] hidden lg:block text-[18px] font-medium leading-7 border-[1px] border-[#006C68] rounded-[30px]  new-header-shopnowbutton'>
                                <span className="newlink_parent newlink--custom newmain-nav__link flex ">
                                    <span className="newlink__inner">
                                        <span className="newlink__default-text py-[8px] px-[20px]">{language?.ShopNow}</span>
                                        <span className="newlink__hover-text py-[8px] px-[20px]">{language?.ShopNow}</span>
                                    </span>
                                </span>
                            </div>
                        </Link>
                    </div>


                    <div className={` ${headerMenu ? "hamburgermenu opened " : 'hidden'} w-full  h-full absolute gap-[40px] lg:w-auto lg:order-1 p-4 pe-8`} id="navbar-language" >
                        <div className="headerMobileCard">
                            <div className="flex justify-between align-center p-5 pb-[70px]">
                                <Image src={imgUrls?.header?.logoWhite} width={135} height={36} alt="romsons" />
                                <svg onClick={() =>  setHeaderMenu(false) }xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M30 30L10 10M30 10L10 30" stroke="white" strokeWidth="2.06" strokeLinecap="round"/>
                                </svg>
                            </div>

                            <div className='items-center justify-between w-full gap-[40px] p-5'>
                                <Link href="/about-us">
                                    <div className='text-[18px] font-medium leading-7 mb-3'>
                                        <span className="link_parent link--custom main-nav__link flex ">
                                            <span className="link__inner white">
                                                <span className="link__default-text">{language.AboutUs}</span>
                                                <span className="link__hover-text">{language.AboutUs}</span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                                <Link href="/product-list">
                                    <div className='text-[#fff] text-[18px] font-medium leading-7 mb-3'>
                                        <span className="link_parent link--custom main-nav__link d-flex ">
                                            <span className="link__inner white">
                                                <span className="link__default-text">{language.Products}</span>
                                                <span className="link__hover-text">{language.Products}</span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                                <Link href="/Contact-us">
                                    <div className='text-[#fff] text-[18px] font-medium leading-7 mb-3'>
                                        <span className="link_parent link--custom main-nav__link d-flex ">
                                            <span className="link__inner white">
                                                <span className="link__default-text" >{language.Contacts}</span>
                                                <span className="link__hover-text ">{language.Contacts}</span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                                <Link href="/blogs">
                                    <div className='text-[#fff] text-[18px] font-medium leading-7 mb-3'>
                                        <span className="link_parent link--custom main-nav__link d-flex ">
                                            <span className="link__inner white">
                                                <span className="link__default-text">{language.Blogs}</span>
                                                <span className="link__hover-text">{language.Blogs}</span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div className='pb-4 flex justify-between items-end'>
                                <Link target="_blank" href={country === countryNames?.INDIA ? "https://www.romsons.in/" : "https://www.romsons.com/international"}>
                                    <span className="px-5 h-100">
                                        <SwapButton
                                            className={"mt-6 text-lg"}
                                            // width={"214px"}
                                            text="Shop Now"
                                            background1={"#fff"}
                                            background2={"#fff"}
                                            color1={"#006C68"}
                                            color2={"#006C68"}
                                        />
                                    </span>
                                </Link>
                                <span className="flex justify-end me-2">
                                    <div>
                                        <Image style={{aspectRatio: 1}} className="mb-4 me-4" src={imageUrls?.social?.fb} width="28" height="28" alt="" />
                                        <Image style={{aspectRatio: 1}} className="mb-2 me-4" src={imageUrls?.social?.twitter} width="28" height="28" alt="" />
                                    </div>
                                    <div>
                                        <Image style={{aspectRatio: 1}} className="mb-4 me-4" src={imageUrls?.social?.insta} width="28" height="28" alt="" />
                                        <Image style={{aspectRatio: 1}} className="mb-2 me-4" src={imageUrls?.social?.linkedin} width="28" height="28" alt="" />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    searchOpen && <div className=' h-[68px] mb-[28px] pt-[18px] lg:pt-[38px] lg:mb-[68px]'>
                        <form className='bg-white'>
                            <div className="relative border-b-2 border-[#006C68]">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg className='w-[18px] h-[18px] lg:w-[44px] lg:h-[44px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none">
                                        <path d="M34.199 32.2575L39.5697 37.6255C39.8202 37.8848 39.9588 38.2322 39.9557 38.5927C39.9525 38.9532 39.8079 39.2981 39.553 39.553C39.298 39.8079 38.9532 39.9525 38.5927 39.9557C38.2321 39.9588 37.8848 39.8202 37.6255 39.5697L32.2547 34.199C28.7451 37.206 24.2072 38.7367 19.5932 38.47C14.9793 38.2033 10.648 36.1599 7.50817 32.7685C4.36836 29.3772 2.66412 24.9015 2.75307 20.2808C2.84202 15.66 4.71723 11.2532 7.98523 7.98524C11.2532 4.71725 15.66 2.84203 20.2807 2.75309C24.9015 2.66414 29.3772 4.36837 32.7685 7.50818C36.1598 10.648 38.2033 14.9793 38.47 19.5932C38.7367 24.2072 37.2059 28.7451 34.199 32.2547V32.2575ZM20.625 35.75C24.6364 35.75 28.4835 34.1565 31.32 31.32C34.1565 28.4835 35.75 24.6364 35.75 20.625C35.75 16.6136 34.1565 12.7665 31.32 9.93C28.4835 7.09352 24.6364 5.49999 20.625 5.49999C16.6136 5.49999 12.7665 7.09352 9.92999 9.93C7.0935 12.7665 5.49998 16.6136 5.49998 20.625C5.49998 24.6364 7.0935 28.4835 9.92999 31.32C12.7665 34.1565 16.6136 35.75 20.625 35.75Z" fill="#006C68" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="h-[48px] lg:h-[68px] w-full px-[40px] lg:px-[80px] text-gray-900 rounded-lg outline-none text-[18px] lg:text-[32px] leading-[48px] placeholder:text-[#95A5A5]" placeholder={language.Search} required />
                            </div>
                        </form>
                    </div>
                }

            </nav >
        </Slide>

    )
}

export default Header