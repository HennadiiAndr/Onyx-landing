import FirstScreen from './components/first-screen';
import OwlBlock from './components/owl-block';
import ProductBlockOne from './components/products-block-one';
import Individual from './components/individual';
import './styles/app-styles.scss';

function App(){
   return (
      <div className="main">
         <div className="mainflow">
            <FirstScreen />
            <OwlBlock />
            <ProductBlockOne />
            <Individual />
         </div>
      </div>
   );
};
export default App;