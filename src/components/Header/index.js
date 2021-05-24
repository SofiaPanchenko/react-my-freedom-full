import styles from "./style.css";
import logo from "../../assets/header.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header-logo"></img>
      {/* <h1>My Freedom</h1> */}
    </header>
  );
};

export default Header;
