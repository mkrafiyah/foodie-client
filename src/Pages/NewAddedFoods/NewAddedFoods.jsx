import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AddedFood from "../AddedFood/AddedFood";


const NewAddedFoods = () => {

    const [addedFoods, setAddedFoods] = useState([]);
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/addNewFood?email=${user?.email}`

    useEffect( ()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAddedFoods(data))
    },[])
    console.log(addedFoods)
    return (
        <div className="grid grid-cols-2 gap-6 my-10 mx-auto">
            {
                addedFoods.map(addedFood=> <AddedFood key={addedFood._id} addedFood={addedFood}></AddedFood>)
            }
        </div>
    );
};

export default NewAddedFoods;