import React from 'react';
import Logo from '../../assets/img/Logo_AluraFlix.png';
import "./Me"

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                 <img class="Logo" src={Logo} alt="AluraFlix Logo" />
            </a>
            <a className="ButtonLink" href="/">Novo Vídeo</a>
        </nav>
    );
}

export default Menu