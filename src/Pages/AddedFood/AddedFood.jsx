import { Link } from "react-router-dom";


const AddedFood = ({addedFood}) => {
    const {_id, name, image, price, description, category, quantity} = addedFood;
    console.log(addedFood)
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{price}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{quantity}</div>
                    </div>
                    <Link to={`update/${_id}`}>
                    <button className="btn btn-xs bg-amber-900 text-white">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddedFood;