

function Medications() {
  return (
    <div>
        <h1 className="px-4 mt-8 ml-3 text-2xl font-medium">Medications</h1>
        <div className="mx-6 bg-white shadow-md rounded-xl mt-5 flex flex-col p-5">
            <h1 className="text-3xl font-thin mb-2">Jardiance (7mg)</h1>
            <p className="text-sm text-gray-500 mb-2">Take with food every morning</p>
            <p className="text-sm text-blue-900">Last Refill 22 Feb, 2022</p>
        </div>
        <div className="mx-6 bg-white shadow-md rounded-xl mt-5 flex flex-col p-5">
            <h1 className="text-3xl font-thin mb-2">Aptivus (10mg)</h1>
            <p className="text-sm text-gray-500 mb-2">Take twice daily</p>
            <p className="text-sm text-blue-900">Last Refill 22 Feb, 2022</p>
        </div>
    </div>
  )
}

export default Medications