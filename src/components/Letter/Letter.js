import React,{useState,useEffect} from "react";
import "./style.css";

export default function Letter({letter=""}){
    return(
        <span class="letter">{letter}</span>
    )
}