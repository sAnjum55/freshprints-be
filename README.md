# Project Setup

## Steps to Set Up the Server

Follow these steps to get the server up and running:

1. **Install Dependencies**  
   Run the following command to install the required dependencies:
   ```bash
   yarn install

2. **Install Dependencies**  
   Run the server on local:
   ```bash
   yarn dev

# API Endpoints

This project includes the following API endpoints:

## Vendor API Endpoints

1. ### **`PUT /apparel/update` - Update Apparel Information**

#### Description:
This endpoint is used to update the details of an apparel item, including its quantity and price. If the apparel already exists in the database, it increments the quantity and updates the price. If the apparel doesn't exist, a new entry is created.

#### Request Body:
The request body should be in the following format:

```typescript
export interface ApparelManipulationParams {
    id: string;       // The unique identifier of the apparel item
    size: string;     // The size of the apparel (e.g., S, M, L, XL)
    quantity: number; // The quantity to update or add to the existing stock
    price: number;    // The new price of the apparel
}
Example:
{
    "id": "1",
    "size": "M",
    "quantity": 10,
    "price": 300
}
```

2. ### **`PUT /apparel/update-bulk` - Update Apparel Information in bulk**

#### Description:
This endpoint is logically the same as above endpoint but it accepts an array of objects as input.
#### Request Body:
The request body should be in the following format:

```typescript
export interface ApparelManipulationParams[] {
    id: string;       // The unique identifier of the apparel item
    size: string;     // The size of the apparel (e.g., S, M, L, XL)
    quantity: number; // The quantity to update or add to the existing stock
    price: number;    // The new price of the apparel
}
Example:
[{
    "id": "1",
    "size": "M",
    "quantity": 10,
    "price": 300
},{
    "id": "2",
    "size": "L",
    "quantity": 7,
    "price": 600
}]
```

## User API Endpoints

1. ### **`POST /order/order-possible` - Possible to place an order**

#### Description:
This endpoint checks whether a user's order can be fully fulfilled based on the available stock from the vendors. It ensures that the requested items, sizes, quantities, can be provided by the vendors without exceeding their available inventory. 

#### Request Body:
The request body should be in the following format:

```typescript
export interface OrderItem[] {
    id: string;
    size: string;
    quantity: number;
  }
Example:
[{
    "id":"2",
    "size": "XXL",
    "quantity": 3
    
},
{
    "id":"1",
    "size": "L",
    "quantity": 1

},
{
    "id":"3",
    "size": "M",
    "quantity": 1

}
]
```

2. ### **`POST /order/lowest-cost` - Get the lowest cost for the order**

#### Description:
This endpoint checks if the order can be placed with the vendor's current stock and return the order total to the buyer  

#### Request Body:
The request body should be in the following format:

```typescript
export interface OrderItem[] {
    id: string;
    size: string;
    quantity: number;
  }
Example:
[{
    "id":"2",
    "size": "XXL",
    "quantity": 3
    
},
{
    "id":"1",
    "size": "L",
    "quantity": 1

},
{
    "id":"3",
    "size": "M",
    "quantity": 1

}
]
```