import { FaGithub } from 'react-icons/fa';

export default function Projects() {
    const projects = [
        {
            title: "DevLog",
            description: "Developer journaling app with mood tracking and insights.",
            link: "https://github.com/AaryanJadhav24/DevLog",
        },
        {
            title: "GlucoTrack",
            description: "AI-powered diabetes monitoring app using OpenAI API.",
            link: "https://github.com/AaryanJadhav24/GlucoTrack",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-600 inline-block pb-2">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-md text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
                            >
                                <FaGithub className="mr-2 color-white" /> View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
