import { FaBehance, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-yellow-100'>
            <div>
            <footer className="footer p-10 text-base-content">
                <aside>
                    <a className="btn btn-ghost normal-case text-3xl italic ml-0 mb-3">
                        <img className="w-[60px] h-[60px] border-amber-950 rounded-full gap-0" src="https://i.ibb.co/hXzSvkN/R.jpg" alt="" />
                        Foodie</a>
                    <p>RFoodie Restaurent <br />Providing reliable since 1992</p>
                    <div className='flex gap-6'>
                        <FaFacebook></FaFacebook>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaTwitter></FaTwitter>
                        <FaBehance></FaBehance>
                    </div>

                </aside>
                <nav>
                    <header className="footer-title">Short Link</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Gallery</a>
                </nav>
                <nav>
                    <header className="footer-title">Help Link</header>
                    <a className="link link-hover">Phone</a>
                    <a className="link link-hover">Address</a>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>
            <div className="footer footer-center p-4  text-base-content">
                 <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
               </div>
            </div>
            
        </div>
    );
};

export default Footer;