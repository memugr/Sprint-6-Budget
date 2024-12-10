import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-emerald-400 flex justify-center items-center py-3 rounded-b-xl font-bold">
            <div className="flex gap-10 flex-wrap">
                <Link className="btn btn-ghost text-lg text-gray-900 text-sans rounded-lg" to="/">home</Link>
                <Link className="btn btn-ghost text-lg text-gray-900 text-sans rounded-lg" to="/BudgetForm">budget form</Link>
            </div>
        </div>
    )
}