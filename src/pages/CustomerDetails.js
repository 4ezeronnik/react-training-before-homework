import { getCustomerById } from "fakeApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CustomerDetails = () => {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState(null);

    console.log(customer);

    useEffect(() => {
        getCustomerById(Number(customerId)).then(setCustomer)
    }, [customerId]);
    
    if (!customer) {
        return null;
    };

    const { id, name } = customer;

    return <main>
       <p> id: {id} </p>
        <p>  Username: {name} </p>
    </main>;
};