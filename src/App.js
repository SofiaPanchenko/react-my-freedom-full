import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Form from "./components/Form/index";
import ReporterContextProvider from "./contexts/reporterContext";
import ReporterForm from "./components/ReporterForm";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <ReporterContextProvider>
        <ReporterForm />
        <Form />
      </ReporterContextProvider>
      <Footer />
    </div>
  );
};

export default App;
