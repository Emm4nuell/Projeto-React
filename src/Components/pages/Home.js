import LinkButton from '../layout/LinkButton';
import styles from '../css/Home.module.css'

function Home(){
    return (
            <section className={styles.home_container}>
                <h1>Bem-vindo ao <span>Sistema</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/criarconta" text="Criar conta" />
            </section>
    )
}

export default Home;