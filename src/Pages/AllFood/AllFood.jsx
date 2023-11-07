import { useEffect, useState } from "react";
import Food from "../Food/Food";


const AllFood = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allFoods')
        .then(res=>res.json())
        .then(data => setAllFoods(data))
    })
    return (
        <div className="grid grid-cols-2 gap-8  my-12 ">
        {
            allFoods.map(food => <Food key={food._id} food={food}></Food>)
        }
        </div>
    );
};

export default AllFood;