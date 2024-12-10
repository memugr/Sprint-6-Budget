import "./assets/index.css";
import { BudgetForm } from "./pages/BudgetForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/HomePage",
    element: <HomePage />
  },
  {
    path: "/BudgetForm",
    element: <BudgetForm />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;