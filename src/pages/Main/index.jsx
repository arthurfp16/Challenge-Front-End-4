import React from "react";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import './style.css'

import logo from '../../img/logos/logo-big-creme.svg'

export function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <img className='logo' src={logo} alt="Logo adopet" />
                <h1 className='title'>
                    Boas-vindas!
                </h1>
                <p className='paragraph'>
                    Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
                </p>
            </main>
            <Footer />
        </>
    )
}