import React from 'react'

//create functional component 
// function Map4() {
//     return(
//         <React.Fragment>
//             <p>hi</p>
//         </React.Fragment>
//     )
// }


//now change functional component to class component
class Map4 extends React.Component {
    constructor() {
        super()
        this.state ={
            array : [1,2,3,4],
            array2: [10, 11, 12],
            array3: ['word1', 'word12', 'word13']
        }
    }
    fillArray() {
        this.setState({array : [5,6,7,8]})
        this.state.array2.forEach(function(i) {
            i += i;
            console.log(i)
            //doubles i
        })
        let found = this.state.array.find(item => item > 0)
        console.log(`this is ${found}`)
        //grabs the first elements that fits the condition
        let result = this.state.array3.filter(word => word.length > 4)
        console.log(result)
        let result2 = this.state.array.filter(num => num > 0)
        console.log(`this is result2 ${result2}`)
        //filtering returned the multiple numbers greater than 0

        //working with reduce
        const reducer = (accumulator, currentValue) => accumulator += currentValue
        let reduce1 = this.state.array.reduce(reducer)
        console.log(`this is reduce1 ${reduce1}`)
        //this summed up all the numbers in the array
        let reduce2 = this.state.array.reduce((accumulator, currentValue, currentIndex, array) => {
            return accumulator += currentValue
        }, 10)
        //providing 10 as initial value 
        console.log(`this is reduce2 ${reduce2}`)

        //arrow function for reduce vs function
        //array.reduce((accumulator, currentValue) => {//do something})
        //array.reduce(function(accumulator, currentValue) {//do something})

    }
    componentDidMount() {
        this.fillArray()
    }
    
    render() {
      
        
        return(
            <React.Fragment>
                {this.state.array.map(item => (
                    <li>{item}</li>
                ))}
                {console.log(this.state.array)}
            </React.Fragment>
        )
    }
}

export default Map4

//notes

//condition rendering with if, inline if &&, or ternary 