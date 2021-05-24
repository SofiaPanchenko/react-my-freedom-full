import { useForm } from "react-hook-form";
<<<<<<< HEAD
=======
import logo from "./assets/logo.jpeg";
>>>>>>> a5795475462f8eccc362a219519d51c12bfb5bba
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Form from "./components/Form/index";

const App = () => {
  return (
    <div className="container">
<<<<<<< HEAD
      <Header />
      <Form />
      <About />
      <Footer />
=======
      <img src={logo} alt="logo" className="logo"></img>
      <Header />
      <About />
      <Footer />
      <Form />
>>>>>>> a5795475462f8eccc362a219519d51c12bfb5bba
    </div>
  );
};

export default App;
