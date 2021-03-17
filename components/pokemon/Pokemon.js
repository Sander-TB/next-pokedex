import useFetchPokemon from "../../hooks/useRequest";
import Image from "next/image";

export default function Pokemon({ pokemon }) {
	const { name } = pokemon;
	const { result, error } = useFetchPokemon(name);

	if (error) return <h1>Something Went wrong, sadface</h1>;
	if (!result) return <h1>Loading...</h1>;

	return (
		<div>
			<h2>{name}</h2>
			<Image
				src={result.sprites.front_default}
				alt={name}
				height={200}
				width={200}
			/>
			<div>{result.types.map((types) => types.type.name)}</div>
			<button>
				<a href={`pokemon/${pokemon.name}`}>Details</a>
			</button>
		</div>
	);
}
