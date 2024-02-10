import { City, Location, User } from './types';


export type PreviewOffer = {
  id: string;
  title: string;
  type: string[];
  price: number;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  city: City;
  bedrooms: number;
  description: string;
  goods: string;
  images: string[];
  maxAdults: number;
  host: User;
};
