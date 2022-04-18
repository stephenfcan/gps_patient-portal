import { useRouter } from "next/router"

function SidebarRow({ Icon, title, aka }) {
  const router = useRouter();
  return (
    <div className="flex items-center space-x-1 sm:ml-9 text-gray-400 cursor-pointer hover:bg-gray-200 p-3 rounded-xl hover:text-[#20285c]">
        {Icon && (
            <Icon className="h-5 w-5" />
        )}
        <p className="hidden sm:inline-flex font-medium text-sm">{title}</p>
    </div>
  )
}

export default SidebarRow