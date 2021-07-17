import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import { PhoneFilled, MailFilled, FacebookFilled } from '@ant-design/icons';
import { Redirect, useParams } from 'react-router-dom';

const Detail = (props) => {

    const { newsId } = useParams();
    const [news, setNews] = useState();
    const [validId, setValideId] = useState(true);

    useEffect(() => {
        axios.get(
            `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${newsId}`
        )
        .then((res) => {
            setNews(res.data.record);
        })
        .catch(() => setValideId(false));
    }, [])

    return (
        <>
            {validId ? (
                <div className="detail">
                    <Navigation />
                    
                    {news !== undefined ? (
                        <>
                            <header>
                                <h1 className="header-title">{news.fields.title}</h1>
                                <p className="header-subtitle">{news.fields.contact_name}</p>
                                <hr />
                            </header>
                            <section>
                                <Row>
                                    <Col span={16}>
                                        <article>
                                            <div className="img-container">
                                                <img src={news.fields.cover_url} alt="image évènement" />
                                            </div>
                                            <h2 className="news-lead-text">{news.fields.lead_text}</h2>
                                            <p className="news-description" dangerouslySetInnerHTML={{__html: news.fields.description}}></p>
                                        </article>
                                    </Col>
                                    <Col span={8}>
                                        <aside className="news-aside">
                                            <Button className="like-button" size="large" danger onClick={(e) => props.setFavorite(e, news)}>💗 Sauvegarder</Button>
                                            <div className="aside-rubrique">
                                                <h3 className="aside-rubrique-title">Dates :</h3>
                                                <p className="aside-rubrique-content" dangerouslySetInnerHTML={{__html: news.fields.date_description}}></p>
                                            </div>
                                            <div className="aside-rubrique">
                                                <h3 className="aside-rubrique-title">Prix :</h3>
                                                <p className="aside-rubrique-content" dangerouslySetInnerHTML={{__html: news.fields.price_detail}}></p>
                                            </div>
                                            <div className="aside-rubrique">
                                                <h3 className="aside-rubrique-title">Sy rendre :</h3>
                                                <address>
                                                    <p><em>{news.fields.address_name}</em></p>
                                                    <p><em>{news.fields.address_street}</em></p>
                                                    <p><em>{news.fields.address_zipcode} {news.fields.address_city}</em></p>
                                                </address>
                                            </div>
                                            <div className="aside-rubrique">
                                                {news.fields.transport && (
                                                    <>
                                                        <h3 className="aside-rubrique-title">En transports :</h3>
                                                        <p className="aside-rubrique-content" dangerouslySetInnerHTML={{__html: news.fields.transport.replace("\n", "<br />")}}></p>
                                                    </>
                                                )}
                                            </div>
                                            <div className="aside-rubrique">
                                                <h3 className="aside-rubrique-title">Plus d'infos</h3>
                                                {news.fields.contact_phone && (<p className="aside-rubrique-content"><span className="content-icon"><PhoneFilled /></span> <a href={`tel:${news.fields.contact_phone}`}>{news.fields.contact_phone}</a></p>)}
                                                {news.fields.contact_mail && (<p className="aside-rubrique-content"><span className="content-icon"><MailFilled /></span> <a href={`tel:${news.fields.contact_mail}`}>{news.fields.contact_mail}</a></p>)}
                                                {news.fields.contact_facebook && (<p className="aside-rubrique-content"><span className="content-icon"><FacebookFilled /></span> <a href={`tel:${news.fields.contact_facebook}`}>{news.fields.contact_facebook}</a></p>)}
                                            </div>
                                        </aside>
                                    </Col>
                                </Row>
                            </section>
                        </>
                    ) : (<div className="loading-view">Chargement...</div>)}
                </div>
            ) : <Redirect to="/" />}
        </>
    );
};

export default Detail;