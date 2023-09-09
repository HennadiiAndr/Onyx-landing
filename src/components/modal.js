import { useState } from 'react';
import '../styles/modal-styles.scss';

function Modal ({modalActive, setModalActive}){
   const [user, setUser] = useState({});
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userBirthDate, setUserBirthDate] = useState('');

   const handleNameChange = (event) =>{
      setUserName(event.target.value)
   };

   const handleEmailChange = (event) =>{
      setUserEmail(event.target.value)
   }

   const handleBirthDateChange = (event) =>{
      setUserBirthDate(event.target.value)
   }

   const handleSubmit = (event) =>{
      event.preventDefault()
      user.name = userName;
      user.birthDate = userBirthDate;
      user.email = userEmail;
      setUser(user);
      console.log(user);
   }


   return(
      <div className={modalActive ? 'modal active' : 'modal'} onClick={()=>setModalActive(false)}>
         <div className="modal-grey"></div>
         <div className="modal-menu-container" onClick={(e)=> e.stopPropagation()}>
            <form className="modal-input-block" onSubmit={handleSubmit}>
               <div className="modal-title">
                  Подпишись на рассылку,
                  чтобы получить скидку 20% на первый заказ
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>Имя</label>
                  <input 
                     className='name-block-input' 
                     type = 'text'
                     value = {userName}
                     onChange={handleNameChange}
                  />
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>Дата рождения</label>
                  <input 
                     className='name-block-input' 
                     type='date'
                     value={userBirthDate}
                     onChange={handleBirthDateChange}
                  />
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>E-mail</label>
                  <input 
                     className='name-block-input' 
                     type='email'
                     value={userEmail}
                     onChange={handleEmailChange}
                  />
               </div>
               <button className='suscribe-button'>подписаться</button>
            </form>
         </div>
      </div>
   );
};

export default Modal;