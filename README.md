| Detail | Information |
|---|---|
| Project title | Bee Free Travel Agency Website |
| Student | Bonginkosi Mpanza |
| Student number | ST10503795 |
| Group | 1 |
| Module | Web Development (WEDE5020 / WEDES5020POE) |
| Lecturer | J. Sookha |
| Project type | Small business / travel agency website |
| Current stage | Part 3: JavaScript functionality, SEO, forms, refinements and submission |
| Previous stage | Part 2: HTML and CSS development |
| Repository for Part 3 | [wede5020-2026-part-3-st10503795](https://github.com/EMGPSD/wede5020-2026-part-3-st10503795) |
| Previous Part 2 repository | [wede5020-2026-part-2-st10503795](https://github.com/EMGPSD/wede5020-2026-part-2-st10503795) |
| Public website URL | **Not yet verified in the supplied project evidence** — add the deployed link after testing |
| README updated | 7 November 2026 |

Project status: This README documents the work and design decisions from the supplied Part 2 and Part 3 project files, the later HTML improvements, and the GitHub commit history visible on 7 November 2026. Features described as implemented in the source code are not automatically described as fully tested or successfully deployed. The live URL, actual lecturer feedback and latest form-delivery configuration must be verified before final submission.

1. Project Overview
Bee Free Travel Agency is my small business website project for the Web Development module. I developed the website to help visitors discover travel destinations, explore accommodation ideas, learn about the agency, and communicate their travel interests through the website.

The main idea behind Bee Free is that planning a trip should feel exciting rather than complicated. I wanted to create a website that is welcoming, visually consistent and simple to navigate. Visitors should be able to find their way from the Home page to information about Paris, Dubai, Zanzibar, hotels and travel enquiries without having to search through confusing pages.

In Part 1, I established the website concept, information structure and initial content. In Part 2, I concentrated on HTML and CSS, making the pages visually consistent and responsive. In Part 3, I extended the project with JavaScript, interactive destination browsing, image viewing, form-validation logic, search-engine improvements and further design changes. I also reviewed the earlier code and comments to make the project easier to understand and maintain.

This is a student travel-agency website, not a connected airline, hotel inventory or payment system. A travel enquiry is not a confirmed booking, and displayed destinations and accommodation ideas do not constitute live availability or pricing.
2. Project Objectives
My goals for the complete website were to:
1. Build a structured website using semantic HTML5 and an external CSS stylesheet.
2. Create a consistent visual identity using Bee Free's original logo, travel photography, colours, buttons, typography and spacing.
3. Make the six main website pages easy to navigate on desktop, tablet and mobile devices.
4. Present travel destinations and accommodation options in an organised and appealing way.
5. Introduce useful JavaScript interactions rather than leaving the website as a collection of static pages.
6. Make it easier to find destinations through search and filtering.
7. Allow visitors to enlarge photographs and explore interactive travel-related content.
8. Collect meaningful information through separate travel enquiry and general contact forms.
9. Check form inputs and display understandable validation or status messages.
10. Apply on-page SEO techniques such as descriptive titles, metadata, headings, alt text and internal links.
11. Make accessibility improvements, including labelled fields, keyboard-friendly controls and responsive navigation.
12. Track the work through GitHub commits and document changes from one project stage to the next.
13. Prepare the website for testing and deployment to a free hosting service.
3. Website Pages and What I Added
The website has six main pages. I kept the same brand identity and navigation across them so users do not have to relearn the layout when they move between sections.
3.1 Home Page — CODE_STRUCTURE/Home.html
The Home page is the starting point of the visitor's journey. I used a large travel photograph in the hero area, a welcoming headline and clear buttons to direct visitors towards the next stage of planning a trip.

Layout and content decisions
- Kept the Bee Free logo and business name in the header.
- Used an image-led hero with a darker overlay so the foreground text remains readable.
- Added introductory travel messaging and prominent calls to action.
- Presented Paris, Dubai and Zanzibar as featured destinations, each with imagery and a short introduction.
- Added a route to accommodation information and the quotation page.
- Used consistent cards, spacing, rounded corners and responsive layouts.
Part 3 interaction

The supplied Part 3 JavaScript includes a Home destination-selection form. When a visitor chooses a destination and submits the form, JavaScript opens the Destinations page with the selected place in the URL using a search query parameter. The Destinations page can read that parameter and apply the search automatically. This connects the two pages instead of treating them as unrelated screens.
3.2 About Us Page — CODE_STRUCTURE/about.html
I used this page to communicate the identity and purpose of Bee Free Travel Agency. It includes an introduction to the agency, travel-inspired storytelling, a supporting photograph and cards explaining the values behind the website.

Design and content improvements
- Made the introduction more meaningful rather than using only a short heading.
- Separated the agency's purpose from its values to improve readability.
- Used a split layout for the story and photograph.
- Presented values in cards such as Explore, Experience/Plan, and Connect; the wording varies between project versions and should match the final page.
- Included a call to action to continue exploring destinations.
- Improved the explanatory code comments by removing repetitive remarks about opening and closing individual HTML tags.
The About page uses the same external styling and navigation as the other pages.
3.3 Destinations Page — CODE_STRUCTURE/DESTINATION.html
The Destinations page is where I concentrated much of the additional visitor interaction in Part 3. It displays travel cards for Paris, France; Dubai, UAE; and Zanzibar, Tanzania.

Destinations and presentation
Destination	Travel focus	Image asset
Paris, France	Culture, museums and city experiences	Paris_destination.jpg
Dubai, United Arab Emirates	Modern city experiences, shopping and desert activities	Dubai_destination.jpg
Zanzibar, Tanzania	Beaches, island scenery and culture	zanzibar_destination.jpg


Part 3 functionality in the supplied JavaScript
- Live text search: Visitors can type a city, country or search term. JavaScript compares the entered text with each destination card's data-search value.
- Category filter: Visitors can narrow the displayed cards by travel style, such as city breaks or beach escapes, using data-category values.
- Combined filtering: A destination must match both the search text and the selected category to remain visible.
- Results counter: The page displays the number of matching destinations.
- No-results feedback: An explanatory message appears when the selected search and filter combination returns no destinations.
- Search from Home: The page reads the URL search parameter produced by the Home page's destination form.
- Photo lightbox: Clicking a destination photograph can open a larger image with its caption using the built-in HTML <dialog> element. The lightbox includes a close control and supports closing by clicking its backdrop.
I added descriptive search data to the destination cards so the filtering can happen without repeatedly writing separate search conditions for Paris, Dubai and Zanzibar.

Destination detail links: The intended experience is for visitors to learn more about each destination before requesting a quote. The archived Part 3 copy still sends some Explore more links directly to the quotation page; this should be checked against the latest GitHub version. I have not documented dedicated destination-detail pages as completed without verifying them.
3.4 Hotels and Accommodation — CODE_STRUCTURE/hotel.html
This page gives visitors accommodation inspiration alongside the destination information. In the supplied Part 3 export, the main categories include City accommodation and Relaxing retreats, presented in image cards.

The changes to the Hotels page focused on:
- Keeping accommodation information separate from destination discovery.
- Reusing the card styles so the pages look like parts of the same website.
- Improving headings, explanatory descriptions, travel imagery and spacing.
- Linking visitors to the travel enquiry page when they want to ask for accommodation information.
- Keeping images flexible and arranging cards differently on smaller devices.
- Reviewing the Hotels HTML and related CSS during the later refinement commits.
No actual room inventory, confirmed hotel reservation or live accommodation pricing is connected to this project.
3.5 Request a Quote — CODE_STRUCTURE/REQUEST_QUOTE.html
I created this as a dedicated travel enquiry form, separate from the general Contact page. Someone planning a holiday should be able to provide more structured information about the trip they have in mind.

Fields shown in the more recent HTML version
Form field	Purpose
Full name	Identifies the person making the enquiry
Email address	Provides a way to reply
Phone number	Alternative contact detail
Destination	Selects Paris, Dubai, Zanzibar or another destination
Other destination	Appears when a visitor wants a place outside the listed options
Departure date	Records the intended start of travel
Return date	Records the intended end of travel
Number of travellers	Indicates the size of the travelling group
Accommodation preference	Hotel, resort or no preference
Additional travel requirements	Allows activities, room preferences and other needs to be explained
Consent checkbox	Requires agreement before processing the enquiry


Validation and feedback design
- Used input types and attributes appropriate to the information being collected: text, email, tel, date, number, select, textarea and checkbox.
- Included required-field indicators and error-message elements near the corresponding controls.
- Added length, numerical and format constraints where appropriate.
- Used JavaScript in the archived build to check required fields, email formatting and the relationship between departure and return dates.
- Planned for departure dates to be today or later and return dates not to precede departures.
- Added a feedback area to communicate validation and submission status.
- Included a travel enquiry summary area in the newer HTML version.
- Clearly stated that completing the form does not confirm a price, booking or availability.
Important distinction between project versions: The earlier Part 3 archive prepared an email through the visitor's mail application (mailto:). The later HTML supplied for this page uses a FormSubmit AJAX action, but the address is still YOUR_EMAIL@example.com. That placeholder must be replaced with a real, verified recipient address, and the corresponding JavaScript must be tested before claiming successful automatic delivery. The code should not report a message as sent unless a real submission succeeds.
3.6 Contact Page — CODE_STRUCTURE/contact.html
I kept the Contact page separate because a general question or website-feedback message does not need all the fields used for a holiday quotation.

Content and layout
- Introduced the purpose of the page using a short, welcoming heading.
- Added information explaining when visitors should use the general Contact form and when they should use Request a Quote.
- Included a link from the contact information area to the dedicated quote page.
- Used a two-column design to place useful information next to the message form.
- Kept the location at South Africa rather than publishing an unverified office street address.
Contact form fields and logic

The more recent Contact page has full name, email, optional phone number, message type, a written message and a required consent checkbox. Message types distinguish general enquiries, travel information requests and website feedback. Error-message elements are provided for the important fields, and a status area can report validation or submission results.

Map integration

The earlier Part 3 export includes an interactive Leaflet map using OpenStreetMap tiles. Its initial view is centred broadly on South Africa. The map is a geographic reference, not a claim that the business has a verified physical office at the map marker. The map requires an internet connection to retrieve map resources. Because the later Contact HTML shared during refinements differs from the archive, the map's presence in the final page should be verified before submission.

Form delivery status: As with Request a Quote, the later Contact HTML uses a FormSubmit URL containing YOUR_EMAIL@example.com. A verified email address and a successful live test are still required before the README can truthfully describe the form as sending emails automatically.
4. Technologies and Development Tools
Technology or tool	How I used it
HTML5	Created the page structure, content, links, headings, forms, image elements and semantic sections
CSS3	Styled colours, layout, typography, buttons, cards, navigation, forms and responsive behaviour
JavaScript (vanilla)	Added menu interaction, cross-page destination search, filtering, lightbox behaviour and form-validation logic
CSS Flexbox	Aligned navigation, headers, buttons and horizontal content
CSS Grid	Organised cards, content columns and form layouts
Google Fonts	Used Montserrat and Playfair Display in the supplied Part 3 CSS export
Leaflet 1.9.4	Provided the interactive map in the archived Part 3 Contact page
OpenStreetMap	Supplied geographic map tiles and attribution for the map
FormSubmit	Appears as the planned AJAX form-delivery service in the later HTML; final configuration remains outstanding
Visual Studio Code	Edited, organised and reviewed the project files
Git	Recorded development changes locally
GitHub / GitHub Classroom	Stored and submitted the project and its commit history
Browser developer tools / manual checks	Supported inspection of page presentation and functionality
ChatGPT	Assisted with code development, documentation, comment revision and troubleshooting as declared below


The website is a static front-end project: it does not require a local Node.js server, database or build process in the supplied version. External map resources and form services may require internet access.
5. Project Folder Structure
The main files in the supplied Part 3 export are organised as follows:
Bee_Free_Travel_Agency_Part_3/
|
|-- index.html
|-- robots.txt
|-- README.md
|-- DEPLOYMENT_CHECKLIST.md
|-- .vscode/
|   `-- settings.json
|
|-- CSS_STYLE/
|   |-- STYLES.css
|   `-- JS_main.js
|
`-- CODE_STRUCTURE/
    |-- Home.html
    |-- about.html
    |-- DESTINATION.html
    |-- hotel.html
    |-- REQUEST_QUOTE.html
    |-- contact.html
    |-- image_check_report.txt
    |
    `-- IMAGES/
        |-- BEE_FREE_LOGO.jpeg
        |-- Home.jpg
        |-- Home2.jpg
        |-- Hotel.jpg
        |-- Hotel2.jpg
        |-- Paris_destination.jpg
        |-- Dubai_destination.jpg
        `-- zanzibar_destination.jpg
Purpose of the main files
- index.html provides the root entry point. In the archived export, it directs visitors to CODE_STRUCTURE/Home.html.
- CSS_STYLE/STYLES.css contains the shared website design rules.
- CSS_STYLE/JS_main.js contains shared JavaScript and page-specific interactions.
- CODE_STRUCTURE/*.html contains the six main website pages.
- CODE_STRUCTURE/IMAGES/ stores the logo and travel imagery using their original filenames.
- robots.txt contains basic crawler instructions.
- DEPLOYMENT_CHECKLIST.md records checks to complete before the final public release.
- README.md explains the project, changes, testing and references.
Paths and filename capitalisation matter when the project is deployed to a case-sensitive hosting service. For example, Home.html, DESTINATION.html and JS_main.js should be linked using those exact names.
6. Visual Design and Colour Decisions
The Bee Free design aims to feel calm, organised and travel-inspired. I wanted the photographs to attract attention, but I also wanted the text and navigation to remain easy to read.
6.1 Colours
I used a combination of the following colours and roles:
Colour	Use in the website	Design reason
Navy blue	Main header, footer, strong text and dark image overlays	Gives the website structure and a professional appearance
Green / teal green	Navigation highlights, buttons, small headings and interactive accents	Connects with Bee Free's travel and exploration theme
White	Main backgrounds, content cards and form panels	Keeps content clean, readable and separated
Light green	Softer feature sections and backgrounds	Adds warmth without competing with the travel photography
Light blue-grey / neutral grey	Secondary sections, borders and supporting text	Helps establish visual hierarchy
Gold accents	Emphasis and calls to action in the later HTML design	Draws attention to important next steps
Red	Validation feedback and invalid field states	Helps visitors identify information that needs correcting


For traceability, the archived Part 3 stylesheet contained values such as navy #102A43, green #16836E, darker green #106653, pale green #E9F4F1 and validation red #B22C39. I later rewrote the CSS (a visible GitHub commit states that I recoded it because I was not happy with its appearance), so these are reference values from the archived design, not a claim that every value is identical in the latest pushed file. The final CSS file is the source of truth for exact current colour values.
6.2 Typography
The supplied stylesheet uses Montserrat for general interface text and Playfair Display for larger headings, with web-safe fallback fonts. I used this contrast to keep body text practical to read while giving the main headings more character.
6.3 Layout and imagery
- Kept a consistent header and footer across all six pages.
- Used a hero image and overlay to create a clear visual focus on the Home page.
- Used cards with rounded corners, light borders and subtle shadows for destinations and accommodation.
- Gave headings, paragraphs and buttons consistent spacing.
- Used CSS Grid and Flexbox rather than fixed-position layouts for main page structures.
- Kept imagery cropped consistently using object-fit: cover where appropriate.
- Used a split section where an image and explanatory text benefit from appearing alongside each other.
- Made forms easy to scan by grouping related inputs and providing adequate space between fields.
- Made navigation and card layouts adapt to different screen widths.
6.4 Responsive design
The archived CSS included breakpoints at approximately 850px and 600px. At smaller widths, multiple-column layouts move towards single-column layouts, the full navigation changes to a mobile menu, and buttons and form controls become easier to use within the available screen space. The latest rewritten CSS should be checked for its final breakpoint values.
6.5 Image updates and optimisation
I retained the original image filenames so the HTML references would remain easy to follow. Comparing the supplied Part 2 archive with the supplied Part 3 export shows that the image files were replaced or re-encoded and that most travel photographs became substantially smaller.
Image	Part 2 approx.	Supplied Part 3 approx.	Role
BEE_FREE_LOGO.jpeg	80 KiB	81 KiB	Logo
Home.jpg	6,056 KiB	467 KiB	Home hero
Home2.jpg	2,089 KiB	418 KiB	Supporting image
Hotel.jpg	2,875 KiB	309 KiB	Accommodation
Hotel2.jpg	1,520 KiB	339 KiB	Accommodation
Paris_destination.jpg	3,642 KiB	367 KiB	Paris destination
Dubai_destination.jpg	3,177 KiB	430 KiB	Dubai destination
zanzibar_destination.jpg	3,201 KiB	631 KiB	Zanzibar destination


Across these eight files, the archive size decreased from about 23.18 MB to 3.11 MB, an approximate 86.6% reduction. This comparison is based on the two uploaded project archives, rather than a fresh measurement of the latest GitHub commit. Smaller images can improve transfer times, although real-world page performance still needs browser testing.
7. HTML and CSS Improvements from Part 2
Part 2 established the main visual foundation. I carried that work into Part 3 and made additional adjustments as I introduced functionality.
7.1 HTML structure
I organised page content using elements such as header, nav, main, section, article, footer, form, label and headings. Where appropriate, I added aria-label, aria-current, alt, loading="lazy" and other attributes to help browsers and assistive technologies interpret the content.
7.2 Shared styling
Instead of repeating inline styles in each HTML document, I linked all pages to CSS_STYLE/STYLES.css. This lets me change colours, card styling, navigation, form layout and responsive behaviour in one place.
7.3 Interactive styling
I used hover and focus states to help visitors recognise elements they can interact with. Buttons, navigation links and form controls should remain usable through keyboard interaction as well as a mouse or touchscreen.
7.4 Final code readability
During the later revisions, I improved comments in the About, Request a Quote and Contact HTML files. Earlier comments explained nearly every tag with phrases such as 'I begin' and 'I finish'. I replaced these with fewer, more natural explanations that describe why I chose a layout or how a group of fields works. I also removed decorative comment separators. This makes the comments more useful for future maintenance without intentionally changing the HTML functionality.
8. JavaScript Implementation for Part 3
The Part 3 JavaScript is stored in CSS_STYLE/JS_main.js. I grouped the behaviour into related sections and checked for the relevant page elements before attaching interactions.
8.1 Mobile navigation
JavaScript listens for the mobile menu button, changes whether the navigation is shown, and updates aria-expanded to communicate its state. This allows a compact navigation layout on smaller screens.
8.2 Search between Home and Destinations
The Home page can pass a selected destination to DESTINATION.html through a URL search parameter. On the Destinations page, JavaScript reads that parameter and uses it as the initial search text.
8.3 Dynamic destination search and filtering
The script reads destination-card data attributes, compares them with the visitor's search term and travel-style selection, and hides cards that do not match. The results count changes automatically, and a message appears when no card matches.
8.4 Photo lightbox
The photo lightbox uses a native HTML dialog. JavaScript places the selected image and caption into the dialog and opens it; a close button and backdrop-click handler provide ways to dismiss it. This gives visitors a larger view of the travel imagery without taking them away from the page.
8.5 Shared form-validation helpers
The archived JavaScript has reusable functions for displaying field errors, marking invalid inputs and checking a group of required fields. This avoids having to write a completely separate validation system for the quote and contact forms.
8.6 Date and traveller checks
The archived travel form script checks dates and traveller counts. The later quotation HTML adds a more complete set of fields, including optional destination entry, accommodation preference and consent. The field IDs and validation logic must match the latest HTML and JavaScript when final testing is performed.
8.7 Map integration
The archived Contact page uses Leaflet to initialise a map, load OpenStreetMap tiles and show a general South Africa marker. This is an interactive geographical feature, not a verified agency address.
8.8 No invented features
The assignment brief discusses animations, AJAX submission, search/sort functionality, galleries and maps as examples or requirements. I only describe the specific features supported by the supplied source. I have not claimed that live hotel booking, payment, authenticated user accounts, a database, production email delivery, full destination sorting, off-page backlinks or dedicated destination-detail pages are completed unless they can be verified in the latest project.
9. Search Engine Optimisation (SEO)
I extended the website beyond visual design by considering how search engines and users understand the content.
9.1 On-page SEO work
- Descriptive page titles: Separate titles identify Home, About, Destinations, Hotels, Request a Quote and Contact.
- Meta descriptions: The pages include brief descriptions of their subject and purpose.
- Keywords: The archived Part 3 HTML contains meta name="keywords" on several pages. I understand that this tag is not a substitute for useful page content or effective modern SEO.
- Headings: Main headings identify each page, with smaller headings organising supporting content.
- Image alternative text: Important images have descriptive alt attributes rather than relying on filenames alone.
- Internal linking: Navigation, destination cards, hotel content and calls to action connect related pages.
- Responsive presentation: The layout is intended to work on mobile screens as well as larger displays.
- Logical filenames and paths: Pages and images are stored in predictable folders, with consistent relative links.
- Crawler guidance: A robots.txt file is provided in the project root.
- Root entry point: index.html links or redirects visitors to the Home page in the supplied export.
9.2 SEO work still requiring a live website
- The archived robots.txt intentionally does not contain a sitemap address because a public URL had not been confirmed.
- A valid sitemap.xml should be generated after deployment using the actual public URLs, rather than invented links.
- A production canonical-URL strategy, off-page backlinks, social media promotion and local business listings should only be described as completed if evidence exists.
- Mobile performance, broken links and indexing behaviour need to be checked on the deployed version.
10. Form Functionality and Validation
The assignment requires separate enquiry and general contact functions. My website uses REQUEST_QUOTE.html as the travel enquiry page and contact.html as the general message page.
10.1 Travel enquiries
The travel form is intended to collect enough information to understand a visitor's trip request. Input rules are used to prevent obvious omissions, and JavaScript provides more detailed checks and feedback where implemented.
10.2 General messages
The Contact form focuses on contact details, the type of enquiry and a written message. This prevents users from having to complete travel dates or accommodation fields when they simply want to ask a question.
10.3 Why I added validation
I used required-field checks, email input types, length restrictions, date checks, error-message containers and consent controls to improve the accuracy of submitted information. I also included feedback regions with accessibility attributes such as role="status" and aria-live in the newer form markup.
10.4 Submission mechanism and limitations
There are two different form approaches in the supplied development history:
1. Earlier Part 3 export: A mailto: workflow opens the visitor's email application with prepared information. It does not send automatically.
2. Later HTML revisions: The forms contain https://formsubmit.co/ajax/YOUR_EMAIL@example.com. This is a placeholder endpoint, not a verified working recipient address. AJAX delivery cannot be considered complete until it is configured and successfully tested with matching JavaScript.
This README deliberately does not say that enquiry emails are delivered automatically or that the form sends booking confirmations. A form must only display a successful-send message after its submission service confirms success. Actual booking prices and availability require a separate system.
11. User Experience and Accessibility
I wanted visitors to understand where they are, what they can click and what information is required.

The accessibility and user-experience decisions include:
- Clear navigation with an indication of the currently selected page.
- A mobile menu control with an accessible expanded state.
- Skip-to-content links in the page templates.
- Descriptive labels for form controls and error areas near the relevant fields.
- Image alt text and descriptive labels for interactive photographs.
- Feedback text that tells visitors what to correct instead of only changing colours.
- Responsive spacing, readable typography and controls designed for different screen widths.
- Semantic heading levels and content groupings.
- Lazy loading on supporting images where appropriate.
- Clear language that distinguishes a travel enquiry from an actual booking.
These measures improve usability, but they are not a formal WCAG audit. Keyboard testing, screen-reader checks and colour-contrast checks remain useful final verification tasks.
12. Development Process Across Parts 1, 2 and 3
Part 1: Planning and initial structure
I identified the travel agency's purpose, the target audience, the main pages and the content needed to explain destinations, accommodation and ways to contact the agency. I established the initial website structure and navigation.
Part 2: HTML and CSS development
I refined the HTML layout and styling, introduced consistent colours and typography, organised images into a dedicated folder, improved cards and spacing, and focused on responsive design. The previous README documented this stage and included screenshots of the six website pages.
Part 3: Functionality, SEO and continued refinement
I moved beyond static presentation by adding JavaScript and new ways for visitors to interact with the site. I also updated the page metadata, form structure and development documentation. After reviewing the appearance, I made another CSS revision because I was not satisfied with the earlier styling. My later work also included improving explanatory code comments, preserving meaningful commit history and checking automated feedback from SonarCloud.
Handling feedback from Part 2
The Part 3 instructions say that corrections arising from lecturer feedback on Part 2 must be described in the changelog. I can document the changes I made, but the exact written lecturer feedback was not present in the supplied project files or screenshots. I have therefore not invented quotations or attributed specific complaints to the lecturer. The relevant changes are recorded below, and the actual feedback can be connected to them if available.
13. Detailed Development Changelog
This section is deliberately detailed because Part 3 requires a well-documented record of new changes and updates made after Part 2. It describes what changed, where it changed and why I made the change.
13.1 Foundation and Part 2 work carried forward
Area	Work recorded	Reason
Initial website structure	Built the six core page files and linked them through navigation	Provide a complete small business website rather than a single landing page
Branding	Added the Bee Free logo and agency name	Establish the identity of the business
Destinations	Added Paris, Dubai and Zanzibar content and travel images	Give users realistic examples of travel inspiration
Accommodation	Added hotel-related images and descriptions	Support travel planning beyond selecting a destination
Quote and Contact	Created separate pages for trip enquiries and general communication	Keep the two types of visitor requests clear
Shared CSS	Moved the visual styling into an external stylesheet	Maintain consistency across the pages
Responsive layout	Introduced layout changes for different screen sizes	Make content accessible on desktop, tablet and mobile devices
GitHub organisation	Used a dedicated repository and project folders	Make source files easier to track and submit


13.2 Part 3 functionality and content changes
Area / file	Detailed change	Purpose / result
CSS_STYLE/JS_main.js	Added JavaScript to control the mobile navigation and its expanded state	Make the navigation usable on smaller screens
Home.html + JavaScript	Added a destination-selection interaction that opens DESTINATION.html with a search parameter	Connect the Home page's discovery process to the destination results
DESTINATION.html	Added a text search field for destinations	Let visitors find a destination by name or related term
DESTINATION.html	Added travel-style filtering based on destination data attributes	Narrow results to the selected type of holiday
DESTINATION.html	Combined search text and category matching	Ensure the results respond to both visitor selections
DESTINATION.html	Added a dynamic match count and no-results message	Give users immediate feedback when filtering
DESTINATION.html + JavaScript	Added photo enlargement with an HTML dialog and captions	Make destination images easier to explore
Home.html, DESTINATION.html, hotel.html	Refined the way images and travel cards are displayed	Make the travel sections visually consistent
hotel.html	Reviewed and coded the accommodation section, adding clear content and links to enquiries	Make hotels a useful part of the overall visitor journey
about.html	Improved the agency story and values content, with a split image-and-text layout	Explain the business purpose more clearly
REQUEST_QUOTE.html	Developed a dedicated trip enquiry experience	Collect travel preferences separately from general contact messages
REQUEST_QUOTE.html	Added or expanded name, contact, destination, date, traveller, accommodation, notes and consent controls in the later HTML	Collect the information needed to understand a planned trip
REQUEST_QUOTE.html	Included an additional destination input for choices outside the listed locations	Avoid limiting visitors to only three destinations
JavaScript / forms	Added shared field-error helpers and validation logic in the archived build	Provide more useful feedback for missing or invalid inputs
Travel form dates	Added logic for past departure dates and return dates preceding departure	Reduce obviously invalid travel-date enquiries
Form markup	Added dedicated error elements, status regions and an enquiry summary in the newer HTML	Explain problems and provide confirmation of the information collected
contact.html	Kept a separate message-type selector and written message field	Distinguish general questions, travel information and website feedback
contact.html	Added a link directing holiday enquiries to the quote page	Help visitors choose the appropriate form
contact.html + JavaScript	Integrated a general South Africa map using Leaflet in the archived build	Add a location-based interactive element without inventing an office address
Form delivery	Explored mail-client preparation and later a FormSubmit AJAX action	Work towards a clearer submission process; final email delivery still requires configuration and testing
Page <head> sections	Added page-specific titles, descriptions and other metadata	Improve the way pages are described to search engines
Images	Improved alternative text and used lazy loading where suitable	Help with accessibility and content loading
All main pages	Kept internal links, navigation and calls to action connected	Support movement through the website
index.html	Added a usable root entry point linked to the actual Home file	Prepare the folder structure for static hosting
robots.txt	Added basic crawler instructions	Provide a foundation for on-page SEO deployment
DEPLOYMENT_CHECKLIST.md	Added a checklist for functionality, forms, hosting and final verification	Avoid treating an uploaded repository as proof of a fully tested public website
Image assets	Replaced or optimised the supplied travel imagery while retaining filenames	Reduce image size and preserve page references


13.3 Visual design and CSS refinement
I made multiple visual adjustments as the project developed. My main design goals were consistency, readability and a more professional travel-agency appearance.
Visual area	What I changed or reviewed	Why
Header	Logo placement, navigation spacing and alignment	Keep the business identity visible and links easy to use
Main colour palette	Navy, green, white and light supporting backgrounds, with gold emphasis in the later design	Balance a professional appearance with a welcoming travel theme
Hero area	Large travel image, darker overlay, readable text and prominent buttons	Create a strong first impression without losing text contrast
Typography	Display headings, readable body fonts and clearer visual hierarchy	Help users distinguish main information from supporting text
Cards	Image sizing, corner radius, spacing, borders and light shadows	Make destination and hotel information easier to scan
Page sections	Padding, width constraints and separation between content areas	Prevent crowded layouts
Buttons	Colour, spacing and hover/focus feedback	Make primary actions recognisable
Forms	Field spacing, labels, input borders and feedback-message presentation	Make longer forms less difficult to complete
Mobile navigation	Compact menu behaviour and small-screen layout	Avoid overcrowded desktop-style navigation on phones
Responsive grids	Rearranged cards, text/image sections and fields at narrower widths	Reduce horizontal overflow and improve readability
Images	Re-encoded travel photographs to smaller file sizes in the supplied archive	Reduce the amount of image data downloaded
Footer	Consistent information and links across pages	Make important navigation available at the end of each page
CSS rewrite	Revisited and recoded the stylesheet because I was not satisfied with the earlier appearance	Improve the overall visual quality; reflected in the latest visible GitHub commit message


13.4 Code comments and maintainability
During the later editing sessions, I changed the commenting style used in the HTML files. Instead of adding a comment before and after nearly every tag, I kept comments at the places where an explanation helps someone understand the purpose of a feature. I wrote these explanations in a more natural first-person voice and removed unnecessary decorative separators. The intention was to improve readability without changing the underlying HTML structure or behaviour.
13.5 GitHub commit history visible on 7 November 2026
The screenshot of my Part 3 GitHub repository shows 6 commits on main. The following descriptions are visible in the evidence shared during development; this table is not an invented reconstruction of the complete Git log.
Commit message / visible evidence	Development significance
First commit with updated images and initial commit	Initial tracked project files and image assets
Update Bee Free Travel Agency Part 3 website	README / website update shown in repository file history
hotel section coded	Work on the hotel section; the associated Actions screenshot displayed short commit aa597d1
coded the Java, CSS and request pages	Further work in the page and shared-code folders
recoded css because i was not happy with how it looked	A deliberate stylesheet revision; visible on the repository screenshot as short commit c8305ed


Note: The screenshot shows six commits overall but does not display every message in the full commit-history page. I have not made up the unseen commit description. GitHub's Commits page remains the authoritative record for the exact order, timestamps and complete commit IDs.
13.6 Automated code-quality feedback
A GitHub Actions run for hotel section coded reported SonarQube Cloud / SonarCloud: Quality Gate failed. The visible reason was 42.3% duplication on new code against a maximum threshold of 3%. The subsequent SonarCloud screenshot identified significant duplicated sections in about.html and hotel.html, with a smaller duplicated portion in Home.html.

This warning relates to automated code quality, not proof that Git failed to upload the files. It should be addressed through a review of the actual duplicated blocks and appropriate code reuse or project configuration. I have not marked this quality gate as passed without evidence of a successful later analysis.
14. Testing and Quality Assurance
My earlier Part 2 README recorded visual, navigation and responsive checks. Part 3 added interactive behaviours that require additional testing, so I separated implemented features from confirmed results.
14.1 Final Part 3 testing checklist
Test	Expected result	Current evidence / status
Open root index.html	Visitor reaches the Home page	Root forwarding exists in supplied Part 3 archive; verify on deployed site
Open all six pages	Pages and links load without errors	Page files exist; final live test needed
Navigation links	Each link opens its intended page	Links appear in HTML; live click-through test needed
Mobile menu	Opens, closes and updates its accessible state	Handler exists in archived JavaScript; retest with latest HTML IDs
Home destination search	Selected place is passed to Destinations	Implemented in archived JavaScript; browser test needed
Destination text search	Matching cards remain visible	Implemented in archived JavaScript; browser test needed
Travel-style filter	Cards update to match the selected category	Implemented in archived JavaScript; browser test needed
No-results state	Clear message appears when zero items match	Implemented in archived JavaScript; browser test needed
Image lightbox	Selected photograph opens and can be closed	Implemented in archived JavaScript; browser test needed
Hotel images and links	Assets display and enquiry links work	Files and links present; browser test needed
Quote form required fields	Blank or invalid inputs show useful errors	Validation exists in project versions; confirm latest field IDs
Quote form date checks	Past departure or invalid return dates are rejected	Present in archived JavaScript; retest in latest version
Other destination field	Appears when Other is selected	Later HTML includes hidden field; confirm JavaScript toggling
Quote form consent	Submission requires agreement	Later HTML marks consent required; verify client-side handling
Contact form validation	Missing / invalid details are explained	Error elements present; test current script
Form submission	Valid enquiry reaches the intended recipient	Not verified; sample FormSubmit address must be configured
Map display	Map tiles and marker load, with accurate disclaimer	Present in archived build; verify latest page and internet access
Desktop layout	Header, cards and forms fit large screens	Re-test after latest CSS rewrite
Tablet layout	Content rearranges without overlap	Re-test after latest CSS rewrite
Mobile layout	No horizontal overflow; controls remain usable	Re-test after latest CSS rewrite
Keyboard access	Links, buttons, dialogs and forms can be operated	Requires keyboard-focused testing
Console / network errors	No unexpected syntax or missing-asset failures	Requires latest-code browser checks
Automated code quality	Quality gate meets configured threshold	Previously failed; no passing rerun has been supplied
Public hosting	Deployed pages and assets load via a live URL	Public deployment URL not yet verified


14.2 Problems and corrections encountered during development
- GitHub authentication and pushing: I had difficulty pushing because GitHub credentials initially used a different account. Once the correct repository access was restored, I continued committing and pushing changes.
- Repository history rules: A force-push attempt to replace the initial commit was rejected by repository rules. I retained normal commit history instead of overwriting the existing branch.
- CSS syntax warning: VS Code reported a { expected error in CSS_STYLE/STYLES.css near line 3 during editing. This identified a stylesheet issue that needed checking; a later screenshot shows a CSS rewrite, but the final validator result was not supplied.
- SonarCloud duplication: The automated quality check flagged repeated code, especially in About and Hotels. This remains an item to verify rather than something I can truthfully call resolved.
- Form delivery differences: Development moved from a mail-client workflow towards an AJAX endpoint in later HTML, but the real recipient address and successful automatic sending still need confirmation.
- Comments: I reduced excessive comments and kept explanations at important code sections without intentionally changing the page elements.
14.3 What counts as a passed test
A test should only be marked Passed after it has been performed on the latest saved files and, where relevant, on the deployed public website. Showing that HTML, CSS or JavaScript exists in a repository is not the same as demonstrating that a complete user interaction works. This distinction is particularly important for form delivery, JavaScript element IDs and automated quality gates.
15. Project Screenshots and Visual Evidence
Screenshots help demonstrate what I built and how the pages look in a browser. My earlier README included screenshots for all six pages, and I have kept those links below as previously documented visual evidence.
Before final submission: Recheck these images against the latest Part 3 design. Replace any screenshot that still shows Part 2 styling or a feature that has since changed. Add new screenshots of search/filtering, the lightbox, validation and responsive views if they are needed to demonstrate the functionality.

Home Page

About Us Page

Destinations Page

Hotels Page

Request a Quote Page

Contact Page

16. GitHub Repository and Version Control
Part 3 GitHub repository:
https://github.com/EMGPSD/wede5020-2026-part-3-st10503795

Part 2 GitHub repository (previous stage):
https://github.com/EMGPSD/wede5020-2026-part-2-st10503795

GitHub allowed me to track project changes and show how the website progressed, rather than uploading only a final collection of files. I used descriptive commits relating to image updates, page development, JavaScript/CSS work, documentation and a later stylesheet revision.

The visible repository screenshot from 7 November 2026 showed 6 commits on main. The commit history on GitHub should be used to confirm the full list and sequence when submitting.

Useful Git commands
git status
git add -A
git commit -m "Describe the actual change made"
git push origin main
A push transfers commits that already exist locally; repeating git commit without new changes does not create another commit. I avoided force-pushing after the repository rejected a history rewrite.
17. How to Run the Website Locally
1. Download or clone the Part 3 repository.
2. Open the project folder in Visual Studio Code.
3. Open the root index.html, or use a static development server such as the VS Code Live Server extension.
4. If opening directly from the CODE_STRUCTURE folder, start with Home.html.
5. Test the navigation, Destinations page, Hotels page, forms and responsive menu.
6. Keep an internet connection for any features that load external resources, including the map and web fonts.
7. For form-delivery testing, configure a genuine, verified form recipient and use the actual current JavaScript implementation; do not rely on the placeholder email.
Example local structure: index.html is in the project root and the six content pages are in CODE_STRUCTURE/. The website uses relative file paths, so preserving the directory structure is important.
18. Deployment and Publishing
Part 3 requires the website to be published using a free hosting service. Suitable options described in the assignment include Netlify and GitHub Pages.

The supplied project includes index.html and robots.txt, which are a useful foundation for static hosting. Before calling deployment complete, I need to:
1. Confirm that the host opens the correct Home page from the repository root.
2. Check all page links, asset paths and filename capitalisation.
3. Test the mobile menu, destination search/filter, lightbox and map on the public site.
4. Test the forms with a real configured submission service or clearly state their limitations.
5. Add the actual public website URL to the Project Information section.
6. Generate a correct sitemap.xml using public URLs and add its location to robots.txt where appropriate.
7. Capture final screenshots of the deployed version.
8. Record the deployment date and outcome in the testing section.
Deployment status in this README: The current public URL has not been verified from the information supplied. I have intentionally not invented one.
19. Known Limitations and Future Improvements
The website is a useful demonstration of front-end travel browsing and enquiry design, but it is not a fully operational travel-booking platform.

Current limitations or items requiring confirmation
- No live flight, hotel-inventory, fare or payment integration.
- Form email delivery has not been verified with a real recipient and successful AJAX response.
- The original map is a general South Africa reference, not an actual agency office address.
- Destination Explore more links in the archived build do not yet demonstrate separate destination-detail pages.
- A full destination sorting feature is not demonstrated in the archived code; implemented search and filtering should not be confused with sorting.
- Live public hosting, canonical URLs and a final sitemap need confirmation.
- SonarCloud previously reported excessive duplicated code; a successful later quality analysis has not been provided.
- Final compatibility and accessibility tests on the latest CSS/HTML/JavaScript files are still required.
Possible future work
- Build detailed pages for each travel destination, with descriptions, activities and travel advice.
- Complete and test server-backed form delivery with appropriate spam and privacy protections.
- Refine duplicated HTML through reusable templates or components where appropriate for the project's allowed tools.
- Add clearer sorting by destination or travel style if needed.
- Introduce genuine booking integrations only when suitable services and business arrangements are available.
- Improve performance through additional image-delivery, caching and loading checks.
- Conduct systematic keyboard, screen-reader, browser and mobile-device testing.
- Extend the destination and accommodation information with accurate, credited content.
20. AI Usage and Academic Integrity Declaration
I used ChatGPT (OpenAI) as a development-support tool during this project. Its assistance included helping me understand HTML, CSS and JavaScript, drafting and refining sections of code, organising page content, improving code comments, troubleshooting Git and CSS issues, and preparing documentation. AI assistance extended beyond summarising research notes, so I have updated the declaration from my earlier Part 2 README to reflect that accurately.

I reviewed the supplied outputs, requested adjustments to the design and content, and worked on the project in Visual Studio Code. The repository records the files and changes submitted for assessment. I remain responsible for understanding the code, testing the final website and making accurate claims about what the application does.

External websites, images, fonts, JavaScript libraries and development resources are acknowledged below. Examples from other travel websites were used for inspiration and comparison, not as a claim that their content or visual designs are my own work.
21. References
The following list updates the original references and adds resources relevant to the Part 3 implementation. The style follows a simple Harvard Anglia-style author–date format. The original Part 2 references have been retained; new technical sources are included where the supplied code explicitly refers to or uses them.
21.1 Course material and design research
- Interaction Design Foundation (2026) User-centered design (UCD). Available at: https://ixdf.org/literature/topics/user-centered-design (Accessed: 31 August 2026).
- The Independent Institute of Education (IIE) (2026) MyStudies: Web Development course learning material. Available at: https://mystudies.iie.edu.za/d2l/le/lessons/86314/topics/6053544 (Accessed: 31 August 2026).
21.2 Travel-industry research and design inspiration
- Flight Centre (2026) Flight Centre South Africa. Available at: https://www.flightcentre.co.za/ (Accessed: 31 August 2026).
- Pentravel (2026) Pentravel. Available at: https://www.pentravel.co.za/ (Accessed: 31 August 2026).
- Sure Travel (2026) Sure Travel. Available at: https://www.suretravel.co.za/ (Accessed: 31 August 2026).
These websites were reviewed as examples of navigation, travel categories, visual hierarchy, page layout and calls to action. My Bee Free design and business scenario are documented separately from those sources.
21.3 Images and typography
- Google (2026) Google Fonts: Montserrat and Playfair Display. Available at: https://fonts.google.com/ (Referenced in the supplied stylesheet).
- Unsplash (2026) Travel photography. Available at: https://unsplash.com/s/photos/travel (Accessed: 31 August 2026).
The supplied project contains eight image assets. Individual photographer and licence details should be added if they are required for a specific photograph and can be verified from its original source. The repository image filenames alone do not identify a photographer.
21.4 JavaScript, web standards and map implementation
- Leaflet (2026) Leaflet Quick Start Guide. Available at: https://leafletjs.com/examples/quick-start/ (Referenced in the Part 3 JavaScript).
- MDN Web Docs (2026) Document Object Model (DOM). Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Reference for browser scripting and DOM interaction).
- MDN Web Docs (2026) HTMLDialogElement: showModal() method. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal (Referenced by the lightbox code).
- OpenStreetMap contributors (2026) OpenStreetMap. Available at: https://www.openstreetmap.org/ (Map tile and attribution source in the archived Contact page).
21.5 Forms, publishing and development tools
- FormSubmit (2026) FormSubmit. Available at: https://formsubmit.co/ (Submission service URL included in the later HTML; recipient setup is incomplete).
- GitHub (2026) GitHub. Available at: https://github.com/ (Version control and project repository hosting).
- Microsoft (2026) Visual Studio Code. Available at: https://code.visualstudio.com/ (Website editing environment).
21.6 AI assistance
- OpenAI (2026) ChatGPT. Available at: https://chatgpt.com/ (Development support, code drafting, research summaries, comment improvements and documentation).
22. Conclusion and Reflection
Bee Free Travel Agency has developed from an initial small business website concept into a more interactive Part 3 project. The work combines the HTML and CSS foundation of the previous stages with JavaScript interactions, structured forms, SEO improvements, travel imagery and continued design refinement.

One of the main things I learned was that a website can look complete before all of its behaviours have been fully tested. Adding a search field or a form is only one part of the work. The JavaScript has to connect to the correct HTML elements, error messages must help visitors understand what went wrong, and any feature that uses an external service must be tested properly. The GitHub and SonarCloud work also showed me the importance of maintaining readable code and meaningful commits.

I made changes because I wanted the site to be more consistent and useful, not simply because I wanted to add more code. In particular, I spent time on the colours, page layout, travel cards, responsive behaviour and explanatory comments so that the project would be easier both to use and to maintain.

The repository documents the Part 3 development, including the subsequent CSS rewrite. The remaining final steps are to verify the latest functionality, record any actual lecturer-feedback corrections, confirm deployment and make sure all testing evidence reflects the version that is submitted.
