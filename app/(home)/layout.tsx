import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


export const metadata: Metadata = {
    title: "Coba App",
    description: "The Coba group page"
}

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="relative">
             <div className="flex">
                <section className="flex min-h-screen flex-1 flex-col max-md:pb-14   ">
                    <div className="w-full">
                        {children}
                    </div>
                </section>
             </div>
            <Footer />
        </main>
    );
}

export default HomeLayout