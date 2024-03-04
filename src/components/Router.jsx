// React
import React from "react"
// React Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom"

// Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Error404 from "./Error404/Error404"

// Pages
import Home from "../Pages/Home/Home"
import SignIn from "../Pages/SignIn/SignIn"
import User from "../Pages/User/User"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"

const Layout = () => {
  return (
    <>
      <Header />
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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
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
