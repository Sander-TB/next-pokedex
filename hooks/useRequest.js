import useSWR from "swr";
import { BASE_URL } from "../constants/api";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PAGE_LIMIT = 898;

export default function useFetchPokemon(name) {
	const uri = name ? `${BASE_URL}/${name}` : `${BASE_URL}?limit=${PAGE_LIMIT}`;
	const { data: result, error } = useSWR(uri, fetcher);
	return { result, error };
}
