import React from 'react';
import { Card, Button } from 'antd'


const NewsCard = ({ news }) => {

    const dateParser = (date) => {
        const formatedDate = new Date(date).toLocaleString()
        return formatedDate;
    }

    return (
        <div className="news-card">
            {news !== undefined ? (
                    <div className="loaded-view"> {console.log(news.data.records[0].record.fields)}
                        <Card
                            hoverable
                            style={{ width: 280 }}
                            cover={<img alt="image événement" src={news.data.records[0].record.fields.cover_url} />}
                        >
                            <h3 className="news-title">{news.data.records[0].record.fields.title}</h3>
                            <p className="news-date">{dateParser(news.data.records[0].record.fields.date_end)}</p>
                            <p className="news-content">{news.data.records[0].record.fields.lead_text}</p>
                            <Button className="like-button" danger>💗</Button>
                        </Card>
                    </div>
            ) : (<div className="loading-view">Chargement...</div>)}
        </div>
    )
};

export default NewsCard;