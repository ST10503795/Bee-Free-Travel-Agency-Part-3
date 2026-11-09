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
| Public website URL |https://st10503795.github.io/Bee-Free-Travel-Agency-Part-3/
| README updated | 7 November 2026 |
|  Public publishing repository    |    ST10503795/Bee-Free-Travel-Agency-Part-3
|  Official Part 3 submission      |   EMGPSD/wede5020-2026-part-3-st10503795                        
|  Previous Part 2 repository      |   EMGPSD/wede5020-2026-part-2-st10503795

README updated                      9 November 2026
1. Project Overview
I developed the Bee Free Travel Agency website as my Web Development
project. I wanted to create a welcoming, professional and easy-to-use
website for a small travel agency. The website allows visitors to learn
about the agency, explore travel destinations, view accommodation
inspiration and send travel or general enquiries.

My idea behind Bee Free is that planning a trip should feel exciting
rather than complicated. I used travel photography, clear navigation,
consistent colours and straightforward page layouts to help visitors
move through the website without confusion.

I developed the project across the different assignment stages. In Part
1, I planned the business concept, website structure and content. In
Part 2, I built the main pages using HTML and CSS and worked on the
visual identity and responsive layout. In Part 3, I added JavaScript
functionality, improved the forms and their error handling, refined the
website design, completed the root-level error page and prepared the
website for public hosting.

I have completed the Part 3 website, checked its main pages and
functionality, and published it using GitHub Pages.

Live website: Visit Bee Free Travel
Agency

This project is a front-end travel-agency website. It provides travel
information and enquiry functionality; it is not a live airline or hotel
booking platform and does not process payments.
2. Project Objectives
My main objectives were to:
1. Build a complete multi-page website using HTML5, CSS3 and
   JavaScript.
2. Create a consistent visual identity for Bee Free Travel Agency.
3. Make the website easy to navigate on desktop, tablet and mobile
   screens.
4. Present travel destinations and accommodation information in an
   organised way.
5. Add JavaScript interactions that make the website more useful than a
   collection of static pages.
6. Allow visitors to search and filter the available destinations.
7. Provide a way to view destination photographs more closely.
8. Create separate forms for travel quotations and general contact
   messages.
9. Add form validation, error handling and clear feedback for visitors.
10. Improve page titles, descriptions, headings, image alternative text
    and internal links for SEO.
11. Add a custom 404 error page so visitors have a useful way back into
    the website when a page cannot be found.
12. Test the website and publish it through GitHub Pages.
13. Keep the official university submission repository separate from the
    public publishing repository.
14. Document my work, development decisions, references and use of AI
    assistance.
3. Website Pages
I created six main website pages. I kept the branding, navigation and
general layout consistent so visitors can move between the pages easily.
3.1 Home Page --- CODE_STRUCTURE/Home.html
I designed the Home page as the starting point for the visitor. It
introduces Bee Free Travel Agency and directs visitors towards the main
sections of the website.

I included:
- The Bee Free logo and navigation.
- A large travel-inspired hero image with introductory text.
- Clear calls to action that direct visitors to explore destinations
  or make an enquiry.
- Featured destinations, including Paris, Dubai and Zanzibar.
- Supporting travel imagery and introductory content.
- Links to the other important website sections.
- A destination-selection interaction that passes the selected
  destination to the Destinations page.
The Home page gives visitors a clear starting point and helps them
decide where they would like to explore next.
3.2 About Us Page --- CODE_STRUCTURE/about.html
I created the About Us page to explain the purpose and identity of Bee
Free Travel Agency.

I included:
- An introduction to the agency.
- A travel-inspired story section.
- Supporting imagery.
- Content explaining the values and experience I want the business to
  communicate.
- A call to action that takes visitors back to the travel content.
I also improved the HTML comments on this page. Instead of commenting on
every individual tag, I kept comments where they explain the purpose of
a section or a design decision.
3.3 Destinations Page --- CODE_STRUCTURE/DESTINATION.html
I created the Destinations page to showcase three featured travel
destinations:
  Destination       Country /         Travel focus      Image
location                            
  Paris             France            Culture, museums  Paris_destination.jpg
and city
experiences       

  Dubai             United Arab       Modern city       Dubai_destination.jpg
Emirates          experiences,
shopping and
desert activities 
Zanzibar          Tanzania          Beaches, island   zanzibar_destination.jpg
scenery and
culture
I added JavaScript functionality to make destination discovery more
interactive:
- Visitors can search for destinations using text.
- Visitors can filter destinations by travel category.
- Search and category filtering work together.
- The results counter updates when the displayed destinations change.
- A message appears when no destinations match the selected search and
  filter.
- A destination selected from the Home page can be passed to the
  Destinations page through a URL search parameter.
- Visitors can open destination photographs in a larger lightbox view
  and close the image when they are finished.
These features make it easier for visitors to find destinations that
match their interests.
3.4 Hotels and Accommodation Page --- CODE_STRUCTURE/hotel.html
I created the Hotels page to give visitors accommodation inspiration as
part of their travel planning.

I included:
- Accommodation-related headings and descriptions.
- Hotel and retreat imagery.
- Image cards with consistent spacing and styling.
- Links that guide visitors towards making a travel enquiry.
- Responsive layouts so the content can adjust to smaller screens.
I kept the accommodation section visually consistent with the
Destinations page while giving it its own purpose.

The website presents accommodation ideas; it does not connect to live
hotel inventory or confirm room availability.
3.5 Request a Quote Page --- CODE_STRUCTURE/REQUEST_QUOTE.html
I created a dedicated Request a Quote page for visitors who want to
enquire about a possible trip. I kept this separate from the general
Contact page because a travel enquiry needs more information than an
ordinary message.

The form includes fields for information such as:
- Full name.
- Email address.
- Phone number.
- Destination selection.
- An additional destination field when the visitor chooses another
  destination.
- Departure and return dates.
- Number of travellers.
- Accommodation preference.
- Additional travel requirements.
- Consent to submit the enquiry.
I added validation and error handling to help visitors identify missing
or invalid information. I also improved the enquiry-page behaviour and
checked the enquiry link so visitors can reach the correct page.

The form is used to collect travel requirements. Submitting an enquiry
does not automatically confirm a booking, price or availability.
3.6 Contact Page --- CODE_STRUCTURE/contact.html
I created the Contact page for visitors who want to send a general
message rather than request a travel quotation.

I included:
- A welcoming introduction.
- Contact information and guidance on which form visitors should use.
- A link to the Request a Quote page for travel-related enquiries.
- Fields for a visitor's name, email address, optional phone number,
  message type and message.
- A consent control.
- Validation messages and submission feedback.
I kept the Contact page separate from the quotation form to make the
process clearer for visitors.
4. JavaScript Functionality
I stored the shared JavaScript in CSS_STYLE/JS_main.js. I used vanilla
JavaScript to add interactions and validation to the website.

The main functionality I implemented includes:
4.1 Responsive Navigation
I added JavaScript behaviour for the mobile navigation. Visitors can
open and close the menu on smaller screens, and the menu button updates
its accessible expanded state.
4.2 Home-to-Destinations Selection
I connected the Home page destination selection to the Destinations
page. The selected destination is passed through a URL search parameter,
which the Destinations page reads when it loads.
4.3 Destination Search and Filtering
I added text search and category filtering to the Destinations page. The
page updates the visible destination cards, result count and no-results
message based on the visitor's selections.
4.4 Destination Image Lightbox
I added a larger image-viewing experience for destination photographs.
Visitors can open an image, view its caption and close the lightbox
without leaving the Destinations page.
4.5 Form Validation and Error Handling
I added validation and feedback for the Request a Quote and Contact
forms. This helps visitors understand which information needs attention
before they submit a form.

I also refined the enquiry-page error handling so that the page gives
visitors clearer feedback when something needs correcting.
5. Custom 404 Error Page
I created a custom 404.html page and placed it in the root of the
project alongside index.html and robots.txt.

I designed the page to match the Bee Free Travel Agency branding.
Instead of leaving visitors on a generic missing-page message, I provide
a clear explanation and links that help them continue browsing.

The custom page includes:
- Bee Free branding and logo.
- Navigation links to the main website pages.
- A clear 404 error message.
- A link back to the Home page.
- A link to explore destinations.
- A contact route for visitors who need assistance.
- Responsive styling for smaller screens.
I also included a noindex, follow robots directive so that the error
page is not treated as a normal search result page.
6. Visual Design and Branding
I wanted Bee Free Travel Agency to feel professional, welcoming and
connected to travel. I used a consistent colour palette, travel
photography, clear headings and repeated layout patterns across the
pages.
6.1 Colour Palette
  Colour                              How I used it
  Navy blue                           Headers, footers, strong text and
darker overlays

  Green / teal                        Buttons, navigation highlights and
interactive accents

  White                               Main backgrounds, cards and form
areas

  Light green                         Supporting sections and softer
backgrounds

  Light grey / blue-grey              Borders, secondary text and
supporting sections

  Gold                                Selected accents and emphasis
Red                                 Form errors and invalid input
feedback
I used these colours to create a recognisable visual identity and
maintain readability. I refined the CSS during development because I
wanted the final appearance to feel more consistent and polished.
6.2 Typography
I used Montserrat for general interface text and Playfair Display for
larger headings in the supplied design. I chose this combination to keep
body text readable while giving the main headings a more distinctive
appearance.
6.3 Layout and Images
I used CSS Grid and Flexbox to organise the page sections, cards,
navigation and forms. I also used travel photographs to make the
destination and accommodation content more engaging.

I kept the image filenames organised in the CODE_STRUCTURE/IMAGES/
folder and used consistent image sizing and cropping where appropriate.
6.4 Responsive Design
I designed the website to adapt to desktop, tablet and mobile screen
sizes. I adjusted navigation, card layouts, content columns, buttons and
form controls so that the pages remain usable on smaller screens.
7. HTML, CSS and Accessibility Improvements
I used semantic HTML elements such as header, nav, main,
section, article, footer, form and headings to organise the
website.

I also worked on:
- Consistent external CSS across the website pages.
- Clear page headings and content sections.
- Descriptive image alternative text.
- Labels for form fields.
- Visible validation and error feedback.
- Keyboard-friendly links and controls.
- Responsive navigation.
- Skip-to-content links where included in the page templates.
- Clear focus and hover states.
- More useful HTML comments.
I improved the comments in the About, Request a Quote and Contact pages.
I removed repetitive comments that simply announced the beginning or end
of an HTML element and kept comments that explain important sections or
decisions.
8. Search Engine Optimisation (SEO)
I included on-page SEO improvements to help visitors and search engines
understand the website.

My SEO work includes:
- Descriptive page titles.
- Meta descriptions.
- Organised heading levels.
- Descriptive image alternative text.
- Internal links between related pages.
- Meaningful page and image filenames.
- Responsive page layouts.
- A root-level index.html entry point.
- A root-level robots.txt file.
I also checked the paths and filename capitalisation used by the
website. This is important because GitHub Pages hosting is
case-sensitive. For example, Home.html must be referenced with the
same capitalisation as the actual filename.
9. Technologies and Development Tools
  Technology / tool                   How I used it
  HTML5                               I created the structure, content,
navigation, links, images and
forms.

  CSS3                                I styled the colours, typography,
layouts, cards, buttons, forms and
responsive behaviour.

  JavaScript                          I added navigation behaviour,
destination selection, search,
filtering, lightbox interaction and
form validation.

  CSS Grid                            I organised destination cards,
content sections and form layouts.

  CSS Flexbox                         I aligned navigation, buttons and
content groups.

  Google Fonts                        I used Montserrat and Playfair
Display in the design.

  Visual Studio Code                  I edited, organised and reviewed
the project files.

  Git                                 I tracked changes and maintained
the project history.

  GitHub                              I stored the source code and
managed the repositories.

  GitHub Pages                        I published the public version of
the website.

  Browser developer tools             I used browser tools to inspect and
test the website.
ChatGPT                             I used it as a development-support
and learning resource, as explained
in my AI declaration.
The website is a static front-end project. I do not need a Node.js
application server, database or build command to run the supplied HTML,
CSS and JavaScript files.
10. Project Folder Structure
I organised the project into separate folders for the website pages,
styling, JavaScript and images.
Bee_Free_Travel_Agency_Part_3/
│
├── index.html
├── 404.html
├── robots.txt
├── README.md
├── DEPLOYMENT_CHECKLIST.md
│
├── .vscode/
│   └── settings.json
│
├── CSS_STYLE/
│   ├── STYLES.css
│   └── JS_main.js
│
└── CODE_STRUCTURE/
    ├── Home.html
    ├── about.html
    ├── DESTINATION.html
    ├── hotel.html
    ├── REQUEST_QUOTE.html
    ├── contact.html
    │
    └── IMAGES/
        ├── BEE_FREE_LOGO.jpeg
        ├── Dubai_destination.jpg
        ├── Home.jpg
        ├── Home2.jpg
        ├── Hotel.jpg
        ├── Hotel2.jpg
        ├── Paris_destination.jpg
        └── zanzibar_destination.jpg
Main file descriptions
- index.html is the root entry point that directs visitors to my
  Home page.
- 404.html is my custom page for missing or incorrect URLs.
- robots.txt provides basic crawler instructions.
- CSS_STYLE/STYLES.css contains the shared visual styling.
- CSS_STYLE/JS_main.js contains the shared JavaScript functionality.
- CODE_STRUCTURE/ contains the six main website pages.
- CODE_STRUCTURE/IMAGES/ contains the logo and travel photographs.
- README.md documents the project, its features, development
  process, testing and references.
- DEPLOYMENT_CHECKLIST.md contains the deployment and final checking
  guidance.
11. Testing and Quality Assurance
I tested and checked the completed website before treating the project
as finished. I checked the local website during development and reviewed
the published version after deploying it through GitHub Pages.

My final manual testing covered the following areas:
  Test area               What I checked          Result
  Home page               I checked that the Home Passed
page loads and displays
its content and images. 

  About Us page           I checked the page      Passed
content, layout and
navigation.             

  Destinations page       I checked that the      Passed
destination cards and
page content display
correctly.              

  Hotels page             I checked the           Passed
accommodation content,
images and enquiry
links.                  

  Request a Quote page    I checked the form      Passed
fields, required
inputs, validation and
error feedback.         

  Contact page            I checked the contact   Passed
fields, validation and
page links.             

  Navigation              I checked the links     Passed
between the main
website pages.          

  Mobile navigation       I checked that the      Passed
responsive menu opens
and closes.             

  Destination search      I checked that visitors Passed
can search for
destinations.           

  Destination filtering   I checked that the      Passed
category filter works
with the search.        

  Results feedback        I checked the result    Passed
count and no-results
message.                

  Destination lightbox    I checked that          Passed
destination images open
and can be closed.      

  Enquiry link            I checked that the      Passed
enquiry route takes
visitors to the correct
page.                   

  Form feedback           I checked the form      Passed
validation and
error-handling
feedback.               

  Custom 404 page         I checked that the      Passed
custom missing-page
design and navigation
are available.          

  Images and styling      I checked that the      Passed
logo, travel images and
CSS display on the
published website.      

  Responsive layout       I checked the website   Passed
at desktop, tablet and
mobile screen sizes.    
GitHub Pages            I checked that the      Passed
website is published at
the public URL.
I also reviewed the website's navigation and file paths after
deployment. I paid particular attention to filename capitalisation and
relative paths because these can behave differently on a hosted website
than they do on a local computer.

These are my manual project checks. They are not a claim that I
completed a formal WCAG accessibility certification or that the website
has a live booking and payment system.
12. Development Process and Changelog
I used the following stages to develop and improve the project.
Part 1 -- Planning and Website Concept
I established the Bee Free Travel Agency concept, identified the purpose
of the website and planned the main pages and content.
Part 2 -- HTML and CSS Development
I built the main website structure and worked on the visual design. I
organised the pages, navigation, images, shared styling and responsive
layouts.
Part 3 -- JavaScript, Refinement and Completion
I extended the website with JavaScript functionality, improved the forms
and validation, refined the visual design and prepared the website for
deployment.
Detailed Part 3 Changelog
  Area                    What I completed        Why I made the change
  Home page               I refined the Home page To give visitors a
content, imagery and    clear introduction and
calls to action.        starting point.

  About Us                I improved the agency   To explain the purpose
story, values and page  and identity of the
layout.                 agency more clearly.

  Destinations            I added destination     To make it easier for
search, category        visitors to find
filtering, result       destinations.
counts and no-results
feedback.               

  Home-to-Destinations    I connected the Home    To make the visitor
flow                    page destination        journey more connected.
selection to the
Destinations page using
a URL search parameter. 

  Image viewing           I added a lightbox for  To let visitors view
destination             travel images in a
photographs.            larger format.

  Hotels                  I refined the           To make accommodation
accommodation section,  information easier to
imagery, cards and      explore.
enquiry links.          

  Request a Quote         I developed the         To collect the
dedicated travel        information needed for
enquiry form and its    a travel enquiry.
input fields.           

  Enquiry error handling  I improved the          To give visitors a
enquiry-page error      clearer route and more
handling and checked    useful feedback.
the enquiry link.       

  Contact page            I maintained a separate To distinguish general
general contact form    messages from travel
and improved its layout quotation requests.
and feedback.           

  JavaScript              I added and refined the To make the website
navigation, search,     interactive and easier
filtering, lightbox and to use.
form behaviour.         

  CSS refinement          I rewrote and refined   To improve consistency,
the stylesheet because  presentation and
I was not satisfied     readability.
with the earlier
appearance.             

  HTML comments           I revised comments in   To make the code
the About, Request a    comments more natural
Quote and Contact       and useful.
pages.                  

  SEO                     I reviewed page titles, To improve how the
descriptions, headings, pages are described and
image text and internal connected.
links.                  

  Root entry point        I kept index.html in  To support static
the project root and    hosting.
checked its route to
the Home page.          

  Custom error page       I created 404.html in To give visitors a
the project root.       useful page when they
open an incorrect URL.

  Robots instructions     I included robots.txt To provide basic
in the project root.    instructions for
search-engine crawlers.

  Final testing           I checked the website   To make sure the
pages, navigation,      completed version was
interactions, forms,    ready to publish.
images and responsive
layouts.                
README                  I updated this README   To provide a complete
to document the         record of the project.
completed Part 3 work
and publishing process.
13. GitHub, Version Control and Publishing
I used Git and GitHub throughout development to keep track of my changes
and maintain the project history.
13.1 Official University Submission Repository
I kept my official Part 3 submission in the GitHub Classroom repository:

https://github.com/EMGPSD/wede5020-2026-part-3-st10503795

I continued using this repository for my university submission and
pushed my final website changes to its main branch.
13.2 Separate Public Publishing Repository
To publish the website without changing the official submission
repository, I created a separate public repository under my personal
GitHub account:

https://github.com/ST10503795/Bee-Free-Travel-Agency-Part-3

I created a separate local publishing copy named
Bee_Free_Travel_Agency_Part_3-for-Pages. I connected that copy to my
personal public repository while leaving the original project folder
connected to the official university repository.

The public repository initially contained its own README commit. I
merged the unrelated repository histories and preserved the project
files and commit history before pushing the publishing copy. I did not
need to overwrite the official university repository.
13.3 GitHub Pages Deployment
I published the public repository using GitHub Pages with the following
configuration:
- Source: Deploy from a branch.
- Branch: main.
- Folder: /(root).
I confirmed that the website was published and accessible through the
public GitHub Pages URL:

https://st10503795.github.io/Bee-Free-Travel-Agency-Part-3/

I tested the published website after deployment.
13.4 Useful Git Commands
These are some of the commands I used during development:
git status
git add -A
git commit -m "Describe the changes I made"
git pull --rebase origin main
git push origin main
git remote -v
git fetch origin
I used git status to check my working tree, git add and git commit
to record changes, and git push to upload commits to the relevant
repository.

I kept the official submission repository and public publishing
repository separate so that publishing changes would not accidentally
replace the official repository connection.
14. How I Run the Website Locally
I can run the website locally using Visual Studio Code and a static
development server.
1. I clone or download the project repository.
2. I open the project folder in Visual Studio Code.
3. I open the root index.html file or use the Live Server extension.
4. I keep the project folder structure unchanged so that relative paths
   continue to work.
5. I navigate through the six main pages and test the website
   interactions.
6. I keep an internet connection available for any external resources
   used by the pages.
The project does not require an npm install command or a separate
application build process in its current static HTML, CSS and JavaScript
structure.
15. Project Scope and Future Improvements
I completed the website as a front-end travel-agency project. The
following items are outside the current project's scope and could be
considered for future development:
- Connecting to a live hotel or flight availability service.
- Adding a secure booking and payment system.
- Adding a database and server-side customer enquiry management.
- Developing dedicated information pages for additional destinations.
- Adding a generated XML sitemap and expanding the SEO strategy.
- Improving the website further through additional performance and
  accessibility audits.
- Expanding the destination and accommodation content.
These are possible future improvements, not features that I claim are
already part of the current website.
16. References
I used the following learning materials, documentation and websites to
support my research and development. I used them to understand web
technologies, review examples and improve my own implementation.
16.1 Course Material and Web Development Learning
- The Independent Institute of Education (IIE) (2026) Web Development
  course learning material. MyStudies. Available at:
  https://mystudies.iie.edu.za/ (Accessed: 9 November 2026).
- W3Schools (n.d.) HTML Tutorial. Available at:
  https://www.w3schools.com/html/ (Accessed: 9 November 2026).
- W3Schools (n.d.) CSS Tutorial. Available at:
  https://www.w3schools.com/css/ (Accessed: 9 November 2026).
- W3Schools (n.d.) JavaScript Tutorial. Available at:
  https://www.w3schools.com/js/ (Accessed: 9 November 2026).
- Yu, A. (n.d.) The Complete Web Development Bootcamp. Udemy.
  Available at:
  https://www.udemy.com/course/the-complete-web-development-bootcamp/
  (Accessed: 9 November 2026).
- Harvard University, CS50 (n.d.) CS50's Web Programming with Python
  and JavaScript -- Week 0: HTML and CSS. Available at:
  https://cs50.harvard.edu/web/2020/weeks/0/ (Accessed: 9 November
  2026).
- MDN Web Docs (n.d.) HTML, CSS and JavaScript documentation.
  Available at: https://developer.mozilla.org/ (Accessed: 9 November
  2026).
16.2 Design Research and Travel Industry Inspiration
- Flight Centre South Africa (n.d.) Flight Centre South Africa.
  Available at: https://www.flightcentre.co.za/ (Accessed: 9
  November 2026).
- Pentravel (n.d.) Pentravel. Available at:
  https://www.pentravel.co.za/ (Accessed: 9 November 2026).
- Sure Travel (n.d.) Sure Travel. Available at:
  https://www.suretravel.co.za/ (Accessed: 9 November 2026).
I used travel websites as references for general ideas about navigation,
travel categories, visual hierarchy and calls to action. The Bee Free
Travel Agency website is my own project.
16.3 Images, Fonts and External Libraries
- Google Fonts (n.d.) Google Fonts. Available at:
  https://fonts.google.com/ (Accessed: 9 November 2026).
- Unsplash (n.d.) Travel photography. Available at:
  https://unsplash.com/s/photos/travel (Accessed: 9 November 2026).
- Leaflet (n.d.) Leaflet documentation. Available at:
  https://leafletjs.com/ (Accessed: 9 November 2026).
- OpenStreetMap contributors (n.d.) OpenStreetMap. Available at:
  https://www.openstreetmap.org/ (Accessed: 9 November 2026).
Where an individual photograph has a known original creator or source, I
should use that specific attribution rather than treating a general
image-search page as the photographer credit.
16.4 GitHub and Publishing
- GitHub (n.d.) GitHub Documentation. Available at:
  https://docs.github.com/ (Accessed: 9 November 2026).
- GitHub (n.d.) GitHub Pages documentation. Available at:
  https://docs.github.com/en/pages (Accessed: 9 November 2026).
16.5 AI Assistance
- OpenAI (2026) ChatGPT. Available at: https://chatgpt.com/
  (Accessed: 9 November 2026).
17. AI Usage Declaration
I used ChatGPT by OpenAI as a development-support and learning tool
during this project. I used it to help me understand HTML, CSS and
JavaScript concepts, plan and refine sections of code, improve comments,
troubleshoot development issues, work through Git and GitHub problems,
and organise this README.

I did not treat AI-generated material as a substitute for reviewing my
own project. I checked the code in my development environment, made
decisions about the design and functionality, and tested the completed
website before publishing it.

I understand that I am responsible for the work I submit, including
understanding the code, checking the functionality and acknowledging the
resources that assisted me.
18. Conclusion and Reflection
Completing Bee Free Travel Agency has helped me develop my understanding
of how a multi-page website is planned, built, refined, tested and
published.

I moved from creating the initial website structure to building a more
interactive experience with JavaScript, destination search and
filtering, image viewing, form validation and error handling. I also
spent time improving the visual design, organising the project files,
making the comments more useful and preparing the website for public
access.

One of the most important things I learned is that completing a website
involves more than making the pages look correct. I also needed to check
how the pages connect, how the forms respond, how visitors recover from
an incorrect URL and how the website behaves after it has been deployed.

I also gained practical experience using Git and GitHub to maintain my
official university submission separately from a public publishing copy.
I used GitHub Pages to make the completed website available online.

I am proud of the progress I made with Bee Free Travel Agency. I
completed the Part 3 development, checked the website and published the
final version online.

Final published website: Bee Free Travel
Agency
