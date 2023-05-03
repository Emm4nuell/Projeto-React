import React from "react";
import styles from '../css/Container.module.css'

//VAI PODER ALTERAR CLASSES
//PEGAR TODO O CONTEUDO QUE ESTA NO APP ROUTER E SERA CHAMADO NESSA CLASSE
function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Container;