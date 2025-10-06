# Digital Growth Agency Landing Page

A modern, professional landing page for a digital transformation agency specializing in business growth and digitalization services.

**Experience Qualities**:
1. **Professional** - Clean, corporate aesthetic that builds trust and credibility with business clients
2. **Modern** - Cutting-edge design with gradients, glassmorphism, and contemporary typography
3. **Engaging** - Interactive elements and animations that showcase digital expertise

**Complexity Level**: Content Showcase (information-focused)
- Primarily showcases services and builds brand credibility through visual design and clear messaging

## Essential Features

### Announcement Bar
- **Functionality**: Scrolling promotional messages highlighting key value propositions
- **Purpose**: Immediately communicate benefits and current offers to capture attention
- **Trigger**: Automatically scrolls on page load
- **Progression**: Continuous horizontal scroll → displays rotating benefits → reinforces value proposition
- **Success Criteria**: Users can quickly identify key benefits and promotional offers

### Navigation Header
- **Functionality**: Clean navigation with logo, menu items, cart, and user profile
- **Purpose**: Provide easy access to different sections and maintain user context
- **Trigger**: Available on page load with hover interactions
- **Progression**: User hovers menu items → visual feedback → click navigation → smooth transitions
- **Success Criteria**: Users can easily navigate to desired sections with clear visual feedback

### Hero Section
- **Functionality**: Large headline with call-to-action and background design elements
- **Purpose**: Communicate core value proposition and drive user engagement
- **Trigger**: Immediately visible on page load
- **Progression**: User sees headline → reads value proposition → clicks CTA → engagement begins
- **Success Criteria**: Clear messaging drives users to explore services or contact

### Background Graphics
- **Functionality**: Large "73" number and geometric shapes as design elements
- **Purpose**: Add visual interest and reinforce the digital/tech positioning
- **Trigger**: Visible as background elements
- **Progression**: Subtle visual enhancement → reinforces brand personality → creates memorable impression
- **Success Criteria**: Enhances visual appeal without distracting from content

## Edge Case Handling
- **Mobile Responsiveness**: Navigation collapses to mobile menu, content stacks vertically
- **Content Overflow**: Text wraps appropriately, images scale responsively
- **Missing Assets**: Fallback colors and placeholder content prevent broken layouts
- **Slow Connections**: Progressive loading with skeleton states for smooth experience

## Design Direction
The design should feel cutting-edge and professional, projecting innovation and expertise in digital transformation while maintaining corporate credibility and trustworthiness.

## Color Selection
**Triadic** - Three equally spaced colors creating dynamic contrast while maintaining harmony, used to convey innovation, trust, and energy appropriate for a tech-forward business service.

- **Primary Color**: Deep purple/blue (oklch(0.25 0.15 270)) - Communicates trust, professionalism, and technology expertise
- **Secondary Colors**: 
  - Darker purple (oklch(0.20 0.08 250)) - Supporting depth and contrast
  - Muted background (oklch(0.18 0.05 240)) - Provides subtle texture without distraction
- **Accent Color**: Bright orange/coral (oklch(0.65 0.2 45)) - Attention-grabbing highlight for CTAs and important elements
- **Foreground/Background Pairings**:
  - Background (oklch(0.12 0.05 240)): Light text (oklch(0.95 0 0)) - Ratio 19.2:1 ✓
  - Primary (oklch(0.25 0.15 270)): Light text (oklch(0.95 0 0)) - Ratio 8.4:1 ✓
  - Accent (oklch(0.65 0.2 45)): Light text (oklch(0.95 0 0)) - Ratio 4.9:1 ✓
  - Card (oklch(0.15 0.05 240)): Light text (oklch(0.95 0 0)) - Ratio 16.8:1 ✓

## Font Selection
Typography should convey modern professionalism with excellent readability, using Inter for its clean geometric forms that work well in both headings and body text.

- **Typographic Hierarchy**:
  - H1 (Main Headline): Inter Bold/64px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/36px/normal spacing  
  - Body Text: Inter Regular/18px/relaxed line height
  - Navigation: Inter Medium/16px/normal spacing
  - Buttons: Inter SemiBold/16px/normal spacing

## Animations
Subtle, purposeful animations that enhance the user experience without overwhelming, balanced to demonstrate technical sophistication while maintaining professional restraint.

- **Purposeful Meaning**: Motion communicates innovation and technical expertise through smooth transitions and hover effects
- **Hierarchy of Movement**: 
  - Primary: CTA button hover effects and scaling
  - Secondary: Navigation item hover states
  - Tertiary: Announcement bar scrolling animation

## Component Selection
- **Components**: 
  - Button (primary CTAs with gradients)
  - Badge (announcement highlights and cart counter)
  - Avatar (user profile display)
  - Card (future service/feature sections)
- **Customizations**: 
  - Gradient backgrounds for buttons and sections
  - Custom glassmorphism effects for number overlay
  - Rounded corners throughout for modern feel
- **States**: 
  - Buttons: hover scaling and gradient shifts
  - Navigation: subtle background changes on hover
  - Interactive elements: smooth color transitions
- **Icon Selection**: Phosphor Icons for consistent, modern iconography (Sparkle for CTA, Discord for chat, ShoppingCart, etc.)
- **Spacing**: Tailwind's 4px base scale (gap-2, gap-4, gap-8) for consistent rhythm
- **Mobile**: 
  - Navigation collapses to hamburger menu
  - Hero text scales down appropriately
  - Background elements adapt or hide on small screens
  - Touch-friendly button sizes (min 44px targets)