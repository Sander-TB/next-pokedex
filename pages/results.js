import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Image from "next/image";

export default function results({ pokemon }) {
	return (
		<Layout>
			<Heading content='Results page' />
			{pokemon
				? pokemon.map((pokemon) => {
						return (
							<div key={pokemon.name}>
								<h3>{pokemon.name}</h3>
								<p>#{pokemon.paddedIndex}</p>
								<Image
									src={pokemon.image}
									alt={pokemon.name}
									width={200}
									height={200}
								/>
							</div>
						);
				  })
				: "Loading..."}
		</Layout>
	);
}

export async function getStaticProps() {
	let pokemon = [];

	try {
		const res = await axios.get(BASE_URL);
		pokemon = res.data["results"].map((result, index) => {
			const paddedIndex = ("00" + (index + 1)).slice(-3);
			const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
			return {
				...result,
				image,
				paddedIndex,
			};
		});
	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			pokemon: pokemon,
		},
	};
}
