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
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes').then(res => this.setState({make: res.data}))
        .catch(err => console.log('error',err))
    }
}