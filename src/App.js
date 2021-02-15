import React,{useEffect,useState} from "react";
import './App.css';
import Word from "./components/Word/Word";
import Lifes from "./components/Lifes/Lifes";

function App() {
  const [pressed,setPressed]=useState([]);
  const [correctLetters,setCorrectLetters]=useState([]);
  const [lifes,setLifes]=useState(6);
  const [word,setWord]=useState("");
  const keysRegex=/^[A-z]$/;
  const pressHandler=(e)=>{
    if(keysRegex.test(e.key)){
      console.log(e.key);
      if(!pressed.includes(e.key) && !correctLetters.includes(e.key)){
        if(word.indexOf(e.key)!=-1){
          setCorrectLetters([...correctLetters,e.key]);
        }
        else{
          setPressed([...pressed,e.key]);
          setLifes(lifes-1);
        }
      }
      else{
        console.log("Vec je bilo");
      }
    }
    else{
      console.log("nije slovo");
    }
  }
  useEffect(()=>{
    fetch("https://random-word-api.herokuapp.com/word?number=1").then(res=>res.json()).then(data=>{
      setWord(data[0]);
      console.log(`Easter egg:${data[0]}`)
    })
  },[])

  useEffect(()=>{
    window.onkeypress=pressHandler;
  })
  useEffect(()=>{
    if(lifes==0){
      window.confirm(`You lost.\nSecret word was:${word}.\nPress OK if you want to play again.`) ? window.location.reload() : window.onkeypress=()=>false;
    }
  },[lifes])
  useEffect(()=>{
    if(correctLetters.length){
      const wordArr=[...new Set(word.split(""))].sort().join("");
      const correctLettersArr=correctLetters.sort().join("");
      if(wordArr==correctLettersArr){
        window.confirm(`You won!Press OK if you want to play again.`) ? window.location.reload() : window.onkeypress=()=>false;
      }
    }
  },[correctLetters])
  return (
    <div className="App">
      <header className="App-header">
        <Lifes lifes={lifes} />
        <Word wordToRender={word} guessLetters={correctLetters} />
        {/* {console.log(pressed,correctLetters)} */}
        <p>Used letters:{pressed.join(",")}</p>
      </header>
    </div>
  );
}

export default App;
