import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Card from '../components/Card';
import { Button } from 'reactstrap';

export async function getStaticProps(context){

	const maxImages = 55
	const api = `https://pokeapi.co/api/v2/pokemon/`;
	const response = await fetch(`${api}/?limit=${maxImages}`)
	const data = await response.json();

	// const response = await axios.get(
	// 	'https://jsonplaceholder.typicode.com/photos/?limit=5'
	// );
	// const data = await response.data;

	data.results.forEach((item,index) => {
		item.id = index+1;
	})	

	return {
		props:{
			images: data.results,
		}
	}
}

function Home({images = {}}) {
	return (
		<>
		<div className={styles.title_container}>
				<h1 className={styles.title}>
					images<span>Next</span>
				</h1>
				<Image 
					src="/images/api_.png" 
					width='50' 
					height='50' 
					alt='images'>
				</Image>	
							
			</div>
			<div className={styles.img_container}>				
				{images.map((image) => (									
					<Card key={image.id} image={image}></Card>
				))}				
			</div>
		</>		
	)
}

export default Home;