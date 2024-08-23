import React from 'react';
//  just extra page to tell order is booked
const OrderAddedPage = () => {
  return (
    <div className="fixed top-4 right-4 flex items-center justify-center min-h-1/2 bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h1 className="text-2xl font-bold text-green-600">Order Added</h1>
        <p className="mt-4 text-gray-700">Your order has been successfully added. Thank you for shopping with us!</p>
      </div>
    </div>
  );
};

export default OrderAddedPage;
