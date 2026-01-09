import {
  Briefcase01Icon,
  CodeIcon,
  Database01Icon,
  Globe02Icon as GlobalIcon,
  Layers01Icon,
  Rocket01Icon,
  SecurityCheckIcon,
} from '@hugeicons/core-free-icons';

export type RoadmapStepStatus = 'completed' | 'in-progress' | 'pending';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  status: RoadmapStepStatus;
  icon: any;
  details: string;
  resources?: { title: string; url: string }[];
}

export const roadmapData: RoadmapStep[] = [
  {
    id: 'frontend-basics',
    title: 'Fundamentos de Frontend',
    description: 'HTML, CSS e fundamentos de JavaScript.',
    status: 'pending', // Default initial status
    icon: CodeIcon,
    details:
      'Dominar as tecnologias principais da web é o primeiro passo. Você precisa entender HTML semântico, CSS moderno (Flexbox, Grid) e o básico de JavaScript (ES6+).',
    resources: [
      { title: 'Documentação MDN Web', url: 'https://developer.mozilla.org' },
      { title: 'CSS-Tricks', url: 'https://css-tricks.com' },
    ],
  },
  {
    id: 'react-fundamentals',
    title: 'Fundamentos de React',
    description: 'Componentes, Props, State e Hooks.',
    status: 'pending',
    icon: Layers01Icon,
    details:
      'Mergulhe fundo no React. Entenda o ciclo de vida dos componentes, como gerenciar estado com useState e useReducer, e como lidar com efeitos colaterais com useEffect.',
    resources: [
      { title: 'Documentação do React', url: 'https://react.dev' },
      {
        title: 'Patterns.dev',
        url: 'https://www.patterns.dev/posts/react-patterns/',
      },
    ],
  },
  {
    id: 'advanced-react',
    title: 'React Avançado & Ecossistema',
    description: 'Context, Performance e bibliotecas como TanStack Query.',
    status: 'pending',
    icon: Rocket01Icon,
    details:
      'Aprenda padrões avançados, otimização de performance (memo, useMemo, useCallback) e bibliotecas essenciais do ecossistema para roteamento e busca de dados.',
    resources: [
      { title: 'TanStack Query', url: 'https://tanstack.com/query/latest' },
    ],
  },
  {
    id: 'backend-integration',
    title: 'Integração com Backend',
    description: 'APIs REST, GraphQL e Autenticação.',
    status: 'pending',
    icon: Database01Icon,
    details:
      'Aprenda como conectar seu frontend a um backend. Buscando dados, lidando com estados de carregamento e gerenciando autenticação de usuário com JWT ou sessões.',
    resources: [],
  },
  {
    id: 'deployment-ci-cd',
    title: 'Deploy & CI/CD',
    description: 'Hospedagem, testes automatizados e pipelines de entrega.',
    status: 'pending',
    icon: GlobalIcon,
    details:
      'Coloque seu app online. Aprenda sobre Vercel, Netlify, Docker e configuração de fluxos de trabalho de CI/CD com GitHub Actions.',
    resources: [{ title: 'Documentação Vercel', url: 'https://vercel.com/docs' }],
  },
  {
    id: 'career-growth',
    title: 'Crescimento de Carreira',
    description: 'Construção de portfólio, entrevistas e soft skills.',
    status: 'pending',
    icon: Briefcase01Icon,
    details:
      'Prepare-se para o mercado de trabalho. Construa um portfólio incrível, pratique leetcode para entrevistas e aprenda a se comunicar efetivamente em equipe.',
    resources: [],
  },
];
