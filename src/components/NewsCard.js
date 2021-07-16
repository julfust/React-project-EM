import React from 'react';
import { Card, Button } from 'antd'


const NewsCard = ({ news }) => {

    const dateParser = (date) => {
        const formatedDate = new Date(date).toLocaleString();
        return formatedDate;
    }

    return (
        <div className="news-card">
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="image évènement" src={news.record.fields.cover_url} />}
            >
                <h3 className="news-title">{news.record.fields.title}</h3>
                <p className="news-date">{dateParser(news.record.fields.date_end)}</p>
                <p className="news-content">{(news.record.fields.lead_text)}</p>
                <Button className="like-button" danger>💗</Button>
            </Card>
        </div>
    )
};

export default NewsCard;