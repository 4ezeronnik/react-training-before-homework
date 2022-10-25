import { SearchBox } from 'components/SearchBox';
import { getCustomers } from 'fakeApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter') ?? "";

    useEffect(() => {
        getCustomers().then(setCustomers)
    }, []);

    const changeFilter = value => {
        setSearchParams(value !== "" ? { filter: value } : {});
    };

    const visibleCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
        <main>
            <SearchBox onChange={changeFilter}/>
        {visibleCustomers.length > 0 && (
            <ul>
                {visibleCustomers.map(customer => <li key={customer.id}>{customer.name}</li>
                )}
            </ul>
        )}
    </main>
    );
};