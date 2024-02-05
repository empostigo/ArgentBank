// React Router
import { Link } from "react-router-dom"

// Redux
import { useDispatch } from "react-redux"
import { logOutUser } from "../../features/auth/authSlice"

// assets
import argentBankLogo from "../../assets/argentBankLogo.png"

// Style
import headerStyle from "./Header.module.scss"

const UserLoggedIn = ({ firstName }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Link
        to="/profile"
        className={`${headerStyle.anchor} ${headerStyle.item}`}
      >
        <i className="fa fa-user-circle"></i>
        &nbsp;{firstName}
      </Link>
      <Link
        to="/"
        className={`${headerStyle.anchor} ${headerStyle.item}`}
        onClick={() => dispatch(logOutUser())}
      >
        <i className="fa fa-sign-out"></i>
        &nbsp;Sign Out
      </Link>
    </>
  )
}

const UserLoggedOut = () => {
  return (
    <Link to="/login" className={`${headerStyle.anchor} ${headerStyle.item}`}>
      <i className="fa fa-user-circle"></i>
      &nbsp;Sign In
    </Link>
  )
}

const Header = ({ firstName = "" }) => {
  return (
    <header>
      <nav className={headerStyle.mainNav}>
        <Link
          to="/"
          className={`${headerStyle.anchor} ${headerStyle.logoLink}`}
        >
          <img
            className={headerStyle.logo}
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className={headerStyle.srOnly}></h1>
        </Link>
        <div>
          {localStorage.getItem("token") ? (
            <UserLoggedIn firstName={firstName} />
          ) : (
            <UserLoggedOut />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
