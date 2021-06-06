import Head from "next/head";
import Nav from "../../components/Nav/Nav";

export default function Layout({ title, children }) {
	return (
		<>
			<Head>{title}</Head>
			<Nav />
			<main className='bg-gray-200 dark:bg-gray-900 px-20 py-10'>
				{children}
			</main>
		</>
	);
}
