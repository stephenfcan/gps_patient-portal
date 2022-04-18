import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getSession } from 'next-auth/react';
import Login from "../components/Login";
import AppTable from "../components/AppTable";
import Scheduler from "../components/Scheduler";


export default function Schedule({ session }) {
    if (!session) return <Login />;
    return (
      <div className="h-screen bg-gray-100 overflow-scroll">
        <Head>
          <title>Schedule Appointment</title>
          <meta name="description" content="Gwinnett Pulmonary Sleep Patient Portal" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header />
  
        <main className="flex">
            <Scheduler />
        </main>
        
  
      </div>
    )
  }

  // Server-side Rendering
export async function getServerSideProps(context) {
    // Get the user props
    const session = await getSession(context);
  
    return {
      props: {
        session
      }
    }
  }