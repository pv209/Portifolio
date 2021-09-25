import React from 'react';
import mongo from './gif/mongo.gif'
import './recipesApp.css'


function MongoDB(props) {

    function redirect() {
        window.location.href = "https://github.com/pv209/MongoDB-Aggregations";

    }
    return (
        <main className='col'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"/>
        <div className='container' >
        
        <div className='container img-fluid' >
            <h1>Mongo DB Aggregations</h1>
            <img src={mongo} alt="gif App de Receitas" />
            <div className='resumo'>
            <p>Nesse projeto, foi feito 12 querys em mongodb para encontrar as informções requisitadas.</p>
            </div>
            
        </div>  
        <div className='tools container'>
            <div className='list'>
            <ul class="list-group">
            <li class="list-group-item">MongoDB</li>
            <li class="list-group-item">Visual Studio</li>
            </ul>
            </div>  
            <div className='social'>
            <button onClick={redirect} className=' btn btn-outline-dark'>GitHub Repository</button>
            </div>
           
            </div>
            </div >
        
             
           
         
            
  
            
       <footer className='container'>
       <p>Feito Por:Paulo Vitor de Farias Borges</p>
       </footer>
        </main>
    );
}

export default MongoDB;