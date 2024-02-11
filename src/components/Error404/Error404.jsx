// Assets
import error404 from "../../assets/404.png"

// Style
import errorStyle from "./Error404.module.scss"

const Error404 = () => {
  return (
    <main className={errorStyle.main}>
      <div className={errorStyle.wrapper}>
        <img className={error404.img} src={error404} alt="Erreur 404" />
        <p className={errorStyle.text}>
          La page à laquelle vous tentez d&apos;accéder n&apos;existe pas.
        </p>
      </div>
    </main>
  )
}
export default Error404
