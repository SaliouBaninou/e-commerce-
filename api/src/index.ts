import express, { json, urlencoded } from "express"
import productsRouter from "./routes/products/index"

const app = express()
const port = 3000
app.use(urlencoded({extended: false}))
app.use(json())


app.get('/', (req, res) => {
    res.send('Hello, world !')
})


app.use("/products", productsRouter)

app.listen(port, () => console.log(`Express tourne sur le port ${port}`))