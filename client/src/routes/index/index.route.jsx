import About from "../../components/about/about.component";
import Fyq from "../../components/fyq/fyq.component";
import HomeImages from "../../components/home-imgs/home-images.component";
import HomeComponent from "../../components/home/Home.component";
import NewsLetter from "../../components/newsletter/newsletter.component";

const IndexRoute = () => {
    return (
        <div>
            <HomeComponent />
            <About />
            <HomeImages />
            <Fyq />
            <NewsLetter />
        </div>
    )
}

export default IndexRoute; 