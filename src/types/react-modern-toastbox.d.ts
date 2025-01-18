declare module 'react-modern-toastbox' {
    import { ReactNode, FC } from 'react';
  
    interface ToastProviderProps {
      children: ReactNode;
    }
  
    export const ToastProvider: FC<ToastProviderProps>;
    // Add more type declarations for other exports if needed
  }