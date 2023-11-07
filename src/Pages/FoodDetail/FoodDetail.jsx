import { Link } from "react-router-dom";


const FoodDetail = ({ foodDetail }) => {
    const { _id, Name, Image, Category, Price, Origin, Description } = foodDetail;
    return (
        <div className="mt-10 w-[900px] h-[700px] mx-auto">
            <div className="card mx-10 bg-base-100 shadow-xl">
                <figure><img className="" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Name}
                       
                        <div className="badge badge-secondary">{Price}</div>
                    </h2>
                    <p>{Description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{Category}</div>
                        <div className="badge badge-outline">{Origin}</div>
                    </div>
                    <div>
                        <Link to={`foodDetail/${foodDetail._id}`}>
                        <button className="btn bg-amber-900 text-white btn-block">Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;