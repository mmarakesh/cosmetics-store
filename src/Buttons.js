import { useTranslation } from "react-i18next";

function Buttons({filteredCosmetics}) {
    const { t } = useTranslation();

    return(
        <div className="cont">
            <button className="change" onClick={() => filteredCosmetics("face")}>{t('Face')}</button>
            <button className="change" onClick={() => filteredCosmetics("eye")}>{t('Eye')}</button>
            <button className="change" onClick={() => filteredCosmetics("lip")}>{t('Lip')}</button>
            <button className="change" onClick={() => filteredCosmetics("cheek")}>{t('Cheek')}</button>
        </div>
    )
}

export default Buttons;