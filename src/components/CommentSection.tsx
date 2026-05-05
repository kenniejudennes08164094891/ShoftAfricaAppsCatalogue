import React, { useState, useEffect } from "react";
import { baseUrl } from "../utils/environments/api.env";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentSection = () => {

    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem("blog_comments_n5000");
        return savedComments ? JSON.parse(savedComments) : [];
    });

    const [newComment, setNewComment] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem("blog_comments_n5000", JSON.stringify(comments));
    }, [comments]);

    const handleCommentSubmit = async (e: any) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim() || !userEmail.trim()) {
            toast.warn("Abeg, fill all fields!");
            return;
        }

        setIsLoading(true);

        const payload = {
            customerFullName: userName.trim(),
            customerEmail: userEmail.trim(),
            customerInquiry: newComment.trim(),
        };

        try {
            const response = await fetch(`${baseUrl}/utility/v1/shoft-africa/log-inquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const commentObject = {
                    id: Date.now(),
                    name: userName.trim(),
                    text: newComment.trim(),
                    date: new Date().toLocaleDateString()
                };

                setComments([commentObject, ...comments]);
                setNewComment("");
                setUserName("");
                setUserEmail("");
                toast.success("Comment shared successfully! 🚀");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("API Error:", error);
            toast.error("Network error. Check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="max-w-4xl mx-auto mt-12 mb-20 w-full px-4 md:px-0">
            {/* Standard container to render the toasts */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-12 border border-gray-50">
                <h3 className="text-2xl md:text-3xl font-black text-[#1E429F] mb-10">
                    <span className="bg-yellow-400 p-2 rounded-lg text-blue-900 mr-2">💬</span> 
                    Street Voices
                </h3>

                <form onSubmit={handleCommentSubmit} className="mb-12 bg-[#f8fafc] p-6 md:p-8 rounded-3xl border border-blue-50">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1E429F] outline-none shadow-sm"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1E429F] outline-none shadow-sm"
                                required
                            />
                        </div>
                        <textarea
                            rows={4}
                            placeholder="Wetín you think about this gist?"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1E429F] outline-none shadow-sm"
                            required
                        ></textarea>
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className={`w-full md:w-auto font-black py-4 px-10 rounded-2xl transition-all shadow-lg active:scale-95 ${
                                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1E429F] text-white hover:bg-blue-800 shadow-blue-200"
                            }`}
                        >
                            {isLoading ? "Sending..." : "Post Your Take"}
                        </button>
                    </div>
                </form>

                <div className="space-y-8">
                    {comments.map((comment: any) => (
                        <div key={comment.id} className="flex gap-4 group">
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#1E429F] to-blue-500 flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                                {comment.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-grow bg-white p-5 rounded-2xl ring-1 ring-gray-100 group-hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-bold text-gray-900">{comment.name}</h4>
                                    <span className="text-[10px] font-bold text-blue-400 uppercase">{comment.date}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommentSection;
