// React Hook Form
import { useForm } from "react-hook-form"

// Style
import signInStyle from "./SignIn.module.scss"

const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const submitForm = data => console.log(data)

  return (
    <main className={`${signInStyle.main} ${signInStyle.bgDark}`}>
      <section className={signInStyle.content}>
        <i className={`fa fa-user-circle ${signInStyle.icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={signInStyle.wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username")} />
          </div>
          <div className={signInStyle.wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className={signInStyle.remember}>
            <input type="checkbox" id="remember-me" {...register("checkbox")} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={signInStyle.button}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
