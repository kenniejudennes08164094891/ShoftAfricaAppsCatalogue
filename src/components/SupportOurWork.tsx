import { useState } from "react";

const SupportOurWork = ({ isOpen, onClose }:any) => {
    const [copied, setCopied] = useState(false);
    const accountNumber = "9031251953";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform transition-all scale-100 border border-gray-100">
                <div className="bg-[#1E429F] p-6 text-white text-center relative">
                    <button 
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Support Our Platform</h3>
                    <p className="text-blue-100 text-sm mt-2 px-4">Your contribution keeps our investigative reporting independent and powerful.</p>
                </div>
                
                <div className="p-8">
                    <div className="bg-gray-50 rounded-2xl p-5 border-2 border-dashed border-gray-200 mb-6 relative group">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3">Moniepoint Account</p>
                        
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-gray-800">SHOFT AFRICA LTD</p>
                        
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-mono font-black text-[#1E429F] tracking-wider">{accountNumber}</p>
                                <button 
                                    onClick={handleCopy}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        copied 
                                        ? "bg-green-100 text-green-700" 
                                        : "bg-blue-50 text-[#1E429F] hover:bg-blue-100"
                                    }`}
                                >
                                    {copied ? (
                                        <>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                            </svg>
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="text-[11px] font-medium text-gray-400 mt-2">Moniepoint Microfinance Bank</p>
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full bg-[#1E429F] text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95 mb-4"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupportOurWork;
