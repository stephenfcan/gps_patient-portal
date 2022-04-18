import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router";


function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between items-center p-4 lg:px-5 shadow-md">
        <div>
            <Image
                src="https://tackedu.netlify.app/GPS%20Logo.png"
                alt="Gwinnett Pulmonary Sleep"
                width={200}
                height={40}
                layout="fixed"
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
        </div>

        <div className="flex items-center sm:space-x-2 justify-end">
            <Image
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width="40"
                height="40"
                layout="fixed"
            />
            <div className="flex flex-col">
                <p className="hidden lg:inline-flex text-sm font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
                <p className="hidden lg:inline-flex text-gray-500 text-xs pr-3 whitespace-nowrap">Patient</p>
            </div>
        </div>
    </div>
  )
}

export default Header