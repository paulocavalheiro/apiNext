import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css';
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function NavBar(){

	return(
		<>
		<Nav
			className="navbar navbar-expand-lg navbar-dark bg-dark ml-auto"
			expand="md"
		>			
			<div className={styles.logo}>
				<Image
					src="/images/next_.png"
					width="60"
					height="60"
					alt="Imagem"
				/>
				<h1>Api images</h1>
			</div>
			
			<NavItem>
				<NavLink
					active
					href="/"
				>
					Index
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					active
					href="/about"
				>
					Sobre
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					href="/caso"
				>
					Caso
				</NavLink>
			</NavItem>
			
		</Nav>
		</>
	)

}