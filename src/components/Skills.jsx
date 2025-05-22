export default function Skills() {
    const skills = [
        "Python",
        "JavaScript",
        "FastAPI",
        "React",
        "TailwindCSS",
        "MongoDB",
        "Git",
        "OpenAI API",
    ];

    return (
        <section
            id="skills"
            className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-600 inline-block pb-2">
                    Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition-transform"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
