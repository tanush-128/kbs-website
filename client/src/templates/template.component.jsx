import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.component";
import Navigation from "../components/navigation/navigation.component";


const Template = () => {
  
    
    return (
        <Fragment>
            <Navigation/>
            <Outlet />
            <Footer/>
        </Fragment>
    )
}

export default Template;
