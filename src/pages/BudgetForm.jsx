import { Checkbox } from "../components/formComponents/Checkbox";
import { TotalPrice } from "../components/formComponents/TotalPrice";
import { FormProvider } from "../contexts/budgetFormProvider";
import { serviceData } from "../data/serviceData";
import Navbar from "../components/homeComponents/Navbar";

export const BudgetForm = () => {
    return (
        <FormProvider>
            <Navbar />
            <div className="h-screen flex justify-center items-center">
            <div className=" flex flex-col rounded-xl py-5 flex-wrap items-center justify-center gap-y-10 w-screen md:w-5/6 lg:w-4/6">
                {serviceData.map((data) =>(
                    <Checkbox 
                    key={data.id}
                    type={data.type} 
                    price={data.price}
                    />
                ))}
                <TotalPrice />
            </div>
        </div>
        </FormProvider>
    )
}