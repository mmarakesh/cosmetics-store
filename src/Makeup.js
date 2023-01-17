import { useState } from "react";
import { data } from "./data/data";
import Buttons from "./Buttons";
import Product from "./Product";

function Makeup() {
    const [cosmetics, setCosmetics] = useState(data);

    const filteredCosmetics = (searchTerm) => {
        const newCosmetics = data.filter(element => element.searchTerm === searchTerm);
        setCosmetics(newCosmetics);
    }

    return(
        <div>
            <div className="products">
                <h1 className="lookAtMe">Look at me</h1>
                <input placeholder="search"/>
            </div>
            <Buttons filteredCosmetics = {filteredCosmetics}/>
            <Product cosmetics = {cosmetics}/>
        </div>
    )
}

export default Makeup;