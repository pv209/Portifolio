import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Pricipal from './pages/TelaPrincipal';
import Projetos from './pages/Projetos';
import RecipesApp from './pages/projects/recipesApp';
import MongoDB from './pages/projects/mongoDb';
import StoreManager from './pages/projects/StoreManager';
import MySQL from './pages/projects/MySQL';
import curriculo from './pages/curriculo/curriculo';



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Pricipal } />
        <Route exact path='/projetos' component={Projetos} />
        <Route exact path='/projetos/appReceitas' component={RecipesApp}/>
        <Route exact path='/projetos/mongoDB' component={MongoDB}/>
        <Route exact path='/projetos/storeManager' component={StoreManager}/>
        <Route exact path='/projetos/MySql' component={MySQL}/>
        <Route exact path='/sobre-mim' component={curriculo}/>

      </Switch>
    );
  }
}

export default App;
