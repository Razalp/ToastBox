import React from 'react';
import { ToastProps } from '../types';

export const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
  message,
  type,
  onClose,
}) => {
  const baseStyles = "fixed px-4 py-2 rounded-lg shadow-lg transition-all duration-300";
  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};