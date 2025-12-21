"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectDemoProps {
  imageSrc: string;
  videoSrc?: string; // Optional - can be added later
  altText: string;
  projectTitle: string;
}

export default function ProjectDemo({ imageSrc, videoSrc, altText, projectTitle }: ProjectDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
      
      {/* Main container */}
      <div className="relative bg-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
        {/* Video/Image content */}
        {videoSrc && isPlaying ? (
          <video 
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative">
            <Image 
              src={imageSrc}
              alt={altText}
              width={600}
              height={400}
              priority
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Play button overlay if video available */}
            {videoSrc && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-dark/40 hover:bg-dark/60 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-10 h-10 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        )}
        
        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 pointer-events-none">
          <span className="text-white text-sm font-medium">
            {videoSrc ? (isPlaying ? 'Playing demo...' : 'Click to watch demo') : 'Click to view details'}
          </span>
        </div>
        
        {/* Badge - Live indicator */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/20 text-white text-xs font-medium shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Live
          </span>
        </div>
      </div>

      {/* Instructions comment for adding video later */}
      {!videoSrc && (
        <div className="mt-4 text-center">
          <p className="text-xs text-text-muted italic">
            💡 To add video: Save as <code className="bg-white/5 px-2 py-1 rounded">/public/videos/runafit-demo.mp4</code>
          </p>
        </div>
      )}
    </div>
  );
}
