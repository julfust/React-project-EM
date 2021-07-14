import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/" activeClassName="selected" exact>Accueil</NavLink>
            <NavLink to="/recherche" activeClassName="selected" exact>Liste des événements</NavLink>
            <NavLink to="/favoris" activeClassName="selected" exact>Favoris</NavLink>
        </div>
    );
};

export default Navigation;