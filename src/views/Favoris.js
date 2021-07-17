import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

function Favoris(props) {

    const [favoritesNews, setFavoritesNews] = useState(null);

    useEffect(() => {
        setFavoritesNews(JSON.parse(localStorage.getItem("Favorite")));
    }, [])

    return (
        <div className="favoris">
            <Navigation />
            
            <header>
                <h1 className="header-title">Événements sauvegardés</h1>
                <hr />
            </header>

            <section>
                {favoritesNews && favoritesNews.length > 0 ? (
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            {favoritesNews.map((item) => (
                                <Col span={8} style={{paddingBottom: 50}} key={item.id}>
                                    <NavLink to={`/detail/${item.id}`} ><NewsCard news={item} setFavorite={props.setFavorite} /></NavLink>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ) : ( 
                    <p className="empty-view"><em>Aucun événement n'a été sauvegardé ...</em></p> 
                )}
            </section>
        </div>
    )
}


export default Favoris;