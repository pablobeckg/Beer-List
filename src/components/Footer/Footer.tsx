import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <button>
        <Link to="/">
          <img src="/images/Logo.png" alt="" />
        </Link>
      </button>
    </footer>
  );
};

export default Footer;
