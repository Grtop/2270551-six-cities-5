import { Coords,CityName,Feature } from '../../types';

export default class UpdateOfferDto {

  public id?: string;
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: CityName;
  public preview?: string;
  public photos?: string[];
  public premium?: boolean;
  public favorite?: boolean;
  public houseType?: string;
  public roomNumber?: number;
  public guests?: number;
  public goods?: string[];
  public price?: number;
  public features?: Feature[];
  public coords?: Coords;
  public rating?: number;
  public image?: string;
}
