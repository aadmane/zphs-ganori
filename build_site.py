# -*- coding: utf-8 -*-
"""
Script to build the full, production-ready js/main.js
with default language Marathi, bilingual dictionary, and rich Marathi content.
"""
import json
import os
import re

# 1. Verified bilingual translations (122 keys)
mr_dict = {
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
    "nav_staff": "शिक्षकवृंद (२२)",
    "nav_awards": "गौरव व पुरस्कार",
    "nav_contact": "प्रवेश व संपर्क",
    "nav_admission": "प्रवेश सुरू",
    "hero_badge": "<span>✨</span> महाराष्ट्राची आदर्श ग्रामीण शाळा · PM SHRI टप्पा ३",
    "hero_title": "ग्रामीण प्रतिभेला <span class=\"text-gold\">AI, अंतराळ विज्ञान व कौशल्यांची</span> नवी भरारी",
    "hero_desc": "<b>पीएम श्री जिल्हा परिषद प्रशाला, गणोरी</b> मध्ये आपले सहर्ष स्वागत — राज्यातील पहिली शालेय AI लॅब, १० अत्याधुनिक प्रयोगशाळा, ७०० झाडांचे घनदाट अरण्य आणि शासकीय विज्ञान प्रदर्शनात ५३ वर्षांनी राष्ट्रीय स्तरावर निवड झालेली पहिली जि. प. शाळा.",
    "hero_btn_labs": "🔬 १० प्रयोगशाळा पहा",
    "hero_btn_activities": "📸 २ वर्षांचे उपक्रम",
    "hero_btn_staff": "👥 २२ शिक्षकवृंद",
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
    "staff_title": "आमचे २२ मार्गदर्शक व शिक्षक",
    "staff_desc": "मुख्याध्यापक श्री. अनिल प्र. देशमुख यांच्या प्रेरणादायी नेतृत्वाखाली आमचे २२ समर्पित शिक्षक, लॅब संचालक आणि कर्मचारी प्रत्येक विद्यार्थ्याचा सर्वांगीण विकास घडवण्यासाठी अहोरात्र कार्यरत आहेत.",
    "staff_tab_all": "सर्व (२२)",
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
    "footer_dev": "<b>GitHub Pages</b> साठी विकसित | गणोरीतून सस्नेह निर्मित ❤️",
    "staff_btn_show_all": "सर्व २२ शिक्षकवृंद पहा",
    "staff_btn_show_less": "कमी शिक्षक दाखवा (पहिले ८)"
}

en_dict = {
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
    "nav_staff": "Faculty & Staff (22)",
    "nav_awards": "Awards & Honors",
    "nav_contact": "Admissions & Contact",
    "nav_admission": "Admissions Open",
    "hero_badge": "<span>✨</span> Maharashtra's Model Rural School · PM SHRI Phase 3",
    "hero_title": "Empowering Rural Talent with <span class=\"text-gold\">AI, Space Science & 21st-Century Skills</span>",
    "hero_desc": "Welcome to <b>PM SHRI Zilla Parishad Prashala, Ganori</b> — Home to Maharashtra’s 1st School AI Laboratory, 10 advanced laboratories, a 700+ tree dense micro-forest, and the first ZP school in 53 years to qualify for the National Science Exhibition.",
    "hero_btn_labs": "🔬 Explore 10 Labs",
    "hero_btn_activities": "📸 2-Year Activities",
    "hero_btn_staff": "👥 22 Faculty Profiles",
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
    "staff_title": "Our 22 Faculty Members & Mentors",
    "staff_desc": "Under the inspiring leadership of Headmaster Shri. Anil P. Deshmukh, our 22 devoted teachers, lab instructors, and staff work untiringly to nurture every student's potential.",
    "staff_tab_all": "All (22)",
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
    "footer_dev": "Developed for <b>GitHub Pages</b> | Crafted with ❤️ from Ganori",
    "staff_btn_show_all": "View All 22 Faculty & Staff",
    "staff_btn_show_less": "Show Fewer Staff (First 8)"
}

# 2. Enhanced Marathi content for 10 Labs
labs_mr_extra = {
    'ai-lab': {
        'tagMr': 'महाराष्ट्राच्या शालेय शिक्षणातील १ ली AI लॅब',
        'badgeMr': 'महाराष्ट्र अग्रदूत',
        'aboutMr': 'महाएआय मिशन अंतर्गत स्थापन झालेली ही महाराष्ट्र राज्य शालेय शिक्षणातील पहिलीवहिली कृत्रिम बुद्धिमत्ता (AI) प्रयोगशाळा आहे. HP India Foundation आणि लर्निंग लिंक्स फाउंडेशन (LLF दिल्ली) यांच्या सहकार्याने व SCERT पुणे यांच्या अभ्यासक्रमानुसार ही लॅब चालवली जाते. ग्रामीण विद्यार्थ्यांना AI, कॉम्प्युटर व्हिजन आणि मशीन लर्निंगचे मूलभूत शिक्षण येथे दिले जाते.',
        'curriculumMr': 'महाएआय मिशन व SCERT पुणे एकात्मिक AI अभ्यासक्रम',
        'equipmentMr': 'HP हाय-परफॉर्मन्स वर्कस्टेशन्स, स्मार्ट डिस्प्ले, व्हिजन किट्स, पायथन प्रोग्रॅमिंग लॅब',
        'activitiesMr': [
            'कृत्रिम बुद्धिमत्ता व मशीन लर्निंगची ओळख',
            'कॉम्प्युटर व्हिजन, चेहरा ओळख व इमेज प्रोसेसिंग',
            'स्पीच सिंथेसिस व नॅचरल लँग्वेज प्रोसेसिंग (NLP)',
            'पायथन प्रोग्रॅमिंग व लॉजिक बिल्डिंग',
            'जबाबदार AI व डिजिटल तंत्रज्ञानाची भविष्यातील दिशा'
        ]
    },
    'robotics-lab': {
        'tagMr': 'प्रत्यक्ष हँड्स-ऑन STEM नवोपक्रम',
        'badgeMr': 'प्रोटोटायपिंग हब',
        'aboutMr': 'विद्यार्थी स्वतः विविध रोबोट्सची रचना, वायरिंग, प्रोग्रॅमिंग आणि चाचणी करतात असे अत्याधुनिक रोबोटिक्स केंद्र. ६ चाकी रिमोट रोव्हरपासून ते स्वयंचलित लिफ्ट आणि अडथळे टाळणाऱ्या रोबोट्सपर्यंत सर्व मॉडेल्स विद्यार्थी स्वतः बनवतात.',
        'curriculumMr': 'टिंकरिंग STEM व मायक्रोकंट्रोलर इलेक्ट्रॉनिक्स',
        'equipmentMr': '६-चाकी रोव्हर चेसिस, मायक्रोकंट्रोलर किट्स, डीसी मोटर्स, सेन्सर्स व बॅटरी पॅक्स',
        'activitiesMr': [
            '६-चाकी रोबोटिक रोव्हर निर्मिती व प्रत्यक्ष मैदानी चाचणी',
            'मोटराइज्ड स्वयंचलित लिफ्ट मेकॅनिझमचे प्रात्यक्षिक',
            'इन्फ्रारेड, अल्ट्रासोनिक व प्रकाश सेन्सर्स कॅलिब्रेशन',
            'मायक्रोकंट्रोलर कोडिंग व रिमोट कंट्रोल मेकॅनिक्स',
            'आंतरशालेय रोबोटिक्स स्पर्धा व जिल्हास्तरीय प्रात्यक्षिके'
        ]
    },
    'astronomy-lab': {
        'tagMr': '५ इस्रो विमान सफर विजेते विद्यार्थी',
        'badgeMr': 'एकमेव जि. प. शाळा',
        'aboutMr': 'व्यावसायिक स्काय-वॉचर दुर्बिणी, तारांगण चकती (स्टार लोकेटर) आणि अंतराळ विज्ञानाचे थेट मॉडेल असलेले विशेष दालन. याच दालनातील अभ्यासातून शाळेतील ५ विद्यार्थ्यांनी विमानाने इस्रो (ISRO) अंतराळ केंद्रांना प्रत्यक्ष भेट देण्याचा ऐतिहासिक बहुमान मिळवला आहे!',
        'curriculumMr': 'खगोलशास्त्र व अंतराळ विज्ञान साक्षरता',
        'equipmentMr': 'हाय-पॉवर स्काय-वॉचर टेलिस्कोप, सौर फिल्टर, द्विनेत्री (बायनोक्युलर्स), तारांगण चकती',
        'activitiesMr': [
            'रात्रीचे आकाशदर्शन: चंद्र, गुरु, शनी ग्रहांचे थेट वेध',
            'प्रमाणित सौर फिल्टर्सच्या साहाय्याने सूर्य डाग निरीक्षण',
            'हबल व जेम्स वेब दुर्बिणींच्या छायाचित्रांचे विश्लेषण',
            'उपग्रह कक्षा मेकॅनिक्स व रॉकेट प्रक्षेपणाचे धडे',
            'राष्ट्रीय स्पेस ऑलिम्पियाड व इस्रो स्पर्धांची तयारी'
        ]
    },
    'maths-lab': {
        'tagMr': '५००+ स्वनिर्मित शैक्षणिक साधने',
        'badgeMr': '५००+ मॉडेल्स',
        'aboutMr': 'अमूर्त गणिताची सूत्रे खेळण्यांच्या माध्यमातून सहज समजून देणारी चैतन्यमय प्रयोगशाळा. शिक्षक आणि विद्यार्थ्यांनी मिळून ५०० हून अधिक गणितीय साहित्य तयार केले असून याद्वारे गणिताची भीती पूर्णपणे नाहीशी झाली आहे.',
        'curriculumMr': 'कृतीतून शिक्षण: मूर्त ते अमूर्त गणितीय संकल्पना',
        'equipmentMr': 'त्रिमितीय भौमितिक वस्तू, अबॅकस, अपूर्णांक चकती, पायथागोरस किट्स, नेपिअर बोन्स',
        'activitiesMr': [
            'पायथागोरस सिद्धांत व बैजिक सूत्रांचे भौमितिक पडताळे',
            'कागद, लाकूड व वायरपासून 3D भूमिती मॉडेल्सची निर्मिती',
            'वैदिक गणित जलद गणना तंत्र कार्यशाळा',
            'NMMS / MTS शिष्यवृत्ती व ऑलिम्पियाड सराव वर्ग',
            'विद्यार्थ्यांचे गणित जत्रा व पीअर-लर्निंग प्रात्यक्षिके'
        ]
    },
    'innovation-science-lab': {
        'tagMr': '५३ वर्षांनी राष्ट्रीय विज्ञान प्रदर्शनात निवड',
        'badgeMr': 'राष्ट्रीय गौरव',
        'aboutMr': 'भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्रातील संकल्पना प्रत्यक्ष प्रयोगांद्वारे शिकवणारे केंद्र. शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर निवड होणारी गणोरी प्रशाला ही पहिली जिल्हा परिषद शाळा ठरली आहे.',
        'curriculumMr': 'राष्ट्रीय विज्ञान व STEM शोध अभ्यासक्रम',
        'equipmentMr': 'डिजिटल मायक्रोस्कोप्स, रासायनिक काचपात्रे, मानवी शरीर रचना मॉडेल्स, भौतिकशास्त्र उपकरणे',
        'activitiesMr': [
            'राष्ट्रीय विज्ञान प्रदर्शनासाठी नाविन्यपूर्ण संशोधन प्रकल्प',
            'पेशी रचना, सूक्ष्मजीव व वनस्पती ऊतींचे सूक्ष्मदर्शीय निरीक्षण',
            'स्थानिक माती व पाण्याची रासायनिक चाचणी आणि विश्लेषण',
            'अन्नभेसळ ओळख व घरगुती विज्ञान प्रात्यक्षिके',
            'सौर ऊर्जा, पवन ऊर्जा व जलसंधारण मॉडेल्स'
        ]
    },
    'art-studio': {
        'tagMr': 'महाराष्ट्राचा समृद्ध सांस्कृतिक वारसा',
        'badgeMr': 'कला संकुल',
        'aboutMr': 'महाराष्ट्राची पारंपरिक वारली आदिवासी कला, मातीकाम, शिल्पकला आणि आधुनिक चित्रकलेचे प्रशिक्षण देणारा स्टुडिओ. संपूर्ण शाळेच्या भिंती विद्यार्थ्यांच्या वारली कलेने सुशोभित करण्यात आल्या आहेत.',
        'curriculumMr': 'महाराष्ट्र लोककला, वारली पेंटिंग व हस्तकला',
        'equipmentMr': 'मातीकाम व्हील्स, कॅनव्हास, वारली रंगसाहित्य, शिल्पकला साधने, सुलेखन किट्स',
        'activitiesMr': [
            'शालेय भिंतींवर वारली आदिवासी चित्रकला रेखाटन',
            'शाडू मातीपासून पर्यावरणपूरक गणेश मूर्ती व शिल्पे निर्मिती',
            'कॅलिग्राफी व पारंपारिक मोडी लिपी ओळख कार्यशाळा',
            'राज्यस्तरीय चित्रकला व पोस्टर स्पर्धा सहभाग',
            'वारली कला वस्तू व हस्तकला वार्षिक प्रदर्शन'
        ]
    },
    'msfc-lab': {
        'tagMr': 'NSQF कौशल्य भारत प्रमाणित',
        'badgeMr': 'NSQF लेव्हल २',
        'aboutMr': 'राष्ट्रीय कौशल्य पात्रता फ्रेमवर्क (NSQF) अंतर्गत चालवली जाणारी मल्टी-स्किल लॅब. यात इ. ९ वी व १० वीच्या विद्यार्थ्यांना वेल्डिंग, इलेक्ट्रिकल वायरिंग, सुतारकाम, आणि बागकाम यांसारखी आत्मनिर्भर करणारी कौशल्ये शिकवली जातात.',
        'curriculumMr': 'NSQF कौशल्य विकास व उद्योजकता मंत्रालय अभ्यासक्रम',
        'equipmentMr': 'आर्क वेल्डिंग मशीन, बेंच व्हाईस, ड्रिल मशीन, इलेक्ट्रिकल वायरिंग बोर्ड, मल्टीमीटर्स',
        'activitiesMr': [
            'स्थानिक वीज फिटिंग, घरगुती वायरिंग व एमसीबी दुरुस्ती',
            'धातू कटिंग, ग्राइंडिंग व आर्क वेल्डिंग प्राथमिक कामे',
            'लाकडी फर्निचर जोडणी व प्राथमिक सुतारकाम',
            'औषधी वनस्पतींची लागवड व रोपवाटिका व्यवस्थापन',
            'सौर वॉटर हीटर व प्रकाश यंत्रणा देखभाल'
        ]
    },
    'automobile-lab': {
        'tagMr': '४-स्ट्रोक इंजिन व मेकॅनिकल ड्रायव्हिंग प्रात्यक्षिक',
        'badgeMr': 'व्यावसायिक केंद्र',
        'aboutMr': 'ग्रामीण भागातील एकमेव सुसज्ज ऑटोमोबाईल लॅब, जिथे कट-सेक्शन पेट्रोल व डिझेल इंजिन, गिअरबॉक्स, ब्रेकिंग सिस्टीम आणि प्रत्यक्ष व्हेईकल मेकॅनिक्सचे प्रशिक्षण दिले जाते. माध्यमिक विद्यार्थ्यांना थेट करिअर संधी मिळतात.',
        'curriculumMr': 'NSQF ऑटोमोटिव्ह सर्व्हिस टेक्निशियन (लेव्हल १ व २)',
        'equipmentMr': 'कट-सेक्शन ४-स्ट्रोक इंजिन, गिअरबॉक्स मॉडेल, हायड्रॉलिक जॅक, मेकॅनिकल टूलकिट्स',
        'activitiesMr': [
            '२-स्ट्रोक व ४-स्ट्रोक इंजिनचे अंतर्गत भाग व कार्यपद्धती',
            'हायड्रॉलिक ब्रेक सिस्टीम व ट्रान्समिशन असेंब्ली',
            'स्पार्क प्लग स्वच्छता, इंजिन ऑइल तपासणी व फिल्टर बदल',
            'ऑटोमोबाईल वायरिंग व बॅटरी मेंटेनन्स',
            'सुरक्षित वाहन चालन व रस्ता सुरक्षा नियम'
        ]
    },
    'atal-3d-lab': {
        'tagMr': 'भविष्यातील डिजिटल निर्मिती तंत्रज्ञान',
        'badgeMr': 'AIM हब',
        'aboutMr': '3D प्रिंटर, CAD मॉडेलिंग आणि डिजिटल प्रोटोटायपिंग साधनांनी सुसज्ज असलेली नाविन्यपूर्ण लॅब. विद्यार्थी संगणकावर डिझाइन केलेले मॉडेल 3D प्रिंटरद्वारे प्रत्यक्ष साकारतात.',
        'curriculumMr': 'नीती आयोग अटल इनोव्हेशन मिशन (AIM) मार्गदर्शक तत्त्वे',
        'equipmentMr': 'Creality 3D प्रिंटर, PLA फिलामेंट्स, कॉम्प्युटर CAD सिस्टीम, सोल्डरिंग स्टेशन्स',
        'activitiesMr': [
            'Tinkercad व FreeCAD द्वारे 3D ऑब्जेक्ट डिझायनिंग',
            '3D प्रिंटर कॅलिब्रेशन व प्रत्यक्ष स्लाइसिंग',
            'शालेय विज्ञान प्रयोगांसाठी 3D स्पेअर पार्ट्स प्रिंटिंग',
            'इलेक्ट्रॉनिक्स प्रोटोटायपिंग व ब्रेडबोर्ड सर्किट्स',
            'इनोव्हेशन चॅलेंज व आयडिया पिचिंग स्पर्धा'
        ]
    },
    'language-digital-lab': {
        'tagMr': 'ई-लर्निंग व डिजिटल ग्रंथालय',
        'badgeMr': 'ज्ञान दालन',
        'aboutMr': 'अत्याधुनिक संगणक, ऑडिओ-व्हिज्युअल हेडफोन्स आणि समृद्ध ग्रंथालय असलेले दालन. इंग्रजी संभाषण कौशल्य सुधारण्यासाठी ऑडिओ फोनेटिक्स सॉफ्टवेअर, ई-पुस्तके आणि स्पर्धा परीक्षांचे संदर्भ साहित्य येथे उपलब्ध आहे.',
        'curriculumMr': 'भाषा संवर्धन, डिजिटल साक्षरता व संदर्भ वाचन',
        'equipmentMr': 'मल्टीमीडिया पीसी, ऑडिओ हेडफोन्स, प्रोजेक्टर, ५०००+ पुस्तके, ई-लायब्ररी',
        'activitiesMr': [
            'इंग्रजी संभाषण व उच्चार सुधारणा ऑडिओ सराव',
            'डिजिटल ई-ग्रंथालय व दैनिक वर्तमानपत्र वाचन',
            'स्पर्धा परीक्षा (NMMS, MTS, नवोदय) ऑनलाइन सराव',
            'मराठी, हिंदी व इंग्रजी निबंध व वक्तृत्व तयारी',
            'इंटरनेट साक्षरता, सायबर सुरक्षा व डिजिटल शोध'
        ]
    }
}

# 3. Enhanced Marathi descriptions for Activities
act_mr_extra = {
    'act-1': {
        'descMr': 'महाराष्ट्र शासकीय विज्ञान प्रदर्शनाच्या ५३ वर्षांच्या इतिहासात राष्ट्रीय स्तरावर पात्र ठरणारी गणोरी प्रशाला ही पहिली जिल्हा परिषद शाळा ठरली. विद्यार्थ्यांनी तयार केलेल्या नाविन्यपूर्ण प्रकल्पाने राज्यभरातून प्रथम क्रमांक पटकावला.'
    },
    'act-2': {
        'descMr': 'शाळेच्या तारांगण व खगोलशास्त्र लॅबमधील विशेष कामगिरीमुळे ५ होतकरू ग्रामीण विद्यार्थ्यांची शासनातर्फे विमानाने बंगळुरू व श्रीहरिकोटा येथील इस्रो केंद्रांच्या अभ्यास दौऱ्यासाठी निवड झाली.'
    },
    'act-3': {
        'descMr': 'गांधी रिसर्च फाउंडेशन, जळगाव यांच्या राज्यस्तरीय परीक्षणात गणोरी प्रशालेने ९६.५%+ गुणांसह संपूर्ण महाराष्ट्रात तृतीय क्रमांक मिळवून हरित शाळा म्हणून नावलौकिक मिळवला.'
    },
    'act-4': {
        'descMr': 'जिल्हाधिकारी व भारतीय टपाल विभागाच्या वतीने गणोरी प्रशालेच्या शैक्षणिक क्रांतीचा गौरव म्हणून शाळेचे मानचिन्ह असलेले विशेष टपाल तिकीट दिमाखात प्रकाशित करण्यात आले.'
    },
    'act-5': {
        'descMr': 'एचपी इंडिया फाउंडेशन व लर्निंग लिंक्स फाउंडेशन यांच्या संयुक्त विद्यमाने महाराष्ट्रातील पहिली शालेय AI प्रयोगशाळा सुरू झाली. ग्रामीण विद्यार्थ्यांना आता शाळेतच कोडिंग व कृत्रिम बुद्धिमत्तेचे धडे मिळत आहेत.'
    },
    'act-6': {
        'descMr': 'विद्यार्थी व शिक्षकांच्या श्रमदानातून शाळेच्या आवारात ७०० हून अधिक देशी वृक्षांची लागवड करून घनदाट अरण्य साकारण्यात आले. स्वयंचलित ठिबक सिंचनामुळे उन्हाळ्यातही हा परिसर सदाहरित राहतो.'
    },
    'act-7': {
        'descMr': 'शाळेतील विद्यार्थ्यांनी परिसरातील गावांमध्ये जाऊन अंधश्रद्धा निर्मूलन, व्यसनमुक्ती, मुलींचे शिक्षण आणि पर्यावरण संरक्षणावर प्रभावी पथनाट्ये सादर करून समाजप्रबोधन केले.'
    },
    'act-8': {
        'descMr': 'कला दालनामध्ये विद्यार्थ्यांनी पारंपरिक वारली चित्रकलेचे धडे गिरवले, तसेच गणेशोत्सवासाठी १००% पर्यावरणपूरक शाडूच्या मातीपासून सुंदर गणेशमूर्ती स्वतः तयार केल्या.'
    },
    'act-9': {
        'descMr': 'ग्रामीण रुग्णालयाच्या सहकार्याने सर्व विद्यार्थ्यांची मोफत आरोग्य, दात व नेत्र तपासणी करण्यात आली आणि गरजू विद्यार्थ्यांना मोफत चष्मे व औषधोपचार पुरवण्यात आले.'
    },
    'act-10': {
        'descMr': 'संविधान दिनानिमित्त उद्देशिकेचे सामूहिक वाचन, निबंध, वक्तृत्व व प्रश्नमंजुषा स्पर्धांचे आयोजन करून संविधानाची मूल्ये विद्यार्थ्यांच्या मनात रुजवण्यात आली.'
    },
    'act-11': {
        'descMr': 'छत्रपती संभाजीनगर जिल्हा परिषदेने गणोरी प्रशालेला तालुक्यातील सर्वाधिक गतिमान, गुणवत्तापूर्ण आणि प्रयोगशील शाळा म्हणून सलग ६ व्या वर्षी विशेष सन्मानित केले.'
    },
    'act-12': {
        'descMr': 'एमजीएम विद्यापीठात आयोजित विभागीय नवोपक्रम व विज्ञान स्पर्धेत गणोरीच्या बालवैज्ञानिकांनी पदक, प्रशस्तिपत्रक आणि तज्ज्ञ मार्गदर्शकांचा बहुमान मिळवला.'
    }
}

# 4. Enhanced Marathi subjects for Staff
staff_mr_extra = {
    1: {'subjectMr': 'प्रशासन, संस्थात्मक नेतृत्व व गणित'},
    2: {'subjectMr': 'भौतिकशास्त्र, AI व खगोलशास्त्र'},
    3: {'subjectMr': 'माध्यमिक गणित व वैदिक गणित'},
    4: {'subjectMr': 'सामान्य विज्ञान व पर्यावरण शिक्षण'},
    5: {'subjectMr': 'भूगोल व पर्यावरण अभ्यास'},
    6: {'subjectMr': 'इतिहास व राज्यशास्त्र'},
    7: {'subjectMr': 'मराठी साहित्य व हिंदी'},
    8: {'subjectMr': 'इंग्रजी संभाषण व व्याकरण'},
    9: {'subjectMr': 'क्रीडा, योग व शारीरिक आरोग्य'},
    10: {'subjectMr': 'NSQF ऑटोमोबाईल टेक्नॉलॉजी'},
    11: {'subjectMr': 'NSQF MSFC, वेल्डिंग व वायरिंग'},
    12: {'subjectMr': 'चित्रकला, वारली कला व शिल्पकला'},
    13: {'subjectMr': 'मराठी भाषा व नागरिकशास्त्र'},
    14: {'subjectMr': 'प्राथमिक विज्ञान व गणित'},
    15: {'subjectMr': 'भाषा व पायाभूत गणित'},
    16: {'subjectMr': 'प्राथमिक शिक्षण व बालविकास'},
    17: {'subjectMr': 'संगणक विज्ञान व ई-लर्निंग'},
    18: {'subjectMr': 'भाषा व समाजशास्त्र'},
    19: {'subjectMr': 'गणित व विज्ञान पायाभूत'},
    20: {'subjectMr': 'प्राथमिक भाषा व पर्यावरण'},
    21: {'subjectMr': 'विज्ञान व AI लॅब व्यवस्थापन'},
    22: {'subjectMr': 'शालेय प्रशासन व विद्यार्थी नोंदी'}
}

# Read original main.js
with open(os.path.join('js', 'main.js'), 'r', encoding='utf-8') as f:
    js_text = f.read()

# Replace LABS_DATA with enriched Marathi items
def enrich_labs(text):
    # Regex find each lab object and add tagMr, badgeMr, aboutMr, curriculumMr, equipmentMr, activitiesMr
    for lab_id, extra in labs_mr_extra.items():
        pattern = rf"(id:\s*'{lab_id}',.*?badge:\s*'[^']+',)"
        def repl(match):
            prefix = match.group(1)
            additions = f"\n    tagMr: {json.dumps(extra['tagMr'], ensure_ascii=False)}," \
                        f"\n    badgeMr: {json.dumps(extra['badgeMr'], ensure_ascii=False)}," \
                        f"\n    aboutMr: {json.dumps(extra['aboutMr'], ensure_ascii=False)}," \
                        f"\n    curriculumMr: {json.dumps(extra['curriculumMr'], ensure_ascii=False)}," \
                        f"\n    equipmentMr: {json.dumps(extra['equipmentMr'], ensure_ascii=False)}," \
                        f"\n    activitiesMr: {json.dumps(extra['activitiesMr'], ensure_ascii=False)},"
            return prefix + additions
        text = re.sub(pattern, repl, text, count=1, flags=re.DOTALL)
    return text

js_text = enrich_labs(js_text)

# Replace ACTIVITIES_DATA with enriched Marathi descriptions
for act_id, extra in act_mr_extra.items():
    pattern = rf"(id:\s*'{act_id}',.*?titleMr:\s*'[^']+',)"
    def repl(match):
        prefix = match.group(1)
        return prefix + f"\n    descMr: {json.dumps(extra['descMr'], ensure_ascii=False)},"
    js_text = re.sub(pattern, repl, js_text, count=1, flags=re.DOTALL)

# Replace STAFF_DATA with enriched Marathi subjects
for staff_id, extra in staff_mr_extra.items():
    pattern = rf"(id:\s*{staff_id},.*?subject:\s*'[^']+',)"
    def repl(match):
        prefix = match.group(1)
        return prefix + f"\n    subjectMr: {json.dumps(extra['subjectMr'], ensure_ascii=False)},"
    js_text = re.sub(pattern, repl, js_text, count=1, flags=re.DOTALL)

# Now inject I18N_DICTIONARY and NEWS_ITEMS before DOM initialization
i18n_header = f"""
// =============================================================================
// I18N BILINGUAL TRANSLATION ENGINE (मराठी DEFAULT / ENGLISH)
// =============================================================================
const I18N_DICTIONARY = {{
  mr: {json.dumps(mr_dict, ensure_ascii=False, indent=4)},
  en: {json.dumps(en_dict, ensure_ascii=False, indent=4)}
}};

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
"""

# Place i18n_header before `// =============================================================================\n// 4. CORE CONTROLLER`
js_text = re.sub(
    r'(// =+\s*\n// 4\. CORE CONTROLLER)',
    lambda m: i18n_header + '\n' + m.group(1),
    js_text,
    count=1
)

# Now update `initLiveTicker()`
new_live_ticker = """function initLiveTicker() {
  const marquee = document.getElementById('tickerMarquee');
  if (!marquee) return;

  const newsItems = currentLang === 'mr' ? NEWS_ITEMS_MR : NEWS_ITEMS_EN;

  // Repeat for continuous marquee
  const fullHtml = [...newsItems, ...newsItems].map(item => `
    <span class="ticker-item">${item}</span>
  `).join('');

  marquee.innerHTML = fullHtml;
}"""
js_text = re.sub(r'function initLiveTicker\(\)\s*\{.*?\n\}', new_live_ticker, js_text, count=1, flags=re.DOTALL)

# Now update language state & toggle logic
new_lang_engine = """// -----------------------------------------------------------------------------
// Bilingual Language Engine (मराठी BY DEFAULT / English)
// -----------------------------------------------------------------------------
const savedLang = localStorage.getItem('zp_lang');
let currentLang = (savedLang === 'en' || savedLang === 'mr') ? savedLang : 'mr'; // BY DEFAULT MARATHI

function updatePageTranslations(lang) {
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.mr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Dynamic Page Title & Meta Description update
  if (lang === 'mr') {
    document.title = 'पीएम श्री जिल्हा परिषद प्रशाला, गणोरी | PM SHRI ZP Prashala, Ganori';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'पीएम श्री जिल्हा परिषद प्रशाला, गणोरी, ता. फुलंब्री, जि. छत्रपती संभाजीनगरचे अधिकृत संकेतस्थळ. महाराष्ट्रातील पहिली शालेय AI लॅब, १० अत्याधुनिक प्रयोगशाळा, ७०० झाडांचे घनदाट अरण्य आणि २२ तज्ज्ञ शिक्षकवृंद.');
    }
  } else {
    document.title = 'PM SHRI Zilla Parishad Prashala, Ganori | Official Portal';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Official website of PM SHRI ZP Prashala Ganori, Taluka Phulambri, Dist. Chhatrapati Sambhajinagar. Home to Maharashtra\\\'s 1st School AI Lab, 10 advanced laboratories, 700+ tree micro-forest and 22 expert faculty members.');
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
}"""

js_text = re.sub(
    r'// -+\s*\n// Bilingual Language Toggle.*?\nfunction initLanguageToggle\(\)\s*\{.*?\n\}',
    new_lang_engine,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Now update renderLabs()
new_render_labs = """let currentLabIndex = 0;

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
}"""

js_text = re.sub(
    r'let currentLabIndex = 0;\s*\nfunction renderLabs\(.*?\n\}',
    new_render_labs,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Now update renderActivities()
new_render_activities = """let currentActivityFilter = 'all';

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
}"""

js_text = re.sub(
    r'let currentActivityFilter = \'all\';\s*\nfunction renderActivities\(.*?\n\}',
    new_render_activities,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Now update renderStaff() and filtering functions
new_render_staff_module = """let staffSearchQuery = '';
let staffCategoryFilter = 'all';
let isStaffExpanded = false;

function renderStaff() {
  const grid = document.getElementById('staffCardsGrid');
  const countBadge = document.getElementById('staffCountBadge');
  const actionRow = document.getElementById('staffActionRow');
  const showAllText = document.getElementById('staffShowAllText');
  const showAllArrow = document.getElementById('staffShowAllArrow');
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
    return nameMatch || roleMatch || subMatch;
  });

  if (filtered.length === 0) {
    if (countBadge) {
      countBadge.textContent = isMr ? '० शिक्षक आढळले' : '0 Staff Members Found';
    }
    if (actionRow) actionRow.style.display = 'none';

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

  // Handle preview vs show all
  let displayedStaff = filtered;
  const isDefaultAllView = (staffCategoryFilter === 'all' && !q);

  if (isDefaultAllView) {
    if (actionRow) actionRow.style.display = 'block';

    if (!isStaffExpanded) {
      displayedStaff = filtered.slice(0, 8);
      if (countBadge) {
        countBadge.textContent = isMr
          ? `८ पैकी २२ शिक्षक दाखवत आहे · सर्व शिक्षक पाहण्यासाठी खालील बटणावर क्लिक करा`
          : `Showing 8 of 22 Staff · Click below to view all`;
      }
      if (showAllText) {
        showAllText.textContent = isMr ? 'सर्व २२ शिक्षकवृंद पहा' : 'View All 22 Faculty & Staff';
      }
      if (showAllArrow) showAllArrow.textContent = '▾';
    } else {
      displayedStaff = filtered;
      if (countBadge) {
        countBadge.textContent = isMr
          ? `२२ पैकी २२ शिक्षक दाखवत आहे`
          : `Showing all 22 Staff Members`;
      }
      if (showAllText) {
        showAllText.textContent = isMr ? 'कमी शिक्षक दाखवा (पहिले ८)' : 'Show Fewer Staff (First 8)';
      }
      if (showAllArrow) showAllArrow.textContent = '▴';
    }
  } else {
    // Specific category or search is active -> show all matching
    if (actionRow) actionRow.style.display = 'none';
    if (countBadge) {
      countBadge.textContent = isMr
        ? `${filtered.length} शिक्षक दाखवत आहे`
        : `Showing ${filtered.length} Staff Members`;
    }
  }

  grid.innerHTML = displayedStaff.map(member => {
    const name = isMr ? (member.nameMr || member.name) : member.name;
    const role = isMr ? (member.roleMr || member.role) : member.role;
    const subject = isMr ? (member.subjectMr || member.subject) : member.subject;
    const hmText = isMr ? 'मुख्याध्यापक' : 'Headmaster';
    const profileLinkText = isMr ? 'संपूर्ण प्रोफाइल पहा ➔' : 'View Profile ➔';

    const avatarHtml = member.photo
      ? `<img src="${member.photo}" alt="${escapeHtml(name)}" loading="lazy">`
      : `<div class="staff-avatar-initials">${member.initials || 'ZP'}</div>`;

    return `
      <div class="staff-card" onclick="openStaffModal(${member.id})">
        ${member.isHM ? `<span class="staff-hm-badge">${hmText}</span>` : ''}
        <div class="staff-avatar-wrap">
          ${avatarHtml}
        </div>
        <h3 class="staff-name">${escapeHtml(name)}</h3>
        <p class="staff-designation">${escapeHtml(role)}</p>
        <span class="staff-subject-chip">${escapeHtml(subject)}</span>
        <p class="staff-qual">${escapeHtml(member.qual)}</p>
        <div style="margin-top: 12px;">
          <span style="font-size: 0.78rem; font-weight:700; color: var(--accent); cursor: pointer;">${profileLinkText}</span>
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
        // When clicking 'All' category button, expand to show all 22
        if (staffCategoryFilter === 'all') {
          isStaffExpanded = true;
        }
        renderStaff();
      });
    });
  }

  // Hook up the staffShowAllBtn button
  const showAllBtn = document.getElementById('staffShowAllBtn');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', () => {
      isStaffExpanded = !isStaffExpanded;
      renderStaff();
      if (!isStaffExpanded) {
        const staffSec = document.getElementById('staff');
        if (staffSec) staffSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Hook up all navigation links pointing to #staff (nav link, hero button, footer link)
  document.querySelectorAll('a[href="#staff"]').forEach(link => {
    link.addEventListener('click', () => {
      isStaffExpanded = true;
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
}

function resetStaffSearch() {
  staffSearchQuery = '';
  staffCategoryFilter = 'all';
  isStaffExpanded = true;
  const searchInput = document.getElementById('staffSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.staff-cat-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat') === 'all');
  });
  renderStaff();
}"""

js_text = re.sub(
    r"""let staffSearchQuery = '';\s*\nlet staffCategoryFilter = 'all';.*?function resetStaffSearch\(\)\s*\{.*?\n\}""",
    new_render_staff_module,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Now update openStaffModal()
new_staff_modal = """function openStaffModal(memberId) {
  const member = STAFF_DATA.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById('staffModal');
  const card = document.getElementById('staffModalCard');
  if (!modal || !card) return;

  const isMr = currentLang === 'mr';
  const name = isMr ? (member.nameMr || member.name) : member.name;
  const role = isMr ? (member.roleMr || member.role) : member.role;
  const subject = isMr ? (member.subjectMr || member.subject) : member.subject;
  const callBtnText = isMr ? `📞 शालेय कार्यालयाशी संपर्क करा (${member.phone})` : `📞 Call School Office (${member.phone})`;

  const avatarHtml = member.photo
    ? `<img src="${member.photo}" alt="${escapeHtml(name)}" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="staff-avatar-initials">${member.initials || 'ZP'}</div>`;

  card.innerHTML = `
    <button class="staff-modal-close" onclick="closeStaffModal()" aria-label="Close Profile">✕</button>
    <div class="staff-avatar-wrap" style="width: 120px; height: 120px; margin: 0 auto 1.2rem;">
      ${avatarHtml}
    </div>
    <h3 style="font-family: var(--font-head); font-size: 1.5rem; color: var(--primary); margin-bottom: 0.3rem;">
      ${escapeHtml(name)}
    </h3>
    <p style="font-weight: 700; color: var(--accent-dark); font-size: 0.95rem; margin-bottom: 0.6rem;">
      ${escapeHtml(role)}
    </p>
    <div style="background: var(--bg-alt); padding: 10px; border-radius: var(--radius-md); margin-bottom: 1.2rem;">
      <p style="font-size: 0.88rem; color: var(--text-main); font-weight: 600;">📚 ${escapeHtml(subject)}</p>
      <p style="font-size: 0.82rem; color: var(--text-muted);">${escapeHtml(member.qual)}</p>
    </div>
    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.2rem;">
      ${escapeHtml(member.bio || member.awards)}
    </p>
    ${member.phone ? `
      <a href="tel:${member.phone}" class="btn-primary" style="justify-content:center; width:100%;">
        ${callBtnText}
      </a>
    ` : ''}
  `;

  modal.classList.add('active');
}"""

js_text = re.sub(
    r'function openStaffModal\(memberId\)\s*\{.*?\n\}',
    new_staff_modal,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Now update initContactForm()
new_contact_form = """function initContactForm() {
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
}"""

js_text = re.sub(
    r'function initContactForm\(\)\s*\{.*?\n\}',
    new_contact_form,
    js_text,
    count=1,
    flags=re.DOTALL
)

# Write output to js/main.js
with open(os.path.join('js', 'main.js'), 'w', encoding='utf-8') as f:
    f.write(js_text)

print("SUCCESS: js/main.js updated with default Marathi and full bilingual support!")
