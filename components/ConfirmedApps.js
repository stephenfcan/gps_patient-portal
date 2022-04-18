import { useCollection } from "react-firebase-hooks/firestore"
import Apps from "./Apps";
import { getFirestore, collection } from 'firebase/firestore';
import { db, app } from "../firebase"

function ConfirmedApps() {
  const [realtimeApps] = useCollection(
      collection(getFirestore(app), "appointments")
  );

  return (
    <div>
        {realtimeApps?.docs.map((doc) => (
            <Apps
                key={doc.id}
                name={doc.data().name}
                doctor={doc.data().doctor}
                time={doc.data().appTime}
                date={doc.data().appDate}
                issue={doc.data().issue}
            />
        ))}
    </div>
  )
}

export default ConfirmedApps