import React, { useState } from "react";
import "./Filters.css";
import DropDownSort from "./DropDownSort";
import filters from "../../filters.json";

const Filters = ({filterBySort}: any) => {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [selectSort, setSelectSort] = useState<string>("Popularność");

    const sortingEl = filters;

    const sort = () => {
        const array = [...sortingEl.sortElements];
        array.unshift("Wszystkie");

        const findId = (el: string) => el === selectSort;
        const id = array.findIndex(findId);

        array.splice(id, 1);

        return array;
      };

    const sortingSelection = (val: string) => {
        setSelectSort(val);
        filterBySort(val);
    };

    const toggleSortMenu = () => {
        setActiveMenu(!activeMenu);
    };

    const cancelHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
        if(event.currentTarget === event.target) {
            setActiveMenu(false);
        }
    };

    return (
        <div className="Filters">
            <div className="search-form">
                <input type="text" placeholder="Search.."></input>
            </div>
            <div className="cont-filters">
                <div className="filter sort">
                    <p>Sortuj po:</p>
                    <div className="filter-dropdown">
                        <button 
                            className="btn-dropdown"
                            onClick={() => toggleSortMenu()}
                            onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
                                cancelHandler(e);
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
                            )
                            } 
                        </button>
                        {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}
                    </div> 
                </div>
                <div className="filter features">
                    <p>Funkcje:</p>
                    <div className="filter-dropdown">
                        <button className="btn-dropdown">Pokaż wszystkie</button>
                    </div> 
                </div>
                <div className="filter energy">
                    <p>Klasa energetyczna:</p>
                    <div className="filter-dropdown">
                        <button className="btn-dropdown">Pokaż wszystkie</button>
                    </div> 
                </div>
                <div className="filter capacity">
                    <p>Pojemność:</p>
                    <div className="filter-dropdown">
                        <button className="btn-dropdown">Pokaż wszystkie</button>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Filters;