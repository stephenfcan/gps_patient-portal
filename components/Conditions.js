

function Conditions() {
    return (
      <div>
          <h1 className="px-4 mt-8 ml-3 text-2xl font-medium">Current Conditions</h1>
          <div className="mx-6 bg-white shadow-md rounded-xl mt-5 flex flex-col p-5">
              <div className="flex mb-2">
                <p className="text-orange-500 bg-orange-200 rounded-md px-2 py-1 text-sm">Moderate</p>
                <p></p>
              </div>
              <h1 className="text-3xl font-light mb-2">Obstructive Sleep Apnea</h1>
              <p className="text-md text-gray-500 mb-2">A condition in which intermittent airflow is blocked during sleep.</p>
              <div className="flex mt-3 space-x-14">
                  <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Primary</p>
                    <p className="text-sm font-light">Dr Rajesh Jasani</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Last Seen</p>
                    <p className="text-sm font-light">09 Jan, 2022</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Conditions