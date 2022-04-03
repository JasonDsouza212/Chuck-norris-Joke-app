import React, { useEffect, useState } from 'react'
import '../css/writeJoke.css'


export default function WriteJokes() {

  let writejokes=JSON.parse(localStorage.getItem('joke'));
  const [jokes,setJokes]=useState(writejokes)
 
  //object creation of joke
  const [data,setData]=useState({
    id:"",
    Jokes:" "
  })
  
  //to update the data with values got from the form
  function handel(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
  }

  //When submitted it should be added to the localstorage
  function submit(){ 
    setJokes([...jokes,data])
   localStorage.setItem('joke',JSON.stringify(jokes))
  }

  return (
    <>
     <div class="wrapper flex_box">
      <form>
        <div class="input">
          <label>
            Title
          </label>
          <input
            onChange={(e)=>handel(e)}  id="id" value={data.id}
            className="name" placeholder="Title Should be greater than 570" type="text">
          </input>
        </div>
        <div class="input">
          <label>
            Joke
          </label>
          <textarea 
            onChange={(e)=>handel(e)}  id="Jokes" value={data.jokes}
            placeholder="Enter whatever Joke You like..." class="comment">              
          </textarea>
        </div>
        <div class="button_wrapper">
          <div></div>
          <a className='button' onClick={submit}>NEXT</a>
        </div>
      </form>
    </div>
    </>
  )
}
