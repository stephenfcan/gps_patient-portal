import Image from "next/image"
import { signIn } from "next-auth/react"


function Login() {
  return (
    <div className="grid place-items-center mt-14 pt-14">
        <Image
            src="https://gwinnettlung.com/wp-content/themes/gwinnett-ps/images/Group%20278.png"
            alt="facebook login"
            width={200}
            height={225}
            objectFit="contain"
        />
        <h1 onClick={signIn} className="py-2 mt-14 px-3 bg-[#20285c] rounded-xl text-white text-center cursor-pointer transition duration-100 hover:scale-105 active:scale-100 hover:shadow-lg">Login with Facebook</h1>
    </div>
  )
}

export default Login