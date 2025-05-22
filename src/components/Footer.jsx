import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 mt-20 shadow-inner">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
                <p className="text-sm">&copy; 2025 Aaryan Jadhav — Built with ❤️</p>

                <div className="flex space-x-4 text-white text-lg">
                    <a
                        href="https://github.com/AaryanJadhav24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aaryanjadhav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}
