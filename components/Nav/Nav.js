import Link from "next/link";
import { CgPokemon } from "react-icons/cg";

export default function Nav() {
	return (
		<nav className='nav'>
			<div className='logo'>
				<h1>Next.js Pokédex</h1>
				<CgPokemon />
			</div>
			<div className='nav-links'>
				<Link href='/'>Home</Link>
				<Link href='/about-us'>About Us</Link>
				<Link href='/results'>Results</Link>
			</div>
		</nav>
	);
}
