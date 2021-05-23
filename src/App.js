import { useForm } from "react-hook-form";
import logo from "./assets/logo.jpeg";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Form from "./components/Form/index";

const App = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo"></img>
      <Header />
      <About />
      <Footer />
      <Form />
    </div>
  );
};

export default App;
