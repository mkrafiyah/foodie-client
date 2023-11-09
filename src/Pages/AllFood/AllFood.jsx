import { useEffect, useState } from "react";
import Food from "../Food/Food";
import { useLoaderData } from "react-router-dom";
import {Helmet} from "react-helmet";


const AllFood = () => {
    const [allFoods, setAllFoods] = useState([]);
    const {count} = useLoaderData();
    const [cardsPerPage, setCardsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count / cardsPerPage);

    
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    const handleCardPerPage = e =>{
        const val = parseInt(e.target.value);
        setCardsPerPage(val)
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/allFoods?page=${currentPage}&size=${cardsPerPage}`)
        .then(res=>res.json())
        .then(data => setAllFoods(data))
    }, [currentPage]);
    return (
        <div>
            <Helmet>
                <title>R-Foodie|AllFood</title>
            </Helmet>
            <div className="grid grid-cols-3 gap-8  my-12 ">
        {
            allFoods.map(food => <Food key={food._id} food={food}></Food>)
        }
        </div>
        <div className="flex justify-center mb-20 gap-5">
            <p className="text-xl text-amber-900">Your Page:{currentPage}</p>
            {
                pages.map(page => 
                
                <button onClick= { ()=> setCurrentPage(page)} 
                className="border btn-sm text-white bg-amber-900" key={page}>{page}</button>)
            }
            <select value={cardsPerPage} onChange={handleCardPerPage} name="" id="">
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="9">9</option>
            </select>
            
           
        </div>
        </div>
    );
};

export default AllFood;