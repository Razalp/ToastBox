import { useContext } from 'react';
import { ToastContext, ToastContextProps } from '../context/ToastContext';

export const useToast = () => {
  const context = useContext<ToastContextProps>(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};