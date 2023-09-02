import FirstScreen from './components/first-screen';
import OwlBlock from './components/owl-block';
import ProductBlockOne from './components/products-block-one';
import './styles/app-styles.scss';

function App(){
   return (
      <div className="main">
         <div className="mainflow">
            <FirstScreen />
            <OwlBlock />
            <ProductBlockOne />
         </div>
      </div>
   );
};
export default App;