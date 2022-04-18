import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Dashboard from '../components/Dashboard';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';


export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-scroll">
      <Head>
        <title>GPS Patient Portal - Home</title>
        <meta name="description" content="Gwinnett Pulmonary Sleep Patient Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Dashboard />
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