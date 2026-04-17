export const cvData = {
  name: 'Ronald Niño',
  role: 'Cloud & DevOps Engineer',
  tagline: '15+ años de experiencia en AWS y Java',
  summary:
    'Ingeniero de sistemas especializado en infraestructura cloud AWS y automatización DevOps. ' +
    'Transicionando activamente hacia roles Cloud/DevOps Engineer en el mercado tecnológico español, ' +
    'combinando una sólida base en Java y arquitecturas multi-cuenta con herramientas modernas ' +
    'de orquestación de contenedores e infraestructura como código.',
  available: true,
  location: 'España 🇪🇸',
  contact: {
    email: 'ronaldnino.io@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ronaldnino/',
    github: 'https://github.com/ronaldnino',
    whatsapp: 'https://wa.me/584164787740',
    blog: 'https://ronaldnino.github.io/blog/',
  },

  terminal: [
    { key: 'nombre',        val: '"Ronald Niño"',              type: 'str' },
    { key: 'rol',           val: '"Cloud & DevOps Engineer"',  type: 'str' },
    { key: 'experiencia',   val: '15',                         type: 'num', comment: '# años' },
    { key: 'ubicación',     val: '"España 🇪🇸"',               type: 'str' },
    { key: 'empresa_actual',val: '"NW Consulting Services"',   type: 'str' },
    { key: '---',           val: '',                           type: 'blank' },
    { key: 'stack',         val: '',                           type: 'section' },
    { key: '  cloud',       val: '["AWS", "Multi-Account"]',   type: 'arr' },
    { key: '  containers',  val: '["Docker", "Kubernetes"]',   type: 'arr' },
    { key: '  iac',         val: '["Terraform"]',              type: 'arr' },
    { key: '  cicd',        val: '["GitHub Actions"]',         type: 'arr' },
    { key: '  languages',   val: '["Java", "Kotlin"]',         type: 'arr' },
    { key: '---',           val: '',                           type: 'blank' },
    { key: 'disponible',    val: 'true',                       type: 'bool' },
  ],

  skills: [
    {
      icon: '☁️',
      title: 'Amazon Web Services',
      tags: ['EC2','S3','RDS','ECS','Lambda','CloudWatch','IAM','VPC','Route 53','Organizations','Control Tower','WAF','KMS','Secrets Manager','CloudTrail','API Gateway','CloudFront','Elastic Beanstalk'],
    },
    {
      icon: '🐳',
      title: 'Contenedores & Orquestación',
      tags: ['Docker','Kubernetes','Amazon ECR','Amazon ECS','Helm'],
    },
    {
      icon: '⚙️',
      title: 'IaC & CI/CD',
      tags: ['Terraform','GitHub Actions','GitLab Pipelines','Jenkins','Bitbucket Pipelines','AWS CodePipeline','AWS CodeDeploy','AWS SAM'],
    },
    {
      icon: '💻',
      title: 'Lenguajes & Frameworks',
      tags: ['Java','Kotlin','Spring Boot','Spring Framework','Python','JavaScript','TypeScript','Groovy','Vue.js','Angular'],
    },
    {
      icon: '🗄️',
      title: 'Bases de Datos',
      tags: ['Amazon RDS','DynamoDB','MongoDB','PostgreSQL','Redshift'],
    },
    {
      icon: '🔒',
      title: 'Seguridad & Gobernanza',
      tags: ['AWS IAM','Security Groups','EBS Encryption','Multi-AZ','Backup Policies','AWS WAF','Cognito','AWS KMS'],
    },
    {
      icon: '🛠️',
      title: 'Sistemas & Herramientas',
      tags: ['GNU/Linux','macOS','Git','Subversion','VS Code','Scrum','Kanban'],
    },
    {
      icon: '📈',
      title: 'Gestión Multi-Cuenta',
      tags: ['AWS Organizations','Control Tower','CloudWatch','Auto Scaling','Well-Architected','Presupuestos públicos'],
    },
  ],

  experience: [
    {
      period: '2023 – Presente',
      company: 'NW Consulting Services',
      role: 'Systems / Cloud Engineer',
      desc: 'Gestión de infraestructura AWS en entornos multi-cuenta para clientes de sectores críticos: banca (Banco Cathay), aviación (COCESNA), utilities (AyA) e industria. Lideré la preparación de oferta técnica completa para licitación pública UNAH (59 requisitos técnicos), incluyendo arquitectura, planes de soporte, monitoreo y diferenciación competitiva. Conducción de sesiones de cierre operacional semanal con hallazgos críticos de seguridad.',
      badges: ['AWS Multi-Account','Security Remediation','RDS / EBS','CloudWatch','IAM','Licitación Pública'],
    },
    {
      period: 'Jul 2021 – Jul 2023',
      company: 'Escala 24x7 Inc.',
      role: 'Ingeniero de Operaciones',
      desc: 'Soporte de primer nivel y operaciones sobre componentes AWS (EC2, EBS, S3, ALB, VPC, Lambda, EventBridge, Elastic Beanstalk, OpsWorks, Route 53, CloudWatch) para carteras de clientes enterprise en Latinoamérica. Gestión de incidencias en producción con SLA exigente.',
      badges: ['EC2','Lambda','VPN Site-to-Site','Elastic Beanstalk','CloudTrail'],
    },
    {
      period: 'Jul 2020 – Jul 2021',
      company: 'Escala 24x7 Inc.',
      role: 'Desarrollador JavaScript — Plataforma Orbis',
      desc: 'Diseño, desarrollo e implementación de plataforma serverless de automatización (encendido/apagado programado de EC2 y RDS) para más de 300 clientes. Stack: Vue.js, Vuetify, API Gateway, DynamoDB, Lambda, Step Functions, SAM, Cognito.',
      badges: ['Vue.js','AWS Lambda','DynamoDB','Step Functions','Cognito','SAM'],
    },
    {
      period: 'Ago 2018 – Jul 2020',
      company: 'Freelancer',
      role: 'Desarrollador Full Stack',
      desc: 'Desarrollo de plataforma colombiana de gestión de remesas en línea para más de 500 clientes. Backend: Spring Boot (Java). Frontend: Angular. Integración con APIs de pago y servicios externos.',
      badges: ['Spring Boot','Angular','Java','REST API'],
    },
    {
      period: 'Jun 2017 – Jul 2018',
      company: 'Matrix CPM Solutions',
      role: 'Desarrollador Java — Pabis Retail',
      desc: 'Componente ETL de integración de datos desde múltiples orígenes hacia data warehouse. Pipeline de datos para cadenas retail en México usando Pentaho, Selenium, JSoup y Amazon EC2.',
      badges: ['Java','Python','Pentaho','Amazon EC2','Spring Boot'],
    },
    {
      period: 'Jun 2010 – Feb 2015',
      company: 'Imolko C.A.',
      role: 'Desarrollador Java & JavaScript — Plataforma Zenkiu',
      desc: 'Desarrollo frontend (AngularJS) y backend (Spring Framework, Spring Boot, MongoDB, JPA) de la plataforma SaaS Zenkiu. Sistema de facturación con Spring Roo.',
      badges: ['Spring Framework','MongoDB','AngularJS','JPA','Maven'],
    },
    {
      period: 'Ene 2009 – May 2010',
      company: 'FINTEC',
      role: 'Java Developer',
      desc: 'Inicio de carrera como desarrollador Java. Cooperación en el desarrollo de aplicación orientada al área de Cámara y Compensación en banca y finanzas.',
      badges: ['Java','Banca','Finanzas'],
    },
  ],

  education: [
    {
      degree: 'Ingeniero en Informática (Cum Laude)',
      school: 'Instituto Universitario de Tecnología Agro-Industrial',
      period: '2010 – 2012',
    },
    {
      degree: 'Técnico Superior Universitario en Informática',
      school: 'Instituto Universitario de Tecnología Agro-Industrial',
      period: '2004 – 2008',
    },
  ],

  certifications: [
    { icon: '🏅', title: 'AWS Certified Solutions Architect – Associate', issuer: 'AWS Training and Certification', date: 'Emitida 2023', href: 'https://www.credly.com/badges/62c21e1a-d6f5-4712-90c5-b009e51d3b5e' },
    { icon: '🏅', title: 'AWS Certified Cloud Practitioner',              issuer: 'AWS Training and Certification', date: 'Emitida 2023', href: 'https://www.credly.com/badges/29b82c26-4dfd-4a3b-80a5-d889ee534f96' },
    { icon: '🎓', title: 'Application Development',                       issuer: 'IBM Venezuela',                  date: 'Oct 2007',    href: '#' },
    { icon: '🎓', title: 'Programming Fundamentals',                      issuer: 'IBM Venezuela',                  date: 'Jul 2007',    href: '#' },
    { icon: '🎓', title: 'IT and Networking Fundamentals',                issuer: 'IBM Venezuela',                  date: 'Mar 2007',    href: '#' },
    { icon: '📋', title: 'Programa Desarrolladores de Software',          issuer: 'MPPCT / IBM Venezuela',          date: '2007 – 2008', href: '#' },
  ],
}
