# Metro Solver - Digital Agency Website

Metro Solver is a comprehensive digital agency platform that empowers businesses to scale their operations through expert digital solutions and personalized service delivery.

**Experience Qualities**: 
1. **Professional & Trustworthy** - Instills confidence through polished design and proven expertise showcases
2. **Modern & Innovative** - Demonstrates cutting-edge capabilities through sleek aesthetics and advanced features
3. **Results-Driven** - Focuses on measurable outcomes and client success stories

**Complexity Level**: 
- **Content Showcase** (information-focused) - The website primarily displays services, portfolio work, testimonials, and company information to attract and convert potential clients.

## Essential Features

**Service Portfolio Display**
- Functionality: Showcases 12 different digital services with icons and descriptions
- Purpose: Demonstrates comprehensive capabilities to attract diverse client needs  
- Trigger: User lands on homepage and scrolls to services section
- Progression: View service grid → Read service descriptions → Click "Read More" links → Access detailed service information
- Success criteria: Clear service categories visible with engaging descriptions and call-to-action links

**Latest Works Gallery**
- Functionality: Displays portfolio of completed projects in a visual grid layout
- Purpose: Builds credibility through tangible work examples and design quality
- Trigger: User navigates to portfolio section
- Progression: View project thumbnails → Browse work samples → See project diversity and quality
- Success criteria: High-quality project images displayed in organized grid with clear branding

**Client Testimonials System**
- Functionality: Rotating testimonial carousel with client photos, ratings, and reviews
- Purpose: Builds trust through social proof and client satisfaction evidence
- Trigger: User scrolls to testimonials section
- Progression: View featured testimonial → Navigate through additional reviews → See rating sources (Google/Trustpilot)
- Success criteria: Authentic testimonials with photos, ratings, and review platform attribution

**Statistics Dashboard**
- Functionality: Displays key business metrics (150+ clients, 25k+ projects, 90+ team members)
- Purpose: Demonstrates scale and experience to build confidence
- Trigger: User views company statistics section
- Progression: See impressive numbers → Understand company scale → Gain confidence in capabilities
- Success criteria: Clear, prominent statistics that effectively communicate business success

**Process Workflow Visualization**
- Functionality: Circular workflow diagram showing 6-step service process
- Purpose: Explains service delivery methodology and sets client expectations
- Trigger: User views "How to Works?" section
- Progression: Understand process steps → See systematic approach → Gain confidence in methodology
- Success criteria: Clear process visualization with numbered steps and descriptive labels

## Edge Case Handling
- **Slow Image Loading**: Skeleton placeholders for portfolio grid and testimonial photos
- **Mobile Navigation**: Hamburger menu with full-screen overlay for responsive navigation
- **Empty Portfolio**: Fallback content when project images fail to load
- **Testimonial Carousel Errors**: Static fallback testimonials if carousel functionality fails
- **Form Submission Issues**: Clear error messages and retry mechanisms for contact forms

## Design Direction
The design should feel sophisticated, trustworthy, and cutting-edge - reflecting a premium digital agency that delivers professional results. A rich interface better serves the core purpose by showcasing visual capabilities and establishing credibility through polished presentation.

## Color Selection
Custom palette - A sophisticated dark theme with vibrant purple accents creates a modern, professional atmosphere that stands out in the digital agency space.

- **Primary Color**: Deep Purple `oklch(0.45 0.15 270)` - Represents innovation and creativity in digital solutions
- **Secondary Colors**: Dark Navy `oklch(0.10 0.08 240)` for depth and professionalism
- **Accent Color**: Vibrant Purple `oklch(0.65 0.25 280)` - Attention-grabbing highlight for CTAs and key interactive elements
- **Foreground/Background Pairings**: 
  - Background (Dark Navy): White text `oklch(0.95 0.05 240)` - Ratio 12.5:1 ✓
  - Primary (Deep Purple): White text `oklch(0.95 0 0)` - Ratio 8.2:1 ✓
  - Accent (Vibrant Purple): White text `oklch(0.95 0 0)` - Ratio 5.8:1 ✓
  - Card (Darker Navy): Light text `oklch(0.90 0.05 240)` - Ratio 11.2:1 ✓

## Font Selection
Typography should convey modern professionalism and excellent readability - Inter provides the perfect balance of technical precision and approachable friendliness for a digital agency.

- **Typographic Hierarchy**: 
  - H1 (Main Hero): Inter Bold/48px/tight letter spacing
  - H2 (Section Titles): Inter SemiBold/36px/normal spacing  
  - H3 (Service Titles): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Buttons: Inter Medium/16px/tight letter spacing

## Animations
Subtle functionality with purposeful moments of delight - animations should feel premium and polished without overwhelming the professional atmosphere.

- **Purposeful Meaning**: Smooth transitions communicate quality and attention to detail while guiding user focus
- **Hierarchy of Movement**: Primary focus on hover states for services, gentle carousel transitions for testimonials, and subtle parallax effects for hero section

## Component Selection
- **Components**: Cards for services and portfolio items, Carousel for testimonials, Button variants for CTAs, Badge components for statistics, Dialog for expanded service information
- **Customizations**: Custom gradient backgrounds, service icon integration, testimonial rating displays, statistics counter animations
- **States**: Hover effects with subtle elevation and color shifts, active states with enhanced purple accent, loading states with skeleton placeholders
- **Icon Selection**: Service-specific icons from Phosphor set representing each digital service category
- **Spacing**: Consistent 24px padding for cards, 48px margins between sections, 16px gaps in grids
- **Mobile**: Services grid collapses to single column, testimonials become swipeable, navigation transforms to slide-out menu, hero text resizes appropriately