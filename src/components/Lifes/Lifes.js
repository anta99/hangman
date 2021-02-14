import React from "react";

import "./style.css";
import life6 from "../../assets/images/life6.png";
import life5 from "../../assets/images/life5.png";
import life4 from "../../assets/images/life4.png";
import life3 from "../../assets/images/life3.png";
import life2 from "../../assets/images/life2.png";
import life1 from "../../assets/images/life1.png";
import life0 from "../../assets/images/life0.png";

export default function Lifes({lifes}){
    let imgSrc;
    switch (lifes) {
        case 6:
            imgSrc=life6;
            break;
        case 5:
            imgSrc=life5;
            break;
        case 4:
            imgSrc=life4;
            break;
        case 3:
            imgSrc=life3;
            break;
        case 2:
            imgSrc=life2;
            break;
        case 1:
            imgSrc=life1;
            break;
        case 0:
            imgSrc=life0;
            break;             
    }
    return(
        <section className="imgDiv">
            <img src={imgSrc} alt="hangman picture" />
        </section>
        // <span>{lifes}</span>
        
    )
}