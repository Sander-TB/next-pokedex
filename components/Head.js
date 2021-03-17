import NextHead from "next/head";

export default function Head({
	title,
	description,
	author,
	keywords = "pokemon, next, pokedex",
}) {
	return (
		<NextHead>
			<title>{title ? title : "Next.js Pokedex"}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='description' description={description} />
			<meta name='author' author='Sander Trollebø' />
			<meta name='keywords' content={keywords} />
		</NextHead>
	);
}
