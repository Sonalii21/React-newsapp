import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, desc, imageurl, newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="..." onError={e => {
                        e.target.onerror = null;
                        e.target.src = "https://media.cnn.com/api/v1/images/stellar/prod/cnn-headlines-placeholder-1920x1080.png?c=16x9&q=w_800,c_fill";
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
