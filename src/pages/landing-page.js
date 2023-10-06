import FirstScreen from '../components/first-screen';
import OwlBlock from '../components/owl-block';
import ProductBlockOne from '../components/products-block-one';
import ProductsBlockTwo from '../components/products-block-two';
import Individual from '../components/individual';
import DiscountBlock from '../components/discount-block';
import SubscribeBlock from '../components/subscribe-block';
import Footer from '../components/footer';
import Modal from '../components/modal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/landing-page-styles.scss';

function LandingPage (){
   const [modalActive, setModalActive] = useState(false);
   const [isEmailValid, setValidEmail] = useState('');
   const [isDateValid, setValidDate] = useState('');
   const [isNameValid, setValidName] = useState(false);
   const [imageData, setImageData] = useState([]);

   

   useEffect(()=>{
      const fetchData = async ()=>{
         const response = await axios.get(`http://localhost:4000/files-list`);
         const data = await response.data;
         setImageData(data);
      }
      fetchData();
   }, []);

   return (
         <div className="main">
            <Modal 
               modalActive={modalActive} 
               setModalActive={setModalActive}
               isEmailValid={isEmailValid}
               setValidEmail={setValidEmail}
               isDateValid={isDateValid}
               setValidDate={setValidDate}
               isNameValid={isNameValid}
               setValidName={setValidName}
            />
            <div className="mainflow">
               <FirstScreen imageData={imageData} />
               <OwlBlock setModalActive={setModalActive} imageData={imageData} />
               <ProductBlockOne />
               <Individual imageData={imageData} />
               <ProductsBlockTwo />
               <DiscountBlock setModalActive={setModalActive} imageData={imageData}/>
               <SubscribeBlock setModalActive={setModalActive} imageData={imageData} />
               <Footer imageData={imageData} />
            </div>
         </div>
   );
};

export default LandingPage;