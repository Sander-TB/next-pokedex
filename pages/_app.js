import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<div className='dark'>
			<Layout title='Next.js Pokedex'>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
