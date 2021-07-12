
import { useEffect, useState} from "react";
import './home.css';
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        async function loadFilmes(){
            const resposnse = await api.get('r-api/?api=filmes');
            setFilmes(resposnse.data);
        }

        loadFilmes();

    },[]);

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}