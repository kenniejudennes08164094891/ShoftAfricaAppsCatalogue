import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import CommentSection from "../CommentSection";
import SupportOurWork from "../SupportOurWork";

const Blog11 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const { title, subTitle, date, image } = location.state || {};
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#f4f7fb] font-sans">

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
                            <svg
                                className="w-7 h-7"
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
                        )
                    }

                </nav>

                <main className="flex-grow px-4 py-6 md:px-8 md:py-10">

                    <article className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden">

                        <header className="relative">

                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

                            <img
                                src={image || BlogImages.Mind}
                                alt="Human Body"
                                className="w-full h-[400px] md:h-[550px] object-cover"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-16">

                                <div className="inline-block w-fit px-4 py-2 bg-yellow-400 text-black rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 shadow-lg">
                                    {date || "May 28, 2026"}
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
                                    {title || "We don’t own ourselves; our bodies own us."}
                                </h1>

                                <p className="text-lg md:text-2xl text-blue-100 italic max-w-3xl font-medium">
                                    {subTitle || "Living becomes harder when your own body turns against you."}
                                </p>

                            </div>

                        </header>

                        <section className="px-6 md:px-14 py-10 md:py-14 text-gray-800">

                            <p className="text-xl md:text-2xl leading-relaxed mb-10 first-letter:text-6xl first-letter:font-black first-letter:text-[#1E429F] first-letter:mr-4 first-letter:float-left">
                                Human beings speak constantly about freedom, ambition, discipline, and control. People plan careers, build relationships, chase wealth, worship productivity, and imagine themselves as masters of their own lives. Yet beneath every dream sits a terrifying biological truth many people spend their entire lives trying to ignore.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                The human body is not fully loyal to the human mind.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Every heartbeat happens without permission. Hormones alter emotions silently. Brain chemicals influence motivation, attraction, fear, pleasure, and sadness before conscious thought even begins. Cells mutate unexpectedly. Organs weaken gradually. Nerves malfunction. Blood pressure rises quietly. Memory fades slowly. Pain appears without invitation.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Across Africa and the rest of the world, millions wake up every morning trapped inside bodies they can no longer fully trust. Some battle chronic pain that medicine still struggles to explain. Others live with autoimmune diseases where the body mistakenly attacks itself from within. Some suffer invisible neurological disorders, hormonal imbalances, reproductive conditions, paralysis, organ failure, severe anxiety, depression, cancer, diabetes, or exhaustion so deep that even getting out of bed feels like survival.
                            </p>

                            <blockquote className="relative overflow-hidden bg-[#1E429F] text-white rounded-3xl p-10 my-14 shadow-2xl">

                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-semibold leading-relaxed">
                                    "Human pride collapses quickly when the body begins disobeying the life built around it."
                                </p>

                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                1. Your Entire Reality Depends On Biology
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Most healthy people rarely think about the terrifying complexity keeping them alive every second.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                The brain sends electrical signals constantly through billions of neurons. The heart pumps blood endlessly through thousands of kilometers of vessels. Hormones regulate sleep, hunger, reproduction, mood, energy, and stress. The immune system fights microscopic threats every moment without human awareness.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Yet one tiny biological disruption can destroy normal life completely.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                A blood clot. A stroke. A tumor. A spinal injury. A damaged nerve. A hormonal disorder. A genetic mutation. A single microscopic abnormality can permanently alter identity, memory, movement, fertility, emotion, or survival itself.
                            </p>

                            <div className="bg-blue-50 rounded-[2rem] p-10 shadow-lg my-14 border border-blue-100">

                                <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                    The Biological Illusion Of Control
                                </h3>

                                <p className="text-lg leading-8 text-gray-700 mb-5">
                                    Human beings celebrate intelligence, beauty, ambition, discipline, and success as though these qualities exist independently.
                                </p>

                                <p className="text-lg leading-8 text-gray-700 font-bold italic">
                                    But every emotion, decision, memory, desire, fear, and achievement depends entirely on fragile biological systems functioning correctly beneath the surface.
                                </p>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                2. The Body Can Quietly Turn Against Itself
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                One of the most frightening realities in medicine is that the human body sometimes becomes its own enemy.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                In autoimmune diseases, the immune system mistakenly attacks healthy organs and tissues as though they are dangerous invaders. The body confuses itself for the enemy.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                In cancer, normal cells suddenly abandon biological rules and begin multiplying uncontrollably inside the same body they once helped sustain.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                In mental illness, brain chemistry itself can distort reality, motivation, emotion, identity, and perception.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                The terrifying truth is that human suffering does not always come from outside threats. Sometimes the danger grows silently from within.
                            </p>

                            <blockquote className="relative overflow-hidden bg-yellow-400 text-black rounded-3xl p-10 my-14 shadow-2xl">

                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                                <p className="relative z-10 text-2xl md:text-3xl italic font-bold leading-relaxed">
                                    "Some people spend their lives fighting enemies outside while their own biology slowly destroys them internally."
                                </p>

                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                3. Pain Rewrites Human Life Completely
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Healthy people often underestimate how deeply physical suffering reshapes human existence.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Chronic pain changes sleep, concentration, personality, relationships, ambition, sexuality, movement, work performance, and emotional stability. Severe fatigue can make simple daily tasks feel impossible. Neurological disorders can trap fully conscious minds inside malfunctioning bodies.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Some patients mourn the versions of themselves their illnesses erased.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                Others quietly live with the psychological terror of never knowing when symptoms may suddenly return, worsen, or spread.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-14">

                                <div className="bg-red-50 rounded-3xl p-8 border border-red-100 flex flex-col justify-center">

                                    <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                        The Nervous System Never Truly Sleeps
                                    </h3>

                                    <p className="text-lg leading-8 text-gray-700 mb-5">
                                        The human nervous system constantly scans for danger, stress, discomfort, and survival threats even during sleep.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-700">
                                        Trauma, chronic stress, fear, and prolonged suffering can physically rewire biological stress responses inside the body over time.
                                    </p>

                                </div>

                                <div className="overflow-hidden rounded-3xl shadow-xl group">

                                    <img
                                        src={BlogImages.Mind}
                                        alt="Human Body"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />

                                </div>

                            </div>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                4. Aging Is The Slow Surrender Of The Body
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Every human body is slowly aging from the moment life begins.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Cells lose efficiency. DNA accumulates damage. Muscles weaken gradually. Memory changes over time. Hormones shift. Bones become fragile. Skin loses elasticity. Organs become more vulnerable to disease.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Humanity spends billions trying to delay aging because aging forces people to confront biological limitation directly.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                No amount of wealth, fame, intelligence, power, or social status permanently defeats human biology.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 rounded-2xl p-10 my-14 italic text-2xl font-semibold text-gray-700">
                                "The body eventually humbles every human being regardless of status, pride, or power."
                            </blockquote>

                            <h2 className="text-3xl font-black text-[#1E429F] mb-6">
                                5. Modern Society Is Exhausting Human Biology
                            </h2>

                            <p className="text-lg leading-9 mb-8">
                                Modern lifestyles increasingly push human biology beyond healthy limits.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Sleep deprivation, processed food, environmental pollution, psychological stress, digital overstimulation, sedentary living, substance abuse, and economic pressure are affecting millions globally.
                            </p>

                            <p className="text-lg leading-9 mb-8">
                                Many people silence exhaustion with caffeine, suppress stress emotionally, ignore warning signs physically, and continue functioning until the body eventually forces them to stop.
                            </p>

                            <p className="text-lg leading-9 mb-10">
                                The body remembers every hour of neglect even when the mind pretends everything is fine.
                            </p>

                            <div className="bg-green-50 border border-green-100 rounded-[2rem] p-10 my-14">

                                <h3 className="text-2xl font-black text-[#1E429F] mb-5">
                                    Survival Is Not The Same As Health
                                </h3>

                                <p className="text-lg leading-8 text-gray-700 mb-5">
                                    Many people are surviving physically while deteriorating biologically and emotionally underneath.
                                </p>

                                <p className="text-lg leading-8 text-gray-700 font-bold italic">
                                    A society obsessed with productivity often ignores the biological cost paid by the human body.
                                </p>

                            </div>

                            <div className="bg-gradient-to-r from-[#1E429F] to-blue-700 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl mt-16">

                                <h2 className="text-3xl md:text-4xl font-black mb-6">
                                    Humanity Must Respect Its Fragility
                                </h2>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Behind every smiling face may exist silent biological battles invisible to the outside world. Some people are surviving pain, exhaustion, disease, trauma, hormonal chaos, or mental suffering while still trying to appear normal in public.
                                </p>

                                <p className="text-lg md:text-xl leading-9 mb-6 text-blue-100">
                                    Human beings are not machines. The body has limits, vulnerabilities, breaking points, and needs that society often ignores until collapse happens.
                                </p>

                                <p className="text-xl md:text-2xl font-bold italic text-yellow-300">
                                    Health is not permanent ownership. It is temporary biological stability.
                                </p>

                                <p className="text-2xl md:text-4xl font-black mt-8 text-white">
                                    We spend our lives believing we control the body until the body reminds us who truly keeps us alive 🫀
                                </p>

                            </div>

                        </section>

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

export default Blog11;