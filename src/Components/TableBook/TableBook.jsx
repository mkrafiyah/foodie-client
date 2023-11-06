

const TableBook = () => {
    return (
        <div className="hero min-h-50 py-8" style={{ backgroundImage: 'url(https://i.ibb.co/MkxKfFR/tablepic.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content ">
                <div className="bg-black-400">
                <h2 className="border-b-2 text-3xl font-medium mb-4 w-full">Book A Table</h2>
                <form >
                  <div className="mb-4 flex gap-5">
                  <span className="text-xl">Your Name: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Name"/>
                  <span className="text-xl">Your Email: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Email"/>
                  </div>
                  <div className="mb-4 flex gap-5">
                  <span className="text-xl"> Your Phone: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Phone"/>
                  <span className="text-xl"> Select Date: </span>
                  <input className="py-3 px-7 rounded-lg" type="date" placeholder="date"/>
                  </div>
                  <div className="flex gap-6">
                  <span className="text-xl"> Select Time: </span>
                  <input className="py-3 px-12 rounded-lg" type="time" placeholder="time"/>
                  <span className="text-xl"> Select Person: </span>
                  <input className="py-3 px-7 rounded-lg" type="number" placeholder="Person"/>
                  </div>
                  <button className="w-full py-4 mt-6 btn" type="submit">Confirm</button>

                </form>
                </div>
            </div>
        </div>
    );
};

export default TableBook;