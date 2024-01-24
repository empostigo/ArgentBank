// React Router
import { Link } from "react-router-dom"

// assets
import argentBankLogo from "../../assets/argentBankLogo.png"

// Style
import headerStyle from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <nav className={headerStyle.mainNav}>
        <Link
          to="/"
          className={`${headerStyle.homeLink} ${headerStyle.logoLink}`}
        >
          <img
            className={headerStyle.logo}
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className={headerStyle.srOnly}></h1>
        </Link>
        <div>
          <Link to="/sign-in" className={headerStyle.item}>
            <i className="fa fa-user-circle">Sign In</i>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
