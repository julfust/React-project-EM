import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Accueil from './views/Accueil';
import Detail from './views/Detail';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/recherche" component={Recherche} exact />
          <Route path="/favoris" component={Favoris} exact />
          <Route path="/detail/:newsId" component={Detail} exact />
          <Route component={Accueil} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
