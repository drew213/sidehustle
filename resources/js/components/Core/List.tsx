import React from 'react';
import {
  Search,
  BadgeCheck,
  Users,
  CalendarCheck,
  Lock,
  Star,
} from 'lucide-react';

const List = () => {
  const steps = [
    {
      icon: <Search className="h-5 w-5 text-accent" />,
      title: 'Search for Services',
      desc: 'Find the service you need through our curated marketplace.',
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-accent" />,
      title: 'Compare Providers',
      desc: 'Use our AISE engine to analyze and compare the best options.',
    },
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      title: 'Choose a Provider',
      desc: 'Select the provider that fits your needs and budget.',
    },
    {
      icon: <CalendarCheck className="h-5 w-5 text-accent" />,
      title: 'Book with Confidence',
      desc: 'Schedule the service securely and seamlessly.',
    },
    {
      icon: <Lock className="h-5 w-5 text-accent" />,
      title: 'Protected Payments',
      desc: "Our escrow system holds your payment until you're satisfied.",
    },
    {
      icon: <Star className="h-5 w-5 text-accent" />,
      title: 'Leave a Review',
      desc: 'Rate your experience to help others and improve AISE.',
    },
  ];

  return (
    <div className="bg-blue-950 border border-accent shadow-lg shadow-indigo-500/50 rounded-2xl p-8 max-w-3xl mx-auto my-10 text-white">
      <h1 className="text-3xl font-extrabold text-center mb-6">How It Works</h1>
      <ul className="space-y-6">
        {steps.map(({ icon, title, desc }, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
