import Banner from "../../Components/Banner/Banner";
import Experts from "../../Components/Experts/Experts";
import Navbar from "../../Components/Navbar/Navbar";
import TableBook from "../../Components/TableBook/TableBook";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <TableBook></TableBook>
           <Experts></Experts>
        </div>
    );
};

export default Home;