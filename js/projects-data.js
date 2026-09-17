/**
 * =========================================================
 *  Comprehensive Projects Data (12 Enterprise Solutions)
 * =========================================================
 */

const PROJECTS_DATA = [
  {
    id: 'p1',
    title: 'Official Web Application & LMS',
    typeBadge: 'Web / SaaS',
    overview: 'Full-stack enterprise educational and business management platform powering course lifecycles, digital products, and automated credential issuance.',
    highlights: [
      { key: 'Core Architecture', text: 'Built scalable modular backend using Node.js, Express.js, and optimized relational MySQL schema with indexing.' },
      { key: 'Automated Certification', text: 'Engineered automated certificate generation with unique QR verification and dynamic PDF rendering engines.' },
      { key: 'Integrated Commerce', text: 'Implemented multi-channel payment gateway flows, instant digital invoicing, and webhook-driven purchase receipts.' },
      { key: 'Live Engagement', text: 'Embedded customer live chat, interactive gamified user modules, and real-time administrative analytics dashboards.' }
    ],
    techTags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Firebase', 'JWT', 'REST API'],
    linkText: 'www.khubsoja.com',
    linkUrl: 'https://www.khubsoja.com',
    isExternal: true
  },
  {
    id: 'p2',
    title: 'Chat Automation & Multichannel AI Agent',
    typeBadge: 'AI & Full Stack',
    overview: 'High-throughput business messaging automation platform integrating OpenAI models to manage omnichannel customer conversations across Facebook and WhatsApp.',
    highlights: [
      { key: 'AI Inference Pipeline', text: 'Integrated OpenAI APIs with dynamic context injection, prompt chaining, and intent classification for accurate automated replies.' },
      { key: 'High-Performance Backend', text: 'Architected async Python FastAPI microservices with Redis message queues and distributed caching to ensure sub-second response times.' },
      { key: 'Smart Omnichannel Inbox', text: 'Unified message feeds, live automated comment sentiment moderation, and scheduled marketing post pipelines.' },
      { key: 'Monetization & Billing', text: 'Designed automated prepaid token wallet, real-time consumption meter, and automated monthly subscription billing.' }
    ],
    techTags: ['React.js', 'TypeScript', 'FastAPI', 'Python', 'MySQL', 'Redis', 'Docker', 'OpenAI API'],
    linkText: 'www.chatbot.khubsoja.com',
    linkUrl: 'https://www.chatbot.khubsoja.com',
    isExternal: true
  },
  {
    id: 'p3',
    title: 'Card To Contact — AI Smart Card Scanner',
    typeBadge: 'Android & Multimodal AI',
    overview: 'Production Android application utilizing Multimodal Vision AI to digitize physical visiting cards and seamlessly sync structured contacts to Android native storage.',
    highlights: [
      { key: 'Multimodal Vision Pipeline', text: 'Implemented camera scanning with pre-processing, feeding OCR outputs into OpenAI and Gemini Vision APIs for field classification.' },
      { key: 'Smart Contact Extraction', text: 'Heuristically structured unstructured OCR text into verified Name, Organization, Designation, Phone, Email, and Location fields.' },
      { key: 'Native Android Sync', text: 'Leveraged Android ContactsContract API for one-click batch insertion directly into phone contacts and Google Contacts sync.' },
      { key: 'Cloud Backup & Sync', text: 'Developed Node.js/MySQL cloud sync with Firebase Auth for cross-device contact backup and historical card cataloging.' }
    ],
    techTags: ['Kotlin', 'Android Jetpack', 'Express.js', 'MySQL', 'OpenAI Vision', 'Gemini AI', 'Firebase'],
    linkText: 'Google Play Store',
    linkUrl: 'https://play.google.com/store/apps/details?id=com.khubsoja.cardtocontact',
    isExternal: true
  },
  {
    id: 'p4',
    title: 'Auto Call Recorder & Telephony Suite',
    typeBadge: 'Android Native',
    overview: 'Enterprise-grade Android telephony utility designed for background two-way voice call recording, audio processing, and local database indexing.',
    highlights: [
      { key: 'Background Telephony Engine', text: 'Engineered persistent Android Foreground Services with AudioRecord APIs capturing high-fidelity two-way voice streams.' },
      { key: 'Audio Optimization', text: 'Implemented on-the-fly audio compression (AAC/AMR) reducing storage footprint while maintaining vocal clarity.' },
      { key: 'Local Metadata Catalog', text: 'Indexed call duration, timestamp, caller ID, and audio file paths inside structured local SQLite database.' },
      { key: 'Wireless Call Notification', text: 'Built companion background receiver forwarding incoming call alerts and notifications to connected wireless systems.' }
    ],
    techTags: ['Kotlin', 'Android Services', 'SQLite', 'AudioRecord API', 'Coroutines', 'BroadcastReceiver'],
    badgeText: 'Production Ready',
    isBadge: true
  },
  {
    id: 'p5',
    title: 'Tailoring & Custom Apparel Management ERP',
    typeBadge: 'Web / SaaS',
    overview: 'Comprehensive bespoke clothing and tailoring ERP platform streamlining customer anatomical measurements, artisan bidding, and production workflows.',
    highlights: [
      { key: 'Anatomical Measurements Vault', text: 'Built custom dynamic measurement schemas tailored for diverse traditional and formal apparel styles.' },
      { key: 'Tailor Bidding System', text: 'Created multi-vendor bidding workflow allowing shop managers to allocate orders to skilled tailors based on workload.' },
      { key: 'Lifecycle Order Tracking', text: 'Real-time production stages: Pattern Cutting -> Stitching -> Quality Inspection -> Packaging -> Delivery.' },
      { key: 'Automated Billing & Receipts', text: 'Generates client PDF receipts, delivery slips, and SMS status dispatch alerts on state transitions.' }
    ],
    techTags: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'PDFKit'],
    linkText: 'www.selaibari.com',
    linkUrl: 'https://www.selaibari.com',
    isExternal: true
  },
  {
    id: 'p6',
    title: 'Smart Hostel & Resident Management Ecosystem',
    typeBadge: 'Mobile & Web ERP',
    overview: 'End-to-end administration software for student dormitories and residential hostels, automating dynamic room allocation and financial accounting.',
    highlights: [
      { key: 'Dynamic Inventory Management', text: 'Visual room and bed occupancy grid displaying occupied, vacant, reserved, and maintenance states in real-time.' },
      { key: 'Automated Rent Billing', text: 'Calculates monthly rent, meal charges, and utilities; generates itemized invoices and sends payment reminders.' },
      { key: 'Digital Tenant Onboarding', text: 'Captures guardian verification, emergency contacts, national ID scans, and institutional verification records.' },
      { key: 'Cross-Platform App', text: 'Constructed responsive Flutter client for hostel managers and residents alongside centralized Node.js REST APIs.' }
    ],
    techTags: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'Firebase Cloud Messaging', 'REST API'],
    linkText: 'www.aloyhostel.com.bd',
    linkUrl: 'https://www.aloyhostel.com.bd',
    isExternal: true
  },
  {
    id: 'p7',
    title: 'Bebshar Poristhiti — Retail ERP & Stock Deductor',
    typeBadge: 'Mobile ERP',
    overview: 'Mobile enterprise management app designed for retail outlets and restaurants, automating recipe-based raw material deduction upon POS sales.',
    highlights: [
      { key: 'Recipe-Driven Stock Deduction', text: 'Configured recipe ingredient bills (BOM); selling a dish automatically deducts raw ingredient weights from inventory.' },
      { key: 'Low-Stock Forecasting', text: 'Real-time threshold alerts notify store managers before critical materials deplete to prevent supply disruptions.' },
      { key: 'Cashflow & Profit Analytics', text: 'Generates daily profit/loss statements, gross revenue summaries, and categorized expense tracking.' },
      { key: 'Cloud Firestore Sync', text: 'Leveraged offline-first Cloud Firestore with multi-role staff access control and real-time sync across devices.' }
    ],
    techTags: ['Flutter', 'Dart', 'Cloud Firestore', 'Firebase Auth', 'Cloud Storage', 'Provider State'],
    badgeText: 'Enterprise Mobile Solution',
    isBadge: true
  },
  {
    id: 'p8',
    title: 'Sadaqah BD — Crowdfunding & Transparent Charity',
    typeBadge: 'Web Portal',
    overview: 'Secure online fundraising and charity crowdfunding web portal connecting verified humanitarian initiatives with global philanthropic donors.',
    highlights: [
      { key: 'Verified Campaign Lifecycle', text: 'Multi-stage verification pipeline for medical emergency, education, and disaster relief donation campaigns.' },
      { key: 'Secure Multi-Gateway Checkout', text: 'Integrated SSLCommerz/bKash/Nagad digital wallets with instant automated donor receipt generation.' },
      { key: 'Transparency Ledger', text: 'Real-time donation progress bars, disbursement evidence logs, and optional donor anonymity settings.' },
      { key: 'Optimized Server Architecture', text: 'Full-stack TypeScript architecture built with Next.js SSR for high SEO discoverability and PostgreSQL reliability.' }
    ],
    techTags: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'SSLCommerz', 'REST API'],
    badgeText: 'Active Non-Profit Platform',
    isBadge: true
  },
  {
    id: 'p9',
    title: 'Hilltone Islamic School & Madrasah ERP',
    typeBadge: 'Mobile & Web ERP',
    overview: 'Comprehensive academic institution management system managing student admissions, digital fee collection, syllabus progress, and attendance.',
    highlights: [
      { key: 'Academic Administration', text: 'Manages student profiles, class rosters, examination marks recording, and automated report card tabulation.' },
      { key: 'Fee & Payment Tracking', text: 'Automated monthly tuition fee calculation, voucher generation, overdue alerts, and partial payment tracking.' },
      { key: 'Daily Attendance Engine', text: 'One-tap biometric and mobile roll-call system with instant SMS alerts sent to parents for absent students.' },
      { key: 'Curriculum & Hifz Progress', text: 'Specialized Islamic curriculum tracking module logging daily Quran recitation, memorization targets, and revisions.' }
    ],
    techTags: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'SMS Gateway API', 'REST API'],
    badgeText: 'Institutional ERP',
    isBadge: true
  },
  {
    id: 'p10',
    title: 'Bangla Muslim — Islamic Lifestyle & Community Portal',
    typeBadge: 'Web Platform',
    overview: 'Feature-rich web platform providing localized Islamic resources, dynamic prayer calculation algorithms, and community utility directories.',
    highlights: [
      { key: 'Astronomical Prayer Calculation', text: 'Implemented high-precision astronomical algorithms calculating daily prayer and Iftar/Sehri times by geo-coordinates.' },
      { key: 'Indexed Quran & Hadith Search', text: 'Fast, full-text Bengali and Arabic keyword search across verified translations with audio recitation streaming.' },
      { key: 'Halal Community Directory', text: 'Geolocated directory indexing verified halal establishments, mosques, and Islamic learning centers.' },
      { key: 'Responsive Offline PWA', text: 'Progressive Web App (PWA) caching essential daily prayer schedules and compass Qibla direction offline.' }
    ],
    techTags: ['TypeScript', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'PWA', 'Geolocation API'],
    badgeText: 'Community Platform',
    isBadge: true
  },
  {
    id: 'p11',
    title: 'AutoHouse — Automobile Dealership & CRM',
    typeBadge: 'Full Stack Web',
    overview: 'Modern automotive dealership web portal providing comprehensive vehicle catalogs, customer financing calculators, and showroom CRM workflows.',
    highlights: [
      { key: 'Dynamic Vehicle Inventory', text: 'Faceted search filtering vehicles by brand, mileage, transmission, fuel type, and price brackets with image galleries.' },
      { key: 'Loan & EMI Financial Calculator', text: 'Interactive financial calculator computing monthly loan installments, down payments, and amortized interest rates.' },
      { key: 'Test Drive Scheduling CRM', text: 'Customer booking engine capturing buyer preferences and automatically dispatching leads to showroom sales representatives.' },
      { key: 'Admin Showroom Panel', text: 'Complete inventory management backend supporting vehicle condition inspections and trade-in valuation requests.' }
    ],
    techTags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'Cloudinary', 'REST API'],
    badgeText: 'Automotive Solution',
    isBadge: true
  },
  {
    id: 'p12',
    title: 'SmartFarm — Agriculture & Dairy Livestock Manager',
    typeBadge: 'AgriTech SaaS',
    overview: 'Data-driven agricultural management solution optimizing dairy cattle health logs, feed rationing, daily milk yield analytics, and farm profitability.',
    highlights: [
      { key: 'Livestock Health & Vaccinations', text: 'Tracks individual animal genealogy, veterinary inspection history, vaccination calendar alerts, and breeding cycles.' },
      { key: 'Milk Production Tracking', text: 'Daily batch milk yield logging with fat content analysis, bulk chilling records, and commercial distribution invoices.' },
      { key: 'Feed Rationing & Cost Control', text: 'Calculates optimal nutritional feed rations based on animal weight and monitors daily consumption against production output.' },
      { key: 'Profitability & Yield Analytics', text: 'Visual charts plotting revenue from sales against feed/medicine expenses to calculate net monthly farm margin.' }
    ],
    techTags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'Chart.js', 'REST API'],
    badgeText: 'AgriTech Suite',
    isBadge: true
  },
  {
    id: 'p13',
    title: 'Wireless Call Receiver — Assistive Telephony Suite',
    typeBadge: 'Android & Bluetooth Tech',
    overview: 'Native Android assistive accessibility tool engineered for blind and visually impaired individuals to effortlessly manage and route cellular and VoIP voice calls using Bluetooth hardware controls.',
    highlights: [
      { key: 'Accessibility Telecom Framework', text: 'Built custom integration with Android Telecom APIs and Accessibility Services to intercept call states in real-time.' },
      { key: 'Bluetooth Hardware Integration', text: 'Implemented low-latency Bluetooth HID and MediaButton event receivers to map physical tactile triggers to call actions.' },
      { key: 'Voice & TTS Vocal Feedback', text: 'Integrated Text-to-Speech (TTS) engine announcing caller ID and battery status alerts directly through wireless headsets.' },
      { key: 'Resilient Background Service', text: 'Constructed battery-optimized Android Foreground Service with wakelocks ensuring 24/7 background operational readiness.' }
    ],
    techTags: ['Kotlin', 'Android Telecom API', 'Bluetooth HID', 'TTS Engine', 'AccessibilityService', 'Coroutines'],
    badgeText: 'Assistive Tech Solution',
    isBadge: true
  },
  {
    id: 'p14',
    title: 'Kings Den Trade Corp. — Global Trade & Green Tech Advisory',
    typeBadge: 'Next.js 16 Enterprise Portal',
    overview: 'High-performance corporate international trade and mega-project advisory web portal showcasing AI-driven green technology, sustainable engineering, and infrastructure consulting.',
    highlights: [
      { key: 'Next.js 16 & React 19 Architecture', text: 'Developed with Next.js 16, React 19, TypeScript, and Server Components for optimal rendering speeds and modern UI ergonomics.' },
      { key: 'Automated FTPS CI/CD Pipeline', text: 'Configured automated GitHub Actions workflow building static exports and executing zero-downtime FTPS deployments to shared hosting.' },
      { key: 'Consultancy Competencies Showcase', text: 'Engineered dynamic UI sections highlighting clean energy advisory, transport mega-projects, and corporate credentials.' },
      { key: 'Responsive Mobile-First UI', text: 'Implemented fluid responsive drawer navigation, accessible dialogs, and interactive corporate portfolio documentation downloads.' }
    ],
    techTags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'FTPS Pipeline'],
    badgeText: 'Corporate Trade Portal',
    isBadge: true
  }
];
