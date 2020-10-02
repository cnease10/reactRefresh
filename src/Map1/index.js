import React from 'react';

function Map1() {
    //practice making api call
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
      
     function headerClick(e) {
        //grab section below and show
        //hide all other sections 
        console.log('you clicked me')
        // e.preventDefault();
        // console.log(e)
    }
    return (
        <React.Fragment>

            <h1 onClick={(e) => {headerClick(e.target)}}>h1</h1>
            <section className="section">h1 info</section>
            <h2 onClick={(e) => {headerClick(e)}}>h2</h2>
            <section className="section">h2 info</section>
            <h3 onClick={(e) => {headerClick(e)}}>h3</h3>
            <section className="section">h3 info</section>

        </React.Fragment>
    )
        
    
    
}

export default Map1