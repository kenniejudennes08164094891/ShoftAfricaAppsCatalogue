import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation, useNavigate } from "react-router-dom";
import CommentSection from "../CommentSection";

const Blog2 = () => {
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
                        {/* Logo Area */}
                        <div className="flex items-center gap-2">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1E429F]">
                                SHOFT
                            </span>
                            <div className="h-6 w-[2px] bg-gray-300 hidden sm:block mx-1"></div>
                            <h1 className="text-sm md:text-lg font-semibold text-gray-700 tracking-tight xs:block">
                                Africa's Investigative Journalism
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
                            <button className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
                                Latest Reports
                            </button>
                            <button  onClick={() => navigate("/investigative-journalism/creative-blog")} className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
                                Archive
                            </button>
                            <button onClick={() => setIsModalOpen(true)} className="bg-[#1E429F] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-all shadow-md active:scale-95">
                                Support Our Work
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
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

                    {/* Mobile Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
                            <button className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">Latest Reports</button>
                            <button  onClick={() => navigate("/investigative-journalism/creative-blog")} className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">Archive</button>
                            <button onClick={() => setIsModalOpen(true)} className="bg-[#1E429F] text-white px-4 py-3 rounded-xl font-bold">Support Our Work</button>
                        </div>
                    )}
                </nav>
                <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">
                    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                        {/* Header Section */}
                        <header className="bg-[#1E429F] p-8 md:p-12 text-center">
                            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                {date || "May 5, 2026"}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {title || "Reasons why a litre of fuel might be ₦5,000 in the next 2yrs"}
                            </h1>
                            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                                {subTitle || "Global Drama, Local Pain: How wahala in the Middle East ends up at your local filling station."}
                            </p>
                        </header>

                        {/* Image Placeholder Implementation */}
                        <div className="w-full h-64 md:h-96 overflow-hidden">
                            <img
                                src={image || BlogImages.Fuel}
                                alt="Fuel Price and Middle East Wahala"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                
                        <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">
                            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                                Guy, let’s be real for a second. If you told a Nigerian in 2018 that Nigerians would be buying fuel for over ₦1,000 today, they would have called <i>Ogun</i> for you. But here we are. Now, the "gist" on the street isn't just about the current price; it’s the scary possibility of the ₦5,000 mark. While it sounds like a bad dream, the economic "arithmetic" suggests that if we don't fix certain things, that pump price might just become our new reality in the next 24 months.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">1. The 'Dollar' Factor: Our Currency on a Diet</h2>
                            <p className="mb-8">
                                The biggest "wahala" we face is that we are an oil-producing nation that behaves like a tenant in its own house. Because our local refineries are still finding their feet, we export crude and import finished petrol. This means we buy fuel in Dollars. As the Naira continues to "slender" against the greenback, the landing cost of petrol sky-rockets. If the exchange rate doesn't find a stable floor, the math is simple: a weak Naira equals a heavy fuel bill. We aren't just paying for the liquid; we are paying for the Dollar’s strength.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">2. The Ghost of Subsidy and Full Deregulation</h2>
                            <p className="mb-8">
                                For decades, we lived in a "bubble" where the government helped us pay for every litre. That era is gone. With full deregulation, the market is now "everyone for himself." While this is supposed to attract investors, it also means there’s no shock absorber anymore. If global oil prices jump because of a crisis in Eastern Europe or the Middle East, Nigerians feel the heat instantly at the nearest filling station. Without a subsidy cushion, we are now fully exposed to the "winter" of global oil politics.
                            </p>

                            <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                                "In Nigeria, when fuel price sneezes, the price of garri, transport, and even house rent catches a heavy cold. It is the one commodity that dictates the rhythm of the common man's life."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">3. The Logistical Nightmare: More Than Just the Pump</h2>
                            <p className="mb-8">
                                Have you ever wondered why fuel is more expensive in Maiduguri than in Lagos? It’s the "road tax." Between the bad roads that destroy tankers and the "unofficial" checkpoints where money changes hands, the cost of moving fuel across Nigeria is a nightmare. Add the high cost of diesel (which the tankers use) and the rising maintenance costs for station owners, and you see why ₦5,000 starts looking like a possibility. We are paying for the inefficiency of our infrastructure every time we "fill up."
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E429F] mb-4">4. Inflationary Spiral: The 'Everything Go Cost' Effect</h2>
                            <p className="mb-8">
                                We are currently in an inflationary loop. Higher fuel prices drive up production costs for businesses. To stay afloat, these businesses raise prices, which forces the government to adjust policies, which sometimes leads to further currency devaluation. It’s a cycle that feeds itself. If inflation isn't tamed, the ₦5,000 we are shouting about today might actually have the same "value" as ₦1,000 did three years ago. It’s a scary game of catch-up where the consumer always loses.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-[#1E429F] mb-3">The Hard Truth</h3>
                                <p className="text-gray-700 mb-4">
                                    The road to ₦5,000 isn't inevitable, but it is a wake-up call for radical change. We need more than just "hope"...we need functional refineries, a stabilized Naira, and a serious shift toward alternative energy like Compressed Natural Gas (CNG).
                                </p>
                                <p className="text-gray-700 font-bold italic">
                                    What do you think? Is ₦5,000 a realistic fear or just "too much talk"? Drop your thoughts in the comments below!
                                </p>
                            </div>

                            {/* <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                                <CommentSection/>
                            </div> */}
                        </div>


                        <footer className="bg-gray-100 p-8 border-t border-gray-200 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#1E429F] rounded-full flex items-center justify-center text-white font-bold">S</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">SHOFT Investigative Team</p>
                                    <p className="text-xs text-gray-500">Truth. Justice. Progress.</p>
                                </div>
                            </div>
                            <button onClick={() => window.open(shoftAfricaWebsite, "_blank")} className="text-[#1E429F] font-bold hover:underline">Shoft-Africa to the World 🌍</button>
                        </footer>
                    </article>
                    <CommentSection />
                </main>
            </div>

            <SupportOurWork isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    )
}

export default Blog2;