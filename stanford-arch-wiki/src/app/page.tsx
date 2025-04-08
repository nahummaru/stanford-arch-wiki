import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-stanford-red text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Stanford Architecture Wiki
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
              Explore the rich architectural heritage of Stanford University's historic campus
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center border-b-4 border-stanford-red pb-4 inline-block">
            Welcome to Stanford's Architectural Journey
          </h2>
          
          <div className="text-gray-600 space-y-6 mb-16">
            <p>
              From the iconic Main Quad to the modern Science and Engineering Quad, Stanford's campus 
              showcases over 130 years of architectural excellence. This wiki serves as a comprehensive 
              guide to the buildings that shape our university's landscape.
            </p>
            <p>
              Discover the stories behind Stanford's most notable structures, their architectural 
              significance, and how they've evolved over time to meet the changing needs of our 
              academic community.
            </p>
          </div>

          {/* Featured Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-stanford-red">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stanford-red mb-4">
                  Historic Buildings
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore Stanford's historic landmarks, including Memorial Church, 
                  Hoover Tower, and the original Main Quad buildings.
                </p>
                <a href="/buildings/historic" className="text-stanford-red font-semibold hover:text-opacity-80">
                  Learn more →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-stanford-red">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stanford-red mb-4">
                  Modern Architecture
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover contemporary additions to campus, from the Yang & Yamazaki 
                  Environment & Energy Building to the Bing Concert Hall.
                </p>
                <a href="/buildings/modern" className="text-stanford-red font-semibold hover:text-opacity-80">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a 
              href="/buildings"
              className="inline-block bg-stanford-red text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Start Exploring
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}