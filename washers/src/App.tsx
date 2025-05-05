import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/PF-card/Card";
import Filters from "./components/Filters/Filters";
import cardItems from "./laundry.json";
import * as Laundry from "./interfaces/IDataLaundry";

function App() {
  const jsonData = cardItems as Laundry.DataLaundry;

  const step = 6;
  let actualList: any;
  
  const startSortingByRating = (category: string) => {
    const sortCat = () => {
      if (category === "Popularność")
        return "item.aggregateRating.ratingValue";
      else if (category === "Pojemność") 
        return "item.capacity";
      else if (category === "Cena")
        return "item.offers.price";
      else return "item.name";
    };

    const catPath = sortCat();

    const newItems = [...jsonData.itemListElement].sort((a, b) => {
      const valueA = Number(
        catPath.split(".").reduce((obj: any, key: string) => {
          return obj![key];
        }, a)
      );
      const valueB = Number(
        catPath.split(".").reduce((obj: any, key: string) => {
          return obj![key];
        }, b)
      );

      if (valueA < valueB) {
        if (category === "Cena") return -1;
        else return 1;
      }
      if (valueA > valueB) {
        if (category === "Cena") return 1;
        else return -1;
      }
      return 0;
    });
    actualList = newItems;
    return newItems;
  }

  const firstList = startSortingByRating("Popularność");

  const [item, setItems] = useState([...firstList].slice(0, step));

  const filterBySort = (category: string) => {
    setItems(startSortingByRating(category).slice(0, step));
  };

  const filterByFeatures = (category: string) => {
    const newItems = [...jsonData.itemListElement].filter((newval) => {
      let feat = {
        fromId: newval.position,
        listFeatures: newval.item.description.split(".")
      };

      if (feat.listFeatures.find((el) => el === category)) 
        // console.log("Found: "+feat.fromId + " cat: "+feat.listFeatures.find((el) => el ===cat));
        return feat.listFeatures.find((el) => el === category);
      else if (category === "Wszystkie") 
        return feat.listFeatures;
      else return 0;
    });
    actualList=newItems;
    setItems(newItems.slice(0, step));
  };

  const filterByEnergy = (category: string) => {
    const newItems = [...jsonData.itemListElement].filter((newval) => {
      let energy = {
        fromId: newval.position,
        energyList: newval.item.energyClass,
      };

      if (energy.energyList === category)
        return energy.energyList === category;
      else if (category === "Wszystkie") 
        return energy.energyList;
      else return 0;
    });
    actualList=newItems;
    setItems(newItems.slice(0, step));
  };

  const filterByCapacity = (category: string) => {
    const newItems = [...jsonData.itemListElement].filter((newval) => {
      let capacity = {
        fromId: newval.position,
        capacityList: newval.item.capacity,
      };

      if (capacity.capacityList === category)
        return capacity.capacityList === category;
      else if (category === "Wszystkie") 
        return capacity.capacityList;
      else return 0;
    });
    actualList=newItems;
    setItems(newItems);
  };

  const showMore = () => {
    setItems([...item, ...actualList.slice(item.length, item.length + step)]);
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
            filterByFeatures={filterByFeatures}
            filterByEnergy={filterByEnergy}
            filterByCapacity={filterByCapacity}
          />
        </div>

        <p className="summary-count">Liczba wyników: {item.length}</p>
        <div className="cont-PF-cards">
          {item.map((el, key) => (
            <div className="PF-card">
              <Card 
                key={el.position} 
                cardEl={el} />
            </div>
          ))}
        </div>
        <div className="show-more">
          {item.length % 6 === 0 ?
            <a onClick={() => showMore()}>Pokaż więcej
              <div className="arrow"></div>
            </a>
          : null }
        </div>
      </div>
    </div>
  );
}

export default App;
