import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const StackedBusiness = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);


  const cardData = [
    {
      title: 'Jewellers in Your Local Area',
      text: 'Explore our current selection of Jewellers in your local area.',
      image: '/jewellers.jpg',
    },
    {
      title: 'Stylists in Your Local Area',
      text: 'Explore our current Selection of Stylists in your local area.',
      image: '/hairstylist.jpg',
    },
    {
      title: 'Landscapers in Your Local Area',
      text: 'Explore our current selection of Landscapers in your local area.',
      image: '/landscaping.jpg',
    },
    {
      title: 'Plumbers in Your Local Area',
      text: 'Explore our current selection of Plumbers in your local area.',
      image: '/plumbing.jpg',
    },
    {
      title: 'Electricians in Your Local Area',
      text: 'Explore our current selection of Electricians in your local area.',
      image: '/Electricians.jpg',
    },
    {
      title: 'Mechanics in Your Local Area',
      text: 'Explore our current selection of Mechanics in your local area.',
      image: '/Mechanics.jpg',
    },
    {
      title: 'Tutors in Your Local Area',
      text: 'Explore our current selection of Tutors in your local area.',
      image: '/tutors.jpg',
    },
    {
      title: 'Dog Walkers in Your Local Area',
      text: 'Explore our current selection of Dog Walkers in your local area.',
      image: '/dog-walking.jpg',
    },
    {
      title: 'Photographers in Your Local Area',
      text: 'Explore our current selection of Photographers in your local area.',
      image: '/photographer.jpg',
    },
    {
      title: 'Cleaners in Your Local Area',
      text: 'Explore our current selection of Cleaners in your local area.',
      image: '/cleaners.jpg',
    },
    {
      title: 'Roofers in Your Local Area',
      text: 'Explore our current selection of Roofers in your local area.',
      image: '/roofing.jpg',
    },
    {
      title: 'Caterers in Your Local Area',
      text: 'Explore our current selection of Caterers in your local area.',
      image: '/caterers.jpg',
    },
    {
      title: 'Barbers in Your Local Area',
      text: 'Explore our current selection of Barbers in your local area.',
      image: '/barbers.jpg',
    },
    {
      title: 'Makeup Artists in Your Local Area',
      text: 'Explore our current selection of Makeup Artists in your local area.',
      image: '/makeup.jpg',
    },
    {
      title: 'Massage Therapists in Your Local Area',
      text: 'Explore our current selection of Massage Therapists in your local area.',
      image: '/massage.jpg',
    },
    {
      title: 'Handymen in Your Local Area',
      text: 'Explore our current selection of Handymen in your local area.',
      image: '/handyman.png',
    },
    {
      title: 'Personal Trainers in Your Local Area',
      text: 'Explore our current selection of Personal Trainers in your local area.',
      image: '/personal.png',
    },
    {
      title: 'Interior Designers in Your Local Area',
      text: 'Explore our current selection of Interior Designers in your local area.',
      image: '/interior.png',
    },
    // Add more cards here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cardData.length]);

  const Card = ({ title, text, image }: { title: string; text: string; image: string }) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="hero mt-4 max-h-[500px] md:max-h-[300px] w-full max-w-[800px] rounded-lg mb-4 md:mb-20"
    >
      <div className="hero-content flex-col items-center md:flex-row md:justify-between w-full px-4">
        <div className="text-center md:text-left mb-4 md:mb-0 md:pr-4">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="py-3 md:py-6">{text}</p>
          <button className="btn btn-primary">Explore Now</button>
        </div>
        <img
          src={image}
          alt={title}
          className="max-w-[150px] md:max-w-[200px] rounded-lg shadow-2xl"
        />
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence mode="sync">
      <Card {...cardData[currentCard]} />
    </AnimatePresence>
  );
};

export default StackedBusiness;
