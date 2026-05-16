import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation, useNavigate } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog7 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const { title, subTitle, date, image } = location.state || {};
     const navigate = useNavigate();

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

                            <button  onClick={() => navigate("/investigative-journalism/creative-blog")} className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
                            <button className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                Latest Reports
                            </button>

                            <button  onClick={() => navigate("/investigative-journalism/creative-blog")} className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">
                                Archive
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1E429F] text-white px-4 py-3 rounded-xl font-bold"
                            >
                                Support Our Work
                            </button>
                        </div>
                    )}
                </nav>

                <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">
                    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                        <header className="bg-[#1E429F] p-8 md:p-12 text-center">
                            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                {date || "May 14, 2026"}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "The Silent Struggle of African Women"}
                            </h1>

                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "Millions suffer every month while their pain is dismissed as normal"}
                            </p>
                        </header>

                        <div className="w-full h-64 md:h-96 overflow-hidden">
                            <img
                                src={image || BlogImages.Africanwoman}
                                alt="African Women"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">

                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Every month across Africa, millions of women disappear silently into pain. In classrooms, markets, offices, farms, and crowded public buses, women force themselves to smile while their bodies feel like they are being torn apart from the inside. Some collapse quietly in bathrooms. Some bleed heavily through their clothes. Some vomit from unbearable cramps. Others cannot even stand upright. Yet society continues to tell them the same dangerous sentence. It is normal.
                            </p>

                            <p className="mb-8">
                                But what if this pain is not being taken seriously enough. What if millions of African women are silently living with untreated medical conditions while families, schools, employers, and even healthcare systems continue to dismiss the warning signs. Across the continent, period pain has become one of the most normalized forms of female suffering.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "A society that teaches women to suffer in silence eventually becomes blind to their suffering."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                1. Millions of African Girls Are Forced to Learn Through Pain
                            </h2>

                            <p className="mb-8">
                                In many African schools, menstrual pain is treated like an excuse instead of a health issue. Young girls experiencing severe cramps are often mocked, ignored, or accused of pretending. Some are forced to remain in classrooms while fighting dizziness, sweating, nausea, and intense abdominal pain.
                            </p>

                            <p className="mb-8">
                                For girls living in poverty, the situation becomes even more terrifying. Limited access to sanitary products means some miss school entirely during their periods. Others use unsafe alternatives that increase the risk of infection. In rural communities, conversations about menstruation remain hidden behind shame and fear, leaving many girls completely unprepared for the trauma their bodies experience every month.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                2. Dangerous Conditions Continue to Hide Behind the Word Normal
                            </h2>

                            <p className="mb-8">
                                Severe menstrual pain can sometimes signal serious medical conditions including endometriosis, fibroids, pelvic infections, hormonal disorders, or reproductive complications. Yet countless African women go years without diagnosis because their pain is constantly minimized.
                            </p>

                            <p className="mb-8">
                                Many women are told to pray harder, endure quietly, or accept suffering as part of womanhood. Some spend years self medicating with painkillers while hidden conditions silently worsen inside their bodies. Others lose opportunities, relationships, fertility, and mental stability because they never received proper medical attention early enough.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Fear Nobody Talks About
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Some women experience pain so severe that they faint without warning. Others bleed for dangerously long periods. Some cannot walk properly during menstruation. Yet because menstruation is considered private or shameful, many suffer alone without asking for help.
                                </p>

                                <p className="text-gray-700">
                                    Silence has become part of the crisis. And silence is protecting the problem.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                3. African Workplaces Rarely Protect Women Experiencing Menstrual Pain
                            </h2>

                            <p className="mb-8">
                                Across many African countries, women are expected to perform at full capacity regardless of physical suffering. Market women stand for hours despite crippling cramps. Nurses continue long hospital shifts while bleeding heavily. Factory workers endure pain quietly because missing work could mean losing income needed to survive.
                            </p>

                            <p className="mb-8">
                                In some workplaces, women fear speaking openly about menstrual pain because they may be labeled weak, emotional, or unreliable. This pressure forces many to hide their suffering behind fake smiles while their health deteriorates in silence.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The world often celebrates the strength of African women while ignoring the pain behind that strength."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                4. The Mental and Emotional Damage Is Growing
                            </h2>

                            <p className="mb-8">
                                Menstrual pain is not only physical. Repeated suffering affects emotional health, confidence, relationships, sleep, and mental stability. Women dealing with severe symptoms every month often experience anxiety, frustration, exhaustion, and emotional isolation.
                            </p>

                            <p className="mb-8">
                                Some begin to fear their own menstrual cycles because they know the pain that is coming. Others quietly battle depression while pretending everything is fine. In many communities, women are expected to continue cooking, cleaning, caregiving, and working regardless of their condition.
                            </p>

                            <p className="mb-8">
                                The emotional burden becomes heavier when nobody around them truly understands the intensity of what they are experiencing.
                            </p>

                            <div className="bg-yellow-50 rounded-2xl p-8 mb-8 border border-yellow-200">
                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    Africa Cannot Continue Ignoring This Crisis
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Menstrual health education must become a serious public conversation across Africa. Schools, governments, healthcare systems, families, and workplaces must stop treating female pain as weakness or exaggeration.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Women need access to proper diagnosis, affordable healthcare, menstrual products, emotional support, and safe environments where they can speak openly without shame.
                                </p>

                                <p className="text-gray-700 font-bold italic">
                                    Because millions of African women are not simply experiencing periods. Many are surviving a silent health battle every single month.
                                </p>
                            </div>

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

export default Blog7;