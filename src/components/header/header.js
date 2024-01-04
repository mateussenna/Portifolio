import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function HeaderContainer() {

    return(
        <>
        
        <header >
            <nav  > 
                <ul >
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/tecnologias'}>
                        <li>Tecnologias</li>    
                    </Link>
                    <Link to={'/projetos'}>
                        <li >Projetos</li>
                    </Link>
                    <Link to={'/contato'}>
                        <li>Contato</li>
                    </Link>
                    
                </ul>
            </nav>
            </header>
            
        </>
    );
}

export default HeaderContainer;
