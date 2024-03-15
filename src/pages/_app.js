import "../styles/globals.css";
import "@/styles/Components/header.css";
import "@/styles/Components/section1.css";
import "@/styles/Components/section2.css";
import "@/styles/Components/aboutsection.css";
import "@/styles/Components/medicalInfo.css";
import "@/styles/Components/featureProducts.css";
import "@/styles/Components/blog.css";
import "@/styles/Components/button1.css";
import "@/styles/page/about-us.css";
import "@/styles/page/product-list.css";
import "@/styles/Components/newsEvents.css";
import "@/styles/Components/footer.css";
import "@/styles/Components/BlogCard.css";
import "@/styles/Components/template.css";
import "@/styles/page/contact-us.css";
import "@/styles/page/quality.css";
import "@/styles/page/blogs.css";
import "@/styles/page/404.css";
import '@/styles/page/career.css'
import '@/styles/page/productDetail.css'
function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default App;
