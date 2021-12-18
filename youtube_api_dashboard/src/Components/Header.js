import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input
} from 'reactstrap';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

const Header = () => {

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    /*--------------------------------------------------------------------------------*/
    /*To open Search Bar                                                              */
    /*--------------------------------------------------------------------------------*/
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle('show-search');
    }

    const logo_url = "https://www.drupal.org/files/project-images/yt_logo_rgb_light.png"
    return (
        <header className="topbar navbarbg" data-navbarbg="skin4">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img src={logo_url} alt="homepage" className="dark-logo" />
                            <img
                                width="150px"
                                src={logo_url}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <font face="Allegro BT" color="#eeeeee" style={{fontSize:"35pt"}}>API   </font>

                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button
                        className="btn-link nav-toggler d-block d-md-none text-white"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                
                
                <p>    </p>
                <Collapse
                    className="navbarbg"
                    navbar
                    data-navbarbg="skin4"
                >
                    <Nav className="float-left" navbar>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Search-box toggle                                                        */}
                        {/*--------------------------------------------------------------------------------*/}
                        <NavItem className="hidden-sm-down search-box">
                            <NavLink
                                href="#"
                                className="hidden-sm-down"
                                onClick={toggleMenu.bind(null)}
                            >
                                <i style={{fontSize:"25pt", lineHeight:"2"}} className="ti-search" />
                            </NavLink>
                            <Form className="app-search" id="search">
                                <Input type="text" placeholder="Search & enter" />
                                <button className="btn-link srh-btn" onClick={toggleMenu.bind(null)}>
                                    <i className="ti-close" />
                                </button>
                            </Form>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px', marginLeft: '100px' }}
                            >
                                Sort By Video Title Ascending
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px', }}
                            >
                                Sort By Video Title Descending
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                Sort By Date Ascending
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                Sort By Date Descending
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                Sort By Channel Title Ascending
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://wrappixel.com/templates/materialpro-react-admin/"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                Sort By Channel Title Descending
                            </a>
                        </NavItem>
                        
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Search-box toggle                                                          */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                    <Nav className="ml-auto float-right" navbar>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
