import { render } from '@testing-library/react';
//import { render } from '@testing-library/react';
import React from 'react';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
         grocery : ["milk", "water", "food"]
        }
    }
    
    render() {
        // const [grocery, setstate] = useState(["Milk", "bread", "water"]);
        return (
            <React.Fragment>
                <ul>
                    {this.state.grocery.map(item => (
                        <li key={item}>{item}</li>
                    ) )}
                </ul>
            </React.Fragment>
        )
          
    }
      
        
    
}

export default Map