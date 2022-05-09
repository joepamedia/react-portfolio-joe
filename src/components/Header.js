import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* add flexbox */}
      <header>
        Joe Pa Media
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/coding">Coding</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
