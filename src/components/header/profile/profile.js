import React from "react";
import './styles.css';
import js from '../../../assets/js.png';
import node from '../../../assets/node (1).png';
import react from '../../../assets/react.png';
import profilepic from '../../../assets/cachorro.jpg';

function Profile(){
    return(
        <>
        <div className='content-container'>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-card">
                        <img className="profile-image" src={profilepic} />
                        <span className="name-text">Mateus Senna</span>
                        <span className="profile-text">
                            Colocar um texto legal depois
                        </span>
                        <a href="https://www.linkedin.com/in/mateussenna/" target="_blank">
                            <button className="profile-button">
                                Meu linkedin
                            </button>
                        </a>
                        <div className="divider"></div>
                        <div className="icons-container">
                            <img className="icon-item" src={js} />
                            <img className="icon-item" src={node} />
                            <img className="icon-item" src={react} />
                        </div>
                    </div>
                    <p className="profile-sinopse">
                    modelo de texto teste para testar esse testamento aqui que estou testando 
                    </p>
                </div>
            </div>
        </div>

        
        </>

    )
}

export default Profile;