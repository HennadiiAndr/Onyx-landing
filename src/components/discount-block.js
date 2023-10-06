import '../styles/discount-block-styles.scss';



function DiscountBlock ({setModalActive, imageData}) {
   const handleClick = () => {
      setModalActive(true);
   }
   return (
      <div className='discount-block-wrapper'>
         <div className='discount-block-container'>
            <div className='discount-block'>
               <div className='discount-text'>
                  Реализация творческих задумок: 
                  можно украсить сутажной вышивкой любимое платье, или расшить
                  воротник блузки
               </div>
               <div className="discount-button" onClick={handleClick}>Получить скидку 20%</div>
            </div>
         </div>
         <div className='discount-image'>
            <img src={`http://localhost:4000/files-list/${imageData[15]}`} alt='piece of art' className='discount-picture' />
            <img src={`http://localhost:4000/files-list/${imageData[3]}`} alt='elipse1' className='ellipse1' />
            <img src={`http://localhost:4000/files-list/${imageData[4]}`} alt='elipse2' className='ellipse2' />
         </div>
      </div>
   );
};

export default DiscountBlock;