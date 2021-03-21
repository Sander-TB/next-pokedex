import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Heading content='Welcome to Home page' />
			<p className="results-link is-size-5">
				Go to <Link href='/results'> Results page</Link>
			</p>
		</Layout>
	);
}
