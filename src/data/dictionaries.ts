import type { Locale } from '@/lib/i18n';

export const dictionaries = {
  ru: {
    meta: {
      title: 'REVVEKA Group — Эскроу, Аудит и Due Diligence',
      description: 'Независимое сопровождение сделок, оценка рисков и финансовая верификация в Швейцарии, ЕС, России и по всему миру.',
      keywords: 'эскроу, аудит, due diligence, сопровождение сделок, REVVEKA, Швейцария',
    },
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О компании',
      contact: 'Контакты',
      requestConsultation: 'Запросить консультацию',
      confidentialInquiry: 'Конфиденциальный запрос',
    },
    hero: {
      badge: 'Независимый партнёр',
      title: 'Эскроу, аудит и due-diligence для ключевых транзакций',
      subtitle: 'REVVEKA обеспечивает независимое сопровождение сделок, оценку рисков и финансовую верификацию для компаний, инвесторов и частных клиентов в Швейцарии, ЕС, России и других юрисдикциях.',
      ctaPrimary: 'Конфиденциальный запрос',
      ctaSecondary: 'Подробнее об услугах',
    },
    proof: {
      independence: 'Независимость',
      independenceDesc: 'Полностью независимая оценка без конфликта интересов',
      confidentiality: 'Конфиденциальность',
      confidentialityDesc: 'Швейцарский стандарт защиты данных',
      global: 'Международное покрытие',
      globalDesc: 'Офисы в Европе, России и Азии',
    },
    services: {
      sectionLabel: 'Наши услуги',
      title: 'Комплексное сопровождение сделок',
      subtitle: 'От подготовки до финального расчёта — полный контроль на каждом этапе',
      viewAll: 'Все услуги',
      learnMore: 'Подробнее',
      list: [
        {
          id: 'escrow',
          title: 'Эскроу и контроль расчётов',
          shortDesc: 'Безопасное проведение трансграничных сделок с независимым контролем и верификацией.',
          fullDesc: 'Мы выступаем независимым агентом при проведении сложных трансграничных транзакций. Контролируем соблюдение условий сделки, верифицируем документы и обеспечиваем безопасное проведение расчётов.',
          features: [
            'Независимое хранение средств',
            'Контроль выполнения условий',
            'Верификация документов',
            'Координация сторон сделки',
          ],
        },
        {
          id: 'audit',
          title: 'Готовность к аудиту',
          shortDesc: 'Подготовленные data rooms, сверенные потоки и прозрачная отчётность для стейкхолдеров.',
          fullDesc: 'Помогаем компаниям подготовиться к внешнему аудиту: структурируем документацию, проверяем финансовые потоки, готовим data room и обеспечиваем соответствие требованиям регуляторов.',
          features: [
            'Подготовка data room',
            'Сверка финансовых потоков',
            'Структурирование отчётности',
            'Соответствие требованиям регуляторов',
          ],
        },
        {
          id: 'duediligence',
          title: 'Поддержка due diligence',
          shortDesc: 'Оценка рисков и проверка фактов для инвесторов, корпораций и частных клиентов.',
          fullDesc: 'Проводим комплексную проверку контрагентов, активов и сделок. Выявляем риски, проверяем репутационную историю и даём независимую оценку для принятия инвестиционных решений.',
          features: [
            'Проверка контрагентов',
            'Анализ активов',
            'Репутационный анализ',
            'Оценка рисков',
          ],
        },
      ],
    },
    process: {
      title: 'Как мы работаем',
      subtitle: 'Прозрачный процесс от первого контакта до завершения сделки',
      steps: [
        {
          number: '01',
          title: 'Первичная консультация',
          desc: 'Обсуждаем параметры сделки, определяем объём работ и требования сторон',
        },
        {
          number: '02',
          title: 'Анализ и планирование',
          desc: 'Проводим предварительную оценку, формируем план работ и согласовываем условия',
        },
        {
          number: '03',
          title: 'Реализация',
          desc: 'Выполняем проверки, контролируем процессы, координируем стороны сделки',
        },
        {
          number: '04',
          title: 'Отчётность и завершение',
          desc: 'Предоставляем детальный отчёт, сопровождаем финальные расчёты',
        },
      ],
    },
    locations: {
      sectionLabel: 'География',
      title: 'Международное присутствие',
      subtitle: 'Ключевые офисы и представительства для оперативного сопровождения сделок',
      offices: [
        {
          city: 'Женева',
          country: 'Швейцария',
          type: 'Головной офис',
          description: 'Центр управления и стратегического планирования. Координация международных проектов.',
          isHQ: true,
        },
        {
          city: 'Москва',
          country: 'Россия',
          type: 'Консультационный центр',
          description: 'Экспертиза по сделкам с участием российских контрагентов и активов.',
          isHQ: false,
        },
        {
          city: 'Сочи',
          country: 'Россия',
          type: 'Частные клиенты',
          description: 'Обслуживание частных клиентов и семейных офисов в регионе.',
          isHQ: false,
        },
        {
          city: 'Пекин',
          country: 'Китай',
          type: 'Азиатские транзакции',
          description: 'Сопровождение сделок между Азией и Европой. Понимание локальной специфики.',
          isHQ: false,
        },
        {
          city: 'Гуанчжоу',
          country: 'Китай',
          type: 'Южный Китай',
          description: 'Покрытие производственного и торгового хаба Южного Китая.',
          isHQ: false,
        },
      ],
    },
    figures: {
      sectionLabel: 'Ключевые показатели',
      title: 'REVVEKA в цифрах',
      stats: [
        { value: '>35', label: 'Сотрудников' },
        { value: 'CHF 3.2M', label: 'Оборот 2024' },
        { value: '2014', label: 'Год основания' },
        { value: '5', label: 'Офисов' },
      ],
    },
    ownership: {
      title: 'Структура владения',
      subtitle: 'Прозрачная структура собственности компании',
      owners: [
        { name: 'Tim Revveka', role: 'Основатель', percentage: 10 },
        { name: 'Sofia Rebeka', role: 'Партнёр', percentage: 45 },
        { name: 'Evgenii Rebeka', role: 'Партнёр', percentage: 45 },
      ],
    },
    partners: {
      sectionLabel: 'Наши партнёры',
      title: 'С кем мы работаем',
      subtitle: 'Контрагенты и консультанты, с которыми мы сотрудничаем',
      categories: [
        'Международные банки',
        'Семейные офисы',
        'Фонды private equity',
        'Юридические фирмы',
        'Аудиторские компании',
        'Консультанты HNWI',
        'Управляющие активами',
        'Федерация еврейских общин России',
        'World Jewish Congress',
        'American Jewish Committee',
        'European Jewish Congress',
        'Guangzhou Retail Association',
      ],
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          q: 'Какова минимальная сумма сделки для работы с REVVEKA?',
          a: 'Мы работаем со сделками от CHF 500,000. Для комплексных проектов условия обсуждаются индивидуально.',
        },
        {
          q: 'Как обеспечивается конфиденциальность?',
          a: 'Мы следуем швейцарским стандартам защиты данных. Все коммуникации шифруются, доступ к информации строго ограничен.',
        },
        {
          q: 'В каких юрисдикциях вы работаете?',
          a: 'Основные регионы: Швейцария, ЕС, Россия, Китай. При необходимости привлекаем локальных партнёров в других юрисдикциях.',
        },
        {
          q: 'Сколько времени занимает типичный проект?',
          a: 'Сроки зависят от сложности: от 2-3 недель для базового due diligence до нескольких месяцев для крупных транзакций.',
        },
        {
          q: 'Какие документы нужны для начала работы?',
          a: 'Для первичной консультации достаточно описания сделки. Детальный перечень документов формируется после анализа.',
        },
        {
          q: 'Работаете ли вы с частными лицами?',
          a: 'Да, мы обслуживаем как корпоративных клиентов, так и частных лиц, включая HNWI и семейные офисы.',
        },
      ],
    },
    inquiry: {
      sectionLabel: 'Конфиденциальный запрос',
      title: 'Опишите параметры вашей сделки',
      subtitle: 'Мы свяжемся с вами в течение одного рабочего дня по защищённому каналу связи.',
      form: {
        name: 'Ваше имя',
        company: 'Компания (опционально)',
        email: 'Email',
        phone: 'Телефон (опционально)',
        topic: 'Сфера сделки / юрисдикция',
        details: 'Опишите запрос',
        consent: 'Я согласен с политикой конфиденциальности и обработкой персональных данных',
        submit: 'Отправить запрос',
        sending: 'Отправка...',
        success: 'Запрос отправлен. Мы свяжемся с вами в ближайшее время.',
        error: 'Произошла ошибка. Попробуйте ещё раз или напишите нам напрямую.',
      },
    },
    footer: {
      tagline: 'Независимое сопровождение сделок',
      company: 'REVVEKA Group GmbH',
      location: 'Швейцария · Женева',
      links: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        contact: 'Контакты',
      },
      copyright: '© {year} REVVEKA Group. Все права защищены.',
    },
    about: {
      heroTitle: 'О компании REVVEKA Group',
      heroSubtitle: 'Независимый швейцарский партнёр для сложных международных сделок',
      mission: {
        title: 'Наша миссия',
        text: 'Обеспечивать независимый, прозрачный и профессиональный контроль над международными транзакциями, помогая клиентам принимать взвешенные решения на основе проверенных фактов.',
      },
      values: {
        title: 'Наши принципы',
        list: [
          {
            title: 'Независимость',
            desc: 'Мы не связаны с банками, фондами или корпорациями. Наша оценка всегда объективна.',
          },
          {
            title: 'Конфиденциальность',
            desc: 'Швейцарские стандарты защиты информации. Каждый проект — под строгим NDA.',
          },
          {
            title: 'Экспертиза',
            desc: 'Команда с опытом в инвестиционном банкинге, аудите и международном праве.',
          },
          {
            title: 'Ответственность',
            desc: 'Мы отвечаем за качество работы и соблюдение сроков перед каждым клиентом.',
          },
        ],
      },
      history: {
        title: 'История компании',
        text: 'REVVEKA Group основана в 2014 году в Женеве с целью предоставления независимых услуг по сопровождению сделок. За годы работы мы выросли в международную компанию с присутствием в пяти городах и командой более 35 специалистов.',
      },
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы обсудить ваш проект или ответить на вопросы',
      methods: {
        email: 'Email',
        address: 'Адрес',
      },
    },
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление',
    },
    terms: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление',
    },
  },
  en: {
    meta: {
      title: 'REVVEKA Group — Escrow, Audit & Due Diligence',
      description: 'Independent transaction support, risk assessment and financial verification across Switzerland, the EU, Russia and global jurisdictions.',
      keywords: 'escrow, audit, due diligence, transaction support, REVVEKA, Switzerland',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      requestConsultation: 'Request Consultation',
      confidentialInquiry: 'Confidential Inquiry',
    },
    hero: {
      badge: 'Independent Partner',
      title: 'Escrow, audit & due diligence for decisive transactions',
      subtitle: 'REVVEKA provides independent transaction support, risk assessment and financial verification for companies, investors and private clients across Switzerland, the EU, Russia and global jurisdictions.',
      ctaPrimary: 'Confidential Inquiry',
      ctaSecondary: 'Learn More',
    },
    proof: {
      independence: 'Independence',
      independenceDesc: 'Fully independent assessment without conflicts of interest',
      confidentiality: 'Confidentiality',
      confidentialityDesc: 'Swiss standard of data protection',
      global: 'Global Coverage',
      globalDesc: 'Offices in Europe, Russia and Asia',
    },
    services: {
      sectionLabel: 'Our Services',
      title: 'Comprehensive Transaction Support',
      subtitle: 'From preparation to final settlement — full control at every stage',
      viewAll: 'All Services',
      learnMore: 'Learn More',
      list: [
        {
          id: 'escrow',
          title: 'Escrow & Settlement Control',
          shortDesc: 'Secure handling of cross-border deals with independent oversight and verification.',
          fullDesc: 'We act as an independent agent in complex cross-border transactions. We monitor compliance with deal terms, verify documents and ensure secure settlement execution.',
          features: [
            'Independent fund custody',
            'Condition compliance monitoring',
            'Document verification',
            'Party coordination',
          ],
        },
        {
          id: 'audit',
          title: 'Audit Readiness',
          shortDesc: 'Clean data rooms, reconciled flows, and transparent reporting for stakeholders.',
          fullDesc: 'We help companies prepare for external audits: structuring documentation, verifying financial flows, preparing data rooms and ensuring regulatory compliance.',
          features: [
            'Data room preparation',
            'Financial flow reconciliation',
            'Reporting structure',
            'Regulatory compliance',
          ],
        },
        {
          id: 'duediligence',
          title: 'Due Diligence Support',
          shortDesc: 'Risk assessment and factual validation for investors, corporates, and private clients.',
          fullDesc: 'We conduct comprehensive verification of counterparties, assets and transactions. We identify risks, check reputational history and provide independent assessment for investment decisions.',
          features: [
            'Counterparty verification',
            'Asset analysis',
            'Reputational analysis',
            'Risk assessment',
          ],
        },
      ],
    },
    process: {
      title: 'How We Work',
      subtitle: 'Transparent process from first contact to deal completion',
      steps: [
        {
          number: '01',
          title: 'Initial Consultation',
          desc: 'We discuss deal parameters, define scope of work and party requirements',
        },
        {
          number: '02',
          title: 'Analysis & Planning',
          desc: 'We conduct preliminary assessment, form work plan and agree on terms',
        },
        {
          number: '03',
          title: 'Execution',
          desc: 'We perform checks, monitor processes, coordinate deal parties',
        },
        {
          number: '04',
          title: 'Reporting & Completion',
          desc: 'We provide detailed report, support final settlements',
        },
      ],
    },
    locations: {
      sectionLabel: 'Geography',
      title: 'International Presence',
      subtitle: 'Key offices and representations for operational transaction support',
      offices: [
        {
          city: 'Geneva',
          country: 'Switzerland',
          type: 'Headquarters',
          description: 'Management and strategic planning center. International project coordination.',
          isHQ: true,
        },
        {
          city: 'Moscow',
          country: 'Russia',
          type: 'Advisory Desk',
          description: 'Expertise on transactions involving Russian counterparties and assets.',
          isHQ: false,
        },
        {
          city: 'Sochi',
          country: 'Russia',
          type: 'Private Clients',
          description: 'Service for private clients and family offices in the region.',
          isHQ: false,
        },
        {
          city: 'Beijing',
          country: 'China',
          type: 'Asia Transactions',
          description: 'Support for deals between Asia and Europe. Understanding of local specifics.',
          isHQ: false,
        },
        {
          city: 'Guangzhou',
          country: 'China',
          type: 'South China',
          description: 'Coverage of the manufacturing and trading hub of South China.',
          isHQ: false,
        },
      ],
    },
    figures: {
      sectionLabel: 'Key Figures',
      title: 'REVVEKA in Numbers',
      stats: [
        { value: '>35', label: 'Employees' },
        { value: 'CHF 3.2M', label: 'Turnover 2024' },
        { value: '2014', label: 'Founded' },
        { value: '5', label: 'Offices' },
      ],
    },
    ownership: {
      title: 'Ownership Structure',
      subtitle: 'Transparent company ownership structure',
      owners: [
        { name: 'Tim Revveka', role: 'Founder', percentage: 10 },
        { name: 'Sofia Rebeka', role: 'Partner', percentage: 45 },
        { name: 'Evgenii Rebeka', role: 'Partner', percentage: 45 },
      ],
    },
    partners: {
      sectionLabel: 'Our Partners',
      title: 'Who We Work With',
      subtitle: 'Counterparties and advisors we collaborate with',
      categories: [
        'International Banks',
        'Family Offices',
        'Private Equity Funds',
        'Law Firms',
        'Audit Companies',
        'HNWI Advisors',
        'Asset Managers',
        'Federation of Jewish Communities of Russia',
        'World Jewish Congress',
        'American Jewish Committee',
        'European Jewish Congress',
        'Guangzhou Retail Association',
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is the minimum transaction size to work with REVVEKA?',
          a: 'We work with transactions from CHF 500,000. For complex projects, terms are discussed individually.',
        },
        {
          q: 'How is confidentiality ensured?',
          a: 'We follow Swiss data protection standards. All communications are encrypted, access to information is strictly limited.',
        },
        {
          q: 'In which jurisdictions do you operate?',
          a: 'Main regions: Switzerland, EU, Russia, China. When needed, we engage local partners in other jurisdictions.',
        },
        {
          q: 'How long does a typical project take?',
          a: 'Timelines depend on complexity: from 2-3 weeks for basic due diligence to several months for large transactions.',
        },
        {
          q: 'What documents are needed to start?',
          a: 'For initial consultation, a deal description is sufficient. Detailed document list is formed after analysis.',
        },
        {
          q: 'Do you work with individuals?',
          a: 'Yes, we serve both corporate clients and individuals, including HNWI and family offices.',
        },
      ],
    },
    inquiry: {
      sectionLabel: 'Confidential Inquiry',
      title: 'Describe your transaction parameters',
      subtitle: 'We will contact you within one business day via secure communication channel.',
      form: {
        name: 'Your name',
        company: 'Company (optional)',
        email: 'Email',
        phone: 'Phone (optional)',
        topic: 'Transaction scope / jurisdiction',
        details: 'Describe your request',
        consent: 'I agree to the privacy policy and personal data processing',
        submit: 'Submit Request',
        sending: 'Sending...',
        success: 'Request sent. We will contact you shortly.',
        error: 'An error occurred. Please try again or contact us directly.',
      },
    },
    footer: {
      tagline: 'Independent Transaction Support',
      company: 'REVVEKA Group GmbH',
      location: 'Switzerland · Geneva',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        contact: 'Contact',
      },
      copyright: '© {year} REVVEKA Group. All rights reserved.',
    },
    about: {
      heroTitle: 'About REVVEKA Group',
      heroSubtitle: 'Independent Swiss partner for complex international transactions',
      mission: {
        title: 'Our Mission',
        text: 'To provide independent, transparent and professional control over international transactions, helping clients make informed decisions based on verified facts.',
      },
      values: {
        title: 'Our Principles',
        list: [
          {
            title: 'Independence',
            desc: 'We are not affiliated with banks, funds or corporations. Our assessment is always objective.',
          },
          {
            title: 'Confidentiality',
            desc: 'Swiss standards of information protection. Every project is under strict NDA.',
          },
          {
            title: 'Expertise',
            desc: 'Team with experience in investment banking, audit and international law.',
          },
          {
            title: 'Responsibility',
            desc: 'We are accountable for work quality and deadline compliance to every client.',
          },
        ],
      },
      history: {
        title: 'Company History',
        text: 'REVVEKA Group was founded in 2014 in Geneva with the goal of providing independent transaction support services. Over the years, we have grown into an international company with presence in five cities and a team of over 35 specialists.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to discuss your project or answer questions',
      methods: {
        email: 'Email',
        address: 'Address',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
    },
    terms: {
      title: 'Terms of Use',
      lastUpdated: 'Last updated',
    },
  },
};

// Define dictionary type based on structure (not literal values)
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    requestConsultation: string;
    confidentialInquiry: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  proof: {
    independence: string;
    independenceDesc: string;
    confidentiality: string;
    confidentialityDesc: string;
    global: string;
    globalDesc: string;
  };
  services: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
    list: Array<{
      id: string;
      title: string;
      shortDesc: string;
      fullDesc: string;
      features: string[];
    }>;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
  };
  locations: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    offices: Array<{
      city: string;
      country: string;
      type: string;
      description: string;
      isHQ: boolean;
    }>;
  };
  figures: {
    sectionLabel: string;
    title: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  ownership: {
    title: string;
    subtitle: string;
    owners: Array<{
      name: string;
      role: string;
      percentage: number;
    }>;
  };
  partners: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    categories: string[];
  };
  faq: {
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  inquiry: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      topic: string;
      details: string;
      consent: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    company: string;
    location: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
    copyright: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    mission: {
      title: string;
      text: string;
    };
    values: {
      title: string;
      list: Array<{
        title: string;
        desc: string;
      }>;
    };
    history: {
      title: string;
      text: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    methods: {
      email: string;
      address: string;
    };
  };
  privacy: {
    title: string;
    lastUpdated: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
  };
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.ru;
}

