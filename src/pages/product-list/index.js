import Header from "@/components/Header/Header";
import imgUrls from "@/utils/imageURLs";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import Image from "next/image";
import Button1 from "@/components/Button1/Button1";
import Footer from "@/components/Footer/Footer";
import BringingCareCloser from "@/components/BringingCareCloser";
import { useRouter } from "next/router";
import Template from "@/components/Template"
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';
import Link from "next/link";

const ProductList = () => {

	const router = useRouter()
	const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

	const [location, setLocation] = useState("Domestic")
	const [category, setCategory] = useState("All")

	return (
		<Template>
			<Head>
				<title>{language.productsTitle}</title>
			</Head>
			<Header />
			<LazyLoad>
				<Slide bottom>
					<div className="productList">
						<div className="productList_section1">
							<div className="productList_sectio1_text">
								<Slide left delay={800}>
									<h1 className="text-reveal aboutUs_sectio1_text_heading">{language.productsSection1Text1}</h1>
								</Slide>
								<Slide right delay={100}>
									<span className="productList_sectio1_text_description">{language.productsSection1Text2}</span>
								</Slide>
							</div>
						</div>
					</div>
				</Slide>
			</LazyLoad>

			<LazyLoad>
				<div className="productList_section2">
					<div className="productList_section2_location">
						<Slide right>
							<button className={`productList_section2_location_btn ${location === "Domestic" ? "active" : ""}`} onClick={() => setLocation("Domestic")}>{language.productsDomestic}</button>
							<button className={`productList_section2_location_btn ${location === "International" ? "active" : ""}`} onClick={() => setLocation("International")}>{language.productsInternational}</button>
						</Slide>
					</div>
				</div>
			</LazyLoad>

			<LazyLoad>
				<div className="productList_section3">
					<Slide left>
						<div className="productList_section3_category">
							<button className={`productList_section3_btn ${category === "All" ? "active" : ""}`} onClick={() => setCategory("All")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path d="M21 4.75H9.75M13.5 17.25H2.25" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M17.25 21C19.3211 21 21 19.3211 21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21Z" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M4.75 8.5C6.82107 8.5 8.5 6.82107 8.5 4.75C8.5 2.67893 6.82107 1 4.75 1C2.67893 1 1 2.67893 1 4.75C1 6.82107 2.67893 8.5 4.75 8.5Z" stroke="#006C68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								All
							</button>
							<button className={`productList_section3_btn ${category === "ANESTHESIA" ? "active" : ""}`} onClick={() => setCategory("ANESTHESIA")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								ANESTHESIA
							</button>
							<button className={`productList_section3_btn ${category === "CARDIO" ? "active" : ""}`} onClick={() => setCategory("CARDIO")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								CARDIO
							</button>
							<button className={`productList_section3_btn ${category === "GASTROENTEROLOGY" ? "active" : ""}`} onClick={() => setCategory("GASTROENTEROLOGY")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								GASTROENTEROLOGY
							</button>
							<button className={`productList_section3_btn ${category === "SURGERY" ? "active" : ""}`} onClick={() => setCategory("SURGERY")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								SURGERY
							</button>
							<button className={`productList_section3_btn ${category === "UROLOGY" ? "active" : ""}`} onClick={() => setCategory("UROLOGY")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								UROLOGY
							</button>
							<button className={`productList_section3_btn ${category === "TRANSFUSION" ? "active" : ""}`} onClick={() => setCategory("TRANSFUSION")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								TRANSFUSION
							</button>
							<button className={`productList_section3_btn ${category === "MISCELLANEOUS" ? "active" : ""}`} onClick={() => setCategory("MISCELLANEOUS")}>
								<Image alt="" src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/product-list/Asset+1.svg" width="25" height="25" />
								MISCELLANEOUS
							</button>
						</div>
					</Slide>

					<div className="productList_section3_cards">
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Link href="productdetail">
									<Button1 text={"Explore"} />
								</Link>
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card">
								<div className="productList_section3_card_heading">RMS Infusion Set</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card1} width={380} height={250} />
							</div>
						</Slide>
						<Slide bottom>
							<div className="productList_section3_card card2">
								<div className="productList_section3_card_heading">Intra Cath®-2</div>
								<Button1 text={"Explore"} />
								<Image alt="" src={imgUrls?.productList?.card2} width={380} height={250} />
							</div>
						</Slide>
					</div>

					<div className="productList_section3_load">
						<Slide bottom>
							<button className={`productList_section3_load_btn`}>{language.LoadMore}</button>
						</Slide>
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
	);
};

export default ProductList;
