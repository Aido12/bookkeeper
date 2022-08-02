import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();

  let params = useParams();

  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('./invoices');
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
