import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React, { useState } from 'react'
import Template from "@/components/Template"
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';

function ContactUS() {
    const [formData, setFormData] = useState({
        name: "",
        emailid: "",
        Subject: "",
        YourCity: "",
        YourCountry: "",
        Message: ""
    })
    return (
        <Template>
            <Head>
                <title>Contact Us - Romsons</title>
            </Head>

            <LazyLoad>
                <Header />
            </LazyLoad>

            <LazyLoad>
                <Slide bottom>
                    <div className="ContactUs">
                        <div className="ContactUs_section1">
                            <div className="ContactUs_sectio1_text">
                                <Slide left>
                                <h1 className="text-reveal ContactUs_sectio1_text_heading">Contact us for Unmatched Quality</h1>
                                </Slide>
                                <Slide right>
                                    <span className="ContactUs_sectio1_text_description">Lets chat about your medical device needs and elevate healthcare safety. Because your well-being matters to us.</span>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </Slide>
            </LazyLoad>
            <LazyLoad>
                <div className='contactus_section2'>
                    <div className='contactus_section2headercontainer'>
                        <Slide left >
                            <h1 className='contactus_section2headerMainText'>Reach out today</h1>
                        </Slide>
                        <svg width="668" height="481" viewBox="0 0 668 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8233 191.791C17.8233 191.791 80.3006 275.99 159.412 271.242C270.159 264.693 312.643 160.673 300.305 130.327C287.966 99.9807 243.483 111.933 256.184 156.872C268.405 200.492 319.701 230.924 369.912 204.491C419.937 177.945 430.585 114.871 500.924 130.452" stroke="#006C68" strokeWidth="0.6181" stroke-miterlimit="10" stroke-dasharray="3.3 3.3" />
                            <path d="M515.486 88.7868L478.799 121.334L522.874 113.927L664.598 134.665L515.486 88.7868Z" fill="#FFC727" />
                            <path d="M515.486 88.7868L478.799 121.334L522.874 113.927L664.598 134.665L515.486 88.7868Z" fill="#93D8C8" />
                            <path d="M521.748 125.285L478.799 121.347L522.874 113.939L521.748 125.285Z" fill="#006C68" />
                            <path d="M522.873 113.937L664.597 134.675L516.266 177.113L522.873 113.937Z" fill="#AAEFDF" />
                            <path d="M515.486 88.7979L483.2 30.3398L664.598 134.676L515.486 88.7979Z" fill="#AAEFDF" />
                        </svg>
                    </div>
                    <div className='contactus_section2bottomconatiner'>
                        <Slide bottom delay={0}>
                            <div className='contactus_section2bottomtextconatiner'>
                                <h1 className='contactus_section2bottomheadertext'>
                                    General Inquiries
                                </h1>
                                <div className='flex items-center text-[#006C68] text-[20px] leading-[30px] gap-[28px] font-semibold mt-[32px]'>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.71059 2.90245C7.43217 2.20641 6.75804 1.75 6.00838 1.75H3.48684C2.52761 1.75 1.75 2.52742 1.75 3.48665C1.75 11.6401 8.35988 18.25 16.5133 18.25C17.4726 18.25 18.25 17.4723 18.25 16.5131L18.2504 13.9911C18.2504 13.2415 17.7941 12.5675 17.0981 12.289L14.6814 11.3227C14.0561 11.0726 13.3443 11.1852 12.8269 11.6163L12.2032 12.1365C11.4748 12.7435 10.403 12.6952 9.73251 12.0247L7.9762 10.2668C7.30572 9.59632 7.25617 8.52539 7.8632 7.79696L8.3833 7.17327C8.8144 6.65596 8.92795 5.9439 8.67786 5.31867L7.71059 2.90245Z" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    ( +91-11-42630000 | +91-562- 6620000 )
                                </div>
                                <div className='flex items-center text-[#006C68] text-[20px] leading-[30px] gap-[28px] font-semibold mt-[10px]'>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.66667 5.49967L9.26533 9.72758L9.2672 9.72913C9.88886 10.185 10.1999 10.4131 10.5405 10.5012C10.8416 10.5791 11.1581 10.5791 11.4592 10.5012C11.8002 10.413 12.1121 10.1843 12.7349 9.72758C12.7349 9.72758 16.3259 6.97179 18.3333 5.49967M2.75 14.4832V7.51652C2.75 6.48976 2.75 5.97599 2.94982 5.58382C3.12559 5.23886 3.40585 4.9586 3.75081 4.78283C4.14299 4.58301 4.65675 4.58301 5.68351 4.58301H16.3168C17.3436 4.58301 17.8563 4.58301 18.2484 4.78283C18.5934 4.9586 18.8746 5.23886 19.0504 5.58382C19.25 5.97561 19.25 6.48875 19.25 7.51351V14.4863C19.25 15.511 19.25 16.0234 19.0504 16.4152C18.8746 16.7602 18.5934 17.0409 18.2484 17.2167C17.8567 17.4163 17.3443 17.4163 16.3195 17.4163H5.6805C4.65574 17.4163 4.1426 17.4163 3.75081 17.2167C3.40585 17.0409 3.12559 16.7602 2.94982 16.4152C2.75 16.0231 2.75 15.5099 2.75 14.4832Z" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    cus.care@romsons.com
                                </div>
                            </div>
                        </Slide>
                        <Slide bottom delay={300}>
                            <div className='contactus_section2bottomtextconatiner '>
                                <h1 className='contactus_section2bottomheadertext'>
                                    Office & Works
                                </h1>
                                <div className='flex items-center text-[#006C68] text-[20px] leading-[30px] gap-[28px] font-semibold mt-[32px]'>
                                    <div>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.83301 16.3337H3.66634M3.66634 16.3337H10.9997M3.66634 16.3337V4.6005C3.66634 3.57374 3.66634 3.05998 3.86616 2.66781C4.04193 2.32284 4.32219 2.04258 4.66715 1.86681C5.05933 1.66699 5.57309 1.66699 6.59985 1.66699H8.06652C9.09328 1.66699 9.60639 1.66699 9.99857 1.86681C10.3435 2.04258 10.6243 2.32284 10.8 2.66781C10.9997 3.05959 10.9997 3.57274 10.9997 4.59749V7.39257M10.9997 16.3337H18.333M10.9997 16.3337V7.39257M18.333 16.3337H20.1663M18.333 16.3337V11.1711C18.333 10.6897 18.333 10.4486 18.2753 10.224C18.2241 10.025 18.1395 9.83618 18.0256 9.66507C17.8971 9.47201 17.7184 9.3109 17.3601 8.98905L15.2518 7.09493C14.5588 6.47234 14.2121 6.16118 13.8204 6.04309C13.4753 5.93907 13.1071 5.93907 12.7621 6.04309C12.3704 6.16116 12.0238 6.47248 11.331 7.09493L10.9997 7.39257" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>

                                    63-64, Industrial Estate, NunhaiAgra 282006, India
                                </div>

                            </div>
                        </Slide>
                        <Slide bottom delay={600}>
                            <div className='contactus_section2bottomtextconatiner '>
                                <h1 className='contactus_section2bottomheadertext'>
                                    Corporate Office
                                </h1>
                                <div className='flex items-center text-[#006C68] text-[20px] leading-[30px] gap-[28px] font-semibold mt-[32px]'>
                                    <div>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.83301 16.3337H3.66634M3.66634 16.3337H10.9997M3.66634 16.3337V4.6005C3.66634 3.57374 3.66634 3.05998 3.86616 2.66781C4.04193 2.32284 4.32219 2.04258 4.66715 1.86681C5.05933 1.66699 5.57309 1.66699 6.59985 1.66699H8.06652C9.09328 1.66699 9.60639 1.66699 9.99857 1.86681C10.3435 2.04258 10.6243 2.32284 10.8 2.66781C10.9997 3.05959 10.9997 3.57274 10.9997 4.59749V7.39257M10.9997 16.3337H18.333M10.9997 16.3337V7.39257M18.333 16.3337H20.1663M18.333 16.3337V11.1711C18.333 10.6897 18.333 10.4486 18.2753 10.224C18.2241 10.025 18.1395 9.83618 18.0256 9.66507C17.8971 9.47201 17.7184 9.3109 17.3601 8.98905L15.2518 7.09493C14.5588 6.47234 14.2121 6.16118 13.8204 6.04309C13.4753 5.93907 13.1071 5.93907 12.7621 6.04309C12.3704 6.16116 12.0238 6.47248 11.331 7.09493L10.9997 7.39257" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>

                                    4/1, East Patel Nagar,New Delhi-110008, India
                                </div>

                            </div>
                        </Slide>
                        <Slide bottom delay={900}>
                            <div className='contactus_section2bottomtextconatiner !border-0 '>
                                <h1 className='contactus_section2bottomheadertext'>
                                    International Works
                                </h1>
                                <div className='flex items-center text-[#006C68] text-[20px] leading-[30px] gap-[28px] font-semibold mt-[32px]'>
                                    <div>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.83301 16.3337H3.66634M3.66634 16.3337H10.9997M3.66634 16.3337V4.6005C3.66634 3.57374 3.66634 3.05998 3.86616 2.66781C4.04193 2.32284 4.32219 2.04258 4.66715 1.86681C5.05933 1.66699 5.57309 1.66699 6.59985 1.66699H8.06652C9.09328 1.66699 9.60639 1.66699 9.99857 1.86681C10.3435 2.04258 10.6243 2.32284 10.8 2.66781C10.9997 3.05959 10.9997 3.57274 10.9997 4.59749V7.39257M10.9997 16.3337H18.333M10.9997 16.3337V7.39257M18.333 16.3337H20.1663M18.333 16.3337V11.1711C18.333 10.6897 18.333 10.4486 18.2753 10.224C18.2241 10.025 18.1395 9.83618 18.0256 9.66507C17.8971 9.47201 17.7184 9.3109 17.3601 8.98905L15.2518 7.09493C14.5588 6.47234 14.2121 6.16118 13.8204 6.04309C13.4753 5.93907 13.1071 5.93907 12.7621 6.04309C12.3704 6.16116 12.0238 6.47248 11.331 7.09493L10.9997 7.39257" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>

                                    59 J(C), Noida Special Economic ZoneNoida Dadri Road, Phase II Noida-201305, India
                                </div>

                            </div>
                        </Slide>
                    </div>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className='conatctus_section3'>
                    <Slide left>
                    <h1 className='conatctus_section3heading' >
                        Have questions? We`re here for you
                    </h1>
                    </Slide>
                    <div className='conatctus_section3Container'>
                        <Slide left>
                        <div className='contactus_section3FormContainer'>
                            <div>
                                <p className='inputlable'>Name</p>
                                <input
                                    className='contactus_input'
                                    placeholder='Enter Your Name'
                                    value={formData.name}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                                />
                            </div>
                            <div className='mt-[34px]'>
                                <p className='inputlable'>Email ID</p>
                                <input
                                    className='contactus_input'
                                    placeholder='Enter Your Email'
                                    value={formData.emailid}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, emailid: e.target.value }) }}
                                />
                            </div>
                            <div className='mt-[34px]'>
                                <p className='inputlable'>Subject</p>
                                <input
                                    className='contactus_input'
                                    placeholder='Enter Your Subject'
                                    value={formData.Subject}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, Subject: e.target.value }) }}
                                />
                            </div>
                            <div className='mt-[34px]'>
                                <p className='inputlable'>Your City</p>
                                <input
                                    className='contactus_input'
                                    placeholder='Enter Your Subject'
                                    value={formData.YourCity}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, YourCity: e.target.value }) }}
                                />
                            </div>
                            <div className='mt-[34px]'>
                                <p className='inputlable'>Your Country</p>
                                <input
                                    className='contactus_input'
                                    placeholder='Enter Your Subject'
                                    value={formData.YourCountry}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, YourCountry: e.target.value }) }}
                                />
                            </div>
                            <div className='mt-[34px]'>
                                <p className='inputlable'>Message</p>
                                <textarea
                                    className='contactus_input !h-[172px]'
                                    placeholder='Enter Your Subject'
                                    value={formData.Message}
                                    onWheelCapture={false}
                                    onChange={(e) => { setFormData({ ...formData, Message: e.target.value }) }}
                                />
                            </div>
                            <div className='contactus_section3FormSubmitButton'>
                                Submit
                            </div>

                        </div>
                        </Slide>
                        <Slide right>
                            <div className='contactus_section3leftContainer'>
                                <div className='contactus_section3leftmap'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28011.62117257337!2d77.14921631183786!3d28.646162481334958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0352362a0ea5%3A0x4089ad85c86480e8!2sRomsons!5e0!3m2!1sen!2sin!4v1707297269543!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        className='rounded-lg'
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">

                                    </iframe>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </LazyLoad>

            <LazyLoad>
                <Footer />
            </LazyLoad>
        </Template>
    )
}

export default ContactUS