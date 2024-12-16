import { useServiceContext } from "../../contexts/budgetFormProvider";

export const WebAddition = () => {
    const form = useServiceContext();

    const webAdditions = form.customizationArray?.filter(
        (element) => element.quantity > 0
    );

    if (webAdditions && webAdditions.length > 0) {
        return (
            <span>
                {" "}
                (
                {webAdditions.map((element) => (
                    <span key={element.id}>
                        {element.id === 1
                            ? `${element.quantity} page${element.quantity > 1 ? "s" : ""}${webAdditions.length > 1 ? ", " : "."}`
                            : element.id === 2
                                ? `${element.quantity} language${element.quantity > 1 ? "s" : ""}`
                                : "Unknown web addition"}
                    </span>
                ))}
                )
            </span>

        )
    }

    return null;
}