import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseClasses = "fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out dark:shadow-2xl";
  const typeClasses = type === 'success' 
    ? "bg-green-500 dark:bg-green-600 text-white" 
    : "bg-red-500 dark:bg-red-600 text-white";

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      {message}
    </div>
  );
};

export default Toast;