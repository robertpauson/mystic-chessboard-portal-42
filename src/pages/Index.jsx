import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Briefcase, Eye, Repeat } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-radial from-white via-purple-300 to-black rounded-full opacity-30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 border-4 border-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-4 w-full flex">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white/30' : 'bg-black/30'}`}></div>
            ))}
          </div>
          <div className="h-4 w-full flex absolute bottom-0">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-purple-800/30' : 'bg-yellow-700/30'}`}></div>
            ))}
          </div>
          <div className="w-4 h-full absolute left-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-white/30' : 'bg-purple-800/30'}`}></div>
            ))}
          </div>
          <div className="w-4 h-full absolute right-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-black/30' : 'bg-yellow-700/30'}`}></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-4 text-shadow">Enter the Void</h1>
          <p className="text-2xl text-purple-300">Where Magic and Mystery Collide</p>
          <Link to="/character-select" className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Discover the Magic Within
          </Link>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center text-shadow">Explore My World</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Sparkles className="h-12 w-12 text-purple-400" />}
            title="Magic & Mystery"
            description="Exploring the unknown and embracing the magical aspects of life."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-400" />}
            title="Social Connections"
            description="Building meaningful relationships and fostering a strong community."
            link="/social-connections"
          />
          <FeatureCard
            icon={<Briefcase className="h-12 w-12 text-green-400" />}
            title="Career Journey"
            description="Navigating the professional world with passion and determination."
            link="/career"
          />
          <FeatureCard
            icon={<Eye className="h-12 w-12 text-red-400" />}
            title="World Perception"
            description="Understanding the subtle energies and chakras that shape our reality."
            link="/world-perception"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-white mb-4 text-shadow">
            Dive into my world of endless possibilities and discover the magic within.
          </p>
          <Link to="/character-select" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Choose Your Path
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`${
                (Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white' : 'bg-purple-900'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link || "#"} className="block">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-semibold text-white ml-4 text-shadow">{title}</h2>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default Index;
