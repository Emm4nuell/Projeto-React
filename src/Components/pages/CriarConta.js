import ProjectForm from '../project/ProjectForm';
import styles from '../css/CriarConta.module.css'

function CriarConta(){
    return(
        <div className={styles.novousuario_container}>
            <h1>Criar conta</h1>
            <p>Crie uma conta para ter acesso ao sistema!</p>
            <ProjectForm btnText="Criar Conta!"/>
        </div>
    )
}

export default CriarConta;