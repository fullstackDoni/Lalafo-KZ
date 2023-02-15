import React, {useState} from 'react';
import axios from "../../axios";

const Popup = (popup,setPopup) => {
    const [status,setStatus] = useState('signIn')

    const popupCloseFunc = (e) => {
        if(e.target.classList.contains('overlay')) {
            setPopup(false)
        }
    }
    const signInHandler = (e) => {
        console.log(e.target)
    }
    const signUpHandler= (e) => {

        axios.post('/signUp',{
            email:e.target[0].value,
            name:e.target[1].value,
            password:e.target[1].value,
        }).then((res)=>{
            setPopup(false)
            e.target[0].value=''
            e.target[1].value=''
            e.target[2].value=''
        }).catch(err=>alert(err))

    }


    return (
        <div onClick={(e) => popupCloseFunc(e)} className={`overlay ${popup && 'overlay_active'}`}>
            <div className='popup'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(status === 'signIn'){
                        signInHandler(e)
                    }else {
                        signUpHandler(e)
                    }
                }} className='popup__form'>
                    <div className='popup__form-top'>
                        <h2 onClick={() => setStatus('signIn')} className={`popup__title ${status === 'signIn' && 'popup__title'}`}>Kiru</h2>
                        <h2 onClick={() => setStatus("signUp")} className={`popup__title ${status === 'signUp' && 'popup__title'}`}>Tirkelu</h2>
                    </div>
                    <input placeholder='Email teriniz' className='popup__input' type="email"/>
                    {
                        status === 'signUp' && <input placeholder='Atynyz'  className='popup__input' type="text"/>
                    }
                    <input placeholder='Qupia sozdi teriniz' className='popup__input' type="password"/>
                    <button className='popup__btn' type='submit'>{status === 'signIn' ? 'Kıru' : 'Tırkelu'}</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;