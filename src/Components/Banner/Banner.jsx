

const Banner = () => {
    return (
        <div className="hero md:h-[540px] bg-black-100">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/JnwNfVY/banner-food.jpg" className=" w-[450px] h-[450px] rounded-full shadow-2xl mx-auto" />
                <div className="mr-20">
                    <h2 className="text-4xl font-bold text-amber-500 mb-4 italic">40% OFF</h2>
                    <h1 className="text-4xl font-bold text-amber-900">Satisfy Your Cravings</h1>
                    <p className="py-6 text-xl">Enjoy Food With Friends and Family.  Delicious Foods With Wonderful Eating. Eat and Save money with this offer. Offer will be continued for this month. </p>
                    <button className="btn bg-amber-900 text-white">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;