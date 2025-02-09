import { existsSync, readFileSync, writeFileSync } from "fs";

import { ApparelManipulationParams } from "../types/common";
import path from "path";

const FILE_PATH = path.join(__dirname, "../../data/data.json");

const checkIfFileExists = () => {
  try {
    if (!existsSync(FILE_PATH)) {
      writeFileSync(FILE_PATH, JSON.stringify({}, null, 2));
    }
  } catch (error) {
    console.error("File create error:", error);
    throw error;
  }
};

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

export const addNewOrUpdateApparelsInBulk = (
  bulkParams: ApparelManipulationParams[]
) => {
  try {
    checkIfFileExists();
    const parsedData = readAndParseDataFromFile();
    for (const item of bulkParams) {
      const { id, size, quantity, price } = item;
      if (parsedData[id]) {
        if (parsedData[id].sizes[size]) {
          const existingQuantity = parsedData[id].sizes[size].quantity;
          parsedData[id].sizes[size].quantity = existingQuantity + quantity;
          parsedData[id].sizes[size].price = price;
        } else {
          parsedData[id].sizes[size] = {
            quantity: quantity,
            price: price,
          };
        }
      } else {
        parsedData[id] = {
          id: id,
          sizes: {
            [size]: {
              quantity: quantity,
              price: price,
            },
          },
        };
      }
    }
    writeFileSync(FILE_PATH, JSON.stringify(parsedData, null, 2));
    return true;
  } catch (error) {
    console.error("File update error:", error);
    throw error;
  }
};
