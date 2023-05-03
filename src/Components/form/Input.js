import styles from './Input.module.css'

function Input({type, onchange, cadastrar, text, name, placeholder, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                onChange={onchange}
                cadastrar={cadastrar}
                name={name} 
                id={name} 
                placeholder={placeholder} 
                value={value}/>
        </div>
    )
}

export default Input;