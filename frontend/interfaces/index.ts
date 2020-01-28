export interface Store {
  id: number;
  name: string;
  label?: string;
  address: string;
}

export interface Article {
  id: number;
  name: string;
  description: string;
  price: number;
  total_in_shelf: number;
  total_in_vault: number;
  created_at: Date;
  updated_at: Date;
  store_id: number;
}
