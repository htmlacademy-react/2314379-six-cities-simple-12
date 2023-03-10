export type Offer = {
  id: number;
  img: string;
  mark: string;
  priceValue: number;
  priceText: string;
  rating: string;
  name: string;
  type: string;
  link: string;
}

type OfferCardProps = {
  offer: Offer;
}

export function OfferCard({offer}: OfferCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={offer.link}>
          <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.priceText}</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={offer.link}>{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
