export interface Apparel {
  id: string;
  sizes: {
    [size: string]: {
      quantity: number;
      price: number;
    };
  };
}

export interface ApparelStock {
    [id: string]: Apparel;
}