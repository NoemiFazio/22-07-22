import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Serie Tv</a>
        </li>
        <li>
          <a href="/">Film</a>
        </li>
        <li>
          <a href="/">La mia lista</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
