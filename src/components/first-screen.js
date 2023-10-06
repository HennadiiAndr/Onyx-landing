import '../styles/first-screen-style.scss';

function FirstScreen ({imageData}) {
   console.log(imageData);
   return(
      <div className="first-screen-wrapper">
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
         <div className="content-wrapper">
            <div className='content-container'>
               <div className="title-container">
                  <div className='title'>Ощути на себе силу красоты</div>
                  <div className='description'>Выбери лучшее авторское украшение</div>
               </div>
               <div className='picture'>
                  <div className='description-inPic'>Выбери лучшее авторское украшение</div>
                  <img src={`http://localhost:4000/files-list/${imageData[13]}`} alt='piece of art' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstScreen;