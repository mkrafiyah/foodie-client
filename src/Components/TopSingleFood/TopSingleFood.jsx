import { Link } from "react-router-dom";


const TopSingleFood = ({countFood}) => {
    return (
        <div>
            <div className="mx-auto">
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={countFood.Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {countFood.Name}
                        <div className="badge badge-secondary">{countFood.Price}</div>
                    </h2>
                    <p>{countFood.Category}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{countFood.Quantity}</div>
                        <Link>
                        <button className="btn btn-xs bg-amber-900 text-white">Best Selling</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopSingleFood;