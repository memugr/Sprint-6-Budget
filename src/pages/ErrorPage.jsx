import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 font-sans">
            <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
            <p className="mt-4 text-lg">
                {error?.status ? `Error status: ${error.status}` : "An unexpected error occurred."}
            </p>
            <p className="mt-2 text-md text-gray-700">
                {error?.data || "No additional error information is available."}
            </p>
            <button className="btn btn-primary mt-6">
                <Link to="/">go to homepage!</Link>
            </button>
        </div>
    );
}
