"use client";

import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    setShow(isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-dark-light border border-primary/30 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-fadeInScale">
        <div className="flex items-center justify-between p-6 border-b border-primary/20">
          <h5 className="text-xl font-bold text-primary">{title}</h5>
          <button 
            type="button" 
            className="text-text-muted hover:text-white transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="flex items-center justify-end p-6 border-t border-primary/20 gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
