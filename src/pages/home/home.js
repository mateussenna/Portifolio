import React from "react";
import HeaderContainer from "../../components/header/header";
import './styles.css';
import Profile from "../../components/header/profile/profile";

function Home(){
    return(
        <>
        <HeaderContainer />
        <div id="homeContent" >
            <h1>Procurando um desenvolvedor Fullstack?</h1>
                    <svg className='arrows'>
                        <path className='a1' d='M0 0 L30 32 L60 0'></path>
                        <path className='a2' d='M0 20 L30 52 L60 20'></path>
                        <path className='a3' d='M0 40 L30 72 L60 40'></path>
                    </svg>
        
        </div>
        <Profile />
        
        </>
    )
}
export default Home;