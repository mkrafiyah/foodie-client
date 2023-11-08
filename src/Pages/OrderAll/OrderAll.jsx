

const OrderAll = ({order, handleDelete}) => {

    const {_id, buyer, name, image, price, time, email} = order;
     

    
    return (
  
          
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{time}</div>
            </div>
          </div>
        </td>
        <td>
         {buyer}
          
        </td>
        <td>${price}</td>
        <td>{email}</td>
        <th>
          <button onClick={()=>handleDelete(_id)}  className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
       
    );
};

export default OrderAll;