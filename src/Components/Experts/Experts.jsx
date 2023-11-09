import {FaBehance, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Experts = () => {
    return (
        <div >
            <h2 className='border-b-2 border-amber-900 text-3xl font-bold mb-4 w-full mt-8 text-amber-900'>Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7 ">
            <div className="card card-compact  md:w-96 bg-yellow-100  shadow-xl">
                <figure><img className="w-[200px] h-[200px] border-amber-950 rounded-full gap-0 pt-4" src="https://i.ibb.co/gFSxTqy/chef-1.jpg" alt="Chef" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-amber-900">Mr. Rauf</h2>
                    <p className='text-amber-900 font-bold'>Senior Chef</p>
                    <div className="card-actions justify-center">
                      <FaFacebook></FaFacebook>
                      <FaLinkedinIn></FaLinkedinIn>
                      <FaTwitter></FaTwitter>
                      <FaBehance></FaBehance>
                    </div>
                </div>
            </div>
            <div className="card card-compact  md:w-96 bg-yellow-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px] border-amber-950 rounded-full gap-0 pt-4" src="https://i.ibb.co/k2zjTQt/chef-2.jpg" alt="Chef" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-amber-900">Mr. Rauf</h2>
                    <p className='text-amber-900 font-bold'>Senior Chef</p>
                    <div className="card-actions justify-center">
                    <FaFacebook></FaFacebook>
                      <FaLinkedinIn></FaLinkedinIn>
                      <FaTwitter></FaTwitter>
                      <FaBehance></FaBehance>
                    </div>
                </div>
            </div>
            <div className="card card-compact  md:w-96 bg-yellow-100 shadow-xl">
                <figure>
                <img className="w-[200px] h-[200px] rounded-full gap-0 pt-4 " src="https://i.ibb.co/0FTtqTL/chef-3.jpg" alt="Chef" />
                    </figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-amber-900">Mr. Rauf</h2>
                    <p className='text-amber-900 font-bold'>Senior Chef</p>
                    <div className="card-actions justify-center">
                    <FaFacebook></FaFacebook>
                      <FaLinkedinIn></FaLinkedinIn>
                      <FaTwitter></FaTwitter>
                      <FaBehance></FaBehance>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Experts;