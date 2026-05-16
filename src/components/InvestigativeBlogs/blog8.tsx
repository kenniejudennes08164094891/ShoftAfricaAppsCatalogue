import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation } from "react-router-dom";
import CommentSection from "../CommentSection";
import { useNavigate } from "react-router-dom";

const Blog8 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const { title, subTitle, date, image } = location.state || {};
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#f4f7fb] font-sans">

                {/* NAVBAR */}
                <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm px-4 md:px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">

                        <div className="flex items-center gap-3">
                            <span className="text-2xl md:text-3xl font-black tracking-tight text-[#1E429F]">
                                SHOFT
                            </span>

                            <div className="h-6 w-[2px] bg-gray-300 hidden sm:block"></div>

                            <h1 className="text-sm md:text-lg font-semibold text-gray-700">
                                Africa's Investigative Journalism
                            </h1>
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                            <button className="px-5 py-2 rounded-full text-gray-700 hover:bg-[#1E429F] hover:text-white transition-all duration-300">
                                Latest Reports
                            </button>

                            <button onClick={() => navigate("/investigative-journalism/creative-blog")}  className="px-5 py-2 rounded-full text-gray-700 hover:bg-[#1E429F] hover:text-white transition-all duration-300">
                                Archive
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1E429F] text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Support Our Work
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-[#1E429F]"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
                            <button className="text-left px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                Latest Reports
                            </button>

                            <button onClick={() => navigate("/investigative-journalism/creative-blog")} className="text-left px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                Archive
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1E429F] text-white px-4 py-3 rounded-xl"
                            >
                                Support Our Work
                            </button>
                        </div>
                    )}
                </nav>

                {/* MAIN */}
                <main className="flex-grow px-4 py-6 md:px-8 md:py-10">

                    <article className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden">

                        {/* HERO */}
                        <header className="relative">

                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

                            <img
                                src={image || BlogImages.Eductation}
                                alt="Education"
                                className="w-full h-[400px] md:h-[550px] object-cover"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-16">

                                <div className="inline-block w-fit px-4 py-2 bg-yellow-400 text-black rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 shadow-lg">
                                    {date || "May 17, 2026"}
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
                                    {title || "True Education knows no four walls"}
                                </h1>

                                <p className="text-lg md:text-2xl text-blue-100 italic max-w-3xl font-medium">
                                    {subTitle || "It is built from the consciousness within, and the knowledge without."}
                                </p>

                            </div>
                        </header>

                        {/* CONTENT */}
                        <section className="px-6 md:px-14 py-10 md:py-14 text-gray-800">

                            <p className="text-xl md:text-2xl leading-relaxed mb-10 first-letter:text-6xl first-letter:font-black first-letter:text-[#1E429F] first-letter:mr-4 first-letter:float-left">
                                Across Africa today, millions of young people are trapped inside classrooms yet remain disconnected from true education. Degrees continue to increase. Certificates continue to multiply. Yet deep understanding, creativity, innovation, curiosity, and independent thinking are quietly disappearing behind memorized textbooks and overcrowded lecture halls.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Society has dangerously confused schooling with education. But the two are not always the same. A person may spend twenty years inside formal institutions and still remain intellectually dependent, emotionally unaware, creatively weak, financially confused, and mentally unprepared for reality. Meanwhile, another individual without prestigious degrees may possess extraordinary wisdom about business, survival, technology, leadership, agriculture, communication, or human behavior.
                            </p>

                            <blockquote className="relative overflow-hidden bg-[#1E429F] text-white rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-semibold leading-relaxed">
                                    "True education is not the ability to repeat information. It is the ability to transform information into understanding."
                                </p>
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                1. Education Began Long Before Modern Classrooms
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Long before modern schools existed, humanity already possessed education. Ancient civilizations learned through observation, experimentation, storytelling, apprenticeship, trade, survival, and discovery. Africa itself was built upon generations of practical intelligence passed down from elders to younger generations.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                African forefathers were true educators of African descent. They carefully studied herbs and discovered natural medicines capable of healing illnesses. They understood farming seasons, food preservation, irrigation systems, local engineering, blacksmithing, architecture, navigation, and traditional healthcare systems through disciplined observation of nature and life itself.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-14">

                                <div className="bg-green-50 rounded-3xl p-8 border border-green-100 flex flex-col justify-center">
                                    <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                        Discovery Is The Foundation Of Civilization
                                    </h3>

                                    <p className="text-lg leading-8 text-gray-700 mb-5">
                                        Foods such as garri production, beans cultivation, rice farming, palm oil processing, herbal mixtures, and indigenous agricultural systems were not accidental discoveries. They emerged from observation, experimentation, creativity, and centuries of accumulated practical knowledge.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-700">
                                        True education does not begin with certificates. Sometimes it begins with curiosity, discipline, awareness, and the willingness to understand the environment deeply.
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-3xl shadow-xl group">
                                    <img
                                        src={BlogImages.Eductation}
                                        alt="Education"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                2. Education Is The Exact Next In Line To Innovation
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Innovation has never existed without education standing behind it. Every civilization that transformed humanity did so because individuals dedicated themselves to learning, observing, questioning, analyzing, and discovering new possibilities.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                True education breeds discovery. Discovery breeds invention. Invention transforms civilizations. A society that stops learning eventually stops innovating. And a society that stops innovating slowly becomes dependent on other civilizations for survival.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                The future belongs to societies capable of producing thinkers, inventors, researchers, scientists, philosophers, engineers, entrepreneurs, innovators, and creators instead of merely producing people trained only to pass examinations.
                            </p>

                            <blockquote className="relative overflow-hidden bg-yellow-400 text-black rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-bold leading-relaxed">
                                    "True education breeds discovery. Discovery breeds invention. Invention transforms civilizations."
                                </p>
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                3. Every Great Discovery In History Was Born Through Education
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                The modern world itself rests upon generations of educated minds who dedicated their lives to understanding reality beyond ordinary existence. Principles of economics, science, medicine, governance, astronomy, engineering, mathematics, and philosophy all emerged because certain individuals refused to stop questioning the world around them.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Think carefully about it. The principles of economics introduced by Alfred Marshall and Lionel Robbins did not emerge from distraction. They emerged through disciplined study, observation, analysis, and intellectual commitment.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                The revolutionary scientific works of Max Planck, Werner Heisenberg, Louis de Broglie, Ernest Rutherford, and Isaac Newton reshaped humanity's understanding of matter, energy, gravity, motion, and the universe itself.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Even humanity's understanding of calendar systems, planetary movement, gravity, the earth's solar system, navigation, and time itself all emerged through centuries of research, experimentation, observation, and true education.
                            </p>

                            <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-10 my-14">

                                <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                    True Education Never Goes Obsolete
                                </h3>

                                <p className="text-lg leading-8 text-gray-700 mb-5">
                                    Technology may evolve. Machines may improve. Trends may disappear. But genuine understanding never becomes outdated. True education constantly remains relevant because truth itself remains relevant.
                                </p>

                                <p className="text-lg leading-8 text-gray-700 font-bold italic">
                                    True education breeds awareness, creativity, innovation, consciousness, and the ability to contribute lasting value to civilization.
                                </p>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                4. The Intellectual Danger Facing Future Generations
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Humanity now faces a growing intellectual crisis. Social media has dramatically shortened attention spans across the world. Millions spend endless hours consuming entertainment while developing very little deep understanding, critical thinking, or independent reasoning.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Artificial Intelligence has introduced another silent danger. While AI remains an extraordinary technological tool, excessive dependence on machines to think, write, analyze, create, and solve problems may gradually weaken the intellectual strength of future generations.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                If humanity eventually becomes too dependent on machines for thinking itself, future generations may become technologically connected yet intellectually disconnected.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 rounded-2xl p-10 my-14 italic text-2xl font-semibold text-gray-700">
                                "A civilization that stops thinking independently slowly surrenders its future."
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                5. What Exactly Have People Discovered?
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                This may become one of the most important questions humanity must answer in the future. Beyond scrolling endlessly through social media. Beyond temporary internet trends. Beyond digital distractions and endless entertainment. What exactly are people discovering about life, science, medicine, technology, humanity, leadership, innovation, and civilization itself?
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                The world remembers discoverers. It remembers inventors. It remembers thinkers. It remembers creators. Civilization advances because certain individuals choose to think beyond comfort, beyond trends, and beyond passive consumption.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                True education pushes people beyond ordinary existence. It forces humanity to question deeply, think independently, solve problems, create solutions, and contribute meaningfully to society.
                            </p>

                            <div className="bg-gradient-to-r from-[#1E429F] to-blue-700 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl mt-16">

                                <h2 className="text-3xl md:text-4xl font-black mb-6">
                                    Education Must Continue Beyond The Classroom
                                </h2>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    The future strength of Africa and humanity itself will not depend solely on certificates or examinations. It will depend on whether future generations continue to think independently, discover boldly, innovate courageously, and learn continuously beyond institutional systems.
                                </p>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Because true education is not merely about passing tests. It is about expanding consciousness, discovering truth, solving human problems, creating innovation, and contributing lasting value to civilization.
                                </p>

                                <p className="text-xl md:text-2xl font-bold italic text-yellow-300">
                                    And if education truly breeds discovery, then you must ask yourself this deep question.
                                </p>

                                <p className="text-2xl md:text-4xl font-black mt-8 text-white">
                                    "What exactly have you discovered?" 🤔
                                </p>

                            </div>

                        </section>

                        {/* FOOTER */}
                        <footer className="bg-gray-100 px-8 py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#1E429F] text-white flex items-center justify-center font-black text-xl shadow-lg">
                                    S
                                </div>

                                <div>
                                    <p className="font-black text-gray-900">
                                        SHOFT Investigative Team
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Truth. Justice. Progress.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => window.open(shoftAfricaWebsite, "_blank")}
                                className="text-[#1E429F] font-bold hover:underline"
                            >
                                Shoft Africa to the World 🌍
                            </button>

                        </footer>

                    </article>

                    <CommentSection />
                </main>
            </div>

            <SupportOurWork
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Blog8;