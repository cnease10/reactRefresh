import React from 'react'

class TableAPI extends React.Component {
    constructor() {
        super();
        this.state ={
        movies : [
            {Name: 'Lion King', Released: 1994, Rating: 8.5, Thumbnail: "lionking.jpg"},
            {Name: 'Up', Released: "", Rating: 8.2, Thumbnail: "upmovie.jpg"},
            {Name: 'Apollo 13', Released: 1995, Rating: 7.6, Thumbnail: ""}
        ]
        }
    }
    render() {
        return(
            <React.Fragment>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Released</th>
                    <th>Rating</th>
                    <th>Thumbnail</th>
                    </tr>
                    
                        {this.state.movies.map(movie => (
                           <tr>
                               <td>{movie.Name}</td>
                               <td>{movie.Released}</td>
                               <td>{movie.Rating}</td>
                               <td>{movie.Thumbnail}</td>
                           </tr>
                        ))}
                    
                    {/* <tr>
                    this works but it is not scalable
                    <td>{this.state.movies[0].Name}</td>
                    <td>{this.state.movies[0].Released}</td>
                    <td>{this.state.movies[0].Rating}</td>
                    <td>{this.state.movies[0].Thumbnail}</td>
                    </tr> */}

                    {/* <tr>{console.log(this.state.movies[0].value)}</tr>
                    undefined */}
                    {/* <tr>{console.log("name" + this.state.movies[0].name)}</tr>
                    undefined -- due to not capitalized*/}
                </table>
            </React.Fragment>
        )
    }
}

export default TableAPI
//technical problem
// /*



// Given the following database model, in what format would you

// want this data structured so that you could consume it in a web application?



// -------------------------------------------------

// | Name      | Released | Rating | Thumbnail     |

// -------------------------------------------------

// | Lion King | 1994     | 8.5    | lionking.jpg  |

// | Up        |          | 8.2    | upmovie.jpg   |

// | Apollo 13 | 1995     | 7.6    |               |

// -------------------------------------------------



// */



// //server with data like in table

// // how to consume and present data



// //assume an api returns this data in json 

// //conver table into json structure

// [

//     {"Name" : "Lion King", "Released" : "1994", "Rating": "8.5", "Thumbnail" : "lionking.jpg"},
    
//     {},
    
//     {}
    
//     ]
    
    
    
//     /*
    
//     Assume the url you can request the movies at is https://amazon.com/movies
    
//     */
    
    
    
//     /*
    
//     Write a component in React (or components) that fetches the data from the API and displays it in an 
    
//     HTML table with columns for Thumbnail, Name, Released, and Rating.
    
//     */
    
    
    
//     //react component
    
//     //fetch call
    
//     //table in jsx 
    
    
    
//     import React from 'react'
    
//     import ReactDOM from 'react-dom'
    
    
    
//     class Movies extends React.component {
    
//        // constructor
    
       
    
//        //fetch data 
    
//        //store it to state
    
//        // an object of arrays called movies
    
       
    
//        /*
    
//         array.map((item) => {
    
//             return {
    
//                 <tr>
    
//                     <td>{item.name}</td>
    
//                     <td>{item.name}</td>
    
//                 </tr>
    
//             }
    
//         })
    
       
    
//        */
    
//        fetch('https://amazon.com/movies')
    
//        .then(response => response.json())
    
//        .then(this.setState(movies = data))
    
       
    
//        render() {
    
           
    
//            return 
    
           
    
//            <div>
    
//             Filter
    
//                 <button><img src="save.png" /></button>
    
//             </div>
    
           
    
//            <table>
    
//                 <tr>
    
//                  <th>Name</th>
    
//                   <th>Released</th>
    
//                    <th>Rating</th>
    
//                     <th>Thumbnail</th>
    
//                 </tr>
    
//                  array.map((item) => {
    
//             return {
    
//                 <tr>
    
//                     <td>{item.name}</td>
    
//                     <td>{item.released}</td>
    
//                     <td>{item.rating}</td>
    
//                     <td><img src={item.thumbnail} /></td>
    
//                 </tr>
    
//             }  
//         })
    
//                 </table>
    
            
    
            
    
            
    
            
    
            
    
//                 //commented out 
    
                
    
//                 <td>{this.state.movies[0].name}</td>
    
//                 <td>{this.state.movies[0].released}</td>
    
//                 <td>{this.state.movies[0].rating}</td>
    
//                 <td>{this.state.movies[0].thumbnail}</td>
    
//                 </tr>
    
//                  <tr></tr>
    
//                   <tr></tr>
    
//                 </table>
    
//        }
    
//     }