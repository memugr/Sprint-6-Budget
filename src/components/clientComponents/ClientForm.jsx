import { useState } from "react";
import { useServiceContext } from "../../contexts/budgetFormProvider";

export const ClientForm = () => {
    const [clientData, setClientData] = useState({
        name: "",
        telephone: "",
        email: "",
    })

    const context = useServiceContext()

    const inputChange = (element) => {
        const { name, value } = element.target;
        setClientData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const saveData = () => {
        // Send client data to context
        context.sendClientData(clientData);
        
        // Reset the input fields
        setClientData({
            name: "",
            telephone: "",
            email: "",
        });

        context.resetServicesAndCustomizations()
    };

    return (
        <div className="flex flex-col justify-evenly items-center rounded-2xl py-4 bg-white md:w-4/5 w-full max-w-screen-lg">
            <h3 className="font-bold text-xl px-4 md:p-8 md:pb-4 w-4/5 font-sans">Demand quotation</h3>
            <div className="flex justify-evenly items-center px-4 md:px-8 md:pb-8 md:w-4/5 w-full font-medium font-sans">
                <div className="flex flex-row gap-2 rounded">
                    <input
                        className="border-2 rounded py-2 px-4 w-1/3"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={clientData.name}
                        onChange={inputChange}
                    />
                    <input
                        className="border-2 rounded py-2 px-4 w-1/3"
                        type="text"
                        name="telephone"
                        placeholder="Telephone"
                        value={clientData.telephone}
                        onChange={inputChange}
                    />
                    <input
                        className="border-2 rounded py-2 px-4 w-1/3"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={clientData.email}
                        onChange={inputChange}
                    />
                </div>
                <button onClick={saveData} className="btn btn-success ml-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 px-3 py-2 ">
                    <div className="text-sm">Save quotation</div>
                    
                </button>
            </div>
        </div>
    );
}