import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import TopSingleFood from "../TopSingleFood/TopSingleFood";


const TopFoods = () => {
    const {user} = useContext(AuthContext);
    const [countedFoods, setCountedFoods] = useState([]);

    useEffect(()=>{
        fetch(`https://restaurent-server-lime.vercel.app/order?count=${user?.count}`)
        .then(res=>res.json())
        .then(data=>{
            setCountedFoods(data)
        })
    },[])
    console.log(countedFoods)
    return (
        <>
         <h2 className='border-b-2 border-amber-900 text-3xl font-bold mb-4 w-full mt-8 text-amber-900'>Our Top Selling Foods</h2>
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
           
            {
                countedFoods.map(countFood=> <TopSingleFood key={countFood._id} countFood={countFood}></TopSingleFood>)
            }
            
        </div>
        </>
    );
};

export default TopFoods;