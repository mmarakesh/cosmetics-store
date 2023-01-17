function Buttons({filteredCosmetics}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredCosmetics("face")}>Face</button>
            <button className="change" onClick={() => filteredCosmetics("eye")}>Eye</button>
            <button className="change" onClick={() => filteredCosmetics("lip")}>Lip</button>
            <button className="change" onClick={() => filteredCosmetics("cheek")}>Cheek</button>
        </div>
    )
}

export default Buttons;