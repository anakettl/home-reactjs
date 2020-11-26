import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import './styles.css'
import api from '../../services/api'
import Description from '../../components/Description'

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    }, []);

    return (
        <div id="general">
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="PoaLab"/>
                    </div>
                    <h2><b>POA</b>LAB</h2>
                    
                </div>
            </div>
            <div id="session">
                <div id="session-content">
                    < Description name="description-block-1" 
                    text="O POALAB é um laboratório de fabricação digital
                    e está conectado à rede mundial de fab labs.
                    Opera como um programa de extensão do
                    IFRS campus Porto Alegre." />
                </div>
                <div id="session-content">
                    <Description name="description-block-2" 
                    text="Temos como missão popularizar o acesso
                    e letramento na fabricação digital,
                    funcionando como uma plataforma de criatividade,
                    aprendizagem e invenção. " />
                </div>
                <div id="session-content">
                    <Description name="description-block-3"
                    text="Estamos conectados a uma comunidade mundial de alunos, educadores,
                    técnicos e inovadores e desenvolver
                    atividades na filosofia do conhecimento aberto."/>
                </div>
                <div id="session-content">
                    <Description name="description-block-3"
                    text="Conheça a carta de Intenções que regra os Fab Labs." />
                    <Link id="link-fab" to="/fab-foundation">
                        FAB CHARTER
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default Landing;