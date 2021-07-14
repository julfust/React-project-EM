import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';

function Acceuil() {
    const [ latestNews, setLatestNews ] = useState();

    useEffect(() => {
        axios.get(
            "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=-date_start&limit=1"
        )
        .then((res) => {
            setLatestNews(res);
        });
    }, [])

    return (
        <div className="accueil">
            <Navigation />

            <header>
                <h1 className="header-title">Bienvenue sur Paris Events</h1>
                <p className="header-paragraph">L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
                <hr />
            </header>
            <section>
                <h2 className="article-section-title">Actualité</h2>
                <p className="article-section-paragraph">Le dernier événement publié :</p>
                <NewsCard news={latestNews} />
            </section>
        </div>
    )
}


export default Acceuil;