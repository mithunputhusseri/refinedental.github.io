import { Popover } from "antd"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { Drawer, Button } from 'antd';
import { FaHome, FaPhoneAlt, FaWrench, FaAddressBook, FaCalendarCheck, FaQuestionCircle } from "react-icons/fa";
import { goToHomeSection } from "../scrollToSection";
import { openWhatsApp } from '../../../constants/siteLinks';

const sectionNavClass = "nav-link scrollto";

const HeaderNav = ({ open, setOpen, isLoggedIn, data, avatar, content }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const goToSection = (e, sectionId) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        goToHomeSection(navigate, location, sectionId);
    };

    return (
        <>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li>
                        <NavLink to={'/'} end className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'dental-services')}>Service</a>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'gallery')}>Gallery</a>
                    </li>
                    <li>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"}>
                            FAQs
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'contact')}>Contact</a>
                    </li>
                    <li className="nav-appointment-item">
                        <button
                            type="button"
                            className="nav-appointment-btn"
                            onClick={openWhatsApp}
                        >
                            Book Appointment
                        </button>
                    </li>
                </ul>
                {isLoggedIn &&
                    <div>
                        <Popover content={content}>
                            <div className='profileImage'>
                                <img src={data?.img ? data?.img : avatar} alt="" className="profileImage shadow img-fluid" />
                            </div>
                        </Popover>
                    </div>
                }
                <FaBars className='mobile-nav-toggle' onClick={showDrawer} />
            </nav>
            <Drawer
                placement={'left'}
                width={500}
                onClose={onClose}
                open={open}
                size={"default"}
                extra={<Button type="primary" onClick={onClose}> Close</Button>}
            >
                <ul className="mobile-menu-nav">
                    <li>
                        <NavLink to={'/'} end onClick={onClose} className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"}>
                            <FaHome className="icon" />Home
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'about')}>
                            <FaAddressBook className="icon" />About
                        </a>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'dental-services')}>
                            <FaWrench className="icon" />Service
                        </a>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'gallery')}>
                            <FaWrench className="icon" />Gallery
                        </a>
                    </li>
                    <li>
                        <NavLink to="/faq" onClick={onClose} className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"}>
                            <FaQuestionCircle className="icon" />FAQs
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'contact')}>
                            <FaPhoneAlt className="icon" />Contact
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="nav-appointment-btn nav-appointment-btn--mobile"
                            onClick={() => {
                                onClose();
                                openWhatsApp();
                            }}
                        >
                            <FaCalendarCheck className="icon" />Book Appointment
                        </button>
                    </li>
                </ul>
            </Drawer>
        </>
    )
}

export default HeaderNav
