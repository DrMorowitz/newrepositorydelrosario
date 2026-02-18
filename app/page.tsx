"use client";

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import FeatureSection from '@/components/FeatureSection';
import BlogSection from '@/components/BlogSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import { Play, Stethoscope, Award, Star, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { 
  generatePersonSchema, 
  generateMedicalBusinessSchema, 
  generateWebsiteSchema,
  generateLocalBusinessSchema 
} from '@/lib/schema';
// Generate comprehensive schema markup for homepage
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateWebsiteSchema(),
    generatePersonSchema(),
    generateMedicalBusinessSchema(),
    generateLocalBusinessSchema()
  ]
};

// Metadata moved to layout.tsx since this is now a client component

// Video component with audio control
function VideoPresentation() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.8;
      }
    }
  };

  return (
    <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
      {/* Video frame with elegant styling */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
        <div className="relative bg-black rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '9/16' }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
          >
            <source src="https://res.cloudinary.com/dp3gvxyft/video/upload/v1764625324/JDR_Vertical_1_yflikc.mp4" type="video/mp4" />
            Su navegador no soporta el elemento de video.
          </video>
          
          {/* Audio control button */}
          <button
            onClick={toggleAudio}
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-all duration-300 z-10"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Video label */}
        <div className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          15 seg
        </div>
      </div>
      
      {/* Floating badges */}
      <div className="absolute -top-4 -left-4 bg-yellow-500 rounded-full p-3 shadow-lg animate-pulse">
        <Award className="w-5 h-5 text-white" />
      </div>
      <div className="absolute -bottom-4 -right-4 bg-green-600 rounded-full p-3 shadow-lg">
        <Stethoscope className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Hero />
      <StatsSection />
      
      {/* Video Presentation Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-32 h-32 bg-blue-50 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
        </div>
        
        <div className="section-container relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Video Container */}
              <div className="relative">
                <VideoPresentation />
              </div>
              
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    ¿Quién es el Dr. Javier del Rosario?
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto lg:mx-0 mb-6"></div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Conozca al especialista que ha dedicado más de <span className="font-semibold text-primary">25 años</span> a la urología en Panamá.
                  </p>
                  
                  {/* Key highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">I Puesto de Honor</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <Stethoscope className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">5000+ Procedimientos</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">15+ Publicaciones</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <Play className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">4 Ubicaciones</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Una presentación personal del médico que combina excelencia académica con atención humana y personalizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <FeatureSection />
      <BlogSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}