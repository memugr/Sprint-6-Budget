import { useState } from "react";
import { useServiceContext } from "../../contexts/budgetFormProvider";
import { Quotation } from "./Quotation";

export function QuotationList() {
    const form = useServiceContext()
    const [selectedClientId, setSelectedClientId] = useState(null);

    const handleClientSelect = (clientId) => {
        form.resetServicesAndCustomizations()
        const selectedClient = form.clients.find(client => client.id === clientId);

        if (selectedClient) {
            if (selectedClient.selectedServices) {
                selectedClient.selectedServices.forEach(service => {
                    form.sendService(service)
                });
            }
        }

        setSelectedClientId(clientId)
    }

    return (
        <div className="flex flex-col w-full items-center space-y-4">
            <h2 className="text-xl font-bold m-3 font-sans">Pending quotations:</h2>
            {form.clients.map((client) => (
                <div key={client.id} className="w-full flex flex-col items-center">
                    <Quotation
                        client={client}
                        onSelect={() => handleClientSelect(client.id)}
                        isSelected={selectedClientId === client.id}
                    />
                </div>
            ))}
        </div>
    )
}