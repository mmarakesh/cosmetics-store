import { useState } from "react";
import { data } from "./data/data";
import Buttons from "./Buttons";
import Product from "./Product";
import { useTranslation } from 'react-i18next';

function Makeup() {
    const { t } = useTranslation();

    const [cosmetics, setCosmetics] = useState(data);

    const filteredCosmetics = (searchTerm) => {
        const newCosmetics = data.filter(element => element.searchTerm === searchTerm);
        setCosmetics(newCosmetics);
    }

    return(
        <div>
            <div className="products">
                <h1 className="lookAtMe">{t('Look at me')}</h1>
                <input placeholder={t("search")}/>
            </div>
            <Buttons filteredCosmetics = {filteredCosmetics}/>
            <Product cosmetics = {cosmetics}/>
        </div>
    )
}

export default Makeup;