import Head from "../Head/Head";
import Nav from "../../components/Nav/Nav";

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
			<div className='section is-flex-direction-column'>{children}</div>
		</>
	);
}
