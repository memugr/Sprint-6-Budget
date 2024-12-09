import React, { useState, useContext } from "react";

const ServiceContext = React.createContext();

export function useServiceContext() {
    return useContext(ServiceContext);
}

export function FormProvider({ children }) {
    const [total, setTotal] = useState(0);
    const [customization, setCustomization] = useState(0);

    function sumCustomization(newCustomization) {
        setCustomization(customization + newCustomization)
    }

    function sumTotal(add) {
        return setTotal(total + add)
    }

    return (
        <ServiceContext.Provider
            value={{ total, sumTotal, customization, sumCustomization }}
        >
            { children }
        </ServiceContext.Provider>
    );
}