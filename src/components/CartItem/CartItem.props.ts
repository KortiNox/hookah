export interface CartItemProps {
  id: number;
  name: string;
  description?: string[];
  image: string;
  price: number;
  count?: number;
  flavor?: string;
  strong?: string;
  category?: string;
}
