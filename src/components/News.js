import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize: 6,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category : PropTypes.string,

  }

   capitalizeFirstletter = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
   }

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults:0,
    }
    document.title = `${this.capitalizeFirstletter(this.props.category)}-DailyNews`;
    }
    //componet cycle life
    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9adc45de73254703988b2844b0652ad4&page=1&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let passedData = await data.json();
      this.setState({
        articles : passedData.articles,
        totalResults : passedData.totalResults
      })
    }

     handlePreviousclick = async ()=>{
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9adc45de73254703988b2844b0652ad4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
       let data = await fetch(url);
       let passedData = await data.json();
      //  console.log(passedData);
       this.setState ({
         page:this.state.page - 1,
         articles : passedData.articles
         
        })  
      }
      handleNextclick = async ()=>{
       if(this.state.page + 1 > Math.ceil((this.state.totalResults)/this.props.pageSize)){

       }
       else{
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9adc45de73254703988b2844b0652ad4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
         let data = await fetch(url);
         let passedData = await data.json();
         console.log(passedData);
         this.setState ({
           page: this.state.page + 1,
           articles : passedData.articles
         })
       }
    }


    //  fetchMoreData = async() => {
    //   this.setState({page : this.state.page + 1});
    //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9adc45de73254703988b2844b0652ad4&page=1&pageSize=${this.props.pageSize}`
    //   let data = await fetch(url);
    //   let passedData = await data.json();
    //   this.setState({
    //     articles : this.state.articles.concat(passedData.articles),
    //     totalResults : passedData.totalResults
    //   })
    // };                                                                                        

  render() {
    return (
        <div className="container my-3">
            <h2 className="text-center">DailyNews - Top  {this.capitalizeFirstletter(this.props.category)} Headlines </h2>
            {/* <InfiniteScroll
              dataLength={this.state.articles.length}
              // next={this.fetchMoreData()}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<h4>Loading...</h4>}
            > */}
              <div className="container">
                <div className="row">
                  {this.state.articles && this.state.articles.map((element)=>{
                    return <div className="col-md-4"  key = {element.url}>
                    <NewsItem title = {element.title?element.title.slice(0,40):""} description ={element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsurl = {element.url} author = {element.author?element.author:"Unknown"} date = {element.publishedAt} source ={element.source.name}/>
                    </div>
                  })}
                  </div>
              </div>
            {/* </InfiniteScroll> */}
            {/* previous - Next code */} 
            <div className="container d-flex justify-content-between"> 
            <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlePreviousclick}> &larr; Previous</button>
            <button disabled = {this.state.page + 1 > Math.ceil((this.state.totalResults)/this.props.pageSize)} type="button" className="btn btn-dark" onClick = {this.handleNextclick}>Next &rarr;</button>
            </div>

        </div>
    )
  }
}

export default News
