import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            new_listing: [],
            sold_listing: [],
            introduction: '',
            paragraph:'',
            contact_info:{}

        }
    }
   async componentDidMount() {
        const session = await axios.get('/api/session')
        console.log('session data', session.data)
        if(session.data.user) {
            this.props.updateAuthenticated(session.data.user.authenticated)
            this.props.updateAdmin(session.data.user.admin)
        }
        await this.load_page('new_listing')
        await this.load_page('sold_listing')
        await this.load_page('introduction')
        await this.load_page('paragraph')
        await this.load_page('contact_info')
        
    }
    load_page(info) => {
        axios.get(`/api/${info}`).then(res => this.setState({[info]: res.data}))
        .catch(err => console.log('error on new listing',err))
    }
    
}

export default Home

test
test