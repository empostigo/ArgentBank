// Redux
import { useDispatch, useSelector } from "react-redux"
import { userInfosThunk } from "../../features/profile/profileSlice"

// Components
import Header from "../../components/Header/Header"

// Style
import userStyle from "./User.module.scss"
import { useEffect } from "react"

const User = () => {
  const { userInfos } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userInfosThunk())
  })

  return (
    <>
      <Header />
      <main className={`${userStyle.main} ${userStyle.bgDark}`}>
        <header className={userStyle.header}>
          <h1>
            Welcome back
            <br />
            {`${userInfos.firstName} ${userInfos.lastName}!`}
          </h1>
          <button className={userStyle.editButton}>Edit Name</button>
        </header>
        <h2 className={userStyle.srOnly}>Accounts</h2>
        <section className={userStyle.account}>
          <div className={userStyle.contentWrapper}>
            <h3 className={userStyle.title}>Argent Bank Checking (x8349)</h3>
            <p className={userStyle.amount}>$2,082.79</p>
            <p className={userStyle.amountDescription}>Available Balance</p>
          </div>
          <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
            <button className={userStyle.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={userStyle.account}>
          <div className={userStyle.contentWrapper}>
            <h3 className={userStyle.title}>Argent Bank Savings (x6712)</h3>
            <p className={userStyle.amount}>$10,928.42</p>
            <p className={userStyle.amountDescription}>Available Balance</p>
          </div>
          <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
            <button className={userStyle.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={userStyle.account}>
          <div className={userStyle.contentWrapper}>
            <h3 className={userStyle.title}>Argent Bank Credit Card (x8349)</h3>
            <p className={userStyle.amount}>$184.30</p>
            <p className={userStyle.amountDescription}>Current Balance</p>
          </div>
          <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
            <button className={userStyle.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default User
