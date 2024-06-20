const express = require('express')
const sequelize = require('./database/config')
const Product = require('./model/product')

const app = express()
app.use(express.json())

app.post('/store-product', async (req, res) => {
  const { name, price, availability } = req.body
  await Product.create({ name, price, availability })
  return res.status(200).json({ msg: 'product created' })
})

app.get('/list-product', async (req, res) => {
  const products = await Product.findAll()
  return res.status(200).json({ products })
})

app.listen(8000, () => {
  console.log('Server started on port 8000..')
})
