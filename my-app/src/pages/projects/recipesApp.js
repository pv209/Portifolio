import React from 'react';
import gif from './gif/gifApp.gif'
import './recipesApp.css'

function recipesApp(props) {
    return (
        <main className='col'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"/>
        <div className='container' >
        
        <div className='container img-fluid' >
            <h1>Recipes APP</h1>
            <img src={gif} alt="gif App de Receitas" />
            <div className='resumo'>
            <p>Nesse projeto, a pessoa que estiver utilizando o app pode procurar uma receita especifica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas entre outras funcionalidades.
            As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).</p>
            </div>
            
        </div>  
        <div className='tools container'>
            <div className='list'>
            <ul class="list-group">
            <li class="list-group-item">React.js</li>
            <li class="list-group-item">ContextAPI </li>
            <li class="list-group-item">Metodologia Ágil</li>
            <li class="list-group-item">Slack</li>
            <li class="list-group-item">Trello</li>
            </ul>
            </div>  
            <div className='social'>
            <button className=' btn btn-outline-dark'>GitHub Repository</button>
            <button className='btn btn-outline-dark'>Figma</button>
            </div>
            </div>
            
            </div >
        
             
           
         
            
  
            
       <footer className='container'>
       <p>Feito Por:Paulo Vitor de Farias Borges,Willian Mendes,Adelino Junior,Luciano Amâncio</p>
       </footer>
        </main>
    );
}

export default recipesApp;