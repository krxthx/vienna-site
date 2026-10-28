export interface Problem {
  title: string
  body: string
}
export interface Pillar {
  label: string
  metrics: string
}
export interface Layer {
  title: string
  body: string
}
export interface Path {
  situation: string
  offer: string
  summary: string
  steps: string[]
  scenario: string
  roles: string[]
}
export interface Audience {
  title: string
  signals: string[]
}

export const NAV = [
  { id: 'problem', label: 'The problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'who', label: 'Who it is for' },
  { id: 'engage', label: 'Engagements' },
  { id: 'hybrid', label: 'Hybrid' },
]

export const PROBLEMS: Problem[] = [
  { title: 'Hidden infrastructure', body: 'Serving setup, quantization and GPU configuration are rarely disclosed.' },
  { title: 'Undisclosed harness', body: 'Raw models are scored while prompts, tools, memory and context handling are ignored.' },
  { title: 'Leakage and bias', body: 'Public benchmark data risks training contamination and inflated scores.' },
  { title: 'Real-world disconnect', body: 'Artificial, siloed tasks stand in for actual enterprise workflows.' },
  { title: 'A black box of scoring', body: 'It is unclear how scores are derived or how they map to your use case.' },
]

export const PILLARS: Pillar[] = [
  { label: 'Task quality', metrics: 'Completion rate, correctness, consistency across runs' },
  { label: 'Overall cost', metrics: 'Serving cost, token consumption, cost per task or session' },
  { label: 'Performance', metrics: 'Latency, time to first token, throughput, steps per task' },
]

export const LAYERS: Layer[] = [
  {
    title: 'Model and GPU evaluation matrix',
    body: 'Enterprise and open-source models validated against proprietary datasets across model and GPU configurations.',
  },
  {
    title: 'Agent harness and context framework',
    body: 'A playground for tuning the harness settings that change how a model performs for a given agent or use case.',
  },
  {
    title: 'Model serving layer',
    body: 'Quantization, batching and infrastructure tuned to balance latency and operating cost against task quality.',
  },
  {
    title: 'Continuous evolution',
    body: 'A learning loop that refines agents and model setup from real production telemetry and shifting workloads.',
  },
]

export const AUDIENCES: Audience[] = [
  {
    title: 'Starting the hybrid AI journey',
    signals: [
      'Hardware in place, generic use cases to serve',
      'Curated models to run, but no guidance on hardware',
      'Models and hardware chosen, outcomes still to tune',
    ],
  },
  {
    title: 'Needing domain-specific results',
    signals: ['Tailored use cases that call for domain-specific models', 'Custom use cases that generic benchmarks do not cover'],
  },
  {
    title: 'Struggling with agents in practice',
    signals: [
      'Good models, but unreliable agents',
      'Multiple agents producing different results',
      'No dependable agentic pipeline to put in front of users',
    ],
  },
  {
    title: 'Running AI and wanting more from it',
    signals: ['Understand and reduce current AI costs', 'Analyze current usage and receive suggestions', 'Agents that keep learning as models change'],
  },
]

export const PATHS: Path[] = [
  {
    situation: 'Choosing a model and hardware',
    offer: 'Curated Model & GPU Matrix',
    summary: 'Validated across domains, models and GPU specifications.',
    steps: [
      'Assess the domain, workload volumes and data-residency limits',
      'Shortlist from the curated matrix using predefined domains and the benchmark baseline',
      'Validate region-allowed models against GPU memory, context and concurrency',
      'Run targeted benchmarks or GPU serving trials where evidence is missing',
      'Deliver a model and GPU configuration with evidence and limits',
    ],
    scenario:
      'A customer wants AI for document creation and management, has not chosen a model or hardware, and geography limits which models they can use.',
    roles: ['Customer-facing AI architect', 'Domain expert', 'AI infrastructure engineer (part-time)'],
  },
  {
    situation: 'Benchmarking real workloads',
    offer: 'Build & Benchmark',
    summary: 'Custom datasets for custom use cases, benchmarked against the given harness.',
    steps: [
      'Select representative tasks such as multi-step workflows and cross-product extraction',
      'Build a dataset from selected customer agent interactions, with verified answers and graders',
      'Validate in the customer sandbox, or on PATH, a neo-cloud or a hyperscaler',
      'Measure baseline, candidate models and serving setups, then repeat and score',
      'Deliver the evaluation pack and findings',
    ],
    scenario:
      'Generic benchmarks do not cover the customer’s real work, such as multi-step workflows with automation and bulk email, and extraction across products.',
    roles: ['AI infrastructure engineer: GPU tuning, cost aware', 'AI engineer: agent evaluation and benchmarking'],
  },
  {
    situation: 'Making agents dependable',
    offer: 'Agent Harness Tuning',
    summary: 'Tune and validate the harness to meet task and use-case needs.',
    steps: [
      'Reproduce the baseline agent and build a reusable golden evaluation pack',
      'Identify the scenarios that overload GPUs, inflate cost or hurt task quality',
      'Improve multi-model routing, memory management and regional guardrails',
      'Compare every versioned change against the baseline, within budget',
      'Validate across cases and package the results',
    ],
    scenario:
      'The customer likes their models, but similar requests return different results, GPUs overload at peak, and the pipeline is not trusted enough to ship in every region.',
    roles: ['AI engineer: agent harness, evaluation and benchmarking'],
  },
  {
    situation: 'Improving what already runs',
    offer: 'Analyze & Learning Loop',
    summary: 'Analyze existing behavior and tune the harness for continued learning.',
    steps: [
      'Analyze usage, traces and cost to find recurring failures and waste',
      'Adjust the harness per use case and validate each change against the baseline',
      'Add MCP tools, skills and capabilities, then retest',
      'Check access, data handling and provider restrictions',
      'Benchmark new models against the current baseline and size GPU serving to match',
    ],
    scenario:
      'The customer already runs agents and wants them to keep improving on cost, performance and reliability while new models are added safely.',
    roles: ['AI infrastructure engineer: GPU tuning, cost aware', 'AI engineer: agent evaluation and benchmarking'],
  },
]

export const HYBRID = {
  title: 'Hybrid where it fits',
  body: 'When control, data location, performance or economics favor a different deployment balance, Vienna evaluates hybrid options alongside the cloud.',
  partners: ['Dell on-prem', 'Nebius neo-cloud'],
  services: [
    'Build hybrid AI and AI services aligned with the PATH stack',
    'Ongoing services for tuning context, workflow and agents',
    'Engineering and implementation delivered by Presidio',
  ],
}
