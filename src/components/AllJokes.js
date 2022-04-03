import React, { useEffect, useState } from 'react'
import '../css/AllJokes.css'

export default function AllJokes() {
  
  const jokeobj=JSON.parse(localStorage.getItem('joke'))
  const [search,setSearchterm]=useState("")
  const [joke,setJoke]=useState(jokeobj)
  const [currentJoke,setCurrentJoke]=useState(joke)

  //Is used for searching a term
  function searched(id){
    setCurrentJoke(joke.filter(res=>res.id == id))
  }

  //used for deletion of local Jokes
  function deleteres(id){
    setJoke(joke.filter(res=>res.id !== id))
    setCurrentJoke(joke)
  }

  //renders when the search is made
  useEffect(()=>{
    if(search==""){
      setCurrentJoke(joke)
    }else{
      searched(search)
    }
  },[search])

  //When ever a deletion is made the localstorage is updated
  useEffect(()=>{
    localStorage.setItem('joke',JSON.stringify(joke));
  },[joke])

  return (
    <>
<div class="main">
  <h1>ALL JOKES</h1>
  <input placeholder='Search for Id Numbers'  onChange={(e)=>setSearchterm(e.target.value)} value={search} className='search' min={1} type="Number"></input>
  <ul class="ccards">
     {currentJoke.map(item=>
          <li class="ccards_item">
           <div class="ccard">
             <div class="ccard_content">
               <h2 class="ccard_title">Joke Number {item.id}</h2>
               <p class="ccard_text">{item.Jokes}</p>
                <button
                onClick={()=>deleteres(item.id)} 
                class="btn ccard_btn">DELETE</button> 
             </div>
           </div>
         </li> 
       )}
  </ul>
</div>
    </>
  )}
