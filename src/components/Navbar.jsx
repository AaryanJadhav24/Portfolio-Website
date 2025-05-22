import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                    Aaryan.dev
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg font-medium">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="hover:text-blue-400 transition duration-200 ease-in-out"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-black text-white text-base border-t border-gray-800">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-blue-400 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
