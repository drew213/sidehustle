import { AnimatePresence, motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { Star } from 'lucide-react';
import { useState } from 'react';

function CategoriesComponent() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');
    const [visibleCount, setVisibleCount] = useState(3);

    type CategoryType = {
        title: string;
        description: string;
        image: string;
        category: string;
        tags: string[];
        rating: number;
        badge?: string;
    };

    const categoryData: CategoryType[] = [
        {
            title: 'Fade Masters',
            description: 'Professional fades and trims',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['fade', 'haircut'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Tidy Tutors',
            description: 'Math and science tutoring',
            image: '/serv.png',
            category: 'Tutors',
            tags: ['education', 'math'],
            rating: 4.5,
            badge: 'Top Rated',
        },
        {
            title: 'The Carpenter',
            description: 'Carpentry services',
            image: '/serv.png',
            category: 'Carpenters',
            tags: ['wood', 'stone'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'The Cleaner',
            description: 'House cleaning services',
            image: '/serv.png',
            category: 'Cleaners',
            tags: ['house', 'cleaning'],
            rating: 4.0,
            badge: 'Trending',
        },
        {
            title: 'The Stylist',
            description: 'Hair styling services',
            image: '/serv.png',
            category: 'Stylists',
            tags: ['hair', 'style'],
            rating: 3.8,
            badge: 'Trending',
        },
        {
            title: 'The Dog Walker',
            description: 'Dog walking services',
            image: '/serv.png',
            category: 'Dog Walkers',
            tags: ['dog', 'walking'],
            rating: 3.6,
            badge: 'Trending',
        },
        {
            title: 'The Massage Therapist',
            description: 'Massage therapy services',
            image: '/serv.png',
            category: 'Massage Therapists',
            tags: ['massage', 'therapy'],
            rating: 3.4,
            badge: 'Trending',
        },
        {
            title: 'The Personal Trainer',
            description: 'Personal training services',
            image: '/serv.png',
            category: 'Personal Trainers',
            tags: ['fitness', 'training'],
            rating: 3.2,
            badge: 'Most Reviewed',
        },
        {
            title: 'Code Crafters',
            description: 'Freelance web development',
            image: '/serv.png',
            category: 'Developers',
            tags: ['web', 'software'],
            rating: 4.9,
            badge: 'Top Rated',
        },
        {
            title: 'Brush Strokes',
            description: 'Custom house painting',
            image: '/serv.png',
            category: 'Painters',
            tags: ['paint', 'walls'],
            rating: 4.6,
            badge: 'Top Rated',
        },
        {
            title: 'Green Thumb Co.',
            description: 'Eco-friendly gardening',
            image: '/serv.png',
            category: 'Gardeners',
            tags: ['eco', 'plants'],
            rating: 4.3,
            badge: 'Trending',
        },
        {
            title: 'Digital Lens',
            description: 'Event videography services',
            image: '/serv.png',
            category: 'Videographers',
            tags: ['video', 'event'],
            rating: 4.1,
            badge: 'Trending',
        },
        {
            title: 'Swift Movers',
            description: 'Professional moving service',
            image: '/serv.png',
            category: 'Movers',
            tags: ['moving', 'transport'],
            rating: 4.0,
            badge: 'Most Reviewed',
        },
        {
            title: 'Chef’s Kiss',
            description: 'Private chef services',
            image: '/serv.png',
            category: 'Private Chefs',
            tags: ['food', 'dining'],
            rating: 3.9,
            badge: 'Trending',
        },
        {
            title: 'Safe Drive School',
            description: 'Driving lessons for all ages',
            image: '/serv.png',
            category: 'Driving Schools',
            tags: ['driving', 'license'],
            rating: 3.7,
            badge: 'Trending',
        },
        {
            title: 'The DJ Booth',
            description: 'DJ for events and parties',
            image: '/serv.png',
            category: 'DJs',
            tags: ['music', 'party'],
            rating: 3.5,
        },
        {
            title: 'Paws and Claws',
            description: 'Mobile pet grooming',
            image: '/serv.png',
            category: 'Pet Services',
            tags: ['pet', 'grooming'],
            rating: 3.4,
        },
        {
            title: 'Quick Fix IT',
            description: 'IT support and repairs',
            image: '/serv.png',
            category: 'IT Technicians',
            tags: ['tech', 'support'],
            rating: 3.2,
        },
        {
            title: 'Body Balance',
            description: 'Physiotherapy sessions',
            image: '/serv.png',
            category: 'Physiotherapists',
            tags: ['health', 'therapy'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'Clean Slate',
            description: 'Office and commercial cleaning',
            image: '/serv.png',
            category: 'Commercial Cleaners',
            tags: ['cleaning', 'office'],
            rating: 4.1,
        },
        {
            title: 'Snap Studio',
            description: 'Portrait and studio photography',
            image: '/serv.png',
            category: 'Photographers',
            tags: ['studio', 'portraits'],
            rating: 3.9,
        },
        {
            title: 'Fix-It Auto',
            description: 'Vehicle repair and diagnostics',
            image: '/serv.png',
            category: 'Auto Repair',
            tags: ['vehicle', 'diagnostics'],
            rating: 4.4,
            badge: 'Top Rated',
        },
        {
            title: 'Zen Spaces',
            description: 'Home organization and decluttering',
            image: '/serv.png',
            category: 'Organizers',
            tags: ['declutter', 'minimalism'],
            rating: 4.0,
        },
        {
            title: 'Spark Electric',
            description: 'Home electrical services',
            image: '/serv.png',
            category: 'Electricians',
            tags: ['home', 'wiring'],
            rating: 4.0,
        },
        {
            title: 'The Lawn Guys',
            description: 'Landscaping specialists',
            image: '/serv.png',
            category: 'Landscapers',
            tags: ['lawn', 'garden'],
            rating: 3.8,
        },
        {
            title: 'Diamond Hands',
            description: 'Custom jewelry creation',
            image: '/serv.png',
            category: 'Jewellers',
            tags: ['gold', 'silver'],
            rating: 3.6,
        },
        {
            title: 'Elite Barbers',
            description: 'Barber services',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['trim', 'shave'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Fade Masters',
            description: 'Professional fades and trims',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['fade', 'haircut'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Tidy Tutors',
            description: 'Math and science tutoring',
            image: '/serv.png',
            category: 'Tutors',
            tags: ['education', 'math'],
            rating: 4.5,
            badge: 'Top Rated',
        },
        {
            title: 'The Carpenter',
            description: 'Carpentry services',
            image: '/serv.png',
            category: 'Carpenters',
            tags: ['wood', 'stone'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'The Cleaner',
            description: 'House cleaning services',
            image: '/serv.png',
            category: 'Cleaners',
            tags: ['house', 'cleaning'],
            rating: 4.0,
            badge: 'Trending',
        },
        {
            title: 'The Stylist',
            description: 'Hair styling services',
            image: '/serv.png',
            category: 'Stylists',
            tags: ['hair', 'style'],
            rating: 3.8,
            badge: 'Trending',
        },
        {
            title: 'The Dog Walker',
            description: 'Dog walking services',
            image: '/serv.png',
            category: 'Dog Walkers',
            tags: ['dog', 'walking'],
            rating: 3.6,
            badge: 'Trending',
        },
        {
            title: 'The Massage Therapist',
            description: 'Massage therapy services',
            image: '/serv.png',
            category: 'Massage Therapists',
            tags: ['massage', 'therapy'],
            rating: 3.4,
            badge: 'Trending',
        },
        {
            title: 'The Personal Trainer',
            description: 'Personal training services',
            image: '/serv.png',
            category: 'Personal Trainers',
            tags: ['fitness', 'training'],
            rating: 3.2,
            badge: 'Most Reviewed',
        },
        {
            title: 'Code Crafters',
            description: 'Freelance web development',
            image: '/serv.png',
            category: 'Developers',
            tags: ['web', 'software'],
            rating: 4.9,
            badge: 'Top Rated',
        },
        {
            title: 'Brush Strokes',
            description: 'Custom house painting',
            image: '/serv.png',
            category: 'Painters',
            tags: ['paint', 'walls'],
            rating: 4.6,
            badge: 'Top Rated',
        },
        {
            title: 'Green Thumb Co.',
            description: 'Eco-friendly gardening',
            image: '/serv.png',
            category: 'Gardeners',
            tags: ['eco', 'plants'],
            rating: 4.3,
            badge: 'Trending',
        },
        {
            title: 'Digital Lens',
            description: 'Event videography services',
            image: '/serv.png',
            category: 'Videographers',
            tags: ['video', 'event'],
            rating: 4.1,
            badge: 'Trending',
        },
        {
            title: 'Swift Movers',
            description: 'Professional moving service',
            image: '/serv.png',
            category: 'Movers',
            tags: ['moving', 'transport'],
            rating: 4.0,
            badge: 'Most Reviewed',
        },
        {
            title: 'Chef’s Kiss',
            description: 'Private chef services',
            image: '/serv.png',
            category: 'Private Chefs',
            tags: ['food', 'dining'],
            rating: 3.9,
            badge: 'Trending',
        },
        {
            title: 'Safe Drive School',
            description: 'Driving lessons for all ages',
            image: '/serv.png',
            category: 'Driving Schools',
            tags: ['driving', 'license'],
            rating: 3.7,
            badge: 'Trending',
        },
        {
            title: 'The DJ Booth',
            description: 'DJ for events and parties',
            image: '/serv.png',
            category: 'DJs',
            tags: ['music', 'party'],
            rating: 3.5,
        },
        {
            title: 'Paws and Claws',
            description: 'Mobile pet grooming',
            image: '/serv.png',
            category: 'Pet Services',
            tags: ['pet', 'grooming'],
            rating: 3.4,
        },
        {
            title: 'Quick Fix IT',
            description: 'IT support and repairs',
            image: '/serv.png',
            category: 'IT Technicians',
            tags: ['tech', 'support'],
            rating: 3.2,
        },
        {
            title: 'Body Balance',
            description: 'Physiotherapy sessions',
            image: '/serv.png',
            category: 'Physiotherapists',
            tags: ['health', 'therapy'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'Clean Slate',
            description: 'Office and commercial cleaning',
            image: '/serv.png',
            category: 'Commercial Cleaners',
            tags: ['cleaning', 'office'],
            rating: 4.1,
        },
        {
            title: 'Snap Studio',
            description: 'Portrait and studio photography',
            image: '/serv.png',
            category: 'Photographers',
            tags: ['studio', 'portraits'],
            rating: 3.9,
        },
        {
            title: 'Fix-It Auto',
            description: 'Vehicle repair and diagnostics',
            image: '/serv.png',
            category: 'Auto Repair',
            tags: ['vehicle', 'diagnostics'],
            rating: 4.4,
            badge: 'Top Rated',
        },
        {
            title: 'Zen Spaces',
            description: 'Home organization and decluttering',
            image: '/serv.png',
            category: 'Organizers',
            tags: ['declutter', 'minimalism'],
            rating: 4.0,
        },
        {
            title: 'Spark Electric',
            description: 'Home electrical services',
            image: '/serv.png',
            category: 'Electricians',
            tags: ['home', 'wiring'],
            rating: 4.0,
        },
        {
            title: 'The Lawn Guys',
            description: 'Landscaping specialists',
            image: '/serv.png',
            category: 'Landscapers',
            tags: ['lawn', 'garden'],
            rating: 3.8,
        },
        {
            title: 'Diamond Hands',
            description: 'Custom jewelry creation',
            image: '/serv.png',
            category: 'Jewellers',
            tags: ['gold', 'silver'],
            rating: 3.6,
        },
        {
            title: 'Elite Barbers',
            description: 'Barber services',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['trim', 'shave'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Fade Masters',
            description: 'Professional fades and trims',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['fade', 'haircut'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Tidy Tutors',
            description: 'Math and science tutoring',
            image: '/serv.png',
            category: 'Tutors',
            tags: ['education', 'math'],
            rating: 4.5,
            badge: 'Top Rated',
        },
        {
            title: 'The Carpenter',
            description: 'Carpentry services',
            image: '/serv.png',
            category: 'Carpenters',
            tags: ['wood', 'stone'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'The Cleaner',
            description: 'House cleaning services',
            image: '/serv.png',
            category: 'Cleaners',
            tags: ['house', 'cleaning'],
            rating: 4.0,
            badge: 'Trending',
        },
        {
            title: 'The Stylist',
            description: 'Hair styling services',
            image: '/serv.png',
            category: 'Stylists',
            tags: ['hair', 'style'],
            rating: 3.8,
            badge: 'Trending',
        },
        {
            title: 'The Dog Walker',
            description: 'Dog walking services',
            image: '/serv.png',
            category: 'Dog Walkers',
            tags: ['dog', 'walking'],
            rating: 3.6,
            badge: 'Trending',
        },
        {
            title: 'The Massage Therapist',
            description: 'Massage therapy services',
            image: '/serv.png',
            category: 'Massage Therapists',
            tags: ['massage', 'therapy'],
            rating: 3.4,
            badge: 'Trending',
        },
        {
            title: 'The Personal Trainer',
            description: 'Personal training services',
            image: '/serv.png',
            category: 'Personal Trainers',
            tags: ['fitness', 'training'],
            rating: 3.2,
            badge: 'Most Reviewed',
        },
        {
            title: 'Code Crafters',
            description: 'Freelance web development',
            image: '/serv.png',
            category: 'Developers',
            tags: ['web', 'software'],
            rating: 4.9,
            badge: 'Top Rated',
        },
        {
            title: 'Brush Strokes',
            description: 'Custom house painting',
            image: '/serv.png',
            category: 'Painters',
            tags: ['paint', 'walls'],
            rating: 4.6,
            badge: 'Top Rated',
        },
        {
            title: 'Green Thumb Co.',
            description: 'Eco-friendly gardening',
            image: '/serv.png',
            category: 'Gardeners',
            tags: ['eco', 'plants'],
            rating: 4.3,
            badge: 'Trending',
        },
        {
            title: 'Digital Lens',
            description: 'Event videography services',
            image: '/serv.png',
            category: 'Videographers',
            tags: ['video', 'event'],
            rating: 4.1,
            badge: 'Trending',
        },
        {
            title: 'Swift Movers',
            description: 'Professional moving service',
            image: '/serv.png',
            category: 'Movers',
            tags: ['moving', 'transport'],
            rating: 4.0,
            badge: 'Most Reviewed',
        },
        {
            title: 'Chef’s Kiss',
            description: 'Private chef services',
            image: '/serv.png',
            category: 'Private Chefs',
            tags: ['food', 'dining'],
            rating: 3.9,
            badge: 'Trending',
        },
        {
            title: 'Safe Drive School',
            description: 'Driving lessons for all ages',
            image: '/serv.png',
            category: 'Driving Schools',
            tags: ['driving', 'license'],
            rating: 3.7,
            badge: 'Trending',
        },
        {
            title: 'The DJ Booth',
            description: 'DJ for events and parties',
            image: '/serv.png',
            category: 'DJs',
            tags: ['music', 'party'],
            rating: 3.5,
        },
        {
            title: 'Paws and Claws',
            description: 'Mobile pet grooming',
            image: '/serv.png',
            category: 'Pet Services',
            tags: ['pet', 'grooming'],
            rating: 3.4,
        },
        {
            title: 'Quick Fix IT',
            description: 'IT support and repairs',
            image: '/serv.png',
            category: 'IT Technicians',
            tags: ['tech', 'support'],
            rating: 3.2,
        },
        {
            title: 'Body Balance',
            description: 'Physiotherapy sessions',
            image: '/serv.png',
            category: 'Physiotherapists',
            tags: ['health', 'therapy'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'Clean Slate',
            description: 'Office and commercial cleaning',
            image: '/serv.png',
            category: 'Commercial Cleaners',
            tags: ['cleaning', 'office'],
            rating: 4.1,
        },
        {
            title: 'Snap Studio',
            description: 'Portrait and studio photography',
            image: '/serv.png',
            category: 'Photographers',
            tags: ['studio', 'portraits'],
            rating: 3.9,
        },
        {
            title: 'Fix-It Auto',
            description: 'Vehicle repair and diagnostics',
            image: '/serv.png',
            category: 'Auto Repair',
            tags: ['vehicle', 'diagnostics'],
            rating: 4.4,
            badge: 'Top Rated',
        },
        {
            title: 'Zen Spaces',
            description: 'Home organization and decluttering',
            image: '/serv.png',
            category: 'Organizers',
            tags: ['declutter', 'minimalism'],
            rating: 4.0,
        },
        {
            title: 'Spark Electric',
            description: 'Home electrical services',
            image: '/serv.png',
            category: 'Electricians',
            tags: ['home', 'wiring'],
            rating: 4.0,
        },
        {
            title: 'The Lawn Guys',
            description: 'Landscaping specialists',
            image: '/serv.png',
            category: 'Landscapers',
            tags: ['lawn', 'garden'],
            rating: 3.8,
        },
        {
            title: 'Diamond Hands',
            description: 'Custom jewelry creation',
            image: '/serv.png',
            category: 'Jewellers',
            tags: ['gold', 'silver'],
            rating: 3.6,
        },
        {
            title: 'Elite Barbers',
            description: 'Barber services',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['trim', 'shave'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Fade Masters',
            description: 'Professional fades and trims',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['fade', 'haircut'],
            rating: 4.8,
            badge: 'Top Rated',
        },
        {
            title: 'Tidy Tutors',
            description: 'Math and science tutoring',
            image: '/serv.png',
            category: 'Tutors',
            tags: ['education', 'math'],
            rating: 4.5,
            badge: 'Top Rated',
        },
        {
            title: 'The Carpenter',
            description: 'Carpentry services',
            image: '/serv.png',
            category: 'Carpenters',
            tags: ['wood', 'stone'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'The Cleaner',
            description: 'House cleaning services',
            image: '/serv.png',
            category: 'Cleaners',
            tags: ['house', 'cleaning'],
            rating: 4.0,
            badge: 'Trending',
        },
        {
            title: 'The Stylist',
            description: 'Hair styling services',
            image: '/serv.png',
            category: 'Stylists',
            tags: ['hair', 'style'],
            rating: 3.8,
            badge: 'Trending',
        },
        {
            title: 'The Dog Walker',
            description: 'Dog walking services',
            image: '/serv.png',
            category: 'Dog Walkers',
            tags: ['dog', 'walking'],
            rating: 3.6,
            badge: 'Trending',
        },
        {
            title: 'The Massage Therapist',
            description: 'Massage therapy services',
            image: '/serv.png',
            category: 'Massage Therapists',
            tags: ['massage', 'therapy'],
            rating: 3.4,
            badge: 'Trending',
        },
        {
            title: 'The Personal Trainer',
            description: 'Personal training services',
            image: '/serv.png',
            category: 'Personal Trainers',
            tags: ['fitness', 'training'],
            rating: 3.2,
            badge: 'Most Reviewed',
        },
        {
            title: 'Code Crafters',
            description: 'Freelance web development',
            image: '/serv.png',
            category: 'Developers',
            tags: ['web', 'software'],
            rating: 4.9,
            badge: 'Top Rated',
        },
        {
            title: 'Brush Strokes',
            description: 'Custom house painting',
            image: '/serv.png',
            category: 'Painters',
            tags: ['paint', 'walls'],
            rating: 4.6,
            badge: 'Top Rated',
        },
        {
            title: 'Green Thumb Co.',
            description: 'Eco-friendly gardening',
            image: '/serv.png',
            category: 'Gardeners',
            tags: ['eco', 'plants'],
            rating: 4.3,
            badge: 'Trending',
        },
        {
            title: 'Digital Lens',
            description: 'Event videography services',
            image: '/serv.png',
            category: 'Videographers',
            tags: ['video', 'event'],
            rating: 4.1,
            badge: 'Trending',
        },
        {
            title: 'Swift Movers',
            description: 'Professional moving service',
            image: '/serv.png',
            category: 'Movers',
            tags: ['moving', 'transport'],
            rating: 4.0,
            badge: 'Most Reviewed',
        },
        {
            title: 'Chef’s Kiss',
            description: 'Private chef services',
            image: '/serv.png',
            category: 'Private Chefs',
            tags: ['food', 'dining'],
            rating: 3.9,
            badge: 'Trending',
        },
        {
            title: 'Safe Drive School',
            description: 'Driving lessons for all ages',
            image: '/serv.png',
            category: 'Driving Schools',
            tags: ['driving', 'license'],
            rating: 3.7,
            badge: 'Trending',
        },
        {
            title: 'The DJ Booth',
            description: 'DJ for events and parties',
            image: '/serv.png',
            category: 'DJs',
            tags: ['music', 'party'],
            rating: 3.5,
        },
        {
            title: 'Paws and Claws',
            description: 'Mobile pet grooming',
            image: '/serv.png',
            category: 'Pet Services',
            tags: ['pet', 'grooming'],
            rating: 3.4,
        },
        {
            title: 'Quick Fix IT',
            description: 'IT support and repairs',
            image: '/serv.png',
            category: 'IT Technicians',
            tags: ['tech', 'support'],
            rating: 3.2,
        },
        {
            title: 'Body Balance',
            description: 'Physiotherapy sessions',
            image: '/serv.png',
            category: 'Physiotherapists',
            tags: ['health', 'therapy'],
            rating: 4.2,
            badge: 'Top Rated',
        },
        {
            title: 'Clean Slate',
            description: 'Office and commercial cleaning',
            image: '/serv.png',
            category: 'Commercial Cleaners',
            tags: ['cleaning', 'office'],
            rating: 4.1,
        },
        {
            title: 'Snap Studio',
            description: 'Portrait and studio photography',
            image: '/serv.png',
            category: 'Photographers',
            tags: ['studio', 'portraits'],
            rating: 3.9,
        },
        {
            title: 'Fix-It Auto',
            description: 'Vehicle repair and diagnostics',
            image: '/serv.png',
            category: 'Auto Repair',
            tags: ['vehicle', 'diagnostics'],
            rating: 4.4,
            badge: 'Top Rated',
        },
        {
            title: 'Zen Spaces',
            description: 'Home organization and decluttering',
            image: '/serv.png',
            category: 'Organizers',
            tags: ['declutter', 'minimalism'],
            rating: 4.0,
        },
        {
            title: 'Spark Electric',
            description: 'Home electrical services',
            image: '/serv.png',
            category: 'Electricians',
            tags: ['home', 'wiring'],
            rating: 4.0,
        },
        {
            title: 'The Lawn Guys',
            description: 'Landscaping specialists',
            image: '/serv.png',
            category: 'Landscapers',
            tags: ['lawn', 'garden'],
            rating: 3.8,
        },
        {
            title: 'Diamond Hands',
            description: 'Custom jewelry creation',
            image: '/serv.png',
            category: 'Jewellers',
            tags: ['gold', 'silver'],
            rating: 3.6,
        },
        {
            title: 'Elite Barbers',
            description: 'Barber services',
            image: '/serv.png',
            category: 'Barbers',
            tags: ['trim', 'shave'],
            rating: 4.8,
            badge: 'Top Rated',
        },

    ];

    const fuse = new Fuse(categoryData, {
        keys: ['title', 'description', 'tags', 'rating'],
        threshold: 0.3,
    });

    const filteredFuseResults = search ? fuse.search(search).map((result) => result.item) : categoryData;

    const groupedData = filteredFuseResults.reduce<Record<string, CategoryType[]>>((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const CategoryCard = ({ title, description, image, rating, badge }: CategoryType) => (
        <motion.div
            key={title}
            className="relative overflow-hidden rounded-2xl shadow-md shadow-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {badge && (
                <div className="animate-gradient-pulse absolute top-2 right-2 z-10 rounded-tr-full rounded-bl-full bg-[linear-gradient(135deg,_#fcd34d,_#333)] bg-[length:200%_200%] px-3 py-1 text-xs font-bold text-black shadow-[0_0_8px_#facc15]">
                    {badge}
                </div>
            )}
            <img src={image} className="h-40 w-full rounded-2xl object-cover" alt={title} />
            <div className="px-4 py-4 font-mono text-black">
                <h1 className="text-xl font-bold">
                    {title}
                    <span className="flex items-center text-sm">
                        <Star className="mr-1 h-4 w-4 fill-[#988340]" /> {rating.toFixed(1)}
                    </span>
                </h1>
                <p>{description}</p>
            </div>
        </motion.div>
    );

    return (
        <section className="px-6 py-10">
            <h1 className="mb-6 text-center text-3xl font-bold">Browse Categories</h1>

            <div className="mb-4 flex flex-wrap justify-center gap-2">
                {Object.keys(groupedData).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                        className={`rounded-full px-4 py-2 text-white transition-all duration-200 ${selectedCategory === cat ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="mb-6 text-center">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search businesses..."
                    className="input input-bordered w-full max-w-md rounded-2xl"
                />
            </div>

            {selectedCategory ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {groupedData[selectedCategory]
                            ?.slice(0, visibleCount) // Limit to visibleCount businesses
                            .map(item => (
                                <CategoryCard key={item.title} {...item} />
                            ))}
                    </AnimatePresence>
                    {groupedData[selectedCategory]?.length > visibleCount && (
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded-md"
                            onClick={() => setVisibleCount(visibleCount + 3)} // Load more businesses
                        >
                            Show More
                        </button>
                    )}
                </div>
            ) : (
                Object.entries(groupedData).map(([category, businesses]) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-center">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {businesses
                                    .slice(0, visibleCount) // Limit to visibleCount businesses
                                    .map(item => (
                                        <CategoryCard key={item.title} {...item} />
                                    ))}
                            </AnimatePresence>
                            {businesses.length > visibleCount && (
                                <button
                                    className="w-full md:w-auto bg-blue-600 text-white py-2 rounded-md"
                                    onClick={() => setVisibleCount(visibleCount + 3)} // Load more businesses
                                >
                                    Show More
                                </button>
                            )}
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}

export default CategoriesComponent;
