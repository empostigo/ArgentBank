// Style
import userStyle from "./User.module.scss"

const User = () => {
  return (
    <main className={`${userStyle.main} ${userStyle.bgDark}`}>
      <header className={userStyle.header}>
        <h1></h1>
        <button className={userStyle.editButton}>Edit Name</button>
      </header>
      <h2 className={userStyle.srOnly}>Accounts</h2>
      <section className={userStyle.account}>
        <div className={userStyle.contentWrapper}>
          <h3 className={userStyle.title}></h3>
          <p className={userStyle.amount}></p>
          <p className={userStyle.amountDescription}></p>
        </div>
        <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
          <button className={userStyle.transactionButton}></button>
        </div>
      </section>
      <section className={userStyle.account}>
        <div className={userStyle.contentWrapper}>
          <h3 className={userStyle.title}></h3>
          <p className={userStyle.amount}></p>
          <p className={userStyle.amountDescription}></p>
        </div>
        <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
          <button className={userStyle.transactionButton}></button>
        </div>
      </section>
      <section className={userStyle.account}>
        <div className={userStyle.contentWrapper}>
          <h3 className={userStyle.title}></h3>
          <p className={userStyle.amount}></p>
          <p className={userStyle.amountDescription}></p>
        </div>
        <div className={`${userStyle.contentWrapper} ${userStyle.cta}`}>
          <button className={userStyle.transactionButton}></button>
        </div>
      </section>
    </main>
  )
}

export default User
