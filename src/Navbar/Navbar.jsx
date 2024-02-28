import style from './Navbar.module.css'
function Navbar(){
    return(
        <nav className={style.bg}>
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Contact Us </a>
        </nav>
    );
}

export default Navbar;