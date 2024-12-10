import { useState } from "react";
import '/src/styles/Checkbox.css'
import { AddCustomizationInput } from "./addCustomizationInput";
import { useServiceContext } from "../../contexts/budgetFormProvider";
import { customizationData } from "../../data/serviceData";

export const Checkbox = ({ type, price }) => {
    const [check, setCheck] = useState(false);
    const form = useServiceContext()

    const handleCheckbox = () => {
        if (check === false) {
            form.sumTotal(+price)
        } else if (type === "Web") {
            form.sumTotal(-price - form.customization)
            form.sumCustomization(-form.customization)
        } else {
            form.sumTotal(-price)
        }

        setCheck(!check);
    }

    return (
        <div className="card flex flex-col justify-evenly items-center shadow-2xl rounded-2xl bg-white text-gray-900">
            <div className="flex justify-evenly items-center p-4 md:p-8 w-4/5 font-medium">
                <div>
                    <h3 className="font-bold text-xl mb-3">{type}</h3>
                    <p className="font-medium text-base">
                        Programming a complete responsive web.
                    </p>
                </div>

                <div className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">
                    {" "}
                    {price}€
                </div>

                <div className="flex">
                    <input
                        className=""
                        type="checkbox"
                        onChange={handleCheckbox}
                        value={price}
                        id={type}
                    />
                    <p className="font-medium text-base mx-2">Add</p>
                </div>
            </div>

            {type === "Web" && check && customizationData.map(
                (element) => (
                    <AddCustomizationInput 
                        key={element.id}
                        option={element.type}
                        price={element.price}
                    />
                    )
            )}
        </div>
    )
}