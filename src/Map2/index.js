import React from 'react';

class Map2 extends React.Component {
    constructor() {
        super();
        this.state = {
            text1: "",
            text2: "",
            text3: ""
        }
       
    }
    handleChange = (e) =>  {
        this.setState({[e.currentTarget.name] : e.target.value})
        console.log(this.state)
    }
    render () {
        return (
            <React.Fragment>
            <h2>form practice</h2>
            <form>
                <input type="text" name="text1" value={this.state.text1} onChange={this.handleChange}></input>
                <label>text1</label>
                <input type="text" name="text2" value={this.state.tex2} onChange={this.handleChange}></input>
                <label>text2</label>
                <input type="text" name="text3" value={this.state.text3} onChange={this.handleChange}></input>
                <label>text3</label>
            </form>
        </React.Fragment>
    
        )
    }     
        
    
}

export default Map2