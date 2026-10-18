import { Translator } from '../i18n/LanguageContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  demoLink?: string;
  image?: string;
  category: string;
}

export const getProjects = (t: Translator): Project[] => [
  {
    title: 'Product Store App',
    description:
      t("Modern ürün mağazası uygulaması. JavaScript ile geliştirilmiş kullanıcı dostu e-ticaret platformu."),
    technologies: ['JavaScript', 'HTML', 'CSS', 'E-commerce'],
    link: 'https://github.com/someoxygen/product-store-app',
    category: 'Frontend'
  },
  {
    title: 'Chat App',
    description:
      t("Gerçek zamanlı mesajlaşma uygulaması. TypeScript ile geliştirilmiş modern chat platformu."),
    technologies: ['TypeScript', 'React', 'Real-time', 'WebSocket'],
    link: 'https://github.com/someoxygen/chat-app',
    category: 'Full-Stack'
  },
  {
    title: 'City Guide',
    description:
      t("Angular ve .NET Core ile geliştirilmiş şehir rehberi uygulaması. TypeScript kullanılarak modern frontend teknolojileri ile oluşturuldu."),
    technologies: ['Angular', '.NET Core', 'TypeScript', 'Bootstrap'],
    link: 'https://github.com/someoxygen/city-guide',
    category: 'Full-Stack'
  },
  {
    title: 'Messaging App',
    description:
      t("Gerçek zamanlı mesajlaşma uygulaması. Flutter ile geliştirilmiş modern mesajlaşma uygulaması."),
    technologies: ['Firebase', 'Flutter', 'Real-time', 'WebSocket'],
    link: 'https://github.com/someoxygen/messaging-app',
    category: 'Frontend'
  },
  {
    title: 'Çarşı Pazar Project',
    description:
      t("Çarşı Pazar web uygulaması projesi. C# ile geliştirilmiş modern e-ticaret ve pazar yeri platformu."),
    technologies: ['C#', '.NET', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/CarsiPazarProject',
    category: 'Full-Stack'
  },
  {
    title: 'Notefy',
    description:
      t("Modern not defteri uygulaması. Kullanıcı dostu arayüz ve güçlü backend altyapısı ile geliştirilmiş tam özellikli not alma uygulaması."),
    technologies: ['TypeScript', 'Angular', '.NET Core', 'Entity Framework'],
    link: 'https://github.com/someoxygen/Notefy',
    category: 'Full-Stack'
  },
  {
    title: 'Çarşı Pazar',
    description:
      t("Çarşı Pazar web uygulaması. C# ile geliştirilmiş modern e-ticaret ve pazar yeri platformu."),
    technologies: ['C#', '.NET', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/CarsiPazar',
    category: 'Full-Stack'
  },
  {
    title: 'Movie App',
    description:
      t("Basit film web sitesi. C# ile geliştirilmiş film bilgileri, kullanıcı yorumları ve admin paneli özellikleri."),
    technologies: ['C#', '.NET MVC', 'MSSQL', 'Bootstrap'],
    link: 'https://github.com/someoxygen/MovieApp',
    category: 'Full-Stack'
  },
  {
    title: 'Inventor Automation',
    description:
      t("Autodesk Inventor uygulama otomasyonu. C# ile geliştirilmiş CAD yazılımı entegrasyonu ve otomasyon projesi."),
    technologies: ['C#', 'Autodesk Inventor API', '.NET', 'Automation'],
    link: 'https://github.com/someoxygen/InventorAutomation',
    category: 'Backend'
  },
  {
    title: 'Phone Book App',
    description:
      t("Telefon rehberi uygulaması. C# ile geliştirilmiş kullanıcı dostu rehber yönetim sistemi."),
    technologies: ['C#', '.NET', 'MSSQL', 'Windows Forms'],
    link: 'https://github.com/someoxygen/PhoneBookApp',
    category: 'Backend'
  },
  {
    title: 'Paper.js Project',
    description:
      t("Paper.js Angular projesi. TypeScript ile geliştirilmiş interaktif çizim ve animasyon uygulaması."),
    technologies: ['TypeScript', 'Angular', 'Paper.js', 'Canvas'],
    link: 'https://github.com/someoxygen/paperjs-project',
    category: 'Frontend'
  },
  {
    title: 'Product List API',
    description:
      t("Ürün listeleme API'si. JavaScript ile geliştirilmiş RESTful API ve ürün yönetim sistemi."),
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'REST API'],
    link: 'https://github.com/someoxygen/product-list-api',
    category: 'Backend'
  },
  {
    title: 'Portfolio Website',
    description:
      t("React ve TypeScript ile geliştirilmiş modern portfolyo sitesi. Responsive tasarım ve performans odaklı yaklaşım."),
    technologies: ['React', 'TypeScript', 'Bootstrap', 'CSS3'],
    link: 'https://github.com/someoxygen/my-portfolio',
    category: 'Frontend'
  }
];
