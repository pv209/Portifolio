import React from 'react';
import "./style.css"; 
import { Link } from 'react-router-dom';



function index(props) {
return (
<>
<>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
</>
<div className='row g-0'>

    <div className='col-md-6 g-0'>
        <Link to='/sobre-mim'>
        <div className='leftside d-flex justify-content-center align-items-center'>
        
        
            Curriculo
        </div>
        </Link>
    </div>
    <div className='col-md-6 g-0'>
    <Link to='/projetos'>
        <div className='rightside d-flex justify-content-center align-items-center'>
            Projetos
        </div>
    </Link>
    </div>
    

</div>
</>
 
);
}

export default index;