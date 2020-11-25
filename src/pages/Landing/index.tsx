import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'
import './styles.css'
import api from '../../services/api'
import Textarea from '../../components/Textarea'
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
                <h2>PoaLAB</h2>
                    
                </div>
            </div>
            <div id="session">
                < Description name="description-block-1" 
                text="O POALAB é um laboratório de fabricação digital
                e está conectado à rede mundial de fab labs.
                Opera como um programa de extensão do
                IFRS campus Porto Alegre." />

                <Description name="description-block-2" 
                text="Temos como missão popularizar o acesso
                e letramento na fabricação digital,
                funcionando como uma plataforma de criatividade,
                aprendizagem e invenção. " />

                <Description name="description-block-3"
                text="Ser um Fab Lab significa estar conectado
                a uma comunidade mundial de alunos, educadores,
                técnicos, pesquisadores e inovadores e desenvolver
                atividades dentro da filosofia do conhecimento aberto."/>
                <p>Conheça a carta de Intenções que regra os Fab Labs. 
                    <Link to="/fab-foundation">
                        FAB CHARTER
                    </Link> 
                </p>
                
                
            </div>
        </div>
    );
}

export default Landing;