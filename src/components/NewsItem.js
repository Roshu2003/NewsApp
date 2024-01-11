import React, { Component } from 'react'

export class NewsItem extends Component {

 

  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className='my-3'>
       <div className="card">
       <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left :'90%' ,zIndex:'1'}}>
   {source}</span>
        <img src= {!imageurl?"https://cdn3.poz.com/143083_iStock-174923485.jpg_b1fe696a-7e94-48ec-aad3-6d37fff6912c_x2.jpeg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank eslint-disable-next-line" className="btn btn-sm btn-dark">Read More</a>
        </div>
       </div>
      </div>
    )
  }
}

export default NewsItem
