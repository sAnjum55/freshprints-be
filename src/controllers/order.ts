import { Request, Response } from "express";
import { canPlaceOrder, getCostForOrder } from "../services/order";

export const canPlaceOrderHandler = (req: Request, res: Response) => {
  const body = req.body;
  const orderPossible = canPlaceOrder(body);
  if (orderPossible) {
    res.status(200).send({ message: "Order can be placed", orderPossible: orderPossible });
  } else {
    res
      .status(400)
      .send({ message: "Order cannot be placed due to insufficient stock" });
  }
};

export const orderTotalCostHandler = (req: Request, res: Response) => {
    const body = req.body;
    const orderCost = getCostForOrder(body);
    if (orderCost) {
      res.status(200).send({ lowestCost: orderCost });
    } else {
      res
        .status(400)
        .send({ message: "Order cannot be placed due to insufficient stock" });
    }
  };
