// React Router
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom"

// Components
import Footer from "./Footer/Footer"

// Pages
import Home from "../Pages/Home/Home"
import SignIn from "../Pages/SignIn/SignIn"
import User from "../Pages/User/User"

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Route>
    </>
  )
)

const Router = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default Router
