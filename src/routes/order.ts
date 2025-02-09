import { canPlaceOrderHandler, orderTotalCostHandler } from "../controllers/order";

import { Router } from "express";

const orderRouter = Router()

orderRouter.post("/order-possible", canPlaceOrderHandler)
orderRouter.post("/lowest-cost", orderTotalCostHandler)

export default orderRouter