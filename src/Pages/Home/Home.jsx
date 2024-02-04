// assets
import chatIcon from "../../assets/icon-chat.png"
import moneyIcon from "../../assets/icon-money.png"
import securityIcon from "../../assets/icon-security.png"

// Components
import Header from "../../components/Header/Header"

// Style
import homeStyle from "./Home.module.scss"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className={homeStyle.hero}>
          <section className={homeStyle.heroContent}>
            <h2 className={homeStyle.srOnly}>Promoted Content</h2>
            <p className={homeStyle.subtitle}>No fees.</p>
            <p className={homeStyle.subtitle}>No minimum deposit.</p>
            <p className={homeStyle.subtitle}>High interest rates.</p>
            <p className={homeStyle.text}>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className={homeStyle.features}>
          <h2 className={homeStyle.srOnly}>Features</h2>
          <div className={homeStyle.item}>
            <img className={homeStyle.icon} src={chatIcon} alt="Chat Icon" />
            <h3 className={homeStyle.title}>You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className={homeStyle.item}>
            <img className={homeStyle.icon} src={moneyIcon} alt="Money Icon" />
            <h3 className={homeStyle.title}>More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className={homeStyle.item}>
            <img
              className={homeStyle.icon}
              src={securityIcon}
              alt="Security Icon"
            />
            <h3 className={homeStyle.title}>Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
