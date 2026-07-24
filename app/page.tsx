'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Leaf,
  Sprout,
  CheckCircle,
  Users,
  Award,
  Zap,
  MapPin,
  Phone,
  Mail,
  Send,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ArrowRight,
  Star,
  Package,
  Crop,
  MessageSquare,
} from 'lucide-react';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    why: 'Why Us',
    farming: 'Farming',
    products: 'Products',
    packing: 'Packing',
    delivery: 'Delivery',
    gallery: 'Gallery',
    feedback: 'Feedback',
    contact: 'Contact',

    // Slide 1 - Hero
    heroHeadline: 'Premium Organic Betel Leaves',
    heroSubheading: 'Fresh From Our Farm To Your Business',
    heroTrust: '30+ Years of Trusted Farming',
    getTodayPrice: "Get Today's Wholesale Price",
    orderWhatsapp: 'Order On WhatsApp',
    callNow: 'Call Now',

    // Slide 2 - About
    aboutTitle: 'Our Story',
    aboutCaption: 'Our family has farmed betel leaves in Ponnur for over 30 years',
    aboutContent:
      'For over three decades, our family has walked these same betel vine rows before sunrise, hands in the soil, tending each leaf the way my father once taught me. We cultivate premium betel leaves using traditional farming methods passed down through generations, honoring the land and the craft. Every leaf is harvested carefully, every bundle sorted by hand with attention to detail, wrapped in fresh banana leaves, and secured in bamboo baskets to protect freshness during transport. We believe in treating every customer like family, delivering not just leaves, but trust. Quality, honesty, and relationships—these are the seeds we plant.',

    // Slide 3 - Why Choose Us
    whyChooseUs: 'Why Choose Us',
    organicFarming: 'Organic Farming',
    premiumQuality: 'Premium Quality',
    freshHarvest: 'Fresh Harvest',
    traditionalFarming: 'Traditional Farming',
    directFromFarmers: 'Direct From Farmers',
    carefulPacking: 'Careful Packing',
    bulkSupply: 'Bulk Supply',
    fastDelivery: 'Fast Delivery',

    // Slide 4 - Farming
    farmingTitle: 'Our Farming & Sourcing Network',
    mainFarm: 'Main Farm: Ponnur (Weavers Colony)',
    sourcingFrom: 'Also Sourcing From',
    chintalapudi: 'Chintalapudi',
    machavaram: 'Machavaram',
    aluru: 'Aluru',
    farmingNote:
      'Premium quality betel leaves sourced from trusted farmers in nearby areas to fulfill bulk orders while maintaining strict quality standards.',

    // Slide 5 - Products We Supply
    productsSupplyTitle: 'Products We Supply',
    productsSupplyDesc: 'Premium organic betel leaves for every occasion and business need',
    supplyTemples: 'Temples & Religious Events',
    supplyWeddings: 'Weddings & Marriages',
    supplyPaanShops: 'Paan Shops',
    supplyWholesale: 'Wholesale Markets',
    supplyHotels: 'Hotels & Restaurants',
    supplyCaterers: 'Caterers & Events',
    supplyRetail: 'Retail Stores',
    supplyOther: 'Custom Bulk Orders',

    // Slide 6 - Products & Order
    productsTitle: 'Products & Order',
    premiumOrganic: 'Premium Organic Betel Leaves',
    templeSupply: 'For Temple Supply',
    marriageSupply: 'For Marriage Supply',
    wholesaleSupply: 'For Wholesale Supply',
    minimumOrder: 'Minimum Order: 10 Panthams',
    panthamInfo: '(Each Pantham ≈ 130–150 fresh betel leaves)',
    bulkOrdersAvailable: 'Unlimited bulk orders accepted with discounts',
    transportInfo:
      'Transport charges vary by location. Select bulk orders qualify for free delivery.',
    todaysPrice: "Today's Wholesale Price Available On Request",
    orderFormTitle: 'Place Your Order',
    customerName: 'Customer Name',
    phoneNumber: 'Phone Number',
    businessName: 'Business Name',
    state: 'State',
    city: 'City',
    address: 'Delivery Address',
    quantityPanthams: 'Quantity (Panthams)',
    preferredDelivery: 'Preferred Delivery Date',
    message: 'Message (Optional)',
    requestPrice: "Request Today's Price",
    orderViaWhatsapp: 'Order Via WhatsApp',

    // Slide 6 - Packing
    packingTitle: 'Our Packing Process',
    harvest: 'Harvest',
    sorting: 'Sorting',
    qualityCheck: 'Quality Check',
    bananaWrap: 'Banana Leaf Wrapping',
    basketPack: 'Bamboo Basket Packing',
    dispatch: 'Dispatch',
    delivery: 'Delivery',
    packingSteps: [
      'Fresh leaves picked with care',
      'Quality check and grading',
      'Every bundle verified',
      'Fresh leaves as protection',
      'Secure traditional packing',
      'Ready for dispatch',
      'Fresh to your location',
    ],

    // Slide 7 - Delivery
    deliveryTitle: 'Delivery Areas',
    mainDelivery: 'Main Delivery Region',
    alsoServing: 'Also Serving',
    andhraPradesh: 'Andhra Pradesh',
    telangana: 'Telangana',
    tamilNadu: 'Tamil Nadu',

    // Slide 8 - Gallery
    galleryTitle: 'Gallery',

    // Slide 9 - Feedback
    feedbackTitle: 'Customer Feedback',
    beFirstShare: 'Share Your Experience',
    feedbackName: 'Your Name',
    orderDetails: 'Order Details',
    rating: 'Rating',
    comment: 'Comment',
    submitFeedback: 'Submit Feedback',
    noFeedback: 'No feedback yet. Be the first to share your experience.',

    // Slide 10 - Contact
    contactTitle: 'Contact Us',
    phone: '9393889121',
    email: 'betleleaflink18@gmail.com',
    address: 'Fresh Betel Farms, Weavers Colony, Ponnur, Guntur District, Andhra Pradesh, 522124',
    quickLinks: 'Quick Links',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    shippingPolicy: 'Shipping Policy',
    freshnessPolicy: 'Freshness Policy',
    freshnessPolicyText:
      'All orders are carefully quality checked before dispatch. If any issue occurs during transportation, contact us within 24 hours with photos for review and assistance.',
    websiteOwner: 'Website Owner: Adapa Loka Naga Gangadhar',
  },
  te: {
    // Navigation
    home: 'హోమ్',
    about: 'గురించి',
    why: 'ఎందుకు మీరు',
    farming: 'వ్యవసాయం',
    products: 'ఉత్పత్తులు',
    packing: 'ప్యాకింగ్',
    delivery: 'డెలివరీ',
    gallery: 'గ్యాలరీ',
    feedback: 'ఫీడ్‌బ్యాక్',
    contact: 'సంప్రదించండి',

    // Slide 1 - Hero
    heroHeadline: 'ప్రీమియం ఆర్గానిక్ పాకు ఆకులు',
    heroSubheading: 'మా గట నుండి మీ వ్యాపారానికి తాజాగా',
    heroTrust: '30+ సంవత్సరాల నమ్మకమైన వ్యవసాయం',
    getTodayPrice: 'నేటి హోల్‌సేల్ ధరను పొందండి',
    orderWhatsapp: 'వాట్‌సాప్‌లో ఆర్డర్ చేయండి',
    callNow: 'ఇప్పుడు కాల్ చేయండి',

    // Slide 2 - About
    aboutTitle: 'మా కథ',
    aboutCaption: 'మా కుటుంబం 30 సంవత్సరాలకు పాకు ఆకులను పొన్నూర్‌లో పండించారు',
    aboutContent:
      'మూడు దశకాలకు, మా కుటుంబం సూర్యోదయానికి ముందే ఈ బెటెల్ చెట్ల వరుసలు నడిచారు, నేల నుండి మిట్టికి నేలకుంచిన ఆకులు, మా తండ్రి నన్ను నేర్పించిన విధంగా. మేము సాంప్రదాయ వ్యవసాయ పద్ధతులను ఉపయోగించి ప్రీమియం బెటెల్ ఆకులను పండిస్తాము, తరతరాలుగా బదిలీ చేయబడ్డాయి, భూమిని మరియు కళను గౌరవించారు. ప్రతి ఎక జాగ్రత్తగా సేకరించబడుతుంది, ప్రతి కట్ట చేతితో క్రమబద్ధీకరించబడుతుంది, తాజా అరటి ఆకులలో చుట్టుకుంటుంది, మరియు బెంబూ బుట్టలలో రవాణా ��మయంలో తాజాగా ఉంచడానికి సురక్షితం. మేము ప్రతి కస్టమర్‌ను క��టుంబం ���ంటి చికిత్స చేయడానికి నమ్ముతాము. గుణం, సత్యం, మరియు సంబంధాలు—ఇవి మేము వ్యవసాయం చేసే విత్తనాలు.',

    // Slide 3 - Why Choose Us
    whyChooseUs: 'ఎందుకు మమ్మల్ని ఎంచుకోండి',
    organicFarming: 'ఆర్గానిక్ వ్యవసాయం',
    premiumQuality: 'ప్రీమియం నాణ్యత',
    freshHarvest: 'తాజా పంట',
    traditionalFarming: 'సాంప్రదాయ పద్ధతులు',
    directFromFarmers: 'రైతుల నుండి నేరుగా',
    carefulPacking: 'జాగ్రత్త ప్యాకింగ్',
    bulkSupply: 'బల్క్ సరఫరా',
    fastDelivery: 'వేగవంత డెలివరీ',

    // Slide 4 - Farming
    farmingTitle: 'మా వ్యవసాయం & సోర్సింగ్ నెట్‌వర్క్',
    mainFarm: 'ప్రధాన గట: పొన్నూర్ (వీవర్‌లు కాలనీ)',
    sourcingFrom: 'కూడా సోర్సింగ్ నుండి',
    chintalapudi: 'చింతలపూడి',
    machavaram: 'మాచవరం',
    aluru: 'అలూరు',
    farmingNote:
      'ప్రీమియం నాణ్యత బెటెల్ ఆకులు సమీప ప్రాంతాలలో నమ్మకమైన రైతుల నుండి సోర్స్ చేయబడతాయి బల్క్ ఆర్డర్‌లను పూర్తి చేయడానికి కఠినమైన నాణ్యత ప్రమాణాలను నిర్వహిస్తూ.',

    // Slide 5 - Products We Supply
    productsSupplyTitle: 'మేము సరఫరా చేసే ఉత్పత్తులు',
    productsSupplyDesc: 'ప్రతి సందర్భానికి మరియు వ్యాపార అవసరానికి ప్రీమియం ఆర్గానిక్ వెట్లకూర ఎకలు',
    supplyTemples: 'ఆలయాలు & ధార్మిక కార్యక్రమాలు',
    supplyWeddings: 'వివాహాలు & పెళ్ళిళ్లు',
    supplyPaanShops: 'పాన్ దుకాణాలు',
    supplyWholesale: 'హోల్‌సేల్ మార్కెట్‌లు',
    supplyHotels: 'హోటళ్లు & రెస్టారెంట్‌లు',
    supplyCaterers: 'ఖాదీ సరఫరాదారులు & ఈవెంట్‌లు',
    supplyRetail: 'రిటెయిల్ స్టోర్‌లు',
    supplyOther: 'కస్టమ్ బల్క్ ఆర్డర్‌లు',

    // Slide 6 - Products & Order
    productsTitle: 'ఉత్పత్తులు & ఆర్డర్',
    premiumOrganic: 'ప్రీమియం ఆర్గానిక్ వెట్లకూర ఎకలు',
    templeSupply: 'ఆలయ సరఫరా కోసం',
    marriageSupply: 'వివాహ సరఫరా కోసం',
    wholesaleSupply: 'హోల్‌సేల్ సరఫరా కోసం',
    minimumOrder: 'కనిష్ట ఆర్డర్: 10 పంతాలు',
    panthamInfo: '(ప్రతి పంతం ≈ 130–150 తాజా బెటెల్ ఆకులు)',
    bulkOrdersAvailable: 'అసీమ బల్క్ ఆర్డర్‌లు డిస్కౌంట్‌లతో అందుబాటులో ఉన్నాయి',
    transportInfo: 'రవాణా ఖర్చులు స్థానం ఆధారంగా ఉంటాయి. ఎంచుకున్న బల్క్ ఆర్డర్‌లు ఉచిత డెలివరీకి అర్హత కలిగి ఉంటాయి.',
    todaysPrice: 'నేటి హోల్‌సేల్ ధర అభ్యర్థన ఆధారంగా అందుబాటులో ఉంది',
    orderFormTitle: 'మీ ఆర్డర్ ఇవ్వండి',
    customerName: 'కస్టమర్ పేరు',
    phoneNumber: 'ఫోన్ నంబర్',
    businessName: 'వ్యాపార పేరు',
    state: 'రాష్ట్రం',
    city: 'నగరం',
    address: 'డెలివరీ చిరునామా',
    quantityPanthams: 'పరిమాణం (పంతాలు)',
    preferredDelivery: 'ఆయిష్యమైన డెలివరీ తేదీ',
    message: 'సందేశం (ఐచ్ఛికం)',
    requestPrice: 'నేటి ధరను అభ్యర్థించండి',
    orderViaWhatsapp: 'వాట్‌సాప్‌ ద్వారా ఆర్డర్ చేయండి',

    // Slide 6 - Packing
    packingTitle: 'మా ప్యాకింగ్ ప్రక్రియ',
    harvest: 'పంట',
    sorting: 'క్రమబద్ధీకరణ',
    qualityCheck: 'నాణ్యత తనిఖీ',
    bananaWrap: 'అరటి ఆకు చుట్టు',
    basketPack: 'బెంబూ బుట్ట ప్యాకింగ్',
    dispatch: 'పంపిణీ',
    delivery: 'డెలివరీ',
    packingSteps: [
      'జాగ్రత్తగా ఎంచుకున్న తాజా ఆకులు',
      'నాణ్యత తనిఖీ మరియు గ్రేడింగ్',
      'ప్రతి కట్ట ధృవీకరించబడింది',
      'రక్షణ కోసం తాజా ఆకులు',
      'సురక్షితమైన సాంప్రదాయక ప్యాకింగ్',
      'డెలివరీ కోసం సిద్ధం',
      'మీ స్థానానికి తాజా',
    ],

    // Slide 7 - Delivery
    deliveryTitle: 'డెలివరీ ప్రాంతాలు',
    mainDelivery: 'ప్రధాన డెలివరీ ప్రాంతం',
    alsoServing: 'కూడా సేవ చేస్తోంది',
    andhraPradesh: 'ఆంధ్ర ప్రదేశ్',
    telangana: 'తెలంగాణ',
    tamilNadu: 'తమిళనాడు',

    // Slide 8 - Gallery
    galleryTitle: 'గ్యాలరీ',

    // Slide 9 - Feedback
    feedbackTitle: 'కస్టమర్ ఫీడ్‌బ్యాక్',
    beFirstShare: 'మీ అనుభవం పంచుకోండి',
    feedbackName: 'మీ పేరు',
    orderDetails: 'ఆర్డర్ వివరాలు',
    rating: 'రేటింగ్',
    comment: 'వ్యాఖ్య',
    submitFeedback: 'ఫీడ్‌బ్యాక్ సమర్పించండి',
    noFeedback: 'ఇంకా ఫీడ్‌బ్యాక్ లేదు. మీ అనుభవం పంచుకోవడానికి మొదటిది.',

    // Slide 10 - Contact
    contactTitle: 'మమ్మల్ని సంప్రదించండి',
    phone: '9393889121',
    email: 'betleleaflink18@gmail.com',
    address: 'ఫ్రెష్ బెటెల్ ఫార్మ్‌లు, వీవర్‌లు కాలనీ, పొన్నూర్, గుంటూరు జిల్లా, ఆంధ్ర ప్రదేశ్, 522124',
    quickLinks: 'త్వరిత లింకులు',
    privacyPolicy: 'గోప్యతా విధానం',
    termsConditions: 'నిబంధనలు & షరతులు',
    shippingPolicy: 'డెలివరీ విధానం',
    freshnessPolicy: 'తాజాత్వ విధానం',
    freshnessPolicyText:
      'సమస్త ఆర్డర్‌లు డెలివరీకి ముందు జాగ్రత్తగా నాణ్యత తనిఖీ చేయబడతాయి. రవాణా సమయంలో ఏదైనా సమస్య ఉంటే, ఫోటోలతో 24 గంటల్లో మమ్మల్ని సంప్రదించండి సమీక్ష మరియు సహాయం కోసం.',
    websiteOwner: 'వెబ్‌సైట్ యజమాని: అదప లోక నాగ గంగాధర్',
  },
};

const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farming.betel-s9GnhdCES8mDIcSGHuYMiOYsXuFWPu.jpg',
    alt: 'Farm worker in betel field',
    captionEn: 'Our dedicated farm team at work',
    captionTe: 'మా నిబద్ధ గట బృందం పనిలో',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesting-betel-oyKs2LYrrZ363UrKhGKxaVXMSl6Lxc.jpg',
    alt: 'Farmer harvesting betel leaves',
    captionEn: 'Hand-harvesting fresh betel leaves',
    captionTe: 'తాజా బెటెల్ ఆకులను చేతితో సేకరించడం',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cultivate.betel-8ogeWsHgrt58km73Cq5Bc5j7cqMbgf.jpg',
    alt: 'Betel cultivation rows',
    captionEn: 'Lush betel vine cultivation',
    captionTe: 'సమృద్ధ బెటెల్ చెట్ల పండన',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banannaleaves-packing-L3guS9AEyHJWAmcrc1mafNcBpEwPUB.jpg',
    alt: 'Banana leaves packing',
    captionEn: 'Wrapping bundles in banana leaves',
    captionTe: 'అరటి ఆకులలో కట్టలు చుట్టుకోవడం',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/betel-leaves-FcwopNAYeGzt1pLIZ5vPLr58k6CgQs.webp',
    alt: 'Fresh betel leaves',
    captionEn: 'Fresh premium betel leaves',
    captionTe: 'తాజా ప్రీమియం బెటెల్ ఆకులు',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bamboopacking.betel-Qa02fBbfdJqDyGJfmMYadod03Yh5IJ.avif',
    alt: 'Bamboo basket packing',
    captionEn: 'Traditional bamboo basket packing',
    captionTe: 'సాంప్రదాయక చేవిరెబ్బ బుట్ట ప్యాకింగ్',
  },
];

const whyUsFeatures = [
  { icon: Leaf, key: 'organicFarming' },
  { icon: Star, key: 'premiumQuality' },
  { icon: Sprout, key: 'freshHarvest' },
  { icon: Crop, key: 'traditionalFarming' },
  { icon: Users, key: 'directFromFarmers' },
  { icon: Award, key: 'carefulPacking' },
  { icon: Package, key: 'bulkSupply' },
  { icon: Zap, key: 'fastDelivery' },
];

const packingSteps = [
  'harvest',
  'sorting',
  'qualityCheck',
  'bananaWrap',
  'basketPack',
  'dispatch',
  'delivery',
];

export default function FreshBetelFarms() {
  const [language, setLanguage] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    orderDetails: '',
    rating: 5,
    comment: '',
  });

  const t = translations[language as keyof typeof translations];

  const navLinks = [
    'home',
    'about',
    'why',
    'farming',
    'products',
    'packing',
    'delivery',
    'gallery',
    'feedback',
    'contact',
  ];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackForm.name.trim() && feedbackForm.comment.trim()) {
      setFeedbacks([...feedbacks, feedbackForm]);
      setFeedbackForm({ name: '', orderDetails: '', rating: 5, comment: '' });
    }
  };

  const scrollToSlide = (slideId: string) => {
    const element = document.getElementById(`slide-${slideId}`);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Sticky Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-green-200 dark:border-green-900 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4">
              {/* Logo */}
              <button
                onClick={() => scrollToSlide('home')}
                className="flex-shrink-0 flex items-center gap-2 group"
              >
                <Leaf className="w-6 h-6 text-green-800 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-green-300 transition" />
                <span className="font-bold text-green-800 dark:text-green-400 text-base sm:text-lg hidden xs:inline group-hover:text-green-900 dark:group-hover:text-green-300 transition">
                  Fresh Betel Farms
                </span>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSlide(link)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 rounded-md transition"
                  >
                    {t[link as keyof typeof t] as string}
                  </button>
                ))}
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
                  className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 border border-green-200 dark:border-green-800 transition"
                  title="Toggle language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'en' ? 'తెలుగు' : 'EN'}</span>
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 border border-green-200 dark:border-green-800 transition"
                  title="Toggle theme"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 border border-green-200 dark:border-green-800 transition"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden pb-4 flex flex-col gap-1 max-h-96 overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSlide(link)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition"
                  >
                    {t[link as keyof typeof t] as string}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Content Container - scroll-snap */}
        <div className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
          {/* SLIDE 1: HERO */}
          <section
            id="slide-home"
            className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-betel-farm.png-wOk6HXKsC3QQF2l7jp2SWH4Ow9ehXw.jpeg"
              alt="Hero - Betel farm pathway"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-10">
              <div className="inline-block px-6 py-2 bg-white/12 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold border border-white/20">
                {t.heroTrust}
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl tracking-tight">
                {t.heroHeadline}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-50 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light">
                {t.heroSubheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
                <button
                  onClick={() => scrollToSlide('products')}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
                >
                  {t.getTodayPrice}
                </button>
                <a
                  href="https://wa.me/919393889121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/25 hover:bg-white/35 text-white rounded-lg font-bold text-lg backdrop-blur-md transition border border-white/30"
                >
                  {t.orderWhatsapp}
                </a>
                <a
                  href="tel:+919393889121"
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white/15 rounded-lg font-bold text-lg transition"
                >
                  {t.callNow}
                </a>
              </div>
            </div>
          </section>

          {/* SLIDE 2: ABOUT */}
          <section
            id="slide-about"
            className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-8 py-16 sm:py-24 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Image - 40% */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesting-betel-oyKs2LYrrZ363UrKhGKxaVXMSl6Lxc.jpg"
                      alt="About - Fresh betel leaf harvesting"
                      fill
                      className="object-cover object-center"
                      quality={100}
                    />
                  </div>
                </div>

                {/* Content - 60% */}
                <div className="space-y-8 pt-2">
                  <div>
                    <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.aboutTitle}
                    </h2>
                    <div className="h-1 w-16 bg-green-600 rounded-full"></div>
                  </div>

                  <div className="space-y-5 text-gray-700 dark:text-gray-300">
                    <p className="text-lg leading-relaxed font-light">
                      Fresh Betel Farms is a family-owned organic betel leaf farming business with deep roots in Ponnur, Andhra Pradesh. For over three decades, we have cultivated premium betel leaves using traditional farming methods passed down through generations.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-base">Fresh Daily Harvesting</h3>
                        <p className="text-base leading-relaxed font-light">Every leaf is carefully hand-harvested each day, ensuring maximum freshness and quality. Our team works early mornings to pick leaves at peak condition.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-base">Premium Organic Quality</h3>
                        <p className="text-base leading-relaxed font-light">We grow 100% organic betel leaves without synthetic pesticides. Every bundle is manually sorted and quality checked to meet the highest standards.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-base">Traditional Packing</h3>
                        <p className="text-base leading-relaxed font-light">Fresh banana leaves wrap each bundle to protect freshness. Bundles are then carefully packed in bamboo baskets for secure, environmentally-friendly transport.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-base">Wide Wholesale Supply</h3>
                        <p className="text-base leading-relaxed font-light">We supply temples, weddings, paan shops, hotels, and retailers. Bulk orders are delivered fresh to Andhra Pradesh, Telangana, and Tamil Nadu with reliable logistics.</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-green-700 dark:text-green-400 font-semibold italic text-base">
                        "{t.aboutCaption}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 3: WHY CHOOSE US */}
          <section
            id="slide-why"
            className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-20">
                <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.whyChooseUs}
                </h2>
                <div className="h-1 w-20 bg-green-600 rounded-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyUsFeatures.map(({ icon: Icon, key }) => (
                  <div
                    key={key}
                    className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 text-center h-full min-h-[240px] border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-12 h-12 text-green-600 dark:text-green-500 mb-5" />
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-snug">
                      {t[key as keyof typeof t] as string}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SLIDE 4: FARMING */}
          <section
            id="slide-farming"
            className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 dark:text-green-400">
                {t.farmingTitle}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-green-700 text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Leaf className="w-6 h-6" />
                    {t.mainFarm}
                  </h3>
                  <p className="text-green-50">Ponnur, Weavers Colony - Our primary cultivation center</p>
                </div>
                <div className="lg:col-span-2 bg-green-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <h3 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-400">
                    {t.sourcingFrom}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                      <p className="font-bold text-green-700 dark:text-green-400">{t.chintalapudi}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                      <p className="font-bold text-green-700 dark:text-green-400">{t.machavaram}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                      <p className="font-bold text-green-700 dark:text-green-400">{t.aluru}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t.farmingNote}</p>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 5: PRODUCTS WE SUPPLY */}
          <section
            id="slide-products-supply"
            className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-16">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
                  {t.productsSupplyTitle}
                </h2>
                <div className="h-1 w-20 bg-green-600 rounded-full mx-auto"></div>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light">
                  {t.productsSupplyDesc}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Leaf className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyTemples}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Star className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyWeddings}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Sprout className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyPaanShops}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Package className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyWholesale}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Users className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyHotels}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Award className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyCaterers}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Zap className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyRetail}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center space-y-4 h-full min-h-[200px] justify-center">
                  <Crop className="w-12 h-12 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t.supplyOther}</h3>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 6: PRODUCTS & ORDER */}
          <section
            id="slide-products"
            className="min-h-screen w-full flex items-center justify-center bg-green-50 dark:bg-gray-800 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-green-800 dark:text-green-400">
                  {t.productsTitle}
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">{t.premiumOrganic}</p>
              </div>

              {/* Supply Types */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center border-2 border-green-200 dark:border-green-700">
                  <p className="font-bold text-green-800 dark:text-green-400">{t.templeSupply}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center border-2 border-green-200 dark:border-green-700">
                  <p className="font-bold text-green-800 dark:text-green-400">{t.marriageSupply}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center border-2 border-green-200 dark:border-green-700">
                  <p className="font-bold text-green-800 dark:text-green-400">{t.wholesaleSupply}</p>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-green-800 dark:text-green-400 mb-2">{t.minimumOrder}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t.panthamInfo}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800 dark:text-green-400 mb-2">{t.bulkOrdersAvailable}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t.transportInfo}</p>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 p-4 rounded-lg text-center">
                  <p className="font-bold text-green-800 dark:text-green-400">{t.todaysPrice}</p>
                </div>
              </div>

              {/* Order Form */}
              <form className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-400">{t.orderFormTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t.customerName}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="tel"
                    placeholder={t.phoneNumber}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="text"
                    placeholder={t.businessName}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="text"
                    placeholder={t.state}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="text"
                    placeholder={t.city}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="text"
                    placeholder={t.quantityPanthams}
                    className="px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t.address}
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <textarea
                  placeholder={t.message}
                  rows={4}
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-bold transition transform hover:scale-105"
                  >
                    {t.requestPrice}
                  </button>
                  <a
                    href="https://wa.me/919393889121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition transform hover:scale-105 text-center"
                  >
                    {t.orderViaWhatsapp}
                  </a>
                </div>
              </form>
            </div>
          </section>

          {/* SLIDE 6: PACKING */}
          <section
            id="slide-packing"
            className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 dark:text-green-400">
                {t.packingTitle}
              </h2>
              <div className="relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banannaleaves-packing-L3guS9AEyHJWAmcrc1mafNcBpEwPUB.jpg"
                  alt="Packing process"
                  fill
                  className="object-cover object-center"
                  quality={100}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
                {packingSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="bg-green-50 dark:bg-gray-800 border-2 border-green-200 dark:border-green-800 p-6 rounded-lg text-center space-y-3"
                  >
                    <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-green-800 dark:text-green-400">
                      {t[step as keyof typeof t] as string}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {typeof t.packingSteps === 'object' && Array.isArray(t.packingSteps)
                        ? t.packingSteps[idx]
                        : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SLIDE 7: DELIVERY */}
          <section
            id="slide-delivery"
            className="min-h-screen w-full flex items-center justify-center bg-green-50 dark:bg-gray-800 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 dark:text-green-400">
                {t.deliveryTitle}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-green-700 text-white p-8 rounded-xl shadow-lg space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    {t.mainDelivery}
                  </h3>
                  <p className="text-4xl font-bold">{t.andhraPradesh}</p>
                  <p className="text-green-50">Primary region for fresh, fast delivery with best service</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg space-y-4">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400">{t.alsoServing}</h3>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">{t.telangana}</p>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">{t.tamilNadu}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 8: GALLERY */}
          <section
            id="slide-gallery"
            className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 dark:text-green-400">
                {t.galleryTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-300"
                        quality={100}
                      />
                    </div>
                    <div className="bg-green-700 dark:bg-green-900 text-white p-5">
                      <p className="font-semibold text-base leading-snug">
                        {language === 'en' ? img.captionEn : img.captionTe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SLIDE 9: FEEDBACK */}
          <section
            id="slide-feedback"
            className="min-h-screen w-full flex items-center justify-center bg-green-50 dark:bg-gray-800 px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 dark:text-green-400">
                {t.feedbackTitle}
              </h2>

              {/* Feedback Form */}
              <form
                onSubmit={handleFeedbackSubmit}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg space-y-6 max-w-2xl mx-auto w-full"
              >
                <input
                  type="text"
                  placeholder={t.feedbackName}
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  placeholder={t.orderDetails}
                  value={feedbackForm.orderDetails}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, orderDetails: e.target.value })}
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <div>
                  <label className="block font-semibold text-green-800 dark:text-green-400 mb-2">
                    {t.rating}
                  </label>
                  <select
                    value={feedbackForm.rating}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>
                <textarea
                  placeholder={t.comment}
                  value={feedbackForm.comment}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-green-300 dark:border-green-700 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-bold transition transform hover:scale-105"
                >
                  {t.submitFeedback}
                </button>
              </form>

              {/* Feedbacks Display */}
              <div className="space-y-4">
                {feedbacks.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-700 rounded-xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{t.noFeedback}</p>
                  </div>
                ) : (
                  feedbacks.map((fb, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-600 shadow-md"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{fb.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{fb.orderDetails}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(fb.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{fb.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* SLIDE 10: CONTACT */}
          <section
            id="slide-contact"
            className="min-h-screen w-full flex items-center justify-center bg-green-900 dark:bg-gray-800 text-white px-6 sm:px-8 py-20 scroll-mt-16"
          >
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">{t.contactTitle}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center space-y-4">
                  <Phone className="w-12 h-12 mx-auto" />
                  <h3 className="text-xl font-bold">{t.phone}</h3>
                  <a
                    href="tel:+919393889121"
                    className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                  >
                    {t.callNow}
                  </a>
                </div>

                {/* Email */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center space-y-4">
                  <Mail className="w-12 h-12 mx-auto" />
                  <h3 className="text-xl font-bold">{t.email}</h3>
                  <a
                    href={`mailto:${t.email}`}
                    className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                  >
                    {t.email}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center space-y-4">
                  <MessageSquare className="w-12 h-12 mx-auto" />
                  <h3 className="text-xl font-bold">{t.phone}</h3>
                  <a
                    href="https://wa.me/919393889121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                  >
                    {t.orderWhatsapp}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-16 space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Address
                </h3>
                <p className="text-green-50 leading-relaxed">{t.address}</p>
              </div>

              {/* Policies */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-16 space-y-6">
                <h3 className="text-2xl font-bold">{t.freshnessPolicy}</h3>
                <p className="text-green-50 leading-relaxed">{t.freshnessPolicyText}</p>
              </div>

              {/* Footer */}
              <div className="text-center space-y-4 border-t border-white/20 pt-8">
                <p className="text-green-200">{t.quickLinks}</p>
                <p className="text-sm text-green-100 opacity-75">{t.websiteOwner}</p>
                <p className="text-xs text-green-100 opacity-50">
                  Fresh Betel Farms © 2026. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
