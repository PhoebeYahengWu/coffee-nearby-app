import React from 'react'

function Result(props) {
    return (     
        <div className="card mt-3 mb-3">
        <div className="card-header" style={{backgroundColor: "#f8f9fa"}}>
          <i className="far fa-newspaper"></i> Top Articles
        </div>

        <div id="article-section" className="card-body">

        {props.result? props.result.map((item, index) => 
                        <li class='list-group-item' key={index}>
                        <strong>{item.headline.main}</strong>
                        <p className="font-weight-light">{item.byline.original} {item.pub_date.substring(0, 10)}</p>
                        <p className="font-weight-normal"><b>Abstract:</b> {item.abstract}</p>
                        <a target='_blank' rel="noopener noreferrer" href={item.web_url}>{item.web_url}</a>
                        </li>
                        ): <p>No news available!</p>}   
        </div>
        </div>     
    )
}


export default Result;