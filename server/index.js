require('dotenv').config()
const ctrl = require('./ctrl/ctrl')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const {CONNECTION_STRING,SERVER_PORT,SESSION_SECRET} = process.env
const app = express()

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}))

app.use((req,res,next) => {
    const {session} = require
    if(!session.user) {
        session.user = {username:'', admin: false}
    }
    next();
})

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('database set')
    console.log(db.listTables())

    app.listen(SERVER_PORT,()=>console.log('listening on port',SERVER_PORT))
}).catch(err=>console.log('error on connection',err))

// //Home Page Pictures
// app.get('/api/new_listing'),ctrl.get_new)
// app.get('/api/sold_listing',ctrl.get_sold)
// //Home Page Content
// app.get('/api/introduction',ctrl.get_intro)
// app.get('/api/paragraph',crtl.para)
// app.get('/api/contact_info',ctrl.get_contact)
// //Edit Page Content
// app.put('/api/introduction/:id',ctrl.update_intro)
// app.put('/api/paragraph/:id',ctrl.update_para)
// app.put('/api/contact_info,ctrl',ctrl.update_contact)
// //Inventory Page Content
// app.get('/api/inventory',ctrl.get_inv)