import React, { useState } from 'react';
import './App.css';
import { Card } from './components/PF-card/Card';
import Filters from './components/Filters/Filters';
import cardItems from './laundry.json';
import * as Laundry from './interfaces/IDataLaundry';
// import listFilters from "./filters.json";


function App() {
  const jsonData = cardItems as Laundry.DataLaundry;
  const [item, setItems] = useState(jsonData.itemListElement);

  // const filtersAll = Object.values(listFilters).flatMap(val => val);

    // const filterByFeatures = (cat:string) => {
    //   const newItems = [...jsonData.itemListElement].filter((newval) => {

    //     let feat = {
    //       fromId: newval.position, 
    //       listFeatures: newval.item.description.split(".")
    //     }
    //     if(feat.listFeatures.find((el) => el === cat))
    //     {
    //       console.log("Found: "+feat.fromId + " cat: "+feat.listFeatures.find((el) => el ===cat));
    //       return feat.listFeatures.find((el) => el === cat);
    //     }
    //   })
    // }

    const filterBySort = (category: string) => {
      const sortCat = () => {
        if(category === "Popularność") {
          return "item.aggregateRating.ratingValue";
        }else if(category === "Pojemność") {
          return "item.capacity";
        }else if(category === "Cena") {
          return "item.offers.price";
        }else {
          return "item.name";
        }
      }

      const catPath = sortCat();

      const newItems = [...jsonData.itemListElement].sort((a, b) => {
        const valueA = Number(catPath.split(".").reduce((obj:any, key:string) => { return obj![key]}, a));
        const valueB = Number(catPath.split(".").reduce((obj:any, key:string) => { return obj![key]}, b));

          if(valueA < valueB) {
            if(category === "Cena") return -1;
            else return 1;
          }
          if(valueA > valueB) {
            if(category === "Cena") return 1;
            else return -1;
          }
          return 0;

      });
      setItems(newItems);
    }


  return (
    <div className="App">
      <div className="header-title">
        <h2>Wybierz urządzenie</h2>
      </div>
      <div className="container">
        <div className="cont-PF-filters">
            <Filters 
              filterBySort={filterBySort}
              />
        </div>

        <p className="summary-count">Liczba wyników: {jsonData.itemListElement.length}</p>
        <div className="cont-PF-cards">
          {item.map((el) => (
            <div className="PF-card">
              <Card 
                key={el.position}
                cardEl = {el}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
