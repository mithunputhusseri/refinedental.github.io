import { Popover } from "antd"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { Drawer, Button } from 'antd';
import { FaHome, FaPhoneAlt, FaWrench, FaAddressBook, FaCalendarCheck } from "react-icons/fa";
import { goToHomeSection } from "../scrollToSection";

const sectionNavClass = "nav-link scrollto";
const WHATSAPP_URL = 'https://wa.me/9113206109';

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
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'contact')}>Contact</a>
                    </li>
                    <li className="nav-appointment-item">
                        <a
                            href={WHATSAPP_URL}
                            className="nav-appointment-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book Appointment
                        </a>
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
                        <a href="/" className={sectionNavClass} onClick={(e) => goToSection(e, 'contact')}>
                            <FaPhoneAlt className="icon" />Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href={WHATSAPP_URL}
                            className="nav-appointment-btn nav-appointment-btn--mobile"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                        >
                            <FaCalendarCheck className="icon" />Book Appointment
                        </a>
                    </li>
                </ul>
            </Drawer>
        </>
    )
}

export default HeaderNav
