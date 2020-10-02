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
        clearAcc();
        e.target.classList.toggle('active')
        console.log('you clicked me')
        e.preventDefault();
        console.log(e.target)
        let section = e.target.nextElementSibling;
        console.log(section)
        section.classList.toggle('active')
        // const sections = document.querySelectorAll('.sectionAcc')
        // console.log(sections)
        
    }
    function clearAcc() {
        let sections = document.querySelectorAll('.sectionAcc')
        for (let i= 0; i <sections.length; i++) {
            sections[i].classList.remove('active')
        }
        let headers = document.querySelectorAll('.headerTab')
        for (let x = 0; x < headers.length; x++) {
            headers[x].classList.remove('active')
        }
    }
    return (
        <React.Fragment>

            <h1 className="headerTab" onClick={headerClick}>h1</h1>
            <section className="sectionAcc">h1 info</section>
            <h2  className="headerTab" onClick={headerClick}>h2</h2>
            <section className="sectionAcc">h2 info</section>
            <h3  className="headerTab" onClick={headerClick}>h3</h3>
            <section className="sectionAcc">h3 info</section>

        </React.Fragment>
    )
        
    
    
}

export default Map1