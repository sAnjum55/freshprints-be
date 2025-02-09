import { OrderItem } from "../types/common";
import path from "path";
import { readFileSync } from "fs";
const FILE_PATH = path.join(__dirname, "../../data/data.json");
const readAndParseDataFromFile = () => {
  try {
    const data = readFileSync(FILE_PATH, "utf-8");
    const parsedData = JSON.parse(data) ?? {};
    return parsedData;
  } catch (error) {
    console.error("File read error:", error);
    throw error;
  }
};

export const canPlaceOrder = (order: OrderItem[]) => {
  try {
    const parsedData = readAndParseDataFromFile();
    for (const orderItem of order) {
      const { id, size, quantity } = orderItem;
      if (
        !parsedData[id] ||
        !parsedData[id].sizes[size] ||
        parsedData[id].sizes[size].quantity < quantity
      ) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error("Can place order error:", error);
    throw error;
  }
};

export const getCostForOrder = (order: OrderItem[]) => {
  try {
    const parsedData = readAndParseDataFromFile();
    let orderTotal = 0;

    for (const orderItem of order) {
      const { id, size, quantity } = orderItem;
      if (
        !parsedData[id] ||
        !parsedData[id].sizes[size] ||
        parsedData[id].sizes[size].quantity < quantity
      ) {
        throw new Error("Order cannot be fulfilled")
      }
      orderTotal = orderTotal+(parsedData[id].sizes[size].price * quantity)
    }
    return orderTotal
  } catch (error) {
    console.error("Get order cost error:", error);
    throw error;
  }
};
