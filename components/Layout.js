import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { Container } from 'react-bootstrap';


export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<title>Catalog</title>
			</Head>
			<Navbar />
				<Container >
					<main className="main-container">{children}</main>
				</Container>
			<Footer />
		</>
	)
}