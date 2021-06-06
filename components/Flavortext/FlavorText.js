import axios from "axios";
import { FLAVORTEXT_URL } from "../../constants/api";

export default function FlavorText({ species }) {
	console.log(species);
	return <div></div>;
}

export async function getServerSideProps({ query }) {
	const id = query.id;
	try {
		const res = await axios.get(`${FLAVORTEXT_URL}${id}`);
		console.log(res);
		const species = res.data;
		return {
			props: { species },
		};
	} catch (e) {
		console.error(e);
	}
	return {
		props: {},
	};
}
