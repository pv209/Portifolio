import React from 'react';
import "./App.css";

function index(props) {
return (
<div className='row no-gutters'>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <div className='col-md-6 no-gutters'>
        <div className='leftside d-flex justify-content-center align-items-center'>
        <img src="../Images/image1.jpg" class="img-fluid" alt="Responsive " />
            Curriculo
        </div>
    </div>
    <div className='col-md-6 no-gutters'>
        <div className='rightside d-flex justify-content-center align-items-center'>
            Projetos
        </div>
    </div>

</div>
);
}

export default index;
