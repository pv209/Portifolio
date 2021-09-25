import React from 'react';
import nodeStore from './gif/nodeStore.gif'
import './recipesApp.css'

function StoreManager(props) {
    return (
        <main className='col'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"/>
        <div className='container' >
        
        <div className='container img-fluid' >
            <h1>Online Store</h1>
            <img src={nodeStore} alt="gif App de Receitas" />
            <div className='resumo'>
            <p>Nesse projeto, foi feito rotas para cadastrar,procurar,atualizar e deletar <br />
               receitas ou vendas de uma loja,tudo sendo salvo no banco de dados do mongoDB</p>
            </div>
            
        </div>  
        <div className='tools container'>
            <div className='list'>
            <ul class="list-group">
            <li class="list-group-item">Node.js</li>
            <li class="list-group-item">Express</li>
            <li class="list-group-item">MongoDB</li>
            <li class="list-group-item">ThunderClient</li>
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

export default StoreManager;