import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <Link to="/all-beers">
                <img className="all-beers home-button" src="public/images/Group 4.jpg" alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            <Link to="/random-beer">
                <img className="random-beer home-button" src="public/images/Group 5.jpg" alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
        </main>
    );
}
 
export default Home;