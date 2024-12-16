import { Checkbox } from "../components/formComponents/Checkbox";
import { TotalPrice } from "../components/formComponents/TotalPrice";
import { serviceData } from "../data/serviceData";
import Navbar from "../components/homeComponents/Navbar";
import { ClientForm } from "../components/clientComponents/ClientForm";
import { Link } from "react-router-dom";
import { QuotationList } from "../components/clientComponents/QuotationList";

export const BudgetForm = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center pt-5">
            <div className=" flex flex-col rounded-xl py-5 flex-wrap items-center justify-center gap-y-10 w-screen md:w-5/6 lg:w-4/6">
                {serviceData.map((data) =>(
                    <Checkbox 
                    key={data.id}
                    productData={data} 
                    />
                ))}
                <TotalPrice />
                <ClientForm />
                <div className="border-t border-gray-400 md:w-4/5 w-full max-w-screen-lg mx-auto my-6"></div>
                <QuotationList />
                <div className="font-bold text-sm font-sans">
                    <Link to="/">go back home</Link>
                </div>
                
            </div>
        </div>
        </>
    )
}