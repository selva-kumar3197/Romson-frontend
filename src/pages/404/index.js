import Header from "@/components/Header/Header";
import Head from "next/head";
import React, {} from "react";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';
import Template from "@/components/Template"
import SmoothScrolling from "@/components/SmoothScroll";

const AboutUs = () => {

	const router = useRouter()
	const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)


	return (
		<SmoothScrolling>
			<Head>
				<title>404</title>
			</Head>

			<LazyLoad>
				<Header/>
			</LazyLoad>

			<LazyLoad>
				<Slide bottom>
					<div className="page404">
						<div className="page404_section1">
							<div className="page404_sectio1_text">
								<Slide left delay={100}>
									<h1 className="page404_sectio1_text_heading">{404}</h1>
								</Slide>
								<Slide right delay={100}>
									<span className="page404_sectio1_text_description">{"Something's amiss"}</span>
								</Slide>
							</div>
						</div>
					</div>
				</Slide>
			</LazyLoad>

			<LazyLoad>
				<Footer />
			</LazyLoad>

		</SmoothScrolling>
	);
};

export default AboutUs;
