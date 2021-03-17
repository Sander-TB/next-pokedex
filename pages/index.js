import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Heading content='Welcome to Home page' />
			<div className='results-link'>
				<p>Go to </p> <Link href='/results'> Results page</Link>
			</div>
		</Layout>
	);
}
