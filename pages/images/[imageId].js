import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Images.module.css";
import { useRouter } from "next/router";

// retorna (paths/params)
export const getStaticPaths = async () => {

	const maxImages = 251
	const api = `https://pokeapi.co/api/v2/pokemon/`;
	const response = await fetch(`${api}/?limit=${maxImages}`)
	const data = await response.json();

	const paths = data.results.map((image,index) => {

		return{
			params: {imageId:(index+1).toString()},
		}

	});
   
	return {
		paths,
		fallback: true,
	}

}
// retorna (props)
export const getStaticProps = async(context)=> {
   
	const id = context.params.imageId;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();

	return {
		props: {image:data}
	}

}

function Images({image}) {
	
	const router = useRouter()
	// carregad conteudo n pre reenderizado
	if(router.isFallback){
		return (
			<>
			<div>
				Carregando...
			</div>
			</>
		)
	}
	
	return (
		<>
		<div className={styles.image_container}>
			<h1 className={styles.title}>{image.name}</h1>
			<Image
				src={`https://cdn.traction.one/pokedex/pokemon/${image.id}.png`}
				width="120"
				height="120"
				alt={image.name}>
			</Image>
			<div>
				<h3># Número:</h3>
				<p>{image.id}</p>
			</div>
			<div className={styles.type_container}>
				<h3># Tipo:</h3>
				{image.types.map((item,index) => (
					<span key={index} className={`${styles.type}  ${styles['type_'+item.type.name]}`}> - {item.type.name} </span>	
				))}  
			</div>
			<div className={styles.data_container}>
				<div className={styles.data_height}>
					<h4>Altura:</h4>
					<p>{image.height * 10} cm</p>
				</div>
				<div className={styles.data_weight}>
					<h4>Peso:</h4>
					<p>{image.weight / 10} kg</p>
				</div>
			</div>	
			<div>
				<Link href={'/'}>
					<a className="btn btn-warning btn-md"> Voltar</a>
				</Link>
			</div>		
		</div>		  
		</>
	)
}


export default Images;