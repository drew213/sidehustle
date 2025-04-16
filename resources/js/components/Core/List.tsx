import React from 'react';

function List() {
  return (
    <div className="bg-blue-950 border border-accent shadow-xl/50 shadow-indigo-500/50 rounded-xl max-w-full inset-shadow-sm/50 mx-auto">
      <div className="lg:block pb-10 flex items-center">
        <h1 className="text-2xl font-extrabold text-center">How it Works</h1>
        <ol className="list-decimal text-justify">
          <li>Search For Services</li>
          <li>Compare providers using our state of the art AISE</li>
          <li>Choose a Service Provider</li>
          <li>Book a Service with chosen business</li>
          <li>Rest Easy and let our escrow system secure your payments, releasing them <strong>ONLY</strong> once you're satisfied</li>
          <li>Leave a review once the service has been provided to further improve AISE, it helps us show you the best providers</li>
        </ol>
      </div>
    </div>
  );
}

export default List;
