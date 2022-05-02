import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <Link style={{ padding: "5px", color: "white" }} to={"/"}>
        Home
      </Link>
      <Link style={{ padding: "5px", color: "white" }} to={"/about"}>
        About
      </Link>
      <Link style={{ padding: "5px", color: "white" }} to={"/products"}>
        Products
      </Link>
      <Link style={{ padding: "5px", color: "white" }} to={"/login"}>
        Login
      </Link>
    </nav>
  );
};
