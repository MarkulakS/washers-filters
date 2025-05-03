export interface Item {
    name: string;
    description: string;
    offers: Offer;
    aggregateRating: Rating;
    capacity: string;
    energyClass: string;
    dimensions: string;
    url: string;
    image: string;
}

export interface Offer {
    priceCurrency: string;
    price: string;
}

export interface Rating {
    ratingValue: string;
    reviewCount: string;
}

export interface ListElements {
    item: Item;
    position: string;
}

export interface DataLaundry {
    itemListElement: ListElements[];
}