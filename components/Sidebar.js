import { useRouter } from "next/router"
import SidebarRow from "./SidebarRow";
import { HomeIcon, ClipboardListIcon, CreditCardIcon, DocumentTextIcon, HeartIcon } from '@heroicons/react/solid'


function Sidebar() {
  const router = useRouter();
  return (
    <div className="p-2 pr-10 pt-5 max-w-[500px] xl:min-w-[250px] sm:bg-white h-fit sm:border-r">
        <p className="hidden sm:inline-flex mb-3 ml-3 font-medium text-gray-500">Dashboard</p>
        <div>
            <div onClick={() => router.push("/")}><SidebarRow Icon={HomeIcon} title="Home" /></div>
            <div onClick={() => router.push("/appointments")}><SidebarRow Icon={ClipboardListIcon} title="Appointments" /></div>
            <SidebarRow Icon={DocumentTextIcon} title="Medical Records" />
            <SidebarRow Icon={HeartIcon} title="Prescriptions" />
            <SidebarRow Icon={CreditCardIcon} title="Billing" />
        </div>
    </div>
  )
}

export default Sidebar