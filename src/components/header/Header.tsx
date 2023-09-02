import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.Header}>
   
            <img src="./assets/logo.png" alt="" />
            <span>x</span>
            <img src="./assets/name.png" alt="" />
            
        </div>
    );
};

export default Header;