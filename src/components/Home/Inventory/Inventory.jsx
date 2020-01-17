import React, {Component} from 'react'
import axios from 'axios'

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            inventory: [],
            verbage: {}
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    get_inventory = () => {
        axios.get('/api/inventory').then(res=>this.setState({inventory: res.data}))

    }

    render () {
        return (
            <div>

            </div>
        )
    }
}

export default Inventory