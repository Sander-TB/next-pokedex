import Link from "next/link";
import { CgPokemon } from "react-icons/cg";

export default function Nav() {
	return (
		<nav
			className='navbar has-background-primary px-6 py-4'
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className="navbar-item">
				<Link href='/'>
					<h1 className='title'>
						Next.js Pokédex
					</h1>
				</Link>
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
				<div className='navbar-end is-size-5 has-text-black'>
					<a className="navbar-item">
						<Link href='/'>
							Home
						</Link>
					</a>
					<a className="navbar-item">
						<Link href='/about-us'>
							About us
						</Link>
					</a>
						<a className="navbar-item">
						<Link href='/results'>
							Results
						</Link>
					</a>
				</div>
			</div>
		</nav>
	);
}
