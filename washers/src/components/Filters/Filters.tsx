import React, { useState } from "react";
import "./Filters.css";
import DropDownSort from "./DropDownSort";
import Search from "./Search"
import filters from "../../filters.json";

const Filters = ({
  filterBySort,
  filterByFeatures,
  filterByEnergy,
  filterByCapacity,
}: any) => {

  const [inputText, setInputText] = useState("");

  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<string>("Popularność");
  const [activeFeatMenu, setActiveFeatMenu] = useState<boolean>(false);
  const [selectFeat, setSelectFeat] = useState<string>("Pokaż wszystkie");
  const [activeEnergyMenu, setActiveEnergyMenu] = useState<boolean>(false);
  const [selectEnergy, setSelectEnergy] = useState<string>("Pokaż wszystkie");
  const [activeCapacityMenu, setActiveCapacityMenu] = useState<boolean>(false);
  const [selectCapacity, setSelectCapacity] = useState<string>("Pokaż wszystkie");

  const sortingEl = filters.sortElements;
  const featEl = filters.featureElements;
  const energyEl = filters.energyElements;
  const capacityEl = filters.capacityElements;

  //sorting
  const sort = () => {
    const array = [...sortingEl];
    array.unshift("Wszystkie");

    const findId = (el: string) => el === selectSort;
    const id = array.findIndex(findId);

    array.splice(id, 1);

    return array;
  };
  const sortingSelection = (val: string) => {
    setSelectSort(val);
    filterBySort(val);
    setSelectFeat("Pokaż wszystkie");
    setSelectEnergy("Pokaż wszystkie");
  };
  const toggleSortMenu = () => {
    setActiveMenu(!activeMenu);
  };

  //features
  const feat = () => {
    const array = [...featEl];
    array.unshift("Wszystkie");

    const findId = (el: string) => el === selectFeat;
    const id = array.findIndex(findId);

    array.splice(id, 1);

    return array;
  };
  const featureSelection = (val: string) => {
    setSelectFeat(val);
    filterByFeatures(val);
    setSelectSort("Pokaż wszystkie");
    setSelectEnergy("Pokaż wszystkie");
    setSelectCapacity("Pokaż wszystkie");
  };
  const toggleFeatMenu = () => {
    setActiveFeatMenu(!activeFeatMenu);
  };

  //energy classes
  const energy = () => {
    const array = [...energyEl];
    array.unshift("Wszystkie");

    const findId = (el: string) => el === selectEnergy;
    const id = array.findIndex(findId);

    array.splice(id, 1);

    return array;
  };
  const energySelection = (val: string) => {
    setSelectEnergy(val);
    filterByEnergy(val);
    setSelectSort("Pokaż wszystkie");
    setSelectFeat("Pokaż wszystkie");
    setSelectCapacity("Pokaż wszystkie");
  };
  const toggleEnergyMenu = () => {
    setActiveEnergyMenu(!activeEnergyMenu);
  };

  //capacity
  const capacity = () => {
    const array = [...capacityEl];
    array.unshift("Wszystkie");

    const findId = (el: string) => el === selectCapacity;
    const id = array.findIndex(findId);

    array.splice(id, 1);

    return array;
  };
  const capacitySelection = (val: string) => {
    setSelectCapacity(val);
    filterByCapacity(val);
    setSelectSort("Pokaż wszystkie");
    setSelectFeat("Pokaż wszystkie");
    setSelectEnergy("Pokaż wszystkie");
  };
  const toggleCapacityMenu = () => {
    setActiveCapacityMenu(!activeCapacityMenu);
  };

  const cancelHandler = (
    event: React.FocusEvent<HTMLButtonElement>,
    key: string
  ) => {
    if (event.currentTarget === event.target && key === "sortElements") {
      setActiveMenu(false);
    } else if (
      event.currentTarget === event.target &&
      key === "featureElements"
    ) {
      setActiveFeatMenu(false);
    } else if (
      event.currentTarget === event.target &&
      key === "energyElements"
    ) {
      setActiveEnergyMenu(false);
    } else if (
      event.currentTarget === event.target &&
      key === "capacityElements"
    ) {
      setActiveCapacityMenu(false);
    }
  };

  //inputText 
  let inputHandler = (e: any) => {
    var cardClass = document.getElementById("search-list");
    if(e.target.value === "") 
        cardClass?.classList.remove("search-bar-toggle");
    else 
        cardClass?.classList.add("search-bar-toggle");

    var lowerCase = e.target.value.toLowerCase();

    setInputText(lowerCase);
  };

  return (
    <div className="Filters">
      <div className="search-form">
        <input 
            type="text" 
            placeholder="Search.."
            onChange={inputHandler}
        ></input>
        <div className="search-filters" id="search-list">
            <div className="cont-card">
                <Search 
                    inputText={inputText}/>
            </div>
        </div>
        
      </div>
      <div className="cont-filters">
        <div className="filter sort">
          <p>Sortuj po:</p>
          <div className="filter-dropdown">
            <button
              className="btn-dropdown"
              onClick={() => toggleSortMenu()}
              onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
                cancelHandler(e, "sortElements");
              }}
            >
              <div className="btn-dropdown-select">
                {selectSort ? selectSort : "Wszystkie"}
                <pre className="arrow-down">↓</pre>
              </div>
              {activeMenu && (
                <DropDownSort
                  sorting={sort()}
                  activeMenu={false}
                  toggleMenu={() => toggleSortMenu()}
                  sortingSelection={sortingSelection}
                />
              )}
            </button>
            {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}
          </div>
        </div>
        <div className="filter features">
          <p>Funkcje:</p>
          <div className="filter-dropdown">
            <button
              className="btn-dropdown"
              onClick={() => toggleFeatMenu()}
              onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
                cancelHandler(e, "featureElements");
              }}
            >
              <div className="btn-dropdown-select">
                {selectFeat ? selectFeat : "Wszystkie"}
                <pre className="arrow-down">↓</pre>
              </div>
              {activeFeatMenu && (
                <DropDownSort
                  sorting={feat()}
                  activeMenu={false}
                  toggleMenu={() => toggleFeatMenu()}
                  sortingSelection={featureSelection}
                />
              )}
            </button>
          </div>
        </div>
        <div className="filter energy">
          <p>Klasa energetyczna:</p>
          <div className="filter-dropdown">
            <button
              className="btn-dropdown"
              onClick={() => toggleEnergyMenu()}
              onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
                cancelHandler(e, "energyElements");
              }}
            >
              <div className="btn-dropdown-select">
                {selectEnergy ? selectEnergy : "Wszystkie"}
                <pre className="arrow-down">↓</pre>
              </div>
              {activeEnergyMenu && (
                <DropDownSort
                  sorting={energy()}
                  activeMenu={false}
                  toggleMenu={() => toggleEnergyMenu()}
                  sortingSelection={energySelection}
                />
              )}
            </button>
          </div>
        </div>
        <div className="filter capacity">
          <p>Pojemność:</p>
          <div className="filter-dropdown">
            <button
              className="btn-dropdown"
              onClick={() => toggleCapacityMenu()}
              onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
                cancelHandler(e, "capacityElements");
              }}
            >
              <div className="btn-dropdown-select">
                {selectCapacity ? selectCapacity : "Wszystkie"}
                <pre className="arrow-down">↓</pre>
              </div>
              {activeCapacityMenu && (
                <DropDownSort
                  sorting={capacity()}
                  activeMenu={false}
                  toggleMenu={() => toggleCapacityMenu()}
                  sortingSelection={capacitySelection}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
