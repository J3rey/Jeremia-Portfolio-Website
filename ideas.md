# Jeremia Yovinus Portfolio — Design Brainstorm

<response>
<text>
## Idea 1: "Neon Terminal" — Cyberpunk Hacker Aesthetic

**Design Movement**: Cyberpunk / Terminal UI inspired by retro hacker culture and sci-fi interfaces (Blade Runner, TRON)

**Core Principles**:
1. Dark-first with electric blue (#007BFF) as the sole accent — everything else is monochrome
2. Typography-driven hierarchy — the text IS the design, not decoration around it
3. Precision engineering — pixel-perfect alignment, mathematical spacing, no organic curves
4. Information density balanced with breathing room

**Color Philosophy**: Pure black (#000000) background as the "void" canvas. White (#FFFFFF) for primary text. Blue (#007BFF) as the electric current that flows through interactive elements, with lighter glow (#3399FF / #66B2FF) for hover states. The blue represents energy, technology, and forward motion.

**Layout Paradigm**: Full-width sections with a left-aligned content column. Hero uses a split layout — text on left, animated code-like element on right. Projects use a staggered grid (not uniform). Timeline uses a vertical line with alternating left/right cards. Asymmetric whitespace creates tension and visual interest.

**Signature Elements**:
1. LED glow borders that pulse subtly on interactive elements — thin 1px borders that bloom to 8-12px box-shadow on hover
2. Monospaced accent text for labels/categories mixed with sans-serif body text
3. Horizontal scan-line dividers between sections (thin blue lines with glow)

**Interaction Philosophy**: Hover reveals hidden information (card flip, expand). Clicks feel "electric" — brief glow flash. Scroll triggers sequential fade-in from left. Everything feels responsive and alive, like a living circuit board.

**Animation**: 
- Section entrance: elements slide in from left with a 0.6s ease-out, staggered by 100ms per child
- Card hover: translateY(-4px) + box-shadow bloom from 0px to 12px blue glow over 0.3s
- Button hover: background fills from left to right like a loading bar
- Scroll progress bar at top glows blue
- Subtle ambient pulse on the hero CTA button (opacity oscillation)

**Typography System**: 
- Display: JetBrains Mono (monospaced) for headings and labels — gives technical credibility
- Body: Space Grotesk — geometric sans-serif that bridges mono and humanist styles
- Hierarchy: H1 at 4rem bold, H2 at 2.5rem semibold, body at 1.125rem regular
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 2: "Swiss Precision" — Neo-Brutalist Minimalism

**Design Movement**: Swiss/International Typographic Style meets Neo-Brutalism — raw, honest, grid-obsessed

**Core Principles**:
1. The grid is sacred — every element snaps to a strict 8px baseline grid
2. Content hierarchy through scale contrast — massive headings, modest body text
3. Negative space as a structural element, not empty space
4. Blue (#007BFF) used surgically — only on interactive and state-change elements

**Color Philosophy**: White (#FFFFFF) as the dominant canvas — clean, clinical, professional. Black (#000000) for text and structural borders. Blue (#007BFF) appears ONLY on interactive elements (buttons, links, hover states, progress indicators). This restraint makes every blue element feel intentional and important. The LED glow effect is the reward for interaction.

**Layout Paradigm**: Strict 12-column grid with generous gutters. Hero section uses oversized typography spanning full width. Projects section uses a masonry-inspired layout with varying card heights. Skills use a tag cloud with size variation. Experience uses a bold left-aligned timeline with thick vertical line.

**Signature Elements**:
1. Oversized section numbers (like "01", "02") in light gray as background watermarks
2. Thick black borders on cards with blue glow on hover — raw, structural, honest
3. Dot-grid background pattern in very subtle gray (#F5F5F5) for texture

**Interaction Philosophy**: Interactions are bold and immediate — no subtle fades. Cards snap to hover state. Buttons invert colors instantly. The blue glow is the "reward" for engagement. Everything feels precise and intentional.

**Animation**:
- Section entrance: fade-in + scale from 0.95 to 1.0 over 0.4s
- Card hover: instant border-color change to blue + 0px to 16px blue box-shadow
- Scroll-triggered counter animations for stats/numbers
- Navigation underline slides from left on hover
- Page load: staggered reveal of hero elements (name, title, CTA) with 200ms delays

**Typography System**:
- Display: Syne — bold, geometric, slightly quirky for personality
- Body: DM Sans — clean, modern, highly readable
- Hierarchy: H1 at 5rem black weight, H2 at 3rem bold, body at 1rem regular
- Section labels in uppercase tracking-widest at 0.875rem
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Idea 3: "Midnight Circuit" — Dark Elegance with Luminous Accents

**Design Movement**: Dark Mode Luxury meets Digital Craftsmanship — inspired by premium tech product pages (Apple, Nothing Phone)

**Core Principles**:
1. Dark background (#0A0A0A, not pure black) for depth and comfort
2. Blue light as navigation — the eye follows the glow
3. Layered depth through subtle gradients and glass-morphism
4. Every pixel serves a purpose — no decorative waste

**Color Philosophy**: Near-black (#0A0A0A) base with slightly lighter card surfaces (#111111, #1A1A1A) creating depth layers. White (#E5E5E5 for body, #FFFFFF for headings) text for readability. Blue (#007BFF) is the "light source" — it illuminates interactive elements like LEDs on a circuit board. Glow radiates outward (#007BFF → #3399FF → transparent) creating a realistic light emission effect.

**Layout Paradigm**: Full-bleed dark sections with contained content areas. Hero uses centered layout with a radial blue gradient behind the CTA. Projects use a 2-column card grid with generous gaps. Skills use horizontal scrolling pill badges. Experience uses cards stacked vertically with a glowing left border. Sections separated by gradient fade dividers (dark → slightly lighter → dark).

**Signature Elements**:
1. Glassmorphism cards — semi-transparent backgrounds with backdrop-blur and thin blue border
2. Radial gradient "light pools" behind key elements (hero CTA, section headers)
3. Thin luminous lines connecting sections — like circuit traces on a PCB

**Interaction Philosophy**: Hover creates a "spotlight" effect — the blue glow intensifies as if the user's cursor is a light source. Cards gain a subtle inner glow. Buttons pulse gently when idle, glow brightly on hover. The entire experience feels like navigating a premium device interface.

**Animation**:
- Section entrance: fade-in from below with 0.8s ease, parallax-like stagger
- Card hover: border glow intensifies + subtle background gradient shift + translateY(-6px)
- Hero: typing effect for the subheadline, followed by CTA button fade-in
- Idle CTA: gentle pulse animation (box-shadow oscillation every 2s)
- Scroll progress: thin blue line at top of viewport
- Skills: badges light up sequentially on scroll-into-view

**Typography System**:
- Display: Outfit — modern geometric sans with personality, excellent for dark backgrounds
- Body: IBM Plex Sans — technical yet warm, great x-height for readability on dark
- Hierarchy: H1 at 3.5rem semibold, H2 at 2rem medium, body at 1.05rem regular
- Accent text (labels, dates) in blue at 0.875rem with letter-spacing
</text>
<probability>0.09</probability>
</response>
