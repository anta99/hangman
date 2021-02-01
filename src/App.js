import React,{useEffect,useState} from "react";
import './App.css';
import Word from "./components/Word/Word";
import Lifes from "./components/Lifes/Lifes";

function App() {
  const [pressed,setPressed]=useState([]);
  const [correctLetters,setCorrectLetters]=useState([]);
  const [lifes,setLifes]=useState(5);
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
      alert("Izgubio si!");
      window.onkeypress=()=>false;
    }
  },[lifes])
  useEffect(()=>{
    if(correctLetters.length){
      const wordArr=[...new Set(word.split(""))].sort().join("");
      const correctLettersArr=correctLetters.sort().join("");
      console.log(wordArr,correctLettersArr);
      if(wordArr==correctLettersArr){
        alert("Pobedio si!");
        window.onkeypress=()=>false;
      }
    }
  },[correctLetters])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifes:{<Lifes lifes={lifes} />}</h1>
       <Word wordToRender={word} guessLetters={correctLetters} />
       {/* {console.log(pressed,correctLetters)} */}
       <p>Used letters:{pressed.join(",")}</p>
      </header>
    </div>
  );
}

export default App;