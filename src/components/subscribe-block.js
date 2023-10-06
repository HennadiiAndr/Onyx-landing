import '../styles/subscribe-block-styles.scss';

function SubscribeBlock ({ setModalActive, imageData }) {
   const handleClick = () =>{
      setModalActive(true)
   }
   return(
      <div className='subscribe-block-wrapper'>
         <div className='subscribe-block-container'>
            <div className='subscribe-contacts'>
               <div className='subscribe-text'>
                  Свяжись со мной, чтобы обсудить
                  детали твоего будущего украшения
               </div>
               <div className='socials-block'>
                  <img src={`http://localhost:4000/files-list/${imageData[16]}`} alt='instagram' />
                  <img src={`http://localhost:4000/files-list/${imageData[17]}`} alt='whatsup' />
               </div>
            </div>
            <div className='ellipse-block'>
               <img src={`http://localhost:4000/files-list/${imageData[6]}`} alt='ellipse7' className="ellipse7" />
               <img src={`http://localhost:4000/files-list/${imageData[5]}`} alt='ellipse6' className="ellipse6" />
            </div>
            <div className='subscribe-text-container'>
               <div className='subscribe-text'>
                  Подпишись на рассылку, чтобы получить 
                  скидку 20% на первый заказ, 
                  информацию о новинках, акциях и розыгрышах
               </div>
            </div>
            <div className='email-input-container'>
               <button className='subdcribe-button' onClick={handleClick}>
                  <img src={`http://localhost:4000/files-list/${imageData[2]}`} alt='arrow' />
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubscribeBlock;