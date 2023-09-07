import instagram from '../assets/instagram_logo.png';
import whatsup from '../assets/whatsup_logo.png';
import ellipse7 from '../assets/Ellipse-7.png';
import ellipse6 from '../assets/Ellipse-6.png';
import envelope from '../assets/EnvelopeSimple.png';
import arrow from '../assets/arrow.png';
import '../styles/subscribe-block-styles.scss';

function SubscribeBlock () {
   return(
      <div className='subscribe-block-wrapper'>
         <div className='subscribe-block-container'>
            <div className='subscribe-contacts'>
               <div className='subscribe-text'>
                  Свяжись со мной, чтобы обсудить
                  детали твоего будущего украшения
               </div>
               <div className='socials-block'>
                  <img src={instagram} alt='instagram' />
                  <img src={whatsup} alt='whatsup' />
               </div>
            </div>
            <div className='ellipse-block'>
               <img src={ellipse7} alt='ellipse7' className="ellipse7" />
               <img src={ellipse6} alt='ellipse6' className="ellipse6" />
            </div>
            <div className='subscribe-text-container'>
               <div className='subscribe-text'>
                  Подпишись на рассылку, чтобы получить 
                  скидку 20% на первый заказ, 
                  информацию о новинках, акциях и розыгрышах
               </div>
            </div>
            <div className='email-input-container'>
               <img src={envelope} alt='envelope' className='envelope' />
               <input placeholder='Email' className='email-input' />
               <button className='subdcribe-button'>
                  <img src={arrow} alt='arrow' />
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubscribeBlock;