export interface Room {
  _id: string;
  owner: string;
  roomStatus: string;
  title: string;
  description: string;
  images: [string];
  number: number;
  province: string;
  city: string;
  address: string;
  price: number;
  beds: number;
  bathrooms: number;
  features: [string];
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}
