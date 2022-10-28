import { lazy } from 'react';
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from './Layout';
// import { Sales } from "pages/Sales";
import { Invoices } from "./Invoices";
import { InvoiceDetails } from "./InvoiceDetails";
import { Customers } from "pages/Customers";
import { CustomerDetails } from "pages/CustomerDetails";

const Sales = lazy(() => import('../pages/Sales'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales"/>} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />} >
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>}/>
              <Route path=":invoiceId" element={<InvoiceDetails/>}/>
              </Route>
             <Route path="deposits" element={<div>Deposits</div>}/>
            </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails/>} />
          </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
