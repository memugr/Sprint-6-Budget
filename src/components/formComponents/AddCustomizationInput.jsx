import { useState } from "react";
import { useServiceContext } from "../../contexts/budgetFormProvider";

export const AddCustomizationInput = ({ option, price }) => {
    const userForm = useServiceContext();
    const [customization, setCustomization] = useState(0)

    // - button
    const decreaseAmount = () => {
        if (customization === 0) return;

        setCustomization(customization - 1);
        userForm.sumCustomization(-price);
        userForm.sumTotal(-price)
    }

    // + button
    const increaseAmount = () => {
        setCustomization(customization + 1);
        userForm.sumCustomization(+price);
        userForm.sumTotal(+price);
    }

    return (
        <div className="flex self-end px-20">
            <p className="font-medium text-base">{option}</p>
            <div className="flex justify-center items-center ml-4">
                <button
                    onClick={decreaseAmount}
                    className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
                >
                    -
                </button>
                <input
                    type="text"
                    value={customization}
                    className="w-10 h-7 border-2 border-gray-300 rounded text-center"
                />
                <button
                    onClick={increaseAmount}
                    className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
                >
                    +
                </button>
            </div>
        </div>
    )
}
