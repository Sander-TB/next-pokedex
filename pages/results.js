import useFetchPokemon from "../hooks/useRequest";
import Pokemon from "../components/pokemon/Pokemon";
import Layout from "../components/Layout/Layout";

export default function result() {
	const { result, error } = useFetchPokemon();

	if (error) return <h1>Something went wrong sadface </h1>;
	if (!result) return <h1>Loading...</h1>;

	return (
		<Layout>
			<h1>Result page</h1>
			<div>
				{result.results.map((pokemon) => (
					<Pokemon pokemon={pokemon} key={pokemon.name} />
				))}
			</div>
		</Layout>
	);
}
