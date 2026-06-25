import { Link } from "react-router-dom"

function Card(props){
    return(
        <div className='product-grid'>
            {props.prod.map((value) => {
                return (
                    <Link to={`/products/${value.id}`} key={value.id} className="product-card-link">
                        <div className='product-card'>
                            <div className="product-image-wrapper">
                                <img src={value.img} alt={value.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <h2 className="product-title">{value.name}</h2>
                                <span className="product-price">${value.price}</span>
                                <div className="product-action-badge">View Details</div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Card