import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from 'fakeApi';

export const InvoiceDetails = () => {
    const { invoiceId } = useParams();
    const [invoice, setInvoice] = useState(null);
    
    useEffect(() => {
        getInvoiceById(invoiceId).then(setInvoice);
    }, [invoiceId]);

    return (
        <div>
            {invoice && (
                <div>
                    <p>Recipient: {invoice.recipient}</p>
                    <p>Account number: {invoice.account}</p>
                    <p>Total due: {invoice.total}$</p>
                    <p>Invoice date: {new Date(invoice.date.created).toLocaleDateString()}</p>
                    <p>Due date: {new Date(invoice.date.due).toLocaleDateString()}</p>
                     </div>
            )}
        </div>
    );
};