import "./index.css";
import img1 from "./facebook.png";
import img2 from "./instagram.png";
import img3 from "./linkedin.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <a href="/">
        {" "}
        <img src={img1} className="Footer__icona" alt="Footer__icona" />{" "}
      </a>
      <a href="/">
        {" "}
        <img src={img2} className="Footer__icona" alt="Footer__icona" />{" "}
      </a>
      <a href="/">
        {" "}
        <img src={img3} className="Footer__icona" alt="Footer__icona" />{" "}
      </a>
    </footer>
  );
};
export default Footer;
