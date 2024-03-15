import Header from "@/components/Header/Header";
import imgUrls from "@/utils/imageURLs";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import LazyLoad from 'react-lazyload';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Template from "@/components/Template"
import StickyBox from "react-sticky-box";
var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import SlideSentence from "@/components/SlideSentence";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const AboutUs = () => {

	const router = useRouter()
	const owlCarouselRef = useRef(null)
	const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

	const [isTabOrMobile, setTabOrMobile] = useState(false)

	useEffect(() => {
		if (typeof window !== undefined && window?.screen?.width <= 768 ){
			setTabOrMobile(true)
		}
	}, [])

	const handleMouseWheel = (e) => {
		if (e.deltaY < 0) {
			handlePrev(e);
		} else {
			handleNext(e);
		}
	}
	const handleInitialized = (owl) => {
		if (owlCarouselRef?.current !== owl) {
		  owlCarouselRef.current = owl;
		}
	}
	const handleNext = e => {
		if (owlCarouselRef?.current) {
		  	owlCarouselRef?.current?.relatedTarget?.next();
			if(owlCarouselRef?.current?.relatedTarget?._current < 5){
				e.preventDefault()
			}
		}
	}
	const handlePrev = e => {
		if (owlCarouselRef?.current) {
		  	owlCarouselRef?.current?.relatedTarget?.prev();			
			if(owlCarouselRef?.current?.relatedTarget?._current > 0){
				e.preventDefault()
			}
		}
	}

	return (
		<Template smoothScrolling={false}>
			<>
			<Head>
				<title>{language?.aboutUsTitle}</title>
			</Head>

			<LazyLoad>
				<Header/>
			</LazyLoad>

			<LazyLoad>
				<Slide bottom>
					<div className="aboutUs">
						<div className="aboutUs_section1">
							<div className="aboutUs_sectio1_text">
								<h1 className="text-reveal aboutUs_sectio1_text_heading"><SlideSentence delay={400}>{language.aboutSection1Text1}</SlideSentence></h1>
								<span className="aboutUs_sectio1_text_description"><SlideSentence delay={400}>{language.aboutSection1Text2}</SlideSentence></span>
							</div>
						</div>
					</div>
				</Slide>
			</LazyLoad>

			<LazyLoad>
				<div className="aboutUs_section2">
					<div className="aboutUs_sectio2_text">
						<h1 className="text-reveal aboutUs_sectio2_text_heading"><SlideSentence delay={300}>{language.aboutSection2Text1}</SlideSentence></h1>
						<span className="aboutUs_sectio2_text_description"><SlideSentence delay={300}>{language.aboutSection2Text2}</SlideSentence></span>
					</div>
				</div>
			</LazyLoad>

			<LazyLoad>
				<div className="aboutUs_section3">
					<div className="aboutUs_sectio3_box">
						{
							!isTabOrMobile
							?
							<StickyBox className="aboutUs_sectio3_box_left" style={{position: "relative !important"}} offsetTop={100} offsetBottom={50}>
								<Slide bottom>
									<div className="aboutUs_sectio3_box_left_image text-reveal">
										<span><SlideSentence delay={400}>{language.aboutSection3Text1}</SlideSentence></span>
									</div>
									<div className="aboutUs_sectio3_box_left_text text-reveal">
										<SlideSentence delay={400}>{language.aboutSection3Text2}</SlideSentence>
									</div>
								</Slide>
							</StickyBox>
							:
							<div className="aboutUs_sectio3_box_left">
								<Slide bottom>
									<div className="aboutUs_sectio3_box_left_image text-reveal">
										<span><SlideSentence delay={400}>{language.aboutSection3Text1}</SlideSentence></span>
									</div>
									<div className="aboutUs_sectio3_box_left_text text-reveal">
										<SlideSentence delay={400}>{language.aboutSection3Text2}</SlideSentence>
									</div>
								</Slide>
							</div>
						}
						<div className="aboutUs_sectio3_box_right">
							<Slide right>
								<div className="aboutUs_sectio3_box_right_card card1">
									<div className="aboutUs_sectio3_box_right_card_heading">
										<SlideSentence delay={300}>{language.aboutSection3Card1Text1}</SlideSentence>
									</div>
									<div className="aboutUs_sectio3_box_right_card_text">
										<SlideSentence delay={300}>{language.aboutSection3Card1Text2}</SlideSentence>
									</div>
								</div>
							</Slide>
							<Slide right>
								<div className="aboutUs_sectio3_box_right_card card2">
									<div className="aboutUs_sectio3_box_right_card_heading">
										<SlideSentence delay={300}>{language.aboutSection3Card2Text1}</SlideSentence>
									</div>
									<div className="aboutUs_sectio3_box_right_card_text">
										<SlideSentence delay={300}>{language.aboutSection3Card2Text2}</SlideSentence>
									</div>
								</div>
							</Slide>
							<Slide right>
								<div className="aboutUs_sectio3_box_right_card card3">
									<div className="aboutUs_sectio3_box_right_card_heading">
										<SlideSentence delay={300}>{language.aboutSection3Card3Text1}</SlideSentence>
									</div>
									<div className="aboutUs_sectio3_box_right_card_text">
										<SlideSentence delay={300}>{language.aboutSection3Card3Text2}</SlideSentence>
									</div>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			</LazyLoad>

			<LazyLoad className="">
				<div className="aboutUs_section4">
					<OwlCarousel
						className="owl-theme" 
						dots={false}
						items="1"
						responsive={{
							0:{ smartSpeed:1000 },
							600:{ smartSpeed:2500 }
						}}
						ref={(ref) => (owlCarouselRef.current = ref)} 
						onInitialized={handleInitialized}
						onMouseOver={e => e.currentTarget.addEventListener('wheel', handleMouseWheel)}
						onMouseOut={e =>  e.currentTarget.removeEventListener('wheel', handleMouseWheel)}
					>
						<div className="item">
							<div className="aboutUs_section4">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1">
										<SlideSentence delay={300}>{language.aboutSection4Text1}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date">19<span>52</span></div>
								</div>
								<div className="aboutUs_section4_right">
									<SlideSentence>{language.aboutSection4Text2}</SlideSentence>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="aboutUs_section4 second">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1 color-white">
										<SlideSentence delay={300}>{language.aboutSection4Text21}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date color-white">1960s</div>
								</div>
								<div className="aboutUs_section4_right color-white">
									<SlideSentence>{language.aboutSection4Text22}</SlideSentence>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="aboutUs_section4">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1 ">
										<SlideSentence delay={300}>{language.aboutSection4Text31}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date flex ">1970s-<span>1980s</span></div>
								</div>
								<div className="aboutUs_section4_right ">
									<SlideSentence>{language.aboutSection4Text32}</SlideSentence>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="aboutUs_section4 second">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1 color-white">
										<SlideSentence delay={300}>{language.aboutSection4Text41}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date color-white">1990s</div>
								</div>
								<div className="aboutUs_section4_right color-white">
									<SlideSentence>{language.aboutSection4Text42}</SlideSentence>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="aboutUs_section4">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1 ">
										<SlideSentence delay={300}>{language.aboutSection4Text51}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date flex ">20<span>00s</span></div>
								</div>
								<div className="aboutUs_section4_right ">
									<SlideSentence>{language.aboutSection4Text52}</SlideSentence>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="aboutUs_section4 second">
								<div className="aboutUs_section4_left">
									<div className="aboutUs_section4_left1 color-white">
										<SlideSentence delay={300}>{language.aboutSection4Text61}</SlideSentence>
									</div>
									<Zoom>
										<div className="aboutUs_section4_left2">
											<Image alt="" src={imgUrls?.AboutUs?.section4Img} width={1050} height={420}  />
										</div>
									</Zoom>
									<div className="aboutUs_section4_left_date color-white flex w-full">2010 Onwards</div>
								</div>
								<div className="aboutUs_section4_right color-white">
									<SlideSentence>{language.aboutSection4Text62}</SlideSentence>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</LazyLoad>

			<LazyLoad>
				<div className="aboutUs_section5">
					<div className="aboutUs_section5_text"><SlideSentence delay={300}>{language.aboutSection5}</SlideSentence></div>
					<Zoom duration={1500}>
						<Image alt=""  width="1500" height="0" src={imgUrls?.AboutUs?.section5WorldMap} className="aboutUs_section5_img" />
					</Zoom>
				</div>
			</LazyLoad>

			<LazyLoad>
				<div className="aboutUs_section6">
					<div className="aboutUs_section6_text">{language.aboutSection6}</div>
					<Slide bottom duration={700} delay={0}><Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.section5Logo1}  style={{aspectRatio: "1/1"}} className="logo" /></Slide>
					<Slide bottom duration={700} delay={50}><Image alt=""  width="2" height="0" src={imgUrls?.AboutUs?.section5Line} className="line" /></Slide>
					<Slide bottom duration={700} delay={100}><Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.section5Logo2}  style={{aspectRatio: "1/1"}} className="logo" /></Slide>
					<Slide bottom duration={700} delay={150}><Image alt=""  width="2" height="0" src={imgUrls?.AboutUs?.section5Line} className="line" /></Slide>
					<Slide bottom duration={700} delay={200}><Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.section5Logo1}  style={{aspectRatio: "1/1"}} className="logo" /></Slide>
					<Slide bottom duration={700} delay={250}><Image alt=""  width="2" height="0" src={imgUrls?.AboutUs?.section5Line} className="line" /></Slide>
					<Slide bottom duration={700} delay={300}><Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.section5Logo2}  style={{aspectRatio: "1/1"}} className="logo" /></Slide>
					<Slide bottom duration={700} delay={350}><Image alt=""  width="2" height="0" src={imgUrls?.AboutUs?.section5Line} className="line" /></Slide>
					<Slide bottom duration={700} delay={400}><Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.section5Logo1}  style={{aspectRatio: "1/1"}} className="logo" /></Slide>
				</div>
			</LazyLoad>

			<LazyLoad>
				<div className="aboutUs_section7">
					<div className="aboutUs_section7_text">
						<h1 className="aboutUs_section7_text_heading"><SlideSentence delay={300}>{language.aboutSection7}</SlideSentence></h1>
						<h3 className="aboutUs_section7_text_heading2"><SlideSentence delay={300}>{language.aboutSection7Text1}</SlideSentence></h3>
					</div>
					<div className="aboutUs_section7_cards">
						<OwlCarousel 
							items={2.2} 
							margin={20}
							loop
							slideBy={2}
							autoplay={true}
							autoplaySpeed={1000}
							smartSpeed={1000}
							responsive={{
								0:{ items:1, slideBy:1 },
								600:{ items:2.2, slideBy:2 }
							}}
						>
						{
							[1,2,3,4]?.map((el, index) => (
								<div className={`item p-1`} key={el}> 
									<span className="aboutUs_section7_cardItem">
										<Image alt=""  width="500" height="0" src={imgUrls?.AboutUs?.["section5Gallery"+el]} className="item aboutUs_section7_card_img"/>
									</span>
								</div>
							))
						}
						</OwlCarousel>
					</div>
				</div>
			</LazyLoad>

			<LazyLoad>
				<Footer/>
			</LazyLoad>
			</>
		</Template>
	);
};

export default AboutUs;
