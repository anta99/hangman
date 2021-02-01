import React,{useState,useEffect} from "react";
import Letter from "../Letter/Letter";
//import "./style.css";

export default function Word({wordToRender,guessLetters}){
    const renderArr=wordToRender.split("");
    return(
        <section class="wordHolder">
            {renderArr.map(letter=>guessLetters.includes(letter) ? <Letter letter={letter} /> : <Letter />
            )}
        </section>
    )
}