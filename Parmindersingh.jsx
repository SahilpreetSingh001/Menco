import React, { useState } from 'react';
import Navbar from './Navbar';

const Parmindersingh = () => {
    // State to store the list of reviews
    const [reviews, setReviews] = useState([
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "abc123" },
        { id: 2, text: "Sed do eiusmod tempor incididunt ut labore.", author: "abc123" },
    ]);
    
    // State to show/hide the popup modal and store new review text
    const [showModal, setShowModal] = useState(false);
    const [newReview, setNewReview] = useState("");

    // Handle form submission and add a new review
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            const newReviewData = {
                id: reviews.length + 1,
                text: newReview,
                author: "User123", // You can change this to dynamic user input
            };
            setReviews([...reviews, newReviewData]);
            setNewReview(""); // Clear the input field
            setShowModal(false); // Close the modal
        }
    };

    return (
        <div>
            <Navbar />
            <div className='bg-[radial-gradient(ellipse_80%_80%_at_50%_15%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'> 
                <div className="container mx-auto my-20 pt-8">
                    {/* Mentor Info Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center">
                            <div className="w-2/3">
                                <h1 className="text-2xl font-bold text-[#580092]">Parminder Singh</h1>
                                <p className="text-gray-600">HOD IT</p>
                                <p className="text-gray-500 mt-2">
                                    As a mentor or teacher, I provide guidance, knowledge, and support to help others grow personally and
                                    professionally. I focus on fostering learning, offering direction, and assisting in skill development to nurture potential and shape future success.
                                </p>
                                {/* Rating */}
                                <div className="mt-3">
                                    <span className="text-yellow-400 text-xl">★★★★★</span>
                                </div>
                            </div>
                            {/* Placeholder for Image */}
                            <div className="w-1/3 bg-gray-200 h-80">
                                <img src="./ParminderSingh.jpg" className='w-full h-full' alt="Mentor" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6">
                            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
                                Book Your First Class
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800"
                                onClick={() => setShowModal(true)} // Show the modal on click
                            >
                                Leave a Review
                            </button>
                        </div>
                    </div>

                    {/* Available Slots Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4 text-[#580092]">Available on</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Timeslots */}
                            <div className="bg-white shadow-lg p-4 rounded-lg text-center">
                                <p>21 Oct, 2024, Monday</p>
                                <p>18:30 - 19:30 (IST)</p>
                            </div>
                            <div className="bg-white shadow-lg p-4 rounded-lg text-center">
                                <p>25 Oct, 2024, Friday</p>
                                <p>11:00 - 13:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4 text-[#580092]">Reviews</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white shadow-lg p-4 rounded-lg">
                                    <p>{review.text}</p>
                                    <p className="mt-2 text-right text-gray-500">- {review.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
                            <form onSubmit={handleReviewSubmit}>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    rows="4"
                                    placeholder="Write your review here..."
                                    value={newReview}
                                    onChange={(e) => setNewReview(e.target.value)}
                                ></textarea>
                                <div className="mt-4 flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                                        onClick={() => setShowModal(false)} // Close the modal without submitting
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800"
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Parmindersingh;
