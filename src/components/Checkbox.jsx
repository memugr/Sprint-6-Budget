import { useState } from "react";
import '/src/styles/Checkbox.css'

export const Checkbox = ({ type, price, onCheck }) => {
    const [check, setCheck] = useState(false);

    const handleCheckbox = () => {
        check === false ? onCheck(+price) : onCheck(-price);
        setCheck(!check);
    };
    
    return (
        <div className="card flex justify-evenly items-center shadow-2xl rounded-2xl bg-white p-4 md:p-8 w-4/5 font-medium  ">
            <div>
                <h3 className="font-bold text-xl mb-3">{type}</h3>
                <p className="font-medium text-base">
                    Programming a complete responsive web.
                </p>
            </div>
            <div className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">
                {" "}
                {price}{" "}€
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
    );
};