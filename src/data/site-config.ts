
import type { Project, TechCategory, ContactLink } from '@/types';

export const siteConfig = {
  name: "Elto Borges",
  url: "https://eltobsjr.github.io/", // Replace with actual domain later
  ogImage: "https://eltobsjr.github.io/og.jpg", // Replace with actual OG image URL
  description: "Portfólio de Elto Borges, Desenvolvedor Full Stack.",
  links: {
    github: "https://github.com/eltobsjr",
    linkedin: "www.linkedin.com/in/elto-borges-8730b8384",
    instagram: "https://www.instagram.com/eltobsjr/",
    youtube: "https://www.youtube.com/@eltobsjr",
    whatsapp: "https://wa.me/5589994127883?text=Ol%C3%A1,%20Elto!%20Vim%20pelo%20seu%20GITHUB",
    email: "mailto:eltobsjr.developer@gmail.com",
  },
  hero: {
    title: "Hi!! I'm Elto Borges 🇧🇷💻",
    subtitleLines: [
      "🎓 Estudante no Instituto Federal do Piauí (IFPI) — Campus Picos",
      "📚 Ensino Médio Integrado em Tecnologia da Informação (3º ano)",
      "💡 Apaixonado por tecnologia, sempre buscando aprender mais e participar de projetos inovadores",
      "🤝 Aberto a colaborações, freelances e oportunidades de crescimento na área de desenvolvimento de software"
    ]
  },
  techStack: [
    {
      category: "Linguagens",
      technologies: ["Java", "JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      category: "Backend",
      technologies: ["Spring", "Express", "Node.js", "Hono", "Prisma"]
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Banco de Dados",
      technologies: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      category: "Outros",
      technologies: ["Arduino", "Raspberry Pi", "IA", "Automação", "JWT", "Git", "Apache Cordova"]
    }
  ] as TechCategory[],
  projects: [
    {
      name: "UGym Fitness App",
      description: "Aplicativo de fitness completo (React, TypeScript) para Alunos, Personal Trainers e Academias. Backend com Prisma, Express, políticas de segurança, hash de senha e token JWT.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Prisma", "Express", "Node.js", "JWT"],
      liveUrl: "https://ugym-react.vercel.app",
      imageUrl: "/images/ugym/Ugym.png",
      imageHint: "fitness app",
      images: [
        "/images/ugym/Ugym1.png",
        "/images/ugym/Ugym2.png",
        "/images/ugym/Ugym3.png",
        "/images/ugym/Ugym4.png",
        "/images/ugym/Ugym5.png",
        "/images/ugym/Ugym6.png",
        "/images/ugym/Ugym7.png",
        "/images/ugym/Ugym8.png",
        "/images/ugym/Ugym9.png",
        "/images/ugym/Ugym10.png",
        "/images/ugym/Ugym11.png",
        "/images/ugym/Ugym12.png",
        "/images/ugym/Ugym13.png",
        "/images/ugym/Ugym14.png",
        "/images/ugym/Ugym15.png",
        "/images/ugym/Ugym16.png",
        "/images/ugym/Ugym17.png",
      ]
    },
    {
      name: "RFSmart Platform",
      description: "Plataforma de cursos online com frontend moderno (React, TypeScript, Vite) e backend robusto (Node.js, Express, Prisma).",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router DOM", "Framer Motion", "Node.js", "Express", "Prisma", "JWT"],
      frontendRepoUrl: "https://github.com/eltobsjr/FrontEnd-RFSmartReact",
      backendRepoUrl: "https://github.com/eltobsjr/BackEnd-RFSmart",
      liveUrl: "https://front-end-rf-smart-react.vercel.app",
      imageUrl: "/images/RF/RF1.png",
      imageHint: "e-learning platform",
      images: [
        "/images/RF/RF2.png",
        "/images/RF/RF3.png",
        "/images/RF/RF4.png",
        "/images/RF/RF5.png",
        "/images/RF/RF6.png",
        "/images/RF/RF7.png",
        "/images/RF/RF8.png",
        "/images/RF/RF9.png",
        "/images/RF/RF10.png"
      ]
    },
    {
      name: "UGym Landing Page",
      description: "Landing page promocional para o aplicativo UGym, construída com foco em design responsivo e otimizada para conversão.",
      technologies: ["Next.js", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobsjr/LandingPageUgym",
      liveUrl: "https://eltobsjr.github.io/LandingPageUgym/",
      imageUrl: "/images/UgymLandingPage/landingugym1.png",
      imageHint: "website landing page",
      images: [
        "/images/UgymLandingPage/landingugym2.png",
        "/images/UgymLandingPage/landingugym3.png",
        "/images/UgymLandingPage/landingugym4.png"
      ]
    },
    {
      name: "Sistema de Gerenciamento de Biblioteca",
      description: "Sistema de gerenciamento de biblioteca com frontend em HTML, Bootstrap CSS, e backend com Spring Boot, conectado ao banco de dados MongoDB.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Thymeleaf", "HTML", "Bootstrap CSS", "Maven"],
      repoUrl: "https://github.com/eltobsjr/SpringBoot-sistemabiblioteca",
      imageUrl: "/images/biblioteca/biblioteca1.png",
      imageHint: "library management system",
      images: [
        "/images/biblioteca/biblioteca2.png",
        "/images/biblioteca/biblioteca3.png",
        "/images/biblioteca/biblioteca4.png"
      ],
    },
    {
      name: "MedicSystem - Gerenciador de Clínica",
      description: "Gerenciador de clínica médica que organiza documentos, cadastra médicos/pacientes e agenda consultas. Frontend (React, TS) e Backend (Node.js, Prisma).",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "JWT", "Framer Motion"],
      frontendRepoUrl: "https://github.com/eltobsjr/FrontEnd-MedicSystem",
      backendRepoUrl: "https://github.com/eltobsjr/BackEnd-MedicSystem",
      imageUrl: "/images/medicsys/medicsys1.png",
      imageHint: "clinic management app",
      images: [
        "/images/medicsys/medicsys2.png",
        "/images/medicsys/medicsys3.png",
        "/images/medicsys/medicsys4.png"
      ],
    },
    {
      name: "Explorador Interativo do Sistema Digestivo",
      description: "Projeto educativo sobre o sistema digestivo, incluindo quiz interativo e esquema 3D. Desenvolvido com Next.js, TypeScript e Tailwind CSS para um trabalho escolar.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobsjr/SistemaDigestivoInterativo",
      liveUrl: "https://eltobsjr.github.io/SistemaDigestivoInterativo/",
      imageUrl: "/images/SistemaDigestorio/SistemaDigestorio1.png",
      imageHint: "digestive system anatomy",
      images: [
        "/images/SistemaDigestorio/SistemaDigestorio2.png",
        "/images/SistemaDigestorio/SistemaDigestorio3.png",
        "/images/SistemaDigestorio/SistemaDigestorio4.png"
      ],
    },
  ] as Project[],
  contactLinks: [
    {
      name: "Gmail",
      url: "mailto:eltobsjr.developer@gmail.com",
      icon: "Mail"
    },
    {
      name: "WhatsApp",
      url: "https://wa.link/w6d9rf",
      icon: "MessageSquareText"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/eltobsjr/",
      icon: "Instagram"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@eltobsjr",
      icon: "Youtube"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elto-borges-5b90962a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/eltobsjr",
      icon: "Github"
    }
  ] as ContactLink[]
};
