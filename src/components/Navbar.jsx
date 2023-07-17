const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <img src="/Images/logo.svg" alt="" />
            </div>

            <div className="menu-links">
                <ul>
                    <li><a href="#">How we are different</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;