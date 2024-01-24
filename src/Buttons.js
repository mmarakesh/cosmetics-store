import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

function Buttons({filteredCosmetics, setCosmetics, data}) {
    const { t } = useTranslation();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

   useMemo(() => {
   console.log ("Filtering")
   if (search) {
   const filteredItems = [];
   data.forEach(cosmeticsName => {
    if (cosmeticsName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())) {
    filteredItems.push(cosmeticsName);
    console.log(cosmeticsName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    else if (cosmeticsName.name.toLowerCase().includes(search.toLocaleLowerCase())) {
    filteredItems.push(cosmeticsName);
     }
    
    else setCosmetics(filteredItems);
    })
    }
                
   }, [search, data])


    return(
        <div>
        <div className="cont">
            <button className="change" onClick={() => filteredCosmetics("face")}>{t('Face')}</button>
            <button className="change" onClick={() => filteredCosmetics("eye")}>{t('Eye')}</button>
            <button className="change" onClick={() => filteredCosmetics("lip")}>{t('Lip')}</button>
            <button className="change" onClick={() => filteredCosmetics("cheek")}>{t('Cheek')}</button>
        </div>
        <form>
         <input type="text" value={text} placeholder={t("search: lip, eye...")} onChange={handleText}></input>
         <button type="button" className="search" onClick={handleSearch}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
         </button>
         </form>
         </div>
    )
}

export default Buttons;