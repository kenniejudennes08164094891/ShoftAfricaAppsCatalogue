import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost, blogPosts, slugify } from "../utils/models/blogStores";

const InvestigativeJournalism = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* --- Navbar --- */}
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
                        <button className="text-gray-600 px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1E429F] hover:text-white hover:shadow-md active:scale-95">
                            Archive
                        </button>
                        <button className="bg-[#1E429F] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-all shadow-md active:scale-95">
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
                        <button className="text-left text-gray-600 px-4 py-3 rounded-xl hover:bg-[#1E429F] hover:text-white">Archive</button>
                        <button className="bg-[#1E429F] text-white px-4 py-3 rounded-xl font-bold">Support Our Work</button>
                    </div>
                )}
            </nav>

            {/* --- Grid Container --- */}
            <main className="p-4 md:p-8 bg-[#1E429F] flex-grow">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {blogPosts.map((post: BlogPost, index: number) => (
                        <article
                            key={post.id}
                            onClick={() => navigate(
                                `/${post.id}/creative-blog/${slugify(post.title)}}`
                            )}
                            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col transform md:hover:scale-105 active:scale-95"
                        >
                            {/* Image - Height adjusted for mobile */}
                            <div className="relative overflow-hidden h-48 md:h-52">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                                    {`Article ${index + 1}`}
                                </span>
                            </div>

                            {/* Content - Compact spacing for mobile */}
                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                <time className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest">
                                    {post.date}
                                </time>

                                <h2 className="text-lg md:text-xl font-bold mt-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 mt-2 text-xs md:text-sm line-clamp-3 leading-relaxed">
                                    {post.subTitle}
                                </p>

                                <div className="mt-auto pt-5 flex items-center text-blue-600 font-bold text-xs md:text-sm">
                                    <span>Read Post</span>
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default InvestigativeJournalism;
