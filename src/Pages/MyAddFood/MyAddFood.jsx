import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const MyAddFood = () => {
    const {user} = useContext(AuthContext);

    const handleAddFood = e =>{
       e.preventDefault();

       const form = event.target;
       const name = form.name.value;
       const image = form.image.value;
       const category = form.category.value;
       const quantity = form.quantity.value;
       const description = form.description.value;
       const origin = form.origin.value;
       const price = form.price.value;
       const email = form.email.value;

       const newFood = {name, image, category, quantity, description, origin, price, email}
       console.log(newFood)

       //send data to the server
       fetch('https://restaurent-server-lime.vercel.app/addNewFood', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newFood)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
            Swal.fire({
                icon: 'Success!',
                title: 'Success!',
                text: 'Food added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
       })

    }
    return (
        <div>
            <h2 className="text-3xl text-amber-900 font-bold text-center mb-8 mt-8">Add A Food Item</h2>

            <form onSubmit={handleAddFood} className="bg-orange-100 mb-20 p-24">
                {/*  row 1 */}
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
                            <span className="label-text">Food Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="image" placeholder="Food Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  row 2 */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Food Category" className="input input-bordered w-full" />
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
                {/* row 3 */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Origin</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="origin" placeholder="Origin" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 4 */}
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
                            <span className="label-text">Added User Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="email"defaultValue={user?.email}   placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Food" className="btn btn-block bg-amber-900 text-white" />
            </form>
        </div>
    );
};

export default MyAddFood;