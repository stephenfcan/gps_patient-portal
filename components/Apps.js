
function Apps({ name, doctor, time, date, timeStamp, issue }) {
  return (
    <div>
        <div className="mx-6 bg-white shadow-md rounded-xl mt-5 flex flex-col p-5">
            <div className="flex mb-2">
                <p className="text-green-600 bg-green-200 rounded-md px-2 py-1 text-sm">Confirmed</p>
                <p></p>
            </div>
            <h1 className="text-3xl font-light mb-2">{issue}</h1>
            <p className="text-md font-light text-gray-500 mb-2">Scheduled for <span className="text-red-900">{time}</span> on <span className="text-blue-900">{date}</span></p>
            <div className="flex space-x-10 mb-5 mt-2">
                <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Patient</p>
                    <p className="text-sm font-light">{name}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Doctor</p>
                    <p className="text-sm font-light">{doctor}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500 font-light mb-1">Address</p>
            <p className="text-sm font-light">3855 Pleasant Hill Rd, Duluth, GA 30096</p>
        </div>
    </div>
  )
}

export default Apps