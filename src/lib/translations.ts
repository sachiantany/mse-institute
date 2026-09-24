export type Language = "en" | "si" | "ta";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  si: "සි",
  ta: "த",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    navAbout: "About",
    navSubjects: "Subjects",
    navTeachers: "Teachers",
    navGallery: "Gallery",
    navContact: "Contact",
    navEnroll: "Enroll Now",

    heroTitle1: "Masters in",
    heroTitle2: "Specialized Education",
    heroSubtitle:
      "Quality O/L and A/L classes for students in Puttalam. We focus on real understanding — not just exam cramming.",
    heroEnroll: "Enroll Now",
    heroSubjects: "View Subjects",

    aboutLabel: "ABOUT US",
    aboutTitle: "Helping students in Puttalam build real understanding.",
    aboutP1:
      "MSE Higher Educational Center is a tuition and learning centre dedicated to quality education. We cover a wide range of G.C.E. Ordinary Level and Advanced Level subjects, with a focus on making sure students actually understand what they're learning — not just memorise it.",
    aboutP2:
      "Our teachers don't just prepare you for exams. They help you build the kind of knowledge and confidence that stays with you long after you leave the classroom.",

    subjectsLabel: "WHAT WE TEACH",
    subjectsTitle: "O/L and A/L subjects, covered.",
    subjectsSubtitle:
      "From Mathematics to Commerce — all taught by subject specialists who know the national syllabus inside out.",
    olTitle: "G.C.E. Ordinary Level",
    alTitle: "G.C.E. Advanced Level",

    mathematics: "Mathematics",
    science: "Science",
    english: "English",
    sinhala: "Sinhala",
    buddhism: "Buddhism",
    history: "History",
    commerce: "Commerce",
    ict: "ICT",
    geography: "Geography",
    media: "Media",
    korean: "Korean",
    buddhistCiv: "Buddhist Civilization",
    politicalScience: "Political Science",

    scienceStream: "Science",
    commerceStream: "Commerce",
    technologyStream: "Technology",
    artsStream: "Arts & Humanities",

    combinedMaths: "Combined Mathematics",
    physics: "Physics",
    chemistry: "Chemistry",
    biology: "Biology",
    accounting: "Accounting",
    economics: "Economics",
    businessStudies: "Business Studies",
    engineeringTech: "Engineering Technology",
    scienceForTech: "Science for Technology",
    logic: "Logic",

    teachersLabel: "OUR TEACHERS",
    teachersTitle: "Meet the people behind MSE.",
    teachersSubtitle:
      "Experienced educators who bring knowledge, dedication, and a genuine commitment to every student's success.",

    galleryLabel: "OUR SPACE",
    galleryTitle: "Where the learning happens.",
    gallerySubtitle: "6 dedicated learning halls, each designed for focused study.",
    galleryMainHall: "The main hall — our largest learning space",
    galleryBuilding: "Our centre in Puttalam",
    galleryClassroom: "One of our 6 learning halls",

    contactLabel: "FIND US",
    contactTitle: "Come see for yourself.",
    contactSubtitle:
      "Drop by our centre in Puttalam, give us a call, or message us on Facebook.",
    locationTitle: "Where we are",
    addressLabel: "Address",
    addressLine1: "No 08, 15th Lane,",
    addressLine2: "Goods Shed Road, Puttalam,",
    addressLine3: "Sri Lanka",
    phoneLabel: "Phone",
    scheduleLabel: "Class hours",
    scheduleLine1: "Weekdays & Weekends",
    scheduleLine2: "Morning & Evening sessions",
    facebookLabel: "Facebook",
    openMaps: "Open in Google Maps",

    ctaTitle: "Ready to do better in your exams?",
    ctaSubtitle:
      "Talk to us — we'll help you figure out the right classes for you.",
    ctaContact: "Message Us",
    ctaVisit: "Visit Us",

    footerName: "MSE Higher Educational Center",
    footerNameLocal: "උසස් අධ්‍යාපන ආයතනය",
    footerRights: "All rights reserved.",
  },

  si: {
    navAbout: "අප ගැන",
    navSubjects: "විෂයයන්",
    navTeachers: "ගුරුවරුන්",
    navGallery: "ගැලරිය",
    navContact: "සම්බන්ධ වන්න",
    navEnroll: "ලියාපදිංචි වන්න",

    heroTitle1: "විශේෂිත අධ්‍යාපනයේ",
    heroTitle2: "ප්‍රවීණයන්",
    heroSubtitle:
      "පුත්තලමේ O/L සහ A/L සිසුන් සඳහා ගුණාත්මක පන්ති. අපි අවධාරණය කරන්නේ සැබෑ අවබෝධය මිස විභාග කටපාඩම නොවේ.",
    heroEnroll: "ලියාපදිංචි වන්න",
    heroSubjects: "විෂයයන් බලන්න",

    aboutLabel: "අප ගැන",
    aboutTitle: "පුත්තලමේ සිසුන්ට සැබෑ අවබෝධයක් ගොඩනැංවීමට උදව් කරමු.",
    aboutP1:
      "MSE උසස් අධ්‍යාපන ආයතනය ගුණාත්මක අධ්‍යාපනයට කැපවූ ටියුෂන් සහ ඉගෙනුම් මධ්‍යස්ථානයකි. අපි G.C.E. සාමාන්‍ය පෙළ සහ උසස් පෙළ විෂයයන් පුළුල් පරාසයක ආවරණය කරමු.",
    aboutP2:
      "අපේ ගුරුවරුන් ඔබව විභාගවලට පමණක් සූදානම් කරන්නේ නැහැ — ඔබ සමඟ රැඳෙන දැනුමක් සහ විශ්වාසයක් ගොඩනැංවීමට උදව් කරයි.",

    subjectsLabel: "අපි ඉගැන්වන දේ",
    subjectsTitle: "O/L සහ A/L විෂයයන්.",
    subjectsSubtitle:
      "ගණිතයේ සිට වාණිජ්‍ය දක්වා — ජාතික විෂය නිර්දේශය හොඳින් දන්නා විෂය විශේෂඥයින් විසින් ඉගැන්වීම.",
    olTitle: "G.C.E. සාමාන්‍ය පෙළ",
    alTitle: "G.C.E. උසස් පෙළ",

    mathematics: "ගණිතය",
    science: "විද්‍යාව",
    english: "ඉංග්‍රීසි",
    sinhala: "සිංහල",
    buddhism: "බුද්ධ ධර්මය",
    history: "ඉතිහාසය",
    commerce: "වාණිජ්‍ය",
    ict: "ICT",
    geography: "භූගෝල විද්‍යාව",
    media: "මාධ්‍ය",
    korean: "කොරියන්",
    buddhistCiv: "බෞද්ධ සභ්‍යත්වය",
    politicalScience: "දේශපාලන විද්‍යාව",

    scienceStream: "විද්‍යා අංශය",
    commerceStream: "වාණිජ අංශය",
    technologyStream: "තාක්ෂණ අංශය",
    artsStream: "කලා අංශය",

    combinedMaths: "සංයුක්ත ගණිතය",
    physics: "භෞතික විද්‍යාව",
    chemistry: "රසායන විද්‍යාව",
    biology: "ජීව විද්‍යාව",
    accounting: "ගිණුම්කරණය",
    economics: "ආර්ථික විද්‍යාව",
    businessStudies: "ව්‍යාපාර අධ්‍යයනය",
    engineeringTech: "ඉංජිනේරු තාක්ෂණය",
    scienceForTech: "තාක්ෂණයට විද්‍යාව",
    logic: "තර්ක ශාස්ත්‍රය",

    teachersLabel: "අපේ ගුරුවරුන්",
    teachersTitle: "MSE පිටුපස සිටින අය හමුවන්න.",
    teachersSubtitle:
      "සෑම සිසුවෙකුගේම සාර්ථකත්වය සඳහා දැනුම, කැපවීම සහ සැබෑ කැපකිරීමක් ගෙන එන පළපුරුදු ගුරුවරුන්.",

    galleryLabel: "අපේ ඉඩම",
    galleryTitle: "ඉගෙනීම සිදුවන තැන.",
    gallerySubtitle: "අවධානයෙන් යුතු අධ්‍යයනය සඳහා නිර්මාණය කරන ලද කැපවූ ඉගෙනුම් ශාලා 6ක්.",
    galleryMainHall: "ප්‍රධාන ශාලාව — අපගේ විශාලතම ඉගෙනුම් අවකාශය",
    galleryBuilding: "පුත්තලමේ අපගේ මධ්‍යස්ථානය",
    galleryClassroom: "අපගේ ඉගෙනුම් ශාලා 6න් එකක්",

    contactLabel: "අපව සොයන්න",
    contactTitle: "ඔබම බලන්න එන්න.",
    contactSubtitle:
      "පුත්තලමේ අපේ මධ්‍යස්ථානයට එන්න, අපට call කරන්න, හෝ Facebook හරහා පණිවිඩයක් යවන්න.",
    locationTitle: "අපි සිටින තැන",
    addressLabel: "ලිපිනය",
    addressLine1: "අංක 08, 15 වන පටුමග,",
    addressLine2: "ගුඩ්ස් ශෙඩ් පාර, පුත්තලම,",
    addressLine3: "ශ්‍රී ලංකාව",
    phoneLabel: "දුරකථන",
    scheduleLabel: "පන්ති වේලාවන්",
    scheduleLine1: "සතියේ දින සහ සති අන්ත",
    scheduleLine2: "උදේ සහ සවස සැසි",
    facebookLabel: "Facebook",
    openMaps: "Google Maps හි බලන්න",

    ctaTitle: "ඔබේ විභාගවලදී වඩා හොඳින් කිරීමට සූදානම්ද?",
    ctaSubtitle: "අප සමඟ කතා කරන්න — නිවැරදි පන්ති තෝරා ගැනීමට උදව් කරමු.",
    ctaContact: "පණිවිඩයක් යවන්න",
    ctaVisit: "පැමිණෙන්න",

    footerName: "MSE උසස් අධ්‍යාපන ආයතනය",
    footerNameLocal: "උසස් අධ්‍යාපන ආයතනය",
    footerRights: "සියලු හිමිකම් ඇවිරිණි.",
  },

  ta: {
    navAbout: "எங்களைப் பற்றி",
    navSubjects: "பாடங்கள்",
    navTeachers: "ஆசிரியர்கள்",
    navGallery: "கேலரி",
    navContact: "தொடர்பு",
    navEnroll: "பதிவு செய்க",

    heroTitle1: "சிறப்புக் கல்வியில்",
    heroTitle2: "திறமையாளர்கள்",
    heroSubtitle:
      "புத்தளத்தில் O/L மற்றும் A/L மாணவர்களுக்கான தரமான வகுப்புகள். தேர்வுக்கு மட்டும் அல்ல — உண்மையான புரிதலுக்கு.",
    heroEnroll: "பதிவு செய்க",
    heroSubjects: "பாடங்களைக் காண்க",

    aboutLabel: "எங்களைப் பற்றி",
    aboutTitle:
      "புத்தளத்தில் மாணவர்களுக்கு உண்மையான புரிதலை கட்டமைக்க உதவுகிறோம்.",
    aboutP1:
      "MSE உயர்கல்வி நிலையம் தரமான கல்விக்கு அர்ப்பணிக்கப்பட்ட ஒரு கற்றல் மையமாகும். G.C.E. சாதாரண தர மற்றும் உயர் தர பாடங்களை பரந்த அளவில் கற்பிக்கிறோம்.",
    aboutP2:
      "எங்கள் ஆசிரியர்கள் தேர்வுகளுக்கு மட்டும் தயார் செய்வதில்லை — உங்களுடன் நிலைத்திருக்கும் அறிவையும் நம்பிக்கையையும் வளர்க்க உதவுகிறார்கள்.",

    subjectsLabel: "நாங்கள் கற்பிப்பவை",
    subjectsTitle: "O/L மற்றும் A/L பாடங்கள்.",
    subjectsSubtitle:
      "கணிதம் முதல் வணிகவியல் வரை — தேசிய பாடத்திட்டத்தை நன்கு அறிந்த பாட நிபுணர்களால் கற்பிக்கப்படுகிறது.",
    olTitle: "G.C.E. சாதாரண தரம்",
    alTitle: "G.C.E. உயர் தரம்",

    mathematics: "கணிதம்",
    science: "அறிவியல்",
    english: "ஆங்கிலம்",
    sinhala: "சிங்களம்",
    buddhism: "பௌத்தம்",
    history: "வரலாறு",
    commerce: "வணிகவியல்",
    ict: "ICT",
    geography: "புவியியல்",
    media: "ஊடகவியல்",
    korean: "கொரியன்",
    buddhistCiv: "பௌத்த நாகரிகம்",
    politicalScience: "அரசியல் அறிவியல்",

    scienceStream: "அறிவியல் பிரிவு",
    commerceStream: "வணிகவியல் பிரிவு",
    technologyStream: "தொழில்நுட்ப பிரிவு",
    artsStream: "கலைப் பிரிவு",

    combinedMaths: "கூட்டு கணிதம்",
    physics: "இயற்பியல்",
    chemistry: "வேதியியல்",
    biology: "உயிரியல்",
    accounting: "கணக்கியல்",
    economics: "பொருளியல்",
    businessStudies: "வணிகக் கல்வி",
    engineeringTech: "பொறியியல் தொழில்நுட்பம்",
    scienceForTech: "தொழில்நுட்பத்திற்கான அறிவியல்",
    logic: "தர்க்கவியல்",

    teachersLabel: "எங்கள் ஆசிரியர்கள்",
    teachersTitle: "MSE-ன் பின்னால் உள்ளவர்களை சந்தியுங்கள்.",
    teachersSubtitle:
      "ஒவ்வொரு மாணவரின் வெற்றிக்கும் அறிவு, அர்ப்பணிப்பு மற்றும் உண்மையான கடமையுணர்வை கொண்டுவரும் அனுபவமிக்க ஆசிரியர்கள்.",

    galleryLabel: "எங்கள் இடம்",
    galleryTitle: "கற்றல் நடக்கும் இடம்.",
    gallerySubtitle: "கவனமான படிப்புக்காக வடிவமைக்கப்பட்ட 6 கற்றல் மண்டபங்கள்.",
    galleryMainHall: "முக்கிய மண்டபம் — எங்களின் மிகப்பெரிய கற்றல் இடம்",
    galleryBuilding: "புத்தளத்தில் எங்கள் மையம்",
    galleryClassroom: "எங்கள் 6 கற்றல் மண்டபங்களில் ஒன்று",

    contactLabel: "எங்களைக் கண்டறியுங்கள்",
    contactTitle: "நீங்களே வந்து பாருங்கள்.",
    contactSubtitle:
      "புத்தளத்தில் எங்கள் மையத்திற்கு வாருங்கள், எங்களை அழையுங்கள் அல்லது Facebook இல் செய்தி அனுப்புங்கள்.",
    locationTitle: "நாங்கள் எங்கே இருக்கிறோம்",
    addressLabel: "முகவரி",
    addressLine1: "எண் 08, 15வது ஒழுங்கை,",
    addressLine2: "கூட்ஸ் ஷெட் வீதி, புத்தளம்,",
    addressLine3: "இலங்கை",
    phoneLabel: "தொலைபேசி",
    scheduleLabel: "வகுப்பு நேரம்",
    scheduleLine1: "வாரநாட்கள் & வார இறுதி",
    scheduleLine2: "காலை & மாலை அமர்வுகள்",
    facebookLabel: "Facebook",
    openMaps: "Google Maps இல் திறக்க",

    ctaTitle: "உங்கள் தேர்வுகளில் சிறப்பாக செய்ய தயாரா?",
    ctaSubtitle:
      "எங்களிடம் பேசுங்கள் — சரியான வகுப்புகளை தேர்வு செய்ய உதவுவோம்.",
    ctaContact: "செய்தி அனுப்புக",
    ctaVisit: "வருகை தாருங்கள்",

    footerName: "MSE உயர்கல்வி நிலையம்",
    footerNameLocal: "உயர்கல்வி நிலையம்",
    footerRights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};
