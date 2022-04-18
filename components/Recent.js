import Profile from "./Profile"
import { useCollection } from "react-firebase-hooks/firestore"
import Apps from "./Apps";
import { getFirestore, collection, doc } from 'firebase/firestore';
import { db, app } from "../firebase"
import Activity from "./Activity";
import { UserAddIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";


function Recent() {
  const [realtimeApps] = useCollection(
    collection(getFirestore(app), "appointments")
  );
  const { data: session } = useSession();

  return (
    <div className="mx-6 bg-white shadow-md rounded-xl mt-5 col-span-2 pb-3">
        <h1 className="p-4 text-2xl font-medium border-b">Recent Activity</h1>

        {realtimeApps?.docs.map((doc) => (
          <Activity
            key={doc.id}
            img={session.user.image}
            name={session.user.name}
            desc="28 April, 2022"
            date={doc.data().appDate}
            time={doc.data().appTime} />
        ))}
               
        <div className="md:flex items-center border-b pb-2">
            <Profile img="https://tackedu.netlify.app/shloka.png" name="Dr Shloka Danave MD" desc="10 April, 2022" />
            <p className="text-xs px-3">Dr Shloka Danave added two new conditions to your pulmonary health record regarding your recent symptoms</p>
        </div>
        <div className="md:flex items-center border-b pb-2">
            <Profile img="https://tackedu.netlify.app/anand.png" name="Dr Anand Jasani MD" desc="31 March, 2022" />
            <p className="text-xs px-3">Dr Anand Jasani has confirmed your appointment for Thursday 28 April, 2022 at 2:20pm - 3:35pm</p>
        </div>
        <div className="md:flex items-center border-b pb-2">
            <Profile img="https://tackedu.netlify.app/stephen.png" name="Stephen An (Medicare)" desc="20 March, 2022" />
            <p className="text-xs px-3">Stephen An (Medicare) has sent a benefit of $174.99</p>
        </div>
    </div>
  )
}

export default Recent