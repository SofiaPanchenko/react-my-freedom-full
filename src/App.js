import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Form from './components/Form'
import {useForm} from 'react-hook-form';


const App = () => {

  return (
      <div className='container'>
        <Header/>
        <About />
        <Footer />
        <Form />
      </div>
  )
}

export default App
