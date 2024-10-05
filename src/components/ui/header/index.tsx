import { IoSearch } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import cart from "../../../assets/svg/Cart.svg"
import logo from "../../../assets/svg/Logo.svg"
import Hamburger from "../../custom/hambugger"

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header className="container sticky top-0 left-0 z-50">
      <nav className="flex items-center justify-between font-bold h-[12vh] backdrop-blur-sm">
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
        <ul className="block md:hidden">
          <li>
            <Hamburger />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
