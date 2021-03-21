import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Image from "next/image";

export default function results({ pokemon }) {
	return (
		<Layout>
			<Heading content='Results page' />
			<div className='columns is-multiline'>
				{pokemon
					? pokemon.map((pokemon) => {
							return (
								<div className='column is-one-quarter'>
									<div class='card '>
										<div class='card-image'>
											<Image
												src={pokemon.image}
												alt={pokemon.name}
												width={200}
												height={200}
											/>
										</div>
										<div class='card-content'>
											<div class='media'>
												<div class='media-content'>
													<p class='title is-4 is-capitalized'>{pokemon.name}</p>
													<p class='subtitle is-6'>#{pokemon.paddedIndex}</p>
												</div>
											</div>

											<div class='content'>
												<button className='button is-primary'>
													View Details(wip)
												</button>
											</div>
										</div>
									</div>
								</div>
							);
					  })
					: "Loading..."}
			</div>
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
