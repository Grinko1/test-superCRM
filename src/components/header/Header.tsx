import { memo } from 'react';
import style from './Header.module.scss'

const Header = memo(() => {
    return (
        <div className={style.Header}>
   
            <img src="./assets/logo.png" alt="logo" />
            <span>x</span>
            <img src="./assets/name.png" />
            
        </div>
    );
});

export default Header;