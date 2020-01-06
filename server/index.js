require('dotenve').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
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
})