import FirstScreen from './components/first-screen';
import OwlBlock from './components/owl-block';
import ProductBlockOne from './components/products-block-one';
import ProductsBlockTwo from './components/products-block-two';
import Individual from './components/individual';
import DiscountBlock from './components/discount-block';
import SubscribeBlock from './components/subscribe-block';
import Footer from './components/footer';
import './styles/app-styles.scss';

function App(){
   return (
      <div className="main">
         <div className="mainflow">
            <FirstScreen />
            <OwlBlock />
            <ProductBlockOne />
            <Individual />
            <ProductsBlockTwo />
            <DiscountBlock />
            <SubscribeBlock />
            <Footer />
         </div>
      </div>
   );
};
export default App;