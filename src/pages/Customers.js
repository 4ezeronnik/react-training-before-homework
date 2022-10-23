import { SearchBox } from 'components/SearchBox';
import { getCustomers } from 'fakeApi';
import { useState, useEffect } from 'react';

export const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers().then(setCustomers)
    }, []);

    const changeFilter = value => {
        console.log(value);
    }

    return (
        <main>
            <SearchBox onChange={changeFilter}/>
        {customers.length > 0 && (
            <ul>
                {customers.map(customer => <li key={customer.id}>{customer.name}</li>
                )}
            </ul>
        )}
    </main>
    );
};