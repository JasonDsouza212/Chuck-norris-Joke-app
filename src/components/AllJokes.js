import React, { useEffect, useState } from 'react'
import '../css/AllJokes.css'

export default function AllJokes() {
  
  const jokeobj=JSON.parse(localStorage.getItem('joke'))
  const [search,setSearchterm]=useState("")
  const [joke,setJoke]=useState(jokeobj)
  const [currentJoke,setCurrentJoke]=useState(jokeobj)

  //Is used for searching a term
  function searched(id){
    setCurrentJoke(joke.filter(res=>res.id == id))
  }

  //used for deletion of local Jokes
  function deleteres(id){
    setJoke(joke.filter(res=>res.id !== id))
    setCurrentJoke(joke)
    localStorage.setItem('joke',JSON.stringify(joke));
  }

  //renders when the search is made
  // useEffect(()=>{
  //   if(search==""){
  //     setCurrentJoke(joke)
  //   }else{
  //     searched(search)
  //   }
  // },[search])

  //When ever a deletion is made the localstorage is updated
  // useEffect(()=>{
  //   localStorage.setItem('joke',JSON.stringify(joke));
  // },[joke])

  return (
    <>
<div class="main">
  <h1>ALL JOKES</h1>
  <input placeholder='Search for Id Numbers'  onChange={(e)=>setSearchterm(e.target.value)} value={search} className='search' min={1} type="Number"></input>
  <ul class="ccards">
     {currentJoke.filter((val)=>{
       if(search===" "){
         return val
       }else if(val.id.toString().toLowerCase().includes(search.toString().toLowerCase())){
         return  val
       }
     }).map(val=>
          <li class="ccards_item">
           <div class="ccard">
             <div class="ccard_content">
               <h2 class="ccard_title">Joke Number {val.id}</h2>
               <p class="ccard_text">{val.Jokes}</p>
                <button
                onClick={()=>deleteres(val.id)} 
                class="btn ccard_btn">DELETE</button> 
             </div>
           </div>
         </li> 
       )}
  </ul>
</div>
    </>
  )}
