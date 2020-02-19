module.exports = {
    get_new: (req,res) => {
        const db = req.app.get('db')
        db.get_new().then(result=>res.status(200).send(result))
        .catch(err=>console.log('err on new listing',err))
    },
    get_sold: (req,res) => {
        const db = req.app.get('db')
        db.get_sold().then(result=>res.status(200).send(result))
        .catch(err=>console.log('err on sold listing',err))

    },
    get_recent: (req,res) => {
        const db = req.app.get('db')
        db.get_recent().then(result=>res.status(200).send(result))
        .catch(err=>console.log('err on sold listing',err))
    }
}