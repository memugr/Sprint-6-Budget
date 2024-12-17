import React from "react";
import ReactDOM from 'react-dom';

export const Modal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    let content;

    if (type === "Number of pages:") {
        content = "Add the pages that your page needs. The price of each page is 30€."
    } else {
        content = "Add the languages that your page needs. The price of each language is 30€"
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-6">
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-xl text-center font-semibold mb-4 font-sans">{type}</h3>
                <p className="text-gray-800 text-center mb-6 font-sans">{content}</p>
                
                <div className="flex justify-end space-x-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}