import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout title='Next.js Pokedex'>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
