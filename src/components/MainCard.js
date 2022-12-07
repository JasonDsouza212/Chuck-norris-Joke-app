import React, { useState,useEffect } from 'react'
import '../css/card.css'
export default function () {
    let arr=[];
    if(localStorage.getItem('joke')!=null){
       arr=JSON.parse(localStorage.getItem('joke'))
    };
    const [local,setLocal]=useState(arr)
    const [joke,setJoke]=useState("")
    const [jokeid,setJokeID]=useState("")

    //API call made
     const jokeLoad=()=>{
        fetch("https://icanhazdadjoke.com/slack")
       .then(response => response.json())
       .then(json =>{
           //to update the current card
           console.log(json.value['attachments[0]']['text'])
           setJoke(json.value['fallback'])
           setJokeID(json.value['id'])
           
           //to update the local storage joke object
           const jokeobj={
               id:json.value['id'],
               Jokes:json.value['joke']
           }

           //calling function to add to localStorage
           handeljokeChange(jokeobj)
           localStorage.setItem("joke",JSON.stringify(local))

         })
         }
           
         
         function handeljokeChange(joke){
            setLocal([...local,joke])
          }
         
          //To call the fuction when first rendered
         useEffect(()=>{
             jokeLoad()
         },[]) 

    return (
        <>
    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <h3>JOKE NUMBER {jokeid}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{joke}</p>
                        <a onClick={jokeLoad}>NEXT</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
    }
