export interface Project {
  id: string;
  title: string;
  category: 'Applied AI' | 'Data Operations' | 'Data Analytics';
  status?: string;
  objective: string;
  approach: string[];
  keyFindings: string[];
  tools: string[];
  role: string;
  roleNote?: string;
  complianceNote?: string;
  summaryHighlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; levelNote?: string }[];
}

export const HERO_DATA = {
  name: "Valery Ortiz",
  education: {
    degree: "Bachelor of Applied Science in Data Analytics",
    institution: "Miami Dade College",
    graduation: "expected Spring 2027",
  },
  statement:
    "I’m a Data Analytics student with professional experience in data operations, data quality, workflow improvement, and business process analysis. I enjoy understanding how processes work, finding ways to improve them, and using analytics and emerging AI tools to build practical solutions.",
  targetRoles: [
    "Data Analyst",
    "Business Intelligence",
    "Data Operations",
    "Applied AI (Interest)",
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/valery-ortiz",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    label: "GitHub - Coming Soon",
    url: "#",
    icon: "github",
    note: "Placeholder - link will be activated soon",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "miami-benefits-rag",
    title: "City of Miami — AI-Powered Public Benefits Assistant",
    category: "Applied AI",
    objective:
      "Develop a better way for the City of Miami Office of Community Development to search and understand Public Benefits agreement information when reviewing development-project requirements and compliance.",
    approach: [
      "Our team developed a Phase 1 AI assistant using a Retrieval-Augmented Generation (RAG) approach. The system retrieved relevant information from City source materials and used that information to answer questions about obligations, requirements, documentation, timelines, and compliance.",
      "My work focused primarily on the retrieval and data-quality layer. I worked with vectorized document information, structured Q&A content, semantic similarity, keyword matching, retrieval scoring, reranking logic, testing, and fallback safeguards.",
      "I helped improve how candidate information was selected before it was passed to the language model by combining multiple relevance signals, including semantic similarity, keyword overlap, and exact or near-exact question matching.",
    ],
    keyFindings: [
      "The team produced a working Phase 1 proof of concept demonstrating how AI could make Public Benefits information easier to access.",
      "Improvements to the retrieval process helped prioritize more relevant source information and reduce the risk of unsupported answers.",
    ],
    tools: [
      "Python",
      "RAG",
      "Semantic Search",
      "Vectorized Data",
      "Retrieval Scoring",
      "Reranking",
      "Structured Q&A",
      "GitHub",
      "Azure DevOps",
      "AI-Assisted Development",
    ],
    role: "Data Analyst. I focused primarily on retrieval quality, structured data, testing, reranking, and answer reliability.",
    roleNote:
      "This was a team project. The broader AI architecture and orchestration were handled collaboratively, with significant architecture work led by the team’s AI/ML Engineer.",
    summaryHighlights: [
      "Phase 1 proof of concept for City of Miami Office of Community Development",
      "Multi-signal retrieval combining semantic similarity, keyword overlap, and exact Q&A matching",
      "Rigorous retrieval scoring and reranking logic to eliminate unsupported answers",
    ],
  },
  {
    id: "psi-workspace-modernization",
    title: "PSI Workspace — Pension Administration Application Modernization",
    category: "Data Operations",
    status: "In Development",
    objective:
      "Modernize existing Microsoft Access-based pension administration workflows into a more organized .NET/WPF desktop application connected to Microsoft SQL Server while preserving existing business rules and operational requirements.",
    approach: [
      "I review existing Access forms, queries, VBA procedures, field dependencies, and business workflows to determine what information and behavior need to carry over into the new application.",
      "I translate operational requirements into application behavior and contribute to interface design, usability improvements, testing, and AI-assisted implementation.",
      "I use Visual Studio and OpenAI Codex to support implementation, review changes, troubleshoot issues, and iteratively compare the new application against existing workflows.",
    ],
    keyFindings: [
      "The application is actively being developed. Current work focuses on workflow migration, interface refinement, consistent controls and interaction patterns, and verification that the new application preserves required business behavior.",
    ],
    tools: [
      "Microsoft Access",
      "VBA",
      ".NET",
      "WPF/XAML",
      "Microsoft SQL Server",
      "Visual Studio",
      "OpenAI Codex",
      "PowerShell",
    ],
    role: "Business workflow analysis, requirements definition, interface design, testing, and AI-assisted implementation.",
    summaryHighlights: [
      "Translating complex Microsoft Access & VBA systems into modern .NET/WPF and SQL Server",
      "Preserving mission-critical ERISA & retirement business rules without workflow disruption",
      "Iterative testing and AI-assisted implementation with OpenAI Codex & Visual Studio",
    ],
  },
  {
    id: "retirement-workflow-efficiency",
    title: "Retirement Plan Workflow Efficiency Analysis",
    category: "Data Analytics",
    objective:
      "Analyze the efficiency of a retirement-plan administration workflow from census submission through the return of the signed Form 5500. The project examined whether early census submission improved Form 5500 timeliness, whether additional client follow-ups reduced overall processing time, and whether the relationship between follow-ups and processing time changed based on submission timing.",
    approach: [
      "I analyzed an internal company dataset containing 811 client records from the 2024 administration cycle representing the 2023 plan year.",
      "The data included census submission and completion dates, follow-up counts, signed contribution report dates, and Form 5500 return dates.",
      "I created analytical variables including PrioritySubmission, OverallProcessingTime, and Form5500Timeliness.",
      "I used correlation analysis, chi-square testing, a two-sample t-test, one-way ANOVA, multiple linear regression, and two-way ANOVA with interaction analysis.",
    ],
    keyFindings: [
      "Early census submission was significantly associated with meeting the Form 5500 deadline, but it did not significantly reduce overall processing time.",
      "Follow-up frequency alone also did not significantly affect processing time.",
      "The interaction analysis showed that the relationship between follow-ups and processing time differed depending on submission priority.",
      "The regression model explained approximately 0.25% of the variation, suggesting that other workflow factors were more influential.",
    ],
    tools: [
      "R",
      "dplyr",
      "lubridate",
      "ggplot2",
      "Statistical Testing",
      "ANOVA",
      "Regression",
      "Data Visualization",
    ],
    role: "Individual project. I selected the business problem, prepared and analyzed the data, created the analytical variables, interpreted the results, and developed the recommendations.",
    complianceNote:
      "Do not include confidential client information or raw internal company data. (Project adheres to all confidentiality and data privacy standards).",
    summaryHighlights: [
      "Rigorous statistical study on 811 client records from the 2024 retirement administration cycle",
      "Derived key operational variables: PrioritySubmission, OverallProcessingTime, Form5500Timeliness",
      "Employed ANOVA, 2-sample t-tests, chi-square testing, and multiple linear regression",
    ],
  },
];

export const EXPERIENCE_DATA = {
  organization: "Pension Services, Inc.",
  role: "Data Operations Lead",
  description:
    "My role combines data quality, operational workflow management, process improvement, and team leadership within retirement-plan administration.",
  pillars: [
    {
      title: "Data Quality and Validation",
      detail:
        "I work extensively with census, payroll, demographic, and contribution data, reviewing datasets for accuracy, completeness, inconsistencies, and missing information before they move through downstream processes.",
    },
    {
      title: "Complex Data Investigation",
      detail:
        "I handle more complicated cases, especially Defined Benefit plans, where I may need to research and reconstruct historical participant data across multiple years, combine information from different sources, and resolve discrepancies to support actuarial analysis and regulatory work.",
    },
    {
      title: "Data Operations and Workflow Ownership",
      detail:
        "I help manage core departmental workflows including annual census requests, follow-ups, off-calendar requests, terminations, specialized client requests, and Defined Benefit processing. I use Monday.com and internal systems to track status, priorities, and completion.",
    },
    {
      title: "Process Improvement",
      detail:
        "I improve how data is collected and processed through redesigned annual data requests, improved templates and documentation, tracking tools, and standardized guides and resources.",
    },
    {
      title: "Leadership and Cross-Functional Work",
      detail:
        "I am a lead within the department, train employees, perform quality-control reviews, and work closely with management, the actuarial team, and other departments. A major part of my role is translating operational and data issues into organized processes and helping ensure reliable information reaches the correct people and downstream processes.",
    },
  ],
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "Data & Analytics",
    description: "Core statistical analysis, data transformation, validation, and visual analytics.",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Excel" },
      { name: "Data Cleaning" },
      { name: "Data Validation" },
      { name: "Data Integrity" },
      { name: "Statistics" },
      { name: "Data Visualization" },
      { name: "R — Basic" },
      { name: "Power BI" },
      { name: "Tableau" },
    ],
  },
  {
    title: "AI & Technical",
    description: "Applied generative AI, retrieval architectures, and enterprise development tooling.",
    skills: [
      { name: "RAG Concepts" },
      { name: "Semantic Search" },
      { name: "Retrieval and Reranking" },
      { name: "NLP" },
      { name: "Computer Vision" },
      { name: "TensorFlow" },
      { name: "AI-Assisted Development" },
      { name: "Microsoft Copilot" },
      { name: "OpenAI Codex" },
      { name: "Apache Spark" },
      { name: "BigQuery — Introductory" },
      { name: "Azure DevOps — Exposure" },
    ],
  },
  {
    title: "Data Operations & Compliance",
    description: "Regulatory rigor, audit-readiness, and pension administration operational controls.",
    skills: [
      { name: "Data Quality Control" },
      { name: "Workflow Management" },
      { name: "ERISA" },
      { name: "DOL/IRS Standards" },
      { name: "Form 5500 Data Readiness" },
      { name: "Audit-Ready Documentation" },
    ],
  },
  {
    title: "Business & Leadership",
    description: "Translating ambiguous operational problems into structured, documented solutions.",
    skills: [
      { name: "Workflow Analysis" },
      { name: "Requirements Definition" },
      { name: "Process Improvement" },
      { name: "Team Leadership" },
      { name: "Training" },
      { name: "Cross-Functional Collaboration" },
      { name: "Documentation" },
    ],
  },
];

export const ABOUT_DATA = {
  paragraph:
    "I value continuous learning, collaboration, and doing work I can stand behind. My professional background has given me experience working with operational data, data quality, complex workflows, and process improvement, while my education has allowed me to expand into analytics, business intelligence, and applied AI. I take feedback seriously, enjoy learning from people with different areas of expertise, and care about producing thoughtful and reliable work that contributes to the larger project or team.",
  opportunitiesTarget: [
    "Data Analytics",
    "Business Intelligence",
    "Data Operations",
    "Exploring Applied AI",
  ],
};

export const CONTACT_DATA = {
  resumeLabel: "PDF Available",
  resumeUrl: "/Valery-Ortiz-Resume.pdf",
  emailPlaceholder: "Professional Email - Add Before Publishing",
};
