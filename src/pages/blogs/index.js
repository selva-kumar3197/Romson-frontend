import Header from "@/components/Header/Header";
import Head from "next/head";
import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import BringingCareCloser from "@/components/BringingCareCloser";
import { useRouter } from "next/router";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import Slide from 'react-reveal/Slide';
import Template from "@/components/Template"

const ProductList = () => {

	const router = useRouter()
	const language = require(`../../locales/${router.locale || router.defaultLocale}/lang.JSON`)

	const [category, setCategory] = useState("All")

	const [blogs, setBlogs] = useState([
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
		{title: language.blogsCardText1, description: language.blogsCardText2, date: "08.08.2024", category: language.Safety },
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
						<div className="blogs_section1">
							<div className="blogs_sectio1_text">
								<Slide left delay={800}>
									<h1 className="text-reveal aboutUs_sectio1_text_heading">{language.blogsSection1Text1}</h1>
								</Slide>
								<Slide right delay={100}>
									<span className="blogs_sectio1_text_description">{language.blogsSection1Text2}</span>
								</Slide>
							</div>
						</div>
					</div>
				</Slide>
			</LazyLoad>

			<LazyLoad>
				<div className="blogs_section2">
					<Slide left>
					<h1 className="text-reveal blogs_section2_text_heading">{language.blogsSection2Text1}</h1>
					</Slide>
						<div className="blogs_section2_category">
							<Slide right>
								<button className={`blogs_section3_btn ${category === "All" ? "active" : ""}`} onClick={() => setCategory("All")}>
									{language.SeeAll}
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Healthcare" ? "active" : ""}`} onClick={() => setCategory("Healthcare")}>
									{language.HealthCare} 
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Safety" ? "active" : ""}`} onClick={() => setCategory("Safety")}>	
									{language.Safety}
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Therapy" ? "active" : ""}`} onClick={() => setCategory("Therapy")}>	
									{language.Therapy}	
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Pollution" ? "active" : ""}`} onClick={() => setCategory("Pollution")}>	
									{language.Pollution}
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Hygiene" ? "active" : ""}`} onClick={() => setCategory("Hygiene")}>	
									{language.Hygiene}
								</button>
							</Slide>
							<Slide right>
								<button className={`blogs_section3_btn ${category === "Technology" ? "active" : ""}`} onClick={() => setCategory("Technology")}>	
									{language.Technology}
								</button>
							</Slide>
						</div>

						<div className="blogs_section2_cards">
							<div className="blogs_section2_cards_col">
								{
									blogs?.filter((blog, index)=> index%3==0 )?.map((blog, index) => (
										<Slide bottom key={index}>
											<Link href={`/blogs/${blog?.title}`} key={index} >
												<BlogCard blog={blog} />
											</Link>
										</Slide>
									))
								}
							</div>
							<div className="blogs_section2_cards_col">
								{
									blogs?.filter((blog, index)=> index%3==1 )?.map((blog, index) => (
										<Slide bottom key={index}>
											<Link href={`/blogs/${blog?.title}`} key={index} >
												<BlogCard blog={blog} />
											</Link>
										</Slide>
									))
								}
							</div>
							<div className="blogs_section2_cards_col">
								{
									blogs?.filter((blog, index)=> index%3==2 )?.map((blog, index) => (
										<Slide bottom key={index}>
											<Link href={`/blogs/${blog?.title}`} key={index} >
												<BlogCard blog={blog} />
											</Link>
										</Slide>
									))
								}
							</div>
						</div>

						<Slide bottom>
							<div className="productList_section3_load">
								<button className={`productList_section3_load_btn`}>{language.LoadMore}</button>
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
	);
};

export default ProductList;
