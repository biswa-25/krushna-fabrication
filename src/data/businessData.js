/**
 * =========================================================================
 * KRUSHNA FABRICATION (କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ) - CENTRAL BUSINESS DATA
 * Owner & Contractor: Sarat Karan | Mobile & WhatsApp: 8260750546
 * Biharpur Chhak, Banapur, Odisha
 * =========================================================================
 */

import visitingCard from '../assets/krushna-card-horizontal.jpg';
import shopExterior from '../assets/krushna-shop-exterior.png';
import ownerPhoto from '../assets/owner-sarat-karan.jpg';
import ssMainGateArch from '../assets/ss-main-gate-arch.png';
import ssDesignerDoorOm from '../assets/ss-designer-door-om.png';
import ssSafetyGrillDoor from '../assets/ss-safety-grill-door.png';
import ssStaircaseRailing from '../assets/ss-staircase-railing.jpg';

export const businessData = {
  // -----------------------------------------------------------------------
  // 1. BUSINESS & OWNER CONTACT DETAILS
  // -----------------------------------------------------------------------
  info: {
    name: "Krushna Fabrication",
    nameOdia: "କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ",
    secondaryName: "Krushna Welding Workshop",
    secondaryNameOdia: "କୃଷ୍ଣ ୱେଲ୍ଡିଂ ୱାର୍କସପ୍",
    
    ownerName: "Sarat Karan",
    ownerNameOdia: "ଶରତ କରଣ",
    ownerRole: "Owner & Lead Contractor",
    ownerRoleOdia: "ପ୍ରତିଷ୍ଠାତା ଓ ମୁଖ୍ୟ ଫ୍ୟାବ୍ରିକେସନ୍ କଣ୍ଟ୍ରାକ୍ଟର",

    cardTaglineOdia: "ଏଠାରେ ଷ୍ଟିଲ, ଜି.ଆଇ., ଆଲୁମିନିୟମ, ଲୁହାର ସମସ୍ତ ସାମଗ୍ରୀ ତିଆରି କରାଯାଏ ।",
    cardTagline: "Manufacturer of all types of Steel, G.I., Aluminium & Iron Items.",

    contractNotice: "We undertake complete building and house fabrication contracts. Submit your requirements or call us for free site measurement & individual quotation.",
    contractNoticeOdia: "ନୂଆ ଘର ତଥା ବିଲ୍ଡିଂ ନିର୍ମାଣ ପାଇଁ ସମସ୍ତ ଫ୍ୟାବ୍ରିକେସନ୍ କଣ୍ଟ୍ରାକ୍ଟ ନିଆଯାଏ । ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଜଣାନ୍ତୁ, ଶରତ କରଣ ନିଜେ ସାଇଟ୍‌କୁ ଯାଇ ମାପ ନେଇ ଉଚିତ୍ ଦର ଜଣାଇବେ ।",

    // Primary Contacts
    phone: "+91 82607 50546",
    phoneRaw: "+918260750546",
    whatsapp: "+91 82607 50546",
    whatsappRaw: "918260750546",

    location: "Biharpur Chhak, Banapur, Odisha, India",
    locationOdia: "ବିହାରପୁର ଛକ, ବାଣପୁର, ଓଡ଼ିଶା",
    addressFull: "Krushna Fabrication Workshop, Biharpur Chhak, Banapur, Khordha District, Odisha - 752031",

    businessHours: {
      days: "Monday – Sunday: 8:00 AM – 8:30 PM",
      daysOdia: "ସୋମବାର – ରବିବାର: ସକାଳ ୮:୦୦ – ରାତି ୮:୩୦",
      status: "Open All 7 Days (On-Site Measurement Available)",
      statusOdia: "ସପ୍ତାହର ୭ ଦିନ ଖୋଲା (ସାଇଟ୍ ମାପ ସୁବିଧା)"
    },

    trustHighlights: "Full Building Contract • Grade 304 SS • Argon Welding • UPVC/WPVC • Fiber Doors",
    trustHighlightsOdia: "ଘରର ସମ୍ପୂର୍ଣ୍ଣ କଣ୍ଟ୍ରାକ୍ଟ • ୩୦୪ ଗ୍ରେଡ୍ ଷ୍ଟିଲ୍ • ଆର୍ଗନ୍ ୱେଲ୍ଡିଂ • ୟୁପିଭିସି/ଡବ୍ଲୁପିଭିସି • ଫାଇବର କବାଟ"
  },

  // -----------------------------------------------------------------------
  // 2. REAL WORKSHOP MEDIA ASSETS
  // -----------------------------------------------------------------------
  assets: {
    visitingCard,
    shopExterior,
    ownerPhoto,
    ssMainGateArch,
    ssDesignerDoorOm,
    ssSafetyGrillDoor,
    ssStaircaseRailing
  },

  // -----------------------------------------------------------------------
  // 3. CORE WORK SERVICES (Matches User Specific Requirements)
  // -----------------------------------------------------------------------
  servicesList: [
    {
      id: "steel-gate",
      title: "Steel Gate (SS 304 & Iron)",
      titleOdia: "ଷ୍ଟିଲ୍ ଗେଟ୍ (SS ଓ ଲୁହା ମୁଖ୍ୟ ପ୍ରବେଶ ଦ୍ୱାର)",
      desc: "Custom architectural entrance gates, swing gates, and heavy sliding gates.",
      descOdia: "ଆର୍ଚ୍ ଗେଟ୍, ସୁଇଙ୍ଗ୍ ଓ ସ୍ଲାଇଡିଂ ଗେଟ୍, ମୟୂର ଓ ଶୁଭ-ଲାଭ ଲେଜର କଟିଂ ଡିଜାଇନ୍।",
      image: ssMainGateArch,
      badge: "304 Stainless Steel"
    },
    {
      id: "window-grill",
      title: "Window Grill & Balcony Safety",
      titleOdia: "ଝରକା ଗ୍ରୀଲ୍ ଓ ବାଲକୋନି ସୁରକ୍ଷା",
      desc: "Heavy-duty square bar window grills and balcony protective enclosures.",
      descOdia: "ମଜବୁତ୍ ସ୍କୋୟାର୍ ରଡ୍ ଓ ପାଇପ୍ ଗ୍ରୀଲ୍, ସର୍ବାଧିକ ସୁରକ୍ଷା ଓ ଉତ୍ତମ ପବନ ଚଳାଚଳ।",
      image: ssSafetyGrillDoor,
      badge: "High Security"
    },
    {
      id: "upvc-doors-windows",
      title: "UPVC Doors & Windows",
      titleOdia: "ୟୁପିଭିସି କବାଟ ଓ ଝରକା (UPVC)",
      desc: "Modern multi-chamber UPVC sliding windows and noise-free acoustic doors.",
      descOdia: "ଆଧୁନିକ ୟୁପିଭିସି ସ୍ଲାଇଡିଂ ଝରକା, ଧୂଳି ଓ ଶବ୍ଦ ନିରୋଧକ, ଆଜୀବନ ସ୍ଥାୟୀ।",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
      badge: "Soundproof & Modern"
    },
    {
      id: "fiber-doors",
      title: "Waterproof Fiber Doors",
      titleOdia: "ୱାଟରପ୍ରୁଫ୍ ଫାଇବର କବାଟ (Fiber Door)",
      desc: "100% water and termite resistant doors for bathrooms, balconies, and bedrooms.",
      descOdia: "ବାଥରୁମ୍ ଓ ରୁମ୍ ପାଇଁ ୧୦୦% ପାଣି ଓ ଉଇ ନିରୋଧକ ସୁନ୍ଦର ଡିଜାଇନର୍ କବାଟ।",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
      badge: "100% Waterproof"
    },
    {
      id: "aluminium-windows",
      title: "Aluminium Doors & Windows",
      titleOdia: "ଆଲୁମିନିୟମ୍ କବାଟ ଓ ସ୍ଲାଇଡିଂ ଝରକା",
      desc: "Anodized and powder-coated 2-track and 3-track sliding windows with mosquito mesh.",
      descOdia: "ପାଉଡର କୋଟେଡ୍ ଆଲୁମିନିୟମ୍ ସ୍ଲାଇଡିଂ ୱିଣ୍ଡୋ, କଲର ଗ୍ଲାସ୍ ଓ ମଶା ଜାଲି ସୁବିଧା।",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80",
      badge: "Smooth Sliding"
    },
    {
      id: "upstairs-railing",
      title: "Upstairs & Staircase Railing",
      titleOdia: "ସିଡ଼ି ରେଲିଂ (Upstairs Railing)",
      desc: "Polished SS staircase railings with decorative colored balusters and floral glass panels.",
      descOdia: "ଚମକଦାର ଏସ୍‌ଏସ୍ ହ୍ୟାଣ୍ଡରେଲ୍, ଆକର୍ଷଣୀୟ ରଙ୍ଗିନ୍ ଖୁମ୍ବ ଓ ଫ୍ଲୋରାଲ୍ ଗ୍ଲାସ୍ ଡିଜାଇନ୍।",
      image: ssStaircaseRailing,
      badge: "Decorative Railing"
    },
    {
      id: "wpvc-plastic-design",
      title: "WPVC Doors & Plastic Design",
      titleOdia: "ଡବ୍ଲୁପିଭିସି ଓ ପ୍ଲାଷ୍ଟିକ୍ ଡିଜାଇନ୍ କବାଟ",
      desc: "Heavy polymer wood-plastic composite doors with 3D embossed designer patterns.",
      descOdia: "ହେଭି ଉଡ୍-ପ୍ଲାଷ୍ଟିକ୍ କମ୍ପୋଜିଟ୍ ୩D ଏମ୍ବୋସ୍ଡ୍ କବାଟ, ଅତ୍ୟନ୍ତ ମଜବୁତ୍ ଓ ସୁନ୍ଦର।",
      image: ssDesignerDoorOm,
      badge: "Wood & Plastic Composite"
    },
    {
      id: "welding-contracts",
      title: "G.I., Arc & Argon Welding Contracts",
      titleOdia: "ଜି.ଆଇ., ଆର୍ଗନ୍ ଓ ଆର୍କ ୱେଲ୍ଡିଂ କଣ୍ଟ୍ରାକ୍ଟ",
      desc: "Structural welding, metal roof sheds, truss fabrication, and complete house contracts.",
      descOdia: "ମେଟାଲ୍ ଟ୍ରସ୍ ସେଡ୍, ପାଇପ୍ ଷ୍ଟ୍ରକଚର ଏବଂ ନୂତନ ଘରର ସମସ୍ତ ଫ୍ୟାବ୍ରିକେସନ୍ କଣ୍ଟ୍ରାକ୍ଟ।",
      image: shopExterior,
      badge: "Full House Contract"
    }
  ],

  // -----------------------------------------------------------------------
  // 4. REAL WORK SHOWCASE (Featuring User's Actual Photos)
  // -----------------------------------------------------------------------
  catalog: [
    {
      id: "cat-1",
      title: "Royal Arch Stainless Steel Entrance Gate",
      titleOdia: "ରୟାଲ୍ ଆର୍ଚ୍ ଷ୍ଟେନଲେସ୍ ଷ୍ଟିଲ୍ ମୁଖ୍ୟ ପ୍ରବେଶ ଦ୍ୱାର",
      category: "Steel Gates",
      categoryOdia: "ଷ୍ଟିଲ୍ ଗେଟ୍",
      material: "Grade 304 Stainless Steel Arch with Pillar Caps",
      materialOdia: "୩୦୪ ଗ୍ରେଡ୍ ଏସ୍‌ଏସ୍ ଓ ଆକର୍ଷଣୀୟ ଡିଜାଇନ୍ ପିଲାର୍",
      image: ssMainGateArch,
      badge: "Actual Work"
    },
    {
      id: "cat-2",
      title: "SS + Wooden Panel Safety Door with Om Symbol",
      titleOdia: "ଏସ୍‌ଏସ୍ ଓ ଉଡେନ୍ ପ୍ୟାନେଲ୍ ସୁରକ୍ଷା କବାଟ (ଓଁ ଡିଜାଇନ୍)",
      category: "Doors",
      categoryOdia: "କବାଟ",
      material: "Grade 304 SS Tubular Frame + Teak Finish Waterproof Panel",
      materialOdia: "ଏସ୍‌ଏସ୍ ୩୦୪ ଫ୍ରେମ୍ ଓ ୱାଟରପ୍ରୁଫ୍ ଟିକ୍ ପ୍ୟାନେଲ୍",
      image: ssDesignerDoorOm,
      badge: "Actual Work"
    },
    {
      id: "cat-3",
      title: "Stainless Steel Safety Door & Window Grill",
      titleOdia: "ଷ୍ଟେନଲେସ୍ ଷ୍ଟିଲ୍ ସୁରକ୍ଷା କବାଟ ଓ ଝରକା ଗ୍ରୀଲ୍",
      category: "Grills",
      categoryOdia: "ଗ୍ରୀଲ୍",
      material: "Heavy SS square tubing with circular rosette studs",
      materialOdia: "ମଜବୁତ୍ ଏସ୍‌ଏସ୍ ସ୍କୋୟାର୍ ପାଇପ୍ ଓ ଡିଜାଇନ୍ ଷ୍ଟଡ୍ସ",
      image: ssSafetyGrillDoor,
      badge: "Actual Work"
    },
    {
      id: "cat-4",
      title: "Architectural SS Staircase Railing with Colored Balusters",
      titleOdia: "ଆକର୍ଷଣୀୟ ଏସ୍‌ଏସ୍ ସିଡ଼ି ରେଲିଂ (ରଙ୍ଗିନ ଖୁମ୍ବ ଓ ଗ୍ଲାସ୍)",
      category: "Upstairs Railing",
      categoryOdia: "ସିଡ଼ି ରେଲିଂ",
      material: "Polished SS round handrail with dual-tone amber balusters",
      materialOdia: "ପଲିସ୍ ଏସ୍‌ଏସ୍ ହ୍ୟାଣ୍ଡରେଲ୍ ଓ ଆମ୍ବର ରଙ୍ଗିନ୍ ଖୁମ୍ବ",
      image: ssStaircaseRailing,
      badge: "Actual Work"
    },
    {
      id: "cat-5",
      title: "Owner Sarat Karan with Gate & Window Grill on Site",
      titleOdia: "ସାଇଟ୍‌ରେ ମାଲିକ ଶରତ କରଣ (ମୟୂର ଏନଗ୍ରେଭିଂ ଗେଟ୍)",
      category: "Steel Gates",
      categoryOdia: "ଷ୍ଟିଲ୍ ଗେଟ୍",
      material: "Grade 304 SS with Shubh Labh & Peacock laser cut sheet",
      materialOdia: "ଶୁଭ ଲାଭ ଓ ମୟୂର ଲେଜର କଟିଂ ଏସ୍‌ଏସ୍ ସିଟ୍",
      image: ownerPhoto,
      badge: "Owner Sarat Karan"
    },
    {
      id: "cat-6",
      title: "Krushna Fabrication Main Workshop & Store",
      titleOdia: "କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ ମୁଖ୍ୟ ୱାର୍କସପ୍ ଓ ଶପ୍",
      category: "Workshop",
      categoryOdia: "ୱାର୍କସପ୍",
      material: "Biharpur Chhak, Banapur workshop with pipes & materials ready",
      materialOdia: "ବିହାରପୁର ଛକ, ବାଣପୁରସ୍ଥିତ ଆମ ମୁଖ୍ୟ ୱାର୍କସପ୍",
      image: shopExterior,
      badge: "Our Shop"
    }
  ]
};

/**
 * Build prefilled WhatsApp inquiry URL
 */
export const getWhatsAppLink = (customMessage = "") => {
  const baseNumber = businessData.info.whatsappRaw;
  const defaultMsg = `Hello Sarat Bhai (Krushna Fabrication), I want to discuss Steel Gate / Grill / Door / Railing work for my house.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${baseNumber}?text=${text}`;
};

export const getPhoneLink = (number = businessData.info.phoneRaw) => {
  return `tel:${number}`;
};
