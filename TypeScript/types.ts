export enum Size {
  S = "S",
  M = "M",
  L = "L"
}

export interface Product {
  id: number,
  name: string,
  price: number,
  size: Size
}
