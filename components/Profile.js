import Image from "next/image"


function Profile({ img, name, desc }) {
  return (
    <div className="flex items-center space-x-2 p-3 ml-2">
        <Image
            className="rounded-full cursor-pointer"
            src={img}
            width="40"
            height="40"
            layout="fixed"
        />
        <div className="flex flex-col">
            <p className="text-sm font-semibold pr-3 whitespace-nowrap">{name}</p>
            <p className="text-gray-500 text-xs pr-3 whitespace-nowrap">{desc}</p>
        </div>
    </div>
  )
}

export default Profile