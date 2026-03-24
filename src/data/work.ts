export interface Project {
  title: string
  eyebrow: string
  subtitle: string
  description: string
  bullets: string[]
  accentFrom: string
  accentVia: string
  tags: string[]
  linkLabel: string
  linkHref: string
  metricCards: string[]
  featured?: boolean
}

export const work: Project[] = [
  {
    title: 'Hidden Express',
    eyebrow: 'Flagship casual game',
    subtitle: 'A long-running multiplatform hidden object success story',
    description:
      'Developed by Making Fun and Kef Sensei, Hidden Express launched in 2013 and remains live today across web and app-based channels. Played by millions, with hundreds of locations and ongoing content updates — a rare casual title with unusual longevity and sustained audience engagement.',
    bullets: [
      'Guided from pitch and concept through production, launch, and live operations',
      'Project management, game design, liveOps, player support, and content pipeline leadership',
      'Marketing campaign coordination, partner integrations, and external team organisation',
      'Multiplatform experience across web, App Store, Google Play, Amazon, and related channels',
    ],
    accentFrom: 'rgba(61,217,245,0.22)',
    accentVia: 'rgba(56,189,248,0.08)',
    tags: ['2013–Live', 'Multiplatform', 'Game Design', 'LiveOps', 'KPIs', 'Player Support'],
    linkLabel: 'hiddenexpress.com',
    linkHref: 'https://www.hiddenexpress.com/',
    metricCards: ['2013 launch', 'Still live', 'Played by millions', 'Multiplatform'],
    featured: true,
  },
  {
    title: 'Applied AI Solutions',
    eyebrow: 'Applied product delivery',
    subtitle: 'AI delivery for real day-to-day business workflows',
    description:
      'Supported the delivery of applied AI solutions for small and mid-sized businesses in the US, focused on practical operational and customer-facing workflows. Running sprints, defining acceptance criteria, and bridging product and implementation realities.',
    bullets: [
      'PM leadership across meetings, sprint flow, and stakeholder coordination',
      'Acceptance criteria definition and practical solution framing',
      'Exposure to modern model APIs, orchestration patterns, and implementation realities',
      'Applied AI improving real workflows — not speculative demos',
    ],
    accentFrom: 'rgba(52,211,153,0.22)',
    accentVia: 'rgba(61,217,245,0.08)',
    tags: ['AI', 'SMB Workflows', 'Agile', 'Model APIs', 'Orchestration'],
    linkLabel: 'autom8ly.com',
    linkHref: 'https://www.autom8ly.com/',
    metricCards: ['Applied AI', 'Client workflows', 'Sprint-led', 'API-aware'],
  },
  {
    title: 'Ducati & Lamborghini NFT Platforms',
    eyebrow: 'Enterprise blockchain products',
    subtitle: 'White-label enterprise blockchain for premium brands',
    description:
      'At Web3PRO, a white-label NFT marketplace environment enabled enterprise clients like Ducati and Lamborghini to launch Web3 marketing campaigns — proprietary drops, primary experiences, and secondary marketplace mechanics.',
    bullets: [
      'Built and coordinated development teams as Project Manager and PMO',
      'Supported premium-brand product delivery in a cutting-edge blockchain environment',
      'Worked across scope, planning, communication, and partner/stakeholder alignment',
      'Part of a fast-moving product organisation that ultimately ceased activities in 2024',
    ],
    accentFrom: 'rgba(167,139,250,0.22)',
    accentVia: 'rgba(232,121,249,0.08)',
    tags: ['Blockchain', 'Enterprise', 'White-label', 'Ducati', 'Lamborghini'],
    linkLabel: 'web3pro.com',
    linkHref: 'https://www.web3pro.com/',
    metricCards: ['Enterprise-grade', 'White-label', 'Premium brands', 'Web3 campaigns'],
  },
]
