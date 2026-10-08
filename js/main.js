/**
 * PM SHRI ZILLA PARISHAD PRASHALA, GANORI
 * Main Application & Interactivity Engine
 * 10 Advanced Labs | 22 Staff Profiles | 2 Years Activities
 * Pure Vanilla JS - Zero External Runtime Dependencies - GitHub Pages Ready
 */

// =============================================================================
// 1. DATA REPOSITORY: 10 ADVANCED LABORATORIES
// =============================================================================
const LABS_DATA = [
  {
    id: 'ai-lab',
    name: 'AI Laboratory',
    nameMr: 'कृत्रिम बुद्धिमत्ता (AI) प्रयोगशाळा',
    tag: '1st in Maharashtra School Education',
    badge: 'State Pioneer',
    tagMr: "महाराष्ट्राच्या शालेय शिक्षणातील १ ली AI लॅब",
    badgeMr: "महाराष्ट्र अग्रदूत",
    aboutMr: "महाएआय मिशन अंतर्गत स्थापन झालेली ही महाराष्ट्र राज्य शालेय शिक्षणातील पहिलीवहिली कृत्रिम बुद्धिमत्ता (AI) प्रयोगशाळा आहे. HP India Foundation आणि लर्निंग लिंक्स फाउंडेशन (LLF दिल्ली) यांच्या सहकार्याने व SCERT पुणे यांच्या अभ्यासक्रमानुसार ही लॅब चालवली जाते. ग्रामीण विद्यार्थ्यांना AI, कॉम्प्युटर व्हिजन आणि मशीन लर्निंगचे मूलभूत शिक्षण येथे दिले जाते.",
    curriculumMr: "महाएआय मिशन व SCERT पुणे एकात्मिक AI अभ्यासक्रम",
    equipmentMr: "HP हाय-परफॉर्मन्स वर्कस्टेशन्स, स्मार्ट डिस्प्ले, व्हिजन किट्स, पायथन प्रोग्रॅमिंग लॅब",
    activitiesMr: ["कृत्रिम बुद्धिमत्ता व मशीन लर्निंगची ओळख", "कॉम्प्युटर व्हिजन, चेहरा ओळख व इमेज प्रोसेसिंग", "स्पीच सिंथेसिस व नॅचरल लँग्वेज प्रोसेसिंग (NLP)", "पायथन प्रोग्रॅमिंग व लॉजिक बिल्डिंग", "जबाबदार AI व डिजिटल तंत्रज्ञानाची भविष्यातील दिशा"],
    tagMr: "महाराष्ट्राच्या शालेय शिक्षणातील १ ली AI लॅब",
    badgeMr: "महाराष्ट्र अग्रदूत",
    aboutMr: "महाएआय मिशन अंतर्गत स्थापन झालेली ही महाराष्ट्र राज्य शालेय शिक्षणातील पहिलीवहिली कृत्रिम बुद्धिमत्ता (AI) प्रयोगशाळा आहे. HP India Foundation आणि लर्निंग लिंक्स फाउंडेशन (LLF दिल्ली) यांच्या सहकार्याने व SCERT पुणे यांच्या अभ्यासक्रमानुसार ही लॅब चालवली जाते. ग्रामीण विद्यार्थ्यांना AI, कॉम्प्युटर व्हिजन आणि मशीन लर्निंगचे मूलभूत शिक्षण येथे दिले जाते.",
    curriculumMr: "महाएआय मिशन व SCERT पुणे एकात्मिक AI अभ्यासक्रम",
    equipmentMr: "HP हाय-परफॉर्मन्स वर्कस्टेशन्स, स्मार्ट डिस्प्ले, व्हिजन किट्स, पायथन प्रोग्रॅमिंग लॅब",
    activitiesMr: ["कृत्रिम बुद्धिमत्ता व मशीन लर्निंगची ओळख", "कॉम्प्युटर व्हिजन, चेहरा ओळख व इमेज प्रोसेसिंग", "स्पीच सिंथेसिस व नॅचरल लँग्वेज प्रोसेसिंग (NLP)", "पायथन प्रोग्रॅमिंग व लॉजिक बिल्डिंग", "जबाबदार AI व डिजिटल तंत्रज्ञानाची भविष्यातील दिशा"],
    tagMr: "महाराष्ट्राच्या शालेय शिक्षणातील १ ली AI लॅब",
    badgeMr: "महाराष्ट्र अग्रदूत",
    aboutMr: "महाएआय मिशन अंतर्गत स्थापन झालेली ही महाराष्ट्र राज्य शालेय शिक्षणातील पहिलीवहिली कृत्रिम बुद्धिमत्ता (AI) प्रयोगशाळा आहे. HP India Foundation आणि लर्निंग लिंक्स फाउंडेशन (LLF दिल्ली) यांच्या सहकार्याने व SCERT पुणे यांच्या अभ्यासक्रमानुसार ही लॅब चालवली जाते. ग्रामीण विद्यार्थ्यांना AI, कॉम्प्युटर व्हिजन आणि मशीन लर्निंगचे मूलभूत शिक्षण येथे दिले जाते.",
    curriculumMr: "महाएआय मिशन व SCERT पुणे एकात्मिक AI अभ्यासक्रम",
    equipmentMr: "HP हाय-परफॉर्मन्स वर्कस्टेशन्स, स्मार्ट डिस्प्ले, व्हिजन किट्स, पायथन प्रोग्रॅमिंग लॅब",
    activitiesMr: ["कृत्रिम बुद्धिमत्ता व मशीन लर्निंगची ओळख", "कॉम्प्युटर व्हिजन, चेहरा ओळख व इमेज प्रोसेसिंग", "स्पीच सिंथेसिस व नॅचरल लँग्वेज प्रोसेसिंग (NLP)", "पायथन प्रोग्रॅमिंग व लॉजिक बिल्डिंग", "जबाबदार AI व डिजिटल तंत्रज्ञानाची भविष्यातील दिशा"],
    about: 'The first-ever Artificial Intelligence Laboratory in Maharashtra State School Education, established under the MahaAI Mission. Supported by HP India Foundation & Learning Links Foundation (LLF Delhi) with curriculum curated by SCERT Pune. Equips rural students with foundational AI, computer vision, and machine learning literacy.',
    curriculum: 'MahaAI Mission & SCERT Pune Integrated AI Curriculum',
    equipment: 'HP High-Performance Workstations, Smart Displays, Vision Kits, Python IDEs',
    heroImage: 'images/ai-lab-classroom.jpg',
    activities: [
      'Foundations of Artificial Intelligence & Machine Learning',
      'Computer Vision, Face Detection & Image Processing',
      'Speech Synthesis & Natural Language Processing demos',
      'Python Programming & Logic Building for Rural Students',
      'Responsible AI, Digital Ethics & Future Tech Exploration'
    ],
    gallery: [
      { src: 'images/ai-lab-classroom.jpg', caption: 'State AI Lab Classroom with Instructor & Students' },
      { src: 'images/ai-lab-students-hp.jpg', caption: 'Students training on HP AI Workstations' },
      { src: 'images/ai-lab-setup.jpg', caption: 'Modern Air-conditioned AI Infrastructure' },
      { src: 'images/ai-lab-cover.jpg', caption: 'HP Foundation & LLF Supported Learning Hub' }
    ]
  },
  {
    id: 'robotics-lab',
    name: 'Robotics & Automation Lab',
    nameMr: 'रोबोटिक्स व ऑटोमेशन लॅब',
    tag: 'Hands-on STEM Innovation',
    badge: 'Prototyping Hub',
    tagMr: "प्रत्यक्ष हँड्स-ऑन STEM नवोपक्रम",
    badgeMr: "प्रोटोटायपिंग हब",
    aboutMr: "विद्यार्थी स्वतः विविध रोबोट्सची रचना, वायरिंग, प्रोग्रॅमिंग आणि चाचणी करतात असे अत्याधुनिक रोबोटिक्स केंद्र. ६ चाकी रिमोट रोव्हरपासून ते स्वयंचलित लिफ्ट आणि अडथळे टाळणाऱ्या रोबोट्सपर्यंत सर्व मॉडेल्स विद्यार्थी स्वतः बनवतात.",
    curriculumMr: "टिंकरिंग STEM व मायक्रोकंट्रोलर इलेक्ट्रॉनिक्स",
    equipmentMr: "६-चाकी रोव्हर चेसिस, मायक्रोकंट्रोलर किट्स, डीसी मोटर्स, सेन्सर्स व बॅटरी पॅक्स",
    activitiesMr: ["६-चाकी रोबोटिक रोव्हर निर्मिती व प्रत्यक्ष मैदानी चाचणी", "मोटराइज्ड स्वयंचलित लिफ्ट मेकॅनिझमचे प्रात्यक्षिक", "इन्फ्रारेड, अल्ट्रासोनिक व प्रकाश सेन्सर्स कॅलिब्रेशन", "मायक्रोकंट्रोलर कोडिंग व रिमोट कंट्रोल मेकॅनिक्स", "आंतरशालेय रोबोटिक्स स्पर्धा व जिल्हास्तरीय प्रात्यक्षिके"],
    tagMr: "प्रत्यक्ष हँड्स-ऑन STEM नवोपक्रम",
    badgeMr: "प्रोटोटायपिंग हब",
    aboutMr: "विद्यार्थी स्वतः विविध रोबोट्सची रचना, वायरिंग, प्रोग्रॅमिंग आणि चाचणी करतात असे अत्याधुनिक रोबोटिक्स केंद्र. ६ चाकी रिमोट रोव्हरपासून ते स्वयंचलित लिफ्ट आणि अडथळे टाळणाऱ्या रोबोट्सपर्यंत सर्व मॉडेल्स विद्यार्थी स्वतः बनवतात.",
    curriculumMr: "टिंकरिंग STEM व मायक्रोकंट्रोलर इलेक्ट्रॉनिक्स",
    equipmentMr: "६-चाकी रोव्हर चेसिस, मायक्रोकंट्रोलर किट्स, डीसी मोटर्स, सेन्सर्स व बॅटरी पॅक्स",
    activitiesMr: ["६-चाकी रोबोटिक रोव्हर निर्मिती व प्रत्यक्ष मैदानी चाचणी", "मोटराइज्ड स्वयंचलित लिफ्ट मेकॅनिझमचे प्रात्यक्षिक", "इन्फ्रारेड, अल्ट्रासोनिक व प्रकाश सेन्सर्स कॅलिब्रेशन", "मायक्रोकंट्रोलर कोडिंग व रिमोट कंट्रोल मेकॅनिक्स", "आंतरशालेय रोबोटिक्स स्पर्धा व जिल्हास्तरीय प्रात्यक्षिके"],
    tagMr: "प्रत्यक्ष हँड्स-ऑन STEM नवोपक्रम",
    badgeMr: "प्रोटोटायपिंग हब",
    aboutMr: "विद्यार्थी स्वतः विविध रोबोट्सची रचना, वायरिंग, प्रोग्रॅमिंग आणि चाचणी करतात असे अत्याधुनिक रोबोटिक्स केंद्र. ६ चाकी रिमोट रोव्हरपासून ते स्वयंचलित लिफ्ट आणि अडथळे टाळणाऱ्या रोबोट्सपर्यंत सर्व मॉडेल्स विद्यार्थी स्वतः बनवतात.",
    curriculumMr: "टिंकरिंग STEM व मायक्रोकंट्रोलर इलेक्ट्रॉनिक्स",
    equipmentMr: "६-चाकी रोव्हर चेसिस, मायक्रोकंट्रोलर किट्स, डीसी मोटर्स, सेन्सर्स व बॅटरी पॅक्स",
    activitiesMr: ["६-चाकी रोबोटिक रोव्हर निर्मिती व प्रत्यक्ष मैदानी चाचणी", "मोटराइज्ड स्वयंचलित लिफ्ट मेकॅनिझमचे प्रात्यक्षिक", "इन्फ्रारेड, अल्ट्रासोनिक व प्रकाश सेन्सर्स कॅलिब्रेशन", "मायक्रोकंट्रोलर कोडिंग व रिमोट कंट्रोल मेकॅनिक्स", "आंतरशालेय रोबोटिक्स स्पर्धा व जिल्हास्तरीय प्रात्यक्षिके"],
    about: 'An advanced robotics learning zone where students build, wire, program, and test functional robots. From 6-wheel remote exploration rovers to motorized elevator mechanisms and obstacle-avoiding bots, students turn theoretical physics and electronics into working machines.',
    curriculum: 'Tinkering STEM & Microcontroller Electronics',
    equipment: '6-Wheel Rover Chassis, Microcontroller Kits, DC Motors, Sensors, Battery Packs',
    heroImage: 'images/robotics-rover-test.jpg',
    activities: [
      '6-Wheel Robotic Rover fabrication & field navigation testing',
      'Motorized automated elevator lift mechanisms',
      'Sensor calibration (Infrared, Ultrasonic & Light sensors)',
      'Basic embedded programming and remote-control mechanics',
      'Inter-school robotics competitions & district showcases'
    ],
    gallery: [
      { src: 'images/robotics-rover-test.jpg', caption: 'Students testing 6-wheel motorized rover & lift model' },
      { src: 'images/robotics-3dprinter-assembly.jpg', caption: 'Students assembling mechanical robotics models in lab' }
    ]
  },
  {
    id: 'astronomy-lab',
    name: 'Astronomy & Space Lab (Tarangan)',
    nameMr: 'एस्ट्रॉनॉमी व अंतराळ संशोधन दालन (तारांगण)',
    tag: '5 ISRO Air-Travel Scholars',
    badge: 'Only ZP School',
    tagMr: "५ इस्रो विमान सफर विजेते विद्यार्थी",
    badgeMr: "एकमेव जि. प. शाळा",
    aboutMr: "व्यावसायिक स्काय-वॉचर दुर्बिणी, तारांगण चकती (स्टार लोकेटर) आणि अंतराळ विज्ञानाचे थेट मॉडेल असलेले विशेष दालन. याच दालनातील अभ्यासातून शाळेतील ५ विद्यार्थ्यांनी विमानाने इस्रो (ISRO) अंतराळ केंद्रांना प्रत्यक्ष भेट देण्याचा ऐतिहासिक बहुमान मिळवला आहे!",
    curriculumMr: "खगोलशास्त्र व अंतराळ विज्ञान साक्षरता",
    equipmentMr: "हाय-पॉवर स्काय-वॉचर टेलिस्कोप, सौर फिल्टर, द्विनेत्री (बायनोक्युलर्स), तारांगण चकती",
    activitiesMr: ["रात्रीचे आकाशदर्शन: चंद्र, गुरु, शनी ग्रहांचे थेट वेध", "प्रमाणित सौर फिल्टर्सच्या साहाय्याने सूर्य डाग निरीक्षण", "हबल व जेम्स वेब दुर्बिणींच्या छायाचित्रांचे विश्लेषण", "उपग्रह कक्षा मेकॅनिक्स व रॉकेट प्रक्षेपणाचे धडे", "राष्ट्रीय स्पेस ऑलिम्पियाड व इस्रो स्पर्धांची तयारी"],
    tagMr: "५ इस्रो विमान सफर विजेते विद्यार्थी",
    badgeMr: "एकमेव जि. प. शाळा",
    aboutMr: "व्यावसायिक स्काय-वॉचर दुर्बिणी, तारांगण चकती (स्टार लोकेटर) आणि अंतराळ विज्ञानाचे थेट मॉडेल असलेले विशेष दालन. याच दालनातील अभ्यासातून शाळेतील ५ विद्यार्थ्यांनी विमानाने इस्रो (ISRO) अंतराळ केंद्रांना प्रत्यक्ष भेट देण्याचा ऐतिहासिक बहुमान मिळवला आहे!",
    curriculumMr: "खगोलशास्त्र व अंतराळ विज्ञान साक्षरता",
    equipmentMr: "हाय-पॉवर स्काय-वॉचर टेलिस्कोप, सौर फिल्टर, द्विनेत्री (बायनोक्युलर्स), तारांगण चकती",
    activitiesMr: ["रात्रीचे आकाशदर्शन: चंद्र, गुरु, शनी ग्रहांचे थेट वेध", "प्रमाणित सौर फिल्टर्सच्या साहाय्याने सूर्य डाग निरीक्षण", "हबल व जेम्स वेब दुर्बिणींच्या छायाचित्रांचे विश्लेषण", "उपग्रह कक्षा मेकॅनिक्स व रॉकेट प्रक्षेपणाचे धडे", "राष्ट्रीय स्पेस ऑलिम्पियाड व इस्रो स्पर्धांची तयारी"],
    tagMr: "५ इस्रो विमान सफर विजेते विद्यार्थी",
    badgeMr: "एकमेव जि. प. शाळा",
    aboutMr: "व्यावसायिक स्काय-वॉचर दुर्बिणी, तारांगण चकती (स्टार लोकेटर) आणि अंतराळ विज्ञानाचे थेट मॉडेल असलेले विशेष दालन. याच दालनातील अभ्यासातून शाळेतील ५ विद्यार्थ्यांनी विमानाने इस्रो (ISRO) अंतराळ केंद्रांना प्रत्यक्ष भेट देण्याचा ऐतिहासिक बहुमान मिळवला आहे!",
    curriculumMr: "खगोलशास्त्र व अंतराळ विज्ञान साक्षरता",
    equipmentMr: "हाय-पॉवर स्काय-वॉचर टेलिस्कोप, सौर फिल्टर, द्विनेत्री (बायनोक्युलर्स), तारांगण चकती",
    activitiesMr: ["रात्रीचे आकाशदर्शन: चंद्र, गुरु, शनी ग्रहांचे थेट वेध", "प्रमाणित सौर फिल्टर्सच्या साहाय्याने सूर्य डाग निरीक्षण", "हबल व जेम्स वेब दुर्बिणींच्या छायाचित्रांचे विश्लेषण", "उपग्रह कक्षा मेकॅनिक्स व रॉकेट प्रक्षेपणाचे धडे", "राष्ट्रीय स्पेस ऑलिम्पियाड व इस्रो स्पर्धांची तयारी"],
    about: 'A dedicated Space Science & Astronomy pavilion featuring professional Sky-Watcher optical telescopes, star locator dials (Tarangan), and interactive celestial displays. Proudly produced 5 students who earned government-sponsored airplane visits to ISRO space centers!',
    curriculum: 'Observational Astronomy & Space Science Literacy',
    equipment: 'High-Power Sky-Watcher Reflecting Telescopes, Sun Filters, Binoculars, Star Dials',
    heroImage: 'images/astronomy-milkyway-display.jpg',
    activities: [
      'Night sky stargazing, planetary tracking (Moon, Jupiter, Saturn)',
      'Solar observation with certified astronomical filters',
      'Hubble & James Webb deep space imagery interpretation',
      'Satellite orbit mechanics and rocket propulsion sessions',
      'Preparation for National Space Olympiads and ISRO exams'
    ],
    gallery: [
      { src: 'images/astronomy-milkyway-display.jpg', caption: 'Interactive Milky Way & Solar System Exhibit' },
      { src: 'images/astronomy-lab-overview.jpg', caption: 'Students observing stars and space telescope models' },
      { src: 'images/astronomy-telescope-guide.jpg', caption: 'Telescope optics demonstration by space educator' },
      { src: 'images/astronomy-outdoor-sun.jpg', caption: 'Daytime solar observation session on school grounds' },
      { src: 'images/astronomy-binoculars.jpg', caption: 'Students learning bird & horizon observation with binoculars' }
    ]
  },
  {
    id: 'maths-lab',
    name: 'Mathematics Laboratory',
    nameMr: 'गणित प्रयोगशाळा',
    tag: '500+ Student-Made Teaching Aids',
    badge: '500+ Models',
    tagMr: "५००+ स्वनिर्मित शैक्षणिक साधने",
    badgeMr: "५००+ मॉडेल्स",
    aboutMr: "अमूर्त गणिताची सूत्रे खेळण्यांच्या माध्यमातून सहज समजून देणारी चैतन्यमय प्रयोगशाळा. शिक्षक आणि विद्यार्थ्यांनी मिळून ५०० हून अधिक गणितीय साहित्य तयार केले असून याद्वारे गणिताची भीती पूर्णपणे नाहीशी झाली आहे.",
    curriculumMr: "कृतीतून शिक्षण: मूर्त ते अमूर्त गणितीय संकल्पना",
    equipmentMr: "त्रिमितीय भौमितिक वस्तू, अबॅकस, अपूर्णांक चकती, पायथागोरस किट्स, नेपिअर बोन्स",
    activitiesMr: ["पायथागोरस सिद्धांत व बैजिक सूत्रांचे भौमितिक पडताळे", "कागद, लाकूड व वायरपासून 3D भूमिती मॉडेल्सची निर्मिती", "वैदिक गणित जलद गणना तंत्र कार्यशाळा", "NMMS / MTS शिष्यवृत्ती व ऑलिम्पियाड सराव वर्ग", "विद्यार्थ्यांचे गणित जत्रा व पीअर-लर्निंग प्रात्यक्षिके"],
    tagMr: "५००+ स्वनिर्मित शैक्षणिक साधने",
    badgeMr: "५००+ मॉडेल्स",
    aboutMr: "अमूर्त गणिताची सूत्रे खेळण्यांच्या माध्यमातून सहज समजून देणारी चैतन्यमय प्रयोगशाळा. शिक्षक आणि विद्यार्थ्यांनी मिळून ५०० हून अधिक गणितीय साहित्य तयार केले असून याद्वारे गणिताची भीती पूर्णपणे नाहीशी झाली आहे.",
    curriculumMr: "कृतीतून शिक्षण: मूर्त ते अमूर्त गणितीय संकल्पना",
    equipmentMr: "त्रिमितीय भौमितिक वस्तू, अबॅकस, अपूर्णांक चकती, पायथागोरस किट्स, नेपिअर बोन्स",
    activitiesMr: ["पायथागोरस सिद्धांत व बैजिक सूत्रांचे भौमितिक पडताळे", "कागद, लाकूड व वायरपासून 3D भूमिती मॉडेल्सची निर्मिती", "वैदिक गणित जलद गणना तंत्र कार्यशाळा", "NMMS / MTS शिष्यवृत्ती व ऑलिम्पियाड सराव वर्ग", "विद्यार्थ्यांचे गणित जत्रा व पीअर-लर्निंग प्रात्यक्षिके"],
    tagMr: "५००+ स्वनिर्मित शैक्षणिक साधने",
    badgeMr: "५००+ मॉडेल्स",
    aboutMr: "अमूर्त गणिताची सूत्रे खेळण्यांच्या माध्यमातून सहज समजून देणारी चैतन्यमय प्रयोगशाळा. शिक्षक आणि विद्यार्थ्यांनी मिळून ५०० हून अधिक गणितीय साहित्य तयार केले असून याद्वारे गणिताची भीती पूर्णपणे नाहीशी झाली आहे.",
    curriculumMr: "कृतीतून शिक्षण: मूर्त ते अमूर्त गणितीय संकल्पना",
    equipmentMr: "त्रिमितीय भौमितिक वस्तू, अबॅकस, अपूर्णांक चकती, पायथागोरस किट्स, नेपिअर बोन्स",
    activitiesMr: ["पायथागोरस सिद्धांत व बैजिक सूत्रांचे भौमितिक पडताळे", "कागद, लाकूड व वायरपासून 3D भूमिती मॉडेल्सची निर्मिती", "वैदिक गणित जलद गणना तंत्र कार्यशाळा", "NMMS / MTS शिष्यवृत्ती व ऑलिम्पियाड सराव वर्ग", "विद्यार्थ्यांचे गणित जत्रा व पीअर-लर्निंग प्रात्यक्षिके"],
    about: 'A vibrant experiential laboratory where abstract mathematical formulas become physical toys and tools. Contains over 500 teaching aids crafted collaboratively by students, teachers, and local community members, eliminating math phobia through play and visual reasoning.',
    curriculum: 'Activity-Based Concrete-to-Abstract Math Pedagogy',
    equipment: 'Geometric 3D Solids, Abacus Sets, Fraction Discs, Pythagoras Kits, Napier Bones',
    heroImage: 'images/school_group_photo.jpeg',
    activities: [
      'Visual proofs of Pythagoras theorem and algebraic identities',
      '3D geometric model construction from paper, wood and wire',
      'Vedic mathematics speed calculation workshops',
      'Math Olympiad, Scholarship (NMMS/MTS) problem-solving camps',
      'Student-led peer demonstration fairs on mathematical principles'
    ],
    gallery: [
      { src: 'images/school_group_photo.jpeg', caption: 'Math & STEM Demonstration during 53rd Science Exhibition' }
    ]
  },
  {
    id: 'science-centre',
    name: 'Innovation Science Centre',
    nameMr: 'नाविन्यपूर्ण विज्ञान केंद्र',
    tag: 'National Science Qualifier in 53 Years',
    badge: 'National Finalist',
    about: 'A comprehensive Physics, Chemistry, and Biology inquiry hub. In 2025-26, Ganori Prashala created history by becoming the FIRST Zilla Parishad school in 53 years of government science exhibitions to qualify for the National Level! Also boasts multiple INSPIRE Award MANAK winning teams.',
    curriculum: 'State Board & National STEM Inquiry Framework',
    equipment: 'Compound Microscopes, Chemical Reagents, Glassware, Circuit Boards, Human Anatomy Models',
    heroImage: 'images/science-national-award.jpg',
    activities: [
      'National & State level science exhibition competitive entries',
      'INSPIRE Award MANAK prototype research and design roadmaps',
      'Microscopic examinations of plant stomata, amoeba and cheek cells',
      'Chemical reaction demonstrations and pH testing of local soils',
      'Energy conservation, sustainable farming and renewable power projects'
    ],
    gallery: [
      { src: 'images/science-national-award.jpg', caption: 'School receiving State & District Science Felicitation on Grand Stage' },
      { src: 'images/science-exhibition-stem.jpg', caption: '53rd Science Exhibition STEM for Viksit Bharat Project Presentation' },
      { src: 'images/science-mgm-winners.jpg', caption: 'Ganori students winning Innovation Laurels at MGM University' }
    ]
  },
  {
    id: 'arts-studio',
    name: 'Arts, Warli & Sculpture Studio',
    nameMr: 'कला, वारली चित्रकला व शिल्पकला दालन',
    tag: 'BALA & Indigenous Cultural Heritage',
    badge: 'Eco-Artistry',
    about: 'An artistic sanctuary where students express creativity and celebrate traditional heritage. Features BALA (Building as Learning Aid) wall murals, authentic Warli painting on terracotta pots, lifelike Shaadu clay Ganesha idol sculpting, wildlife sculpture, and eco-friendly handicrafts.',
    curriculum: 'Maharashtra Fine Arts & BALA Art Integration',
    equipment: 'Potter Wheels, Shaadu Clay Banks, Warli Brushes, Natural Pigments, Canvas Stands',
    heroImage: 'images/arts-warli-pot-painting.jpg',
    activities: [
      'Traditional Warli painting on campus walls and terracotta planters',
      'Eco-friendly Shaadu clay Ganesha idol making workshops',
      'Realistic clay wildlife sculpting (eagle, birds, animals)',
      'Handmade eco-friendly Rakhi designing and exhibition',
      'Display boards and visual storytelling using BALA concepts'
    ],
    gallery: [
      { src: 'images/arts-warli-pot-painting.jpg', caption: 'Students painting traditional Warli art on terracotta pots' },
      { src: 'images/arts-sculpture-eagle.jpg', caption: 'Student sculpting lifelike clay eagle sculpture' },
      { src: 'images/arts-ganesha-clay-idol.jpg', caption: 'Eco-friendly Shaadu clay Ganesha workshop' },
      { src: 'images/arts-rakhi-making.jpg', caption: 'Students exhibiting handcrafted festive Rakhis' }
    ]
  },
  {
    id: 'multiskill-lab',
    name: 'Multi-Skill Foundation Lab (MSFC)',
    nameMr: 'मल्टी-स्किल फाउंडेशन कोर्स (MSFC) लॅब',
    tag: 'NSQF Vocational Skill Empowerment',
    badge: 'Vocational Hub',
    about: 'Operational since 2015-16 under the National Skills Qualifications Framework (NSQF). Offers hands-on vocational modules in tailoring, embroidery, garment design, electrical wiring, basic plumbing, organic agriculture, and plant nursery management to build self-reliance.',
    curriculum: 'NSQF Level 1 & 2 Vocational Framework',
    equipment: 'Industrial Sewing Machines, Embroidery Kits, Multimeters, Hand Tools, Sapling Beds',
    heroImage: 'images/multiskill-fashion-stall.jpg',
    activities: [
      'Garment design, dress making, and designer blouse embroidery',
      'Setting up school stalls at district exhibitions for student products',
      'Best-out-of-waste handicraft fabrication from eco-materials',
      'Plant nursery development and organic sapling grafting',
      'Basic home electrical repairs and appliance troubleshooting'
    ],
    gallery: [
      { src: 'images/multiskill-fashion-stall.jpg', caption: 'Student Fashion Design & Embroidery stall at public exhibition' },
      { src: 'images/multiskill-craft-waste.jpg', caption: 'Crafting utility decor items from coconut coir & waste items' },
      { src: 'images/multiskill-nursery.jpg', caption: 'Students tending young saplings in the school plant nursery' }
    ]
  },
  {
    id: 'automobile-lab',
    name: 'Automobile Engineering Lab',
    nameMr: 'ऑटोमोबाईल तंत्रज्ञान प्रयोगशाळा',
    tag: 'Industrial Skill Readiness',
    badge: 'Industry Ready',
    tagMr: "४-स्ट्रोक इंजिन व मेकॅनिकल ड्रायव्हिंग प्रात्यक्षिक",
    badgeMr: "व्यावसायिक केंद्र",
    aboutMr: "ग्रामीण भागातील एकमेव सुसज्ज ऑटोमोबाईल लॅब, जिथे कट-सेक्शन पेट्रोल व डिझेल इंजिन, गिअरबॉक्स, ब्रेकिंग सिस्टीम आणि प्रत्यक्ष व्हेईकल मेकॅनिक्सचे प्रशिक्षण दिले जाते. माध्यमिक विद्यार्थ्यांना थेट करिअर संधी मिळतात.",
    curriculumMr: "NSQF ऑटोमोटिव्ह सर्व्हिस टेक्निशियन (लेव्हल १ व २)",
    equipmentMr: "कट-सेक्शन ४-स्ट्रोक इंजिन, गिअरबॉक्स मॉडेल, हायड्रॉलिक जॅक, मेकॅनिकल टूलकिट्स",
    activitiesMr: ["२-स्ट्रोक व ४-स्ट्रोक इंजिनचे अंतर्गत भाग व कार्यपद्धती", "हायड्रॉलिक ब्रेक सिस्टीम व ट्रान्समिशन असेंब्ली", "स्पार्क प्लग स्वच्छता, इंजिन ऑइल तपासणी व फिल्टर बदल", "ऑटोमोबाईल वायरिंग व बॅटरी मेंटेनन्स", "सुरक्षित वाहन चालन व रस्ता सुरक्षा नियम"],
    tagMr: "४-स्ट्रोक इंजिन व मेकॅनिकल ड्रायव्हिंग प्रात्यक्षिक",
    badgeMr: "व्यावसायिक केंद्र",
    aboutMr: "ग्रामीण भागातील एकमेव सुसज्ज ऑटोमोबाईल लॅब, जिथे कट-सेक्शन पेट्रोल व डिझेल इंजिन, गिअरबॉक्स, ब्रेकिंग सिस्टीम आणि प्रत्यक्ष व्हेईकल मेकॅनिक्सचे प्रशिक्षण दिले जाते. माध्यमिक विद्यार्थ्यांना थेट करिअर संधी मिळतात.",
    curriculumMr: "NSQF ऑटोमोटिव्ह सर्व्हिस टेक्निशियन (लेव्हल १ व २)",
    equipmentMr: "कट-सेक्शन ४-स्ट्रोक इंजिन, गिअरबॉक्स मॉडेल, हायड्रॉलिक जॅक, मेकॅनिकल टूलकिट्स",
    activitiesMr: ["२-स्ट्रोक व ४-स्ट्रोक इंजिनचे अंतर्गत भाग व कार्यपद्धती", "हायड्रॉलिक ब्रेक सिस्टीम व ट्रान्समिशन असेंब्ली", "स्पार्क प्लग स्वच्छता, इंजिन ऑइल तपासणी व फिल्टर बदल", "ऑटोमोबाईल वायरिंग व बॅटरी मेंटेनन्स", "सुरक्षित वाहन चालन व रस्ता सुरक्षा नियम"],
    tagMr: "४-स्ट्रोक इंजिन व मेकॅनिकल ड्रायव्हिंग प्रात्यक्षिक",
    badgeMr: "व्यावसायिक केंद्र",
    aboutMr: "ग्रामीण भागातील एकमेव सुसज्ज ऑटोमोबाईल लॅब, जिथे कट-सेक्शन पेट्रोल व डिझेल इंजिन, गिअरबॉक्स, ब्रेकिंग सिस्टीम आणि प्रत्यक्ष व्हेईकल मेकॅनिक्सचे प्रशिक्षण दिले जाते. माध्यमिक विद्यार्थ्यांना थेट करिअर संधी मिळतात.",
    curriculumMr: "NSQF ऑटोमोटिव्ह सर्व्हिस टेक्निशियन (लेव्हल १ व २)",
    equipmentMr: "कट-सेक्शन ४-स्ट्रोक इंजिन, गिअरबॉक्स मॉडेल, हायड्रॉलिक जॅक, मेकॅनिकल टूलकिट्स",
    activitiesMr: ["२-स्ट्रोक व ४-स्ट्रोक इंजिनचे अंतर्गत भाग व कार्यपद्धती", "हायड्रॉलिक ब्रेक सिस्टीम व ट्रान्समिशन असेंब्ली", "स्पार्क प्लग स्वच्छता, इंजिन ऑइल तपासणी व फिल्टर बदल", "ऑटोमोबाईल वायरिंग व बॅटरी मेंटेनन्स", "सुरक्षित वाहन चालन व रस्ता सुरक्षा नियम"],
    about: 'A technical workshop designed for secondary students to demystify automotive mechanics. Provides practical knowledge of 2-wheeler and 4-wheeler systems, internal combustion engines, transmission, and braking mechanisms, unlocking employment in nearby industrial corridors like Waluj and Shendra.',
    curriculum: 'NSQF Automotive Trades Skill Development',
    equipment: 'Cut-section Engine Models, Transmission Cutouts, Mechanical Toolkits, Diagnostic Gauges',
    heroImage: 'images/robotics-rover-test.jpg',
    activities: [
      'Disassembly and assembly of two-wheeler internal components',
      'Understanding braking, steering, and clutch transmission systems',
      'Vehicle safety protocols, preventive maintenance and lubrication',
      'Industrial visit preparation for local automobile assembly plants',
      'Career counseling for ITI, Polytechnic, and automotive engineering'
    ],
    gallery: [
      { src: 'images/robotics-rover-test.jpg', caption: 'Mechanical systems and gear transmission study' }
    ]
  },
  {
    id: 'tinkering-lab',
    name: 'Atal Tinkering & 3D Prototyping Lab',
    nameMr: 'अटल टिंकरिंग व 3D प्रिंटिंग लॅब',
    tag: 'Digital Fabrication & IoT',
    badge: 'Fab Lab',
    about: 'A cutting-edge makerspace equipped with a precision 3D printer, soldering stations, electronic breadboards, and IoT development boards. Students bring computer-aided designs to life by printing physical plastic prototypes for real-world school and community problems.',
    curriculum: 'Atal Innovation Mission (AIM) Tinkering Framework',
    equipment: 'Creality 3D Printer, PLA Filaments, Soldering Stations, Breadboards, Arduino/ESP32 Kits',
    heroImage: 'images/robotics-3dprinter-assembly.jpg',
    activities: [
      '3D computer modeling and rapid additive manufacturing printing',
      'Soldering and breadboard circuit prototyping for science projects',
      'Internet of Things (IoT) sensors for soil moisture and smart lights',
      'Repairing plastic parts and creating custom science gear',
      'Annual Innovation Hackathons and prototype pitch sessions'
    ],
    gallery: [
      { src: 'images/robotics-3dprinter-assembly.jpg', caption: 'Students building projects with 3D printer in background' }
    ]
  },
  {
    id: 'digital-library-lab',
    name: 'Digital & Language Lab / Library',
    nameMr: 'डिजिटल ई-लर्निंग, भाषा व ग्रंथालय दालन',
    tag: 'Smart Classrooms & 1,000+ Books',
    badge: 'Knowledge Hub',
    about: 'A peaceful, stimulating learning commons that pairs a rich physical library of over 1,000 literature, reference, and competitive examination books with digital e-learning workstations, spoken English audio labs, and competitive exam portals for Navodaya and NMMS.',
    curriculum: 'Holistic Language Proficiency & Digital Literacy',
    equipment: 'Smart Interactive Panel, Spoken English Software, 1,000+ Books, Digital Reference Media',
    heroImage: 'images/ai-lab-setup.jpg',
    activities: [
      'Daily reading hour and student book review presentations',
      'English phonetics, vocabulary, and conversational practice',
      'Competitive exam preparation (Scholarship, Navodaya, NMMS, NTSE)',
      'Digital curriculum screening on smart interactive boards',
      'Student wall magazine and handwritten quarterly newsletter'
    ],
    gallery: [
      { src: 'images/ai-lab-setup.jpg', caption: 'High-speed digital learning terminals for multimedia studies' },
      { src: 'images/activity-plastic-pen-recycling.jpg', caption: 'Environmental reading club and literacy corner' }
    ]
  }
];

// =============================================================================
// 2. DATA REPOSITORY: 21 SCHOOL FACULTY & STAFF PROFILES (AUTHENTIC DATA)
// =============================================================================
const STAFF_DATA = [
  {
    id: 1,
    name: "Shri. Anil P. Deshmukh",
    nameMr: "श्री. अनिल प्र. देशमुख",
    role: "Headmaster & Science Teacher",
    roleMr: "मुख्याध्यापक व विज्ञान शिक्षक",
    dept: 'leadership',
    deptName: "Leadership & Administration",
    deptNameMr: "प्रशासन व नेतृत्व",
    subject: "General Science & Institutional Leadership",
    subjectMr: "सामान्य विज्ञान, संस्थात्मक नेतृत्व व प्रशासन",
    qual: "B.Sc., B.Ed. | 25+ Years Dedicated Service",
    awards: "Recipient of District Best Teacher & State Commendation",
    photo: 'images/hm-anil-deshmukh.jpg',
    initials: 'AD',
    isHM: true,
    phone: '+91 9226966376',
    email: 'wirangula@gmail.com',
    dob: '11/06/1971',
    bio: "Visionary leader steering Ganori Prashala into Maharashtra’s flagship PM SHRI school with state-first school AI Lab, 10 advanced laboratories, 700-tree dense forest, and national level milestones in science.",
    bioMr: "गणोरी प्रशालेचे प्रेरणादायी नेतृत्व. त्यांच्या दूरदृष्टीतून प्रशालेत महाराष्ट्रातील पहिली शालेय AI लॅब, १० आधुनिक प्रयोगशाळा, इस्रो दौरा, ५३ वर्षांतील राष्ट्रीय विज्ञान यश आणि ७०० झाडांचे घनदाट अरण्य साकारले आहे."
  },
  {
    id: 2,
    name: "Smt. Suvarna Dattatray Deshmukh",
    nameMr: "श्रीमती सुवर्णा दत्तात्रय देशमुख",
    role: "Secondary Teacher (Mathematics)",
    roleMr: "माध्यमिक शिक्षिका (गणित)",
    dept: 'stem',
    deptName: "Science & Mathematics",
    deptNameMr: "विज्ञान व गणित",
    subject: "Secondary Mathematics & Geometry",
    subjectMr: "माध्यमिक गणित व भूमिती",
    qual: "M.Sc., B.Ed.",
    awards: "Guided 500+ Student-Made Math Lab Models",
    photo: 'images/teacher-suvarna-deshmukh.jpg',
    initials: 'SD',
    isHM: false,
    phone: '+91 9834541530',
    email: 'suvarna.deshmukh21@gmail.com',
    dob: '23/10/1971',
    bio: "Pioneer of Ganori Prashala's student-crafted Mathematics Laboratory featuring 500+ interactive wooden and acrylic learning models that make complex algebra and geometry intuitive.",
    bioMr: "गणित प्रयोगशाळेच्या शिल्पकार. ५०० हून अधिक स्वनिर्मित गणितीय साहित्यांच्या साहाय्याने बीजगणित व भूमिती सोप्या व रंजक पद्धतीने शिकवण्यामध्ये विशेष हातखंडा."
  },
  {
    id: 3,
    name: "Shri. Digambar Eknathrao Dapke",
    nameMr: "श्री. दिगंबर एकनाथराव दापके",
    role: "Graduate Teacher (Mathematics)",
    roleMr: "पदवीधर शिक्षक (गणित)",
    dept: 'stem',
    deptName: "Science & Mathematics",
    deptNameMr: "विज्ञान व गणित",
    subject: "Mathematics & Algebra",
    subjectMr: "माध्यमिक गणित व वैदिक गणित",
    qual: "M.Sc., B.Ed.",
    awards: "Competitive Exam & NMMS Math Guidance Incharge",
    photo: null,
    initials: 'DD',
    isHM: false,
    phone: '+91 9423679740',
    email: 'digambar1189@gmail.com',
    dob: '01/01/1989',
    bio: "Dynamic mathematics educator specializing in conceptual problem solving, NMMS scholarship coaching, Vedic math techniques, and digital arithmetic modules.",
    bioMr: "उत्साही गणित शिक्षक. NMMS शिष्यवृत्ती परीक्षा, स्पर्धा परीक्षा मार्गदर्शन आणि वैदिक गणिताच्या प्रभावी तंत्रांद्वारे विद्यार्थ्यांची गणित विषयातील आवड वाढवण्यात अग्रेसर."
  },
  {
    id: 4,
    name: "Shri. Krishna Jaiswal",
    nameMr: "श्री. कृष्णा जयस्वाल",
    role: "Graduate Teacher (Science)",
    roleMr: "पदवीधर शिक्षक (विज्ञान)",
    dept: 'stem',
    deptName: "Science & Innovation",
    deptNameMr: "विज्ञान व गणित",
    subject: "General Science & Physics",
    subjectMr: "सामान्य विज्ञान व भौतिकशास्त्र",
    qual: "B.Sc., B.Ed.",
    awards: "District & State Science Exhibition Mentor",
    photo: null,
    initials: 'KJ',
    isHM: false,
    phone: '+91 9423150141',
    email: 'krishnajaiswal0141@gmail.com',
    dob: '12/06/1984',
    bio: "Passionate science educator guiding students in hands-on physics experiments, working STEM models, astronomy exploration, and state-level science exhibitions.",
    bioMr: "प्रयोगशील विज्ञान शिक्षक. विद्यार्थ्यांना प्रत्यक्ष प्रयोगांद्वारे भौतिकशास्त्र शिकवणे, विज्ञान प्रदर्शनांसाठी मॉडेल तयार करणे आणि खगोलशास्त्र उपक्रमांमध्ये सक्रिय मार्गदर्शन."
  },
  {
    id: 5,
    name: "Smt. Savita Narhari Barsagade",
    nameMr: "श्रीमती सविता नरहरी बारसागडे",
    role: "Graduate Teacher (Science)",
    roleMr: "पदवीधर शिक्षिका (विज्ञान)",
    dept: 'stem',
    deptName: "Science & Innovation",
    deptNameMr: "विज्ञान व गणित",
    subject: "Science & Biological Studies",
    subjectMr: "विज्ञान, पर्यावरण अभ्यास व जीवशास्त्र",
    qual: "M.Sc., B.Ed.",
    awards: "INSPIRE MANAK Award Guidance & Eco-Club Mentor",
    photo: null,
    initials: 'SB',
    isHM: false,
    phone: '+91 8275815563',
    email: 'savitabarsagade13@gmail.com',
    dob: '13/12/1991',
    bio: "Dedicated science educator driving environmental awareness, biological observations, laboratory practicals, and guiding young scientists for INSPIRE MANAK awards.",
    bioMr: "पर्यावरण, वनस्पती व जीवशास्त्र विषयातील तज्ज्ञ मार्गदर्शिका. इन्स्पायर अवॉर्ड स्पर्धा, प्रयोगशाळा कार्य आणि विद्यार्थ्यांमध्ये वैज्ञानिक दृष्टिकोन रुजवण्यासाठी कार्यरत."
  },
  {
    id: 6,
    name: "Smt. Shailaja Devidas Naikwade",
    nameMr: "श्रीमती शैलजा देवीदास नाईकवाडे",
    role: "High School Teacher (Science)",
    roleMr: "माध्यमिक शिक्षिका (विज्ञान)",
    dept: 'stem',
    deptName: "Science & Innovation",
    deptNameMr: "विज्ञान व गणित",
    subject: "Secondary Science & Chemistry",
    subjectMr: "सामान्य विज्ञान व रसायनशास्त्र",
    qual: "B.Sc., B.Ed.",
    awards: "Eco-Club & Swachhata Campaign Coordinator",
    photo: null,
    initials: 'SN',
    isHM: false,
    phone: '+91 8275323939',
    email: 'shailajanaikwade1212@gmail.com',
    dob: '12/12/1975',
    bio: "Experienced science teacher passionate about experimental chemistry, nature preservation, Swachhata campaigns, and making science relatable to rural daily life.",
    bioMr: "अनुभवी विज्ञान शिक्षिका. रसायनशास्त्र प्रयोग, परिसर स्वच्छता अभियान, जलसंवर्धन प्रकल्प आणि ग्रामीण जीवनातील विज्ञानाचे महत्त्व विद्यार्थ्यांना प्रभावीपणे पटवून देतात."
  },
  {
    id: 7,
    name: "Shri. Dnyaneshwar Pandurang Surase",
    nameMr: "श्री. ज्ञानेश्वर पांडुरंग सुरासे",
    role: "Upper Primary Teacher (UGT - Mathematics)",
    roleMr: "उच्च प्राथमिक शिक्षक (गणित)",
    dept: 'stem',
    deptName: "Upper Primary & Mathematics",
    deptNameMr: "विज्ञान व गणित",
    subject: "Upper Primary Mathematics (Class 5th & 6th)",
    subjectMr: "पायाभूत गणित व अंकगणित (इ. ५ वी व ६ वी)",
    qual: "H.S.C., D.Ed.",
    awards: "FLN Numeracy & Foundational Learning Lead",
    photo: null,
    initials: 'DS',
    isHM: false,
    phone: '+91 9561909361',
    email: 'dpsurase4@gmail.com',
    dob: '10/03/1971',
    bio: "Specialist in building rock-solid mathematical fundamentals for 5th and 6th-grade students using interactive games, mental arithmetic drills, and joyful pedagogy.",
    bioMr: "इयत्ता ५ वी व ६ वीच्या विद्यार्थ्यांसाठी पायाभूत गणित (FLN) साध्य करणारे समर्पित शिक्षक. खेळांमधून गणित, पाढे पाठांतर व मनोरंजक अंकगणिताचे तज्ज्ञ."
  },
  {
    id: 8,
    name: "Shri. Suresh Adhar Thakur",
    nameMr: "श्री. सुरेश आधार ठाकूर",
    role: "Secondary Teacher (Marathi)",
    roleMr: "माध्यमिक शिक्षक (मराठी)",
    dept: 'humanities',
    deptName: "Languages & Literature",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Marathi Language & Literature",
    subjectMr: "मराठी भाषा, साहित्य व व्याकरण",
    qual: "M.A. (Marathi), B.Ed.",
    awards: "Street Play Director & Elocution Coach",
    photo: null,
    initials: 'ST',
    isHM: false,
    phone: '+91 9850866764',
    email: 'sathakur1972@gmail.com',
    dob: '01/07/1972',
    bio: "Celebrated Marathi language mentor and playwright directing students in powerful street plays addressing superstition, education, tree conservation, and social reform.",
    bioMr: "मराठी भाषा व साहित्याचे व्यासंगी शिक्षक आणि नाट्य दिग्दर्शक. व्यसनमुक्ती, अंधश्रद्धा निर्मूलन व शिक्षण प्रसारावर आधारित विद्यार्थ्यांची गाजलेली पथनाट्ये दिग्दर्शित करतात."
  },
  {
    id: 9,
    name: "Shri. Nagrajsing Nandulal Pardeshi",
    nameMr: "श्री. नागराजसिंग नंदुलाल परदेशी",
    role: "Secondary Teacher (Hindi)",
    roleMr: "माध्यमिक शिक्षक (हिंदी)",
    dept: 'humanities',
    deptName: "Languages",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Hindi Language & Literature",
    subjectMr: "राष्ट्रभाषा हिंदी व साहित्य",
    qual: "M.A. (Hindi), B.Ed.",
    awards: "Rashtrabhasha Hindi Exams & Cultural Lead",
    photo: null,
    initials: 'NP',
    isHM: false,
    phone: '+91 8600744040',
    email: 'nagrajpardeshi162@gmail.com',
    dob: '27/01/1972',
    bio: "Enthusiastic Hindi educator instilling fluency and literary expression, organizing Rashtrabhasha exams, student poetry assemblies, and cultural presentations.",
    bioMr: "राष्ट्रभाषा हिंदीचे अनुभवी शिक्षक. राष्ट्रभाषा प्रचार सभा परीक्षा, वक्तृत्व, काव्यवाचन आणि सांस्कृतिक कार्यक्रमांचे यशस्वी आयोजन व मार्गदर्शन."
  },
  {
    id: 10,
    name: "Smt. Kalpana Narsing Singhal",
    nameMr: "श्रीमती कल्पना नरसिंग सिंघल",
    role: "Graduate Teacher (English)",
    roleMr: "पदवीधर शिक्षिका (इंग्रजी)",
    dept: 'humanities',
    deptName: "Languages",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "English Language & Grammar",
    subjectMr: "इंग्रजी संभाषण, व्याकरण व साहित्य",
    qual: "M.A. (English), B.Ed.",
    awards: "Digital Language Lab & Spoken English Incharge",
    photo: null,
    initials: 'KS',
    isHM: false,
    phone: '+91 9421301560',
    email: 'kalpanasingal1984@gmail.com',
    dob: '18/05/1984',
    bio: "Empowers rural students with strong English conversational skills, digital phonetics practice, grammar fundamentals, and confidence in public speaking.",
    bioMr: "ग्रामीण विद्यार्थ्यांना इंग्रजी संभाषणामध्ये पारंगत करणाऱ्या कुशल शिक्षिका. डिजिटल लँग्वेज लॅबद्वारे फोनोटिक्स, संवाद कौशल्य व व्याकरणाचा दैनंदिन सराव."
  },
  {
    id: 11,
    name: "Shri. Rameshwar Sandu Jadhav",
    nameMr: "श्री. रामेश्वर संदू जाधव",
    role: "Secondary Teacher (English)",
    roleMr: "माध्यमिक शिक्षक (इंग्रजी)",
    dept: 'humanities',
    deptName: "Languages",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Secondary English Communication",
    subjectMr: "माध्यमिक इंग्रजी संभाषण व व्याकरण",
    qual: "M.A. (English), B.Ed.",
    awards: "English Communication & Board Exam Mentor",
    photo: null,
    initials: 'RJ',
    isHM: false,
    phone: '+91 9421427070',
    email: 'ramjadhav1574@gmail.com',
    dob: '01/05/1974',
    bio: "Committed English educator preparing secondary school students for high-scoring board exam performance and fluent day-to-day bilingual communication.",
    bioMr: "१० वी बोर्ड परीक्षेतील इंग्रजी विषयाच्या उत्तम निकालासाठी आणि विद्यार्थ्यांमधील इंग्रजीची भीती दूर करून आत्मविश्वास निर्माण करण्यासाठी सदैव प्रयत्नशील."
  },
  {
    id: 12,
    name: "Shri. Satish Budhesing Machiye",
    nameMr: "श्री. सतीश बुद्धेसिंग माचिये",
    role: "Graduate Teacher (Social Science)",
    roleMr: "पदवीधर शिक्षक (सामाजिक शास्त्र)",
    dept: 'humanities',
    deptName: "Social Sciences",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Social Science, History & Civics",
    subjectMr: "सामाजिक शास्त्र, इतिहास व नागरिकशास्त्र",
    qual: "M.A., B.Ed.",
    awards: "Mock Parliament & Constitution Day Coordinator",
    photo: null,
    initials: 'SM',
    isHM: false,
    phone: '+91 9767050809',
    email: 'satishmachiye@gmail.com',
    dob: '23/05/1981',
    bio: "Dedicated social science teacher fostering democratic values, constitutional awareness, mock student parliaments, and deep historical understanding.",
    bioMr: "सामाजिक शास्त्र व इतिहास विषयाचे निष्णात शिक्षक. संविधान दिन, बालसंसद, स्थानिक इतिहास अभ्यास आणि विद्यार्थ्यांमध्ये सामाजिक जाणीवा निर्माण करण्यात मोलाचा वाटा."
  },
  {
    id: 13,
    name: "Shri. Arvind Prabhakarrao Rajhans",
    nameMr: "श्री. अरविंद प्रभाकरराव राजहंस",
    role: "Secondary Teacher (Social Science)",
    roleMr: "माध्यमिक शिक्षक (सामाजिक शास्त्र)",
    dept: 'humanities',
    deptName: "Social Sciences",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Geography & Environmental Studies",
    subjectMr: "भूगोल व पर्यावरण अभ्यास",
    qual: "B.A., B.Ed.",
    awards: "700-Tree Dense Forest & Harit Vidyalaya Coordinator",
    photo: null,
    initials: 'AR',
    isHM: false,
    phone: '+91 9421012522',
    email: 'arvind.rajhans.1968@gmail.com',
    dob: '07/09/1968',
    bio: "Senior geography educator and key coordinator behind Ganori Prashala’s 700-tree dense forest sanctuary, rainwater harvesting, and environmental sustainability initiatives.",
    bioMr: "शाळेच्या ७०० झाडांच्या घनदाट अरण्याचे आणि ठिबक सिंचन प्रकल्पाचे मुख्य समन्वयक. भूगोल विषयाचे प्रत्यक्ष निसर्गात जाऊन क्षेत्रीय अभ्यासाद्वारे अध्यापन."
  },
  {
    id: 14,
    name: "Smt. Sangita Manoharrao Babrekar",
    nameMr: "श्रीमती संगीता मनोहरराव बाबरेकर",
    role: "Secondary Teacher (Social Science)",
    roleMr: "माध्यमिक शिक्षिका (सामाजिक शास्त्र)",
    dept: 'humanities',
    deptName: "Social Sciences",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "History & Political Science",
    subjectMr: "इतिहास व राज्यशास्त्र",
    qual: "M.A., B.Ed.",
    awards: "Heritage Club & National Integration Quiz Lead",
    photo: null,
    initials: 'SB',
    isHM: false,
    phone: '+91 9730715705',
    email: 'sangitakathar1969@gmail.com',
    dob: '10/11/1969',
    bio: "Passionate educator inspiring pride in Maharashtra's rich history, Chhatrapati Shivaji Maharaj’s management ethics, and national integration through heritage quizzes.",
    bioMr: "महाराष्ट्राचा देदिप्यमान इतिहास व छत्रपती शिवाजी महाराजांचे व्यवस्थापन विचार विद्यार्थ्यांपर्यंत पोहोचवणाऱ्या मार्गदर्शिका. हेरिटेज क्लब व प्रश्नमंजुषा प्रमुख."
  },
  {
    id: 15,
    name: "Shri. Bhaskar Kisanrao Gabhud",
    nameMr: "श्री. भास्कर किसनराव गाभूडे",
    role: "Graduate Teacher (Social Science)",
    roleMr: "पदवीधर शिक्षक (सामाजिक शास्त्र)",
    dept: 'humanities',
    deptName: "Social Sciences",
    deptNameMr: "भाषा व सामाजिक शास्त्रे",
    subject: "Social Science & Economics",
    subjectMr: "सामाजिक शास्त्र, नागरिकशास्त्र व अर्थशास्त्र",
    qual: "B.A., B.Ed.",
    awards: "Community Outreach & Value Education Mentor",
    photo: null,
    initials: 'BG',
    isHM: false,
    phone: '+91 7875788671',
    email: 'bhaskargabhud1971@gmail.com',
    dob: '18/05/1971',
    bio: "Veteran educator connecting social studies with rural economics, agriculture insights, ethical community living, and student moral education.",
    bioMr: "ग्रामीण अर्थकारण, कृषी जीवन आणि सामाजिक मूल्यांची सांगड घालून सामाजिक शास्त्रे रंजक बनवणारे शिक्षक. विद्यार्थी संस्कार व मूल्यशिक्षणात सक्रिय."
  },
  {
    id: 16,
    name: "Smt. Bharti Vishwasrao Thakare",
    nameMr: "श्रीमती भारती विश्वासराव ठाकरे",
    role: "Art & Drawing Teacher",
    roleMr: "कला व चित्रकला शिक्षिका",
    dept: 'primary-sports',
    deptName: "Arts & Aesthetics",
    deptNameMr: "प्राथमिक व क्रीडा",
    subject: "Fine Arts, Warli Painting & Sculpting",
    subjectMr: "चित्रकला, वारली कला व शिल्पकला",
    qual: "A.T.D. (Art Teacher Diploma), A.M.",
    awards: "District Grade Exam Gold Mentor & BALA Aesthetics Lead",
    photo: null,
    initials: 'BT',
    isHM: false,
    phone: '+91 9403500945',
    email: 'thakarebharati78@gmail.com',
    dob: '06/01/1978',
    bio: "Master artist shaping the school's stunning BALA wall paintings, terracotta Warli pot artwork, clay sculpting, and mentoring students for elementary/intermediate drawing grade exams.",
    bioMr: "चित्रकला व हस्तकलेच्या निष्णात मार्गदर्शिका. शाळेच्या भिंतींवरील बोलके रंगकाम (BALA), वारली पॉट पेंटिंग, शाडू मातीच्या मूर्ती आणि शासकीय रेखाकला परीक्षांचे मार्गदर्शन."
  },
  {
    id: 17,
    name: "Shri. Rajendra Wamanrao Jagtap",
    nameMr: "श्री. राजेंद्र वामनराव जगताप",
    role: "Physical Education & Sports Teacher",
    roleMr: "शारीरिक शिक्षण व क्रीडा शिक्षक",
    dept: 'primary-sports',
    deptName: "Physical Education & Sports",
    deptNameMr: "प्राथमिक व क्रीडा",
    subject: "Physical Education, Yoga & Athletics",
    subjectMr: "क्रीडा, योग व शारीरिक आरोग्य",
    qual: "B.P.Ed., M.P.Ed.",
    awards: "District Level Lezim, Volleyball & Kabaddi Champions Coach",
    photo: null,
    initials: 'RJ',
    isHM: false,
    phone: '+91 8275322602',
    email: 'rajujagtap8275@gmail.com',
    dob: '11/04/1978',
    bio: "Dynamic sports director training students in traditional Lezim, volleyball, kho-kho, kabaddi, yoga postures, and athletic track events with consistent district championships.",
    bioMr: "शाळेच्या क्रीडा विभागाचे प्रमुख. पारंपरिक लेझीम, व्हॉलीबॉल, खो-खो, कबड्डी आणि ॲथलेटिक्समध्ये जिल्हा व विभागीय स्तरावर विजेते खेळाडू घडवणारे मार्गदर्शक."
  },
  {
    id: 18,
    name: "Smt. Rupali Vilasrao Annadate",
    nameMr: "श्रीमती रूपाली विलासराव अन्नदाते",
    role: "Primary Teacher",
    roleMr: "प्राथमिक शिक्षिका",
    dept: 'primary-sports',
    deptName: "Primary Wing",
    deptNameMr: "प्राथमिक व क्रीडा",
    subject: "Foundational Learning & Primary Pedagogy (All Subjects)",
    subjectMr: "पायाभूत शिक्षण, भाषा व सर्व प्राथमिक विषय",
    qual: "M.A., D.Ed.",
    awards: "Activity-Based Playway Learning Coordinator",
    photo: null,
    initials: 'RA',
    isHM: false,
    phone: '+91 9552546990',
    email: 'rupali.annadate@gmail.com',
    dob: '28/06/1979',
    bio: "Warm and nurturing primary educator creating an engaging, joy-filled foundation in language, arithmetic, and creative arts for young learners entering the high school campus.",
    bioMr: "प्राथमिक विभागातील प्रेमळ व कार्यकुशल शिक्षिका. आनंददायी अध्ययन, कृतियुक्त शिक्षण, भाषा विकास आणि विद्यार्थ्यांच्या सर्वांगीण विकासाचा भक्कम पाया रचतात."
  },
  {
    id: 19,
    name: "Shri. Amol Vilas Sapkal",
    nameMr: "श्री. अमोल विलास सपकाळ",
    role: "Vocational Teacher (Automobile)",
    roleMr: "व्यवसाय प्रशिक्षक (ऑटोमोबाईल)",
    dept: 'vocational',
    deptName: "Vocational & Technical Education",
    deptNameMr: "कौशल्य व प्रयोगशाळा",
    subject: "Automobile Engineering & Diagnostics (NSQF)",
    subjectMr: "NSQF ऑटोमोबाईल टेक्नॉलॉजी व मेकॅनिक्स",
    qual: "Diploma in Automobile Engineering",
    awards: "NSQF Certified Automotive Skill Trainer",
    photo: null,
    initials: 'AS',
    isHM: false,
    phone: '+91 7507926082',
    email: 'amolsapkal9970@gmail.com',
    dob: '01/09/1993',
    bio: "Technical instructor providing hands-on training on two-wheeler and four-wheeler engines, braking systems, electrical wiring, and automotive maintenance for self-employment.",
    bioMr: "ऑटोमोबाईल लॅबचे तज्ज्ञ प्रशिक्षक. दुचाकी व चारचाकी वाहनांची दुरुस्ती, इंजिन संरचना, वायरिंग व ब्रेक सिस्टीमचे प्रत्यक्ष प्रात्यक्षिकांसह व्यावसायिक प्रशिक्षण देतात."
  },
  {
    id: 20,
    name: "Shri. Sagar Ramrao Bhalke",
    nameMr: "श्री. सागर रामराव भालके",
    role: "Vocational Trainer (Multi-Skill Agriculture)",
    roleMr: "व्यवसाय प्रशिक्षक (मल्टी-स्किल कृषी)",
    dept: 'vocational',
    deptName: "Vocational & Skill Education",
    deptNameMr: "कौशल्य व प्रयोगशाळा",
    subject: "Multi-Skill Foundation Course (MSFC) & Agriculture",
    subjectMr: "मल्टी-स्किल फाउंडेशन कोर्स (MSFC) व कृषी तंत्रज्ञान",
    qual: "B.Sc. Agriculture / Certified Technical Trainer",
    awards: "Rural Agri-Entrepreneurship & Drip Irrigation Guide",
    photo: null,
    initials: 'SB',
    isHM: false,
    phone: '+91 9158005084',
    email: 'bhalkesagar4@gmail.com',
    dob: '08/10/1994',
    bio: "Agricultural and multi-skill expert training rural youth in modern grafting, drip irrigation calibration, seed cultivation, electrical wiring, and sustainable organic farming.",
    bioMr: "मल्टी-स्किल लॅब व कृषी तंत्रज्ञानाचे मार्गदर्शक. ठिबक सिंचन, आधुनिक रोपवाटिका, कलम बांधणी, सेंद्रिय शेती व मूलभूत तांत्रिक कौशल्यांचे विद्यार्थ्यांना प्रत्यक्ष प्रशिक्षण."
  },
  {
    id: 21,
    name: "Shri. Aniket Dilip Mane",
    nameMr: "श्री. अनिकेत दिलीप माने",
    role: "AI Trainer & Robotics / IT Incharge",
    roleMr: "AI ट्रेनर व रोबोटिक्स / IT निर्देशक",
    dept: 'vocational',
    deptName: "Artificial Intelligence & Robotics",
    deptNameMr: "कौशल्य व प्रयोगशाळा",
    subject: "Artificial Intelligence (AI), Robotics, 3D Printing & Coding",
    subjectMr: "AI लॅब, रोबोटिक्स, 3D प्रिंटिंग व संगणक प्रणाली",
    qual: "B.Tech. Computer Science",
    awards: "MahaAI Mission & HP Lab Operations Lead",
    photo: 'images/aniket-mane.jpg',
    initials: 'AM',
    isHM: false,
    phone: '+91 9075703080',
    email: 'aniketmane1907@gmail.com',
    dob: '19/07/2000',
    bio: "B.Tech in Computer Science and dedicated AI Trainer directing Maharashtra’s first school AI Laboratory, mentoring rural students in Python coding, robotics kits, 3D printing, and generative AI tools under the MahaAI mission.",
    bioMr: "B.Tech Computer Science पदवीधर. महाराष्ट्रातील पहिल्या शालेय AI लॅबचे मुख्य ट्रेनर व मार्गदर्शक. ग्रामीण विद्यार्थ्यांना पायथॉन कोडिंग, रोबोटिक्स, 3D प्रिंटिंग आणि कृत्रिम बुद्धिमत्ता (AI) तंत्रज्ञानाचे आधुनिक प्रशिक्षण देतात."
  }
];

// =============================================================================
// 3. DATA REPOSITORY: ACTIVITIES SHOWCASE (LAST 2 YEARS: 2024-2026)
// =============================================================================
const ACTIVITIES_DATA = [
  {
    id: 'act-1',
    title: '53rd Science Exhibition STEM Excellence & National Qualifier',
    titleMr: '५३ वे विज्ञान प्रदर्शन — राष्ट्रीय स्तरावर निवड',
    descMr: "महाराष्ट्र शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर पात्र ठरणारी गणोरी प्रशाला ही पहिली जिल्हा परिषद शाळा ठरली. विद्यार्थ्यांनी तयार केलेल्या नाविन्यपूर्ण प्रकल्पाने राज्यभरातून प्रथम क्रमांक पटकावला.",
    descMr: "महाराष्ट्र शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर पात्र ठरणारी गणोरी प्रशाला ही पहिली जिल्हा परिषद शाळा ठरली. विद्यार्थ्यांनी तयार केलेल्या नाविन्यपूर्ण प्रकल्पाने राज्यभरातून प्रथम क्रमांक पटकावला.",
    descMr: "महाराष्ट्र शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर पात्र ठरणारी गणोरी प्रशाला ही पहिली जिल्हा परिषद शाळा ठरली. विद्यार्थ्यांनी तयार केलेल्या नाविन्यपूर्ण प्रकल्पाने राज्यभरातून प्रथम क्रमांक पटकावला.",
    year: '2025-26',
    category: 'science',
    categoryName: 'Science & Innovation',
    date: 'Academic Year 2025-26',
    image: 'images/science-exhibition-stem.jpg',
    desc: 'Creating history in Maharashtra, Ganori Prashala became the first ZP school in 53 years of government science exhibitions to qualify for the National Level. Students demonstrated working STEM models on "STEM for Self-reliant & Developed India" focusing on health, hygiene, and sustainable agriculture.',
    tags: ['STEM', 'National Qualifier', '53-Year Milestone', 'Inspire']
  },
  {
    id: 'act-2',
    title: '5 Rural Students Selected for Air Travel ISRO Visit',
    titleMr: 'इस्रो भेटीसाठी ५ विद्यार्थ्यांची निवड (विमानाने प्रवास)',
    descMr: "शाळेच्या तारांगण व खगोलशास्त्र लॅबमधील विशेष कामगिरीमुळे ५ होतकरू ग्रामीण विद्यार्थ्यांची शासनातर्फे विमानाने बंगळुरू व श्रीहरिकोटा येथील इस्रो केंद्रांच्या अभ्यास दौऱ्यासाठी निवड झाली.",
    descMr: "शाळेच्या तारांगण व खगोलशास्त्र लॅबमधील विशेष कामगिरीमुळे ५ होतकरू ग्रामीण विद्यार्थ्यांची शासनातर्फे विमानाने बंगळुरू व श्रीहरिकोटा येथील इस्रो केंद्रांच्या अभ्यास दौऱ्यासाठी निवड झाली.",
    descMr: "शाळेच्या तारांगण व खगोलशास्त्र लॅबमधील विशेष कामगिरीमुळे ५ होतकरू ग्रामीण विद्यार्थ्यांची शासनातर्फे विमानाने बंगळुरू व श्रीहरिकोटा येथील इस्रो केंद्रांच्या अभ्यास दौऱ्यासाठी निवड झाली.",
    year: '2024-25',
    category: 'science',
    categoryName: 'Science & Innovation',
    date: 'Consecutive Years 2024 & 2025',
    image: 'images/astronomy-milkyway-display.jpg',
    desc: 'Through competitive examinations, 5 students won full government funding to travel by air to the Indian Space Research Organisation (ISRO). Ganori is the ONLY government school in Chhatrapati Sambhajinagar district to achieve this magnificent honor.',
    tags: ['ISRO', 'Space Science', 'Aviation Visit', 'District Only']
  },
  {
    id: 'act-3',
    title: 'State 3rd Rank in Swachh Vidyalaya & 96.5%+ Score',
    titleMr: 'स्वच्छ विद्यालय हरित विद्यालय — ९६.५%+ गुणांसह राज्यात ३ रा',
    descMr: "गांधी रिसर्च फाउंडेशन, जळगाव यांच्या राज्यस्तरीय परीक्षणात गणोरी प्रशालेने ९६.५%+ गुणांसह संपूर्ण महाराष्ट्रात तृतीय क्रमांक मिळवून हरित शाळा म्हणून नावलौकिक मिळवला.",
    descMr: "गांधी रिसर्च फाउंडेशन, जळगाव यांच्या राज्यस्तरीय परीक्षणात गणोरी प्रशालेने ९६.५%+ गुणांसह संपूर्ण महाराष्ट्रात तृतीय क्रमांक मिळवून हरित शाळा म्हणून नावलौकिक मिळवला.",
    descMr: "गांधी रिसर्च फाउंडेशन, जळगाव यांच्या राज्यस्तरीय परीक्षणात गणोरी प्रशालेने ९६.५%+ गुणांसह संपूर्ण महाराष्ट्रात तृतीय क्रमांक मिळवून हरित शाळा म्हणून नावलौकिक मिळवला.",
    year: '2025-26',
    category: 'green',
    categoryName: 'Green Campus',
    date: '2022 & 2025 Consecutive',
    image: 'images/activity-cleanliness-swachh.jpg',
    desc: 'Scored an extraordinary 96.5%+ in the state-level Swachh Vidyalaya Harit Vidyalaya (SHVR) evaluation. Selected twice for the District Collector’s Commendation and ranked 3rd in the whole of Maharashtra in the prestigious Gandhi Teerth Jalgaon State Competition.',
    tags: ['Swachh Bharat', 'State Rank 3', 'Green School', '96.5%']
  },
  {
    id: 'act-4',
    title: 'Dense Forest Project: 700+ Native Trees & Drip Irrigation',
    titleMr: '७०० झाडांचे घनदाट अरण्य (डेन्सफॉरेस्ट) व ठिबक सिंचन',
    descMr: "जिल्हाधिकारी व भारतीय टपाल विभागाच्या वतीने गणोरी प्रशालेच्या शैक्षणिक क्रांतीचा गौरव म्हणून शाळेचे मानचिन्ह असलेले विशेष टपाल तिकीट दिमाखात प्रकाशित करण्यात आले.",
    descMr: "जिल्हाधिकारी व भारतीय टपाल विभागाच्या वतीने गणोरी प्रशालेच्या शैक्षणिक क्रांतीचा गौरव म्हणून शाळेचे मानचिन्ह असलेले विशेष टपाल तिकीट दिमाखात प्रकाशित करण्यात आले.",
    descMr: "जिल्हाधिकारी व भारतीय टपाल विभागाच्या वतीने गणोरी प्रशालेच्या शैक्षणिक क्रांतीचा गौरव म्हणून शाळेचे मानचिन्ह असलेले विशेष टपाल तिकीट दिमाखात प्रकाशित करण्यात आले.",
    year: '2024-25',
    category: 'green',
    categoryName: 'Green Campus',
    date: 'Ongoing Initiative',
    image: 'images/activity-tree-plantation-girls.jpg',
    desc: 'Transformed barren grounds into a thriving mini-forest of 700+ native shade, fruit, and medicinal trees. Equipped with a ₹20,000 automated drip irrigation network ensuring near 100% sapling survival during dry summer seasons.',
    tags: ['700 Trees', 'Dense Forest', 'Drip Irrigation', 'Eco Hub']
  },
  {
    id: 'act-5',
    title: 'NDRF Disaster Management & Life-Saving Simulation Camp',
    titleMr: 'एनडीआरएफ आपत्ती व्यवस्थापन व प्रथमोपचार प्रात्यक्षिक',
    descMr: "एचपी इंडिया फाउंडेशन व लर्निंग लिंक्स फाउंडेशन यांच्या संयुक्त विद्यमाने महाराष्ट्रातील पहिली शालेय AI प्रयोगशाळा सुरू झाली. ग्रामीण विद्यार्थ्यांना आता शाळेतच कोडिंग व कृत्रिम बुद्धिमत्तेचे धडे मिळत आहेत.",
    descMr: "एचपी इंडिया फाउंडेशन व लर्निंग लिंक्स फाउंडेशन यांच्या संयुक्त विद्यमाने महाराष्ट्रातील पहिली शालेय AI प्रयोगशाळा सुरू झाली. ग्रामीण विद्यार्थ्यांना आता शाळेतच कोडिंग व कृत्रिम बुद्धिमत्तेचे धडे मिळत आहेत.",
    descMr: "एचपी इंडिया फाउंडेशन व लर्निंग लिंक्स फाउंडेशन यांच्या संयुक्त विद्यमाने महाराष्ट्रातील पहिली शालेय AI प्रयोगशाळा सुरू झाली. ग्रामीण विद्यार्थ्यांना आता शाळेतच कोडिंग व कृत्रिम बुद्धिमत्तेचे धडे मिळत आहेत.",
    year: '2024-25',
    category: 'welfare',
    categoryName: 'Student Welfare',
    date: '17 April 2025',
    image: 'images/activity-ndrf-disaster-drill.jpg',
    desc: 'Specialized NDRF (National Disaster Response Force) commanders trained 300+ students and teachers in real-time CPR resuscitation, emergency stretcher carrying, flood lifebuoy usage, and earthquake safety drills.',
    tags: ['NDRF', 'First Aid', 'Disaster Readiness', 'Life Skills']
  },
  {
    id: 'act-6',
    title: 'Social Awareness Street Plays against Superstition',
    titleMr: 'अंधश्रद्धा निर्मूलन व व्यसनमुक्ती पथनाट्य मोहीम',
    descMr: "विद्यार्थी व शिक्षकांच्या श्रमदानातून शाळेच्या आवारात ७०० हून अधिक देशी वृक्षांची लागवड करून घनदाट अरण्य साकारण्यात आले. स्वयंचलित ठिबक सिंचनामुळे उन्हाळ्यातही हा परिसर सदाहरित राहतो.",
    descMr: "विद्यार्थी व शिक्षकांच्या श्रमदानातून शाळेच्या आवारात ७०० हून अधिक देशी वृक्षांची लागवड करून घनदाट अरण्य साकारण्यात आले. स्वयंचलित ठिबक सिंचनामुळे उन्हाळ्यातही हा परिसर सदाहरित राहतो.",
    descMr: "विद्यार्थी व शिक्षकांच्या श्रमदानातून शाळेच्या आवारात ७०० हून अधिक देशी वृक्षांची लागवड करून घनदाट अरण्य साकारण्यात आले. स्वयंचलित ठिबक सिंचनामुळे उन्हाळ्यातही हा परिसर सदाहरित राहतो.",
    year: '2024-25',
    category: 'arts',
    categoryName: 'Arts & Culture',
    date: 'January 2025',
    image: 'images/activity-street-play-awareness.jpg',
    desc: 'Students performed compelling live street plays (Pathnatya) before hundreds of village residents and visitors, spreading rational scientific temperament, girl child education, and anti-tobacco addiction messages.',
    tags: ['Street Play', 'Social Reform', 'Anti-Superstition', 'Drama']
  },
  {
    id: 'act-7',
    title: 'Eco-Friendly Shaadu Clay Ganesha Sculpting Workshop',
    titleMr: 'शाडूची माती पर्यावरणपूरक गणेश मूर्ती कार्यशाळा',
    descMr: "शाळेतील विद्यार्थ्यांनी परिसरातील गावांमध्ये जाऊन अंधश्रद्धा निर्मूलन, व्यसनमुक्ती, मुलींचे शिक्षण आणि पर्यावरण संरक्षणावर प्रभावी पथनाट्ये सादर करून समाजप्रबोधन केले.",
    descMr: "शाळेतील विद्यार्थ्यांनी परिसरातील गावांमध्ये जाऊन अंधश्रद्धा निर्मूलन, व्यसनमुक्ती, मुलींचे शिक्षण आणि पर्यावरण संरक्षणावर प्रभावी पथनाट्ये सादर करून समाजप्रबोधन केले.",
    descMr: "शाळेतील विद्यार्थ्यांनी परिसरातील गावांमध्ये जाऊन अंधश्रद्धा निर्मूलन, व्यसनमुक्ती, मुलींचे शिक्षण आणि पर्यावरण संरक्षणावर प्रभावी पथनाट्ये सादर करून समाजप्रबोधन केले.",
    year: '2025-26',
    category: 'arts',
    categoryName: 'Arts & Culture',
    date: 'August 2025 & September 2026',
    image: 'images/arts-ganesha-clay-idol.jpg',
    desc: 'In harmony with green school goals, students crafted 100% biodegradable Ganesha idols using natural river silt (Shaadu clay). Promotes zero water pollution while honoring traditional artistic craftsmanship.',
    tags: ['Eco Ganesha', 'Shaadu Clay', 'Zero Pollution', 'Artistry']
  },
  {
    id: 'act-8',
    title: 'Free Bicycle Distribution for Meritorious Girls',
    titleMr: 'गरजू व हुशार विद्यार्थिनींसाठी मोफत सायकल वाटप',
    descMr: "कला दालनामध्ये विद्यार्थ्यांनी पारंपरिक वारली चित्रकलेचे धडे गिरवले, तसेच गणेशोत्सवासाठी १००% पर्यावरणपूरक शाडूच्या मातीपासून सुंदर गणेशमूर्ती स्वतः तयार केल्या.",
    descMr: "कला दालनामध्ये विद्यार्थ्यांनी पारंपरिक वारली चित्रकलेचे धडे गिरवले, तसेच गणेशोत्सवासाठी १००% पर्यावरणपूरक शाडूच्या मातीपासून सुंदर गणेशमूर्ती स्वतः तयार केल्या.",
    descMr: "कला दालनामध्ये विद्यार्थ्यांनी पारंपरिक वारली चित्रकलेचे धडे गिरवले, तसेच गणेशोत्सवासाठी १००% पर्यावरणपूरक शाडूच्या मातीपासून सुंदर गणेशमूर्ती स्वतः तयार केल्या.",
    year: '2024-25',
    category: 'welfare',
    categoryName: 'Student Welfare',
    date: 'Academic Year 2024-25',
    image: 'images/activity-bicycle-distribution.jpg',
    desc: 'Through corporate donors, alumni, and local philanthropic support, brand-new bicycles were distributed to girl students from remote wadis and tandas, guaranteeing zero dropout rates and safe daily transportation.',
    tags: ['Bicycle Distribution', 'Beti Bachao', 'Zero Dropout', 'Empowerment']
  },
  {
    id: 'act-9',
    title: 'Bird Conservation: Handcrafted Nests & Summer Feeders',
    titleMr: 'पक्षी संवर्धन — घरटी निर्मिती व दाणा-पाणी उपक्रम',
    descMr: "ग्रामीण रुग्णालयाच्या सहकार्याने सर्व विद्यार्थ्यांची मोफत आरोग्य, दात व नेत्र तपासणी करण्यात आली आणि गरजू विद्यार्थ्यांना मोफत चष्मे व औषधोपचार पुरवण्यात आले.",
    descMr: "ग्रामीण रुग्णालयाच्या सहकार्याने सर्व विद्यार्थ्यांची मोफत आरोग्य, दात व नेत्र तपासणी करण्यात आली आणि गरजू विद्यार्थ्यांना मोफत चष्मे व औषधोपचार पुरवण्यात आले.",
    descMr: "ग्रामीण रुग्णालयाच्या सहकार्याने सर्व विद्यार्थ्यांची मोफत आरोग्य, दात व नेत्र तपासणी करण्यात आली आणि गरजू विद्यार्थ्यांना मोफत चष्मे व औषधोपचार पुरवण्यात आले.",
    year: '2025-26',
    category: 'green',
    categoryName: 'Green Campus',
    date: 'March 2026',
    image: 'images/activity-bird-conservation.jpg',
    desc: 'Students fashioned hundreds of wooden and bamboo bird nest boxes and mounted clay drinking bowls throughout the dense forest to protect sparrows and migratory birds during scorching summer heatwaves.',
    tags: ['Bird Conservation', 'Sparrow Protection', 'Biodiversity', 'Summer Care']
  },
  {
    id: 'act-10',
    title: 'Empty Plastic Pen Refill Collection & Recycling Campaign',
    titleMr: 'निरुपयोगी पेन रिफिल संकलन व प्लास्टिकमुक्ती मोहीम',
    descMr: "संविधान दिनानिमित्त उद्देशिकेचे सामूहिक वाचन, निबंध, वक्तृत्व व प्रश्नमंजुषा स्पर्धांचे आयोजन करून संविधानाची मूल्ये विद्यार्थ्यांच्या मनात रुजवण्यात आली.",
    descMr: "संविधान दिनानिमित्त उद्देशिकेचे सामूहिक वाचन, निबंध, वक्तृत्व व प्रश्नमंजुषा स्पर्धांचे आयोजन करून संविधानाची मूल्ये विद्यार्थ्यांच्या मनात रुजवण्यात आली.",
    descMr: "संविधान दिनानिमित्त उद्देशिकेचे सामूहिक वाचन, निबंध, वक्तृत्व व प्रश्नमंजुषा स्पर्धांचे आयोजन करून संविधानाची मूल्ये विद्यार्थ्यांच्या मनात रुजवण्यात आली.",
    year: '2025-26',
    category: 'green',
    categoryName: 'Green Campus',
    date: 'February 2026',
    image: 'images/activity-plastic-pen-recycling.jpg',
    desc: 'An innovative student-led environmental drive collecting thousands of used plastic ballpen refills and plastic bottles, preventing tons of non-biodegradable microplastics from entering village soil.',
    tags: ['Plastic Free', 'Recycling', 'Student Leadership', 'Cleanliness']
  },
  {
    id: 'act-11',
    title: 'State & District Teacher Day Felicitation for 6 Consecutive Years',
    titleMr: 'सलग ६ वर्षे जिल्हा परिषद शिक्षक गौरव व पुरस्कार',
    descMr: "छत्रपती संभाजीनगर जिल्हा परिषदेने गणोरी प्रशालेला तालुक्यातील सर्वाधिक गतिमान, गुणवत्तापूर्ण आणि प्रयोगशील शाळा म्हणून सलग ६ व्या वर्षी विशेष सन्मानित केले.",
    descMr: "छत्रपती संभाजीनगर जिल्हा परिषदेने गणोरी प्रशालेला तालुक्यातील सर्वाधिक गतिमान, गुणवत्तापूर्ण आणि प्रयोगशील शाळा म्हणून सलग ६ व्या वर्षी विशेष सन्मानित केले.",
    descMr: "छत्रपती संभाजीनगर जिल्हा परिषदेने गणोरी प्रशालेला तालुक्यातील सर्वाधिक गतिमान, गुणवत्तापूर्ण आणि प्रयोगशील शाळा म्हणून सलग ६ व्या वर्षी विशेष सन्मानित केले.",
    year: '2024-25',
    category: 'welfare',
    categoryName: 'Student Welfare',
    date: 'Consecutive Years 2020 to 2026',
    image: 'images/science-national-award.jpg',
    desc: 'Zilla Parishad Chhatrapati Sambhajinagar has officially honored Ganori Prashala for 6 consecutive years as the Taluka’s most dynamic, innovative, and competitively forward-thinking school with multiple district teacher awards.',
    tags: ['6-Year Award', 'Teacher Excellence', 'ZP Recognition', 'Super 30']
  },
  {
    id: 'act-12',
    title: 'MGM University Innovation Meet Medals & Project Accolades',
    titleMr: 'एमजीएम विद्यापीठ संशोधन व नाविन्यपूर्ण प्रकल्प गौरव',
    descMr: "एमजीएम विद्यापीठात आयोजित विभागीय नवोपक्रम व विज्ञान स्पर्धेत गणोरीच्या बालवैज्ञानिकांनी पदक, प्रशस्तिपत्रक आणि तज्ज्ञ मार्गदर्शकांचा बहुमान मिळवला.",
    descMr: "एमजीएम विद्यापीठात आयोजित विभागीय नवोपक्रम व विज्ञान स्पर्धेत गणोरीच्या बालवैज्ञानिकांनी पदक, प्रशस्तिपत्रक आणि तज्ज्ञ मार्गदर्शकांचा बहुमान मिळवला.",
    descMr: "एमजीएम विद्यापीठात आयोजित विभागीय नवोपक्रम व विज्ञान स्पर्धेत गणोरीच्या बालवैज्ञानिकांनी पदक, प्रशस्तिपत्रक आणि तज्ज्ञ मार्गदर्शकांचा बहुमान मिळवला.",
    year: '2024-25',
    category: 'science',
    categoryName: 'Science & Innovation',
    date: '30 May 2025',
    image: 'images/science-mgm-winners.jpg',
    desc: 'Secondary student innovators competed alongside leading regional schools and collegiate innovators at MGM University, winning medals, certificates, and research mentors for creative technical ideas.',
    tags: ['MGM University', 'Innovation Medals', 'Research Honors', 'Youth STEM']
  }
];


// =============================================================================
// I18N BILINGUAL TRANSLATION ENGINE (मराठी DEFAULT / ENGLISH)
// =============================================================================
const I18N_DICTIONARY = {
  mr: {
    "top_pmshri": "⭐ <b>PM SHRI</b> टप्पा-३ निवड",
    "top_location": "📍 ता. फुलंब्री, जि. छत्रपती संभाजीनगर",
    "top_hm_phone": "📞 मुख्याध्यापक: +91 9226966376",
    "ticker_label": "ताजी बातमी",
    "brand_motto": "॥ दृढ प्रयत्नेन सिद्ध्यते ॥",
    "brand_title": "पीएम श्री जि. प. प्रशाला, गणोरी",
    "brand_sub": "प्राथमिक, उच्च प्राथमिक, माध्यमिक व उच्च माध्यमिक शिक्षण संकुल",
    "nav_home": "मुख्यपृष्ठ",
    "nav_about": "शाळेविषयी",
    "nav_labs": "१० प्रयोगशाळा",
    "nav_activities": "शालेय उपक्रम",
    "nav_staff": "शिक्षकवृंद (२१)",
    "nav_awards": "गौरव व पुरस्कार",
    "nav_contact": "प्रवेश व संपर्क",
    "nav_admission": "प्रवेश सुरू",
    "hero_badge": "<span>✨</span> महाराष्ट्राची आदर्श ग्रामीण शाळा · PM SHRI टप्पा ३",
    "hero_title": "ग्रामीण प्रतिभेला <span class=\"text-gold\">AI, अंतराळ विज्ञान व कौशल्यांची</span> नवी भरारी",
    "hero_desc": "<b>पीएम श्री जिल्हा परिषद प्रशाला, गणोरी</b> मध्ये आपले सहर्ष स्वागत — राज्यातील पहिली शालेय AI लॅब, १० अत्याधुनिक प्रयोगशाळा, ७०० झाडांचे घनदाट अरण्य आणि शासकीय विज्ञान प्रदर्शनात ५३ वर्षांनी राष्ट्रीय स्तरावर निवड झालेली पहिली जि. प. शाळा.",
    "hero_btn_labs": "🔬 १० प्रयोगशाळा पहा",
    "hero_btn_activities": "📸 २ वर्षांचे उपक्रम",
    "hero_btn_staff": "👥 २१ शिक्षकवृंद",
    "hero_chip_1": "🤖 राज्यातील १ ली AI लॅब",
    "hero_chip_2": "🔭 ५ इस्रो विमान स्कॉलर्स",
    "hero_chip_3": "🌳 ७००+ वृक्षांचे अरण्य",
    "hero_chip_4": "🏆 ९६.५% स्वच्छ विद्यालय",
    "hero_chip_5": "⚙️ NSQF ऑटोमोबाईल व MSFC",
    "hero_badge_float1_title": "राज्यातील १ ली AI लॅब",
    "hero_badge_float1_sub": "HP Foundation व SCERT पुणे",
    "hero_badge_float2_title": "इस्रो विमान भेट विजेते",
    "hero_badge_float2_sub": "५ विद्यार्थ्यांची अंतराळ केंद्रांना भेट",
    "stat_label_1": "प्रवेशित विद्यार्थी (इ. ५ ते १२ वी)",
    "stat_label_2": "अत्याधुनिक प्रयोगशाळा",
    "stat_label_3": "समर्पित शिक्षक व मार्गदर्शक",
    "stat_label_4": "इस्रो विमान भेट स्कॉलर्स",
    "stat_label_5": "ठिबक सिंचनासह देशी वृक्ष",
    "stat_label_6": "ऐतिहासिक राष्ट्रीय विज्ञान निवड",
    "about_tag": "शाळेची ओळख · About Our School",
    "about_title": "ग्रामीण शैक्षणिक गुणवत्तेचा नवा मानदंड",
    "about_desc": "छत्रपती संभाजीनगर जिल्ह्यातील फुलंब्री तालुक्यात दिमाखात उभी असलेली पीएम श्री जि. प. प्रशाला गणोरी ही इयत्ता ५ वी ते १२ वी (कला व विज्ञान) पर्यंतचे एक परिपूर्ण शैक्षणिक संकुल आहे, जे भौतिक सुविधा, तंत्रज्ञान आणि व्यक्तिमत्त्व घडणीत अग्रगण्य आहे.",
    "about_h3": "दृढ प्रयत्नेन सिद्ध्यते — अखंड प्रयत्नांतूनच सिद्धी",
    "about_lead": "ग्रामीण भागातील विद्यार्थ्यांनाही जगातील सर्वोत्कृष्ट तंत्रज्ञान, प्रयोगशील विज्ञान आणि कला-संस्कृतीचे व्यासपीठ मिळावे या ध्येयाने आमची शाळा कार्यरत आहे.",
    "about_pmshri": "केंद्र सरकारच्या <b>PM SHRI योजनेअंतर्गत (टप्पा ३, २०२५-२६)</b> निवड झालेली गणोरी प्रशाला ही संपूर्ण छत्रपती संभाजीनगर जिल्ह्यातील निवडक दोन शाळांपैकी एक आहे.",
    "about_feat_1": "<strong>परिपूर्ण शैक्षणिक संकुल:</strong> प्राथमिक (५वी), उच्च प्राथमिक (६ ते ८), माध्यमिक (९ व १०) आणि उच्च माध्यमिक कनिष्ठ महाविद्यालय (११ व १२ कला आणि विज्ञान).",
    "about_feat_2": "<strong>व्यावसायिक कौशल्य शिक्षण (NSQF):</strong> २०१५-१६ पासून व्यावसायिक शिक्षणात अग्रेसर; पारंपरिक विषयांना पर्याय म्हणून ऑटोमोबाईल मेकॅनिक्स व मल्टी-स्किल फाउंडेशन कोर्स (MSFC).",
    "about_feat_3": "<strong>BALA (अध्ययनास पूरक इमारत):</strong> शाळेची प्रत्येक भिंत, कॉरिडॉर व आवार विज्ञान, वारली आदिवासी कला, खगोलशास्त्र व सुविचारांचे थेट धडे देते.",
    "about_feat_4": "<strong>सुरक्षित व स्मार्ट परिसर:</strong> ४० सीसीटीव्ही कॅमेरे, ३ मॉनिटर स्टेशन्स, आरओ शुद्ध पिण्याचे पाणी, आधुनिक स्वच्छतागृहे व हाय-स्पीड इंटरनेट.",
    "about_card1_title": "महाएआय मिशन पायलट",
    "about_card1_desc": "HP India Foundation व SCERT पुणे यांच्या सहकार्याने शालेय AI लॅब पायलटसाठी महाराष्ट्रातील केवळ ३ शाळांत आणि मराठवाड्यातील एकमेव निवड.",
    "about_card2_title": "घनदाट अरण्य व हरित परिसर",
    "about_card2_desc": "स्वयंचलित ठिबक सिंचन प्रणालीद्वारे ७००+ देशी झाडांचे संवर्धन; समृद्ध नैसर्गिक परिसंस्था, पक्षी संवर्धन व तंबाखूमुक्त शाळा.",
    "about_card3_title": "५३ वर्षांचा राष्ट्रीय विज्ञान गौरव",
    "about_card3_desc": "शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर पात्र ठरणारी पहिली जिल्हा परिषद शाळा ठरण्याचा ऐतिहासिक विक्रम.",
    "about_card4_title": "टपाल तिकीट सन्मान",
    "about_card4_desc": "जिल्हाधिकाऱ्यांच्या हस्ते गणोरी प्रशालेचे मानचिन्ह असलेले विशेष टपाल तिकीट प्रकाशित करून शाळेचा बहुमान.",
    "labs_tag": "अत्याधुनिक पायाभूत सुविधा · १० प्रयोगशाळा",
    "labs_title": "आमच्या १० अत्याधुनिक प्रयोगशाळांचा परिचय",
    "labs_desc": "केवळ पुस्तकी ज्ञानापलीकडे जाऊन कृत्रिम बुद्धिमत्ता, अंतराळ विज्ञान, रोबोटिक्स, 3D प्रिंटिंग आणि औद्योगिक कौशल्यांचे थेट प्रात्यक्षिक प्रशिक्षण देणारी १० आधुनिक दालने.",
    "act_tag": "अनुभवातून शिक्षण · मागील २ वर्षांतील उपक्रम",
    "act_title": "मागील २ वर्षांतील ठळक उपक्रम (२०२४–२०२६)",
    "act_desc": "शैक्षणिक सत्र २०२४-२५ व २०२५-२६ मधील विज्ञान यश, पर्यावरण संवर्धन, सांस्कृतिक महोत्सव आणि जीवनकौशल्यांचा सचित्र आढावा.",
    "act_filter_all": "सर्व उपक्रम (१२+)",
    "act_filter_2025": "शैक्षणिक वर्ष २०२५-२६",
    "act_filter_2024": "शैक्षणिक वर्ष २०२४-२५",
    "act_filter_sci": "🔬 विज्ञान व STEM",
    "act_filter_green": "🌱 हरित परिसर",
    "act_filter_arts": "🎨 कला व संस्कृती",
    "act_filter_welfare": "🤝 विद्यार्थी कल्याण",
    "staff_tag": "समर्पित शिक्षकवृंद · टीम गणोरी प्रशाला",
    "staff_title": "आमचे २१ मार्गदर्शक व शिक्षक",
    "staff_desc": "मुख्याध्यापक श्री. अनिल प्र. देशमुख यांच्या प्रेरणादायी नेतृत्वाखाली आमचे २१ समर्पित शिक्षक, लॅब संचालक आणि कर्मचारी प्रत्येक विद्यार्थ्याचा सर्वांगीण विकास घडवण्यासाठी अहोरात्र कार्यरत आहेत.",
    "staff_tab_all": "सर्व (२१)",
    "staff_tab_lead": "प्रशासन व नेतृत्व",
    "staff_tab_stem": "विज्ञान व गणित",
    "staff_tab_humanities": "भाषा व सामाजिक शास्त्रे",
    "staff_tab_vocational": "कौशल्य व प्रयोगशाळा",
    "staff_tab_primary": "प्राथमिक व क्रीडा",
    "staff_hint": "💡 सविस्तर माहिती व भूमिकेसाठी कार्डवर क्लिक करा",
    "awards_tag": "🏆 पुरस्कार व ऐतिहासिक गौरव",
    "awards_title": "अभिनव व गुणवत्तापूर्ण शिक्षणासाठी महाराष्ट्रभर गौरव",
    "awards_desc": "योग्य मार्गदर्शन आणि नेतृत्व लाभल्यास ग्रामीण भागातील सरकारी शाळांचे विद्यार्थीही विज्ञान, पर्यावरण आणि स्वच्छतेमध्ये देशाला दिशा देऊ शकतात हे गणोरी प्रशालेने सातत्याने सिद्ध केले आहे.",
    "award_pt1_title": "५३ वर्षांचा राष्ट्रीय विज्ञान विक्रम",
    "award_pt1_desc": "शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात २०२५-२६ मध्ये राष्ट्रीय स्तरावर पोहोचणारी पहिली जि. प. शाळा.",
    "award_pt2_title": "महाराष्ट्र राज्य स्तर ३ रा क्रमांक",
    "award_pt2_desc": "गांधी तीर्थ जळगाव यांच्या राज्यस्तरीय स्वच्छ व हरित विद्यालय परीक्षणात ९६.५%+ गुणांसह राज्यात तृतीय क्रमांक.",
    "award_pt3_title": "सलग ६ वर्षे जि. प. विशेष गौरव",
    "award_pt3_desc": "शिक्षक दिनानिमित्त फुलंब्री तालुक्यातील अग्रगण्य नाविन्यपूर्ण शाळा म्हणून सलग ६ वर्षे सन्मानित.",
    "award_pt4_title": "विशेष टपाल तिकीट गौरव",
    "award_pt4_desc": "जिल्हाधिकाऱ्यांच्या हस्ते शाळेचे मानचिन्ह असलेले विशेष टपाल तिकीट प्रकाशित.",
    "poster_tag": "अधिकृत माहितीपत्रक · Official Notice",
    "poster_title": "हीच ती वेळ... शाळा बदलून गणोरी प्रशालेत प्रवेश घेण्याची!",
    "poster_desc": "विद्यार्थ्यांच्या गुणवत्ता विकासासाठी नवनवीन वाटा शोधणारी शाळा. इंग्रजी माध्यमांच्या खाजगी शाळांपेक्षा दर्जेदार डिजिटल, रोबोटिक्स, व खगोलशास्त्र शिक्षण मोफत उपलब्ध!",
    "poster_f1": "⭐ <b>मोफत:</b> प्रवेश, पाठ्यपुस्तके, गणवेश, बूट-सॉक्स व सकस पोषण आहार",
    "poster_f2": "⭐ <b>विशेष वर्ग:</b> १०वी, १२वी व शिष्यवृत्ती परीक्षांसाठी तज्ज्ञ शिक्षकांचे मार्गदर्शन",
    "poster_f3": "⭐ <b>कौशल्य विकास:</b> ९वी ते १२वी ऑटोमोबाईल व मल्टीस्किल व्यावसायिक प्रमाणपत्र",
    "poster_f4": "⭐ <b>स्पर्धा परीक्षा:</b> नवोदय, NMMS, MTS, NTS व इस्रो भरारी मार्गदर्शन",
    "poster_btn": "📞 संपर्क: ९२२६९६६३७६ (मुख्याध्यापक)",
    "poster_view": "🔍 पूर्ण आकाराचे अधिकृत माहितीपत्रक पाहण्यासाठी क्लिक करा",
    "contact_tag": "प्रवेश माहिती व संपर्क · Admissions & Enquiries",
    "contact_title": "शाळेला प्रत्यक्ष भेट द्या किंवा संपर्क साधा",
    "contact_lead": "पालक, शिक्षक, विज्ञानप्रेमी व विद्यार्थ्यांचे आमच्या १० प्रयोगशाळा पाहण्यासाठी व शिक्षकांना भेटण्यासाठी नेहमीच सहर्ष स्वागत आहे.",
    "contact_addr_lbl": "शाळेचा पत्ता",
    "contact_addr_val": "पीएम श्री जिल्हा परिषद प्रशाला, गणोरी, ता. फुलंब्री, जि. छत्रपती संभाजीनगर, महाराष्ट्र - ४३११११",
    "contact_hm_lbl": "मुख्याध्यापक",
    "contact_phone_lbl": "थेट संपर्क / व्हॉट्सॲप",
    "contact_email_lbl": "अधिकृत ईमेल",
    "contact_udise_lbl": "UDISE संकेतांक व वर्ग",
    "contact_udise_val": "UDISE: 27190900702 | वर्ग: ५ वी ते १२ वी (कला व विज्ञान)",
    "form_title": "व्हॉट्सॲपद्वारे त्वरित प्रवेश व माहिती चौकशी",
    "form_sub": "हा फॉर्म भरून थेट मुख्याध्यापक श्री. अनिल देशमुख सरांना व्हॉट्सॲपवर संदेश पाठवा.",
    "form_name_lbl": "विद्यार्थ्याचे संपूर्ण नाव *",
    "form_class_lbl": "प्रवेशासाठी इच्छित इयत्ता *",
    "form_phone_lbl": "पालकांचा व्हॉट्सॲप मोबाईल नंबर *",
    "form_note_lbl": "आपला प्रश्न किंवा संदेश (ऐच्छिक)",
    "form_submit_btn": "💬 व्हॉट्सॲपवर चौकशी पाठवा",
    "form_wa_direct": "🟢 मुख्याध्यापकांशी थेट व्हॉट्सॲप संवाद",
    "footer_desc": "छत्रपती संभाजीनगर जिल्ह्यातील फुलंब्री तालुक्यातील अग्रगण्य शासकीय शिक्षण संस्था. ग्रामीण विद्यार्थ्यांना जागतिक दर्जाचे STEM, AI, अंतराळ विज्ञान आणि व्यावसायिक कौशल्ये प्रदान करण्यासाठी कटिबद्ध.",
    "footer_quick_links": "महत्त्वाच्या लिंक्स",
    "footer_labs_title": "१० अत्याधुनिक प्रयोगशाळा",
    "footer_office_title": "संपर्क कार्यालय",
    "footer_green": "🌿 <b>हरित संकल्प:</b> तंबाखूमुक्त व प्लास्टिकमुक्त पर्यावरणपूरक परिसर",
    "footer_copy": "© <span id=\"currentYear\">2026</span> पीएम श्री जिल्हा परिषद प्रशाला, गणोरी. सर्व हक्क राखीव.",
    "footer_dev": "<b>अनिकेत माने (B.Tech Computer Science)</b> यांच्याद्वारे विकसित | गणोरीतून सस्नेह निर्मित ❤️",
    "staff_btn_show_all": "सर्व २१ शिक्षकवृंद पहा",
        "form_name_ph": "उदा. अनिकेत माने किंवा पालकांचे नाव",
    "form_phone_ph": "१० अंकी मोबाईल नंबर (उदा. 9876543210)",
    "form_note_ph": "कोणत्या वर्गासाठी प्रवेश हवा आहे किंवा इतर चौकशी...",
    "staff_search_ph": "शिक्षकांचे नाव किंवा विषयानुसार शोधा...",
    "fab_wa_title": "मुख्याध्यापकांशी व्हॉट्सॲपवर संपर्क साधा",
    "fab_top_title": "पृष्ठाच्या सुरुवातीला जा",
  },
  en: {

    "top_pmshri": "⭐ <b>PM SHRI</b> Phase-3 Selection",
    "top_location": "📍 Tal. Phulambri, Dist. Chhatrapati Sambhajinagar",
    "top_hm_phone": "📞 Headmaster: +91 9226966376",
    "ticker_label": "Latest News",
    "brand_motto": "॥ दृढ प्रयत्नेन सिद्ध्यते ॥",
    "brand_title": "PM SHRI Z. P. Prashala, Ganori",
    "brand_sub": "Primary, Upper Primary, Secondary & Higher Secondary Education Complex",
    "nav_home": "Home",
    "nav_about": "About School",
    "nav_labs": "10 Laboratories",
    "nav_activities": "Activities",
    "nav_staff": "Faculty & Staff (21)",
    "nav_awards": "Awards & Honors",
    "nav_contact": "Admissions & Contact",
    "nav_admission": "Admissions Open",
    "hero_badge": "<span>✨</span> Maharashtra's Model Rural School · PM SHRI Phase 3",
    "hero_title": "Empowering Rural Talent with <span class=\"text-gold\">AI, Space Science & 21st-Century Skills</span>",
    "hero_desc": "Welcome to <b>PM SHRI Zilla Parishad Prashala, Ganori</b> — Home to Maharashtra’s 1st School AI Laboratory, 10 advanced laboratories, a 700+ tree dense micro-forest, and the first ZP school in 53 years to qualify for the National Science Exhibition.",
    "hero_btn_labs": "🔬 Explore 10 Labs",
    "hero_btn_activities": "📸 2-Year Activities",
    "hero_btn_staff": "👥 21 Faculty Profiles",
    "hero_chip_1": "🤖 1st School AI Lab in MH",
    "hero_chip_2": "🔭 5 ISRO Flight Scholars",
    "hero_chip_3": "🌳 700+ Tree Dense Forest",
    "hero_chip_4": "🏆 96.5% Swachh Vidyalaya",
    "hero_chip_5": "⚙️ NSQF Automobile & MSFC",
    "hero_badge_float1_title": "State's 1st AI Lab",
    "hero_badge_float1_sub": "HP Foundation & SCERT Pune",
    "hero_badge_float2_title": "ISRO Flight Winners",
    "hero_badge_float2_sub": "5 Students Visited Space Centers",
    "stat_label_1": "Enrolled Students (Std 5th-12th)",
    "stat_label_2": "State-of-the-Art Laboratories",
    "stat_label_3": "Dedicated Teachers & Mentors",
    "stat_label_4": "ISRO Airplane Tour Scholars",
    "stat_label_5": "Native Trees with Drip Irrigation",
    "stat_label_6": "Historic National Science Selection",
    "about_tag": "About Our School · Overview",
    "about_title": "A New Benchmark in Rural Educational Excellence",
    "about_desc": "Standing proudly in Phulambri Taluka of Chhatrapati Sambhajinagar district, PM SHRI ZP Prashala Ganori is a comprehensive educational campus offering 5th to 12th Std (Arts & Science), pioneering physical infrastructure, technology, and character development.",
    "about_h3": "Dridha Prayatnena Siddhyate — Achievement Through Persistent Effort",
    "about_lead": "Our school is dedicated to empowering rural students with world-class technology, experiential science, and cultural platforms.",
    "about_pmshri": "Selected under the Central Government's <b>PM SHRI Scheme (Phase 3, 2025-26)</b>, Ganori Prashala is one of only two schools selected in the entire Chhatrapati Sambhajinagar district.",
    "about_feat_1": "<strong>Comprehensive Campus:</strong> Primary (5th), Upper Primary (6th-8th), Secondary (9th-10th), and Junior College (11th-12th Arts & Science).",
    "about_feat_2": "<strong>Vocational Skill Education (NSQF):</strong> Pioneer in vocational training since 2015-16, offering Automobile Mechanics and Multi-Skill Foundation Course (MSFC) as alternatives to conventional subjects.",
    "about_feat_3": "<strong>BALA (Building As a Learning Aid):</strong> Every wall, corridor, and courtyard teaches science, Warli tribal art, astronomy, and inspirational values.",
    "about_feat_4": "<strong>Safe & Smart Campus:</strong> 40 CCTV cameras, 3 monitor stations, RO purified drinking water, modern sanitation, and high-speed broadband.",
    "about_card1_title": "MahaAI Mission Pilot",
    "about_card1_desc": "Selected as one of only 3 schools in Maharashtra and the only school in Marathwada for the School AI Lab Pilot in collaboration with HP India Foundation and SCERT Pune.",
    "about_card2_title": "Dense Forest & Green Eco-Campus",
    "about_card2_desc": "Conserving 700+ native trees with an automated drip irrigation system; rich ecosystem, bird conservation, and a 100% tobacco-free campus.",
    "about_card3_title": "53-Year Historic National Science Milestone",
    "about_card3_desc": "Historic distinction of becoming the first ZP school in the 53-year history of the Government Science Exhibition to qualify for the National Level.",
    "about_card4_title": "Postal Stamp Honor",
    "about_card4_desc": "Honored with a customized Indian Postal Department postage stamp bearing the emblem of Ganori Prashala, unveiled by the District Collector.",
    "labs_tag": "Cutting-Edge Infrastructure · 10 Laboratories",
    "labs_title": "Explore Our 10 Advanced Laboratories",
    "labs_desc": "10 modern experiential learning centers moving beyond textbooks to provide hands-on training in Artificial Intelligence, Space Science, Robotics, 3D Printing, and Vocational Skills.",
    "act_tag": "Experiential Learning · Activities from Last 2 Years",
    "act_title": "Major Activities & Milestones (2024–2026)",
    "act_desc": "A visual archive of academic sessions 2024-25 and 2025-26 showcasing science breakthroughs, environmental conservation, cultural festivals, and life skills.",
    "act_filter_all": "All Activities (12+)",
    "act_filter_2025": "Academic Year 2025-26",
    "act_filter_2024": "Academic Year 2024-25",
    "act_filter_sci": "🔬 Science & STEM",
    "act_filter_green": "🌱 Green Campus",
    "act_filter_arts": "🎨 Art & Culture",
    "act_filter_welfare": "🤝 Student Welfare",
    "staff_tag": "Dedicated Educators · Team Ganori Prashala",
    "staff_title": "Our 21 Faculty Members & Mentors",
    "staff_desc": "Under the inspiring leadership of Headmaster Shri. Anil P. Deshmukh, our 21 devoted teachers, lab instructors, and staff work untiringly to nurture every student's potential.",
    "staff_tab_all": "All (21)",
    "staff_tab_lead": "Administration & Leadership",
    "staff_tab_stem": "Science & Mathematics",
    "staff_tab_humanities": "Languages & Social Sciences",
    "staff_tab_vocational": "Vocational & Laboratories",
    "staff_tab_primary": "Primary & Physical Education",
    "staff_hint": "💡 Click any card to view detailed profile and responsibilities",
    "awards_tag": "🏆 Awards & Historic Honors",
    "awards_title": "Statewide Recognition for Innovative & Quality Education",
    "awards_desc": "Ganori Prashala has repeatedly demonstrated that with proper vision and guidance, rural government school students can lead the nation in science, environment, and clean campus initiatives.",
    "award_pt1_title": "53-Year National Science Record",
    "award_pt1_desc": "First Zilla Parishad school in the 53-year history of the State Science Exhibition to reach the National Level in 2025-26.",
    "award_pt2_title": "3rd Rank in Maharashtra State",
    "award_pt2_desc": "Secured 3rd rank across Maharashtra in the Swachh & Harit Vidyalaya evaluation by Gandhi Research Foundation, Jalgaon with a 96.5%+ score.",
    "award_pt3_title": "6 Consecutive Years ZP Special Honor",
    "award_pt3_desc": "Honored on Teacher's Day for 6 consecutive years as Phulambri Taluka's leading innovative and dynamic school.",
    "award_pt4_title": "Special Commemorative Postage Stamp",
    "award_pt4_desc": "Customized Indian postal stamp featuring the school emblem released by the District Collector.",
    "poster_tag": "Official Prospectus · Admissions Notice",
    "poster_title": "The Right Time to Switch to Ganori Prashala for Quality Education!",
    "poster_desc": "A school constantly pioneering innovative pathways for student excellence. High-quality digital, robotics, and astronomy education that outclasses private English-medium schools — completely free!",
    "poster_f1": "⭐ <b>Free:</b> Admission, Textbooks, Uniforms, Shoes-Socks & Nutritious Mid-Day Meals",
    "poster_f2": "⭐ <b>Special Classes:</b> Expert teacher coaching for 10th, 12th & Scholarship Exams",
    "poster_f3": "⭐ <b>Skill Courses:</b> Automobile & Multi-Skill Vocational certification for 9th-12th",
    "poster_f4": "⭐ <b>Competitive Exams:</b> Navodaya, NMMS, MTS, NTS & ISRO guidance",
    "poster_btn": "📞 Contact: 9226966376 (Headmaster)",
    "poster_view": "🔍 Click to view full-size official admissions brochure",
    "contact_tag": "Admissions & Enquiries · Get in Touch",
    "contact_title": "Visit Our Campus or Reach Out to Us",
    "contact_lead": "Parents, teachers, science enthusiasts, and students are always welcome to tour our 10 laboratories and meet our faculty.",
    "contact_addr_lbl": "School Address",
    "contact_addr_val": "PM SHRI Zilla Parishad Prashala, Ganori, Tal. Phulambri, Dist. Chhatrapati Sambhajinagar, Maharashtra - 431111",
    "contact_hm_lbl": "Headmaster",
    "contact_phone_lbl": "Direct Phone / WhatsApp",
    "contact_email_lbl": "Official Email",
    "contact_udise_lbl": "UDISE Code & Grades",
    "contact_udise_val": "UDISE: 27190900702 | Grades: 5th to 12th (Arts & Science)",
    "form_title": "Quick Admission Enquiry via WhatsApp",
    "form_sub": "Fill out this form to connect directly with Headmaster Shri. Anil Deshmukh on WhatsApp.",
    "form_name_lbl": "Student's Full Name *",
    "form_class_lbl": "Target Class for Admission *",
    "form_phone_lbl": "Parent's WhatsApp Mobile Number *",
    "form_note_lbl": "Your Query or Message (Optional)",
    "form_submit_btn": "💬 Send Enquiry via WhatsApp",
    "form_wa_direct": "🟢 Direct WhatsApp Chat with Headmaster",
    "footer_desc": "Leading government educational institution in Phulambri Taluka, Chhatrapati Sambhajinagar. Committed to providing rural students with world-class STEM, AI, Space Science, and vocational skills.",
    "footer_quick_links": "Quick Links",
    "footer_labs_title": "10 Advanced Laboratories",
    "footer_office_title": "Administrative Office",
    "footer_green": "🌿 <b>Green Pledge:</b> 100% Tobacco-Free & Plastic-Free Eco-Campus",
    "footer_copy": "© <span id=\"currentYear\">2026</span> PM SHRI Zilla Parishad Prashala, Ganori. All Rights Reserved.",
    "footer_dev": "Developed by <b>Aniket Mane (B.Tech Computer Science)</b> | Crafted with ❤️ from Ganori",
    "staff_btn_show_all": "View All 21 Faculty & Staff",
        "form_name_ph": "e.g. Student Name or Parent Name",
    "form_phone_ph": "10-digit Mobile Number (e.g. 9876543210)",
    "form_note_ph": "Class for admission, lab inquiry, or message...",
    "staff_search_ph": "Search by faculty name or subject...",
    "fab_wa_title": "Chat with Headmaster on WhatsApp",
    "fab_top_title": "Scroll to Top",
  }
};

const NEWS_ITEMS_MR = [
  '✨ इ. ५ वी ते १२ वी (कला व विज्ञान) प्रवेश सुरू',
  '🚀 महाराष्ट्रातील १ ली शालेय AI लॅब गणोरी प्रशालेत कार्यरत',
  '🏆 शासकीय विज्ञान प्रदर्शनात ५३ वर्षांनी राष्ट्रीय स्तरावर निवड झालेली पहिली जि. प. शाळा',
  '🔭 ५ विद्यार्थ्यांची इस्रो (ISRO) विमान सफारीसाठी निवड — जिल्ह्याचा विक्रम',
  '🌿 स्वच्छ विद्यालय हरित विद्यालय राज्यस्तरीय ३ रा क्रमांक (९६.५% गुण)',
  '🌳 ७००+ वृक्षांचे घनदाट अरण्य व ठिबक सिंचन प्रणाली',
  '📞 थेट संपर्क मुख्याध्यापक श्री. अनिल देशमुख: +91 9226966376'
];

const NEWS_ITEMS_EN = [
  '✨ Admissions Open for Std 5th to 12th (Arts & Science)',
  '🚀 Maharashtra’s 1st State School AI Laboratory operational at Ganori',
  '🏆 First ZP School in 53 Years to Qualify for National Science Exhibition (2025-26)',
  '🔭 5 Students Selected for Air Travel ISRO Visit — Unique District Record',
  '🌿 State Rank 3 in Swachh Vidyalaya Harit Vidyalaya with 96.5%+ Score',
  '🌳 700+ Native Tree Dense Forest with Automated Drip Irrigation on Campus',
  '📞 Contact Headmaster Shri. Anil Deshmukh: +91 9226966376'
];

// =============================================================================
// 4. CORE CONTROLLER & DOM INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLiveTicker();
  initThemeToggle();
  initLanguageToggle();
  initMobileNav();
  initStatsCounter();
  renderLabs();
  renderActivities();
  renderStaff();
  initStaffSearchAndFilter();
  initLightbox();
  initContactForm();
  initScrollTop();
});

// -----------------------------------------------------------------------------
// Live News Ticker
// -----------------------------------------------------------------------------
function initLiveTicker() {
  const marquee = document.getElementById('tickerMarquee');
  if (!marquee) return;

  const newsItems = currentLang === 'mr' ? NEWS_ITEMS_MR : NEWS_ITEMS_EN;

  // Repeat for continuous marquee
  const fullHtml = [...newsItems, ...newsItems].map(item => `
    <span class="ticker-item">${item}</span>
  `).join('');

  marquee.innerHTML = fullHtml;
}

// -----------------------------------------------------------------------------
// Dark / Light Theme
// -----------------------------------------------------------------------------
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  let savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('zp_theme') || 'light';
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('zp_theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (!iconSpan) return;
  iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// -----------------------------------------------------------------------------
// Bilingual Language Engine (मराठी BY DEFAULT / English)
// -----------------------------------------------------------------------------
let savedLang = 'mr';
try {
  savedLang = localStorage.getItem('zp_lang');
} catch (e) {
  // restricted environment fallback
}
let currentLang = (savedLang === 'en' || savedLang === 'mr') ? savedLang : 'mr'; // BY DEFAULT MARATHI

function updatePageTranslations(lang) {
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.mr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Dynamic Page Title & Meta Description update
  if (lang === 'mr') {
    document.title = 'पीएम श्री जिल्हा परिषद प्रशाला, गणोरी | PM SHRI ZP Prashala, Ganori';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'पीएम श्री जिल्हा परिषद प्रशाला, गणोरी, ता. फुलंब्री, जि. छत्रपती संभाजीनगरचे अधिकृत संकेतस्थळ. महाराष्ट्रातील पहिली शालेय AI लॅब, १० अत्याधुनिक प्रयोगशाळा, ७०० झाडांचे घनदाट अरण्य आणि २१ तज्ज्ञ शिक्षकवृंद.');
    }
  } else {
    document.title = 'PM SHRI Zilla Parishad Prashala, Ganori | Official Portal';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Official website of PM SHRI ZP Prashala Ganori, Taluka Phulambri, Dist. Chhatrapati Sambhajinagar. Home to Maharashtra\'s 1st School AI Lab, 10 advanced laboratories, 700+ tree micro-forest and 22 expert faculty members.');
    }
  }
}

function setLanguage(lang) {
  currentLang = (lang === 'en' || lang === 'mr') ? lang : 'mr';
  try {
    localStorage.setItem('zp_lang', currentLang);
  } catch (err) {
    // localStorage might fail in restricted environments
  }

  document.documentElement.setAttribute('lang', currentLang);
  document.body.classList.toggle('lang-mr', currentLang === 'mr');

  // Update switcher buttons state
  const mrBtn = document.getElementById('langBtnMr');
  const enBtn = document.getElementById('langBtnEn');
  if (mrBtn) {
    mrBtn.classList.toggle('active', currentLang === 'mr');
    mrBtn.setAttribute('aria-pressed', currentLang === 'mr' ? 'true' : 'false');
  }
  if (enBtn) {
    enBtn.classList.toggle('active', currentLang === 'en');
    enBtn.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
  }

  // Update static text via data-i18n
  updatePageTranslations(currentLang);

  // Re-render dynamic components with chosen language
  initLiveTicker();
  renderLabs(currentLabIndex);
  renderActivities(currentActivityFilter);
  renderStaff();
}

function initLanguageToggle() {
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        setLanguage(targetLang);
      });
    });
  }

  // Support legacy or floating single-toggle button if added
  const singleBtn = document.getElementById('langToggleBtn');
  if (singleBtn) {
    singleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'mr' : 'en');
    });
  }

  // Apply default Marathi language immediately on page load
  setLanguage(currentLang);
}

// -----------------------------------------------------------------------------
// Mobile Navigation Drawer
// -----------------------------------------------------------------------------
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  if (!toggle || !mainNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}

// -----------------------------------------------------------------------------
// Animated Counter
// -----------------------------------------------------------------------------
function initStatsCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      const countTo = parseInt(target.getAttribute('data-count'), 10);
      const suffix = target.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 1600;
      const stepTime = 25;
      const increment = Math.ceil(countTo / (duration / stepTime));

      const timer = setInterval(() => {
        current += increment;
        if (current >= countTo) {
          target.textContent = countTo + suffix;
          clearInterval(timer);
        } else {
          target.textContent = current + suffix;
        }
      }, stepTime);

      observer.unobserve(target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.stat-number[data-count]').forEach(el => observer.observe(el));
}

// -----------------------------------------------------------------------------
// 10 Advanced Labs Showcase
// -----------------------------------------------------------------------------
let currentLabIndex = 0;

function renderLabs(activeIndex = 0) {
  currentLabIndex = activeIndex;
  const tabsContainer = document.getElementById('labsNavTabs');
  const viewContainer = document.getElementById('labActiveView');
  if (!tabsContainer || !viewContainer) return;

  const isMr = currentLang === 'mr';

  // Render Tabs
  tabsContainer.innerHTML = LABS_DATA.map((lab, idx) => {
    const tabName = isMr ? (lab.nameMr || lab.name) : lab.name;
    const tabBadge = isMr ? (lab.badgeMr || lab.badge) : lab.badge;
    return `
      <button class="lab-tab-btn ${idx === activeIndex ? 'active' : ''}" data-index="${idx}" role="tab" aria-selected="${idx === activeIndex}">
        <span>${tabName}</span>
        <span class="lab-tab-badge">${tabBadge}</span>
      </button>
    `;
  }).join('');

  // Attach tab listeners
  tabsContainer.querySelectorAll('.lab-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      renderLabs(idx);
    });
  });

  // Render Active Lab Body
  const lab = LABS_DATA[activeIndex];
  const name = isMr ? (lab.nameMr || lab.name) : lab.name;
  const badge = isMr ? (lab.badgeMr || lab.badge) : lab.badge;
  const tag = isMr ? (lab.tagMr || lab.tag) : lab.tag;
  const about = isMr ? (lab.aboutMr || lab.about) : lab.about;
  const curriculum = isMr ? (lab.curriculumMr || lab.curriculum) : lab.curriculum;
  const equipment = isMr ? (lab.equipmentMr || lab.equipment) : lab.equipment;
  const activities = (isMr && lab.activitiesMr) ? lab.activitiesMr : lab.activities;

  const expandHint = isMr ? '🔍 मोठे करून पहा' : '🔍 Click to Expand';
  const currLabel = isMr ? 'अभ्यासक्रम रूपरेषा' : 'Curriculum Framework';
  const equipLabel = isMr ? 'प्रमुख सुविधा व उपकरणे' : 'Key Infrastructure';
  const actTitle = isMr ? '🛠️ प्रमुख उपक्रम व प्रात्यक्षिके' : '🛠️ Key Activities & Experiments';
  const galleryTitle = isMr ? `📸 छायाचित्र दालन: ${escapeHtml(name)}` : `📸 Visual Gallery: ${escapeHtml(name)}`;

  viewContainer.innerHTML = `
    <div class="lab-spotlight">
      <div class="lab-hero-media" onclick="openLightbox('${lab.heroImage}', '${escapeHtml(name)} - ${escapeHtml(tag)}')">
        <img src="${lab.heroImage}" alt="${escapeHtml(name)}" loading="lazy">
        <span class="lab-zoom-hint">${expandHint}</span>
      </div>

      <div class="lab-details-col">
        <span class="section-tag">${escapeHtml(badge)}</span>
        <h3>${escapeHtml(name)}</h3>
        <p class="lab-tagline">✨ ${escapeHtml(tag)}</p>
        <p class="lab-description">${escapeHtml(about)}</p>

        <div class="lab-specs-grid">
          <div class="lab-spec-card">
            <strong>${currLabel}</strong>
            <span>${escapeHtml(curriculum)}</span>
          </div>
          <div class="lab-spec-card">
            <strong>${equipLabel}</strong>
            <span>${escapeHtml(equipment)}</span>
          </div>
        </div>

        <h4 class="lab-activities-title">
          <span>${actTitle}</span>
        </h4>
        <div class="lab-activities-tags">
          ${activities.map(act => `<span class="activity-tag">✓ ${escapeHtml(act)}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="lab-gallery-strip">
      <h4 class="gallery-strip-heading">${galleryTitle}</h4>
      <div class="lab-thumbs-grid">
        ${lab.gallery.map(img => `
          <div class="lab-thumb-item" onclick="openLightbox('${img.src}', '${escapeHtml(img.caption)}')">
            <img src="${img.src}" alt="${escapeHtml(img.caption)}" loading="lazy">
            <div class="lab-thumb-caption">${escapeHtml(img.caption)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// Activities Showcase (Last 2 Years)
// -----------------------------------------------------------------------------
let currentActivityFilter = 'all';

function renderActivities(filter = 'all') {
  currentActivityFilter = filter;
  const grid = document.getElementById('activitiesCardsGrid');
  if (!grid) return;

  const isMr = currentLang === 'mr';

  const filtered = ACTIVITIES_DATA.filter(act => {
    if (filter === 'all') return true;
    if (filter === '2025-26') return act.year === '2025-26';
    if (filter === '2024-25') return act.year === '2024-25';
    return act.category === filter;
  });

  if (filtered.length === 0) {
    const noMsg = isMr ? 'या वर्गवारीत उपक्रम उपलब्ध नाहीत.' : 'No activities match this filter.';
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">${noMsg}</div>`;
    return;
  }

  const catNamesMr = {
    science: '🔬 विज्ञान व STEM',
    green: '🌱 हरित परिसर',
    arts: '🎨 कला व संस्कृती',
    welfare: '🤝 विद्यार्थी कल्याण'
  };

  grid.innerHTML = filtered.map(act => {
    const title = isMr ? (act.titleMr || act.title) : act.title;
    const desc = isMr ? (act.descMr || act.desc) : act.desc;
    const catName = isMr ? (catNamesMr[act.category] || act.categoryName) : act.categoryName;
    return `
      <article class="activity-card" data-category="${act.category}" data-year="${act.year}">
        <div class="activity-media" onclick="openLightbox('${act.image}', '${escapeHtml(title)}')">
          <img src="${act.image}" alt="${escapeHtml(title)}" loading="lazy">
          <span class="activity-year-badge">${act.year}</span>
          <span class="activity-category-badge">${escapeHtml(catName)}</span>
        </div>
        <div class="activity-content">
          <div class="activity-meta">
            <span>📅 ${escapeHtml(act.date)}</span>
          </div>
          <h3 class="activity-title">${escapeHtml(title)}</h3>
          <p class="activity-desc">${escapeHtml(desc)}</p>
          <div class="activity-tags-row">
            ${act.tags.map(t => `<span class="activity-mini-pill">#${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Update filter button states
  document.querySelectorAll('.activity-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
}

// Activity Filter buttons handler
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.activity-filter-btn');
  if (btn) {
    const filter = btn.getAttribute('data-filter');
    renderActivities(filter);
  }
});

// -----------------------------------------------------------------------------
// 21 Teachers & Staff Directory
// -----------------------------------------------------------------------------
let staffSearchQuery = '';
let staffCategoryFilter = 'all';

function renderStaff() {
  const grid = document.getElementById('staffCardsGrid');
  const countBadge = document.getElementById('staffCountBadge');
  if (!grid) return;

  const isMr = currentLang === 'mr';
  const q = staffSearchQuery.toLowerCase().trim();

  const filtered = STAFF_DATA.filter(member => {
    // Category match
    let matchCat = true;
    if (staffCategoryFilter === 'leadership') matchCat = member.dept === 'leadership';
    else if (staffCategoryFilter === 'stem') matchCat = member.dept === 'stem';
    else if (staffCategoryFilter === 'humanities') matchCat = member.dept === 'humanities';
    else if (staffCategoryFilter === 'vocational') matchCat = member.dept === 'vocational';
    else if (staffCategoryFilter === 'primary-sports') matchCat = member.dept === 'primary-sports';

    if (!matchCat) return false;

    // Search query match
    if (!q) return true;
    const nameMatch = member.name.toLowerCase().includes(q) || (member.nameMr && member.nameMr.toLowerCase().includes(q));
    const roleMatch = member.role.toLowerCase().includes(q) || (member.roleMr && member.roleMr.toLowerCase().includes(q));
    const subMatch = member.subject.toLowerCase().includes(q) || (member.subjectMr && member.subjectMr.toLowerCase().includes(q));
    const phoneDigits = member.phone ? member.phone.replace(/[^0-9]/g, '') : '';
    const qDigits = q.replace(/[^0-9]/g, '');
    const phoneMatch = qDigits.length >= 3 && phoneDigits.includes(qDigits);
    const emailMatch = member.email && member.email.toLowerCase().includes(q);
    return nameMatch || roleMatch || subMatch || phoneMatch || emailMatch;
  });

  if (filtered.length === 0) {
    if (countBadge) {
      countBadge.textContent = isMr ? '० शिक्षक आढळले' : '0 Staff Members Found';
    }

    const noStaffMsg = isMr
      ? `🔍 "${escapeHtml(staffSearchQuery)}" शी संबंधित शिक्षक आढळले नाहीत`
      : `🔍 No staff members found matching "${escapeHtml(staffSearchQuery)}"`;
    const clearBtnText = isMr ? 'शोध रद्द करा' : 'Clear Search';
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">${noStaffMsg}</p>
        <button class="btn-secondary" onclick="resetStaffSearch()" style="color:var(--text-main); margin-top: 10px;">${clearBtnText}</button>
      </div>
    `;
    return;
  }

  // Update dynamic count badge
  if (countBadge) {
    const totalCount = STAFF_DATA.length;
    if (staffCategoryFilter === 'all' && !q) {
      countBadge.textContent = isMr
        ? `${totalCount} पैकी ${totalCount} शिक्षक दाखवत आहे`
        : `Showing all ${totalCount} Staff Members`;
    } else {
      countBadge.textContent = isMr
        ? `${filtered.length} पैकी ${totalCount} शिक्षक दाखवत आहे`
        : `Showing ${filtered.length} of ${totalCount} Staff Members`;
    }
  }

  grid.innerHTML = filtered.map(member => {
    const name = isMr ? (member.nameMr || member.name) : member.name;
    const role = isMr ? (member.roleMr || member.role) : member.role;
    const subject = isMr ? (member.subjectMr || member.subject) : member.subject;
    const hmText = isMr ? 'मुख्याध्यापक' : 'Headmaster';
    const profileLinkText = isMr ? 'सविस्तर प्रोफाइल पहा ➔' : 'View Profile ➔';

    const avatarHtml = member.photo
      ? `<img src="${member.photo}" alt="${escapeHtml(name)}" loading="lazy">`
      : `<div class="staff-avatar-initials">${member.initials || 'ZP'}</div>`;

    return `
      <div class="staff-card" onclick="openStaffModal(${member.id})" tabindex="0" role="button" aria-label="${escapeHtml(name)}">
        ${member.isHM ? `<span class="staff-hm-badge">${hmText}</span>` : ''}
        <div class="staff-avatar-wrap">
          ${avatarHtml}
        </div>
        <h3 class="staff-name">${escapeHtml(name)}</h3>
        <p class="staff-designation">${escapeHtml(role)}</p>
        <span class="staff-subject-chip">${escapeHtml(subject)}</span>
        <p class="staff-qual">${escapeHtml(member.qual)}</p>
        ${member.phone ? `
          <div class="staff-card-contact-strip">
            <span class="staff-chip-phone">📞 ${escapeHtml(member.phone)}</span>
          </div>
        ` : ''}
        <div style="margin-top: 10px;">
          <span class="staff-view-btn">${profileLinkText}</span>
        </div>
      </div>
    `;
  }).join('');
}

function initStaffSearchAndFilter() {
  const searchInput = document.getElementById('staffSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      staffSearchQuery = e.target.value;
      renderStaff();
    });
  }

  const catTabs = document.getElementById('staffCategoryTabs');
  if (catTabs) {
    catTabs.querySelectorAll('.staff-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        catTabs.querySelectorAll('.staff-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        staffCategoryFilter = btn.getAttribute('data-cat');
        renderStaff();
      });
    });
  }

  // Hook up navigation links
  document.querySelectorAll('a[href="#staff"]').forEach(link => {
    link.addEventListener('click', () => {
      staffCategoryFilter = 'all';
      staffSearchQuery = '';
      if (searchInput) searchInput.value = '';
      if (catTabs) {
        catTabs.querySelectorAll('.staff-cat-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-cat') === 'all');
        });
      }
      renderStaff();
    });
  });

  // Modal backdrop click and ESC listener
  const modal = document.getElementById('staffModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStaffModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStaffModal();
  });
}

function resetStaffSearch() {
  staffSearchQuery = '';
  staffCategoryFilter = 'all';
  const searchInput = document.getElementById('staffSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.staff-cat-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat') === 'all');
  });
  renderStaff();
}

// Staff Detail Modal
function openStaffModal(memberId) {
  const member = STAFF_DATA.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById('staffModal');
  const card = document.getElementById('staffModalCard');
  if (!modal || !card) return;

  const isMr = currentLang === 'mr';
  const name = isMr ? (member.nameMr || member.name) : member.name;
  const role = isMr ? (member.roleMr || member.role) : member.role;
  const dept = isMr ? (member.deptNameMr || member.deptName) : member.deptName;
  const subject = isMr ? (member.subjectMr || member.subject) : member.subject;
  const bio = isMr ? (member.bioMr || member.bio) : member.bio;
  const hmText = isMr ? 'मुख्याध्यापक' : 'Headmaster';

  const callBtnText = isMr ? `📞 फोन करा (${member.phone})` : `📞 Call (${member.phone})`;
  const emailBtnText = isMr ? `✉️ ईमेल पाठवा` : `✉️ Send Email`;

  const avatarHtml = member.photo
    ? `<img src="${member.photo}" alt="${escapeHtml(name)}" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="staff-avatar-initials" style="font-size:2.4rem;">${member.initials || 'ZP'}</div>`;

  card.innerHTML = `
    <button class="staff-modal-close" onclick="closeStaffModal()" aria-label="Close Profile">✕</button>
    <div class="staff-modal-header">
      <div class="staff-avatar-wrap" style="width: 120px; height: 120px; margin: 0 auto 0.8rem; border-width: 4px;">
        ${avatarHtml}
      </div>
      ${member.isHM ? `<div style="margin-bottom:8px;"><span class="staff-hm-badge" style="position:static; display:inline-block; font-size:0.75rem; padding:3px 12px;">${hmText}</span></div>` : ''}
      <h3 style="font-family: var(--font-head); font-size: 1.45rem; color: var(--primary); margin-bottom: 0.25rem;">
        ${escapeHtml(name)}
      </h3>
      <p style="font-weight: 700; color: var(--accent-dark); font-size: 0.95rem; margin-bottom: 0.25rem;">
        ${escapeHtml(role)}
      </p>
      <span style="display:inline-block; font-size:0.8rem; background:var(--bg-alt); color:var(--text-muted); padding:3px 12px; border-radius:var(--radius-full); margin-bottom:1rem; font-weight:600;">
        🏢 ${escapeHtml(dept)}
      </span>
    </div>

    <div class="staff-modal-details-grid">
      <div class="staff-detail-item">
        <span class="staff-detail-label">${isMr ? '📚 अध्यापन विषय' : '📚 Teaching Subject'}</span>
        <span class="staff-detail-val">${escapeHtml(subject)}</span>
      </div>
      <div class="staff-detail-item">
        <span class="staff-detail-label">${isMr ? '🎓 शैक्षणिक पात्रता' : '🎓 Qualification'}</span>
        <span class="staff-detail-val">${escapeHtml(member.qual)}</span>
      </div>
      ${member.dob ? `
      <div class="staff-detail-item">
        <span class="staff-detail-label">${isMr ? '🎂 जन्मदिनांक' : '🎂 Date of Birth'}</span>
        <span class="staff-detail-val">${escapeHtml(member.dob)}</span>
      </div>` : ''}
      ${member.email ? `
      <div class="staff-detail-item">
        <span class="staff-detail-label">${isMr ? '✉️ ईमेल पत्ता' : '✉️ Email Address'}</span>
        <span class="staff-detail-val"><a href="mailto:${member.email}" style="color:var(--primary); text-decoration:underline;">${escapeHtml(member.email)}</a></span>
      </div>` : ''}
      ${member.awards ? `
      <div class="staff-detail-item" style="grid-column: 1 / -1;">
        <span class="staff-detail-label">${isMr ? '⭐ मुख्य जबाबदारी / गौरव' : '⭐ Key Role / Honors'}</span>
        <span class="staff-detail-val">${escapeHtml(member.awards)}</span>
      </div>` : ''}
    </div>

    <div class="staff-modal-bio-box">
      <p style="font-size: 0.92rem; color: var(--text-main); line-height: 1.6; margin: 0;">
        ${escapeHtml(bio)}
      </p>
    </div>

    <div class="staff-modal-actions">
      ${member.phone ? `
        <a href="tel:${member.phone.replace(/[^0-9+]/g, '')}" class="btn-primary" style="justify-content:center; flex:1; min-width:180px; font-size:0.88rem; padding:10px 16px;">
          ${callBtnText}
        </a>
      ` : ''}
      ${member.email ? `
        <a href="mailto:${member.email}" class="btn-secondary" style="justify-content:center; flex:1; min-width:180px; font-size:0.88rem; padding:10px 16px; color:var(--text-main); border:1px solid var(--border); background:var(--bg-alt);">
          ${emailBtnText}
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStaffModal() {
  const modal = document.getElementById('staffModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// -----------------------------------------------------------------------------
// Lightbox Photo Viewer
// -----------------------------------------------------------------------------
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  if (!modal) return;

  const close = () => modal.classList.remove('active');

  if (closeBtn) closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-box')) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      close();
    }
  });
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img || !cap) return;

  img.src = src;
  img.alt = caption || 'School Photo';
  cap.textContent = caption || '';
  modal.classList.add('active');
}

// -----------------------------------------------------------------------------
// Contact & Admission Form
// -----------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('admissionEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formStudentName')?.value.trim() || 'Prospective Student';
    const grade = document.getElementById('formClassSelect')?.value || '5th to 12th';
    const phone = document.getElementById('formParentPhone')?.value.trim() || '';
    const note = document.getElementById('formQueryNote')?.value.trim() || 'Request for admission and lab visit details.';

    // Construct WhatsApp message
    const msg = `Hello Headmaster Shri. Anil Deshmukh Sir, I would like to inquire about PM SHRI ZP Prashala Ganori admissions:%0A%0A*Student Name:* ${encodeURIComponent(name)}%0A*Target Class:* ${encodeURIComponent(grade)}%0A*Parent Contact:* ${encodeURIComponent(phone)}%0A*Message:* ${encodeURIComponent(note)}`;
    const waUrl = `https://wa.me/919226966376?text=${msg}`;

    const isMr = currentLang === 'mr';
    const alertMsg = isMr
      ? `धन्यवाद ${name}! मुख्याध्यापक श्री. अनिल देशमुख (9226966376) यांच्याशी थेट व्हॉट्सॲप चॅट उघडत आहे...`
      : `Thank you ${name}! Opening direct WhatsApp chat with Headmaster Shri. Anil Deshmukh (9226966376)...`;

    alert(alertMsg);
    window.open(waUrl, '_blank');
  });
}

// -----------------------------------------------------------------------------
// Back to Top & WhatsApp Floating Action Buttons
// -----------------------------------------------------------------------------
function initScrollTop() {
  const scrollBtn = document.getElementById('fabScrollTop');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Utility
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}