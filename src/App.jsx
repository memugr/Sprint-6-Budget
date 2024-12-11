import "./assets/index.css";
import { BudgetForm } from "./pages/BudgetForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
    },
  {
    path: "/BudgetForm",
    element: <BudgetForm />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;