import { Tour } from '@/types';

/**
 * Static Tour Data
 * No database queries needed - all tour information is defined here
 */

export const tours: Tour[] = [
  {
    title: 'Sigiriya & Dambulla Ancient Cities',
    shortDescription: 'Explore UNESCO World Heritage sites featuring the iconic Sigiriya Rock Fortress and ancient Dambulla Cave Temple with stunning murals.',
    seoTitle: 'Sigiriya & Dambulla Day Tour | UNESCO Heritage Sites Sri Lanka',
    seoDescription: 'Visit Sigiriya Rock Fortress and Dambulla Cave Temple on this full-day cultural tour. Expert guides, comfortable transport, and customized itineraries available.',
    featured: true,
    heroImage: '/images/destinations/sigiriya.jpg',
    category: 'cultural'
  },
  {
    title: 'Kandy & Temple of the Tooth',
    shortDescription: 'Discover the cultural capital of Sri Lanka with visits to the sacred Temple of the Tooth Relic and beautiful Royal Botanical Gardens.',
    seoTitle: 'Kandy Temple of the Tooth Tour | Cultural Sri Lanka Experience',
    seoDescription: 'Explore Kandy, Sri Lanka\'s cultural capital. Visit the sacred Temple of the Tooth, Royal Botanical Gardens, and enjoy traditional dance performances.',
    featured: true,
    heroImage: '/images/destinations/kandy.jpg',
    category: 'cultural'
  },
  {
    title: 'Ella & Nine Arch Bridge',
    shortDescription: 'Scenic hill country adventure featuring the famous Nine Arch Bridge, Little Adam\'s Peak, and stunning tea plantation vistas.',
    seoTitle: 'Ella Nine Arch Bridge Tour | Hill Country Adventure Sri Lanka',
    seoDescription: 'Discover Ella\'s Nine Arch Bridge, hike Little Adam\'s Peak, and explore tea plantations. Customize your hill country adventure with YasiruCeylonTours.',
    featured: true,
    heroImage: '/images/destinations/ella.jpg',
    category: 'nature'
  },
  {
    title: 'Yala National Park Safari',
    shortDescription: 'Wildlife safari in Yala National Park - home to the highest density of leopards in the world, along with elephants, sloth bears, and exotic birds.',
    seoTitle: 'Yala National Park Safari Tour | Leopard & Wildlife Sri Lanka',
    seoDescription: 'Experience world-class wildlife safari in Yala National Park. Spot leopards, elephants, and exotic birds with expert safari guides.',
    featured: true,
    heroImage: '/images/destinations/yala.jpg',
    category: 'wildlife'
  },
  {
    title: 'Galle Fort & South Coast',
    shortDescription: 'Explore the historic Galle Fort, a UNESCO World Heritage site, and enjoy pristine southern beaches along Sri Lanka\'s stunning coastline.',
    seoTitle: 'Galle Fort & South Coast Tour | Colonial Heritage Sri Lanka',
    seoDescription: 'Discover Galle Fort\'s colonial charm and pristine south coast beaches. Customized tours with professional drivers from YasiruCeylonTours.',
    featured: true,
    heroImage: '/images/destinations/galle.jpg',
    category: 'cultural'
  },
  {
    title: 'Nuwara Eliya Tea Country',
    shortDescription: 'Journey through Sri Lanka\'s premier tea-growing region with visits to colonial-era tea factories and breathtaking highland scenery.',
    seoTitle: 'Nuwara Eliya Tea Country Tour | Ceylon Tea Experience Sri Lanka',
    seoDescription: 'Explore Nuwara Eliya tea plantations and colonial heritage. Learn about Ceylon tea production in Sri Lanka\'s beautiful highlands.',
    featured: false,
    heroImage: '/images/destinations/nuwara-eliya.jpg',
    category: 'nature'
  },
  {
    title: 'Mirissa Whale Watching',
    shortDescription: 'Witness majestic blue whales, dolphins, and marine life on an exciting whale watching excursion from Mirissa\'s southern coast.',
    seoTitle: 'Mirissa Whale Watching Tour | Blue Whales & Dolphins Sri Lanka',
    seoDescription: 'Experience world-class whale watching in Mirissa. See blue whales, dolphins, and marine life with comfortable transport and expert guides.',
    featured: false,
    heroImage: '/images/destinations/mirissa.jpg',
    category: 'adventure'
  },
  {
    title: 'Colombo City Tour',
    shortDescription: 'Discover Sri Lanka\'s vibrant capital with visits to historical landmarks, bustling markets, and modern shopping districts.',
    seoTitle: 'Colombo City Tour | Capital Highlights Sri Lanka',
    seoDescription: 'Explore Colombo\'s top attractions with comfortable private transport. Visit temples, colonial sites, and modern shopping areas.',
    featured: false,
    heroImage: '/images/destinations/colombo.jpg',
    category: 'cultural'
  },
  {
    title: 'Udawalawe Elephant Safari',
    shortDescription: 'Experience close encounters with wild elephants at Udawalawe National Park and visit the Elephant Transit Home for orphaned calves.',
    seoTitle: 'Udawalawe Elephant Safari | Wild Elephants Sri Lanka',
    seoDescription: 'See wild elephants in their natural habitat at Udawalawe National Park. Safari tours with professional guides and comfortable transport.',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1617867644194-550af3ae2c56?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'wildlife'
  },
  {
    title: 'Polonnaruwa Ancient Kingdom',
    shortDescription: 'Explore the medieval capital of Sri Lanka with its magnificent temples, royal palaces, and UNESCO World Heritage monuments.',
    seoTitle: 'Polonnaruwa Ancient City Tour | Medieval Kingdom Sri Lanka',
    seoDescription: 'Discover Polonnaruwa\'s ancient ruins and UNESCO heritage sites. Visit Gal Vihara Buddha statues and royal palace complex.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1709729508706-87741ec2d50a?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'cultural'
  },
  {
    title: 'Arugam Bay Surf & Beach',
    shortDescription: 'Visit one of the world\'s top surf destinations with pristine beaches, perfect waves, and laid-back coastal atmosphere.',
    seoTitle: 'Arugam Bay Surf Tour | Best Beaches Sri Lanka',
    seoDescription: 'Experience Arugam Bay\'s world-class surf breaks and beautiful beaches. Customized tours for surfers and beach lovers.',
    featured: false,
    heroImage: 'https://plus.unsplash.com/premium_photo-1683578622268-cf079807d952?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'adventure'
  },
  {
    title: 'Horton Plains & World\'s End',
    shortDescription: 'Trek through misty highlands to World\'s End cliff with spectacular views, Baker\'s Falls, and unique cloud forest ecosystem.',
    seoTitle: 'Horton Plains World\'s End Trek | Highland Adventure Sri Lanka',
    seoDescription: 'Hike to World\'s End viewpoint in Horton Plains National Park. Experience cloud forests, waterfalls, and panoramic mountain views.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1671432751719-d1a032c1a369?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'adventure'
  },
  {
    title: 'Anuradhapura Sacred City',
    shortDescription: 'Visit Sri Lanka\'s first capital with ancient stupas, the sacred Bodhi Tree, and remarkable ruins dating back 2,500 years.',
    seoTitle: 'Anuradhapura Sacred City Tour | Ancient Buddhism Sri Lanka',
    seoDescription: 'Explore Anuradhapura\'s UNESCO World Heritage sites, including the sacred Sri Maha Bodhi tree and ancient Buddhist monuments.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1663403764000-f927ff20fcbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'cultural'
  },
  {
    title: 'Bentota Beach & Water Sports',
    shortDescription: 'Enjoy golden beaches, thrilling water sports, and luxurious coastal resorts along Sri Lanka\'s pristine southwest coast.',
    seoTitle: 'Bentota Beach Tour | Water Sports & Resorts Sri Lanka',
    seoDescription: 'Relax on Bentota\'s beautiful beaches with water sports, river cruises, and luxury resorts. Perfect beach getaway with YasiruCeylonTours.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1706257023817-851555857321?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'adventure'
  },
  {
    title: 'Sinharaja Rainforest Trek',
    shortDescription: 'Explore Sri Lanka\'s last remaining rainforest, a UNESCO Biosphere Reserve with endemic species, exotic birds, and lush biodiversity.',
    seoTitle: 'Sinharaja Rainforest Tour | Endemic Wildlife Sri Lanka',
    seoDescription: 'Trek through Sinharaja UNESCO Rainforest Reserve. See endemic birds, rare wildlife, and pristine tropical jungle.',
    featured: false,
    heroImage: 'https://plus.unsplash.com/premium_photo-1680324209533-bda873b09231?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'adventure'
  },
  {
    title: 'Adam\'s Peak Pilgrimage',
    shortDescription: 'Climb the sacred mountain at night to reach the summit for sunrise, witnessing breathtaking views and spiritual atmosphere.',
    seoTitle: 'Adam\'s Peak Pilgrimage Tour | Sacred Mountain Sri Lanka',
    seoDescription: 'Experience the spiritual journey to Adam\'s Peak summit. Night climb with sunrise views and cultural significance.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1593983913587-361576add259?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'adventure'
  },
  {
    title: 'Bundala Bird Sanctuary',
    shortDescription: 'Birdwatching paradise with migratory flamingos, rare species, and diverse wetland ecosystems near Hambantota.',
    seoTitle: 'Bundala Bird Sanctuary Tour | Birdwatching Sri Lanka',
    seoDescription: 'Explore Bundala National Park for birdwatching. See flamingos, pelicans, and over 200 bird species in wetland habitats.',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1671668589923-a7b88dd6c33e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'wildlife'
  },
  {
    title: 'Knuckles Mountain Range Trek',
    shortDescription: 'Discover the misty Knuckles mountain range with cloud forests, cascading waterfalls, remote villages, and panoramic highland vistas.',
    seoTitle: 'Knuckles Mountain Trek | Hill Country Hiking Sri Lanka',
    seoDescription: 'Trek through Knuckles UNESCO mountain range. Experience cloud forests, waterfalls, and authentic village life in Sri Lanka\'s highlands.',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1551600474-3a3c48b23c5e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'nature'
  },
];

