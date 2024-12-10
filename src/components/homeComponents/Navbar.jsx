import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-emerald-400 flex justify-center items-center py-3 rounded-b-xl text-gray-900">
            <div className="flex gap-10 flex-wrap">
                <Link className="btn btn-ghost text-lg rounded-lg" to="/">Home</Link>
                <Link className="btn btn-ghost text-lg rounded-lg" to="/BudgetForm">Budget Form</Link>
            </div>
        </div>
    )
}