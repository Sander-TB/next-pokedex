import Head from "../Head/Head";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Head
				title='Next.js Pokedex'
				description='Building a pokedex in next'
				author='Sander Trollebø'
				keywords='Front end, Javascript, react, next'
			/>
			<Nav />
			<div className='px-5 my-2'>{children}</div>
			<Footer />
		</>
	);
}
