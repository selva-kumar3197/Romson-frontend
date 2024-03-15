import BlogCard from '@/components/BlogCard/BlogCard'
import BringingCareCloser from '@/components/BringingCareCloser'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import imageUrls from '@/utils/imageURLs'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Template from "@/components/Template"
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';

const BlogInternal = () => {

    const router = useRouter()
	const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

    const [blogs, setBlogs] = useState([
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety }
	])

    return (
        <Template>
			<Head>
				<title>{language.blogsTitle}</title>
			</Head>
            
            <LazyLoad>
			    <Header />
            </LazyLoad>

            <LazyLoad>
                <Slide bottom>
                    <div className="blogs">
                        <div className="blogsInternal_section1">
                            <div className="blogs_sectio1_text">
                                <Slide left delay={800}>
                                    <h1 className="text-reveal aboutUs_sectio1_text_heading">{language.blogInternalText1}</h1>
                                </Slide>
                                <Slide right delay={100}>
                                    <span className="blogsInternal_date" style={{width: "100%"}}><span>{language.DatePosted} - 08.08.2024</span></span>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </Slide>
            </LazyLoad>

            <LazyLoad>
                <div className="blogs_section2">
                    <div className="blogsInternal_heading">
                        <Slide left>
                            <div className="blogsInternal_title">Why is Personal <br />Hygiene Necessary?</div>
                        </Slide>
                        <Slide right>
                            <div className="blogsInternal_share">Share In: 
                                <a href="https://www.fb.com" target="_blank"><Image alt=""  src={imageUrls?.social?.fb} height={34} width={34} /></a>
                                <a href="https://www.instagram.com" target="_blank"><Image alt=""  src={imageUrls?.social?.insta} height={34} width={34} /></a>
                                <a href="https://www.x.com" target="_blank"><Image alt=""  src={imageUrls?.social?.twitter} height={34} width={34} /></a>
                                <a href="https://www.linkedin.com" target="_blank"><Image alt=""  src={imageUrls?.social?.linkedin} height={34} width={34} /></a>
                            </div>
                        </Slide>
                    </div>

                    <Slide bottom>
                        <p>
                            Should not even be a question. Health is the best weapon to fight the battle of life. All other factors including intelligence, merit etc. go to vain if one does not maintain a healthy lifestyle and take care of his/her wellbeing. No amount of wealth earned can make up for ruined health. Hygiene is a set of personal practices that contributes to good health. It includes basic things like: Washing hands properly, Bathing, cutting hair/nails etc. Necessity of hygiene is to keep oneself healthy and safe from possible diseases. By maintaining our health and hygiene, we not only favor ourselves but also the people around us. It has rightly been said that ‘Health is Wealth’.
                            <br />
                            Maintaining personal hygiene is essential for more than one reason; social, health, personal, psychological or just as a way of life. Maintaining a good standard of hygiene helps keep infections, illnesses and bad odours at bay. The importance of hygiene should be taught from an early age to help cultivate good habits. Personal hygiene can be defined as an act of maintaining cleanliness and grooming of the external body. Maintaining good personal hygiene consists of bathing, washing your hands, brushing teeth and sporting clean clothing. Additionally, it is also about making safe and hygienic decisions when you are around others.
                            One of the most fool proof ways to safeguard yourself and others from illness is through good personal hygiene. Good personal hygiene not only enhances your overall appearance, its importance is directly related to prevention of diseases, infections, and unpleasant odours.
                            <br />
                            Hygiene is necessary for:
                            <br />
                            <br />
                            • Killing Bad Bacteria (Germs).
                            <br />
                            • Avoid Bad Breath and Body Odor.
                            <br />
                            • Good Health & Prevent Sickness.
                            <br />
                            <br />


                            In some parts of the world, maintaining hygiene still lies as a critical challenge leading to loss of lives every day due to unsafe water, poor hygiene and sanitation. Thus, it becomes necessary to follow the basic hygiene practices like:

                            <br />
                            <br />
                            • Washing the body often.<br />
                            • Use a tissue while coughing or sneezing and put used tissues in the bin.<br />
                            • Wash hands thoroughly after using the washroom.<br />
                            • Brushing the teeth at least once a day.<br />
                            • Washing the hair with soap or shampoo at least once a week.<br />
                            • Keep your workplace and office files clean.<br />
                            • Keep your tools, instruments and machinery clean.<br />
                            • Never allow dust accumulation.<br />
                        </p>
                    </Slide>
                </div>
            </LazyLoad>

            <LazyLoad>
                <div className="blogsInternal_section3">
                    <div className="blogsInternal_section3_text">
                        <Slide left>
                            {language.discoverMoreBlogs}
                        </Slide>
                    </div>
                    
                    <div className="blogsInternal_section3_cards">
                    {
                        blogs?.map((blog, index) => (
                            <Slide bottom key={index}>
                                <BlogCard blog={blog} key={index} />
                            </Slide>
                        ))
                    }
                    </div>
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

export default BlogInternal
