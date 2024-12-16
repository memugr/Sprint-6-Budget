import { useState } from "react";
import { useServiceContext } from "../../contexts/budgetFormProvider";

export const AddCustomizationInput = ({ customization }) => {
    const userForm = useServiceContext();
    const [value, setValue] = useState(0);

    // - decrease button
    const decreaseAmount = () => {
        if (value === 0) return;

        setValue(value - 1);
        userForm.changeCustomizationQuantity(customization.id, "decrease");
    }

    // + increase button
    const increaseAmount = () => {
        setValue(value + 1);
        userForm.changeCustomizationQuantity(customization.id, "increase");
    }

    return (
        <div className="flex self-end px-20">
            <p className="font-medium text-base">{customization.type}</p>
            <div className="flex justify-center items-center ml-4">
                <button
                    onClick={decreaseAmount}
                    className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
                >
                    -
                </button>
                <input
                    readOnly   
                    type="text"
                    value={value}
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
    );
}