import Banner from "../../Components/Banner/Banner";
import Experts from "../../Components/Experts/Experts";
import TableBook from "../../Components/TableBook/TableBook";
import TopFoods from "../../Components/TopFoods/TopFoods";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <TopFoods></TopFoods>
           <TableBook></TableBook>
           <Experts></Experts>
           
        </div>
    );
};

export default Home;