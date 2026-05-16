import { useState } from "react";
import { BlogImages, shoftAfricaWebsite } from "../../utils/models/blogStores";
import SupportOurWork from "../SupportOurWork";
import { useLocation, useNavigate } from "react-router-dom";

const Blog1 = () => {
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
                        <button onClick={() =>setIsModalOpen(true)} className="bg-[#1E429F] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-all shadow-md active:scale-95">
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
                        <button  onClick={() =>setIsModalOpen(true)} className="bg-[#1E429F] text-white px-4 py-3 rounded-xl font-bold">Support Our Work</button>
                    </div>
                )}
            </nav>
             <main className="p-4 md:p-8 bg-[#f8fafc] flex-grow">
                <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header Section */}
                    <header className="bg-[#1E429F] p-8 md:p-12 text-center">
                        <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            {date || "May 4, 2026"}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                            {title || "What can Nigerians do to heal in Tinubu's second term"}
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                          {subTitle || "Beyond the Ballot: Healing Nigeria in a second term will depend less on promises and more on accountability, unity, and real economic relief for everyday citizens."}
                        </p>
                    </header>

                    {/* Image Placeholder Implementation */}
                    <div className="w-full h-64 md:h-96 overflow-hidden">
                        <img 
                            src={image || BlogImages.Tinubu} 
                            alt="National Leadership and Unity" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-12 text-gray-800 leading-relaxed text-lg">
                        <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#1E429F] first-letter:mr-3 first-letter:float-left">
                            Politics often feels like a marathon where the finish line keeps moving. As we step into the reality of a second term under President Tinubu, the collective heartbeat of the nation echoes a singular question: How do we mend the cracks? Healing is not a passive event. It is a deliberate, active journey that requires more than just waiting for government decrees.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E429F] mb-4">The Power of Radical Accountability</h2>
                        <p className="mb-8">
                            We must move past the era of silent endurance. Healing begins when citizens reclaim their voices through constructive engagement. This means tracking every budget line and questioning every project delay. When we demand transparency with facts rather than fury, we force the hand of leadership toward progress. Accountability is the bridge between broken promises and restored trust.
                        </p>

                        <blockquote className="border-l-8 border-yellow-400 bg-gray-50 p-8 my-10 italic text-xl font-semibold text-gray-700">
                            "Unity is not about thinking alike. It is about acting together for a common cause that is bigger than our tribe or creed."
                        </blockquote>

                        <h2 className="text-2xl font-bold text-[#1E429F] mb-4">Mending the Social Fabric</h2>
                        <p className="mb-8">
                            Years of political friction have left scars across our ethnic and religious lines. To heal, we must look at our neighbor and see a partner in survival rather than a political rival. Real unity happens at the market stalls, in the tech hubs, and within our local communities. Let us celebrate the Nigerian spirit that thrives despite the odds, finding strength in our diversity to demand a better quality of life for all.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E429F] mb-4">Economic Resilience and Innovation</h2>
                        <p className="mb-8">
                            While we wait for macro policies to take root, the everyday citizen is the architect of their own survival. Healing comes through empowerment. We must support local businesses, embrace digital transformation, and foster a culture where we lift each other up. Economic relief will come through policy, but it is sustained by the grit of the Nigerian entrepreneur who refuses to give up.
                        </p>

                        <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
                            <h3 className="text-xl font-bold text-[#1E429F] mb-4 text-center underline decoration-yellow-400">Our Call to Action</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-yellow-500 font-black">01</span>
                                    <span>Engage local representatives monthly to track constituency projects.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-yellow-500 font-black">02</span>
                                    <span>Invest in community networks that provide soft loans or skills for youth.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-yellow-500 font-black">03</span>
                                    <span>Reject divisive rhetoric on social media and promote unifying success stories.</span>
                                </li>
                            </ul>
                        </div>

                        <p className="font-bold text-center text-[#1E429F] text-2xl mt-12">
                            Nigeria will heal because her people are unbreakable. Let this second term be the era where we lead the leaders toward the light.
                        </p>
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
             </main>
         </div>

            <SupportOurWork isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        </>
    )
}

export default Blog1;