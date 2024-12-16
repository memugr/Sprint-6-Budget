import { useState } from "react";
import '/src/styles/Checkbox.css'
import { AddCustomizationInput } from "./addCustomizationInput";
import { useServiceContext } from "../../contexts/budgetFormProvider";

export const Checkbox = ({ productData }) => {
    const [check, setCheck] = useState(false);
    const form = useServiceContext()

    const handleCheckbox = () => {
        if (check === false) {
            form.sendService(productData)
        } else {
            form.removeService(productData)
        }

        setCheck(!check);
    }

    return (
        <div className="card flex flex-col justify-evenly items-center shadow-2xl md:w-3/5 w-full rounded-2xl bg-white text-gray-900 font-sans">
            <div className="flex flex-col justify-evenly items-center p-2 md:p-8 md:w-4/5 w-full font-medium sm:flex-row">
                <div>
                    <h3 className="font-bold text-xl mb-3">{productData.type}</h3>
                    <p className="font-medium text-base">
                        Programming a complete responsive web.
                    </p>
                </div>

                <div className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">
                    {" "}
                    {productData.price}€
                </div>

                <div className="flex">
                    <input
                        className=""
                        type="checkbox"
                        onChange={handleCheckbox}
                        value={productData.price}
                        id={productData.type}
                    />
                    <p className="font-medium text-base mx-2">Add</p>
                </div>
            </div>

            {productData.type === "Web" && check && form.customizationArray.map(
                (element) => (
                    <AddCustomizationInput 
                        key={element.id}
                        customization={element}
                    />
                    )
            )}
        </div>
    )
}