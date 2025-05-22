export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-600 inline-block pb-2">
                    Contact Me
                </h2>

                <form
                    action="https://formspree.io/f/meogwrrl"
                    method="POST"
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
