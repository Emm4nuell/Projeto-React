import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "../css/Navbar.module.css"

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/pedido">Pedido</Link></li>
                    <li className={styles.item}><Link to="#">Cadastrar</Link></li>
                    <li className={styles.item}><Link to="/listadeusuarios">Usuarios</Link></li>
                    <li className={styles.item}><Link to="#">Relatório</Link></li>
                    <li className={styles.item}><Link to="#">Sobre</Link></li>
                </ul>
            </Container>
      </nav>
    )
}

export default NavBar;