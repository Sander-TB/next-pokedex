import { CgPokemon } from "react-icons/cg";

export default function Nav() {
	return (
		<nav className='flex bg-brand py-5 px-10'>
			<div className='flex text-3xl'>
				<CgPokemon className='inline mt-1' />
				<h1 className='px-3'>Next.JS Pokédex</h1>
				<CgPokemon className='inline mt-1' />
			</div>
		</nav>
	);
}
