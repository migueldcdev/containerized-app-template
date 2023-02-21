const express = require('express')
const db = require('mariadb')
const cors = require('cors')

const app = express()
app.use(cors())

const pool = db.createPool({
    host:'mariadb',    
    user:'root',
    password:'secret-pw',
    database: 'db',
    connectionLimit: 5
})

const getUsers = async(res) => {
    let conn;    
    try {
        conn = await pool.getConnection()           
        const rows = await conn.query("SELECT * FROM user;") 
        res.send(rows)      
    } catch(err) {
        throw err
    } finally {
        if (conn) return conn.end()            
    }
}

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname})
})

app.get('/users', async(req, res) => {
    
    await getUsers(res)
    
})

app.get('/test', (req,res) => {
    res.json({"Test" : "ok"})
})

app.listen(3000)