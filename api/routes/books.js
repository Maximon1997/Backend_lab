const express = require('express')
const router = express.Router()
const controller = require('../controllers/booksController')

router.get('/all', async (req, res) => {
    controller.get(req, res)
})

router.post('/create', async (req, res) => {
    controller.add(req, res)
    console.log(req.body)
})

router.put('/edit', async (req, res) => {
    controller.edit(req, res);
});



router.delete('/remove', async (req, res) => {
    controller.remove(req, res)
})

module.exports = router
