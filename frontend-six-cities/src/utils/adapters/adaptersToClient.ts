import ReviewDto from '../../dto/review/review.dto';
import OfferDto from '../../dto/offer/offer.dto';
import { Offer, Comment } from '../../types/types';
import { PreviewOffer } from '../../types/PreviewOffer';


export const adaptPreviewOffersToClient = (offers: OfferDto[]): PreviewOffer[] => (
  offers.map((offer: OfferDto) => ({
    id: offer.id,
    price: offer.price,
    title: offer.title,
    rating: offer.rating,
    isPremium: offer.premium,
    isFavorite: offer.favorite,
    city: offer.city,
    location: offer.coords,
    description: offer.description,
    host:offer.User,
    goods: offer.goods,
    previewImage: offer.preview,
    bedrooms: offer.bedrooms,
    type: [],
    images: offer.photos,
    maxAdults: offer.maxAdults,
  }))
);

export const adaptOfferToClient = (offer: OfferDto): Offer => ({
  id: offer.id,
  price: offer.price,
  title: offer.title,
  rating: offer.rating,
  isPremium: offer.premium,
  isFavorite: offer.favorite,
  city: offer.city,
  location: offer.coords,
  description: offer.description,
  previewImage: offer.preview,
  type: offer.houseType,
  bedrooms: offer.roomNumber,
  goods: offer.goods,
  host: offer.author,
  images: offer.photos,
  maxAdults: offer.guests
});

export const adaptCommentsToClient =
  (comments: ReviewDto[]): Comment[] =>
    comments
      .filter((comment: ReviewDto) => comment.user !== null)
      .map((review: ReviewDto) => adaptCommentToClient(review));

export const adaptCommentToClient =
  (review: ReviewDto): Comment => ({
    id: review.id,
    comment: review.comment,
    rating: review.rating,
    date: review.postDate,
    user: review.user,
  });
