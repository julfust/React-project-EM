import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Accueil from './views/Accueil';
import Detail from './views/Detail';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';

function App() {

  const setFavorite = (e, news) => {
    e.preventDefault();

    let favoriteNewsList = JSON.parse(localStorage.getItem("Favorite"));

    // Initialisation du local storage: ajout du premier favoris
    if(!favoriteNewsList) {
      localStorage.setItem("Favorite", JSON.stringify([news]));
      return;
    }

    // On vérifie si la news a déjà été ajoutée dans le local storage (on la supprime si c'est le cas)
    const newsIndex = favoriteNewsList.findIndex((favoriteNews) => news.fields.id === favoriteNews.fields.id);

    if(newsIndex === -1) {
      favoriteNewsList.push(news);
    } else {
      favoriteNewsList.splice(newsIndex, 1);
    }

    localStorage.setItem("Favorite", JSON.stringify(favoriteNewsList));
  }

  return (
    <BrowserRouter>
        <Switch>
          <Route 
            path="/"
            exact 
            render={(props) => (
              <Accueil {...props} setFavorite={setFavorite} />
            )} />
          <Route 
            path="/recherche" 
            exact 
            render={(props) => (
              <Recherche {...props} setFavorite={setFavorite} />
            )} />
          <Route 
            path="/favoris" 
            exact 
            render={(props) => (
              <Favoris {...props} setFavorite={setFavorite} />
            )} />
          <Route 
            path="/detail/:newsId"
            exact
            render={(props) => (
              <Detail {...props} setFavorite={setFavorite} />
            )} 
           />
          <Route component={Accueil} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
