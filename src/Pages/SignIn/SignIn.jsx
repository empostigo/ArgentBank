// React
import { useEffect, useState } from "react"

// React Hook Form
import { useForm } from "react-hook-form"

// React Router
import { useNavigate } from "react-router-dom"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { logUserThunk } from "../../features/auth/authSlice"

// Style
import signInStyle from "./SignIn.module.scss"

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const { success, token, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const submitForm = data => {
    setRememberMe(data.checkbox)
    dispatch(logUserThunk(data))
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (success) {
      rememberMe
        ? localStorage.setItem("token", token)
        : sessionStorage.setItem("token", token)

      navigate("/profile")
    } else error ? console.log(error) : null
  }, [navigate, success, error, token, rememberMe])

  return (
    <main className={`${signInStyle.main} ${signInStyle.bgDark}`}>
      <section className={signInStyle.content}>
        <i className={`fa fa-user-circle ${signInStyle.icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={signInStyle.wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("email")} />
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
