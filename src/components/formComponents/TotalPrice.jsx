import { useServiceContext } from "../../contexts/budgetFormProvider";

export const TotalPrice = () => {
    const userForm = useServiceContext()

    return (
        <div className="flex flex-row gap-2 w-4/5 items-center justify-center">
            <p className="font-medium text-gray-900 font-sans">Total price:</p>
            <p className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">{userForm.total} €</p>
        </div>
    )
}