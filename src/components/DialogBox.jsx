import React, { useState } from "react";

const DialogBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="modal-box w-full max-w-md sm:max-w-lg md:max-w-xl bg-base-100 text-base-content p-6 rounded-xl shadow-2xl transform transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
              BJB College Official Announcement
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-center">
                Today we are announcing an important update
              </p>
              <div className="divider"></div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-neutral">Signature</p>
                <p className="text-sm sm:text-base text-neutral-600">
                  Principal
                </p>
              </div>
            </div>
            <div className="modal-action mt-6 flex justify-center">
              <button
                className="btn btn-primary px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:btn-primary/80 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogBox;
