import apparelRouter from "./routes/apparel"
import bodyParser from "body-parser"
import express from "express"
import orderRouter from "./routes/order"
const app = express()

app.use(bodyParser.json())
app.use("/apparel",apparelRouter)
app.use("/order", orderRouter)
export default app