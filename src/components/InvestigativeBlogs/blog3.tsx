import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog3 = () => {
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
                    )}
                </nav>

                <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">
                    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                        <header className="bg-[#1E429F] p-8 md:p-12 text-center">
                            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                {date || "May 7, 2026"}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "When Africa rises, the world feels it. But when Africa falls, the world profits from it."}
                            </h1>

                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "A win accross Africa is a loss to the rest of the world...and a loss accross Africa is a win to the rest of the world"}
                            </p>
                        </header>

                        <div className="w-full h-64 md:h-96 overflow-hidden">
                            <img
                                src={image || BlogImages.Africa}
                                alt="Africa Rising"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">

                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Africa is one of the richest continents on Earth. Rich in minerals. Rich in culture. Rich in intelligence. Rich in creativity. Rich in human strength. Yet somehow, the global story about Africa is always built around poverty, war, corruption, hunger, and suffering. Why? Because a united and empowered Africa changes the balance of the world forever.
                            </p>

                            <p className="mb-8">
                                The uncomfortable truth many Africans are beginning to realize is this...when Africa becomes stronger, independent, industrialized, educated, and united, many global powers lose control, influence, and economic advantage. But when Africa is divided, unstable, and dependent, billions are made from its pain.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The tragedy of Africa is not that the continent lacks greatness. The tragedy is that Africans were taught to doubt their own greatness while the rest of the world quietly benefits from African weakness."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                1. Africa Feeds the World Yet Many Africans Remain Hungry
                            </h2>

                            <p className="mb-8">
                                Africa exports raw materials worth trillions of dollars. Gold from Ghana. Oil from Nigeria. Cobalt from Congo. Diamonds from Southern Africa. Cocoa from Ivory Coast. Uranium from Niger. Yet most African nations still import finished products at expensive prices from the same countries that buy Africa’s resources cheaply.
                            </p>

                            <p className="mb-8">
                                The system was designed to keep Africa producing for others instead of producing for itself. A continent with over one billion people should not be surviving mainly as a supplier of raw materials while importing nearly everything back at multiplied prices.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                2. Division Has Become One of Africa’s Biggest Enemies
                            </h2>

                            <p className="mb-8">
                                One of the greatest weapons ever used against Africa was division. Colonial borders split ethnic groups apart. Language barriers created distrust. Religion became politicized. Tribalism became stronger than patriotism. Africans were slowly conditioned to fight one another while outsiders quietly controlled the resources underneath their feet.
                            </p>

                            <p className="mb-8">
                                Imagine if African countries traded more with each other than with foreign powers. Imagine if African airlines connected Africa better than foreign airlines. Imagine if African universities became the first choice for African students. Imagine if African currencies became stable enough for continental trade. The entire global economic equation would shift.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Reality Nobody Wants Africans to Understand
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Africa is not poor. Africa is heavily exploited. There is a difference.
                                </p>

                                <p className="text-gray-700">
                                    The continent has enough land, talent, energy, minerals, youth population, and cultural influence to become one of the greatest forces on Earth. What Africa lacks is not potential. What Africa lacks is unity, strategic leadership, industrial independence, and belief in itself.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                3. The African Youth Must Refuse Mental Slavery
                            </h2>

                            <p className="mb-8">
                                Too many young Africans grow up believing success only exists outside Africa. They dream of escaping instead of building. They celebrate foreign products while ignoring African innovation. They consume foreign culture while mocking their own identity.
                            </p>

                            <p className="mb-8">
                                But history proves something important. Every powerful civilization first believed in itself before the world believed in it. China did not rise by worshipping the West. India did not grow through self hatred. The Arab world did not build influence by rejecting its identity. Africa cannot rise while Africans constantly see themselves as inferior.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "If Africans unite economically, intellectually, technologically, and culturally, the future of the world changes forever."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                4. A United Africa Would Become a Global Giant
                            </h2>

                            <p className="mb-8">
                                Africa has the youngest population on Earth. This is not a weakness. It is a weapon of transformation. While many developed nations struggle with aging populations and declining workforces, Africa is filled with energetic youth capable of driving technology, agriculture, manufacturing, entertainment, science, and innovation.
                            </p>

                            <p className="mb-8">
                                The African Continental Free Trade Area already shows the possibility of a stronger future. Imagine an Africa where roads connect nations seamlessly. Where African currencies are respected. Where local industries are protected. Where corruption is rejected. Where leaders think beyond elections and start thinking about generations.
                            </p>

                            <p className="mb-8">
                                That Africa would not beg for respect. The world would have no choice but to respect it.
                            </p>

                            <div className="bg-yellow-50 rounded-2xl p-8 mb-8 border border-yellow-200">
                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Wake Up Call
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Africans must stop waiting for outsiders to save Africa. Nobody develops another continent out of pure kindness. Every nation protects its own interests first. Africa must begin to protect African interests with the same seriousness.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    We need stronger education. Stronger institutions. Stronger industries. Stronger unity. Stronger leadership. But above all, we need Africans who genuinely believe Africa deserves greatness.
                                </p>

                                <p className="text-gray-700 font-bold italic">
                                    Because the moment Africa truly rises together, the entire world will feel it.
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

                            <button onClick={() => window.open(shoftAfricaWebsite, "_blank")} className="text-[#1E429F] font-bold hover:underline">
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

export default Blog3;
