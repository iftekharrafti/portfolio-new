import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Zap, Box, ExternalLink } from 'lucide-react';
import { getProjectBySlug } from './data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-400 mb-8">Project not found.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64 py-12 relative z-10">
        {/* Back link */}
        <Link
          to="/#projects"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-green-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero header */}
        <div className={`relative h-48 md:h-64 rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-10`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 11px
              )`
            }} />
          </div>
          <div className="absolute top-6 right-6">
            <div className="px-4 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white text-sm font-bold">{project.type}</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 flex items-end space-x-4">
            <Box className="w-16 h-16 text-white opacity-40" />
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{project.name}</h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-4xl">{project.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
          {Object.entries(project.stats).map(([key, value], i) => (
            <div key={i} className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/20">
              <div className="text-cyan-400 font-bold text-2xl mb-1">{value}</div>
              <div className="text-gray-500 text-sm capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-2 p-4 bg-black/50 border border-green-500/30 rounded-lg">
                <Zap className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/#projects"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-green-500/50 transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Back to Projects</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
