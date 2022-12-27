import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown , fadeOutDown , bounce } from 'react-animations';
import '../styles/Section.css';
import Fade from 'react-reveal/Fade';

export default function Section({title,description,LeftBtnText,RightBtnText,backgroundImg}) {
    return (
        <Wrap  bgImage={backgroundImg} >
            <Fade bottom>
                    <div className="ItemText">
                        <h1>{ title }</h1>
                        <p>{description}</p>
                    </div>
            </Fade>
            <div className="Buttons">
                <Fade bottom>   
                    <div className="ButtonGroup">
                        <div className="LeftButton">
                            {LeftBtnText}
                        </div>
                        {RightBtnText && <div className="RightButton">{RightBtnText}</div> } 
                    </div>
                </Fade>
            </div>
            
            <img className="DownArrow" src= "/images/down-arrow.svg"/>
        </Wrap>
    )
}




const Wrap = styled.div`
    z-index: 10;
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: Center;    
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
/*Keeping it for later
const bounceAnimation = keyframes`${bounce}`;
const fadeinDown = keyframes`${fadeInDown}`;
const fadeoutDown = keyframes`${fadeOutDown}`;
const Fadein = styled.div`
animation: 1s ${fadeinDown};
`;

const Fadeout = styled.div`
    animation: 1s ${fadeoutDown};
`;
*/

/*background-image:url('/images/model-s.jpg');*/

