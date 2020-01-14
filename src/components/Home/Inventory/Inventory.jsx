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
}
