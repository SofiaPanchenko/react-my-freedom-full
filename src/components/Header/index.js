import styles from "./style.css";
import logo from "../../assets/header.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className="logo"></img>
    </header>
  );
};

export default Header;
