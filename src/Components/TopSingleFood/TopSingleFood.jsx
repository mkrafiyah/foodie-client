import { Link } from "react-router-dom";


const TopSingleFood = ({countFood}) => {
    return (
        <div>
            <div className="mx-auto my-10">
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={countFood.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {countFood.name}
                        <div className="badge badge-secondary">{countFood.price}</div>
                    </h2>
                    <p>{countFood.category}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline bg-amber-900 text-white font-bold">{countFood.quantity}</div>
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