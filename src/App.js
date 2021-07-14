import { BrowserRouter, Route } from 'react-router-dom';

import Accueil from './views/Accueil';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" component={Accueil} exact />
        <Route path="/recherche" component={Recherche} exact />
        <Route path="/favoris" component={Favoris} exact />
    </BrowserRouter>
  );
}

export default App;
