
import './header.css';

import { Link, link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/favoritos">Salvos</Link>
        </header>
    );
}