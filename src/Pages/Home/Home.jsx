import Banner from "../../Components/Banner/Banner";
import Experts from "../../Components/Experts/Experts";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TableBook from "../../Components/TableBook/TableBook";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <TableBook></TableBook>
           <Experts></Experts>
           <Footer></Footer>
        </div>
    );
};

export default Home;