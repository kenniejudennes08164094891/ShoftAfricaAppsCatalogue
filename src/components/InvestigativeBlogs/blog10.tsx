import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import CommentSection from "../CommentSection";
import SupportOurWork from "../SupportOurWork";

const Blog10 = () => {
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
                                src={image || BlogImages.Arsenal}
                                alt="Arsenal"
                                className="w-full h-[400px] md:h-[550px] object-cover"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-16">

                                <div className="inline-block w-fit px-4 py-2 bg-yellow-400 text-black rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 shadow-lg">
                                    {date || "May 25, 2026"}
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
                                    {title || "The resilience of Arsenal FC. A story to learn from"}
                                </h1>

                                <p className="text-lg md:text-2xl text-blue-100 italic max-w-3xl font-medium">
                                    {subTitle || "How Persistence, Strategic Rebuilding, and Long Term Vision Can Inspire Africa’s Growth and Development."}
                                </p>

                            </div>
                        </header>

                        {/* CONTENT */}
                        <section className="px-6 md:px-14 py-10 md:py-14 text-gray-800">

                            <p className="text-xl md:text-2xl leading-relaxed mb-10 first-letter:text-6xl first-letter:font-black first-letter:text-[#1E429F] first-letter:mr-4 first-letter:float-left">
                                Modern football is filled with pressure, criticism, financial competition, and emotional expectations. Yet within all of this chaos, Arsenal Football Club represents something deeper than trophies alone. It represents resilience, patience, rebuilding, and the courage to continue growing even when the world doubts your progress.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Across Africa, millions of young people, entrepreneurs, students, creators, professionals, and dreamers are currently navigating difficult seasons of life. Some are rebuilding after failure. Some are under pressure from society. Some are struggling financially. Others are trying to remain disciplined while progress feels slow.
                            </p>

                            <blockquote className="relative overflow-hidden bg-[#1E429F] text-white rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-semibold leading-relaxed">
                                    "True growth is not built overnight. Sustainable greatness often grows quietly through patience, discipline, and resilience."
                                </p>
                            </blockquote>

                            {/* ADDED STATISTICS SECTION */}
                            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-lg my-14">
                                <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                    Statistical Proof Of Resilience: Arsenal’s Consistency Over Time
                                </h2>

                                <p className="text-lg leading-9 mb-6">
                                    Resilience is not only emotional or philosophical. It is also visible in long term performance patterns that show persistence even without always winning the final trophy.
                                </p>

                                <p className="text-lg leading-9 mb-6">
                                    In the last 22 years, Arsenal has finished as Premier League runners-up multiple times, including key seasons such as:
                                </p>

                                <ul className="list-disc pl-6 text-lg leading-9 mb-6">
                                    <li>2004 to 2005 season</li>
                                    <li>2015 to 2016 season</li>
                                    <li>2022 to 2023 season</li>
                                    <li>2023 to 2024 season</li>
                                </ul>

                                <p className="text-lg leading-9 mb-6">
                                    Most importantly, the recent back to back runner-up finishes in 2022–23 and 2023–24 show elite consistency after years of rebuilding.
                                </p>

                                <p className="text-lg leading-9 font-bold italic text-[#1E429F]">
                                    The lesson is simple: progress is not only defined by winning once, but by consistently staying at the top level over time.
                                </p>
                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                1. Rebuilding Requires Patience
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                There was a period when Arsenal faced heavy criticism from football fans, analysts, rivals, and even their own supporters. The club was accused of declining standards, poor performance, and lack of direction.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Yet instead of destroying everything in panic, the club focused on rebuilding carefully. Young players were developed. Long term structures were improved. A new culture slowly emerged. The results did not appear immediately, but consistency gradually started producing visible transformation.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-14">

                                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
                                    <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                        Africa Must Embrace Long Term Thinking
                                    </h3>

                                    <p className="text-lg leading-8 text-gray-700 mb-5">
                                        Many Africans abandon their dreams too early because society celebrates quick success more than disciplined consistency.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-700">
                                        But meaningful transformation often requires years of learning, sacrifice, rebuilding, failure, adaptation, and growth.
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-3xl shadow-xl group">
                                    <img
                                        src={BlogImages.Arsenal}
                                        alt="Arsenal"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                2. Young Talent Must Be Developed
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                One of Arsenal’s greatest strengths during its rebuilding years was its willingness to trust young players. Rather than depending entirely on expensive superstars, the club invested in developing younger talents with hunger, discipline, and long term potential.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                That lesson is extremely important for Africa. The continent possesses millions of talented young people in technology, agriculture, education, science, engineering, sports, healthcare, entertainment, and entrepreneurship.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                But talent without structure eventually collapses. Young people need mentorship, investment, opportunities, education, discipline, and systems that allow growth to mature sustainably.
                            </p>

                            <blockquote className="relative overflow-hidden bg-yellow-400 text-black rounded-3xl p-10 my-14 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-bold leading-relaxed">
                                    "A society that refuses to invest in its youth slowly mortgages its future."
                                </p>
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                3. Criticism Is Part Of Every Journey
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Arsenal experienced years of public criticism. Social media mocked the club relentlessly. Rival fans turned difficult moments into entertainment. Every setback became global conversation.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Yet the club continued moving forward. The leadership stayed focused on long term objectives instead of emotional reactions to temporary noise.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                That lesson applies beyond football. Africans building businesses, careers, innovations, or educational goals must understand that criticism often accompanies growth. Every visionary eventually encounters doubt.
                            </p>

                            <div className="bg-green-50 border border-green-100 rounded-[2rem] p-10 my-14">

                                <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                    Discipline Is Greater Than Temporary Emotions
                                </h3>

                                <p className="text-lg leading-8 text-gray-700 mb-5">
                                    Emotional reactions destroy many dreams prematurely. Some people quit because of mockery, pressure, comparison, or temporary setbacks.
                                </p>

                                <p className="text-lg leading-8 text-gray-700 font-bold italic">
                                    But resilience means continuing to grow even when progress is not immediately celebrated.
                                </p>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                4. Leadership Shapes Culture
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Every successful institution eventually reflects the quality of its leadership. During difficult periods, leadership determines whether panic destroys progress or whether discipline protects long term vision.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Arsenal gradually rebuilt its identity through structure, accountability, professionalism, tactical clarity, and belief in a long term project.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Africa also needs leaders who understand that sustainable development is not built through noise, propaganda, or emotional speeches alone. Real leadership creates systems that survive beyond individuals.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 rounded-2xl p-10 my-14 italic text-2xl font-semibold text-gray-700">
                                "Strong leadership does not merely manage the present. It prepares the future."
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                5. Resilience Eventually Produces Results
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                One of the most powerful realities about resilience is this. Most people only celebrate success after visible results appear. Very few people appreciate the painful rebuilding process behind that success.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Arsenal’s journey reminds humanity that temporary struggles do not automatically define permanent failure. Institutions, businesses, nations, and individuals can recover, rebuild, and rise again when discipline remains stronger than discouragement.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Africa itself is still rebuilding in many ways economically, politically, technologically, educationally, and socially. But rebuilding is not weakness. Rebuilding is evidence that growth is still possible.
                            </p>

                            <div className="bg-gradient-to-r from-[#1E429F] to-blue-700 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl mt-16">

                                <h2 className="text-3xl md:text-4xl font-black mb-6">
                                    Africa Must Believe In Long Term Growth
                                </h2>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Football may appear like entertainment on the surface, but beneath it are deeper lessons about psychology, leadership, resilience, systems, patience, investment, teamwork, and vision.
                                </p>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    The story of Arsenal teaches an important lesson to Africa and to every struggling dreamer across the continent.
                                </p>

                                <p className="text-xl md:text-2xl font-bold italic text-yellow-300">
                                    Progress is possible when resilience refuses to surrender.
                                </p>

                                <p className="text-2xl md:text-4xl font-black mt-8 text-white">
                                    Greatness is not built in comfort. It is built through persistence ⚽🔥
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

export default Blog10;