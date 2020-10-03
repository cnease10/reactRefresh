//import { render } from '@testing-library/react';
//import { render } from '@testing-library/react';
import React from 'react';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
         grocery : ["milk", "water", "food"],
         funStuff: [["code", "code", "code"], ["friends", "family", "brett"], ["reading", "puzzles", "outside"]]
        }
    
    }
    newFunction() {
        let items = []
        items = this.state.funStuff.join(',').split(',')
        console.log(items)
        //items is now an array of all the items 

        this.setState({funStuff: items})
        
    }
    componentDidMount() {
        this.newFunction()
        console.log(this.state.funStuff)
    }
    
    render() {
        
        
        return (
            <React.Fragment>
                 <ul>
                    {this.state.grocery.map(item => (
                        <li key={item}>{item}</li>
                    ) )}
                </ul> 
                 <ul>
                   {this.state.funStuff.map((fun, index) => (
                       <li key={index}>{fun}</li>
                   ))}
                </ul>  
            </React.Fragment>
        )
          
    }
      
        
    
}

export default Map


//notes

// for (let i= 0; i < this.state.funStuff.length; i++) {
        //     //console.log(this.state.funStuff[i])
        //     // get back the three arrays
        //     for (let x =0; x < this.state.funStuff[i].length; x++) {
        //     //console.log(this.state.funStuff[i][x])
        //     //get back individual items from arrays
        //     items = this.state.funStuff[i][x]
        //     items.split(', ')
        //     console.log(items)
        //     //add individual items to an array
        //     }
        // }
        //was just looping through the array without ever joining the array items



 //let splitItems = funStuffItems
        // const [grocery, setstate] = useState(["Milk", "bread", "water"]);
       // for (let i= 0; i < this.state.funStuff.length; i++) {
            //console.log(this.state.funStuff[i])
          //  for (let x =0; x < this.state.funStuff[i].length; x++) {
            
            //console.log(this.state.funStuff[i][x])
            // for (let z=0; z < this.state.funStuff[i][x].length; z++) {
            //     console.log(this.state.funStuff[i][x][z])
            //     //console.log(z)
            // }
            // this far in loops through all the letters and gives them an index
            // so array of arrays - 3 for loops == index and letters of items in arrays

            // items = this.state.funStuff[i][x]
            // console.log(items)
            // return items
           // }
            
        //console.log(items)
        //  this.setState(state => ({
        //      funStuff: 
        //  }))   
            //funStuffItems = [this.state.funStuffItems]
            //console.log(funStuffItems) == undefined
            //but mapping over funStuffItems ==
            //codecodecode
            //friendsfamilybrett
            //readingpuzzlesoutside
            
            // for (let i= 0; i < this.state.funStuff.length; i++) {
            // funStuffItems = this.state.funStuff[i]
            // return funStuffItems
            // let funStuffInner = this.state.funStuff[i]
            // console.log(funStuffInner)
            // for (let x =0; x < funStuffInner.length; x++) {
            //     console.log(funStuffInner[x])
            //     funStuffItems = funStuffInner[x]
            //     return funStuffItems
            // //only looping through first array of items so getting code  
            
       // }
        // this.setState(state => ({
        //     funStuff: funStuffItems
        // }))
        // this.setState(state => ({
        //     funStuff: funStuffItems
        // }))