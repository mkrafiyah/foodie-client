import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const PurchaseFood = () => {
    const [purchaseFood, setPurchaseFood] = useState([]);
    const params = useParams();

    useEffect( ()=>{
        fetch(`http://localhost:5000/foodDetail/${params.id}`)
        .then(res=> res.json())
        .then(data=>setPurchaseFood(data))
    },[])
    const handlePurchaseFood = e =>{
        e.preventDefault();

        const form = event.target;
        const buyer = form.buyer.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const email = form.email.value;

        const newOrder = {buyer, name, quantity, date,  price, email}
        console.log(newOrder)

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'Success!',
                    title: 'Success!',
                    text: 'Order added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }
    return (
        <div>
        <h2 className="text-3xl text-sky-900 font-bold text-center mb-8 mt-8">Add A Products</h2>

        <form onSubmit={handlePurchaseFood} className="bg-orange-100 mb-20 p-24">
            {/* form name and Brand Name row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Buyer Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="buyer" placeholder="Buyer Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form carType and Price row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Short description and Rating row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Buying Date</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="date" placeholder="Buying Date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
        

            <input type="submit" value="Purchase" className="btn btn-block bg-amber-900 text-white" />
        </form>
    </div>
    );
};

export default PurchaseFood;