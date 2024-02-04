// React logic
import ReactDOM from "react-dom/client"
// Redux store
import store from "./app/store"

// Router
import ArgentBankRouter from "./components/Router"

// Style
import "./index.module.scss"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ArgentBankRouter />
  </Provider>
)
