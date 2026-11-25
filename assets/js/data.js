/* Conteúdo do portfólio. Para atualizar projetos, experiência ou stack, edite só este arquivo. */
window.SITE = {
  premios: [
    {
      lugar: "1º lugar",
      titulo: "Genius Hackathon 2026",
      sub: "Health Hack Lab · UFPI · 12/09/2026",
      texto: "Equipe Health Devs, com o GlicemIA.",
      img: "assets/img/cert-genius-hackathon.webp",
      alt: "Certificado de 1º lugar no Genius Hackathon 2026",
    },
    {
      lugar: "2º lugar",
      titulo: "Hackathon O Piauí que Queremos",
      sub: "TV Cidade Verde · Movimento Saneamento Salva · 10/2026",
      texto: "SISAN, sistema de denúncia cidadã e priorização por risco sanitário.",
      img: "assets/img/cert-hackathon-piaui.webp",
      alt: "Certificado de participação no Hackathon 2026 O Piauí que Queremos",
    },
  ],
  producaoTecnica: "Produção Técnica registrada no CNPq (Plataforma Lattes): GlicemIA, PEC.AI e UGym.",

  categorias: ["Todos", "Saúde", "Educação", "Govtech", "Negócios", "Entretenimento", "Ferramentas"],

  projetos: [
    {
      nome: "GlicemIA", cat: "Saúde", selo: "1º lugar Genius Hackathon", ano: "2025–",
      desc: "Gestão de diabetes com IA: chat, análise de refeição por foto, leitura de exames em PDF e predição de glicemia. Perfis de paciente, médico e cuidador. Fundador e único desenvolvedor, com cerca de 40 testadores no beta.",
      stack: ["Flutter", "Riverpod", "Supabase", "Gemini", "Next.js"],
      telas: ["assets/img/glicemia-A.webp", "assets/img/glicemia-B.webp", "assets/img/glicemia-C.webp"], nota: "Telas do redesign (protótipo)",
    },
    {
      nome: "Polímata Concursos", cat: "Educação", selo: "Google Play", ano: "2026",
      desc: "Estudo para concursos públicos no estilo Duolingo: questões reais de provas anteriores, trilhas por concurso e matéria, flashcards e ofensiva diária. Publicado na Play Store.",
      stack: ["Flutter", "Dart", "Supabase", "Edge Functions"],
      link: { t: "polimata.app.br", h: "https://polimata.app.br" },
      telas: ["assets/img/polimata-01.webp", "assets/img/polimata-02.webp", "assets/img/polimata-04.webp"],
      mascote: true,
    },
    {
      nome: "SISAN", glifo: "SN", cat: "Govtech", selo: "2º lugar Hackathon do Piauí", ano: "2026",
      desc: "Sistema Integrado de Saneamento: denúncia cidadã, ordens de serviço e painel de priorização por risco sanitário, para água e esgoto.",
      stack: ["Flutter", "Supabase", "PostgreSQL", "Riverpod"],
      link: { t: "GitHub", h: "https://github.com/eltobsjr/SISAN--Sistema-Integrado-de-Saneamento" },
      telas: ["assets/img/sisan-cid_home.webp", "assets/img/sisan-cid_mapa.webp", "assets/img/sisan-ges_painel.webp"],
    },
    {
      nome: "SIGAU", glifo: "SG", cat: "Govtech", selo: "Em equipe", ano: "2026",
      desc: "SaaS multi-tenant para municípios gerenciarem animais urbanos: resgates, abrigos, adoções, campanhas e zoonoses, com regras por papel.",
      stack: ["Flutter", "Supabase", "PostgreSQL", "OneSignal"],
      telas: ["assets/img/sigau-app-A.webp", "assets/img/sigau-app-B.webp", "assets/img/sigau-app-C.webp"],
    },
    {
      nome: "OficinaFácil", cat: "Negócios", selo: "Acadêmico", ano: "2026",
      desc: "Ordens de serviço para oficina mecânica, da entrada do veículo até a entrega e o pagamento, com app Flutter e API própria.",
      stack: ["Flutter", "Node.js", "TypeScript", "Supabase"],
      link: { t: "GitHub", h: "https://github.com/eltobsjr/oficina-facil" },
      telas: ["assets/img/oficina-p_t05_clientes.webp", "assets/img/oficina-p_t07_veiculos.webp", "assets/img/oficina-p_t01_login.webp"], formato: "web",
    },
    {
      nome: "Confia", cat: "Negócios", selo: "", ano: "2026",
      desc: "Verificação de compras entre pessoas (OLX, Marketplace): um verificador confere o produto e o pagamento fica em escrow até a entrega. Backend modular com filas assíncronas.",
      stack: ["Flutter", "Node 22", "Prisma", "BullMQ", "Docker"],
      telas: ["assets/img/confia-A.webp", "assets/img/confia-B.webp", "assets/img/confia-C.webp"], nota: "Telas do design (protótipo)",
    },
    {
      nome: "Precifica", cat: "Negócios", selo: "Acessível e offline", ano: "2026",
      desc: "Calculadora de preço de venda para pequenos negócios. Sem servidor nem cadastro, funciona offline, com leitura em voz e pensada para WCAG 2.2 AA.",
      stack: ["Flutter", "Dart", "Web", "Android"],
      telas: ["assets/img/precifica-02.webp", "assets/img/precifica-03.webp", "assets/img/precifica-01.webp"],
    },
    {
      nome: "Rebook", cat: "Entretenimento", selo: "", ano: "2026",
      desc: "Empréstimo de livros entre pessoas de Picos-PI, com pedidos, conversas e avaliações.",
      stack: ["Flutter", "Supabase", "PostgreSQL"],
      telas: ["assets/img/rebook-A.webp", "assets/img/rebook-B.webp", "assets/img/rebook-C.webp"],
    },
    {
      nome: "Sheep", cat: "Entretenimento", selo: "Versões free e paga", ano: "2026",
      desc: "Leitor de mangá offline-first para Android, com várias fontes, downloads e progresso de leitura. Em uso diário.",
      stack: ["Flutter", "Riverpod", "Drift", "SQLite"],
      telas: ["assets/img/sheep-A.webp", "assets/img/sheep-B.webp", "assets/img/sheep-C.webp"],
    },
    {
      nome: "GuardaZap", cat: "Ferramentas", selo: "100% local", ano: "2026",
      desc: "Guarda no próprio celular o que um contato ou grupo do WhatsApp envia, inclusive o que for apagado. Sem internet, servidor ou nuvem.",
      stack: ["Flutter", "Android", "SQLite"],
      telas: ["assets/img/guardazap-A.webp", "assets/img/guardazap-B.webp", "assets/img/guardazap-C.webp"],
    },
    {
      nome: "Sistema de Presença", glifo: "SP", cat: "Educação", selo: "", ano: "2026",
      desc: "Controle de presença de alunos por QR code e NFC, com funcionamento offline e geolocalização.",
      stack: ["Flutter", "Supabase", "Drift", "NFC"],
      telas: ["assets/img/presenca-A.webp", "assets/img/presenca-B.webp", "assets/img/presenca-C.webp"],
    },
    {
      nome: "Carreira.io", cat: "Ferramentas", selo: "", ano: "2026",
      desc: "Plataforma pessoal de carreira: busca de vagas, currículo específico por vaga e editor com 8 modelos e painel de qualidade (ATS).",
      stack: ["Next.js", "React", "TypeScript", "Tailwind"],
      telas: ["assets/img/carreira-2.webp", "assets/img/carreira-3.webp", "assets/img/carreira-4.webp"], formato: "web",
    },
  ],

  laboratorio: [
    { t: "motion-lab", d: "Vídeos de produto escritos em código com Remotion: anúncios do Polímata, Precifica e outros.", s: "Remotion · React" },
    { t: "Família Indicator", d: "7 extensões do GNOME Shell: espelho do celular, monitor de uso do Claude, histórico da área de transferência, NitroSense.", s: "GJS · Python · Linux" },
    { t: "Extensões de Chrome", d: "Duas extensões Manifest que capturam links diretos de download e mostram no popup.", s: "JavaScript · Manifest" },
    { t: "UGym e PEC.AI", d: "Apps anteriores com registro de produção técnica no CNPq: treino e academias, e comunicação alternativa com IA.", s: "React Native · React", link: { t: "UGym", h: "https://github.com/eltobsjr/Ugym-ReactNative" } },
  ],

  experiencia: [
    {
      periodo: "2025 → atual", papel: "Fundador e Desenvolvedor Full Stack", org: "GlicemIA · startup",
      pontos: [
        "Construiu sozinho o app de gestão de diabetes com IA, do zero ao uso real.",
        "Duas versões (Flutter e Next.js) sobre um único backend Supabase, com Auth, RLS e Edge Functions.",
        "Cerca de 40 testadores ativos; 1º lugar no Genius Hackathon 2026.",
      ],
    },
    {
      periodo: "2026 → atual", papel: "Criador e Desenvolvedor", org: "Polímata Concursos · produto",
      pontos: [
        "App de estudo para concursos publicado na Play Store, com site próprio e vídeos de divulgação feitos em código.",
        "Backend inteiro em Supabase Edge Functions.",
      ],
    },
    {
      periodo: "2026 → atual", papel: "Responsável pelo Projeto de Extensão Fábrica de Integração", org: "IFPI · Campus Picos",
      pontos: [
        "Coordena uma equipe de 4 pessoas (software, administração e sistemas de informação).",
        "Gestão de projeto e levantamento de requisitos em demandas reais da comunidade.",
      ],
    },
    {
      periodo: "2026 → atual", papel: "Desenvolvedor Full Stack · Bolsista", org: "IBICT · remoto",
      pontos: [
        "Plataformas web institucionais em Java, Spring Boot e Angular.",
        "Contribuição ao ecossistema DSpace e a um repositório nacional de políticas públicas.",
      ],
    },
  ],

  formacao: [
    { periodo: "2026 → atual", t: "Tecnologia em Análise e Desenvolvimento de Sistemas", o: "IFPI · Campus Picos" },
    { periodo: "2023 → 2026", t: "Técnico em Informática integrado ao Ensino Médio", o: "IFPI · Campus Picos" },
  ],

  stack: [
    { c: "Mobile", i: ["Flutter", "Dart", "Riverpod", "go_router", "Drift / SQLite", "React Native"] },
    { c: "Web", i: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Vite"] },
    { c: "Backend", i: ["Supabase", "Edge Functions", "Node.js", "Express", "Prisma", "Spring Boot", "BullMQ"] },
    { c: "Dados e infra", i: ["PostgreSQL", "RLS", "Docker", "Git", "Linux", "Flyway"] },
    { c: "IA", i: ["Gemini", "Genkit", "LLMs e agentes", "Claude Code"] },
    { c: "Mídia e criação", i: ["Remotion", "GJS / GNOME", "Python"] },
  ],

  contato: [
    { t: "E-mail", v: "eltobsjr.developer@gmail.com", h: "mailto:eltobsjr.developer@gmail.com" },
    { t: "GitHub", v: "github.com/eltobsjr", h: "https://github.com/eltobsjr" },
    { t: "LinkedIn", v: "elto-borges", h: "https://www.linkedin.com/in/elto-borges-8730b8384" },
    { t: "WhatsApp", v: "(89) 99412-7883", h: "https://wa.me/5589994127883?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio!" },
    { t: "Lattes", v: "lattes.cnpq.br", h: "https://lattes.cnpq.br/2870235105898473" },
    { t: "Instagram", v: "@eltobsjr", h: "https://www.instagram.com/eltobsjr/" },
    { t: "YouTube", v: "@eltobsjr", h: "https://www.youtube.com/@eltobsjr" },
  ],
};
