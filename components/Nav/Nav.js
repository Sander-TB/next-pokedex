import { CgPokemon, CgDarkMode } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className='flex items-center justify-between bg-brand py-5 px-10'>
			<div className='flex text-3xl'>
				<CgPokemon className='inline mt-1' />
				<Link href='/'>
					<a>
						<h1 className='px-3'>Next.JS Pokédex</h1>
					</a>
				</Link>
				<CgPokemon className='inline mt-1' />
			</div>
			<div className='flex text-4xl'>
				<button>
					<CgDarkMode />
				</button>
				<Link href='https://github.com/Sander-TB/next-pokedex'>
					<a target='_blank' rel='noopener noreferrer'>
						<AiFillGithub />
					</a>
				</Link>
			</div>
		</nav>
	);
}
