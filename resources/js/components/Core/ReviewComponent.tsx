import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState<number>(0);

  const cardData = [
    { title: 'User1000', text: 'This Platform is revolutionary' },
    { title: 'NewUser01', text: 'Lucky for me I found this platform' },
    { title: 'Daz', text: "I'm glad I came across this platform" },
    { title: 'SashaD', text: 'Super intuitive, clean design, and actually useful.' },
    { title: 'CodeBoss', text: 'Was skeptical at first, but this saved me hours of work.' },
    { title: 'Chioma93', text: 'I love how easy it is to navigate. 10/10 from me.' },
    { title: 'TechieBoy', text: 'I keep recommending this to all my clients.' },
  ];

  const cardData2 = [
    { title: 'JaneX', text: 'Finally a platform that doesn’t waste my time.' },
    { title: 'SoftCore', text: 'I’ve been hooked since day one. Super responsive and fun.' },
    { title: 'DigitalDev', text: 'UI is 🔥 and the features are even better.' },
    { title: 'NomadNate', text: 'Great for remote freelancers like me.' },
    { title: 'PixelFreak', text: 'No bugs so far, and I love the onboarding flow.' },
    { title: 'ZaraN', text: 'Feels like a personal assistant in my pocket!' },
    { title: 'NeoGuy', text: 'I appreciate how much thought went into this.' },
  ];

  const cardData3 = [
    { title: 'AlphaDev', text: 'Most platforms overpromise — this one delivers.' },
    { title: 'QueenCoder', text: 'Rare to find something this polished and free.' },
    { title: 'TestSubject42', text: 'Beta tested it, launched with it, and still using it.' },
    { title: 'FreelancerK', text: 'Works great with my workflow. Props to the devs.' },
    { title: 'Visionary', text: 'Helped scale my small business — great ROI.' },
    { title: 'Callyx', text: 'A perfect blend of power and simplicity.' },
    { title: 'ZaynL', text: 'Didn’t expect much, but wow... this is quality stuff.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setReviews((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardData.length]);

  const Card = ({ title, text }: { title: string; text: string }) => (
    <motion.div
      key={title + text}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-sm font-bold">{title}</h3>
      <p className="text-xs text-gray-500">{text}</p>
    </motion.div>
  );

  // Reusable row
  const ReviewRow = ({
                       left,
                       center,
                       right,
                     }: {
    left: any;
    center: string;
    right: any;
  }) => (
    <div className="relative flex items-center justify-center gap-6 my-4">
      <div className="w-32 h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <Card {...left} key={left.title + 'L'} />
        </AnimatePresence>
      </div>
      <div className="whitespace-nowrap text-xl font-semibold z-10">{center}</div>
      <div className="w-32 h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <Card {...right} key={right.title + 'R'} />
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <>
      <ReviewRow
        left={cardData[reviews]}
        center="Here's What's"
        right={cardData2[reviews]}
      />
      <ReviewRow
        left={cardData2[reviews]}
        center="Been Said"
        right={cardData3[reviews]}
      />
      <ReviewRow
        left={cardData3[reviews]}
        center="About Us"
        right={cardData[reviews]}
      />
    </>
  );
};

export default ReviewComponent;
