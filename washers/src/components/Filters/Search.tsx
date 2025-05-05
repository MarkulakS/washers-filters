import React from 'react';
import cardItems from "../../laundry.json";
import * as Laundry from "../../interfaces/IDataLaundry";

function Search(props: any) {
    const jsonData = cardItems as Laundry.DataLaundry;

    const searchFilter = jsonData.itemListElement.filter((el) => {

        if(props.inputText === "") {
            return 0;
        }else{
            var cardClass = document.getElementById("search-list");
            if(el.item.name.toLowerCase().includes(props.inputText)) {
                cardClass?.classList.add("search-bar-toggle");
                return el.item.name.toLowerCase().includes(props.inputText);
            }
            else {
                return el.item.name.toLowerCase().includes(props.inputText);
            }
        }
    })

    return (
        <div>
            {searchFilter.map((el) => (
                    <p id="searchItem" className="search-items" key={el.position}>
                        <a href={el.item.url}>{el.item.name}</a>
                    </p>
            ))}
        </div>
    )
}

export default Search;