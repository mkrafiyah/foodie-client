import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodDetail from "../FoodDetail/FoodDetail";


const SingleFood = () => {
    const [singlePageFood, setSinglePageFood] = useState([]);
    const params = useParams();

    useEffect( ()=>{
        fetch(`http://localhost:5000/allFoods/${params.Name}`)
        .then(res => res.json())
            .then(data => setSinglePageFood(data))
    },[])
    return (
        <div>
            {
                singlePageFood.map(foodDetail=> <FoodDetail key={foodDetail._id} foodDetail={foodDetail}></FoodDetail>)
            }
            ddd
        </div>
    );
};

export default SingleFood;