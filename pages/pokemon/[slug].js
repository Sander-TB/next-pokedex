import Layout from "../../components/Layout/Layout";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import Image from "next/image";

export default function onePokemon({ oneMon }) {
	return (
		<Layout>
			<h1>{oneMon.name}</h1>
			<Image
				src={oneMon.sprites.front_default}
				alt={oneMon.name}
				height={200}
				width={200}
			/>
			{/*MORE STATS TO COME*/}
		</Layout>
	);
}

export async function getStaticPaths() {
	try {
		const res = await axios.get(BASE_URL);
		const pokemon = res.data.results;
		const paths = pokemon.map((oneMon) => ({
			params: { slug: oneMon.name },
		}));
		return { paths, fallback: false };
	} catch (e) {
		console.log(e);
	}
}

export async function getStaticProps({ params }) {
	const url = `${BASE_URL}/${params.slug}`;

	let oneMon = null;

	try {
		const res = await axios.get(url);
		oneMon = res.data;
	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			oneMon: oneMon,
		},
	};
}
