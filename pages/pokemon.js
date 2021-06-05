import axios from "axios";
import { useRouter } from "next/router";
import { ONE_MON_URL } from "../constants/api";
import Heading from "../components/Heading/Heading";
import { typeColors } from "../utils/typeColors";

export default function pokemon({ oneMon }) {
	const router = useRouter();

	function handleClick() {
		router.push("/");
	}

	console.log(oneMon);
	return (
		<div key={oneMon.id}>
			<Heading content={oneMon.name} />
			<div className='flex'>
				<img src={oneMon.sprites.front_default} />
				<img src={oneMon.sprites.back_default} />
				<img src={oneMon.sprites.front_shiny} />
				<img src={oneMon.sprites.back_shiny} />
			</div>
			<button onClick={handleClick}>Go Back</button>
			{oneMon.types.map((type) => {
				return (
					<p
						key={type.type.name}
						className=''
						style={{ backgroundColor: typeColors[type.type.name] }}>
						{type.type.name}
					</p>
				);
			})}
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
