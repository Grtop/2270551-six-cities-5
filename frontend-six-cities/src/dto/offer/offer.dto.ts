import { Coords,City,HouseType, Feature } from '../../types';
import UserDto from '../user/user.dto';

export default class OfferDto {
  public id!: string;
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: City;
  public preview!: string;
  public photos!: string[];
  public premium!: boolean;
  public favorite!: boolean;
  public houseType!: HouseType;
  public roomNumber!: number;
  public guests!: number;
  public price!: number;
  public features!: Feature[];
  public User!: UserDto;
  public coords!: Coords;
  public rating!: number;
  public author!: UserDto;
  public goods!: string;
  public bedrooms!: number;
  public maxAdults!: number;


}
