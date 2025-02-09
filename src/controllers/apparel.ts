import { Request, Response } from "express";

import { addNewOrUpdateApparelsInBulk } from "../services/apparel";

export const addOrUpdateApparelHandler = (req: Request, res: Response) => {
  const body = req.body;
  console.log("bodyyyy", body);
  if (Array.isArray(body)) {
    res
      .status(400)
      .send({ message: "Please use this operation for single updates only" });
  } else {
    const isStockModified = addNewOrUpdateApparelsInBulk([body]);
    if (isStockModified) {
      res.status(200).send({ message: "Price and Quantity updated!" });
    } else {
      res.status(400).send({ message: "Update unsuccessful" });
    }
  }
};

export const addOrUpdateApparelHandlerInBulk = (
  req: Request,
  res: Response
) => {
  const body = req.body;
  const isStockModified = addNewOrUpdateApparelsInBulk(body);
  if (isStockModified) {
    res.status(200).send({ message: "Price and Quantity updated!" });
  } else {
    res.status(400).send({ message: "Update unsuccessful" });
  }
};
