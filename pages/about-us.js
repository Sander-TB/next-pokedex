import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";

export default function about() {
	return (
		<Layout>
			<Heading content='About Page' />
			<div className='container box'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
					minus molestiae vel beatae natus eveniet ratione temporibus aperiam
					harum alias officiis assumenda officia quibusdam deleniti eos
					cupiditate dolore doloribus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
					minus molestiae vel beatae natus eveniet ratione temporibus aperiam
					harum alias officiis assumenda officia quibusdam deleniti eos
					cupiditate dolore doloribus!
				</p>
			</div>
		</Layout>
	);
}
