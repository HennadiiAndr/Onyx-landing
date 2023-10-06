import '../styles/footer-styles.scss';

function Footer ({ imageData }){
   return(
      <div className='footer-wrapper'>
         <div className='header-wrapper'>
            <div className='header-container'>
               <div className='header-logo-container'>
                  <div className='ellipse'>
                     <img src={`http://localhost:4000/files-list/${imageData[7]}`} alt='logo' />
                  </div>
                  <div className='logo-text'>ONYX</div>
               </div>
               <div className='socials-container'>
                  <img src={`http://localhost:4000/files-list/${imageData[16]}`} alt='instagram' />
                  <img src={`http://localhost:4000/files-list/${imageData[17]}`} alt='whatsup' />
               </div>
            </div>
         </div>
         <div className='footer-contacts-container'>
            <div className='footer-contacts'>
               <div className='footer-number'>8 800 6849007</div>
               <div className='footer-address'>Одесса ул. Троицкая, 2</div>
            </div>
         </div>
      </div>
   );
};

export default Footer;