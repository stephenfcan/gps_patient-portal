import { useSession } from "next-auth/react";
import { useRef, useState } from 'react'
import { db, storage } from "../firebase"
import { collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";

function Scheduler() {
  const { data: session } = useSession();
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const doctorRef = useRef(null);
  const issueRef = useRef(null);
  const router = useRouter();

  const schedule = async (e) => {
      e.preventDefault();
      if (!dateRef || !timeRef || !doctorRef) return;
      
      const docRef = await addDoc(collection(db, "appointments"), {
          name: session.user.name,
          email: session.user.email,
          doctor: doctorRef.current.value,
          appDate: dateRef.current.value,
          appTime: timeRef.current.value,
          issue: issueRef.current.value,
          timeStamp: serverTimestamp(),
      });

      router.push("/appointments");
  }

  return (
    <div className="bg-white m-6 p-10 rounded-xl shadow-md flex justify-center flex-grow">
        <form className="flex flex-col flex-grow">
            <div>
                <input className="input" type="text" placeholder="First Name" />
                <input className="input" type="text" placeholder="Last Name"/>
            </div>
            <input ref={issueRef} className="input" type="text" placeholder="Issue (hypertension, soreness)" />
            <input ref={doctorRef} className="input" type="text" placeholder="Requested Doctor" />
            <input className="input" type="text" placeholder="Date of Birth (mm/dd/yyyy)" />
            <input className="input" type="text" placeholder="Email" />
            <input className="input" type="text" placeholder="Phone Number (xxx-xxx-xxxx)" />
            <div>
                <input ref={dateRef} className="input" type="text" placeholder="Appointment Date (mm/dd/yyyy)" />
                <input ref={timeRef} className="input" type="text" placeholder="Appointment Time (hh:mm) EST" />
            </div>
            <button onClick={schedule} className="text-blue-900 mt-3" type="submit">Schedule Appointment</button>
        </form>
    </div>
  )
}

export default Scheduler