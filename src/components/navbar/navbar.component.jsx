import { Navbar, Nav } from "react-bootstrap";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import './navbar.styles.scss';

export default function NavBar(){
    return (
        <Navbar className="nav-bar" fixed="top" collapseOnSelect expand="lg" >
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/assets/img/icon.png"
                        className=" d-xs-inline-block d-md-none d-lg-none d-xl-none align-top nav-logo img-fluid "
                        />
                    <img
                        alt=""
                        src="/assets/img/NavLogo.png"
                        className="d-none d-xs-none d-sm-none d-md-inline-block  align-top nav-logo"
                        />
                    </Navbar.Brand>
                
                

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        <HashLink className="navlinks" to="/#ourstory">OUR STORY</HashLink>
                        <HashLink className="navlinks" to="/#family">FAMILY MEMBERS</HashLink>
                        <HashLink className="navlinks" to="/#roadmap">ROADMAP</HashLink>
                        <HashLink className="navlinks" to="/#howtobuy">HOW TO BUY</HashLink>
                        <MdOutlineAccountBalanceWallet className="walleticon"/>
                    </Nav>
                </Navbar.Collapse>

                
        </Navbar>

        
    )
}