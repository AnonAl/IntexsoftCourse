export interface Link {
  href: string;
  rel: string;
  type: 'GET' | 'POST';
}

export interface Store {
  number: number;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  _links: Link[];
}

export interface StoreResponseBody {
  stores: Store[];
}

export interface TradeIdentifier {
  images: string[];
}

export interface Product {
  sku: string;
  name: string;
}

export interface ProductFull extends Product {
  brand: string;
  descriptions: {
    consumer: string;
    receipt: string;
  };
  tradeIdentifiers: TradeIdentifier[];
}

export interface ProductResponse {
  results: Product[];
  pages: number;
  _links: Link[];
}

export interface User {
  name: string;
  surName: string;
  email: string;
  password: number;
}

export interface UsersResult {
  results: User[];
}

export interface CategoryOfProduct {
  id: number;
  name: string;
  type: string;
  _links: Link[];
}

export interface CategoryResponse {
  categories: CategoryOfProduct[];
}

