import { NewOrEditOffer } from '../../types/types';
import { adaptOfferType } from '../utils';
import CreateOrUpdateOfferDto from '../../dto/offer/update-offer.dto';

export const adaptCreateOfferToServer =
  (offer: NewOrEditOffer): CreateOrUpdateOfferDto => ({
    price: offer.price,
    title: offer.title,
    premium: offer.isPremium,
    city: offer.city.name,
    coords: offer.location,
    image: ' ',
    description: offer.description,
    preview: offer.previewImage ? offer.previewImage.name : undefined,
    houseType: adaptOfferType(offer.type),
    roomNumber: offer.bedrooms,
    goods: offer.goods,
    photos: offer.images.map(({ name }) => name),
    guests: offer.maxAdults,
    postDate: new Date()
  });

export const adaptEditOfferToServer =
  (offer: NewOrEditOffer): CreateOrUpdateOfferDto => ({
    id: offer.id,
    price: offer.price,
    title: offer.title,
    premium: offer.isPremium,
    city: offer.city.name,
    coords: offer.location,
    description: offer.description,
    preview: offer.previewImage ? offer.previewImage.name : undefined,
    houseType: adaptOfferType(offer.type),
    roomNumber: offer.bedrooms,
    goods: offer.goods,
    photos: offer.images.map(({ name }) => name),
    guests: offer.maxAdults,
    postDate: new Date()
  });

export const adaptPreviewImageToServer =
  (file: string) => {
    const formData = new FormData();
    formData.set('previewImage', file);

    return formData;
  };

