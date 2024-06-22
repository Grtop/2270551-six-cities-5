import { CITIES, Sorting, TYPES, UserType } from '../const';
//import { PreviewOffer } from './PreviewOffer';
//import UserDto from '../dto/user/user.dto';

export type CityName = typeof CITIES[number];
export type Type = typeof TYPES[number];
export type SortName = keyof typeof Sorting;

export type Location = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export enum HouseType {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel',
}

export enum Feature {
  Breakfast = 'Breakfast',
  Conditioner = 'Air conditioning',
  LaptopWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}


export type User = {
  name: string;
  avatarUrl: string;
  type: UserType;
  email: string;
};

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type Offer = {
  id: string;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
  location: Location;
  previewImage: string;
  type: Type;
  bedrooms: number;
  description: string;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type OfferPreview = {
  id: string;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
  location: Location;
  previewImage: string;
  type: Type;
}

export type NewOrEditOffer = {
  id?: string,
  title: string;
  description: string;
  city: City;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: Type;
  bedrooms: number;
  maxAdults: number;
  price: number;
  rating: number;
 // host: User;
  goods: string[];
  location: Location;
  images: string[];
};


export type NewOffer = {
  title: string;
  description: string;
  city: City;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: Type;
  bedrooms: number;
  maxAdults: number;
  rating: number;
  price: number;
  goods: string[];
  location: Location;
  images: string[];
};

export type Coords = {
  latitude: number,
  longitude: number
};

export type NewComment = Pick<Comment, 'comment' | 'rating'>;
export type UserAuth = Pick<User, 'email'> & { password: string };
export type CommentAuth = NewComment &
  Pick<Offer, 'id'>;
export type FavoriteAuth = Offer['id'];
export type UserRegister = Omit<User, 'avatarUrl'> &
  Pick<UserAuth, 'password'> & { avatar?: File };
