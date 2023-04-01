import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps){
  return (
    <div>
      <Head>
        <title>PokeNext</title>
        <link rel="icon"  href="./images/favicon.ico"/>
      </Head>
      <Navbar /> 
       <main className="main-container">{children}</main>
      <Footer />
    </div>
  )
}