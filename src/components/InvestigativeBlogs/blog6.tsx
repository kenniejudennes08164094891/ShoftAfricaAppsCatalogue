import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation, useNavigate } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog6 = () => {
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
                        )
                    }

                </nav>

                <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">

                    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                        <header className="bg-[#1E429F] p-8 md:p-12 text-center">

                            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                {date || "May 13, 2026"}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "Are Foreign Mining Companies Exploiting Africa’s Rare Minerals?"}
                            </h1>

                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "A deep look into lithium, cobalt, and gold mining operations linked to environmental destruction, child labor, and secret export deals."}
                            </p>

                        </header>

                        <div className="w-full h-64 md:h-96 overflow-hidden">

                            <img
                                src={image || BlogImages.Mine2}
                                alt="Mining Investigation"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">

                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Deep beneath African soil lies one of the greatest treasures on earth. Lithium powering electric vehicles. Cobalt fueling global technology industries. Gold enriching billion dollar markets. Copper feeding global manufacturing. Rare minerals buried beneath villages, forests, rivers, and communities that have existed for generations.
                            </p>

                            <p className="mb-8">
                                Yet across several African countries, a disturbing question continues growing louder. If Africa is so rich in natural resources, why do millions living beside these mines remain trapped in poverty while foreign corporations export enormous wealth overseas?
                            </p>

                            <p className="mb-8">
                                From collapsing mining tunnels to poisoned rivers, disappearing forests, armed conflicts, child labor allegations, and secretive export agreements, investigative reports across the continent continue exposing a brutal reality hidden behind the global race for minerals.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "Africa may possess the minerals powering the future, yet many African communities remain abandoned in the shadows of that future."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                1. The World Is Desperate For African Minerals
                            </h2>

                            <p className="mb-8">
                                The global demand for rare minerals has exploded dramatically. Electric vehicles, smartphones, batteries, military equipment, solar technology, and artificial intelligence systems all depend heavily on minerals found abundantly across Africa.
                            </p>

                            <p className="mb-8">
                                Countries such as Congo, Zimbabwe, Ghana, Mali, South Africa, Zambia, and Guinea have become central battlegrounds in the international competition for mining access.
                            </p>

                            <p className="mb-8">
                                Powerful foreign companies backed by wealthy governments and international investors are racing aggressively to secure mining licenses before competitors do.
                            </p>

                            <p className="mb-8">
                                In many regions, local communities suddenly discover that the land beneath their homes has become worth billions to foreign interests.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The New Global Resource War
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Oil once controlled global politics. Today rare minerals are becoming the new strategic obsession.
                                </p>

                                <p className="text-gray-700">
                                    Nations understand clearly that whoever controls lithium, cobalt, copper, and rare earth minerals may control major parts of the future global economy.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                2. Communities Are Losing Land And Water
                            </h2>

                            <p className="mb-8">
                                Across several African mining zones, villagers continue reporting forced displacement, destroyed farmlands, contaminated water supplies, and shrinking agricultural productivity linked to mining activities.
                            </p>

                            <p className="mb-8">
                                Rivers once used for drinking, fishing, and farming have reportedly changed color in some communities after chemical waste entered local water systems. Forests protecting wildlife and supporting rural livelihoods are increasingly disappearing beneath expanding mining operations.
                            </p>

                            <p className="mb-8">
                                Some residents claim compensation promises never arrived. Others allege they were pressured into surrendering ancestral land without fully understanding the agreements signed.
                            </p>

                            <p className="mb-8">
                                In certain regions, entire communities now live beside massive open pits while struggling without clean water, electricity, functioning schools, or healthcare facilities.
                            </p>

                            <blockquote className="border-l-8 border-red-500 bg-red-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The minerals leave. The profits leave. But the pollution often remains behind with the people."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                3. Child Labor Allegations Continue To Shock The World
                            </h2>

                            <p className="mb-8">
                                Some of the most disturbing reports surrounding African mining involve children allegedly working inside dangerous mining environments.
                            </p>

                            <p className="mb-8">
                                Investigations from different parts of the continent have documented children carrying heavy mineral sacks, digging inside unstable tunnels, washing ores in contaminated water, and working long hours under extremely dangerous conditions.
                            </p>

                            <p className="mb-8">
                                Poverty remains one of the strongest forces driving this crisis. In desperate communities with limited economic opportunities, some families depend heavily on mining income simply to survive.
                            </p>

                            <p className="mb-8">
                                Human rights groups continue warning that global technology industries may unknowingly benefit from supply chains connected to exploitation occurring thousands of kilometers away.
                            </p>

                            <div className="bg-yellow-50 rounded-2xl p-8 mb-8 border border-yellow-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Hidden Human Cost
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Every battery, smartphone, or luxury product connected to exploited labor raises painful ethical questions for the entire world.
                                </p>

                                <p className="text-gray-700 font-bold italic">
                                    Behind advanced technology may exist communities trapped in dangerous poverty while supplying the raw materials making modern lifestyles possible.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                4. Secret Contracts And Export Deals Raise Suspicion
                            </h2>

                            <p className="mb-8">
                                One of the biggest controversies surrounding mining operations in Africa involves secrecy itself.
                            </p>

                            <p className="mb-8">
                                Activists, journalists, and anti corruption investigators have repeatedly questioned why some mining agreements remain hidden from public scrutiny despite involving enormous national resources.
                            </p>

                            <p className="mb-8">
                                Critics argue that unfair contracts may allow foreign corporations to extract huge quantities of valuable minerals while paying extremely low royalties, taxes, or environmental penalties.
                            </p>

                            <p className="mb-8">
                                In some cases, allegations emerge involving politically connected individuals accused of receiving private benefits while communities affected by mining remain neglected.
                            </p>

                            <p className="mb-8">
                                This secrecy fuels growing public anger because citizens often cannot determine how much wealth their countries are truly earning from exported minerals.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "When contracts remain hidden, suspicion grows that somebody is benefiting while ordinary citizens lose."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                5. Armed Conflict And Illegal Mining Networks
                            </h2>

                            <p className="mb-8">
                                In several regions, illegal mining has become deeply connected to armed violence, smuggling operations, and organized criminal networks.
                            </p>

                            <p className="mb-8">
                                Some armed groups reportedly fight aggressively for control over mineral rich territories because minerals can generate enormous profits through illegal exports.
                            </p>

                            <p className="mb-8">
                                Security experts warn that conflict minerals may quietly travel across international supply chains before eventually entering global markets disguised through complex trading networks.
                            </p>

                            <p className="mb-8">
                                Communities trapped between armed groups, corrupt officials, illegal miners, and multinational interests often become the greatest victims of the chaos.
                            </p>

                            <p className="mb-8">
                                Schools close. Families flee. Local economies collapse. Entire generations grow up surrounded by instability while outsiders continue purchasing the minerals.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                6. Why Are Resource Rich Communities Still Poor?
                            </h2>

                            <p className="mb-8">
                                Across Africa, one painful contradiction continues appearing repeatedly. Regions producing enormous mineral wealth often remain among the poorest and least developed areas.
                            </p>

                            <p className="mb-8">
                                Some mining communities still lack functioning roads, stable electricity, modern hospitals, clean drinking water, and quality schools despite generating massive export revenues.
                            </p>

                            <p className="mb-8">
                                Economists describe this phenomenon as the resource curse. Instead of creating prosperity for local populations, natural wealth sometimes strengthens corruption, inequality, political instability, and foreign dependency.
                            </p>

                            <p className="mb-8">
                                Citizens increasingly question whether Africa is truly benefiting fairly from the extraction of its own resources.
                            </p>

                            <div className="bg-red-50 rounded-2xl p-8 mb-8 border border-red-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Dangerous Economic Trap
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Exporting raw minerals while importing expensive finished products keeps many African economies dependent on foreign industries.
                                </p>

                                <p className="text-gray-700">
                                    Some experts argue that Africa must develop stronger local processing industries instead of remaining only a supplier of raw materials.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                7. Environmental Damage Could Last Generations
                            </h2>

                            <p className="mb-8">
                                Environmental scientists continue warning that poorly regulated mining may create irreversible ecological destruction.
                            </p>

                            <p className="mb-8">
                                Toxic chemicals, abandoned mining pits, air pollution, deforestation, and soil degradation may continue affecting communities decades after mining companies leave.
                            </p>

                            <p className="mb-8">
                                Some areas risk becoming environmentally devastated landscapes incapable of supporting farming, wildlife, or safe human habitation in the future.
                            </p>

                            <p className="mb-8">
                                Climate experts also warn that environmental destruction connected to irresponsible mining may intensify droughts, flooding, and food insecurity across vulnerable regions.
                            </p>

                            <blockquote className="border-l-8 border-black bg-gray-100 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The world wants clean energy, but some communities are paying for that transition with dirty water, poisoned land, and broken lives."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                The Questions Africa Must Confront
                            </h2>

                            <p className="mb-8">
                                African governments face enormous pressure to balance economic growth with environmental protection, human rights, transparency, and national sovereignty.
                            </p>

                            <p className="mb-8">
                                Citizens increasingly demand stronger mining laws, fair taxation, public contract transparency, community protection, and tougher punishment for environmental abuse and corruption.
                            </p>

                            <p className="mb-8">
                                Many experts argue that Africa must stop negotiating from positions of weakness while foreign corporations continue competing aggressively for access to strategic minerals.
                            </p>

                            <p className="mb-8">
                                Because the future of Africa may not only depend on the minerals beneath its soil.
                            </p>

                            <p className="mb-8">
                                It may depend on whether African nations can finally control how those minerals are managed, protected, processed, and shared for the benefit of their own people.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-yellow-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "A continent rich in resources should not remain rich only on paper while its people continue suffering beside the wealth beneath their feet."
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

export default Blog6;