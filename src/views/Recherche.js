import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Input, Col, Row } from 'antd';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

function Recherche(props) {
    const [ news, setNews ] = useState();
    const [ search, setSearch ] = useState();

    useEffect(() => {
        axios.get(
            `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${search}`
        )
        .then((res) => {
            setNews(res.data.records);
        });
    }, [search])

    return (
        <div className="recherche">
            <Navigation />
            
            <header>
                <h1 className="header-title">Lister de futurs événements à Paris</h1>
            </header>

            <form onSubmit={e => e.preventDefault()}>
                <Search placeholder="Nom d'événement..." enterButton size="large" onSearch={(input) => setSearch(input)} />
            </form>

            {search && (
                <section>
                    <h2 className="article-section-title">Résultats de la recherche</h2>
                    {news.length > 0 ? (
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                {news.map((item) => (
                                    <Col span={8} style={{paddingBottom: 50}} key={item.record.id}>
                                        <NavLink to={`/detail/${item.record.id}`} ><NewsCard news={item.record} setFavorite={props.setFavorite} /></NavLink>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ) : (<p className="no-result-view"><em>Aucun résultat pour cette recherche ...</em></p>)}
                </section>
            )}
        </div>
    )
}

export default Recherche;