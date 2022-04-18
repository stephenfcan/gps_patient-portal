

function Billing() {
    return (
      <div>
          <h1 className="px-4 mt-8 ml-3 text-2xl font-medium">Billing</h1>
          <div className="mx-6 bg-white shadow-md rounded-xl mt-5 flex flex-col p-5">
              <div className="flex mb-2">
                <p className="text-green-600 bg-green-200 rounded-md px-2 py-1 text-sm">Paid</p>
                <p></p>
              </div>
              <h1 className="text-3xl font-light mb-2">$310.00</h1>
              <p className="text-md font-light text-gray-500 mb-2">Paid on 17 Nov, 2021 to <span className="text-blue-900">Gwinnett Pulmonary Sleep</span></p>
              <p className="text-sm text-gray-500 font-light mb-1">Address</p>
              <p className="text-sm font-light">3855 Pleasant Hill Rd, Duluth, GA 30096</p>
          </div>
      </div>
    )
  }
  
  export default Billing