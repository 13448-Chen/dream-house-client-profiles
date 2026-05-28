import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  Home,
  HeartHandshake,
  Paintbrush,
  Gamepad2,
  BookOpen,
  FlaskConical,
  Music,
  Leaf,
  Trophy,
  Camera,
  Rocket,
  Users,
  Clock,
  Palette,
  Sparkles,
  AlertTriangle,
  Goal,
  Eye,
  Heart,
  Sofa,
  Frown,
  ClipboardList,
} from 'lucide-react';

const clients = [
  {
    id: 'ethan',
    icon: '🎮',
    avatar: '🕹️',
    name: 'Ethan Wong',
    title: 'The Messy Gamer',
    age: 13,
    theme: 'Gaming + Robotics',
    color: '#2f80ed',
    favoriteColors: ['Electric Blue', 'Black', 'White', 'Neon Cyan'],
    familyBackground:
      'Ethan lives with his parents and younger brother in a busy family home. His parents support his interest in technology, but they worry that his room is becoming too messy and distracting. His younger brother sometimes borrows his controllers and LEGO pieces, which causes Ethan to lose track of his things.',
    story:
      'Ethan is a technology-loving teenager who spends his free time gaming, building LEGO projects, watching robotics videos, and experimenting with small gadgets. His room feels like a mini tech lab mixed with a gaming station, but the excitement often turns into clutter. He wants a house that helps him enjoy gaming while still keeping his study and project areas under control.',
    personality:
      'Ethan is creative, curious, energetic, and slightly messy. He gets excited by new ideas and often jumps from one project to another. He needs a space that feels cool and high-tech, but also gives him clear systems so he can stay organized without feeling restricted.',
    studentMission:
      'Design Ethan’s dream house as if you are solving a real client problem. Your design must separate gaming, study, relaxation, and robotics areas while keeping the space exciting, safe, and easy to maintain.',
    profile: ['Age: 13', 'Creative and curious', 'Energetic personality', 'Loves gaming, gadgets, and robotics', 'Often messy because he works on many projects at once'],
    lifestyle: ['Plays online games with friends after school', 'Builds LEGO and robotics projects on weekends', 'Watches tech review videos and coding tutorials', 'Collects controllers, small gadgets, and game figures', 'Uses his desk for gaming, homework, charging devices, and building projects'],
    problems: ['Tangled cables create tripping hazards and make the desk look chaotic', 'Study area and gaming area are mixed together, making it hard to focus', 'Small robotics parts, LEGO pieces, and chargers are often lost', 'No proper display space for completed projects and collectibles', 'Room becomes visually overwhelming because too many items are exposed', 'Lighting is either too harsh for studying or too dim for detailed building work', 'He struggles to clean because items do not have fixed storage zones'],
    goals: ['A futuristic gaming house with organized technology zones', 'A clear study area that supports concentration', 'A safe robotics and building station', 'Display shelves for LEGO builds, inventions, and collectibles', 'A relaxing corner for breaks after long screen time', 'Smart cable management and hidden storage'],
    visualElements: ['Gaming controller icons', 'Robotics parts', 'Blueprint wall graphics', 'RGB lighting accents', 'Modular storage units', 'Tech-themed desk setup', 'Display shelves with collectibles'],
    dailyRoutine: ['7:00 AM: Gets ready for school and checks his phone', '3:30 PM: Returns home and watches tech videos while snacking', '5:00 PM: Completes homework, but gets distracted by games', '7:30 PM: Builds LEGO or robotics kits', '9:00 PM: Plays online games with friends', '10:30 PM: Tries to pack up, but leaves wires and parts on the desk'],
    emotionalNeeds: ['Needs to feel trusted and independent', 'Wants his room to reflect his identity as a gamer and maker', 'Needs calm zones to reduce overstimulation', 'Wants a system that makes cleaning feel easy, not like punishment'],
    mustHaveSpaces: ['Gaming station', 'Focused study desk', 'Robotics workbench', 'Collectibles display wall', 'Cable charging zone', 'Relaxation corner'],
    dislikes: ['Messy wires', 'Being told to throw away his projects', 'Plain boring rooms', 'Having no place to display achievements', 'Sharing tools without a system'],
  },
  {
    id: 'sofia',
    icon: '🎨',
    avatar: '🖌️',
    name: 'Sofia Martinez',
    title: 'The Young Artist',
    age: 11,
    theme: 'Art Studio + Cozy Creativity',
    color: '#f59bb2',
    favoriteColors: ['Peach', 'Soft Pink', 'Cream', 'Lavender', 'Warm Yellow'],
    familyBackground:
      'Sofia lives with her parents and older sister. Her family loves her creativity, but they often remind her to clean up paint, paper scraps, and craft materials. Her sister sometimes complains when Sofia’s art supplies spread into shared spaces.',
    story:
      'Sofia is an imaginative young artist who spends hours drawing, painting, making stickers, and decorating anything she can find. Her bedroom is full of color and personality, but her small workspace cannot keep up with her creative energy. She dreams of a house that feels like a cozy art studio where every brush, paper, and idea has a place.',
    personality:
      'Sofia is creative, gentle, quiet, emotional, and deeply imaginative. She feels connected to her environment and becomes more confident when her space feels warm and inspiring. She needs a room that supports creativity without becoming stressful or messy.',
    studentMission:
      'Design Sofia’s dream house with the empathy of an artist. Your design must protect her creativity while solving problems related to storage, spills, lighting, and small work areas.',
    profile: ['Age: 11', 'Creative and imaginative', 'Quiet but expressive through art', 'Sensitive to mood, lighting, and colors', 'Loves handmade decorations'],
    lifestyle: ['Draws and paints almost every day', 'Makes stickers, cards, room decorations, and DIY crafts', 'Collects markers, brushes, washi tape, sketchbooks, and paper', 'Enjoys soft music while working', 'Likes displaying finished artwork around her room'],
    problems: ['Art supplies are scattered across the desk, bed, and floor', 'Paint spills happen because her work surface is too small', 'Wet artwork has no drying area and gets damaged easily', 'She wastes time searching for markers, scissors, and brushes', 'Poor lighting makes it hard to see colors accurately', 'Craft clutter makes her relaxation area feel stressful', 'No easy-clean surfaces for messy creative work'],
    goals: ['An artistic creative house with a large worktable', 'Organized storage for different art materials', 'A drying and display wall for finished artwork', 'A cozy inspiration corner for sketching and thinking', 'Bright natural lighting and soft evening lighting', 'Easy-to-clean surfaces and safe paint zones'],
    visualElements: ['Paint splashes', 'Sketchbook icons', 'Pegboard organizers', 'Pastel sticky notes', 'Mini art gallery wall', 'Warm lamps', 'Craft storage baskets'],
    dailyRoutine: ['7:30 AM: Sketches quick ideas before school', '4:00 PM: Starts drawing while listening to music', '5:30 PM: Works on crafts or painting projects', '7:00 PM: Leaves artwork to dry around the room', '8:30 PM: Journals or decorates stickers', '9:30 PM: Tries to sleep but sees unfinished projects everywhere'],
    emotionalNeeds: ['Needs a space that feels safe for creative expression', 'Wants her artwork to be respected and displayed', 'Needs gentle organization that does not feel too strict', 'Wants a calming corner when she feels overwhelmed'],
    mustHaveSpaces: ['Large art desk', 'Paint-safe work zone', 'Art supply storage wall', 'Artwork drying rack', 'Inspiration corner', 'Mini gallery display'],
    dislikes: ['Harsh lighting', 'Messy paint accidents', 'Cold empty rooms', 'Being rushed while creating', 'Having to hide her artwork away'],
  },
  {
    id: 'daniel',
    icon: '📚',
    avatar: '📖',
    name: 'Daniel Lee',
    title: 'The Book Lover',
    age: 12,
    theme: 'Cozy Library + Quiet Study',
    color: '#a46a3f',
    favoriteColors: ['Warm Brown', 'Cream', 'Forest Green', 'Deep Blue', 'Soft Amber'],
    familyBackground:
      'Daniel lives with his parents and grandmother. His family values education and often buys him books as gifts. His grandmother enjoys reading too, so Daniel wants a quiet home library feeling where family members can read together without disturbing each other.',
    story:
      'Daniel is a thoughtful boy who loves novels, comics, science books, and quiet spaces. His room is calm in personality but crowded in reality because books are stacked everywhere. He dreams of a peaceful reading house with warm lighting, soft furniture, and organized bookshelves that make every book easy to find.',
    personality:
      'Daniel is calm, introverted, intelligent, organized, and reflective. He enjoys routines and feels uncomfortable when his environment is noisy or visually crowded. He needs a home that protects quiet time and makes reading comfortable for long periods.',
    studentMission:
      'Design Daniel’s dream house as a peaceful reading retreat. Your design must solve storage, lighting, comfort, and quietness problems while creating a warm library atmosphere.',
    profile: ['Age: 12', 'Calm and introverted', 'Intelligent and organized', 'Loves books and peaceful environments', 'Prefers comfort over flashy decoration'],
    lifestyle: ['Reads novels before bed', 'Collects comics, fantasy books, and science books', 'Studies quietly after school', 'Enjoys rainy-day reading moods', 'Likes arranging books by topic or series'],
    problems: ['Books are stacked on the floor, bed, and study table', 'Some books get bent or damaged because storage is limited', 'Poor lighting causes eye strain during night reading', 'No proper reading corner for long comfortable sessions', 'Desk is too small for reading and writing notes at the same time', 'Noise from other rooms interrupts concentration', 'Room feels crowded because there is no clear library system'],
    goals: ['A cozy reading house with large bookshelf areas', 'Comfortable reading corners with warm lighting', 'A quiet study zone with enough table space', 'Safe book storage that protects collections', 'A calm environment with soft textures and natural materials', 'A small family reading area'],
    visualElements: ['Bookshelf graphics', 'Warm lamp icons', 'Library labels', 'Soft rug textures', 'Reading nook illustrations', 'Wooden furniture references', 'Bookmark doodles'],
    dailyRoutine: ['6:45 AM: Reads a few pages before school', '4:30 PM: Studies and reviews notes quietly', '6:00 PM: Organizes or chooses books to read', '8:00 PM: Reads in bed or at his desk', '9:30 PM: Continues reading under weak lighting', '10:00 PM: Sleeps with books stacked beside the bed'],
    emotionalNeeds: ['Needs peace and privacy', 'Wants his book collection to be valued', 'Needs comfort for long reading sessions', 'Wants a space that feels safe, warm, and intellectually inspiring'],
    mustHaveSpaces: ['Wall-to-wall bookshelf', 'Cozy reading nook', 'Quiet study desk', 'Warm lamp corner', 'Book sorting area', 'Family reading seat'],
    dislikes: ['Loud rooms', 'Cold bright lighting', 'Books placed carelessly', 'Crowded furniture layouts', 'Uncomfortable chairs'],
  },
  {
    id: 'emma-ellie',
    icon: '👯‍♀️',
    avatar: '🧸',
    name: 'Emma & Ellie',
    title: 'Shared Bedroom Sisters',
    age: 10,
    theme: 'Shared Room + Personal Identity',
    color: '#e879b7',
    favoriteColors: ['Emma: Pink and Coral', 'Ellie: Beige and Sage', 'Shared: White and Soft Wood'],
    familyBackground:
      'Emma and Ellie are twin sisters living with their parents in a compact home. Their parents want both girls to learn cooperation and responsibility, but the sisters have very different personalities. The room must feel fair to both of them.',
    story:
      'Emma and Ellie share one bedroom but experience the room in completely different ways. Emma loves plush toys, bright colors, and playful displays, while Ellie prefers calm spaces, simple furniture, and neat organization. Their dream house must help them share happily while still giving each sister a sense of personal space.',
    personality:
      'Emma is expressive, energetic, playful, and colorful. Ellie is calm, organized, minimalist, and thoughtful. Together, they need a design that respects difference, reduces conflict, and creates a balance between fun and peace.',
    studentMission:
      'Design a shared dream house that solves conflict through space planning. Your design must include personal zones, shared areas, fair storage, and privacy solutions for two different personalities.',
    profile: ['Age: 10', 'Twin sisters with different styles', 'Emma: playful, expressive, loves cute decor', 'Ellie: calm, organized, loves minimalist design', 'Need fairness, privacy, and shared function'],
    lifestyle: ['Share one small bedroom', 'Study in the same room but have different focus habits', 'Emma enjoys plush toys, dance, drawing, and accessories', 'Ellie enjoys reading, organizing, and quiet activities', 'Both need storage for school items, clothes, and personal collections'],
    problems: ['They argue over decoration choices and personal space', 'Emma’s toys and Ellie’s books often get mixed together', 'No clear boundary makes both sisters feel their privacy is missing', 'Shared study space becomes noisy and distracting', 'Storage is not equally divided, causing unfairness', 'Different sleep habits cause conflict', 'The room feels overcrowded with two sets of belongings'],
    goals: ['A balanced shared room with personal zones', 'Separate storage systems for each sister', 'A shared activity area for bonding', 'Quiet study corners that reduce distraction', 'Flexible furniture that saves space', 'Visual design that combines cute and minimalist styles'],
    visualElements: ['Split-color layout', 'Privacy divider graphics', 'Toy and book icons', 'Shared room blueprint', 'Cute vs minimal furniture cards', 'Name labels', 'Storage basket stickers'],
    dailyRoutine: ['7:00 AM: Both prepare for school and compete for mirror space', '4:00 PM: Emma plays while Ellie wants quiet reading time', '5:30 PM: Both do homework with different focus levels', '7:00 PM: Toys, books, and clothes spread across the room', '8:30 PM: They argue about lights and noise', '9:00 PM: Both want their own cozy bedtime area'],
    emotionalNeeds: ['Need to feel equally important', 'Want personal identity inside a shared space', 'Need privacy without feeling separated', 'Want fewer arguments and more cooperation', 'Need systems that are easy for both personalities'],
    mustHaveSpaces: ['Emma personal zone', 'Ellie personal zone', 'Shared activity area', 'Two study corners', 'Labeled storage system', 'Privacy divider or soft partition'],
    dislikes: ['Unfair storage', 'Mixed belongings', 'Forced matching designs', 'Noisy study areas', 'Feeling like one sister controls the room'],
  },
  {
    id: 'ryan',
    icon: '🔬',
    avatar: '🤖',
    name: 'Ryan Chen',
    title: 'Future Scientist',
    age: 14,
    theme: 'Inventor Lab + Engineering Studio',
    color: '#0ea5e9',
    favoriteColors: ['Blue', 'Silver', 'White', 'Black', 'Neon Teal'],
    familyBackground:
      'Ryan lives with his parents, who encourage his science interests but worry about safety. They want him to continue inventing while keeping sharp tools, wires, batteries, and small parts organized properly.',
    story:
      'Ryan is an ambitious young inventor who loves science experiments, robotics, and engineering videos. His room is filled with tools, sketches, wires, science kits, and unfinished prototypes. He wants a dream house that feels like a safe mini laboratory where ideas can become real inventions.',
    personality:
      'Ryan is innovative, logical, curious, focused, and a creative thinker. He enjoys problem solving and learns through testing. He needs a workspace that supports deep concentration, safe experimentation, and professional organization.',
    studentMission:
      'Design Ryan’s dream house as a safe inventor laboratory. Your design must include tool organization, safety planning, workspace zoning, storage, and a display area for prototypes.',
    profile: ['Age: 14', 'Innovative and logical', 'Focused problem solver', 'Loves robotics and science experiments', 'Dreams of becoming an engineer'],
    lifestyle: ['Builds small inventions and robotics projects', 'Watches engineering tutorials', 'Sketches prototype ideas', 'Repairs broken gadgets for fun', 'Collects tools, wires, sensors, and science kits'],
    problems: ['Sharp tools and small parts are scattered dangerously', 'Desk is too small for experiments and schoolwork', 'Poor storage causes components to get lost', 'Exposed wires and batteries create safety concerns', 'Projects remain unfinished because there is no permanent workbench', 'No proper ventilation or easy-clean surface for experiments', 'Room does not feel inspiring enough for invention work'],
    goals: ['A futuristic inventor house with a safe workshop', 'Organized tool wall and labeled parts storage', 'Large workbench for building and testing', 'Separate study and invention zones', 'Prototype display shelves', 'Strong task lighting and safety equipment'],
    visualElements: ['Blueprint graphics', 'Robotics icons', 'Tool wall illustrations', 'Hologram-style labels', 'Engineering grid patterns', 'Prototype display shelves', 'Safety symbols'],
    dailyRoutine: ['6:30 AM: Watches a short science video before school', '4:00 PM: Finishes homework quickly', '5:00 PM: Starts experimenting with circuits or robotics', '7:00 PM: Sketches improvements for prototypes', '8:30 PM: Searches for missing tools', '10:00 PM: Leaves unfinished parts on the desk'],
    emotionalNeeds: ['Needs to feel trusted with serious tools', 'Wants a professional environment that respects his ambitions', 'Needs safety without limiting creativity', 'Wants his inventions displayed proudly'],
    mustHaveSpaces: ['Inventor workbench', 'Tool wall', 'Safe parts storage', 'Testing area', 'Study desk', 'Prototype display zone'],
    dislikes: ['Unsafe clutter', 'Tiny desks', 'Losing components', 'Being interrupted during experiments', 'Rooms that feel childish'],
  },
  {
    id: 'aiden',
    icon: '🎧',
    avatar: '🎹',
    name: 'Aiden Park',
    title: 'The Music Creator',
    age: 13,
    theme: 'Music Studio + Calm Creativity',
    color: '#8b5cf6',
    favoriteColors: ['Deep Purple', 'Midnight Blue', 'Soft Gray', 'Warm White'],
    familyBackground:
      'Aiden lives with his parents and older cousin. His family enjoys music, but the walls at home are thin, so noise easily travels between rooms. His parents want him to practice music while respecting quiet hours.',
    story:
      'Aiden is a music-loving teen who creates beats, writes lyrics, practices keyboard, and experiments with recording sounds. His bedroom has headphones, speakers, notebooks, cables, and small instruments everywhere. He dreams of a peaceful music studio house where he can compose, record, and relax without disturbing others.',
    personality:
      'Aiden is expressive, emotional, passionate, and reflective. He uses music to understand his feelings and needs a space that feels private and comfortable. He also needs practical sound control and equipment organization.',
    studentMission:
      'Design Aiden’s dream house as a student-friendly music studio. Your design must consider sound, storage, comfort, creativity, and family needs.',
    profile: ['Age: 13', 'Creative and expressive', 'Passionate about music', 'Enjoys quiet creative time', 'Needs privacy and sound control'],
    lifestyle: ['Creates digital music and beats', 'Practices keyboard and small instruments', 'Writes lyrics and melody ideas', 'Watches music production videos', 'Uses headphones, speakers, and recording tools'],
    problems: ['Audio wires and charging cables become tangled', 'Poor sound control disturbs family members', 'No proper recording corner', 'Small desk cannot fit keyboard, laptop, and notebooks', 'Speakers and instruments have no fixed storage place', 'Noise from outside interrupts recordings', 'Room feels cramped during creative sessions'],
    goals: ['A cozy music studio bedroom', 'Sound-friendly recording corner', 'Organized storage for instruments and audio gear', 'Comfortable lyric-writing and listening area', 'Warm ambient lighting for creative mood', 'A layout that respects family quiet time'],
    visualElements: ['Music note doodles', 'Acoustic panel patterns', 'Keyboard graphics', 'Headphone icons', 'Warm LED lights', 'Recording desk moodboard', 'Vinyl-style stickers'],
    dailyRoutine: ['7:15 AM: Listens to music before school', '4:30 PM: Practices keyboard', '6:00 PM: Creates beats on his laptop', '8:00 PM: Writes lyrics when the house is quieter', '9:00 PM: Tries to record vocals softly', '10:00 PM: Packs away equipment but cables remain messy'],
    emotionalNeeds: ['Needs privacy to express emotions', 'Wants a calm space that supports creativity', 'Needs family-friendly sound solutions', 'Wants his music setup to feel serious and inspiring'],
    mustHaveSpaces: ['Recording corner', 'Music production desk', 'Instrument storage', 'Lyric-writing nook', 'Listening lounge', 'Cable organization zone'],
    dislikes: ['Echoey rooms', 'Messy cables', 'Being interrupted while recording', 'Bright harsh lighting', 'Noisy backgrounds'],
  },
  {
    id: 'chloe',
    icon: '🌿',
    avatar: '🪴',
    name: 'Chloe Tan',
    title: 'The Nature Explorer',
    age: 10,
    theme: 'Indoor Garden + Nature Learning',
    color: '#22c55e',
    favoriteColors: ['Sage Green', 'Leaf Green', 'Cream', 'Sky Blue', 'Natural Wood'],
    familyBackground:
      'Chloe lives with her parents and grandfather, who enjoys gardening. She often learns about plants from him and wants a home that brings outdoor calm indoors. Her parents want her nature collections organized and clean.',
    story:
      'Chloe is a gentle nature explorer who loves plants, animals, leaves, rocks, and environmental projects. She keeps nature journals and tries to grow small plants in her room, but her space does not receive enough sunlight and her collections are not organized. She dreams of a home filled with greenery, fresh air, and peaceful learning corners.',
    personality:
      'Chloe is calm, caring, observant, gentle, and curious. She notices small details in nature and feels happiest in warm sunlight and green spaces. She needs a design that connects her daily life with nature while keeping things tidy and healthy.',
    studentMission:
      'Design Chloe’s dream house as a cozy nature-learning home. Your design must support plants, collections, reading, environmental projects, sunlight, and easy cleaning.',
    profile: ['Age: 10', 'Gentle and observant', 'Loves nature and animals', 'Cares deeply about the environment', 'Enjoys slow, peaceful activities'],
    lifestyle: ['Grows small plants and herbs', 'Collects leaves, rocks, and nature samples', 'Draws in a nature journal', 'Reads animal and environment books', 'Spends time outdoors whenever possible'],
    problems: ['Limited sunlight makes plants weak', 'Soil, pots, and gardening tools create clutter', 'Nature collections are mixed together with school items', 'No proper place to wash or clean plant tools', 'Some collected items attract dust or insects', 'Room feels dull and disconnected from nature', 'Desk is too small for journaling and science projects'],
    goals: ['A nature-inspired bedroom with indoor garden corner', 'Bright natural lighting for plants and reading', 'Organized display for safe collections', 'Eco-friendly materials and warm wood textures', 'Peaceful study and journaling area', 'Easy-clean plant care zone'],
    visualElements: ['Plant stickers', 'Leaf doodles', 'Wooden furniture references', 'Sunlight graphics', 'Nature journal cards', 'Hanging plant illustrations', 'Eco icons'],
    dailyRoutine: ['7:00 AM: Checks her plants before school', '4:00 PM: Collects leaves or sketches nature ideas', '5:00 PM: Waters plants and updates her journal', '6:30 PM: Reads animal books', '8:00 PM: Sorts rocks, leaves, or small collections', '9:00 PM: Wants a calm room before sleeping'],
    emotionalNeeds: ['Needs connection to nature indoors', 'Wants to feel responsible for living things', 'Needs calm and softness in her environment', 'Wants her collections to be respected, not treated as rubbish'],
    mustHaveSpaces: ['Indoor garden corner', 'Nature journaling desk', 'Collection display shelf', 'Plant care station', 'Cozy reading nook', 'Eco storage baskets'],
    dislikes: ['Dark rooms', 'Plastic-looking furniture', 'Messy soil', 'Throwing away collections suddenly', 'Loud chaotic spaces'],
  },
  {
    id: 'lucas',
    icon: '🏀',
    avatar: '⚽',
    name: 'Lucas Kim',
    title: 'The Young Athlete',
    age: 14,
    theme: 'Sport Zone + Recovery Space',
    color: '#f97316',
    favoriteColors: ['Orange', 'Navy', 'White', 'Black', 'Grass Green'],
    familyBackground:
      'Lucas lives with his parents and younger sister. His family supports his sports activities, but muddy shoes, sports bags, and equipment often enter the house. His parents want a practical design that keeps the home clean and organized.',
    story:
      'Lucas is an active teenager who loves football, basketball, training, and competition. His room is full of jerseys, shoes, balls, trophies, and school items. He dreams of a sporty modern home that motivates him to train but also gives him a comfortable place to recover and rest.',
    personality:
      'Lucas is energetic, competitive, friendly, disciplined, and active. He needs spaces that match his movement-based lifestyle, but he also needs calming recovery areas so he does not feel constantly rushed.',
    studentMission:
      'Design Lucas’s dream house as a sport-friendly home. Your design must organize equipment, protect cleanliness, support training, and include recovery comfort.',
    profile: ['Age: 14', 'Energetic and competitive', 'Friendly team player', 'Motivated by goals and achievements', 'Needs movement and recovery spaces'],
    lifestyle: ['Practices sports after school', 'Collects jerseys, trophies, and sports shoes', 'Exercises and stretches regularly', 'Watches sports highlights', 'Carries sports bags, water bottles, and gear daily'],
    problems: ['Sports equipment is scattered around the room', 'Shoes and bags bring dirt into the house', 'No drying area for sweaty clothes or towels', 'Trophies and medals are not displayed properly', 'Small room has no stretching or workout zone', 'No comfortable recovery corner after training', 'Sports items mix with school materials'],
    goals: ['A sport-themed bedroom with organized equipment storage', 'A clean entry or gear drop zone', 'Trophy and medal display area', 'Small workout and stretching space', 'Comfortable recovery lounge', 'Durable materials that are easy to clean'],
    visualElements: ['Ball icons', 'Jersey wall graphics', 'Trophy shelf references', 'Locker-style storage', 'Motivational quote stickers', 'Sport court lines', 'Bench storage illustrations'],
    dailyRoutine: ['6:30 AM: Packs sports bag before school', '4:00 PM: Comes home from training with shoes and gear', '5:00 PM: Stretches or exercises', '6:30 PM: Showers and leaves sports clothes nearby', '8:00 PM: Studies while gear is still on the floor', '9:30 PM: Relaxes by watching sports videos'],
    emotionalNeeds: ['Needs motivation and pride in achievements', 'Wants his active lifestyle to be understood', 'Needs a calm place to recover physically', 'Wants storage that is fast and easy to use after training'],
    mustHaveSpaces: ['Sports gear wall', 'Shoe and bag drop zone', 'Trophy display', 'Stretching area', 'Recovery seating', 'School study desk'],
    dislikes: ['Dirty floors', 'Losing gear before practice', 'Tiny cramped rooms', 'Having trophies hidden away', 'Furniture that breaks easily'],
  },
  {
    id: 'mia',
    icon: '📸',
    avatar: '🎬',
    name: 'Mia Suzuki',
    title: 'The Content Creator',
    age: 12,
    theme: 'Creator Studio + Editing Space',
    color: '#ec4899',
    favoriteColors: ['Blush Pink', 'White', 'Lavender', 'Gold', 'Soft Blue'],
    familyBackground:
      'Mia lives with her mother and older brother. Her family encourages her digital creativity but wants her filming setup to be safer and less messy. They also want her to balance screen time with rest and school responsibilities.',
    story:
      'Mia is a young creator who loves filming mini vlogs, editing photos, creating aesthetic backgrounds, and designing digital content. Her room is filled with tripods, lights, props, stationery, and digital devices. She dreams of a stylish creator studio that looks beautiful on camera while staying practical for daily life.',
    personality:
      'Mia is confident, cheerful, trendy, expressive, and detail-oriented. She cares about how spaces look visually and feels motivated when her environment is beautiful. She needs a room that supports filming, editing, storage, and healthy routines.',
    studentMission:
      'Design Mia’s dream house as a creator-friendly studio. Your design must include filming backgrounds, lighting, hidden storage, editing comfort, and screen-time balance.',
    profile: ['Age: 12', 'Creative and confident', 'Enjoys visual storytelling', 'Trendy and expressive', 'Needs a beautiful but functional room'],
    lifestyle: ['Films short videos and mini vlogs', 'Takes photos and edits visuals', 'Decorates backgrounds for different content themes', 'Uses tablet, phone, camera, lights, and props', 'Follows creative design and social media trends'],
    problems: ['Tripods, lights, and props clutter the floor', 'Poor lighting makes videos look dull', 'Messy backgrounds appear in recordings', 'No dedicated filming corner', 'Editing desk is too small and uncomfortable', 'Charging cables and devices are everywhere', 'Hard to separate creative screen time from rest time'],
    goals: ['A stylish creator studio bedroom', 'A dedicated filming wall with changeable backgrounds', 'Hidden storage for props and equipment', 'Bright adjustable lighting', 'Comfortable editing corner', 'Relaxation area away from screens'],
    visualElements: ['Camera icons', 'Ring light doodles', 'Aesthetic wall panels', 'Moodboard cards', 'Polaroid-style frames', 'Pastel stickers', 'Creator desk references'],
    dailyRoutine: ['7:20 AM: Checks content ideas before school', '4:30 PM: Films short clips when lighting is good', '5:30 PM: Edits photos or videos', '7:00 PM: Sets up props for tomorrow’s content', '8:30 PM: Studies but gets distracted by devices', '9:30 PM: Needs a calm non-screen space before bed'],
    emotionalNeeds: ['Needs self-expression and confidence', 'Wants her creativity to be taken seriously', 'Needs visual order because messy backgrounds stress her', 'Needs balance between digital creation and rest'],
    mustHaveSpaces: ['Filming corner', 'Editing desk', 'Prop storage', 'Device charging drawer', 'Aesthetic background wall', 'Screen-free relaxation nook'],
    dislikes: ['Messy video backgrounds', 'Bad lighting', 'Visible cables', 'Plain walls', 'Being interrupted during filming'],
  },
  {
    id: 'noah',
    icon: '🚀',
    avatar: '🪐',
    name: 'Noah Ibrahim',
    title: 'The Space Dreamer',
    age: 13,
    theme: 'Space Bedroom + Science Exploration',
    color: '#334155',
    favoriteColors: ['Midnight Blue', 'Galaxy Purple', 'Silver', 'White', 'Black'],
    familyBackground:
      'Noah lives with his parents and younger sister. His family enjoys visiting museums and science exhibitions together. His parents want his space models, posters, and science projects organized so the room feels inspiring instead of messy.',
    story:
      'Noah dreams of becoming an astronaut and exploring space. He builds model rockets, reads about planets, watches documentaries, and collects astronomy posters. His room has imagination, but it lacks proper storage, display areas, and study zones. He wants a house that feels like a calm space mission base.',
    personality:
      'Noah is imaginative, intelligent, curious, adventurous, and thoughtful. He loves big questions about the universe and needs a space that encourages wonder while helping him focus on science learning.',
    studentMission:
      'Design Noah’s dream house as a space-inspired learning base. Your design must combine imagination, science study, display storage, lighting effects, and calm focus.',
    profile: ['Age: 13', 'Imaginative and curious', 'Loves astronomy and science fiction', 'Enjoys building models', 'Dreams of becoming an astronaut'],
    lifestyle: ['Builds model rockets and planet models', 'Reads astronomy books and sci-fi stories', 'Watches space documentaries', 'Collects posters, maps, and glow stars', 'Creates school projects about space'],
    problems: ['Rocket models and planet kits clutter the room', 'No safe display area for fragile projects', 'Study desk is too small for science work', 'Posters and glow stars feel random instead of designed', 'Room feels ordinary and not inspiring enough', 'Collections are hard to organize by topic', 'Lighting is not suitable for both studying and relaxing'],
    goals: ['A futuristic space-themed bedroom', 'Organized science project workstation', 'Display area for rockets, planets, and astronomy items', 'Galaxy-inspired relaxation lighting', 'Calm study zone for science learning', 'Storage that hides clutter while keeping curiosity visible'],
    visualElements: ['Galaxy lighting', 'Rocket icons', 'Planet stickers', 'Star map graphics', 'Mission control cards', 'Futuristic furniture references', 'Glow-in-the-dark details'],
    dailyRoutine: ['6:50 AM: Checks a space fact or video before school', '4:15 PM: Works on science homework', '5:30 PM: Builds model rockets or planets', '7:30 PM: Watches documentaries', '8:30 PM: Reads sci-fi or astronomy books', '9:30 PM: Uses soft galaxy lights to relax'],
    emotionalNeeds: ['Needs wonder and imagination', 'Wants his dream of space exploration to feel real', 'Needs calm focus for science study', 'Wants fragile projects protected and proudly shown'],
    mustHaveSpaces: ['Science study desk', 'Rocket display shelf', 'Galaxy relaxation corner', 'Astronomy book storage', 'Mission board wall', 'Hidden project storage'],
    dislikes: ['Ordinary boring rooms', 'Broken models', 'Messy posters', 'Too-bright bedtime lighting', 'Having no space to build projects'],
  },
];

const iconMap = {
  Gamepad2,
  Paintbrush,
  BookOpen,
  Users,
  FlaskConical,
  Music,
  Leaf,
  Trophy,
  Camera,
  Rocket,
};

const sectionIcons = {
  'Character Profile': ClipboardList,
  Lifestyle: Clock,
  'Problems & Needs': AlertTriangle,
  'Dream House Goals': Goal,
  'Visual Elements': Eye,
  'Favorite Colors': Palette,
  'Daily Routine': Clock,
  'Emotional Needs': Heart,
  'Must Have Spaces': Sofa,
  'Family Background': Users,
  'Things They Dislike': Frown,
};

function getThemeIcon(index) {
  const icons = [Gamepad2, Paintbrush, BookOpen, Users, FlaskConical, Music, Leaf, Trophy, Camera, Rocket];
  return icons[index] || Sparkles;
}

function InfoCard({ title, items, children }) {
  const Icon = sectionIcons[title] || Sparkles;
  return (
    <motion.section
      className="info-card"
      whileHover={{ y: -5, rotate: -0.2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="card-title">
        <span className="card-icon"><Icon size={18} /></span>
        <h3>{title}</h3>
      </div>
      {children ? (
        <div className="card-copy">{children}</div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}

function SidebarCard({ client, active, onClick, index }) {
  const ThemeIcon = getThemeIcon(index);
  return (
    <button className={`profile-tab ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="tab-emoji">{client.icon}</span>
      <span className="tab-copy">
        <strong>{client.name}</strong>
        <small>{client.title}</small>
      </span>
      <ThemeIcon size={18} />
    </button>
  );
}

function App() {
  const [selectedId, setSelectedId] = useState(clients[0].id);
  const [query, setQuery] = useState('');

  const filteredClients = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((client) =>
      [client.name, client.title, client.theme, String(client.age), ...client.favoriteColors]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const selectedClient = clients.find((client) => client.id === selectedId) || clients[0];
  const selectedIndex = clients.findIndex((client) => client.id === selectedClient.id);
  const HeroIcon = getThemeIcon(selectedIndex);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <div className="brand-icon"><Home size={28} /></div>
          <div>
            <p className="eyebrow">Debug Lab Tinkercad Project</p>
            <h1>Dream House Client Profiles</h1>
          </div>
        </div>

        <div className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search clients..."
          />
        </div>

        <div className="profile-list">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <SidebarCard
                key={client.id}
                client={client}
                index={clients.findIndex((item) => item.id === client.id)}
                active={client.id === selectedClient.id}
                onClick={() => setSelectedId(client.id)}
              />
            ))
          ) : (
            <p className="empty-state">No client found. Try another keyword.</p>
          )}
        </div>

        <div className="teacher-note">
          <HeartHandshake size={18} />
          <p>Students act as architects: listen, empathize, plan, model, explain.</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="floating-sticker sticker-one">✦</div>
        <div className="floating-sticker sticker-two">✎</div>
        <div className="floating-sticker sticker-three">★</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClient.id}
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.35 }}
            className="content-inner"
          >
            <section className="hero-card" style={{ '--client-color': selectedClient.color }}>
              <div className="hero-avatar-wrap">
                <div className="avatar-card">
                  <span className="avatar">{selectedClient.avatar}</span>
                  <span className="avatar-age">Age {selectedClient.age}</span>
                </div>
                <div className="sticker-badge">Client Brief</div>
              </div>

              <div className="hero-copy">
                <p className="eyebrow">Interior Design Simulation</p>
                <h2>{selectedClient.name}</h2>
                <h3>{selectedClient.title}</h3>
                <p>{selectedClient.story}</p>
                <div className="hero-tags">
                  <span><HeroIcon size={16} /> {selectedClient.theme}</span>
                  <span><Sparkles size={16} /> Design Thinking</span>
                  <span><Home size={16} /> Dream House Planning</span>
                </div>
              </div>
            </section>

            <section className="mission-grid">
              <motion.div className="mission-card" whileHover={{ rotate: 0.3, y: -3 }}>
                <p className="eyebrow">Personality Overview</p>
                <p>{selectedClient.personality}</p>
              </motion.div>
              <motion.div className="mission-card orange" whileHover={{ rotate: -0.3, y: -3 }}>
                <p className="eyebrow">Student Mission</p>
                <p>{selectedClient.studentMission}</p>
              </motion.div>
            </section>

            <section className="info-grid">
              <InfoCard title="Character Profile" items={selectedClient.profile} />
              <InfoCard title="Lifestyle" items={selectedClient.lifestyle} />
              <InfoCard title="Problems & Needs" items={selectedClient.problems} />
              <InfoCard title="Dream House Goals" items={selectedClient.goals} />
              <InfoCard title="Visual Elements" items={selectedClient.visualElements} />
              <InfoCard title="Favorite Colors" items={selectedClient.favoriteColors} />
              <InfoCard title="Daily Routine" items={selectedClient.dailyRoutine} />
              <InfoCard title="Emotional Needs" items={selectedClient.emotionalNeeds} />
              <InfoCard title="Must Have Spaces" items={selectedClient.mustHaveSpaces} />
              <InfoCard title="Family Background">
                <p>{selectedClient.familyBackground}</p>
              </InfoCard>
              <InfoCard title="Things They Dislike" items={selectedClient.dislikes} />
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
