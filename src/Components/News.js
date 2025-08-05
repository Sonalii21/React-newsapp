import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    // You can initialize state or bind methods here if needed
    console.log("News component constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
        
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=6168a2b45eca45a7b7c06f7b39bb38ab&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        loading: false,
        totalResults: parsedData.totalResults,
      });

    }

    handlePrevClick = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=6168a2b45eca45a7b7c06f7b39bb38ab&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        loading: false,
        page: this.state.page - 1
      });
      
    }

    handleNextClick = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=6168a2b45eca45a7b7c06f7b39bb38ab&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        loading: false,
        page: this.state.page + 1
      });
    }

  render() {
    const maxPage = Math.ceil(this.state.totalResults / this.props.pageSize);
    return (
      <div className='container my-3'>
        <h2 className='mb-3 text-center'>News Monkey - Top headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage?element.urlToImage :"https://media.cnn.com/api/v1/images/stellar/prod/cnn-headlines-placeholder-1920x1080.png?c=16x9&q=w_800,c_fill"} newsurl={element.url}/>
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-center">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary mx-2 my-2" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page >= maxPage} type="button" className="btn btn-primary mx-2 my-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
