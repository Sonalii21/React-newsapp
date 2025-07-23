import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": "Samuel Clench",
      "title": "‘Knows everything’: Epstein’s lawyer speaks",
      "description": "Welcome to another week of politics in the United States. This one promises to be as dramatic as ever.",
      "url": "https://www.news.com.au/world/north-america/us-politics/us-politics-live-jeffrey-epsteins-former-lawyer-says-coconspirator-ghislaine-maxwell-is-the-key-and-knows-everything/live-coverage/b5d8153f2a12e389683ce35601fb02ef",
      "urlToImage": "https://content.api.news/v3/images/bin/6ade155ef1de0bd30ed741071257e732",
      "publishedAt": "2025-07-20T21:24:00Z",
      "content": "Welcome to another week of politics in the United States. This one promises to be as dramatic as ever.\r\nPresident Donald Trump is still seeking to shift Americans’ focus away from the Jeffrey Epstein… [+3055 chars]"
    },
    {
      "source": {
        "id": "financial-post",
        "name": "Financial Post"
      },
      "author": "Special to Financial Post",
      "title": "Defending the Arctic is good policy, good politics and good business",
      "description": "How Canada Wins: With defence spending set to surge, investments in the Arctic could pay off for decades to come. Read more",
      "url": "https://financialpost.com/news/economy/defending-arctic-good-policy-politics-business",
      "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2025/07/arctic-0718-ph.jpg",
      "publishedAt": "2025-07-18T15:52:22.3434813Z",
      "content": "By Gary Mar and Mark A.G. Norman \r\nTHIS CONTENT IS RESERVED FOR SUBSCRIBERS ONLY\r\nSubscribe now to read the latest news in your city and across Canada.\r\n<ul><li>Exclusive articles from Barbara Shecte… [+5258 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "The nation’s cartoonists on the week in politics",
      "description": "Every week political cartoonists throughout the country and across the political spectrum apply their ink-stained skills to capture the foibles, memes, hypocrisies and other head-slapping events in the world of politics. The fruits of these labors are hundred…",
      "url": "https://www.politico.com/gallery/2025/07/18/the-nations-cartoonists-on-the-week-in-politics-00460423",
      "urlToImage": "https://static.politico.com/a0/3d/3cd1c382490d8909131a739dc1ba/teaser.jpg",
      "publishedAt": "2025-07-18T09:00:00+00:00",
      "content": "Game time at the old folks home, rural hospitals, budget cuts, DOGE, Medicaid, Operation, Big Beautiful Bill, GOP, RNC, Republican Party, MAGA"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Dawn Handley",
      "title": "CNN Headlines | CNN",
      "description": "CNN Headlines is a curated channel covering major news events across politics, international, business, and entertainment, and showcasing the most impactful stories of the day.",
      "url": "https://www.cnn.com/videos/fast/cnn-headlines",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/cnn-headlines-placeholder-1920x1080.png?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-06-30T20:25:47.801Z",
      "content": "CNN Headlines is a curated channel covering major news events across politics, international, business, and entertainment, and showcasing the most impactful stories of the day."
    },
    {
      "source": {
        "id": "the-american-conservative",
        "name": "The American Conservative"
      },
      "author": null,
      "title": "Politics Archives - The American Conservative",
      "description": null,
      "url": "https://www.theamericanconservative.com/category/politics/",
      "urlToImage": null,
      "publishedAt": "2022-07-07T21:37:27.3936289Z",
      "content": null
    },
    {
      "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
      },
      "author": null,
      "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
      "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
      "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      "publishedAt": "2019-11-13T04:41:00Z",
      "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    }
  ]
  constructor() {
    super();
    // You can initialize state or bind methods here if needed
    console.log("News component initialized");
    this.state = {
      articles: this.articles,
      loading: false,
    }
        
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='mb-3'>News Monkey - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.title}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} />
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default News
