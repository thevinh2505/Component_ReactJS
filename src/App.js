import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <Contact/>
                <ProductList/>
            </div>
            <Footer/>
    </div>
  );
}

export default App;
