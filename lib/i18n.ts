import { experience, projects, type Experience, type Project } from "@/lib/content";

export type Locale = "en" | "tr";

export const dictionaries = {
  en: {
    nav: ["Home", "About Me", "Projects", "Skills / Experience", "Contact"],
    getInTouch: "Get in touch",
    hero: {
      intro: "Hi, I'm",
      role: "Computer Engineer",
      description: "Building practical AI-powered and data-driven products",
      projects: "View Projects",
      cv: "Download CV",
    },
    projects: { eyebrow: "Selected Work", title: "Featured Projects", stack: "Technology Stack" },
    career: {
      eyebrow: "02 / Career",
      title: "Skills & Experience",
      description: "The technologies I work with and the experience behind the projects I build.",
      toolkit: "Engineering Toolkit",
      experience: "Selected Experience",
    },
    contact: {
      eyebrow: "Get in touch",
      line1: "Let's build",
      line2: "something",
      accent: "meaningful.",
      description: "Have an idea, a project, or an opportunity in AI, data, or software engineering? Feel free to reach out. I'm always interested in interesting problems and meaningful collaborations.",
      direct: "Direct contact",
      message: "Message",
      start: "Start a conversation",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your idea, project or opportunity...",
      send: "Send message",
      mailHint: "Opens your default email client",
      back: "Back to top ↑",
    },
  },
  tr: {
    nav: ["Ana Sayfa", "Hakkımda", "Projeler", "Yetenekler / Deneyim", "İletişim"],
    getInTouch: "İletişime geç",
    hero: {
      intro: "Merhaba, ben",
      role: "Bilgisayar Mühendisi",
      description: "Pratik, yapay zekâ ve veri odaklı ürünler geliştiriyorum",
      projects: "Projeleri İncele",
      cv: "CV'yi İndir",
    },
    projects: { eyebrow: "Seçili Çalışmalar", title: "Öne Çıkan Projeler", stack: "Teknoloji Yığını" },
    career: {
      eyebrow: "02 / Kariyer",
      title: "Yetenekler ve Deneyim",
      description: "Kullandığım teknolojiler ve geliştirdiğim projelerin arkasındaki deneyim.",
      toolkit: "Mühendislik Araçları",
      experience: "Seçili Deneyimler",
    },
    contact: {
      eyebrow: "İletişime geç",
      line1: "Birlikte",
      line2: "anlamlı bir şey",
      accent: "üretelim.",
      description: "Yapay zekâ, veri veya yazılım mühendisliği alanında bir fikriniz, projeniz ya da fırsatınız mı var? Bana ulaşabilirsiniz. İlgi çekici problemler ve anlamlı iş birlikleriyle her zaman ilgileniyorum.",
      direct: "Doğrudan iletişim",
      message: "Mesaj",
      start: "Bir görüşme başlatın",
      name: "Ad",
      namePlaceholder: "Adınız",
      email: "E-posta",
      messageLabel: "Mesaj",
      messagePlaceholder: "Fikrinizi, projenizi veya fırsatı anlatın...",
      send: "Mesaj gönder",
      mailHint: "Varsayılan e-posta uygulamanızı açar",
      back: "Başa dön ↑",
    },
  },
} as const;

const projectTr: Record<string, Partial<Project>> = {
  "traffic-enforcement": {
    subtitle: "Bitirme Projesi", award: "En İyi Proje Ödülü",
    description: "Rol tabanlı iş akışlarını, araç ve ihlal yönetimini, yönetim panellerini ve yapay zekâ destekli kanıt analizini bir araya getiren uçtan uca trafik denetim platformu.",
  },
  phoenixdf: { subtitle: "Kişisel Proje", description: "Akademik PDF'ler için belge analizi, RAG tabanlı görüşmeler, özetler, bilgi kartları, testler ve kaynak odaklı çalışma akışlarını bir araya getiren yapay zekâ destekli öğrenme alanı." },
  "taskflow-ai": { subtitle: "Kişisel Proje", description: "Karmaşık hedefleri uygulanabilir görevlere dönüştüren, öncelikler öneren, günlük planlar oluşturan ve ilerlemeyi yapılandırılmış iş akışlarıyla izleyen yapay zekâ destekli üretkenlik platformu." },
  gamescope: { subtitle: "Kişisel Proje", description: "Katalog verilerini, fiyatları, puanları, filtrelemeyi ve öneri odaklı keşfi tek deneyimde birleştiren oyun keşif ve analiz platformu." },
  portfolio: { subtitle: "Kişisel Proje", description: "Yapay zekâ, veri ve yazılım mühendisliği projelerini etkileşimli vaka çalışmalarıyla sunmak için tasarlanmış responsive kişisel portfolyo." },
};

const experienceTr: Experience[] = [
  { ...experience[0], role: "Makine Öğrenmesi ve Derin Öğrenme Stajyeri", location: "Konya, Türkiye", points: ["Python ve Scikit-learn ile veri ön işleme, özellik mühendisliği, sınıflandırma ve değerlendirme içeren ML modelleri geliştirdim.", "Kaggle veri setleriyle TensorFlow/Keras kullanarak derin öğrenme deneyleri gerçekleştirdim."] },
  { ...experience[1], role: "Başkan Yardımcısı", points: ["Teknik etkinliklerin düzenlenmesine yardımcı oldum; kulüp içi iletişim ve operasyon çalışmalarını koordine ettim."] },
  { ...experience[2], role: "İdari Sorumlu Asistanı", org: "Merkezi Derslikler, Doğu Akdeniz Üniversitesi", points: ["Üniversitenin en yoğun derslik kompleksindeki günlük operasyonları destekledim.", "Bilgisayar, projektör, ses sistemi ve konferans salonu ekipmanlarındaki teknik sorunları çözdüm."] },
];

export function getProjects(locale: Locale): Project[] {
  return locale === "tr" ? projects.map((project) => ({ ...project, ...projectTr[project.id] })) : projects;
}

export function getExperience(locale: Locale): Experience[] {
  return locale === "tr" ? experienceTr : experience;
}
