import React from 'react'

function Result(props) {
    return (     
        <div className="card mt-3 mb-3">

        <div className="card-header" style={{backgroundColor: "#f8f9fa"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>

        <div id="article-section" className="card-body">
        {props.result ? props.result.map((item) => { 
          return(
            <li class='list-group-item' key={item.id}>{item.name}</li>
            
            
            )
          
          }): <p>No stores available!</p>}
        </div>

        </div>     
    )
}


export default Result;