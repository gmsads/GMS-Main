import React, { useState } from 'react';
import { ExternalLink, Eye, Filter, SignpostBig } from 'lucide-react';

// Import your local images (keeping all your existing imports)
import autoTop from '../assets/Kubera/AutoTop.jpeg';
import skyBalloon from '../assets/Kubera/SkyBalloon.jpeg';
import mobileVan from '../assets/Kubera/MobileVan.jpeg';
import flexBanner from '../assets/Kubera/FlexBanner.jpeg';
import rollUpStand from '../assets/Kubera/RollUpStand.jpeg';
import rounds from '../assets/Kubera/Rounds.jpeg';

// Sri Sitara Collections
import Ledsignboard from '../assets/SriSitaraCollections/Ledsignboard.jpeg';
import ssclogo from '../assets/SriSitaraCollections/ssclogo.jpeg';
import pamphlet from '../assets/SriSitaraCollections/pamphlet.jpeg';
import photobhoot from '../assets/SriSitaraCollections/photobhoot.jpeg';
import trycycle from '../assets/SriSitaraCollections/trycycle.jpeg';

// Big basket
import bautotop from '../assets/Bigbasket/bautotop.jpeg';
import blogo from '../assets/Bigbasket/blogo.jpeg';
import bnewspaper from '../assets/Bigbasket/bnewspaper.jpeg';
import bpamphlet from '../assets/Bigbasket/bpamphlet.jpeg';
import bnpb from '../assets/Bigbasket/bnpb.jpeg';

// Swiggy
import scanopytent from '../assets/Swiggy/scanopytent.jpeg';
import shoding from '../assets/Swiggy/shoding.jpeg';
import sletterboard from '../assets/Swiggy/sletterboard.jpeg';
import slogo from '../assets/Swiggy/slogo.jpeg';
import smobilevan from '../assets/Swiggy/smobilevan.jpeg';
import spromotion from '../assets/Swiggy/spromotion.jpeg';
import strycycle from '../assets/Swiggy/strycycle.jpeg';
import stshirt from '../assets/Swiggy/stshirt.jpeg';
import snpb from '../assets/Swiggy/snpb.jpeg';

// Educational Projects Images
import ai from '../assets/Educational/ai.jpeg';
import ankuram from '../assets/Educational/ankuram.jpeg';
import eurokids from '../assets/Educational/eurokids.jpeg';
import globalart from '../assets/Educational/globalart.jpeg';
import grace from '../assets/Educational/grace.jpeg';
import hellokids from '../assets/Educational/hellokids.jpeg';
import holy from '../assets/Educational/holy.jpeg';
import honeybee from '../assets/Educational/honeybee.jpeg';
import iris from '../assets/Educational/iris.jpeg';
import kangaroo from '../assets/Educational/kangaroo.jpeg';
import kiddos from '../assets/Educational/kiddos.jpeg';
import littleorchaid from '../assets/Educational/littleorchaid.jpeg';
import littleville from '../assets/Educational/littleville.jpeg';
import london from '../assets/Educational/london.jpeg';
import mamta from '../assets/Educational/mamta.jpeg';
import maplebear from '../assets/Educational/maplebear.jpeg';
import rainbow from '../assets/Educational/rainbow.jpeg';
import rvc from '../assets/Educational/rvc.jpeg';
import smartzen from '../assets/Educational/smartzen.jpeg';
import srivaidya from '../assets/Educational/srivaidya.jpeg';
import st from '../assets/Educational/st.jpeg';

// Indriya Jewellery
import ilogo from '../assets/Indriya/ilogo.jpeg';
import imobilevan from '../assets/Indriya/imobilevan.jpeg';
import ipamphlet from '../assets/Indriya/ipamphlet.jpeg';

// Jiva Jeweller
import glogo from '../assets/Jiva/jlogo.jpeg';
import gmobilevan from '../assets/Jiva/jmobilevan.jpeg';

// Roop Sagar Shopping Mall
import rmobile from '../assets/RoopSagar/rmobile.jpeg';
import rnpb from '../assets/RoopSagar/rnpb.jpeg';
import rpamphlet from '../assets/RoopSagar/rpamphlet.jpeg';
import rpamphletd from '../assets/RoopSagar/rpamphletd.jpeg';
import rpoleboards from '../assets/RoopSagar/rpoleboards.jpeg';
import rround from '../assets/RoopSagar/rround.jpeg';
import rtrycycle from '../assets/RoopSagar/rtrycycle.jpeg';
import rtshirt from '../assets/RoopSagar/rtshirt.jpeg';

// Vayago
import vmobilevan from '../assets/Vayago/vmobilevan.jpg';
import vpamphletd from '../assets/Vayago/vpamphletd.jpg';
import vtshirt from '../assets/Vayago/vtshirt.jpg';

// Web Development Projects - Awasa Real Estate
import a1 from '../assets/Awasa/a1.png';
import a2 from '../assets/Awasa/a2.png';
import a3 from '../assets/Awasa/a3.png';
import a4 from '../assets/Awasa/a4.png';
import a5 from '../assets/Awasa/a5.png';
import alogo from '../assets/Awasa/alogo.jpg';

// Web Development Projects - CRM System
import c1 from '../assets/CRM/c1.png';
import c2 from '../assets/CRM/c2.png';
import c3 from '../assets/CRM/c3.png';
import c4 from '../assets/CRM/c4.png';
import c5 from '../assets/CRM/c5.png';
import c6 from '../assets/CRM/c6.png';

// Web Development Projects - Teakit Furniture
import t1 from '../assets/Teakit/1.png';
import t2 from '../assets/Teakit/2.png';
import t3 from '../assets/Teakit/3.png';
import t4 from '../assets/Teakit/4.png';
import teakitlogo from '../assets/Teakit/teakitlogo.jpg';

// Web Development Projects - Laadly
import l1 from '../assets/Laadly/l1.png';
import l2 from '../assets/Laadly/l2.png';
import l3 from '../assets/Laadly/l3.png';
import l4 from '../assets/Laadly/l4.png';
import l5 from '../assets/Laadly/l5.png';
import llogo from '../assets/Laadly/llogo.jpg';

// Web Development projects - KVA 
import KVA1 from '../assets/KVA/kva1.jpeg';
import KVA2 from '../assets/KVA/kva2.jpeg';
import KVA3 from '../assets/KVA/kva3.jpeg';
import KVA4 from '../assets/KVA/kva4.jpeg';

// Import UnitImages correctly
import Unit1 from '../assets/UnitImage/unit1.jpeg';
import Unit2 from '../assets/UnitImage/unit2.jpeg';
import Unit3 from '../assets/UnitImage/unit3.jpeg';
import Unit4 from '../assets/UnitImage/unit4.jpeg';

// Import Political
import BJP from '../assets/Politics/bjp.jpeg';
import Congress from '../assets/Politics/congress.jpeg';
import TDP1 from '../assets/Politics/tdp.jpeg';
import TDP2 from '../assets/Politics/tdp1.jpeg';
import TDP3 from '../assets/Politics/tdp2.jpeg';
import TRS from '../assets/Politics/trs.jpeg';
import bjplogo from '../assets/Politics/bjplogo.png'
import congresslogo from '../assets/Politics/congresslogo.png'
import tdplogo from '../assets/Politics/tdplogo.jpeg'
import brslogo from '../assets/Politics/brslogo.jpeg'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setSelectedServiceIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSelectedServiceIndex(0);
  };

  const nextService = () => {
    if (selectedProject && selectedProject.services) {
      setSelectedServiceIndex((prev) => 
        (prev + 1) % selectedProject.services.length
      );
    }
  };

  const prevService = () => {
    if (selectedProject && selectedProject.services) {
      setSelectedServiceIndex((prev) => 
        prev === 0 ? selectedProject.services.length - 1 : prev - 1
      );
    }
  };

  // Brand logos mapping
  const brandLogos = {
    'Roop Sagar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTcsD4ADDqyfrMSESAVHrA7PuuyQMRrTVVg&s',
    'Vayago': 'https://5.imimg.com/data5/SELLER/Default/2024/4/408739462/TY/IU/CT/8243737/vayego-brandtag.jpg',
    'Indriya Jewellery': ilogo,
    'Jiva Jewellery': glogo,
    'Swiggy': 'https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png',
    'Kubera Shopping Mall': 'https://content.jdmagicbox.com/v2/comp/hyderabad/f2/040pxx40.xx40.120528151851.p8f2/catalogue/sri-kuber-shopping-mall-serilingampally-hyderabad-jewellery-showrooms-1tb84m4.jpg',
    'Sri Sitara Collections': ssclogo,
    'Big Basket': blogo,
    'AI Public School': ai,
    'Ankuram Academy': ankuram,
    'Euro Kids Preschool': eurokids,
    'Global Art': globalart,
    'Grace International': grace,
    'Hello Kids': hellokids,
    'Holy Mary School': holy,
    'Honeybee Play School': honeybee,
    'Iris Educational': iris,
    'Kangaroo Kids': kangaroo,
    'Kiddos Academy': kiddos,
    'Little Orchaid': littleorchaid,
    'Little Ville': littleville,
    'London Public School': london,
    'Mamta High School': mamta,
    'Maple Bear': maplebear,
    'Rainbow School': rainbow,
    'RVC Academy': rvc,
    'Smart Zen': smartzen,
    'Sri Vaidya': srivaidya,
    'ST Educational': st,
    'Various Educational Institutions': ai,
    'Awasa Real Estate': alogo,
    'CRM System': 'https://media.licdn.com/dms/image/v2/C5603AQGXhr0dezU2Cg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1626432375515?e=2147483647&v=beta&t=o65n2pW2p7H2S7JxGv279n5H0ffTicGouA20i-UxH8E',
    'Teakit Furniture': teakitlogo,
    'Laadly': llogo,
    'KVA': KVA1,
    'Unit Printing': Unit1,
    'BJP' : bjplogo,
    'Congress' : congresslogo,
    'TDP' : tdplogo,
    'TRS' : brslogo
  };

  const categories = [
    { id: 'all', name: 'All Work', count: 13 },
    { id: 'branding', name: 'Branding', count: 8 },
    { id: 'webdev', name: 'Web Development', count: 5 },
    { id: 'education', name: 'Education', count: 21 },
    { id: 'retail', name: 'Retail & Malls', count: 3 },
    { id: 'jewellery', name: 'Jewellery', count: 2 },
    { id: 'print', name: 'Print', count: 4 },
    { id: 'political', name: 'Political', count: 4 },
  ];

  // Sub-categories for Political section
  // eslint-disable-next-line no-unused-vars
  const politicalSubCategories = [
    { id: 'all', name: 'All Parties', count: 4 },
    { id: 'bjp', name: 'BJP', count: 1 },
    { id: 'congress', name: 'Congress', count: 1 },
    { id: 'tdp', name: 'TDP', count: 1 },
    { id: 'trs', name: 'TRS', count: 1 }
  ];

  // Educational Projects
  const educationalProjects = [
    {
      id: 5,
      category: 'education',
      title: 'Educational Institutions Portfolio',
      description: 'Complete educational branding for 21+ institutions',
      image: ai,
      tags: ['School Branding', 'Admission Campaign', 'Educational Design', '21+ Institutions'],
      client: 'Various Educational Institutions',
      detailedDescription: 'Comprehensive educational branding campaigns for 21+ institutions including campus signage, admission banners, promotional materials, and complete marketing solutions.',
      services: [
        'AI Public School Branding',
        'Ankuram Academy Campaign', 
        'Euro Kids Preschool',
        'Global Art Institute',
        'Grace International',
        'Hello Kids Preschool',
        'Holy Mary School',
        'Honeybee Play School',
        'Iris Educational Center',
        'Kangaroo Kids Preschool',
        'Kiddos Academy',
        'Little Orchaid Preschool',
        'Little Ville Academy',
        'London Public School',
        'Mamta High School',
        'Maple Bear Canadian School',
        'Rainbow School',
        'RVC Academy',
        'Smart Zen Academy',
        'Sri Vaidya Educational',
        'ST Educational Institute'
      ],
      projectImages: [
        ai, ankuram, eurokids, globalart, grace, hellokids, holy, honeybee, 
        iris, kangaroo, kiddos, littleorchaid, littleville, london, mamta, 
        maplebear, rainbow, rvc, smartzen, srivaidya, st
      ]
    }
  ];

  // Individual educational projects
  const individualEducationalProjects = [
    {
      id: 6,
      category: 'education',
      title: 'AI Public School',
      description: 'Complete school branding and marketing campaign',
      image: ai,
      tags: ['School Branding', 'Educational Marketing', 'Institution Design'],
      client: 'AI Public School',
      detailedDescription: 'Complete school branding including logo design, campus signage, admission banners, and marketing collateral.',
      services: ['Logo Design', 'Campus Signage', 'Admission Banners', 'Marketing Collateral'],
      projectImages: [ai, ai, ai, ai]
    },
    {
      id: 7,
      category: 'education',
      title: 'Ankuram Academy Branding',
      description: 'Educational institution branding and marketing',
      image: ankuram,
      tags: ['Academy Branding', 'Educational Marketing', 'Institution Design'],
      client: 'Ankuram Academy',
      detailedDescription: 'Complete academy branding including logo design, campus signage, and marketing collateral.',
      services: ['Logo Design', 'Campus Signage', 'Marketing Collateral'],
      projectImages: [ankuram, ankuram, ankuram, ankuram]
    },
    {
      id: 8,
      category: 'education',
      title: 'Euro Kids Preschool',
      description: 'Preschool branding and early education campaign',
      image: eurokids,
      tags: ['Preschool Branding', 'Early Education', 'Kids Marketing'],
      client: 'Euro Kids Preschool',
      detailedDescription: 'Preschool branding campaign focusing on child-friendly design and parent communication.',
      services: ['Preschool Signage', 'Parent Communication', 'Admission Campaign'],
      projectImages: [eurokids, eurokids, eurokids, eurokids]
    },
    {
      id: 9,
      category: 'education',
      title: 'Global Art Institute',
      description: 'Art education institute branding',
      image: globalart,
      tags: ['Art Institute', 'Creative Education', 'Design School'],
      client: 'Global Art',
      detailedDescription: 'Creative institute branding focusing on artistic expression and educational excellence.',
      services: ['Institute Branding', 'Creative Signage', 'Student Recruitment'],
      projectImages: [globalart, globalart, globalart, globalart]
    },
    {
      id: 10,
      category: 'education',
      title: 'Grace International School',
      description: 'International school branding campaign',
      image: grace,
      tags: ['International School', 'Premium Education', 'Global Standards'],
      client: 'Grace International',
      detailedDescription: 'Premium international school branding with global standards and local relevance.',
      services: ['International Branding', 'Premium Signage', 'Global Campaign'],
      projectImages: [grace, grace, grace, grace]
    },
    {
      id: 11,
      category: 'education',
      title: 'Hello Kids Preschool',
      description: 'Preschool chain branding and marketing',
      image: hellokids,
      tags: ['Preschool Chain', 'Kids Education', 'Franchise Branding'],
      client: 'Hello Kids',
      detailedDescription: 'Preschool chain branding with consistent identity across multiple locations.',
      services: ['Chain Branding', 'Franchise Materials', 'Multi-location Signage'],
      projectImages: [hellokids, hellokids, hellokids, hellokids]
    },
    {
      id: 12,
      category: 'education',
      title: 'Holy Mary School',
      description: 'Christian school branding and admission drive',
      image: holy,
      tags: ['Christian School', 'Faith Education', 'Community Outreach'],
      client: 'Holy Mary School',
      detailedDescription: 'Faith-based educational institution branding with community focus.',
      services: ['School Branding', 'Community Outreach', 'Admission Drive'],
      projectImages: [holy, holy, holy, holy]
    },
    {
      id: 13,
      category: 'education',
      title: 'Honeybee Play School',
      description: 'Play school branding for early childhood education',
      image: honeybee,
      tags: ['Play School', 'Early Childhood', 'Kids Branding'],
      client: 'Honeybee Play School',
      detailedDescription: 'Playful and engaging branding for early childhood education center.',
      services: ['Playful Branding', 'Child-friendly Design', 'Parent Engagement'],
      projectImages: [honeybee, honeybee, honeybee, honeybee]
    },
    {
      id: 14,
      category: 'education',
      title: 'Iris Educational Center',
      description: 'Educational center branding and promotion',
      image: iris,
      tags: ['Educational Center', 'Coaching Institute', 'Student Services'],
      client: 'Iris Educational',
      detailedDescription: 'Comprehensive educational center branding for coaching and student services.',
      services: ['Center Branding', 'Student Recruitment', 'Educational Services'],
      projectImages: [iris, iris, iris, iris]
    },
    {
      id: 15,
      category: 'education',
      title: 'Kangaroo Kids Preschool',
      description: 'International preschool branding',
      image: kangaroo,
      tags: ['International Preschool', 'Early Learning', 'Global Curriculum'],
      client: 'Kangaroo Kids',
      detailedDescription: 'International preschool branding with focus on global curriculum standards.',
      services: ['International Branding', 'Curriculum Promotion', 'Parent Communication'],
      projectImages: [kangaroo, kangaroo, kangaroo, kangaroo]
    },
    {
      id: 16,
      category: 'education',
      title: 'Kiddos Academy',
      description: 'Kids academy branding and marketing',
      image: kiddos,
      tags: ['Kids Academy', 'After School', 'Activity Center'],
      client: 'Kiddos Academy',
      detailedDescription: 'Kids activity center and academy branding for after-school programs.',
      services: ['Academy Branding', 'Activity Promotion', 'After School Programs'],
      projectImages: [kiddos, kiddos, kiddos, kiddos]
    },
    {
      id: 17,
      category: 'education',
      title: 'Little Orchaid Preschool',
      description: 'Boutique preschool branding',
      image: littleorchaid,
      tags: ['Boutique Preschool', 'Premium Education', 'Small Class Size'],
      client: 'Little Orchaid',
      detailedDescription: 'Boutique preschool branding focusing on premium education experience.',
      services: ['Premium Branding', 'Boutique Design', 'Exclusive Campaign'],
      projectImages: [littleorchaid, littleorchaid, littleorchaid, littleorchaid]
    },
    {
      id: 18,
      category: 'education',
      title: 'Little Ville Academy',
      description: 'Neighborhood academy branding',
      image: littleville,
      tags: ['Neighborhood Academy', 'Community School', 'Local Education'],
      client: 'Little Ville',
      detailedDescription: 'Community-focused academy branding for neighborhood education services.',
      services: ['Community Branding', 'Local Outreach', 'Neighborhood Campaign'],
      projectImages: [littleville, littleville, littleville, littleville]
    },
    {
      id: 19,
      category: 'education',
      title: 'London Public School',
      description: 'Public school branding and development',
      image: london,
      tags: ['Public School', 'Government Education', 'Community School'],
      client: 'London Public School',
      detailedDescription: 'Public school branding with focus on community engagement and educational development.',
      services: ['Public School Branding', 'Community Engagement', 'Educational Development'],
      projectImages: [london, london, london, london]
    },
    {
      id: 20,
      category: 'education',
      title: 'Mamta High School',
      description: 'High school branding and academic promotion',
      image: mamta,
      tags: ['High School', 'Secondary Education', 'Academic Excellence'],
      client: 'Mamta High School',
      detailedDescription: 'High school branding focusing on academic excellence and student achievement.',
      services: ['High School Branding', 'Academic Promotion', 'Student Achievement'],
      projectImages: [mamta, mamta, mamta, mamta]
    },
    {
      id: 21,
      category: 'education',
      title: 'Maple Bear Canadian School',
      description: 'International Canadian school branding',
      image: maplebear,
      tags: ['Canadian School', 'International Education', 'Bilingual Program'],
      client: 'Maple Bear',
      detailedDescription: 'International Canadian school branding with bilingual education focus.',
      services: ['International Branding', 'Bilingual Program', 'Canadian Curriculum'],
      projectImages: [maplebear, maplebear, maplebear, maplebear]
    },
    {
      id: 22,
      category: 'education',
      title: 'Rainbow School',
      description: 'Inclusive education branding',
      image: rainbow,
      tags: ['Inclusive Education', 'Diverse Learning', 'Special Needs'],
      client: 'Rainbow School',
      detailedDescription: 'Inclusive education branding for diverse learning needs and special education.',
      services: ['Inclusive Branding', 'Special Education', 'Diverse Learning'],
      projectImages: [rainbow, rainbow, rainbow, rainbow]
    },
    {
      id: 23,
      category: 'education',
      title: 'RVC Academy',
      description: 'Professional academy branding',
      image: rvc,
      tags: ['Professional Academy', 'Vocational Training', 'Skill Development'],
      client: 'RVC Academy',
      detailedDescription: 'Professional and vocational training academy branding.',
      services: ['Professional Branding', 'Vocational Training', 'Skill Development'],
      projectImages: [rvc, rvc, rvc, rvc]
    },
    {
      id: 24,
      category: 'education',
      title: 'Smart Zen Academy',
      description: 'Modern educational approach branding',
      image: smartzen,
      tags: ['Modern Education', 'Tech Integration', 'Innovative Learning'],
      client: 'Smart Zen',
      detailedDescription: 'Modern educational institution branding with technology integration focus.',
      services: ['Modern Branding', 'Tech Integration', 'Innovative Learning'],
      projectImages: [smartzen, smartzen, smartzen, smartzen]
    },
    {
      id: 25,
      category: 'education',
      title: 'Sri Vaidya Educational',
      description: 'Traditional education with modern approach',
      image: srivaidya,
      tags: ['Traditional Education', 'Modern Approach', 'Cultural Values'],
      client: 'Sri Vaidya',
      detailedDescription: 'Educational institution blending traditional values with modern teaching methods.',
      services: ['Traditional Branding', 'Modern Education', 'Cultural Values'],
      projectImages: [srivaidya, srivaidya, srivaidya, srivaidya]
    },
    {
      id: 26,
      category: 'education',
      title: 'ST Educational Institute',
      description: 'Comprehensive educational services branding',
      image: st,
      tags: ['Educational Institute', 'Comprehensive Services', 'Student Support'],
      client: 'ST Educational',
      detailedDescription: 'Comprehensive educational institute branding for multiple services and student support.',
      services: ['Institute Branding', 'Student Support', 'Educational Services'],
      projectImages: [st, st, st, st]
    }
  ];

  // Other category projects
  const otherProjects = [
    // Branding Projects
    {
      id: 1,
      category: 'branding',
      title: 'Swiggy Brand Campaign',
      description: 'Complete brand identity and marketing campaign for food delivery expansion',
      image: slogo,
      tags: ['Logo Design', 'Brand Identity', 'Marketing Campaign'],
      client: 'Swiggy',
      detailedDescription: 'Comprehensive brand campaign including logo redesign, mobile van advertising, flex banners, pole boards, roll-up stands, canopy tents, pamphlets distribution, and digital marketing strategy.',
      services: ['Logo Design', 'Mobile Van Advertising', 'Flex Banners', 'Pole Boards', 'Roll-up Stands', 'Canopy Tent', 'Pamphlet Distribution', 'Digital Marketing'],
      projectImages: [
        scanopytent,
        shoding,
        sletterboard,
        smobilevan,
        snpb,
        spromotion,
        strycycle,
        stshirt
      ]
    },
    {
      id: 2,
      category: 'branding',
      title: 'Big Basket Campaign',
      description: 'Grocery store branding and advertising campaign',
      image: bautotop,
      tags: ['Visual Identity', 'Retail Branding', 'Advertising'],
      client: 'Big Basket',
      detailedDescription: 'Complete retail branding including store signage, newspaper advertisements, parking boards, and promotional pamphlets.',
      services: ['Auto Top','Newspaper insertion','No Parking Boards','Pamphlet'],
      projectImages: [
        bautotop,
        bnewspaper,
        bnpb,
        bpamphlet,
      ]
    },
    {
      id: 3,
      category: 'branding',
      title: 'Kubera Shopping Mall Inauguration',
      description: 'Complete branding and advertising campaign for grand opening event',
      image: autoTop,
      tags: ['Grand Opening', 'Mall Branding', 'Event Advertising'],
      client: 'Kubera Shopping Mall',
      detailedDescription: 'Comprehensive inauguration campaign including sky balloons, mobile van advertising, auto top branding, roll-up stands, flex banners, and round displays for maximum visibility.',
      services: ['Sky balloon', 'Mobile Van', 'Auto Top', 'Roll up Stand', 'Flex', 'Rounds'],
      projectImages: [
        skyBalloon,
        mobileVan,
        autoTop,
        rollUpStand,
        flexBanner,
        rounds
      ]
    },
    {
      id: 4,
      category: 'branding',
      title: 'Sri Sitara Collections Inauguration',
      description: 'Complete branding and advertising campaign for grand opening event',
      image: ssclogo,
      tags: ['Grand Opening', 'Mall Branding', 'Event Advertising'],
      client: 'Sri Sitara Collections',
      detailedDescription: 'Comprehensive inauguration campaign including LED sign boards, pamphlet distribution, photo booth setup, and try cycle promotions.',
      services: ['LED Sign board', 'pamphlet', 'photoboot', 'Try Cycle'],
      projectImages: [
        Ledsignboard,
        pamphlet,
        photobhoot,
        trycycle
      ]
    },
    {
      id: 27,
      category: 'branding',
      title: 'Vayago Brand Campaign',
      description: 'Complete branding campaign for Vayago',
      image: vmobilevan,
      tags: ['Brand Campaign', 'Vehicle Branding', 'Promotional Items'],
      client: 'Vayago',
      detailedDescription: 'Complete branding campaign including mobile van advertising, pamphlet distribution, and promotional t-shirts.',
      services: ['Mobile Van Advertising', 'Pamphlet Distribution', 'T-shirt Promotion'],
      projectImages: [
        vmobilevan,
        vpamphletd,
        vtshirt
      ]
    },

    // Retail & Malls Projects
    {
      id: 28,
      category: 'retail',
      title: 'Roop Sagar Mall Opening',
      description: 'Grand opening campaign for new shopping mall',
      image: rmobile,
      tags: ['Mall Opening', 'Retail Campaign', 'Grand Launch'],
      client: 'Roop Sagar',
      detailedDescription: 'Comprehensive grand opening campaign for Roop Sagar shopping mall including mobile advertising, no parking boards, pamphlet distribution, pole boards, round displays, try cycle promotions, and t-shirt distribution.',
      services: ['Mobile Advertising', 'No Parking Boards', 'Pamphlet Distribution', 'Pole Boards', 'Round Displays', 'Try Cycle', 'T-shirt Distribution'],
      projectImages: [
        rmobile,
        rnpb,
        rpamphlet,
        rpamphletd,
        rpoleboards,
        rround,
        rtrycycle,
        rtshirt
      ]
    },

    // Jewellery Projects
    {
      id: 29,
      category: 'jewellery',
      title: 'Indriya Jewellery Launch',
      description: 'Premium jewelry brand launch campaign',
      image: ilogo,
      tags: ['Jewelry Branding', 'Luxury Launch', 'Premium Campaign'],
      client: 'Indriya Jewellery',
      detailedDescription: 'Premium jewelry brand launch campaign including logo design, mobile van advertising, and premium pamphlet distribution.',
      services: ['Logo Design', 'Mobile Van Advertising', 'Premium Pamphlets'],
      projectImages: [
        ilogo,
        imobilevan,
        ipamphlet
      ]
    },
    {
      id: 30,
      category: 'jewellery',
      title: 'Jiva Jewellery Campaign',
      description: 'Traditional jewelry brand modernization',
      image: glogo,
      tags: ['Traditional Jewelry', 'Modern Branding', 'Heritage Design'],
      client: 'Jiva Jewellery',
      detailedDescription: 'Traditional jewelry brand modernization campaign blending heritage with contemporary design elements.',
      services: ['Logo Redesign', 'Mobile Van Campaign', 'Brand Modernization'],
      projectImages: [
        glogo,
        gmobilevan
      ]
    },

    // Web Development Projects
    {
      id: 56,
      category: 'webdev',
      title: 'Awasa Real Estate Website',
      description: 'Static real estate website with contact form integration',
      image: a1,
      tags: ['HTML', 'CSS', 'JavaScript', 'Form Handling', 'Email Integration'],
      client: 'Awasa Real Estate',
      detailedDescription: 'Professional real estate website built with HTML, CSS, and JavaScript featuring property listings, contact forms that submit data directly to client email, and responsive design for optimal viewing on all devices.',
      services: ['Frontend Development', 'Form Integration', 'Email Setup', 'Responsive Design', 'Property Listings'],
      projectImages: [a1, a2, a3, a4, a5, alogo]
    },
    {
      id: 57,
      category: 'webdev',
      title: 'CRM Management System',
      description: 'Complete CRM solution with multi-role dashboards',
      image: c1,
      tags: ['MERN Stack', 'AWS', 'GoDaddy', 'Multi-role', 'Dashboard'],
      client: 'CRM System',
      detailedDescription: 'Comprehensive Client Relationship Management system built on MERN stack with AWS deployment and GoDaddy domain.',
      services: ['Full Stack Development', 'AWS Deployment', 'Domain Setup', 'Dashboard Design', 'Data Management', 'User Roles'],
      projectImages: [c1, c2, c3, c4, c5, c6]
    },
    {
      id: 58,
      category: 'webdev',
      title: 'Teakit Furniture Website',
      description: 'Furniture store opening website',
      image: t1,
      tags: ['HTML', 'CSS', 'JavaScript', 'Furniture', 'E-commerce'],
      client: 'Teakit Furniture',
      detailedDescription: 'Modern furniture website built with HTML, CSS, and JavaScript showcasing product catalog.',
      services: ['Frontend Development', 'UI/UX Design', 'Product Showcase', 'Contact Integration', 'Responsive Layout'],
      projectImages: [t1, t2, t3, t4, teakitlogo]
    },
    {
      id: 59,
      category: 'webdev',
      title: 'Laadly Business Platform',
      description: 'MERN stack business platform with WhatsApp integration',
      image: l1,
      tags: ['MERN Stack', 'WhatsApp API', 'Business Platform', 'Full Stack'],
      client: 'Laadly',
      detailedDescription: 'Business platform built on MERN stack featuring WhatsApp integration for customer communication.',
      services: ['Full Stack Development', 'WhatsApp Integration', 'User Management', 'Business Tools', 'API Development'],
      projectImages: [l1, l2, l3, l4, l5, llogo]
    },
    {
      id: 60,
      category: 'webdev',
      title: 'KVA Business Website',
      description: 'Professional business website for KVA',
      image: KVA1,
      tags: ['Business Website', 'Professional Design', 'Corporate Branding'],
      client: 'KVA',
      detailedDescription: 'Professional business website built for KVA featuring modern design and responsive layout.',
      services: ['Website development', 'Responsive Development', 'Business Presentation', 'Corporate Branding'],
      projectImages: [KVA1, KVA2, KVA3, KVA4]
    },
    
    // Unit Printing Project
    {
      id: 61,
      category: 'print',
      title: 'Unit Printing',
      description: 'High-quality printing and branding solutions',
      image: Unit1,
      tags: ['Printing Services', 'Branding Materials', 'Quality Printing'],
      client: 'Unit Printing',
      detailedDescription: 'Professional printing and branding agency providing high-quality printing services.',
      services: ['Printing Sheet', 'Printed Stickers', 'Printing Machine', 'Posters'],
      projectImages: [Unit1, Unit2, Unit3, Unit4]
    },

    // Political Projects
    {
      id: 62,
      category: 'political',
      subCategory: 'bjp',
      title: 'BJP Election Campaign',
      description: 'Political campaign branding and advertising for BJP',
      image: BJP,
      tags: ['Election Campaign', 'Political Branding', 'Rally Organization'],
      client: 'BJP',
      detailedDescription: 'Comprehensive political campaign including rally organization and voter outreach.',
      services: ['Rally Organization', 'Banner Design', 'Promotional Materials', 'Voter Outreach'],
      projectImages: [BJP, BJP, BJP, BJP]
    },
    {
      id: 63,
      category: 'political',
      subCategory: 'congress',
      title: 'Congress Political Campaign',
      description: 'Election campaign branding and strategy for Congress',
      image: Congress,
      tags: ['Political Strategy', 'Campaign Design', 'Public Outreach'],
      client: 'Congress',
      detailedDescription: 'Complete political campaign strategy including public meetings and digital outreach.',
      services: ['Public Meetings', 'Promotional Materials', 'Digital Outreach', 'Campaign Strategy'],
      projectImages: [Congress, Congress, Congress, Congress]
    },
    {
      id: 64,
      category: 'political',
      subCategory: 'tdp',
      title: 'TDP Election Campaign',
      description: 'Political branding and campaign management for TDP',
      image: TDP1,
      tags: ['Election Management', 'Party Branding', 'Voter Engagement'],
      client: 'TDP',
      detailedDescription: 'End-to-end election campaign management for TDP.',
      services: ['Campaign Management', 'Public Outreach', 'Strategic Planning', 'Material Design'],
      projectImages: [TDP1, TDP2, TDP3, TDP1]
    },
    {
      id: 65,
      category: 'political',
      subCategory: 'Brs',
      title: 'BRS Political Campaign',
      description: 'Campaign branding and political advertising for BRS',
      image: TRS,
      tags: ['Political Advertising', 'Campaign Branding', 'Public Relations'],
      client: 'TRS',
      detailedDescription: 'Political campaign branding and advertising strategy for TRS.',
      services: ['Political Advertising', 'Public Relations', 'Media Management', 'Voter Communication'],
      projectImages: [TRS, TRS, TRS, TRS]
    }
  ];

  // Combined portfolio items
  const allWorkItems = [
    // EDUCATIONAL INSTITUTIONS PORTFOLIO - FIRST CARD
    {
      id: 5,
      category: 'education',
      title: 'Educational Institutions Portfolio',
      description: 'Complete educational branding for 21+ institutions',
      image: ai,
      tags: ['School Branding', 'Admission Campaign', 'Educational Design', '21+ Institutions'],
      client: 'Various Educational Institutions',
      detailedDescription: 'Comprehensive educational branding campaigns for 21+ institutions including campus signage, admission banners, promotional materials, and complete marketing solutions.',
      services: [
        'AI Public School Branding',
        'Ankuram Academy Campaign', 
        'Euro Kids Preschool',
        'Global Art Institute',
        'Grace International',
        'Hello Kids Preschool',
        'Holy Mary School',
        'Honeybee Play School',
        'Iris Educational Center',
        'Kangaroo Kids Preschool',
        'Kiddos Academy',
        'Little Orchaid Preschool',
        'Little Ville Academy',
        'London Public School',
        'Mamta High School',
        'Maple Bear Canadian School',
        'Rainbow School',
        'RVC Academy',
        'Smart Zen Academy',
        'Sri Vaidya Educational',
        'ST Educational Institute'
      ],
      projectImages: [
        ai, ankuram, eurokids, globalart, grace, hellokids, holy, honeybee, 
        iris, kangaroo, kiddos, littleorchaid, littleville, london, mamta, 
        maplebear, rainbow, rvc, smartzen, srivaidya, st
      ]
    },
    ...otherProjects
  ];

  // Filter logic
  const filteredItems = activeCategory === 'all' 
    ? allWorkItems
    : activeCategory === 'education'
    ? [...educationalProjects, ...individualEducationalProjects]
    : activeCategory === 'political' && activeSubCategory !== 'all'
      ? otherProjects.filter(
          item => item.category === 'political' && item.subCategory === activeSubCategory
        )
      : otherProjects.filter(item => item.category === activeCategory);

  // Responsive styles with media queries - COMPLETELY FIXED
  const responsiveStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Reset and base styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .portfolio-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 20px;
      width: 100%;
    }

    .portfolio-title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      color: #1e40af;
      margin-bottom: 20px;
    }

    .portfolio-subtitle {
      font-size: 18px;
      text-align: center;
      color: #6b7280;
      margin-bottom: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .filter-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin-bottom: 50px;
    }

    .filter-btn {
      padding: 12px 24px;
      border-radius: 25px;
      border: 2px solid #3b82f6;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: transparent;
      color: #3b82f6;
      white-space: nowrap;
    }

    .filter-btn.active {
      background-color: #3b82f6;
      color: white;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
      width: 100%;
    }

    /* Card styles */
    .portfolio-card {
      background-color: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      width: 100%;
    }

    .portfolio-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 250px;
      overflow: hidden;
      background-color: #f8fafc;
    }

    .portfolio-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
      display: block;
    }

    .portfolio-card:hover .portfolio-image {
      transform: scale(1.05);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(30, 64, 175, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .portfolio-card:hover .image-overlay {
      opacity: 1;
    }

    .overlay-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.3s ease;
      color: #1e40af;
    }

    .overlay-btn:hover {
      transform: scale(1.1);
    }

    .card-content {
      padding: 25px;
    }

    .brand-logo {
      height: 50px;
      max-width: 200px;
      object-fit: contain;
      margin-bottom: 15px;
      display: block;
    }

    .card-title {
      font-size: 20px;
      font-weight: bold;
      color: #1e40af;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .card-description {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 15px;
    }

    .tag {
      background-color: #f1f5f9;
      color: #475569;
      font-size: 12px;
      padding: 5px 10px;
      border-radius: 15px;
      font-weight: 500;
    }

    /* MODAL STYLES - COMPLETELY FIXED FOR WHITE SPACE */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      overflow-y: auto;
    }

   .modal-container {
  background-color: white;
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  margin: auto;
}

    .modal-content {
      padding: 40px;
      width: 100%;
    }

    .modal-image-container {
      position: relative;
      width: 100%;
      height: 400px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 20px;
      background-color: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-main-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    /* FIX: Thumbnail grid with NO white space */
    .thumbnail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 10px;
      margin-top: 15px;
      width: 100%;
    }

    .thumbnail-item {
      position: relative;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
      border: 3px solid transparent;
      transition: all 0.3s ease;
      background-color: #f1f5f9;
      width: 100%;
      padding-top: 100%; /* Creates square aspect ratio */
      aspect-ratio: 1 / 1;
    }

    .thumbnail-item.active {
      border-color: #1e40af;
    }

    .thumbnail-item:hover {
      transform: scale(1.05);
    }

    .thumbnail-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .thumbnail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Modal navigation */
    .close-modal-btn {
      position: sticky;
      top: 20px;
      right: 20px;
      float: right;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #1e40af;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 20px;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
    }

    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(30, 64, 175, 0.8);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      z-index: 10;
    }

    .nav-arrow:hover {
      background-color: rgba(30, 64, 175, 1);
    }

    .nav-arrow-left {
      left: 20px;
    }

    .nav-arrow-right {
      right: 20px;
    }

    .service-text-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(30, 64, 175, 0.9);
      color: white;
      padding: 20px;
      text-align: center;
    }

    .no-projects {
      text-align: center;
      padding: 60px 20px;
      color: #6b7280;
    }

    /* RESPONSIVE BREAKPOINTS - 100% MOBILE RESPONSIVE */
    
    /* Large screens */
    @media (min-width: 1025px) and (max-width: 1200px) {
      .portfolio-container {
        padding: 70px 30px;
      }
      
      .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
      }
      
      .modal-image-container {
        height: 350px;
      }
    }

    /* Tablets */
    @media (min-width: 769px) and (max-width: 1024px) {
      .portfolio-container {
        padding: 60px 25px;
      }
      
      .portfolio-title {
        font-size: 32px;
      }
      
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .modal-image-container {
        height: 320px;
      }
      
      .modal-content {
        padding: 30px;
      }
      
      .filter-btn {
        padding: 10px 18px;
        font-size: 13px;
      }
      
      .thumbnail-grid {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 8px;
      }
    }

    /* Mobile phones */
    @media (max-width: 768px) {
      .portfolio-container {
        padding: 50px 16px;
      }
      
      .portfolio-title {
        font-size: 26px;
        margin-bottom: 15px;
      }
      
      .portfolio-subtitle {
        font-size: 15px;
        margin-bottom: 30px;
        padding: 0 5px;
      }
      
      .filter-container {
        gap: 8px;
        margin-bottom: 30px;
        justify-content: center;
      }
      
      .filter-btn {
        padding: 8px 14px;
        font-size: 11px;
        border-radius: 20px;
      }
      
      .filter-btn svg {
        width: 14px;
        height: 14px;
      }
      
      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .image-container {
        height: 200px;
      }
      
      .card-content {
        padding: 20px;
      }
      
      .card-title {
        font-size: 18px;
      }
      
      .brand-logo {
        height: 40px;
        max-width: 150px;
      }

      /* Mobile modal fixes - NO WHITE SPACE */
      .modal-overlay {
        padding: 10px;
      }
      
      .modal-container {
        max-height: 98vh;
        border-radius: 12px;
      }
      
      .modal-content {
        padding: 20px;
      }
      
      .modal-title {
        font-size: 22px !important;
      }
      
      .modal-image-container {
        height: 220px;
        border-radius: 8px;
      }
      
      .modal-main-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
      
      .service-text-overlay {
        padding: 12px;
      }
      
      .service-text-overlay h3 {
        font-size: 14px !important;
      }
      
      .service-text-overlay p {
        font-size: 11px !important;
      }
      
      .thumbnail-grid {
        grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
        gap: 6px;
        margin-top: 10px;
      }
      
      .thumbnail-item {
        border-radius: 6px;
        border-width: 2px;
        padding-top: 100%;
      }
      
      .thumbnail-image {
        object-fit: cover;
      }
      
      .nav-arrow {
        width: 30px !important;
        height: 30px !important;
        font-size: 16px !important;
      }
      
      .nav-arrow-left {
        left: 10px;
      }
      
      .nav-arrow-right {
        right: 10px;
      }
      
      .close-modal-btn {
        top: 8px !important;
        right: 8px !important;
        width: 30px !important;
        height: 30px !important;
        font-size: 16px !important;
        margin: 10px;
      }
    }

    /* Small mobile phones */
    @media (max-width: 480px) {
      .portfolio-container {
        padding: 40px 12px;
      }
      
      .portfolio-title {
        font-size: 22px;
      }
      
      .portfolio-subtitle {
        font-size: 14px;
        margin-bottom: 25px;
      }
      
      .filter-btn {
        padding: 6px 12px;
        font-size: 10px;
        gap: 4px;
      }
      
      .filter-btn svg {
        width: 12px;
        height: 12px;
      }
      
      .image-container {
        height: 170px;
      }
      
      .card-content {
        padding: 15px;
      }
      
      .card-title {
        font-size: 16px;
      }
      
      .brand-logo {
        height: 35px;
        max-width: 120px;
        margin-bottom: 10px;
      }
      
      .tag {
        font-size: 10px;
        padding: 4px 8px;
      }

      .modal-content {
        padding: 15px;
      }
      
      .modal-image-container {
        height: 180px;
      }
      
      .modal-title {
        font-size: 18px !important;
        margin-bottom: 10px !important;
      }
      
      .modal-container {
        max-height: 99vh;
      }
      
      .thumbnail-grid {
        grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
        gap: 5px;
      }
      
      .thumbnail-item {
        border-radius: 4px;
      }
      
      .service-text-overlay {
        padding: 8px;
      }
      
      .service-text-overlay h3 {
        font-size: 12px !important;
      }
      
      .service-text-overlay p {
        font-size: 10px !important;
      }
      
      .nav-arrow {
        width: 25px !important;
        height: 25px !important;
        font-size: 14px !important;
      }
      
      .close-modal-btn {
        width: 28px !important;
        height: 28px !important;
        font-size: 14px !important;
        margin: 8px;
      }
    }
  `;

  return (
    <section id="portfolio" style={{ backgroundColor: '#f8fafc', paddingTop: '10px', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <style>{responsiveStyles}</style>
      
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-subtitle">
          Showcasing our successful projects across branding, digital marketing, web development, education, retail, jewellery, print, and political campaigns
        </p>

        {/* Category Filters */}
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubCategory('all');
              }}
            >
              <Filter size={16} />
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-card"
              style={{
                animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <button
                    className="overlay-btn"
                    onClick={() => openProjectModal(item)}
                    aria-label="View project details"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <div className="card-content">
                {/* Brand Logo */}
                <div>
                  <img 
                    src={brandLogos[item.client] || `https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=${encodeURIComponent(item.client)}`}
                    alt={item.client}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="tags-container">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-projects">
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>No projects found</h3>
            <p>Try selecting a different category to view our work</p>
          </div>
        )}
      </div>

      {/* Project Details Modal - COMPLETELY FIXED WHITE SPACE */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-modal-btn" onClick={closeModal} aria-label="Close modal">
              ×
            </button>

            {/* Modal Content */}
            <div className="modal-content">
              {/* Header with Brand Logo */}
              <div style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <img 
                    src={brandLogos[selectedProject.client] || `https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=${encodeURIComponent(selectedProject.client)}`}
                    alt={selectedProject.client}
                    style={{ 
                      height: '60px', 
                      maxWidth: '200px',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>
                <h2 className="modal-title" style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '15px'
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Image Gallery and Services */}
              <div style={{ marginBottom: '30px' }}>
                <div className="modal-image-container">
                  <img
                    src={selectedProject.projectImages[selectedServiceIndex]}
                    alt={`${selectedProject.title} - ${selectedProject.services[selectedServiceIndex]}`}
                    className="modal-main-image"
                    loading="lazy"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.projectImages.length > 1 && (
                    <>
                      <button
                        onClick={prevService}
                        className="nav-arrow nav-arrow-left"
                        aria-label="Previous service"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextService}
                        className="nav-arrow nav-arrow-right"
                        aria-label="Next service"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Service Text Overlay */}
                  <div className="service-text-overlay">
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      margin: '0 0 5px 0'
                    }}>
                      {selectedProject.services[selectedServiceIndex]}
                    </h3>
                    <p style={{
                      margin: 0,
                      opacity: 0.9,
                      fontSize: '14px'
                    }}>
                      {selectedServiceIndex + 1} of {selectedProject.services.length} services
                    </p>
                  </div>
                </div>

                {/* Thumbnail Navigation - COMPLETELY FIXED NO WHITE SPACE */}
                {selectedProject.projectImages.length > 1 && (
                  <div className="thumbnail-grid">
                    {selectedProject.services.map((service, index) => (
                      <div
                        key={index}
                        className={`thumbnail-item ${selectedServiceIndex === index ? 'active' : ''}`}
                        onClick={() => setSelectedServiceIndex(index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${service}`}
                      >
                        <div className="thumbnail-image-wrapper">
                          <img
                            src={selectedProject.projectImages[index] || selectedProject.projectImages[0]}
                            alt={service}
                            className="thumbnail-image"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags */}
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '15px'
                }}>
                  Project Tags
                </h3>
                <div className="tags-container">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '20px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;