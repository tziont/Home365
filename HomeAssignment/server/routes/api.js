const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    setTimeout(() =>{
        res.send('From API route')
    }, 2000)
   
})

module.exports= router