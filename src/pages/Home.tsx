import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Network, Bug, Terminal } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Encryption Fundamentals',
    description: 'Learn the basics of cryptography and data protection',
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Master network protocols and security measures',
  },
  {
    icon: Bug,
    title: 'Penetration Testing',
    description: 'Practice ethical hacking in safe environments',
  },
  {
    icon: Terminal,
    title: 'Malware Analysis',
    description: 'Understand and analyze malicious software',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="flex justify-center">
          <Shield className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          Master IT Security
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Interactive lessons, hands-on labs, and real-world scenarios
        </p>
        <div className="mt-8">
          <Link
            to="/courses"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <feature.icon className="w-12 h-12 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Choose Our Platform?
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Interactive Learning
            </h3>
            <p className="mt-2 text-gray-600">
              Practice in real-world scenarios with our virtual labs
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Expert-Led Content
            </h3>
            <p className="mt-2 text-gray-600">
              Learn from industry professionals and security experts
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Track Progress
            </h3>
            <p className="mt-2 text-gray-600">
              Earn badges and certificates as you advance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;