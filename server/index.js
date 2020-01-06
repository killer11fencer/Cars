require('dotenv').config()
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