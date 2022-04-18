import { useSession } from "next-auth/react"
import Appointments from "./Appointments"
import Medications from "./Medications";
import Conditions from "./Conditions";
import Billing from "./Billing";
import Recent from "./Recent";


function Dashboard() {
  const { data: session } = useSession();
  return (
    <div className="">
        <h1 className="hidden md:inline-flex mt-3 mx-6 text-3xl font-medium">Hi {session.user.name}, it's good to see you!</h1>
        <div className="sm:grid xl:grid-cols-3">
            <Appointments />
            <Recent />
        </div>
        <div className="lg:flex">
            <Medications />
            <Conditions />
            <Billing />
        </div>
    </div>
  )
}

export default Dashboard