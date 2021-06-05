import Heading from "../components/Heading/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Link from "next/Link";

export default function results({ pokemon }) {
	return (
		<main className='mx-20'>
			<Heading content='All 898 Pokémon' />
			<div className='grid grid-cols-3 gap-10'>
				{pokemon.map((mons, index) => {
					return (
						<div
							key={index}
							className='bg-gray-100 shadow-lg rounded-xl grid grid-cols-1 items-center cursor-pointer'>
							<Link href={`/pokemon?id=${index + 1}`}>
								<a>
									<img
										src={mons.image}
										alt={mons.name}
										loading='lazy'
										className='w-1/2'
									/>
									<h1 className='capitalize font-bold text-2xl'>{mons.name}</h1>
									<p className='text-gray-400'>#{mons.paddedIndex}</p>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</main>
	);
}

export async function getStaticProps(context) {
	try {
		const res = await axios.get(BASE_URL);
		const results = res.data.results;
		const pokemon = results.map((result, index) => {
			const paddedIndex = ("00" + (index + 1)).slice(-3);
			const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`;
			return {
				...result,
				image,
				paddedIndex,
			};
		});
		return {
			props: { pokemon },
		};
	} catch (e) {
		console.error(e);
	}
	return {
		props: {},
	};
}
