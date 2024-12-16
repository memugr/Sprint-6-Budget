import { useServiceContext } from "../../contexts/budgetFormProvider";
import { Quotation } from "./Quotation";

export function QuotationList() {
    const form = useServiceContext()

    return (
        <div className="flex flex-col w-full items-center space-y-4">
            <h2 className="text-xl font-bold m-3 font-sans">Pending quotations:</h2>
            {form.clients.map((client) => (
                <Quotation key={client.id} client={client} />
            ))}
        </div>
    )
}