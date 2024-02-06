// Redux
import { useDispatch, useSelector } from "react-redux"
import { userInfosThunk } from "../../features/profile/profileSlice"
import { userInfosUpdateThunk } from "../../features/updateUserProfile/updateUserProfileSlice"

// React Hook Form
import { useForm } from "react-hook-form"

// Components
import Header from "../../components/Header/Header"

// Style
import userStyle from "./User.module.scss"
import { useEffect, useRef } from "react"

const User = () => {
  const { userInfos } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  const editButtonRef = useRef("initial")
  const editFormRef = useRef("hidden")
  const editUserInfos = () => {
    editButtonRef.current.style.display = "none"
    editFormRef.current.style.display = "initial"
  }
  const closeEditUserInfos = () => {
    editButtonRef.current.style.display = "initial"
    editFormRef.current.style.display = "none"
  }

  const { register, handleSubmit } = useForm()
  const submitForm = data => {
    dispatch(userInfosUpdateThunk(data))
    dispatch(userInfosThunk())
    closeEditUserInfos()
  }

  useEffect(() => {
    dispatch(userInfosThunk())
  })

  return (
    <>
      <Header firstName={userInfos.firstName} />
      <main className={`${userStyle.main} ${userStyle.bgDark}`}>
        <header className={userStyle.header}>
          <h1>
            Welcome back
            <br />
            {`${userInfos.firstName} ${userInfos.lastName}!`}
          </h1>
          <button
            ref={editButtonRef}
            className={userStyle.editButton}
            onClick={editUserInfos}
          >
            Edit Name
          </button>
          <form
            ref={editFormRef}
            className={userStyle.form}
            onSubmit={handleSubmit(submitForm)}
          >
            <div className={userStyle.editWrapper}>
              <div className={userStyle.inputWrapper}>
                <input
                  type="text"
                  className={userStyle.firstName}
                  placeholder={userInfos.firstName}
                  {...register("firstName")}
                />
                <input
                  type="text"
                  className={userStyle.lastName}
                  placeholder={userInfos.lastName}
                  {...register("lastName")}
                />
              </div>
              <div className={userStyle.buttonWrapper}>
                <button className={userStyle.saveButton}>Save</button>
                <button
                  className={userStyle.cancelButton}
                  type="reset"
                  onClick={closeEditUserInfos}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
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
