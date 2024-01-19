import { useTranslation } from 'react-i18next';

function Product({cosmetics}) {
    const { t } = useTranslation();

    return(
    <div className="products">
        {cosmetics.map(item => {
        const {id, brand, name, price, image} = item;
        return(
            <div className="product-card" key={id}>
            <img src={image} alt="cosmetics"/>
            <h5>{ brand }</h5>
            <p>{t(name)}</p>
            <h2>$ { price }</h2>
            </div>
            )
            })}
    </div>
    )
}

export default Product;