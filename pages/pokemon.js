import axios from "axios";
import { useRouter } from "next/router";
import { ONE_MON_URL } from "../constants/api";
import Heading from "../components/Heading/Heading";
import { typeColors } from "../utils/typeColors";
import { IoArrowUndo } from "react-icons/io5";
import FlavorText from "../components/Flavortext/FlavorText";

export default function pokemon({ oneMon }) {
	const router = useRouter();

	function handleClick() {
		router.push("/");
	}

	return (
		<div
			key={oneMon.id}
			className='flex flex-col w-2/3 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg mx-auto mt-10'>
			<h1 className='text-6xl p-10 text-center text-gray-900 dark:text-gray-200 capitalize'>
				{oneMon.name}
			</h1>

			<div className='flex self-center w-3/4'>
				<img src={oneMon.sprites.front_default} className='w-full' />
				<img src={oneMon.sprites.back_default} className='w-full' />
				<img src={oneMon.sprites.front_shiny} className='w-full' />
				<img src={oneMon.sprites.back_shiny} className='w-full' />
			</div>
			<FlavorText />
			<div className='flex flex-col w-1/2 self-center'>
				<div className='flex justify-center mb-10'>
					{oneMon.types.map((type) => {
						return (
							<p
								key={type.type.name}
								className='rounded-full px-5 text-lg py-1 text-center mr-3'
								style={{ backgroundColor: typeColors[type.type.name] }}>
								{type.type.name}
							</p>
						);
					})}
				</div>
				<div className='flex flex-col'>
					<div className='flex'>
						<h3 className='font-bold'>Global Pokédex Id:</h3>
						<p>{oneMon.id}</p>
					</div>
					<div className='flex'>
						<h3 className='font-bold'>Abilities:</h3>
						{oneMon.abilities.map((ability) => {
							return <p key={ability.ability.name}>{ability.ability.name}</p>;
						})}
					</div>
					<div className='flex'>
						<h3 className='font-bold'>Base Experience:</h3>
						<p>{oneMon.base_experience}</p>
					</div>
					<div className='flex'>
						<h3 className='font-bold'>Height:</h3>
						<p>{oneMon.height / 10} m</p>
					</div>
					<div className='flex'>
						<h3 className='font-bold'>Weight:</h3>
						<p>{oneMon.weight / 10} kg</p>
					</div>
				</div>
				<h2 className='text-gray-800 dark:text-gray-300 text-2xl'>Stats:</h2>
				{oneMon.stats.map((stat) => {
					return (
						<div key={stat.stat.name}>
							<p>{stat.stat.name}</p>
							<p>{stat.base_stat}</p>
						</div>
					);
				})}
			</div>
			<button
				onClick={handleClick}
				className=' text-gray-800 bg-gray-300 border-2 border-gray-700 rounded-lg dark:text-gray-300  dark:bg-gray-700'>
				<IoArrowUndo />
				Go Back
			</button>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const id = query.id;
	try {
		const res = await axios.get(`${ONE_MON_URL}${id}`);
		const oneMon = res.data;
		return {
			props: { oneMon },
		};
	} catch (e) {
		console.error(e);
	}
	return {
		props: {},
	};
}
