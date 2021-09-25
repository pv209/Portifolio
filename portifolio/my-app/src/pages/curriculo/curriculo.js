import React from 'react';
import './curriculo.css';
import pv from './images/pv.jpeg'

function curriculo(props) {
    function redirectGit() {
        window.location.href = "https://github.com/pv209";

    }

    function redirectLink() {
        window.location.href = "https://www.linkedin.com/in/paulo-vitor-de-farias-borges-333368206/";

    }
    return (
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <main className='main'>
        <div className='cabeçalho'>
    <h1>Paulo Vitor de Farias Borges</h1>
    <div className='pv-image-cont'>
    <img src={pv} alt="minha foto" class="pv-image rounded-circle" />
    </div>
    </div>
    </main>
    <div className="textos">
    <div className="resumo">
        <h4>Sobre Mim:</h4>
        <p>  Sou um estudante de desenvolvimento Web na Trybe e venho nesse ultimo ano <br />
           em uma jornada para me tornar um programador Júnior.Tenho me esforçado muito e <br />
           com certeza vou conseguir alcançar meu objetivo.
             Na minha adolescência estudei no Colégio Militar de Brasília e Rio de Janeiro,onde <br />
           aprendi a ser pró-ativo e seguir normas as quais vao te fazer prosperar.Joguei basquete <br />
           competitivamente e apredi sobre espírito de equipe e dar o seu melhor em busca de um objetivo.</p>
    </div>
    <div className="toolsMain">
        <h4>Linguagens e Ferramentas:</h4>
    <p>HTML,CSS,JavaScript,Redux,Context.api,MongoDB,MySQL <br />
       Node.js,Jest,Testes,Express</p>
    </div>
    <div className="socials">
        <h4 h4>Socials:</h4>
        <button onClick={redirectGit}className=' btn btn-outline-dark'>GitHub</button>
        <button onClick={redirectLink} className=' btn btn-outline-dark'>Linkedin</button>
    </div>
    </div>

    

        
        
        </div>
    
    );
}

export default curriculo;