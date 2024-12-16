import React, { useState, useContext, useEffect } from "react";
import { customizationData } from "../data/serviceData";

const ServiceContext = React.createContext();

export function useServiceContext() {
    return useContext(ServiceContext);
}

export function FormProvider({ children }) {
    const [total, setTotal] = useState(0);
    const [customizationArray, setCustomizationArray] = useState(customizationData);
    const [services, setServices] = useState([]);
    const [clients, setClients] = useState([])

    useEffect(() => {
        calculateTotal();
    }, [services, customizationArray])

    useEffect(() => {
        if (!services.some(item => item.type === "Web")) {
            setCustomizationArray(customizationData)
        }
    }, [services])

    function calculateTotal() {
        let totalServices = 0;
        let totalCustomization = 0;

        if (services.length > 0) {
            totalServices = services.reduce(
                (accumulator, actual) => accumulator + (actual.price || 0), 0
            );
            totalCustomization = customizationArray.reduce(
                (accumulator, actual) => accumulator + actual.quantity * actual.price, 0
            )
        }

        setTotal(totalServices + totalCustomization)
    }

    function changeCustomizationQuantity(inputId, operation) {
        const index = customizationArray.findIndex((item) => item.id === inputId)

        if (index !== -1) {
            const updatedItem = { ...customizationArray[index] }

            if (operation === "increase") {
                updatedItem.quantity = (updatedItem.quantity || 0) + 1;
            } else if (operation === "decrease" && updatedItem.quantity > 0) {
                updatedItem.quantity -= 1
            }

            const updatedArray = [...customizationArray]
            updatedArray[index] = updatedItem
            setCustomizationArray(updatedArray)
        }
    }

    function sendService(newService) {
        const arrayServices = [...services]

        if (!arrayServices.includes(newService)) {
            arrayServices.push(newService)
            setServices(arrayServices)
        }
    }

    function removeService(serviceToRemove) {
        const index = services.indexOf(serviceToRemove)

        if (index !== -1) {
            const arrayServices = [...services]
            arrayServices.splice(index, 1)
            setServices(arrayServices)
        }
    }

    function sendClientData(newClient) {
        let updatedClientsArray = [...clients]

        // Store thr current services within each client
        const clientWithServices = {
            ...newClient,
            selectedServices: [...services],
            selectedCustomizations: [...customizationArray]
        };

        updatedClientsArray.push(clientWithServices)
        setClients(updatedClientsArray)
    }

    function resetServicesAndCustomizations() {
        setServices([]);
        setCustomizationArray(customizationData.map(item => ({...item, quantity: 0})));
        setTotal(0);
    }

    return (
        <ServiceContext.Provider
            value={{
                clients,
                total,
                services,
                customizationArray,
                calculateTotal,
                changeCustomizationQuantity,
                sendService,
                removeService,
                sendClientData,
                resetServicesAndCustomizations
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
}