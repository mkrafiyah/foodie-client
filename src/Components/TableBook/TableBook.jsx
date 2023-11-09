

const TableBook = () => {
    return (
        <div className="hero min-h-50 py-8" style={{ backgroundImage: 'url(https://i.ibb.co/MkxKfFR/tablepic.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content">
                <div className="bg-white-100">
                <h2 className="border-b-2 border-white-900 text-white text-3xl font-medium mb-4 w-full">Book A Table</h2>
                <form className="w-[200px]" >
                  <div className="mb-4 grid grid-cols-1 md:flex gap-5">
                  <span className="text-xl text-white">Your Name: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Name"/>
                  <span className="text-xl text-white">Your Email: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Email"/>
                  </div>
                  <div className="mb-4 grid grid-cols-1 md:flex gap-5">
                  <span className="text-xl text-white"> Your Phone: </span>
                  <input className="py-3 px-7 rounded-lg" type="text" placeholder="Phone"/>
                  <span className="text-xl text-white"> Select Date: </span>
                  <input className="py-3 px-7 rounded-lg" type="date" placeholder="date"/>
                  </div>
                  <div className="grid grid-cols-1 md:flex gap-6">
                  <span className="text-xl text-white"> Select Time: </span>
                  <input className="py-3 px-3 md:px-12 rounded-lg" type="time" placeholder="time"/>
                  <span className="text-xl text-white"> Select Person: </span>
                  <input className="py-3 px-7 rounded-lg" type="number" placeholder="Person"/>
                  </div>
                  <button className="w-full bg-amber-900 text-white mx-auto flex justify-center py-4 mt-6 btn" type="submit">Confirm</button>

                </form>
                </div>
            </div>
        </div>
    );
};

export default TableBook;