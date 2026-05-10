import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog5 = () => {
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
                                {date || "May 10, 2026"}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "The Dark Business of Fake Universities and Certificate Fraud."}
                            </h1>

                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "How thousands of fake degrees may circulate across Africa, affecting healthcare, engineering, politics, and national security."}
                            </p>

                        </header>

                        <div className="w-full h-64 md:h-96 overflow-hidden">

                            <img
                                src={image || BlogImages.Humanoids}
                                alt="Certificate Fraud"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">

                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Somewhere inside a crowded hospital in Africa, a patient may already be dying in the hands of a doctor who never attended medical school. Somewhere beneath a newly completed bridge, thousands of innocent citizens may unknowingly drive across concrete designed by an engineer carrying a completely fake certificate. Somewhere inside government offices, airports, military departments, and financial institutions, individuals with forged qualifications may already be making decisions capable of affecting millions of lives.
                            </p>

                            <p className="mb-8">
                                Across Africa, a silent criminal industry is expanding rapidly behind polished websites, fake graduation ceremonies, forged transcripts, and rented university offices. The business of fake universities and certificate fraud has evolved into one of the continent's most dangerous underground networks. It is a system quietly poisoning healthcare, engineering, education, politics, national security, and public trust itself.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "Some of the most dangerous people in society may not carry guns. They may carry fake certificates."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                1. Fake Universities Are Growing Faster Than Many Real Ones
                            </h2>

                            <p className="mb-8">
                                Desperation, unemployment, corruption, and social pressure have created a dangerous market for instant success. Criminal organizations understand this reality perfectly. Across different African countries, fake universities now operate openly online and offline while targeting vulnerable students and ambitious professionals.
                            </p>

                            <p className="mb-8">
                                Some fraudulent institutions exist only on the internet. Their websites display fake accreditation logos, stolen campus photographs, fabricated testimonials, and imaginary professors. Others rent physical buildings, print certificates, organize lectures, and even host graduation ceremonies complete with academic gowns and photographers.
                            </p>

                            <p className="mb-8">
                                Some institutions promise complete degrees within months. Others sell doctorate certificates to politicians, businessmen, and public officials willing to pay enormous sums for instant academic respectability.
                            </p>

                            <p className="mb-8">
                                The frightening reality is this. Many fake certificates are now professionally designed so well that employers and institutions struggle to detect them immediately.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                2. Fake Doctors Are Quietly Entering Hospitals
                            </h2>

                            <p className="mb-8">
                                One of the darkest consequences of certificate fraud is already unfolding inside hospitals and clinics. Across Africa, investigations have repeatedly uncovered fake doctors, nurses, pharmacists, and laboratory technicians operating with forged medical qualifications.
                            </p>

                            <p className="mb-8">
                                Imagine trusting your life to someone who never completed proper medical training. Imagine entering surgery while the person holding the scalpel lacks the education required to handle emergencies. Imagine pregnant women placing their lives in the hands of individuals who learned medicine through forged paperwork instead of real training.
                            </p>

                            <p className="mb-8">
                                Some patients only discover the truth after mysterious medical mistakes, avoidable deaths, or severe complications begin increasing inside certain healthcare facilities.
                            </p>

                            <div className="bg-red-50 rounded-2xl p-8 mb-8 border border-red-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    The Silent Medical Danger
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Every fake medical certificate creates another possible death sentence hidden quietly inside the healthcare system.
                                </p>

                                <p className="text-gray-700">
                                    Some fake professionals may never recognize life threatening symptoms until it becomes too late. Others may prescribe dangerous medication combinations without understanding the human body properly.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                3. Fake Engineers Could Destroy Entire Cities
                            </h2>

                            <p className="mb-8">
                                Across several African cities, buildings collapse unexpectedly. Roads deteriorate rapidly. Bridges crack mysteriously. Electrical systems fail catastrophically. While corruption and poor funding often receive blame, another hidden factor may quietly exist behind some infrastructure disasters.
                            </p>

                            <p className="mb-8">
                                Fake engineers.
                            </p>

                            <p className="mb-8">
                                Construction industries have repeatedly uncovered individuals using forged engineering certificates to secure contracts and technical responsibilities they were never qualified to handle.
                            </p>

                            <p className="mb-8">
                                Engineering mistakes do not always kill immediately. Sometimes weak structures survive for years before suddenly collapsing on innocent people without warning.
                            </p>

                            <blockquote className="border-l-8 border-[#1E429F] bg-blue-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "When fake qualifications enter critical industries, entire nations begin standing on invisible cracks."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                4. Politics Has Also Been Infected
                            </h2>

                            <p className="mb-8">
                                Certificate scandals involving politicians and public officials continue appearing across Africa. Lawmakers, government workers, and political candidates have repeatedly faced accusations involving forged academic documents, altered records, and suspicious educational histories.
                            </p>

                            <p className="mb-8">
                                The danger extends beyond public embarrassment. Leadership built on fraud weakens trust completely. Citizens begin questioning whether national decisions are being made by qualified leaders or by individuals who manipulated the system from the beginning.
                            </p>

                            <p className="mb-8">
                                Worse still, when influential figures escape punishment for certificate fraud, ordinary citizens slowly begin seeing dishonesty as normal survival behavior.
                            </p>

                            <p className="mb-8">
                                Eventually corruption stops looking criminal. It starts looking acceptable.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                5. National Security May Already Be Compromised
                            </h2>

                            <p className="mb-8">
                                Perhaps the most terrifying part of this crisis is national security itself. Fake certificates have reportedly surfaced inside immigration departments, police systems, aviation sectors, financial institutions, and cybersecurity operations.
                            </p>

                            <p className="mb-8">
                                Imagine individuals with fake technical qualifications handling airport systems, border security databases, national identity systems, or military intelligence operations.
                            </p>

                            <p className="mb-8">
                                A country becomes dangerously vulnerable when unqualified individuals occupy highly sensitive positions requiring expertise and discipline.
                            </p>

                            <p className="mb-8">
                                Criminal networks understand this weakness very well. Once fake credentials become easy to purchase, dangerous people can quietly enter powerful institutions without immediate suspicion.
                            </p>

                            <div className="bg-yellow-50 rounded-2xl p-8 mb-8 border border-yellow-200">

                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">
                                    Why The Crisis Keeps Growing
                                </h3>

                                <p className="text-gray-700 mb-4">
                                    Certificate fraud survives because multiple systems continue failing at the same time.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Weak verification systems allow forged documents to pass unnoticed. Corruption enables dishonest officials to approve fake qualifications. Poverty and unemployment push desperate citizens toward shortcuts.
                                </p>

                                <p className="text-gray-700 font-bold italic">
                                    In some societies, people have become more obsessed with certificates than actual knowledge itself.
                                </p>

                            </div>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                6. The Internet Has Made Fraud More Powerful
                            </h2>

                            <p className="mb-8">
                                Technology has transformed certificate fraud into an international digital business. Fake universities now advertise aggressively through social media platforms, messaging applications, search engines, and professional networking websites.
                            </p>

                            <p className="mb-8">
                                Some websites appear completely legitimate. They display fake accreditation numbers, professional customer support, fabricated reviews, and stolen academic content designed to deceive victims.
                            </p>

                            <p className="mb-8">
                                In some cases, criminals even create fake partnerships with foreign universities to convince students into paying huge tuition fees for worthless degrees.
                            </p>

                            <p className="mb-8">
                                By the time victims discover the truth, the operators have already disappeared with millions.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                7. Africa Risks Losing Global Academic Trust
                            </h2>

                            <p className="mb-8">
                                One hidden consequence of widespread certificate fraud is growing international suspicion toward genuine African graduates. When fake qualifications become common, foreign employers and institutions may begin doubting legitimate certificates from the continent.
                            </p>

                            <p className="mb-8">
                                Honest graduates then suffer unfairly because criminals have polluted the credibility of educational systems.
                            </p>

                            <p className="mb-8">
                                This creates a painful situation where hardworking students face additional scrutiny, delayed opportunities, and damaged reputations because others chose dishonesty instead of education.
                            </p>

                            <blockquote className="border-l-8 border-red-500 bg-red-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "A fake certificate may temporarily help one individual, but it slowly destroys trust for an entire generation."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">
                                The Questions Africa Must Confront
                            </h2>

                            <p className="mb-8">
                                Governments must strengthen academic verification systems. Universities must modernize certificate authentication technologies. Employers must stop prioritizing paper qualifications over real competence. Anti corruption agencies must aggressively prosecute fraudulent institutions and fake professionals.
                            </p>

                            <p className="mb-8">
                                Most importantly, society itself must stop glorifying shortcuts to success.
                            </p>

                            <p className="mb-8">
                                Because the real danger of certificate fraud is not only fake paper.
                            </p>

                            <p className="mb-8">
                                The real danger is what happens when entire nations slowly lose the ability to distinguish knowledge from deception, competence from performance, and truth from carefully manufactured lies.
                            </p>

                            <blockquote className="border-l-8 border-black bg-gray-100 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "The collapse of a nation does not always begin with war. Sometimes it begins when fake people occupy real positions of power."
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

export default Blog5;