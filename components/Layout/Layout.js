import Head from "next/Head";
import Nav from "../../components/Nav/Nav";

export default function Layout({ title, children }) {
	return (
		<>
			<Head>{title}</Head>
			<Nav />
			<div className='bg-gray-200'>{children}</div>
		</>
	);
}
