import { Link } from "react-router-dom";
import Navbar from "../components/homeComponents/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center min-h-screen text-gray-900">
                <h1 className="text-3xl font-extrabold my-20 text-center">
                    Welcome to your budget manager app!
                </h1>

                <div className=" w-full max-w-lg border-teal shadow-2xl rounded-2xl p-8 text-center text-gray-900 font-sans">
                    <p className="mt-4 text-lg ">
                        Are you ready to see the budget for your next web project?
                    </p>
                    <div className="mt-6 flex justify-center">
                        <button className="card btn mt-5 text-lg rounded-2xl border-2 border-teal-200 hover:border-teal-500 px-6 py-3">
                            <Link to="/BudgetForm">Start</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}