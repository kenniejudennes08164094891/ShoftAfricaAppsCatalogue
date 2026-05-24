import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import CommentSection from "../CommentSection";
import SupportOurWork from "../SupportOurWork";


const Blog9 = () => {
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

                            <button
                                onClick={() => navigate("/investigative-journalism/creative-blog")}
                                className="px-5 py-2 rounded-full text-gray-700 hover:bg-[#1E429F] hover:text-white transition-all duration-300"
                            >
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

                            <button
                                onClick={() => navigate("/investigative-journalism/creative-blog")}
                                className="text-left px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white"
                            >
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
                                src={image || BlogImages.Humans}
                                alt="Humans"
                                className="w-full h-[400px] md:h-[550px] object-cover"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-16">

                                <div className="inline-block w-fit px-4 py-2 bg-yellow-400 text-black rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 shadow-lg">
                                    {date || "May 24, 2026"}
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
                                    {title || "Through Mother Nature, We are born anonymous to existence"}
                                </h1>

                                <p className="text-lg md:text-2xl text-blue-100 italic max-w-3xl font-medium">
                                    {subTitle || "Names are later given by humans, but nature ultimately identifies us through actions, values, and impact."}
                                </p>

                            </div>
                        </header>

                        {/* CONTENT */}
                        <section className="px-6 md:px-14 py-10 md:py-14 text-gray-800">

                            <p className="text-xl md:text-2xl leading-relaxed mb-10 first-letter:text-6xl first-letter:font-black first-letter:text-[#1E429F] first-letter:mr-4 first-letter:float-left">
                                Every human being enters this world without status, title, tribe, profession, religion, or identity. Nature introduces us to existence equally. No child is born carrying the label of greatness, poverty, influence, or failure. At birth, humanity arrives anonymous before the universe itself.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                The names we carry today were created by other humans. Societies gave us languages. Families gave us surnames. Nations assigned us citizenship. Communities attached cultural expectations to our existence. Yet beyond all human systems, nature continues to judge humanity through something far deeper than names alone.
                            </p>

                            <blockquote className="relative overflow-hidden bg-[#1E429F] text-white rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-semibold leading-relaxed">
                                    "Nature does not remember what humans called you. It remembers what your existence contributed."
                                </p>
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                1. Humanity Was Born Into Equality
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Before society introduced hierarchy, every human life began with vulnerability. The billionaire and the laborer both entered existence through the same biological process. The future president and the future farmer both arrived as fragile infants dependent on care, protection, and survival.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Mother nature never created titles. Humanity created them. Nature only provided life itself, while human civilization later developed systems of identity, governance, economy, class, religion, and recognition.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-14">

                                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
                                    <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                        Identity Is Built Through Living
                                    </h3>

                                    <p className="text-lg leading-8 text-gray-700 mb-5">
                                        A person's real identity is slowly constructed through choices, sacrifices, discipline, values, failures, resilience, and contributions to humanity.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-700">
                                        Names may introduce individuals to society, but actions introduce individuals to history.
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-3xl shadow-xl group">
                                    <img
                                        src={BlogImages.Humans}
                                        alt="Humans"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                2. Nature Identifies Humanity Through Impact
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                History rarely remembers people merely because they existed. History remembers those who transformed existence itself. Across centuries, humanity continues to honor inventors, philosophers, scientists, leaders, educators, healers, reformers, and creators whose actions permanently shaped civilization.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Nature quietly records contribution. It recognizes builders. It recognizes creators. It recognizes those who protect life, preserve truth, defend justice, expand knowledge, and improve human survival.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                A person may possess a famous name and still leave behind an empty legacy. Another person may begin life completely unknown yet eventually influence millions through courage, wisdom, discovery, or sacrifice.
                            </p>

                            <blockquote className="relative overflow-hidden bg-yellow-400 text-black rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-bold leading-relaxed">
                                    "Human names are temporary. Human impact echoes beyond generations."
                                </p>
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                3. Civilization Was Built By Anonymous People
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Many of the greatest foundations of civilization were established by people whose names history no longer remembers. Ancient farmers developed agriculture through observation. Unknown healers discovered medicinal herbs. Early blacksmiths forged tools that advanced human survival. Anonymous builders constructed ancient roads, settlements, irrigation systems, and monuments.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Even across Africa, generations before modern science carefully studied nature itself. They understood seasons, soil, medicine, weather patterns, animal behavior, and survival techniques through disciplined interaction with the environment.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Humanity survives today partly because unknown individuals contributed knowledge, labor, sacrifice, and innovation long before recognition existed.
                            </p>

                            <div className="bg-green-50 border border-green-100 rounded-[2rem] p-10 my-14">

                                <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                    Existence Is Bigger Than Recognition
                                </h3>

                                <p className="text-lg leading-8 text-gray-700 mb-5">
                                    Social media has created a generation obsessed with visibility. Many now seek attention before purpose, fame before contribution, and validation before self development.
                                </p>

                                <p className="text-lg leading-8 text-gray-700 font-bold italic">
                                    But nature does not reward noise alone. It rewards value.
                                </p>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                4. The Crisis Of Modern Identity
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Modern civilization has created a dangerous confusion between identity and appearance. Millions now build identities around trends, followers, wealth displays, internet popularity, and digital validation while neglecting deeper personal growth and contribution to society.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Yet beneath all digital identities, humanity still returns to the same existential truth. Every individual must eventually answer one silent question.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Beyond appearance and titles, what meaningful impact did your existence leave behind?
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 rounded-2xl p-10 my-14 italic text-2xl font-semibold text-gray-700">
                                "A meaningful life is not measured by recognition alone, but by contribution to existence itself."
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                5. Humanity Must Rediscover Purpose
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                The future of humanity may depend on whether people rediscover deeper meaning beyond consumption, distraction, and temporary recognition. Civilization progresses when individuals dedicate themselves to truth, innovation, justice, compassion, creativity, education, and human advancement.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Mother nature continues to remind humanity of one powerful reality. Human existence is temporary, but the consequences of human actions can outlive entire generations.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Long after names fade from memory, impact often remains alive inside societies, institutions, discoveries, inventions, ideas, and transformed lives.
                            </p>

                            <div className="bg-gradient-to-r from-[#1E429F] to-blue-700 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl mt-16">

                                <h2 className="text-3xl md:text-4xl font-black mb-6">
                                    Nature Ultimately Reveals Who We Truly Are
                                </h2>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Humanity may assign names, titles, occupations, and social identities. But over time, nature quietly separates existence through values, contribution, integrity, discipline, and impact.
                                </p>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Because when existence finally examines human life, it may not ask what society called you.
                                </p>

                                <p className="text-xl md:text-2xl font-bold italic text-yellow-300">
                                    It may instead ask one deeper question.
                                </p>

                                <p className="text-2xl md:text-4xl font-black mt-8 text-white">
                                    "What did your existence contribute to humanity?" 🌍
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

export default Blog9;