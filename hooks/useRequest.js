import useSWR from "swr";
import { BASE_URL, PAGE_LIMIT } from "../constants/api";

const fetcher = (url) => fetch(url).then((res) => res.json());

// TODO: Append images here

export default function useFetchPokemon(name) {
	const uri = name ? `${BASE_URL}/${name}` : `${BASE_URL}?limit=${PAGE_LIMIT}`;
	const { data: result, error } = useSWR(uri, fetcher);
	return { result, error };
}
