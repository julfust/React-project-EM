import './App.css';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Accueil from './views/Accueil';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <header>
          <h1>Mon application</h1>
          <NavLink to="/"  activeClassName="selected" exact>Accueil</NavLink>
          <NavLink to="/recherche" activeClassName="selected" exact>Recherche</NavLink>
          <NavLink to="/favoris" activeClassName="selected" exact>Favoris</NavLink>
        </header>

        <Route path="/" component={Accueil} exact />
        <Route path="/recherche" component={Recherche} exact />
        <Route path="/favoris" component={Favoris} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
