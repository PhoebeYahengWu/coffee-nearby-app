import React from 'react'



function Result(props) {
    return (     
        <div className="card mt-3 mb-3">

        <div className="card-header" style={{backgroundColor: "#f8f9fa"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>

        <div id="article-section" className="card-body">

        <div className="ContainerStyle">
        {props.result ? props.result.map((item) => { 

          return(
                <div className="card" key={item.id}>
                  <div className="card-image">
                      <img src={item.image_url} alt={item.name}/>
                  </div>

                  <div className="card-content">
                      <p style={{fontSize:"1.4rem"}}><strong>{item.name}</strong></p>
                      <p>Rating: {item.rating}</p>
                      <p>Phone: {item.display_phone}</p>
                      <p>Location: {item.location.address1}, {item.location.city}, {item.location.state} {item.location.zip_code}</p>
                  </div>

                  <div className="card-action">
                      <a href={item.url}  target="_blank" rel="noopener noreferrer">View More on Yelp</a>
                  </div>
                </div>
            )    
          }): <p>No stores available!</p>}

          </div>
        </div>
        </div>
   
     
    )
}


export default Result;