import FirstScreen from './components/first-screen';
import OwlBlock from './components/owl-block';
import './styles/app-styles.scss';

function App(){
   return (
      <div className="main">
         <div className="mainflow">
            <FirstScreen />
            <OwlBlock />
         </div>
      </div>
   );
};
export default App;