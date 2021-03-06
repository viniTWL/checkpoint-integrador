import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP
import './style.scss';
import { GrCart } from 'react-icons/gr';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart';

export default function Header(){
    const cartCTX = useCart()
    return(
    <header>
        <Navbar className="header-nav"collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand>
                <h1>CTD Music Store</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="nav-list">
                        <Link className="unstyle" to={"/"}>
                            <Nav.Item className="list-header">Home</Nav.Item>
                        </Link>
                        <Link className="unstyle" to={"/products"}>
                            <Nav.Item className="list-header">Produtos</Nav.Item>
                        </Link>
                        <Link className="unstyle" to={"/about"}>
                            <Nav.Item className="list-header">Sobre nós</Nav.Item>
                        </Link>
                        <Link className="unstyle" to={"/admin"}>
                            <Nav.Item className="list-header">Administração</Nav.Item>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}>
                            <Nav.Item className="cart-header">{cartCTX?.products?.length > 0 ? <BsFillCartCheckFill /> : <GrCart/>}</Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </header>
      
    )
}