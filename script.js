document.addEventListener('DOMContentLoaded', () => {
  // --- Translation Dictionary (English and Tamil) ---
  const translations = {
    en: {
      logo_sub: "Catering Service",
      nav_home: "Home",
      nav_legacy: "Legacy",
      nav_services: "Services",
      nav_menu: "Menu",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_book: "Book Event",
      
      hero_tagline: "Savoring Traditions, Crafting Memories",
      hero_title: "A Feast of Flavors, Crafted to Perfection",
      hero_desc: "Experience royal dining curated by our legendary Chief Chef. Bringing three decades of authentic Vegetarian & Non-Vegetarian culinary mastery to your grandest celebrations.",
      hero_btn_menu: "Explore Our Menu",
      hero_btn_quote: "Request a Quote",
      
      about_badge_label: "Years of Mastery",
      about_subtitle: "Our Legacy",
      about_title: "A Lifelong Passion for Culinary Excellence",
      about_chef_title: "Inspired by Chief Chef Vijayadeva",
      about_text_1: "Every dish we serve carries a story of dedication. Founded by our head Chief Chef (my father), Vijayadeva Catering was built on the values of absolute taste, authentic preparation, and hospitality that touches the heart. We combine traditional recipes handed down through generations with modern culinary arts to produce culinary spectacles.",
      about_text_2: "Whether it's a traditional vegetarian banquet cooked in strict compliance with custom or a rich, slow-simmered non-vegetarian feast bursting with spices, his hands-on touch guarantees perfection in every bite.",
      about_h1_title: "Artisanal Spices",
      about_h1_desc: "We grind all our spices in-house to capture natural oils and authentic aroma.",
      about_h2_title: "Flawless Hygiene",
      about_h2_desc: "Strict quality controls, fresh local ingredients, and sanitized kitchens.",
      
      services_subtitle: "Our Offerings",
      services_title: "Catering for Every Occasion",
      service1_title: "Grand Weddings",
      service1_desc: "Complete wedding banquets, from welcome drinks to custom dessert counters. Styled to match your theme and feed your guests like royalty.",
      service2_title: "Corporate Events",
      service2_desc: "Impress clients and energize teams with premium buffets, high teas, and box lunches tailored to your schedule and corporate branding.",
      service3_title: "Private Celebrations",
      service3_desc: "Birthdays, anniversaries, housewarmings, or family gatherings. We design menus that fit small, intimate get-togethers perfectly.",
      service4_title: "Festive Feasts",
      service4_desc: "Traditional multi-course feasts for religious ceremonies and cultural festivals, cooked strictly in traditional guidelines.",
      
      menu_subtitle: "Delicious Creations",
      menu_title: "Our Signature Dishes",
      menu_filter_all: "All Specialties",
      menu_filter_veg: "Pure Vegetarian",
      menu_filter_nonveg: "Non-Vegetarian",
      
      menu_item1_tag: "Veg Special",
      menu_item1_title: "Royal Vegetarian Feast",
      menu_item1_desc: "A premium thali experience featuring Paneer Butter Masala, Saffron Pulao, Slow-cooked Dal Makhani, Fresh Naan, and raita, styled traditionally.",
      menu_item1_feat1: "Lunch/Dinner",
      menu_item1_feat2: "Mild/Medium",
      
      menu_item2_tag: "Chef Signature",
      menu_item2_title: "Vijayadeva Mutton Biryani",
      menu_item2_desc: "Steam-cooked long grain basmati rice, tender farm-sourced mutton pieces, and our chief chef's private secret spice blend. Served with raita.",
      menu_item2_feat1: "Main Course",
      menu_item2_feat2: "Medium Spicy",
      
      menu_item3_tag: "Vegetarian",
      menu_item3_title: "Shahi Paneer Tikka Platter",
      menu_item3_desc: "Fresh cottage cheese cubes marinated in premium Greek yogurt, mustard oil, and hand-ground spices, grilled to perfection in clay tandoors.",
      menu_item3_feat1: "Appetizer",
      menu_item3_feat2: "Medium Spicy",
      
      menu_item4_tag: "Seafood",
      menu_item4_title: "Butter Garlic Pepper Prawns",
      menu_item4_desc: "Jumbo coastal prawns tossed in churned country butter, roasted garlic, black peppercorns, and fresh coriander leaves. A crowd favorite.",
      menu_item4_feat1: "Starters",
      menu_item4_feat2: "Pepper Spicy",
      
      gallery_subtitle: "Visual Delights",
      gallery_title: "Our Food & Event Gallery",
      gallery_item1_title: "Traditional Thali Plating",
      gallery_item1_desc: "Vegetarian Catering",
      gallery_item2_title: "Elegant Table Settings",
      gallery_item2_desc: "Grand Weddings",
      gallery_item3_title: "Pot Biryani Display",
      gallery_item3_desc: "Chef's Signature",
      gallery_item4_title: "Traditional Masala Dosa",
      gallery_item4_desc: "Pure Veg Specialties",
      gallery_item5_title: "Crispy Samosa Platter",
      gallery_item5_desc: "Pure Veg Appetizers",
      gallery_item6_title: "Premium Paneer Kadhai",
      gallery_item6_desc: "Pure Veg Main Course",
      
      testimonials_subtitle: "Heartfelt Feedback",
      testimonials_title: "What Our Clients Say",
      testimonial1_text: "\"Vijayadeva Catering managed the food for my daughter's wedding, and our guests are still talking about the mutton biryani! The taste was absolutely heavenly, and the service was extremely professional. Highly recommended!\"",
      testimonial1_name: "Karthik Srinivasan",
      testimonial1_event: "Wedding Banquet at Chennai",
      testimonial2_text: "\"For our corporate annual meet, we selected their vegetarian buffet option. The Paneer Butter Masala and Saffron Pulao were outstanding. Flawless presentation, premium taste, and highly hygienic service.\"",
      testimonial2_name: "Pooja Sharma",
      testimonial2_event: "Corporate Event, Tech Park",
      testimonial3_text: "\"We hired them for a private home puja ceremony. Their traditional vegetarian catering was done with so much purity and respect. The spices were perfectly balanced, and the crew was incredibly polite.\"",
      testimonial3_name: "Ramachandran Iyer",
      testimonial3_event: "Housewarming Festive Lunch",
      
      contact_subtitle: "Let's Connect",
      contact_title: "Schedule a Culinary Journey",
      contact_desc: "Ready to craft an unforgettable dining experience for your guests? Give us a call, drop us an email, or fill out the booking form to receive a customized quote.",
      contact_office_title: "Our Office",
      contact_office_val: "Vizhuperundhurai, Nangudi Post, Srimushnam TK, Cuddalore District",
      contact_phone_title: "Call Us Directly",
      contact_email_title: "Email Inquiry",
      contact_qr_title: "Digital Business Card",
      contact_qr_desc: "Scan this QR code to save and view our digital business card on your phone.",
      
      form_title: "Request a Custom Proposal",
      form_label_name: "Your Full Name",
      form_placeholder_name: "e.g. Rajesh Kumar",
      form_label_email: "Email Address",
      form_placeholder_email: "e.g. rajesh@email.com",
      form_label_phone: "Phone Number",
      form_placeholder_phone: "e.g. +91 98400 12345",
      form_label_date: "Event Date",
      form_label_guests: "Estimated Guests",
      form_placeholder_guests: "Min. 20 guests",
      form_label_cuisine: "Cuisine Preference",
      form_cuisine_placeholder: "Select option",
      form_cuisine_veg: "Pure Vegetarian Feast",
      form_cuisine_nonveg: "Non-Vegetarian Delights",
      form_cuisine_both: "Both (Veg & Non-Veg)",
      form_label_details: "Event Details & Special Requests",
      form_placeholder_details: "Tell us about your event (e.g. Wedding, Corporate lunch, special dishes requested, dietary requirements...)",
      form_submit_btn: "Submit Booking Request",
      
      modal_title: "Inquiry Submitted!",
      modal_text: "Thank you for contacting Vijayadeva Catering. Our events team will reach out to you within 24 hours to present a customized menu and proposal.",
      modal_close_btn: "Close Window",
      
      footer_brand_desc: "Premium catering services presenting authentic traditional tastes and professional event styling since 1996.",
      footer_brand_badge: "Guided by Chief Chef Legacy",
      footer_title_links: "Quick Links",
      footer_title_hours: "Operating Hours",
      footer_hours_item1_day: "Monday - Saturday",
      footer_hours_item1_time: "09:00 AM - 08:00 PM",
      footer_hours_item2_day: "Sunday",
      footer_hours_item2_time: "10:00 AM - 05:00 PM",
      footer_hours_item3_day: "Events Booking",
      footer_hours_item3_time: "24/7 Availability",
      footer_copyright: "© 2026 Vijayadeva Catering. All rights reserved.",
      footer_credits_text: "Designed with honor for our Chief Chef | Powered by",
      nav_visiting_card: "Digital Business Card"
    },
    ta: {
      logo_sub: "கேட்டரிங் சர்வீஸ்",
      nav_home: "முகப்பு",
      nav_legacy: "பாரம்பரியம்",
      nav_services: "சேவைகள்",
      nav_menu: "உணவுப் பட்டியல்",
      nav_gallery: "புகைப்படங்கள்",
      nav_reviews: "மதிப்புரைகள்",
      nav_book: "முன்பதிவு செய்ய",
      
      hero_tagline: "பாரம்பரிய சுவை, என்றும் அழியா நினைவுகள்",
      hero_title: "சுவைகளின் சங்கமம், பரிபூரண தயாரிப்பு",
      hero_desc: "எங்கள் புகழ்பெற்ற முதன்மை சமையல் கலைஞர் (சீஃப் செஃப்) தயாரிக்கும் அரச விருந்து. உங்கள் வீட்டு விஷேஷங்களை சிறப்பிக்க 30 வருட பாரம்பரிய சைவ & அசைவ சமையல் அனுபவம்.",
      hero_btn_menu: "எங்கள் உணவுகள்",
      hero_btn_quote: "விவரம் கேட்க",
      
      about_badge_label: "வருட சமையல் அனுபவம்",
      about_subtitle: "எங்கள் பாரம்பரியம்",
      about_title: "சமையல் கலையில் வாழ்நாள் அர்ப்பணிப்பு",
      about_chef_title: "சீஃப் செஃப் விஜயதேவா அவர்களின் கைவண்ணம்",
      about_text_1: "நாங்கள் பரிமாறும் ஒவ்வொரு உணவிலும் ஒரு அர்ப்பணிப்பு கதை உள்ளது. எனது தந்தை சீஃப் செஃப் விஜயதேவா அவர்களால் தொடங்கப்பட்ட எங்கள் நிறுவனம், நிகரற்ற சுவை, பாரம்பரிய தயாரிப்பு மற்றும் மனமார்ந்த விருந்தோம்பல் ஆகிய நற்பண்புகளின் அடிப்படையில் கட்டமைக்கப்பட்டது. தலைமுறை தலைமுறையாகக் கடத்தப்பட்ட சமையல் ரகசியங்களை நவீன சமையல் கலையுடன் இணைத்து சிறந்த விருந்துகளைப் படைக்கிறோம்.",
      about_text_2: "பாரம்பரிய நெறிமுறைகளின்படி சமைக்கப்படும் சுத்தமான சைவ விருந்தாக இருந்தாலும் அல்லது நறுமணப் பொருள் நிறைந்த அசைவ விருந்தாக இருந்தாலும், அவரின் நேரடி மேற்பார்வையே அதன் அசாத்திய சுவைக்கு உத்தரவாதம்.",
      about_h1_title: "கை அரைத்த மசாலாக்கள்",
      about_h1_desc: "சுவையும் நறுமணமும் மாறாமல் இருக்க அனைத்து மசாலாக்களையும் நாங்களே அரைக்கிறோம்.",
      about_h2_title: "சுத்தமான தரம்",
      about_h2_desc: "கடுமையான தரக் கட்டுப்பாடுகள், புதிய உள்ளூர் பொருட்கள் மற்றும் சுத்திகரிக்கப்பட்ட சமையலறை.",
      
      services_subtitle: "எங்கள் சேவைகள்",
      services_title: "அனைத்து சுபநிகழ்ச்சிகளுக்கும் கேட்டரிங்",
      service1_title: "பிரமாண்ட திருமணங்கள்",
      service1_desc: "வரவேற்பு பானங்கள் முதல் விதவிதமான இனிப்பு வகைகள் வரை முழு திருமண விருந்து. உங்கள் விருப்பத்திற்கேற்ப அரச முறைப்படி பரிமாறப்படும்.",
      service2_title: "கார்ப்பரேட் விழாக்கள்",
      service2_desc: "பஃபே, தேநீர் விருந்து மற்றும் உங்கள் நேர அட்டவணைக்கு ஏற்றவாறு மதிய உணவுப் பெட்டிகள் மூலம் உங்கள் வாடிக்கையாளர்களையும் பணியாளர்களையும் கவரலாம்.",
      service3_title: "குடும்ப சுபநிகழ்ச்சிகள்",
      service3_desc: "பிறந்தநாள், திருமண நாள், புதுமனை புகுவிழா போன்ற இல்ல விழாக்களுக்கு ஏற்றவாறு பிரத்தியேக உணவுப் பட்டியல்.",
      service4_title: "பாரம்பரிய பண்டிகை விருந்துகள்",
      service4_desc: "மத சடங்குகள் மற்றும் பண்பாட்டு விழாக்களுக்கு முழுமையான பாரம்பரிய முறைப்படி சமைக்கப்படும் உணவுகள்.",
      
      menu_subtitle: "சுவையான உணவுகள்",
      menu_title: "எங்கள் சிறப்பு உணவுகள்",
      menu_filter_all: "அனைத்து உணவுகள்",
      menu_filter_veg: "சுத்தமான சைவம்",
      menu_filter_nonveg: "அசைவ உணவுகள்",
      
      menu_item1_tag: "சைவ சிறப்பு",
      menu_item1_title: "அரச சைவ விருந்து",
      menu_item1_desc: "பனீர் பட்டர் மசாலா, குங்குமப்பூ புலாவ், தால் மக்கானி, பட்டர் நான் மற்றும் ராய்தா அடங்கிய பாரம்பரிய பிரீமியம் தாலி.",
      menu_item1_feat1: "மதிய/இரவு உணவு",
      menu_item1_feat2: "குறைந்த காரம்",
      
      menu_item2_tag: "சீஃப் செஃப் சிறப்பு",
      menu_item2_title: "விஜயதேவா மட்டன் பிரியாணி",
      menu_item2_desc: "சுவையான பாசுமதி அரிசி, தரமான ஆட்டுக்கறி மற்றும் எங்களது சீஃப் செஃப்பின் பிரத்தியேக மசாலா கூட்டில் உருவான பிரியாணி.",
      menu_item2_feat1: "முக்கிய உணவு",
      menu_item2_feat2: "நடுத்தர காரம்",
      
      menu_item3_tag: "சைவம்",
      menu_item3_title: "சாஹி பனீர் டிக்கா",
      menu_item3_desc: "தயிர் மற்றும் மசாலாக்களில் ஊறவைக்கப்பட்டு, தந்தூரி அடுப்பில் சுடப்பட்ட பிரீமியம் பனீர் துண்டுகள்.",
      menu_item3_feat1: "ஸ்டார்டர்ஸ்",
      menu_item3_feat2: "நடுத்தர காரம்",
      
      menu_item4_tag: "கடல் உணவு",
      menu_item4_title: "வெண்ணெய் பூண்டு மிளகு இறால்",
      menu_item4_desc: "சுத்தமான வெண்ணெய், பூண்டு, மிளகுத்தூள் மற்றும் கொத்தமல்லி தழையுடன் வதக்கப்பட்ட கடலோர இறால் வறுவல்.",
      menu_item4_feat1: "ஸ்டார்டர்ஸ்",
      menu_item4_feat2: "காரமான மிளகு சுவை",
      
      gallery_subtitle: "காட்சி விருந்து",
      gallery_title: "எங்கள் புகைப்படத் தொகுப்பு",
      gallery_item1_title: "பாரம்பரிய தாலி அலங்காரம்",
      gallery_item1_desc: "சைவ கேட்டரிங்",
      gallery_item2_title: "பிரமாண்ட திருமண மேஜை அமைப்பு",
      gallery_item2_desc: "மங்களகரமான திருமணங்கள்",
      gallery_item3_title: "மண்பானை பிரியாணி காட்சி",
      gallery_item3_desc: "சீஃப் செஃப் சிறப்பு",
      gallery_item4_title: "பாரம்பரிய மசாலா தோசை",
      gallery_item4_desc: "சைவ சிறப்பு வகைகள்",
      gallery_item5_title: "மொறுமொறுப்பான சமோசா",
      gallery_item5_desc: "சுவையான சைவ தின்பண்டங்கள்",
      gallery_item6_title: "பிரீமியம் கடாய் பனீர்",
      gallery_item6_desc: "சைவ முக்கிய உணவு",
      
      testimonials_subtitle: "மனமார்ந்த பாராட்டுக்கள்",
      testimonials_title: "வாடிக்கையாளர்களின் கருத்துக்கள்",
      testimonial1_text: "\"விஜயதேவா கேட்டரிங் எனது மகளின் திருமண உணவுகளை கவனித்துக் கொண்டனர், வந்தவர்கள் அனைவரும் மட்டன் பிரியாணியை இன்னும் பாராட்டிக் கொண்டிருக்கிறார்கள்! சுவை அசாத்தியமாக இருந்தது, சேவை மிகவும் தொழில்முறையாக இருந்தது!\"",
      testimonial1_name: "கார்த்திக் சீனிவாசன்",
      testimonial1_event: "திருமண விருந்து, சென்னை",
      testimonial2_text: "\"எங்கள் நிறுவனத்தின் ஆண்டு விழாவிற்கு சைவ உணவுகளைத் தேர்ந்தெடுத்தோம். பனீர் பட்டர் மசாலா மற்றும் குங்குமப்பூ புலாவ் அருமையாக இருந்தன. நேர்த்தியான கட்டமைப்பு, பிரீமியம் சுவை மற்றும் தூய்மையான சேவை.\"",
      testimonial2_name: "பூஜா சர்மா",
      testimonial2_event: "கார்ப்பரேட் விழா, டெக் பார்க்",
      testimonial3_text: "\"புதுமனை புகுவிழா பூஜைக்கு இவர்களை அழைத்தோம். அவர்களின் பாரம்பரிய சைவ உணவு சமையல் மிகவும் தூய்மையாகவும் பக்திப்பூர்வமாகவும் இருந்தது. மசாலாக்கள் சரியான அளவில் இருந்தன, சமையல் குழுவினர் மிகவும் பணிவானவர்கள்.\"",
      testimonial3_name: "ராமச்சந்திரன் ஐயர்",
      testimonial3_event: "புதுமனை புகுவிழா மதிய விருந்து",
      
      contact_subtitle: "தொடர்பு கொள்ள",
      contact_title: "உணவுப் பயணத்தைத் திட்டமிடுங்கள்",
      contact_desc: "உங்கள் விருந்தினர்களுக்கு மறக்க முடியாத உணவு அனுபவத்தை வழங்க தயாரா? எங்களை அழைக்கவும் அல்லது விவரங்களை படிவத்தில் பூர்த்தி செய்யவும்.",
      contact_office_title: "எங்கள் அலுவலகம்",
      contact_office_val: "விழுப்புரந்துரை, நாங்குடி போஸ்ட், ஸ்ரீமுஷ்ணம் தாலுகா, கடலூர் மாவட்டம்",
      contact_phone_title: "நேரடி அழைப்புக்கு",
      contact_email_title: "மின்னஞ்சல் முகவரி",
      contact_qr_title: "டிஜிட்டல் விசிட்டிங் கார்டு",
      contact_qr_desc: "எங்கள் டிஜிட்டல் விசிட்டிங் கார்டை உங்கள் மொபைலில் காண மற்றும் சேமிக்க இந்த QR குறியீட்டை ஸ்கேன் செய்யவும்.",
      
      form_title: "இலவச மதிப்பீடு பெற",
      form_label_name: "உங்கள் முழு பெயர்",
      form_placeholder_name: "உ.ம். ராஜேஷ் குமார்",
      form_label_email: "மின்னஞ்சல் முகவரி",
      form_placeholder_email: "உ.ம். rajesh@email.com",
      form_label_phone: "தொலைபேசி எண்",
      form_placeholder_phone: "உ.ம். +91 98400 12345",
      form_label_date: "விழா நடைபெறும் நாள்",
      form_label_guests: "வருகை தரும் விருந்தினர்கள்",
      form_placeholder_guests: "குறைந்தது 20 விருந்தினர்கள்",
      form_label_cuisine: "உணவு விருப்பம்",
      form_cuisine_placeholder: "விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
      form_cuisine_veg: "சுத்தமான சைவ உணவு",
      form_cuisine_nonveg: "சுவையான அசைவ உணவு",
      form_cuisine_both: "இரண்டும் (சைவம் & அசைவம்)",
      form_label_details: "விழா விவரங்கள் & இதர விருப்பங்கள்",
      form_placeholder_details: "விழாவைப் பற்றி குறிப்பிடவும் (உ.ம். திருமணம், கார்ப்பரேட் மதிய உணவு, சிறப்பு உணவுகள், உணவு கட்டுப்பாடுகள்...)",
      form_submit_btn: "முன்பதிவு செய்ய அனுப்பவும்",
      
      modal_title: "விவரங்கள் அனுப்பப்பட்டது!",
      modal_text: "விஜயதேவா கேட்டரிங்கைத் தொடர்பு கொண்டதற்கு நன்றி. எங்கள் குழுவினர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்பு கொண்டு உங்களுக்கான பிரத்தியேக உணவுப் பட்டியல் மற்றும் மதிப்பீட்டை வழங்குவார்கள்.",
      modal_close_btn: "சாளரத்தை மூடு",
      
      footer_brand_desc: "1996 முதல் பாரம்பரிய சுவை மற்றும் நேர்த்தியான சுபநிகழ்ச்சி மேலாண்மை வழங்கும் பிரீமியம் கேட்டரிங் சேவை.",
      footer_brand_badge: "சீஃப் செஃப் பாரம்பரிய வழிகாட்டுதலில்",
      footer_title_links: "விரைவு இணைப்புகள்",
      footer_title_hours: "வேலை நேரம்",
      footer_hours_item1_day: "திங்கள் - சனி",
      footer_hours_item1_time: "காலை 09:00 - இரவு 08:00",
      footer_hours_item2_day: "ஞாயிறு",
      footer_hours_item2_time: "காலை 10:00 - மாலை 05:00",
      footer_hours_item3_day: "நிகழ்ச்சி முன்பதிவு",
      footer_hours_item3_time: "24/7 சேவை",
      footer_copyright: "© 2026 விஜயதேவா கேட்டரிங். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      footer_credits_text: "சீஃப் செஃப் நினைவாக வடிவமைக்கப்பட்டது | தயாரிப்பு",
      nav_visiting_card: "டிஜிட்டல் விசிட்டிங் கார்டு"
    }
  };

  // --- Language Switcher Logic ---
  const langButtons = document.querySelectorAll('.lang-btn');
  
  function setLanguage(lang) {
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
      console.warn("localStorage is disabled or blocked in this browser context:", e);
    }
    
    // Update active button state
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        const icon = el.querySelector('i');
        if (icon) {
          const iconHTML = icon.outerHTML;
          const textOnly = translations[lang][key].replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '').trim();
          el.innerHTML = `${iconHTML} ${textOnly}`;
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholders for elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
  }

  // Bind click handlers to language buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Load saved language on startup
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('preferredLanguage') || 'en';
  } catch (e) {
    console.warn("localStorage is disabled or blocked in this browser context:", e);
  }
  setLanguage(savedLang);

  // 1. Navigation Sticky Header on Scroll
  const header = document.querySelector('header');
  const scrollTopBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      scrollTopBtn.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      scrollTopBtn.classList.remove('visible');
    }
  });

  // Scroll to Top Click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Rotate lines to form 'X'
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // 3. Interactive Menu Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active to current
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'flex';
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          if (item.getAttribute('data-category') === filterValue) {
            item.style.display = 'flex';
            setTimeout(() => item.style.opacity = '1', 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
          }
        }
      });
    });
  });

  // 4. Testimonials Slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  let currentSlide = 0;
  let slideInterval;

  // Initialize dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function goToSlide(index) {
    showSlide(index);
    resetTimer();
  }

  function startTimer() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  // Event Listeners for controls
  if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetTimer();
    });
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetTimer();
    });
  }

  startTimer();

  // 5. Booking Form Submission and Success Modal
  const bookingForm = document.getElementById('bookingForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModal');

  if (bookingForm && successModal && closeModalBtn) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation check (HTML5 does most, but we can do extra checks)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      
      if (name && email && phone) {
        // Show success modal
        successModal.classList.add('active');
        // Reset form
        bookingForm.reset();
      }
    });

    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });

    // Close modal if clicked outside modal body
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }

  // 6. Basic Scroll Reveal Effect
  const revealElements = document.querySelectorAll('.reveal');

  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  };

  // Add basic styling for reveal class on load dynamically
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  // Custom CSS for active reveal state
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    .reveal.active {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleSheet);

  window.addEventListener('scroll', checkReveal);
  // Run once initially to check visible items
  setTimeout(checkReveal, 200);
});
