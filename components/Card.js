import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";


function Card({image}) {

	return(
		<>
		<div className={styles.card}>
			<Image
				src={`https://cdn.traction.one/pokedex/pokemon/${image.id}.png`}
				width="120"
				height="120"
				alt={image.name}
			/>
			<p className={styles.id}>#{image.id}</p>
			<h3 className={styles.title}>{image.name}</h3>		
			<Link href={`/images/${image.id}`}>
				<a className="btn btn btn-danger btn-sm">Detalhes</a>
			</Link>
		</div>
		</>	
	) 

}
export default Card;