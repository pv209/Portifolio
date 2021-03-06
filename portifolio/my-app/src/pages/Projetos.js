import React from 'react';
import { Link } from 'react-router-dom';
import recipeImg from './images/recipes.jpg'
import mongo from './images/mongodb.jpg'
import node2 from './images/node2.png'
import sql from './images/mySql.jpg'
import './projetos.css'

function Projetos(props) {
    return (
<div className='container'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"/>
<div className="row">


<div class="card col" >
    <Link to='/projetos/appReceitas'>
  <img class="card-img-top" src={recipeImg} alt="Card img"/>
  </Link>
  <div class="card-body">
    <h5 class="card-title">App Receitas</h5>
    <p class="card-text">Projeto feito usando meus conhecimentos de Front End. <br />
                         Obs:Ainda não foi implementado CSS no projeto,porém fizemos um <br />
                         Figma para melhorar a vizualização do projeto com CSS</p>
  </div>
  <div class="card-body">
  <Link to='/projetos/appReceitas'>
  <button className=' btn btn-outline-dark'>Detalhes</button>
  </Link>
  </div>
</div>


<div class="card col" >
    <Link to='/projetos/mongoDB'>
  <img class="card-img-top" src={mongo} alt="Card img"/>
  </Link>
  <div class="card-body">
    <h5 class="card-title">Mongo Aggregations</h5>
    <p class="card-text">Projeto feito usando meus conhecimentos para fazer querys em MongoDB</p>
  </div>
  <div class="card-body">
  <Link to='/projetos/mongoDB'>
  <button className=' btn btn-outline-dark'>Detalhes</button>
  </Link>
  </div>
</div>





<div class="card col" >
    <Link to='/projetos/storeManager'>
  <img class="card-img-top" src={node2} alt="Card img"/>
  </Link>
  <div class="card-body">
    <h5 class="card-title">Store Manager</h5>
    <p class="card-text">Projeto feito usando meus Conhecimentos em BackEnd para criar um protótipo de <br />
                         como seria o backEnd de uma Loja.</p>
  </div>
  <div class="card-body">
  <Link to='/projetos/storeManager'>
  <button className=' btn btn-outline-dark'>Detalhes</button>
  </Link>
  </div>
</div>

<div class="card col" >
<Link to='/projetos/MySql'>
  <img class="card-img-top" src={sql} alt="Card img"/>
  </Link>
  <div class="card-body">
    <h5 class="card-title">MySQL</h5>
    <p class="card-text">Projeto feito usando conhecimentos em MySQL</p>
  </div>
  <div class="card-body">
  <Link to='/projetos/MySql'>
  <button className=' btn btn-outline-dark'>Detalhes</button>
  </Link>
  </div>
</div>


</div>
        </div>
    );
}

export default Projetos;