// Data structure for the prototype landing page

export interface Logo {
  id: string
  name: string
  imageUrl: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export interface Template {
  id: string
  name: string
  category: string
  imageUrl: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatarUrl?: string
  rating?: number
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  billingPeriod: 'monthly' | 'yearly'
  features: string[]
  popular?: boolean
  cta: string
}

// Sample data
export const logos: Logo[] = [
  { id: '1', name: 'Company 1', imageUrl: '/placeholder-logo.svg' },
  { id: '2', name: 'Company 2', imageUrl: '/placeholder-logo.svg' },
  { id: '3', name: 'Company 3', imageUrl: '/placeholder-logo.svg' },
  { id: '4', name: 'Company 4', imageUrl: '/placeholder-logo.svg' },
  { id: '5', name: 'Company 5', imageUrl: '/placeholder-logo.svg' },
]

export const features: Feature[] = [
  {
    id: '1',
    title: 'Easy to Use',
    description: 'Intuitive drag-and-drop interface for creating stunning landing pages',
  },
  {
    id: '2',
    title: 'Responsive Design',
    description: 'All templates are fully responsive and mobile-friendly',
  },
  {
    id: '3',
    title: 'Fast Loading',
    description: 'Optimized for performance with lightning-fast load times',
  },
  {
    id: '4',
    title: 'SEO Optimized',
    description: 'Built-in SEO tools to help your pages rank higher',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Choose Template',
    description: 'Select from our collection of professionally designed templates',
  },
  {
    id: '2',
    step: 2,
    title: 'Customize',
    description: 'Personalize your landing page with your content and branding',
  },
  {
    id: '3',
    step: 3,
    title: 'Publish',
    description: 'Launch your landing page and start converting visitors',
  },
]

export const templates: Template[] = [
  {
    id: '1',
    name: 'Modern Business',
    category: 'Business',
    imageUrl: '/placeholder-template.jpg',
    featured: true,
  },
  {
    id: '2',
    name: 'Creative Portfolio',
    category: 'Portfolio',
    imageUrl: '/placeholder-template.jpg',
  },
  {
    id: '3',
    name: 'SaaS Landing',
    category: 'SaaS',
    imageUrl: '/placeholder-template.jpg',
  },
  {
    id: '4',
    name: 'E-commerce',
    category: 'E-commerce',
    imageUrl: '/placeholder-template.jpg',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO',
    company: 'Tech Corp',
    content: 'This landing page builder helped us increase conversions by 150%!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Marketing Director',
    company: 'Digital Agency',
    content: 'The templates are beautiful and easy to customize. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Founder',
    company: 'Startup Inc',
    content: 'We launched our landing page in just a few hours. Amazing tool!',
    rating: 5,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: 19,
    billingPeriod: 'monthly',
    features: [
      '5 Landing Pages',
      'Basic Templates',
      'Standard Support',
      'Custom Domain',
    ],
    cta: 'Get Started',
  },
  {
    id: '2',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 49,
    billingPeriod: 'monthly',
    features: [
      'Unlimited Landing Pages',
      'Premium Templates',
      'Priority Support',
      'Custom Domain',
      'A/B Testing',
      'Analytics',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    id: '3',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 99,
    billingPeriod: 'monthly',
    features: [
      'Everything in Professional',
      'Dedicated Support',
      'Custom Development',
      'White Label',
      'API Access',
    ],
    cta: 'Contact Sales',
  },
]
