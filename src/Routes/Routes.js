import Cart from "../Page/Cart";
import Home from "../Page/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      }

    ]
  }
])

export default routes;

