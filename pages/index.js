import Heading from "../components/Heading/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Link from "next/link";

export default function results({ pokemon }) {
	return (
		<main>
			<Heading content='All 898 Pokémon' />
			<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
				{pokemon.map((mons, index) => {
					return (
						<div
							key={index}
							className='bg-gray-100 dark:bg-gray-600 shadow-lg rounded-xl grid grid-cols-1 cursor-pointer place-items-stretch'>
							<Link href={`/pokemon?id=${index + 1}`}>
								<a>
									<div className='dark:bg-gray-200 bg-white flex justify-center self-center rounded-full w-1/2 mx-auto my-5'>
										<img
											src={mons.image}
											alt={mons.name}
											loading='lazy'
											className='w-full'
										/>
									</div>
									<div className='py-5 bg-white dark:bg-gray-800 text-center rounded-b-xl'>
										<h1 className='capitalize font-bold text-3xl dark:text-gray-100'>
											{mons.name}
										</h1>
										<p className='text-gray-400'>#{mons.paddedIndex}</p>
									</div>
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
