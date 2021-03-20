import Link from "next/link";
import { CgPokemon } from "react-icons/cg";

export default function Nav() {
	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='https://bulma.io'>
					<h1>Next.js Pokédex</h1>
					<CgPokemon />
				</a>

				<a
					role='button'
					className='navbar-burger'
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>

			<div id='navbarBasicExample' className='navbar-menu'>
				<div className='navbar-start'>
					<a className='navbar-item'>Home</a>

					<a className='navbar-item'>About</a>
					<a className='navbar-item'>Results</a>
				</div>
			</div>
		</nav>
	);
}
