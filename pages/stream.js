import { Container } from "react-bootstrap";
import styles from '../styles/Stream.module.css';
import Image from "next/image";
import { Button, Col, Row } from "reactstrap";
import { useState } from "react";


export function Stream(){  

	const [showProsseguir, setShowMe] = useState(true);

	function prosseguir() {
		setShowMe(!showProsseguir);
	}

	return (
		<>
		<Container className="bg-light border">
			<Row>
				<Col md={12} >
					<div className={styles.stream_init}>
					{showProsseguir &&
						<div className={styles.stream_texto}>
							Esta é uma simulação clínica que não utiliza pacientes reais. Todos as informações aqui apresentadas foram criadas exclusivamente com propósito de educação médica.
						</div>
					}	
					{showProsseguir &&
						<div className={styles.stream_btn}>
							<Button onClick={prosseguir}
								color="primary"
								outline
							>
								Prosseguir
							</Button>
						</div>
					}	
					</div>					
				</Col>
			</Row>
		</Container>				
		</>
	)

}

export default Stream;