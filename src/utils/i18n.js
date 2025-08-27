export const languages = {
  en: 'English',
  sw: 'Kiswahili'
};

export const defaultLanguage = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.advantages': 'Our Advantages',
    'nav.reviews': 'Reviews',
    'nav.privacy': 'Privacy Policy',
    'nav.download': 'Download App',
    'home.hero.title': 'Get Cash Loans Instantly with Pesa Leo',
    'home.hero.subtitle': 'Quick, secure, and transparent mobile lending for Tanzania',
    'home.hero.cta': 'Download Now',
    'home.features.title': 'Why Choose Pesa Leo?',
    'home.feature1.title': 'Instant Approval',
    'home.feature1.desc': 'Get approved in minutes with our AI-powered system',
    'home.feature2.title': 'Secure & Safe',
    'home.feature2.desc': 'Bank-level security for all your transactions',
    'home.feature3.title': 'Flexible Terms',
    'home.feature3.desc': 'Choose repayment terms that work for you',
    'home.download.title': 'Download Pesa Leo Today',
    'home.download.subtitle': 'Available on Google Play Store',
    'about.title': 'About Pesa Leo',
    'about.content': 'Pesa Leo is Tanzania\'s leading mobile lending platform, providing quick and reliable cash loans to individuals and small businesses. Our mission is to make financial services accessible to everyone.',
    'advantages.title': 'Our Advantages',
    'advantage1.title': 'Quick Processing',
    'advantage1.desc': 'Loans processed within 5 minutes of application',
    'advantage2.title': 'Competitive Rates',
    'advantage2.desc': 'Fair and transparent interest rates',
    'advantage3.title': '24/7 Support',
    'advantage3.desc': 'Customer support available round the clock',
    'reviews.title': 'What Our Customers Say',
    'review1.text': 'Pesa Leo saved me when I needed emergency cash. Fast and reliable!',
    'review1.author': 'John Mwangi, Dar es Salaam',
    'review2.text': 'Simple application process and quick approval. Highly recommended!',
    'review2.author': 'Fatma Hassan, Arusha',
    'review3.text': 'Transparent terms and excellent customer service.',
    'review3.author': 'David Kimani, Mwanza',
    'privacy.title': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'language.switch': 'Switch Language'
  },
  sw: {
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu Sisi',
    'nav.advantages': 'Faida Zetu',
    'nav.reviews': 'Maoni',
    'nav.privacy': 'Sera ya Faragha',
    'nav.download': 'Pakua App',
    'home.hero.title': 'Pata Mikopo ya Pesa Papo Hapo na Pesa Leo',
    'home.hero.subtitle': 'Mikopo ya haraka, salama na uwazi kwa Tanzania',
    'home.hero.cta': 'Pakua Sasa',
    'home.features.title': 'Kwa Nini Uchague Pesa Leo?',
    'home.feature1.title': 'Idhini ya Haraka',
    'home.feature1.desc': 'Pata idhini ndani ya dakika chache na mfumo wetu wa AI',
    'home.feature2.title': 'Salama na Usalama',
    'home.feature2.desc': 'Usalama wa kiwango cha benki kwa miamala yako yote',
    'home.feature3.title': 'Masharti Rahisi',
    'home.feature3.desc': 'Chagua masharti ya malipo yanayokufaa',
    'home.download.title': 'Pakua Pesa Leo Leo',
    'home.download.subtitle': 'Inapatikana kwenye Google Play Store',
    'about.title': 'Kuhusu Pesa Leo',
    'about.content': 'Pesa Leo ni jukwaa kuu la mikopo ya simu nchini Tanzania, linapatoa mikopo ya haraka na ya kuaminika kwa watu binafsi na biashara ndogo. Dhamira yetu ni kufanya huduma za kifedha zipatikane kwa kila mtu.',
    'advantages.title': 'Faida Zetu',
    'advantage1.title': 'Uchakataji wa Haraka',
    'advantage1.desc': 'Mikopo inachakatwa ndani ya dakika 5 baada ya maombi',
    'advantage2.title': 'Viwango vya Ushindani',
    'advantage2.desc': 'Viwango vya riba vya haki na uwazi',
    'advantage3.title': 'Msaada wa 24/7',
    'advantage3.desc': 'Msaada wa wateja unapatikana mchana na usiku',
    'reviews.title': 'Wateja Wetu Wanasema Nini',
    'review1.text': 'Pesa Leo ilinisaidia wakati nilihitaji pesa za dharura. Haraka na ya kuaminika!',
    'review1.author': 'John Mwangi, Dar es Salaam',
    'review2.text': 'Mchakato rahisi wa maombi na idhini ya haraka. Nashauri sana!',
    'review2.author': 'Fatma Hassan, Arusha',
    'review3.text': 'Masharti ya uwazi na huduma bora ya wateja.',
    'review3.author': 'David Kimani, Mwanza',
    'privacy.title': 'Sera ya Faragha',
    'footer.rights': 'Haki zote zimehifadhiwa.',
    'language.switch': 'Badilisha Lugha'
  }
};

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLanguage;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLanguage][key] || key;
  };
}

export function getRouteFromUrl(url) {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts.length === 0) return '/';
  if (parts[0] in languages) {
    return parts.length > 1 ? '/' + parts.slice(1).join('/') : '/';
  }
  return pathname;
}

export function localizeUrl(url, lang) {
  if (lang === defaultLanguage) {
    return url === '/' ? '/' : url;
  }
  return `/${lang}${url === '/' ? '' : url}`;
}