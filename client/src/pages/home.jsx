import { NavBar } from "../components/navbar";
import { Banner } from "../components/banner";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import "./styles/home.scss";

export const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <Banner />
            <Content />
            <Footer />
        </div>
    );
};
