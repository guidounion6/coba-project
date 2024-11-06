'use client'

import IJMContacto from "@/app/components/IJM/IJMContacto"
import IJMFooter from "@/app/components/IJM/IJMFooter"
import IJMHeader from "@/app/components/IJM/IJMHeader"
import IJMHero from "@/app/components/IJM/IJMHero"
import IJMProductos from "@/app/components/IJM/IJMProductos"
import IJMServicios from "@/app/components/IJM/IJMServicios"
import { useState } from "react"

export default function LandingPage() {

    return (
        <div className="flex flex-col min-h-screen">

            <IJMHeader />
            <main>
                <IJMHero />
                <IJMServicios />
                <IJMProductos /> 
                <IJMContacto /> 
            </main>
            <IJMFooter />
        </div>
    )
}