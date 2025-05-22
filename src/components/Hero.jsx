import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section
            className="h-screen bg-gradient-to-br from-black to-blue-950 text-white flex items-center"
            id="hero"
        >
            <div className="max-w-6xl mx-auto w-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
                    Hi, I'm Aaryan 🚀
                </h1>

                <TypeAnimation
                    sequence={["Full Stack Developer", 2000, "AI Builder", 2000, "Code Ninja 🥷", 2000]}
                    wrapper="span"
                    speed={50}
                    className="text-xl md:text-3xl mb-6 text-blue-300 animate-fade-in"
                    repeat={Infinity}
                />

                <div className="flex flex-col items-center space-y-4 mt-6">
                    <a
                        href="#projects"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
