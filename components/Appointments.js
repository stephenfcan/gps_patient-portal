import Profile from "./Profile"


function Appointments() {
  return (
    <div className="mx-6 bg-white shadow-md rounded-xl mt-5">
        <h1 className="p-4 text-2xl font-medium border-b">Appointments</h1>
        <Profile img="https://tackedu.netlify.app/anand.png" name="Dr Rajesh R. Jasani MD" desc="Pulmonologist" />
        <div className="flex">
            <div className="flex flex-col p-4">
                <p className="text-gray-500 text-xs mb-1">Date</p>
                <p className="text-xs">Thursday 28 April, 2022</p>
            </div>
            <div className="flex flex-col p-4">
                <p className="text-gray-500 text-xs mb-1">Time</p>
                <p className="text-xs">2:20pm - 3:35pm</p>
                <p className="text-xs text-red-800">Happening Soon</p>
            </div>
        </div>
        <div className="flex pb-5">
            <div className="flex flex-col p-4">
                <p className="text-gray-500 text-xs mb-1">Address</p>
                <p className="text-xs">3855 Pleasant Hill Rd</p>
                <p className="text-xs">Duluth, GA 30096</p>
            </div>
            <div className="flex flex-col p-4">
                <p className="text-gray-500 text-xs mb-1">Areas of Interest</p>
                <p className="text-xs">Pulmonary Function Test</p>
                <p className="text-xs">Sleep DME Services</p>
                <p className="text-xs">Pulse Oximetry</p>
                <p className="text-xs">Femo Asthma Testing</p>
                <p className="text-xs">Polysomnography</p>
            </div>
        </div>
    </div>
  )
}

export default Appointments