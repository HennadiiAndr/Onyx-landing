import '../styles/owl-block-styles.scss';

function OwlBlock ({ setModalActive, imageData }){
   return(
      <div className="owl-block-wrapper">
         <div className='discount-container' >
            Получи скидку 20% на первый заказ
            <div className='discount-button' onClick={()=>setModalActive(true)}>
               <div className='button-arrow' >
                  <img src={`http://localhost:4000/files-list/${imageData[2]}`} alt='arrow' />
               </div>
            </div>
         </div>
         <div className="owl-picture">
            <img src={`http://localhost:4000/files-list/${imageData[14]}`} alt='owl' />
            <img src={`http://localhost:4000/files-list/${imageData[7]}`} alt='ellipse' className='ellipse-one' />
            <img src={`http://localhost:4000/files-list/${imageData[8]}`} alt='ellipse' className='ellipse-two' />
         </div>
         <div className='info-container'>
            <div className='text'>Сутажные украшения, изготовленные из шелкового шнура
               и натуральных камней <span>вручную</span>, придутся по вкусу любителям ретро и романтического стиля. 
            </div>
         </div>
      </div>
   );
};

export default OwlBlock;