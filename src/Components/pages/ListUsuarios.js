import { useEffect, useState } from "react";

function ListUsuarios(){

    const[usuarioslist, setUsuariosList] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:8080/listusuarios")
            .then(retorno => retorno.json())
            .then(retorno_convertido => setUsuariosList(retorno_convertido))
            .then((error) => console.log(error))
    }, []);

    return(
        <div className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Cep</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                    {usuarioslist.map((obj, indice) => (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.endereco.cep}</td>
                            <td><input className="btn btn-success" type="button" value="Selecionar"/></td>
                        </tr>
                    ))}
            </tbody>

        </div>
    )
}

export default ListUsuarios;