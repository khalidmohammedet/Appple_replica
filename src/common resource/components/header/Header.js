// images of header
import logo from '../../images/icons/logo-sm.png';
import search_icon from '../../images/icons/search-icon-sm.png';
import cart_icon from '../../images/icons/cart-sm.png';


function Header() {
  return (
    // Header navigation
<section className="header" >
    <div className="nav-wrapper fixed-top">
        <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse"> ☰ </button>
                <a className="navbar-brand mx-auto" href="#">
                    <img src={logo} /> </a>

            <div className="navbar-collapse collapse">
                        <ul className="navbar-nav nav-justified w-100 nav-fill">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/iphone/">iphone</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/ipad/">ipad</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/watch/">watch</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/tv/">tv</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Music/">Music</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Support/">Support</a></li>
                        <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/">
                            <img src={search_icon} /></a></li>
                         <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/">
                            <img src={cart_icon} /></a></li>
                        </ul>
            </div>
            </nav>
        </div>
    </div>
</section>
  );
}

export default Header;