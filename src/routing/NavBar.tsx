import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);

  // const isActive = (path: string) =>
  //   location.pathname === path ? "active" : "";

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse1 navbar-collapse1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to="/" className={"nav-link" + `${isActive("/")}`}> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
