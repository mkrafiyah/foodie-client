import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderAll from "../OrderAll/OrderAll";
import Swal from "sweetalert2";


const MyOrder = () => {
    const {user} = useContext(AuthContext);
    const [myOrderedFood, setMyOrderedFood] = useState([]);
    
    const url = `http://localhost:5000/order?email=${user?.email}`
    useEffect( ()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setMyOrderedFood(data))
    },[])

    const handleDelete = _id =>{
        const proceed = confirm('are you sure?')
        if(proceed){
          fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your car has been deleted.',
                    'success'
                  ) 
                  const remaining = myOrderedFood.filter(order=> order._id !== _id);
                  setMyOrderedFood(remaining)
              }
        })
          
        }
    }

    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Food Name</th>
        <th>Buyer</th>
        <th>Price</th>
        <th>Email</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        myOrderedFood.map(order=> <OrderAll key={order._id} order={order} handleDelete={handleDelete}></OrderAll>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrder;