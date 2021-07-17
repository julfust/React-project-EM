import React from 'react';
import { Card, Button } from 'antd'


const NewsCard = ({ news, setFavorite }) => {

    const dateParser = (date) => {
        const formatedDate = new Date(date).toLocaleString();
        return formatedDate;
    }

    return (
        <div className="news-card">
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="affiche évènement" src={news.fields.cover_url} />}
            >
                <h3 className="news-title">{news.fields.title}</h3>
                <p className="news-date">{dateParser(news.fields.date_start)}</p>
                <p className="news-content">{(news.fields.lead_text)}</p>
                <Button className="like-button" danger onClick={(e) => setFavorite(e, news)}>💗</Button>
            </Card>
        </div>
    )
};

export default NewsCard;