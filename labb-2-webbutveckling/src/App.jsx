import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [posts, setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/DanielJohansson1989/repos')
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(error=>console.error('Kunde inte läsa data ' + error));
    }, []);

  return (
    <>
      <div className='myProjects'>
        <h2>My Projects</h2>
        <ul>
          {
            posts.map(post=>(
              <li key={post.id}>
                <h3>{post.name}</h3>
                <p>{post.description}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )  
}

export default App
