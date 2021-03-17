import Head from "../Head";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Head
				title='JS Frameworks MA4'
				description='My Module Assignment Yay'
				author='Sander Trollebø'
				keywords='Front end, Javascript, react, next'
			/>
			<Nav />
			<div className='px-5 my-2'>{children}</div>
			<Footer />
		</>
	);
}
