import { useServiceContext } from "../../contexts/budgetFormProvider";
import { WebAddition } from "./WebAddition";

export function Quotation({ client, onSelect, isSelected }) {
    const form = useServiceContext();

    return (
        <div 
            className={`card flex justify-between items-start shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white font-sans 
            ${isSelected ? 'border border-teal-500' : ''}`}
            onClick={onSelect}
        >
            <div className="flex flex-col p-4 md:p-8">
                <h3 className="font-bold text-lg mb-3">{client.name.charAt(0).toUpperCase() + client.name.slice(1)}</h3>
                <p className="font-bold text-gray-400 text-xs">{client.email}</p>
                <p className="font-bold text-gray-400 text-xs">{client.telephone}</p>
            </div>

            <div className="flex flex-col p-4 md:p-8">
                <h5 className="text-sm font-bold mb-3">Services contracted:</h5>
                {client.selectedServices && client.selectedServices.length > 0 && (
                    <ul className="flex flex-col space-y-1">
                        {client.selectedServices.map((service) =>
                            service.type === "Web" ? (
                                <li className="font-bold text-xs" key={service.id}>
                                    {service.type}
                                    <WebAddition customizations={client.selectedCustomizations} />
                                </li>
                            ) : (
                                <li className="font-bold text-xs" key={service.id}>
                                    {service.type}
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>

            <div className="flex flex-col p-4 md:p-8">
                <p className="font-bold text-gray-400 text-sm text-center mb-3">Total:</p>
                <div className="flex flex-row gap-2 items-center font-extrabold text-2xl px-2 ">
                    {client.selectedServices ? 
                        client.selectedServices.reduce((total, service) => total + service.price, 0) +
                        (client.selectedCustomizations ? 
                            client.selectedCustomizations.reduce((total, custom) => total + (custom.price * custom.quantity), 0) 
                            : 0
                        )
                        : 0
                    }€
                </div>
            </div>
        </div>
    );
}