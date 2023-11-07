import { Link } from "react-router-dom";


const Food = ({ food }) => {

    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={food.Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {food.Name}
                        <div className="badge badge-secondary">{food.Price}</div>
                    </h2>
                    <p>{food.Category}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{food.Quantity}</div>
                        <Link to={`/allFoods/${food.Name}`}>
                        <button className="btn btn-xs bg-amber-900 text-white">Details</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Food;