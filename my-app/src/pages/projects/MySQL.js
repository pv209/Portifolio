import React from 'react';
import oneForAll from './gif/one-for-all.gif'
import './recipesApp.css'

function MySQL(props) {
    return (
        <main className='col'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"/>
        <div className='container' >
        
        <div className='container img-fluid' >
            <h1>My SQL</h1>
            <img src={oneForAll} alt="gif App de Receitas" />
            <div className='resumo'>
            <p>Nesse projeto,foi criado um banco de dados no MySQL e adicionado 7 tabelas,as quais foram criadas <br />
               views para completar os desafios.</p>
            </div>
            
        </div>  
        <div className='tools container'>
            <div className='list'>
            <ul class="list-group">
            <li class="list-group-item">MySql</li>
            </ul>
            </div> 
            <div>
            <button className=' btn btn-outline-dark'>GitHub Repository</button>
            </div> 
        
            </div>
            </div >
        
             
           
            
  
            
       <footer className='container'>
       <p>Feito Por:Paulo Vitor de Farias Borges</p>
       </footer>
        </main>
    );
}

export default MySQL;