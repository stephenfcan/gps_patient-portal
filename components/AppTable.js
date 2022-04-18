import { useRouter } from "next/router";
import ConfirmedApps from "./ConfirmedApps";

function AppTable() {
  const router = useRouter();
  return (
    <div>
        <div className="flex items-center space-x-5 px-4 mt-8 ml-3">
            <h1 className="text-2xl font-medium">Appointments</h1>
            <p onClick={() => router.push("/schedule")} className="font-light text-blue-900 bg-blue-200 py-1 px-2 rounded-md text-sm cursor-pointer shadow-md transition duration-100 hover:scale-105 hover:shadow-lg active:scale-100">Schedule an appointment</p>
        </div>
        <ConfirmedApps />
    </div>
  )
}

export default AppTable