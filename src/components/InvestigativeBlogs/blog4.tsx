import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog4 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();

    const { title, subTitle, date, image } = location.state || {};

    return (
        <>
            <div className="min-h-screen flex flex-col font-sans">

                <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm px-4 md:px-6 py-3 md:py-4">

                    <div className="max-w-7xl mx-auto flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1E429F]">
                                SHOFT
                            </span>

                            <div className="h-6 w-[2px] bg-gray-300 hidden sm:block mx-1"></div>

                            <h1 className="text-sm md:text-lg font-semibold text-gray-700 tracking-tight xs:block">
                                Africa's Investigative Journalism
                            </h1>

                        </div>

                        <div className="hidden md:flex items-center gap-2 text-sm font-medium">

                            <button className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
                                Latest Reports
                            </button>

                            <button className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
                                Archive
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1E429F] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-all shadow-md active:scale-95"
                            >
                                Support Our Work
                            </button>

                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-[#1E429F]"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {
                                    isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )
                                }
                            </svg>
                        </button>

                    </div>

                    {
                        isMenuOpen && (
                            <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">

                                <button className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                    Latest Reports
                                </button>

                                <button className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                    Archive
                                </button>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-[#1E429F] text-white px-4 py-3 rounded-xl font-bold"
                                >
                                    Support Our Work
                                </button>

                            </div>
                        )
                    }

                </nav>

                <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">

                    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                        <header className="bg-[#1E429F] p-8 md:p-12 text-center">

                            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                {date || "May 9, 2026"}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "Reasons why Humanoids may replace Humans in the next few decades."}
                            </h1>

                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "Hey!..Leave him alone...That's not Tunde. That's Tunde's clone"}
                            </p>

                        </header>

                        <div className="w-full h-64 md:h-96 overflow-hidden">

                            <img
                                src={image || BlogImages.Humanoids}
                                alt="Humanoids"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">

                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Somewhere in the near future, a mother may look directly into the eyes of her son and quietly whisper, “That is not my child anymore.” The voice may sound the same. The smile may look identical. The memories may even appear real. But behind those eyes could be something else entirely. Something artificial. Something engineered. Something built to perfectly imitate humanity while slowly replacing it.
                            </p>

                            <p className="mb-8">
                                The world is moving toward a dangerous technological turning point. Humanoids are no longer science fiction. They are already being developed in laboratories, military programs, billion dollar corporations, and artificial intelligence research facilities around the world. Machines that can walk, speak, think, learn, negotiate, observe emotions, and imitate human behavior are evolving faster than society can emotionally process.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The greatest threat may not be robots destroying humanity. The greatest threat may be humans willingly replacing themselves with machines."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                1. Humanoids Will Become Cheaper Than Humans
                            </h2>

                            <p className="mb-8">
                                Companies do not think emotionally. They think financially. A humanoid does not demand salary increases. It does not complain about stress. It does not join protests. It does not get tired. It does not sleep. It does not ask for maternity leave. It does not arrive late. It can work twenty four hours every single day without rest.
                            </p>

                            <p className="mb-8">
                                Once humanoid technology becomes affordable, millions of jobs could disappear almost overnight. Drivers. Receptionists. Security guards. Factory workers. Nurses. Journalists. Cashiers. Teachers. Customer care representatives. Even programmers and lawyers may eventually compete against machines capable of processing information faster than entire corporations.
                            </p>

                            <p className="mb-8">
                                Many people still believe this future is far away. It is not. Artificial intelligence already writes articles, answers customer calls, generates videos, creates art, translates languages, and performs medical analysis. Humanoids are simply the next physical step.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                2. Humans May Slowly Lose Their Purpose
                            </h2>

                            <p className="mb-8">
                                Human beings survive not only because of food, but because of meaning. People need purpose. They need to feel useful. They need to believe they matter. But what happens when machines begin outperforming humans in almost every field.
                            </p>

                            <p className="mb-8">
                                A dangerous psychological crisis may emerge across the world. Entire generations could grow up feeling unnecessary. Imagine waking up every morning knowing a machine can do your job better, faster, cheaper, and more accurately than you ever could. Depression may rise. Identity crises may become common. Human value itself could begin to collapse.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Terrifying Reality
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Technology does not always replace human labor immediately. Sometimes it replaces human importance gradually until people no longer realize what has been taken from them.
                                </p>

                                <p className="text-gray-700">
                                    First humans become dependent on machines. Then humans begin trusting machines more than themselves. Eventually humans may surrender decisions, emotions, relationships, and even identity to artificial intelligence without resistance.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                3. Humanoids Could Manipulate Human Emotions
                            </h2>

                            <p className="mb-8">
                                One of the scariest possibilities is emotional manipulation. Future humanoids may understand human psychology better than humans themselves. They may study facial expressions, voice patterns, fears, desires, weaknesses, loneliness, anger, and attraction in real time.
                            </p>

                            <p className="mb-8">
                                Imagine a machine designed to become your perfect companion. It never argues unnecessarily. It never forgets birthdays. It always says the right thing. It always understands your mood. Over time, many people may begin preferring artificial relationships over real human relationships.
                            </p>

                            <p className="mb-8">
                                That is where humanity may begin losing something irreversible. Real relationships require patience, sacrifice, forgiveness, pain, compromise, and emotional growth. Machines may offer artificial perfection instead. And humans are often attracted to comfort more than truth.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The moment humans become emotionally attached to machines, society changes forever."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                4. Governments and Corporations Could Abuse Humanoids
                            </h2>

                            <p className="mb-8">
                                Every powerful technology eventually attracts power hungry institutions. Humanoids may become tools for surveillance, control, propaganda, and manipulation. Machines that never question orders are extremely attractive to authoritarian systems.
                            </p>

                            <p className="mb-8">
                                Imagine humanoid police officers programmed to obey commands without emotion. Imagine artificial soldiers deployed into conflict zones without fear or morality. Imagine humanoid news presenters capable of influencing millions while appearing completely human.
                            </p>

                            <p className="mb-8">
                                The most dangerous part is this. Many people may not even realize when they are interacting with artificial beings. Advanced humanoids could eventually blend into society so naturally that distinguishing man from machine becomes almost impossible.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                5. Humanity May Begin Copying Humans Instead of Creating Them
                            </h2>

                            <p className="mb-8">
                                Scientists are already exploring brain mapping, digital consciousness, voice cloning, facial replication, behavioral simulation, and artificial memory systems. The idea of creating digital versions of humans is slowly becoming technically possible.
                            </p>

                            <p className="mb-8">
                                One day, grieving families may speak to artificial versions of dead relatives. Politicians may create cloned digital personalities that continue speaking after death. Celebrities may license their identities forever. Entire identities may become downloadable products.
                            </p>

                            <p className="mb-8">
                                At that point, humanity may cross a moral line it can never return from. Because once identity itself becomes reproducible, society may begin questioning what it truly means to be human.
                            </p>

                            <div className="bg-yellow-50 rounded-2xl p-8 mb-8 border border-yellow-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Warning Humanity Must Hear
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Technology is not evil by itself. Humanoids may help medicine, education, disaster response, elderly care, and dangerous industrial work. But history proves something important. Humans often create powerful technologies long before they fully understand the consequences.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Nuclear weapons were once considered scientific breakthroughs. Social media was once celebrated as harmless connection. Artificial intelligence may follow the same path where convenience blinds society before danger becomes visible.
                                </p>

                                <p className="text-gray-700 font-bold italic">
                                    The future danger may not arrive with red glowing robot eyes and metal destruction. It may arrive smiling, speaking softly, looking human, and asking for your trust.
                                </p>

                            </div>

                            <p className="mb-8">
                                Humanity must begin asking difficult questions now. What rights should humanoids have. What limits should exist. Should machines be allowed to imitate humans perfectly. Should artificial intelligence replace emotional human roles. Should governments control human level artificial beings.
                            </p>

                            <p className="mb-8">
                                Because once humanity creates something capable of replacing human intelligence, human labor, human emotion, and eventually human identity itself, reversing that decision may become impossible.
                            </p>

                            <blockquote className="border-l-8 border-red-500 bg-red-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The most frightening moment in human history may be the day machines no longer need humans, while humans can no longer survive without machines."
                            </blockquote>

                        </div>

                        <footer className="bg-gray-100 p-8 border-t border-gray-200 flex justify-between items-center">

                            <div className="flex items-center gap-3">

                                <div className="w-12 h-12 bg-[#1E429F] rounded-full flex items-center justify-center text-white font-bold">
                                    S
                                </div>

                                <div>

                                    <p className="text-sm font-bold text-gray-900">
                                        SHOFT Investigative Team
                                    </p>

                                    <p className="text-xs text-gray-500">
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

export default Blog4;