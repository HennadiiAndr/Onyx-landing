import '../styles/individual-styles.scss';

function Individual ({ imageData }){
   return(
      <div className='individual-wrapper'>
         <div className="individual-container">
            <div className="individual-text">
               Каждое изделие создается в единственном экземпляре.<br/> 
               Также возможно изготовление на заказ.
            </div>
            <div className="individual-image-two">
               <img src={`http://localhost:4000/files-list/${imageData[0]}`} alt='piece of art' />
            </div>
            <div className="try-on-block-adaptive">
               <div className="try-text-container">
                  <div className="try-on-text">
                     Помощь в подборе украшения к наряду, примерка в Одессе.
                  </div>
               </div>
            </div>
            <div className="individual-image">
               <img src={`http://localhost:4000/files-list/${imageData[1]}`} alt='piece of art' className='pic-one' />
               <img src={`http://localhost:4000/files-list/${imageData[10]}`} alt='ellipse' className='ellipse8-adaptive' />
               <img src={`http://localhost:4000/files-list/${imageData[11]}`} alt='ellipse' className='ellipse9-adaptive' />
            </div>
            
            <img src={`http://localhost:4000/files-list/${imageData[10]}`} alt='ellipse' className='ellipse8' />
            <img src={`http://localhost:4000/files-list/${imageData[11]}`} alt='ellipse' className='ellipse9' />
         </div>
         <div className="try-on-block">
            <div className="try-text-container">
               <div className="try-on-text">
                  Помощь в подборе украшения к наряду, примерка в Одессе.
               </div>
            </div>
         </div>
      </div>
   );
};

export default Individual;