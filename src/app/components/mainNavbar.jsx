'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Navbar (props) {

    const bgColore = props.bgColore
    const coloreText = props.coloreText

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav>
        <div className="flex items-center justify-start">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={20} />}
                </button>
        </div>

        {isOpen && (
            <div className={`fixed inset-0 ${bgColore} z-40 flex flex-col justify-center items-center space-y-4 text-xl`}>
                <Link href="/" onClick={toggleMenu} className={`hover:${coloreText}`}>Home</Link>
                <Link href="/about" onClick={toggleMenu} className={`hover:${coloreText}`}>About</Link>
                <Link href="/wedding" onClick={toggleMenu} className={`hover:${coloreText}`}>Wedding</Link>
                <Link href="/video" onClick={toggleMenu} className={`hover:${coloreText}`}>Video</Link>
                <Link href="/event" onClick={toggleMenu} className={`hover:${coloreText}`}>Event</Link>
                <Link href="/baby" onClick={toggleMenu} className={`hover:${coloreText}`}>Baby</Link>
                <Link href="/food" onClick={toggleMenu} className={`hover:${coloreText}`}>Food</Link>
                <Link href="/contatti" onClick={toggleMenu} className={`hover:${coloreText}`}>Contact</Link>

                {/* Icone social in fondo */}
                <div className="absolute bottom-10 flex space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`hover:${coloreText}`}>
                    <Facebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:${coloreText}`}>
                    <Twitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:${coloreText}`}>
                    <Instagram size={24} />
                    </a>
                </div>

                <button onClick={toggleMenu} className="absolute top-1 right-4">
                    <X size={28} />
                </button>
            </div>
        )}
        </nav>
    )
}
