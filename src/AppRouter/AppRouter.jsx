import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import Orders from '../Components/Orders/Orders';
import MakeContect from '../Components/MakeContect/MakeContect';
import MakeOrder from '../Components/MakeOrder/MakeOrder';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



const AppRouter = () => {
    return (
        <section className="allPage">
            <BrowserRouter>
                <Header />
                <SideBar />
                <section className="body">
                    <Routes>
                        <Route exact path={"/"} element={<Home />} />
                        <Route exact path={"/Products"} element={<Products />} />
                        <Route exact path={"/Orders"} element={<Orders />} />
                        <Route exact path={"/MakeContect"} element={<MakeContect />} />
                        <Route exact path={"/MakeOrder"} element={<MakeOrder />} />
                    </Routes>
                </section>
                <Footer />
            </BrowserRouter>
        </section>
    )
}
export default AppRouter;