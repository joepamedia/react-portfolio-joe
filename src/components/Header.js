import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="top-nav">
        <div>
          <h1>Joe Pa Media</h1>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/react-portfolio-joe">Home</Link>
          </li>
          <li>
            <Link to="/react-portfolio-joe/photos">Photos</Link>
          </li>
          <li>
            <Link to="/react-portfolio-joe/videos">Videos</Link>
          </li>
          <li>
            <Link to="/react-portfolio-joe/coding">Coding</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;
