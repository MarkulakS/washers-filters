import React from "react";
import "./Card.css";

export const Card = () => {

  const price = 2699;
  const calcLoan = () => {
    let loanPrice = price / 60;
    return loanPrice.toFixed(2);
  }

  return (
    <div className="Card">
      {/* <img className="image" src={prod.image}></img> */}
        <img
            className="image"
            src="//images.samsung.com/is/image/samsung/p6pim/uk/rs90f66beteu/gallery/uk-rs90f-f-hub-rs90f66beteu-thumb-545334796"
            alt="Samsung Fridge shown in front.">
        </img>
        <div className="product-info">
            <h2 className="title-name">614L Bespoke AI Family Hub Side-by-Side Fridge Freezer with Family Hub™,
                Silver</h2>
            <div className="product-desc">
                {/* capacity */}
                {/* <p>Pojemność (L): <b>{prod.capacity}</b></p> */}
                <p>
                    Pojemność (L): <b>614</b>
                    {/* dimmensions */}
                    <br/>
                    Wymiary (GxSxW): <b>50 x 60 x 70 cm</b>
                    {/* functions */}
                    {/* <p>Funkcje: <b>{prod.description}</b></p> */}
                    <br/>
                    Funkcje: <b>Family Hub™, On-device Bixby, Auto Open Door with Voice</b>
                    {/* <p>Ocena: <b>{prod.aggregateRating.ratingValue}</b></p> */}
                    <br/>
                    Ocena: <b>5</b>
                </p>
                <div className="energy-class">
                    {/* <p>Klasa energetyczna {prod.energyClass}</p> */}
                    <p>Klasa energetyczna</p>
                    <div className="energy-class-rate">
                        E
                    </div>
                </div>
            </div>
            <div className="offer">
                <p className="off-date">Cena obowiązuje od: 15.09.2025 - 21.09.2025</p>
                <div className="price">
                    <p><b>{price}</b></p>
                    <div className="additional-price-info">
                        <sup>00</sup>
                        <sub>zł</sub>
                    </div>
                </div>
                <div className="installments">
                    <p><b>{calcLoan()} zł x 60 rat</b></p>
                </div>
            </div>
        </div>
        <div className="btn-choose">
            <button onClick={alert}><b>WYBIERZ</b></button>
        </div>
    </div>
  );
};
