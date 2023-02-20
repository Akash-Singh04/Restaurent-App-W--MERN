import React from 'react';

const myStyle={
  backgroundImage: 
"url('/src/images/index.jpg')"
}

function Hero(){
    return(
      <header className="masthead" style={myStyle}>
      <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                  <div className="site-heading">
                      <h1>Once Upon A Flame</h1>
                      <span className="subheading">For Your Midnight And Midday Cravings</span>
                  </div>
              </div>
          </div>
      </div>
  </header>
    )
}


export default Hero