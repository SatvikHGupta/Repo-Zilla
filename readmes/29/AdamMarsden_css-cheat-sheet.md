# CSS Cheat Sheet
A quick go to guide for CSS goodness. Checkout the [pretty version](https://admm.co/css-cheat-sheet).

## Contributing
If you have a bug to report about the [pretty CSS Cheat Sheet](https://admm.co/css-cheat-sheet) or something to add onto the CSS Cheat Sheet follow the [contribution guidelines](CONTRIBUTING.md).

## CSSCS Nav

  * [Selectors](#selectors)
  * [Pseudo Selectors & Elements](#pseudo-selectors)
  * [Text Styling](#text-styling)
  * [Position](#position)
  * [Background](#background)
  * [Box properties](#box-properties)
  * [List Styling](#list-styling)
  * [Flexbox](#flexbox)
  * [CSS Grid](#css-grid)
  * [Animations & Transitions](#animations)
  * [Modern Layout](#modern-layout)
  * [Dynamic Content](#dynamic-content)
  * [Scroll Snap](#scroll-snap)
  * [CSS :has() Selector](#css-has-selector)
  * [CSS Cascade Layers](#css-cascade-layers)
  * [CSS Scoping](#css-scoping)
  * [View Transitions API](#view-transitions-api)
  * [CSS Anchor Positioning](#css-anchor-positioning)
  * [Advanced CSS Features](#advanced-css-features)

---

### Selectors

Universal Selector `* {}`

Type Selector `h1, h2 ,h3 {}`

Child Selector `ul > li {}`

Descendant Selector `p a {}`

Class Selector `.class {}`

ID Selector `#id {}`

Adjacent Sibling Selector `h1 + p {}`

General Sibling Selector `h1 ~ p {}`

Attribute Selector `[attribute="SomeValue"] {}`

---

### Pseudo Selectors & Elements

Mouse Over Selector `a:hover {}`

Active Link Selector `a:active {}`

Focus Selector `input:focus {}`

Visited Links Selector `a:visited {}`

Link Selector `.class:link {}`

First Line Selector `p::first-line {}`

First Letter Selector `p::first-letter {}`

First Child Selector `p:first-child {}`

Last Child Selector `p:last-child {}`

Only Child Selector `p:only-child {}`

:nth-child Selector `p:nth-child() {}`

First Element of its Parent Selector `p:first-of-type {}`

Checked elements selector  `input:checked {}`

Disabled elements selector `input:disabled {}`

Enabled elements selector `input:enabled {}`

Elements that have no Children Selector (including text nodes) `p:empty {}`

Not a Specified Element Selector `:not(p) {}`

Before Element `.class::before {}`

After Element `.class::after {}`

---

### Text Styling

Font style `font-style: normal | italic | oblique`

Font Variant `font-variant: normal | small-caps`

Font Weight `font-weight: normal | bold | bolder | lighter | 100 - 900`

Vertical Alignment `vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial`

Font Size `font-size: 12px | 0.8em | 80%`

Text Transform `text-transform: capitalise | lowercase | uppercase`

Space Between Characters `letter-spacing: normal | 4px`

Line Height `line-height: normal | 3em | 34%`

Horizontal Alignment `text-align: left | right | center | justify`

Text Align Last `text-align-last: auto | left | right | center | justify | start | end | initial | inherit`

Text Decoration `text-decoration: none | underline | overline | line-through`

Indent First Line `text-indent: 25px`

Font Family `font-family: 'Open Sans', sans-serif`

Text Justify `text-justify: auto | inter-word | inter-character | none | initial | inherit`

Text Overflow `text-overflow: clip | ellipsis | string | initial | inherit`

Text Shadow `text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit`

---

### Position

Position `position: static | relative | absolute | fixed | sticky`

Position Properties `top | right | bottom | left`

Float Element `float: left | right | none`

Clear Floating Elements `clear: none | left | right | both`

Z Index `z-index: 3 | auto | inherit`

---

### Background

Background Image `background-image: url()`

Background Repeat `background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat`

Background Color `background-color: #2AA9E0`

Background Position `background-position: top | right | bottom | left | center`

Background Attachment `background-attachment: scroll | fixed | local | initial | inherit`

Background Blend Mode `background-blend-mode: normal | multiply | screen | overlay | darken | lighten`

Background Clip `background-clip: border-box | padding-box | content-box | text`

Backdrop Filter `backdrop-filter: blur(5px) | brightness(60%) | contrast(40%)`

---

### Box properties

Box Sizing `box-sizing: border-box | content-box`

Margin `margin: 2px 4px 6px 8px | 0 auto`

Padding `padding: 2px 4px 6px 8px`

Border Color `border-color: #2AA9E0`

Border Style `border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`

Border Width `border-width: 10px`

Box Shadow `box-shadow: offset-x offset-y blur-radius spread-radius color`

Border Radius `border-radius: 10px | 50% | 10px 20px`

Outline `outline: 1px solid red | outline-offset: 2px`

Clip Path `clip-path: circle(50%) | polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`

---

### List Styling

List Type `list-style-type: disc | circle | square | none`

List Position `list-style-position: inside | outside`

List Image `list-style-image: url()`

---

### Flexbox

Flex Direction `flex-direction: row | row-reverse | column | column-reverse`

Flex Wrap `flex-wrap: nowrap | wrap | wrap-reverse`

Justify Content `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

Align Items `align-items: flex-start | flex-end | center | baseline | stretch`

Align Content `align-content: flex-start | flex-end | center | space-between | space-around | stretch`

Order `order: 0`

Flex Grow `flex-grow: 0`

Flex Shrink `flex-shrink: 1`

Flex Basis `flex-basis: 3px | auto`

Align Self `align-self: auto | flex-start | flex-end | center | baseline | stretch`

---

### CSS Grid

Grid Template Columns `grid-template-columns: 40px 50px auto 50px 40px`

Grid Template Rows `grid-template-rows: 25% 100px auto`

Grid Template Areas `grid-template-areas: "a b c" | none`

Grid Template `grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr`

Grid Column Gap `grid-column-gap: 10px`

Grid Row Gap `grid-row-gap: 10px`

Justify Items `justify-items: start | end | center | stretch`

Align Items `align-items: start | end | center | stretch`

Justify Content `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

Align Content `align-content: flex-start | flex-end | center | space-between | space-around | stretch`

Grid Auto Columns `grid-auto-columns: 100px | max-content | min-content`

Grid Auto Rows `grid-auto-rows: 100px | max-content | min-content`

Grid Auto Flow `grid-auto-flow: row | column | row dense | column dense`

Grid Column Start `grid-column-start: 2 | areaname | span 2 | span areaname | auto`

Grid Column End `grid-column-end: 2 | areaname | span 2 | span areaname | auto`

Grid Row Start `grid-row-start: 2 | areaname | span 2 | span areaname | auto`

Grid Row End `grid-row-end: 2 | areaname | span 2 | span areaname | auto`

Grid Column `grid-column: 3 / span 2`

Grid Row `grid-row: 3 / span 2`

Justify Self `justify-self: start | end | center | stretch`

Align Self `align-self: start | end | center | stretch`

---

### Animations & Transitions

Animation `animation: name duration timing-function delay iteration-count direction fill-mode play-state`

Keyframes `@keyframes name { from {} to {} }`

Transition `transition: property duration timing-function delay`

Transform `transform: translate(x, y) rotate(deg) scale(x, y) skew(x-angle, y-angle)`

---

### Modern Layout

Container Type `container-type: inline-size | size | normal`

Container Query `@container (min-width: 400px) { }`

Subgrid `grid-template-columns: subgrid`

Aspect Ratio `aspect-ratio: 16 / 9`

Logical Properties `margin-block: 1rem; padding-inline: 2rem`

---

### Dynamic Content

CSS Variable `--variable-name: value`

Variable Usage `var(--variable-name)`

Counter Reset `counter-reset: name-of-counter`

Counter Increment `counter-increment: name-of-counter`

Counter Dynamic Value `content: counter(name-of-counter)`

Attribute Dynamic Value `content: attr(name-of-attribute)`

---

### Scroll Snap

Scroll Snap Type `scroll-snap-type: none | x | y | both | block | inline`

Scroll Snap Align `scroll-snap-align: none | start | end | center`

Scroll Snap Stop `scroll-snap-stop: normal | always`

Scroll Snap Padding `scroll-snap-padding: 10px | 10px 20px`

Scroll Snap Margin `scroll-snap-margin: 10px | 10px 20px`

---

### CSS :has() Selector

Has Child Element `div:has(> img) { }`

Has Sibling Element `h1:has(+ p) { }`

Has Multiple Elements `form:has(input:invalid) { }`

Has Focused Element `div:has(:focus) { }`

Has Empty State `ul:has(li:only-child) { }`

---

### CSS Cascade Layers

Layer Declaration `@layer base, components, utilities;`

Layer Block `@layer components { .btn { } }`

Layer Import `@import "styles.css" layer(utilities);`

Layer Nesting `@layer framework.components { }`

---

### CSS Scoping

Scope Declaration `@scope (.card) to (.card-footer) { }`

Scope Root Only `@scope (.component) { .title { } }`

Scope with Limits `@scope (.modal) to (.modal-overlay) { }`

---

### View Transitions API

View Transition Name `view-transition-name: hero-image;`

View Transition Group `::view-transition-group(hero-image) { }`

View Transition Image `::view-transition-image-pair(hero-image) { }`

View Transition Old `::view-transition-old(hero-image) { }`

View Transition New `::view-transition-new(hero-image) { }`

---

### CSS Anchor Positioning

Anchor Name `anchor-name: --my-anchor;`

Anchor Side `anchor-side: bottom;`

Anchor Position `position-anchor: --my-anchor;`

Anchor Function `top: anchor(--my-anchor bottom);`

---

### Advanced CSS Features

Color Mix `color-mix(in srgb, red 30%, blue);`

Relative Color `color: hsl(from red h s calc(l + 20%));`

CSS Nesting `.parent { & .child { } }`

CSS Trigonometry `transform: rotate(sin(45deg) * 10px);`

CSS Stepped Functions `animation-timing-function: steps(4, jump-both);`

CSS Masonry `grid-template-rows: masonry;`

---

## Credits

Built & Maintained by [Adam Marsden](https://admm.co/)

## License

[Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/)
