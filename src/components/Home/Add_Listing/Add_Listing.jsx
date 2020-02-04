import React, {Component} from 'react'
import axios from 'axios'

class Add_Listing extends Component {
    constructor() {
        super();
        this.state = {
            year: [],
            make: [],
            model: []
        }
    }
    componentDidMount () {
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes').then(res => this.setState({make:res.data}))
        .catch(err => console.log('error',err))
    }
    render () {
       console.log(this.state.make, 'cars')
       let display_Makes = this.state.make.map((elem,id) => {
           return <div id={id} class="dropdown">
           <button  class="dropbtn">Dropdown</button>
           <div id="myDropdown" class="dropdown-content">
             <a value={elem.Make_ID}>{elem.Make_Name}</a>
             </div>
         </div>
       })
        return (
            <div>
                Hello
                {display_Makes}
            </div>
        )
    }
}
export default Add_Listing