import React from 'react';
import './styles/index-style.css';

function PortadaPrincipal() {
    return (
        <main id="main">
            <article className="portadaPrincipal">
                <section className="textoPortada">
                    <h1>ExpenseMaster</h1>
                    <p className="sloganPortada"><i>"Ahorra hoy, vive mejor mañana"</i></p>
                    <a target="_blank" href="https://www.principal.com/es/personas/vida-y-dinero/cinco-pasos-para-fijar-tus-metas-financieras-este-a%C3%B1o"><button className="botonPortada">Establece Metas</button></a>
                </section>
                <section className="imagenPortada"><img src="images/ChanchitoMonederoLogo.png" /></section>
            </article>
        </main>
    );
}

export default PortadaPrincipal;