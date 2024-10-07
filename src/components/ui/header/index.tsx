import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import cart from "../../../assets/svg/Cart.svg"
import logo from "../../../assets/svg/Logo.svg"
import { useGlobalContext } from "../../../hooks"
import Hamburger from "../../custom/hambugger"
import { MobileNavigation } from "../../custom/mobile"
import Sidebar from "../../custom/sidebar"

const Header = () => {
  const { handleScroll, mobileMenu, toggleMobileMenu } = useGlobalContext()
  return (
    <header className="sticky top-0 left-0 z-40">
      <Sidebar />
      <nav className="container flex items-center justify-between font-bold h-[12vh] backdrop-blur-sm">
        <ul className="md:flex items-center gap-5 hidden">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/#packages" onClick={handleScroll}>
              PACKAGES
            </a>
          </li>
          <li>
            <a href="/#packages" onClick={handleScroll}>
              ABOUT TRAINER
            </a>
          </li>
        </ul>
        <img src={logo} alt="logo" className="w-[75px] md:w-fit" />
        <ul className="md:flex items-center gap-8 hidden">
          <li>
            <NavLink to="">Sign In</NavLink>
          </li>
          <li>
            <IoSearch size={20} />
          </li>
          <li>
            <img src={cart} alt="logo images" />
          </li>
          <Hamburger />
        </ul>
        <div className="block md:hidden">
          {!mobileMenu ? (
            <GiHamburgerMenu size={25} onClick={toggleMobileMenu} />
          ) : (
            <IoMdClose size={25} onClick={toggleMobileMenu} />
          )}
        </div>
        <MobileNavigation />
      </nav>
    </header>
  )
}

export default Header
