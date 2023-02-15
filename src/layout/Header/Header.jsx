import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";

const Header = () => {
    const [popup,setPopup] = useState(false)
    return (
        <header className='header'>
        <div className="container">
            <nav className='header__nav'>
                <div className='header__left'>
                    <h1 className='header__title'><Link to='/'>LALAFOKZ</Link></h1>
                    <Link className='header__link' to='#'>Biznes üşın</Link>
                </div>
                <div className="header__right">
                    <p onClick={()=>setPopup(true)} className='header__login'>Kıru - Tırkelu</p>
                    <button type={"button"} className='header__btn'>Öbävlenie jıberu</button>
                </div>
            </nav>
        </div>
            {
                popup && <Popup setPopup={setPopup} popup={popup}/>
            }
        </header>
    );
};

export default Header;