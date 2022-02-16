import { Container } from "react-bootstrap";
import styles from '../styles/Caso.module.css';
import Image from "next/image";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Link from "next/link";


export async function getServerSideProps(context) {

	const res = await fetch(`https://api.paciente360.com.br/casos/get-caso/66`);
	const data = await res.json();

	if (!data) {
		return {
		  notFound: true,
		}
	}

	return {
		props:{data},

	}
	
}

function Caso({data}) {
	
	return (
		<>
			<Container className="bg-light border">
				<h3>Casos</h3>
				<span></span>
				<br></br>
				<Form>
					<Row>
						<Col md={3} >
							<FormGroup>
								<Image
								//	src={'https://avp-development.s3-accelerate.amazonaws.com/figurinos/paulete_blusa_verde_escuro198665165161810949.jpg'}
									src={data.caso.patient.photo}
									width="120"
									height="120"
									alt="foto">
								</Image>
							</FormGroup>
						</Col>
						<Col md={6}>
							<Link
								href={'/stream'}
							>
								<a className="btn btn-primary btn-md"> Executar Caso</a>
							</Link>
						</Col>
					</Row>
					<Row>						
						<Col md={6}>
							<FormGroup>								
								<Label for="nomeCaso">
								NOME DO CASO
								</Label>
								<Input
									id="nomeCaso"
									name="nomeCaso"
									type="text"
									value={data.caso.nome}
									readOnly
								/>								
							</FormGroup>							
						</Col>
						<Col md={3}>
							<FormGroup>
							<Label for="tipoClinico">
								TIPO CLINICO
								</Label>
								<Input
									id="tipoClinico"
									name="tipoClinico"
									type="text"
									value={data.caso.tipoclinico}
									readOnly
								/>								
							</FormGroup>
						</Col>
						<Col md={3}>
							<FormGroup>
							<Label for="tipoDiagnostico">
								DIAGNÓSTICO
								</Label>
								<Input
									id="tipoDiagnostico"
									name="tipoDiagnostico"
									type="text"
									value={data.caso.tema.nome}
									readOnly
								/>								
							</FormGroup>							
						</Col>
					</Row>
					
				</Form>
				<br></br>
			</Container>
		</>

	)
}

export default Caso;