import React from "react";
import "./Card.css";
import * as Laundry from '../../interfaces/IDataLaundry';

interface LaundryProps {
    cardEl: Laundry.ListElements;
}

export const Card: React.FC<LaundryProps> = ({cardEl}) => {

  const sepDesc = () => {
    const desc = cardEl.item.description;
    const feat = desc.split(".");

    return feat;
  }

  const price = Number(cardEl.item.offers.price) * 4.3;
  const calcPrice = () => {
    let pricePL = Math.round(price);
    let pennyN = Math.round((price * 100) % 100);
    let penny:String = pennyN.toString();

    if(pennyN < 10) {
        penny = '0' + pennyN;
    }
    
    return [pricePL, penny];
  }
  const calcLoan = () => {
    let loanPrice = price / 60;

    return loanPrice.toFixed(2);
  }

  return (
    
    <div className="Card">
        <img
            className="product-image"
            src={cardEl.item.image}
            alt="Samsung Washing Machine shown in front.">
        </img>
        <div className="product-info">
            <h2 className="title-name">{cardEl.item.name}</h2>
            <div className="product-desc">
                <p>
                    Pojemność (L): <b>{cardEl.item.capacity}</b>
                    <br/>
                    Wymiary (GxSxW): <b>{cardEl.item.dimensions}</b>
                    <br/>
                    Funkcje: <b>{sepDesc().map((val) => val + ", ")}</b>
                    <br/>
                    Ocena: <b>{Number(cardEl.item.aggregateRating.ratingValue).toFixed(2)}</b>
                </p>
                <div className="energy-class">
                    <p>Klasa energetyczna</p>
                    <div id="energyClass" className="energy-class-rate">
                        {cardEl.item.energyClass}
                    </div>
                </div>
            </div>
            <div className="offer">
                <p className="off-date">Cena obowiązuje od: 15.09.2025 - 21.09.2025</p>
                <div className="price">
                    <p><b>{calcPrice()[0]}</b></p>
                    <div className="additional-price-info">
                        <sup>{calcPrice()[1]}</sup>
                        <sub>zł</sub>
                    </div>
                </div>
                <div className="installments">
                    <p><b>{calcLoan()} zł x 60 rat</b></p>
                </div>
            </div>
        </div>
        <div className="btn-choose">
            <a href={cardEl.item.url} target="_blank" rel="noreferrer"><b>WYBIERZ</b></a>
        </div>
    </div>
  );
};
