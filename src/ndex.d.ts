// src/index.d.ts
import { ReactNode, FC } from 'react';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps>;
