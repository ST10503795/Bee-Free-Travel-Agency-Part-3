
// BEE FREE TRAVEL AGENCY — PART 3 JAVASCRIPT
// I divided my code into named sections so I can easily find each page's features.
// Reference: MDN Web Docs (2026) JavaScript and DOM guides; IIE course material (2026).

// SECTION 1 — SHARED MOBILE MENU
// I check whether the menu button exists before adding a click event.


/* SECTION 1: STARTUP - I initialise the website after the HTML is ready. */
document.addEventListener("DOMContentLoaded", function () { // I wait until the browser has created the page elements.
    setupMenu(); // I activate the mobile navigation on every page.
    setupDates(); // I prevent visitors from choosing dates in the past.
    setupQuotePrefill(); // I transfer destination choices into the quotation form.
    setupExplore(); // I activate Explore More and Close buttons.
    setupSearch(); // I activate destination search, filtering and sorting.
    setupGallery(); // I activate the enlarged destination photographs.
    setupMap(); // I create the interactive destination map where it is needed.
    setupForms(); // I activate validation and AJAX submission for both forms.
}); // I finish setting up the website's interactive features.

/* SECTION 2: MOBILE NAVIGATION - I open and close the menu on phones. */
function setupMenu() { // I group the mobile menu instructions in one function.
    var button = document.getElementById("menuButton"); // I find the button that opens the menu.
    var menu = document.getElementById("mainNav"); // I find the navigation links.
    if (!button || !menu) { return; } // I stop if this page does not contain both elements.
    button.addEventListener("click", function () { // I respond whenever the visitor clicks the menu.
        var opened = menu.classList.toggle("open"); // I add or remove the CSS class that displays the links.
        button.setAttribute("aria-expanded", String(opened)); // I tell screen readers whether the menu is open.
        button.textContent = opened ? "✕ Close" : "☰ Menu"; // I change the button text to match its state.
    }); // I finish the menu click event.
    document.addEventListener("keydown", function (event) { // I listen for keyboard actions.
        if (event.key === "Escape") { // I check whether the Escape key was pressed.
            menu.classList.remove("open"); // I hide the navigation menu.
            button.setAttribute("aria-expanded", "false"); // I update the accessibility information.
            button.textContent = "☰ Menu"; // I restore the original menu button text.
        } // I finish the Escape key condition.
    }); // I finish the keyboard event.
} // I finish the mobile navigation function.

/* SECTION 3: DATES - I use today's date when checking travel plans. */
function todayText() { // I create a date in the same format used by HTML date inputs.
    var date = new Date(); // I get the visitor's local date.
    var year = date.getFullYear(); // I collect the year.
    var month = String(date.getMonth() + 1).padStart(2, "0"); // I get the month and add a leading zero when needed.
    var day = String(date.getDate()).padStart(2, "0"); // I get the day and add a leading zero when needed.
    return year + "-" + month + "-" + day; // I return a YYYY-MM-DD date string.
} // I finish the date helper function.

function setupDates() { // I apply the minimum dates to the Home and Quote forms.
    var homeDate = document.getElementById("homeDate"); // I look for the departure date on the Home page.
    var departure = document.getElementById("quoteDepart"); // I look for the departure date on the Quote page.
    var returning = document.getElementById("quoteReturn"); // I look for the return date on the Quote page.
    if (homeDate) { homeDate.min = todayText(); } // I prevent past departures from being chosen on Home.
    if (departure) { departure.min = todayText(); } // I prevent past departures in the quotation form.
    if (returning) { returning.min = todayText(); } // I start with today's date as the earliest return.
    if (departure && returning) { // I only continue if both quotation dates exist.
        departure.addEventListener("change", function () { // I check the dates when departure changes.
            returning.min = departure.value || todayText(); // I make the return date follow the departure date.
            if (returning.value && returning.value < returning.min) { returning.value = ""; } // I clear an invalid earlier return.
        }); // I finish the departure-date event.
    } // I finish checking the quotation date fields.
} // I finish the date setup function.

/* SECTION 4: QUOTE PREFILL - I reuse the visitor's earlier destination choice. */
function setupQuotePrefill() { // I read the details passed from Home, Destinations or Hotels.
    var form = document.getElementById("quoteForm"); // I check whether I am on the quotation page.
    if (!form) { return; } // I skip this feature on other pages.
    var params = new URLSearchParams(window.location.search); // I read values from the URL using an MDN-documented technique.
    var destination = params.get("destination"); // I read the destination the visitor selected.
    var stay = params.get("stay"); // I read the selected accommodation type.
    var departure = params.get("departure"); // I read the date sent from the Home search.
    var travellers = Number(params.get("travellers")); // I turn the traveller count into a number.
    var placeInput = document.getElementById("quoteDestination"); // I find the destination dropdown.
    var stayInput = document.getElementById("quoteStay"); // I find the accommodation dropdown.
    if (["Paris", "Dubai", "Zanzibar"].includes(destination)) { placeInput.value = destination; } // I select only supported destinations.
    if (["Hotel", "Resort"].includes(stay)) { stayInput.value = stay; } // I preselect a valid accommodation type.
    if (departure && /^\d{4}-\d{2}-\d{2}$/.test(departure) && departure >= todayText()) { // I check the date format and range.
        document.getElementById("quoteDepart").value = departure; // I fill the departure date.
        document.getElementById("quoteReturn").min = departure; // I adjust the earliest possible return date.
    } // I finish validating the date from the URL.
    if (Number.isInteger(travellers) && travellers >= 1 && travellers <= 20) { // I check the traveller count.
        document.getElementById("quoteTravellers").value = travellers; // I copy the valid count into the form.
    } // I finish the traveller check.
    var otherBox = document.getElementById("otherBox"); // I locate the extra destination field.
    var otherInput = document.getElementById("quoteOther"); // I locate the input where another destination can be typed.
    function updateOther() { // I show the extra field only when Other is selected.
        var chosen = placeInput.value === "Other"; // I check the current dropdown selection.
        otherBox.hidden = !chosen; // I show or hide the extra field.
        otherInput.required = chosen; // I make the field required only when needed.
        if (!chosen) { otherInput.value = ""; } // I clear unused information.
    } // I finish the Other destination function.
    placeInput.addEventListener("change", updateOther); // I update the extra field when the dropdown changes.
    updateOther(); // I display the correct starting state.
} // I finish the quotation prefill function.

/* SECTION 5: EXPLORE MORE - I display detailed information about selected places. */
function setupExplore() { // I use one function for destinations and hotels.
    var buttons = document.querySelectorAll(".explore-button"); // I collect every Explore More button.
    var panels = document.querySelectorAll(".details"); // I collect every detailed information panel.
    if (buttons.length === 0) { return; } // I stop on pages without these features.
    function openPanel(id) { // I make a reusable function that opens one particular panel.
        var chosen = document.getElementById(id); // I find the information requested by the visitor.
        if (!chosen) { return; } // I avoid an error if the requested panel cannot be found.
        for (var i = 0; i < panels.length; i++) { // I check each detailed information panel.
            panels[i].hidden = panels[i].id !== id; // I show the selected panel and hide the others.
        } // I finish checking the panels.
        for (var j = 0; j < buttons.length; j++) { // I check each Explore More button.
            buttons[j].setAttribute("aria-expanded", String(buttons[j].dataset.target === id)); // I update accessibility information.
        } // I finish updating the Explore More buttons.
        chosen.scrollIntoView({ behavior: "smooth", block: "start" }); // I scroll to the description using MDN's scrollIntoView technique.
    } // I finish the openPanel function.
    for (var k = 0; k < buttons.length; k++) { // I go through all Explore More buttons.
        buttons[k].addEventListener("click", function () { // I respond to the visitor selecting a card.
            openPanel(this.dataset.target); // I open the matching detailed information section.
        }); // I finish one button's click event.
    } // I finish connecting the Explore More buttons.
    var closeButtons = document.querySelectorAll(".close-details"); // I collect the buttons used to close the panels.
    for (var m = 0; m < closeButtons.length; m++) { // I check every Close button.
        closeButtons[m].addEventListener("click", function () { // I respond when a visitor closes a description.
            var panel = this.closest(".details"); // I find the information panel containing this button.
            if (!panel) { return; } // I stop if no matching panel exists.
            panel.hidden = true; // I hide the selected information panel.
            for (var n = 0; n < buttons.length; n++) { // I update all Explore More buttons.
                buttons[n].setAttribute("aria-expanded", "false"); // I mark the detailed information as closed.
                if (buttons[n].dataset.target === panel.id) { buttons[n].focus(); } // I return keyboard focus to the original button.
            } // I finish checking the Explore More buttons.
        }); // I finish the Close button event.
    } // I finish connecting the Close buttons.
    var linkedPanel = window.location.hash.substring(1); // I read a detailed-section link sent from the Home page.
    if (linkedPanel && document.getElementById(linkedPanel)) { openPanel(linkedPanel); } // I open the correct destination automatically.
} // I finish the Explore More feature.

/* SECTION 6: DESTINATION SEARCH - I filter and sort the destination cards. */
function setupSearch() { // I activate destination searching on its own page.
    var search = document.getElementById("searchInput"); // I find the text search field.
    var filter = document.getElementById("styleFilter"); // I find the travel-style dropdown.
    var sort = document.getElementById("sortBy"); // I find the sorting dropdown.
    var grid = document.getElementById("destGrid"); // I find the container holding destination cards.
    if (!search || !filter || !sort || !grid) { return; } // I avoid running this feature on unrelated pages.
    var cards = Array.from(grid.querySelectorAll(".destination-card")); // I store the cards in their original order.
    function updateCards() { // I check the cards whenever a search option changes.
        var words = search.value.trim().toLowerCase(); // I make search text lowercase for easier comparison.
        var category = filter.value; // I get the selected travel style.
        var visible = 0; // I start counting matching destinations from zero.
        for (var i = 0; i < cards.length; i++) { // I examine the cards one at a time.
            var matchesWords = cards[i].textContent.toLowerCase().includes(words); // I check whether card text matches the search.
            var matchesStyle = category === "all" || cards[i].dataset.style === category; // I check the selected travel style.
            cards[i].hidden = !(matchesWords && matchesStyle); // I hide the card when one of the conditions is not met.
            if (!cards[i].hidden) { visible = visible + 1; } // I count a card only if it is visible.
        } // I finish filtering the cards.
        var ordered = cards.slice(); // I copy the original array before sorting it.
        if (sort.value === "az") { // I check whether A-to-Z sorting was selected.
            ordered.sort(function (a, b) { return a.dataset.name.localeCompare(b.dataset.name); }); // I alphabetise using JavaScript's built-in sort method.
        } else if (sort.value === "za") { // I check whether reverse alphabetical sorting was selected.
            ordered.sort(function (a, b) { return b.dataset.name.localeCompare(a.dataset.name); }); // I reverse the comparison for Z-to-A.
        } // I keep the original order when Featured is selected.
        for (var j = 0; j < ordered.length; j++) { grid.appendChild(ordered[j]); } // I move existing cards into their chosen order.
        document.getElementById("destCount").textContent = "Showing " + visible + " of " + cards.length + " destinations"; // I update the result count.
        document.getElementById("noResults").hidden = visible !== 0; // I show a helpful message when no destinations match.
    } // I finish the search update function.
    search.addEventListener("input", updateCards); // I update the results while the visitor types.
    filter.addEventListener("change", updateCards); // I update the results when a category is selected.
    sort.addEventListener("change", updateCards); // I reorder the results when sorting changes.
    updateCards(); // I display the initial result count when the page loads.
} // I finish the destination search feature.

/* SECTION 7: IMAGE GALLERY - I let visitors enlarge destination photographs. */
function setupGallery() { // I activate the picture viewer on the Destinations page.
    var dialog = document.getElementById("imageDialog"); // I find the HTML dialog for large pictures.
    if (!dialog) { return; } // I stop on pages without a gallery.
    var picture = document.getElementById("dialogPhoto"); // I find the large photograph inside the dialog.
    var caption = document.getElementById("dialogCaption"); // I find the photograph caption.
    var close = document.getElementById("closePhoto"); // I find the Close button.
    var buttons = document.querySelectorAll(".photo-button"); // I collect the clickable destination photographs.
    for (var i = 0; i < buttons.length; i++) { // I add the same behaviour to every picture.
        buttons[i].addEventListener("click", function () { // I respond when a visitor clicks a photograph.
            picture.src = this.dataset.full; // I display the selected photograph in the dialog.
            picture.alt = this.dataset.caption; // I provide a meaningful image description.
            caption.textContent = this.dataset.caption; // I display the destination name underneath the photograph.
            dialog.showModal(); // I open the dialog using the browser's built-in method from MDN.
        }); // I finish one photograph's click event.
    } // I finish connecting all photographs.
    close.addEventListener("click", function () { dialog.close(); }); // I close the viewer when the visitor clicks Close.
    dialog.addEventListener("click", function (event) { // I also listen for a click on the dialog background.
        if (event.target === dialog) { dialog.close(); } // I close the viewer if its outside area was selected.
    }); // I finish the background click event.
} // I finish the destination gallery feature.

/* SECTION 8: INTERACTIVE MAP - I show the three destinations using Leaflet. */
function setupMap() { // I create the map only where its container exists.
    var holder = document.getElementById("destinationMap"); // I find the location where the map must appear.
    if (!holder) { return; } // I skip map setup on other pages.
    if (typeof L === "undefined") { // I check whether the external Leaflet library loaded.
        document.getElementById("mapNotice").hidden = false; // I explain when the map cannot load.
        return; // I stop before calling missing Leaflet functions.
    } // I finish the Leaflet availability check.
    var map = L.map("destinationMap").setView([13, 31], 3); // I create the map centred roughly between my travel destinations.
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map); // I add map tiles following the Leaflet Quick Start Guide.
    var places = [["Paris", 48.8566, 2.3522], ["Dubai", 25.2048, 55.2708], ["Zanzibar", -6.1659, 39.2026]]; // I store the coordinates for the three destinations.
    for (var i = 0; i < places.length; i++) { // I add one marker for each destination.
        L.marker([places[i][1], places[i][2]]).addTo(map).bindPopup(places[i][0]); // I position the marker and display its name when clicked.
    } // I finish adding map markers.
    var buttons = document.querySelectorAll(".map-button"); // I find the View on Map buttons.
    for (var j = 0; j < buttons.length; j++) { // I connect every destination's map button.
        buttons[j].addEventListener("click", function () { // I respond when a visitor selects View on Map.
            var latitude = Number(this.dataset.lat); // I read the destination latitude.
            var longitude = Number(this.dataset.lng); // I read the destination longitude.
            map.setView([latitude, longitude], 10); // I zoom into the selected city or island.
            L.popup().setLatLng([latitude, longitude]).setContent(this.dataset.place).openOn(map); // I show the destination name on the map.
            holder.scrollIntoView({ behavior: "smooth", block: "center" }); // I scroll the map into view.
        }); // I finish one View on Map event.
    } // I finish connecting the map buttons.
} // I finish the interactive map function.

/* SECTION 9: FORM ERRORS - I reuse these helpers on both forms. */
function showError(input, message) { // I show an error for a particular form field.
    input.setAttribute("aria-invalid", "true"); // I indicate that the input contains incorrect information.
    var label = document.getElementById(input.id + "Error"); // I find the error message underneath that field.
    if (label) { label.textContent = message; } // I display the reason the information is incorrect.
} // I finish the field error function.
function clearErrors(form) { // I remove old error messages before checking the form again.
    var errors = form.querySelectorAll(".err"); // I find all the error messages in this form.
    for (var i = 0; i < errors.length; i++) { errors[i].textContent = ""; } // I clear each previous error message.
    var fields = form.querySelectorAll("[aria-invalid]"); // I find inputs that were marked invalid.
    for (var j = 0; j < fields.length; j++) { fields[j].removeAttribute("aria-invalid"); } // I remove their previous error styling.
} // I finish clearing old form errors.
function setStatus(box, message, type) { // I display a result message below the form.
    box.hidden = false; // I make the feedback box visible.
    box.className = "feedback " + type; // I apply the colour for success, failure or information.
    box.textContent = message; // I display the message as safe plain text.
} // I finish the status message function.

/* SECTION 10: FORM VALIDATION - I check all required values before sending. */
function validateForm(form) { // I use one validation function for both Contact and Quote.
    clearErrors(form); // I remove older validation messages first.
    var valid = true; // I initially assume the form is correct.
    var inputs = form.querySelectorAll("input, select, textarea"); // I collect the inputs that need checking.
    for (var i = 0; i < inputs.length; i++) { // I check the fields one at a time.
        if (!inputs[i].checkValidity()) { // I use HTML5 validation for required fields, emails, limits and patterns.
            showError(inputs[i], inputs[i].validationMessage); // I explain what the visitor needs to correct.
            valid = false; // I mark the form as invalid.
        } // I finish checking one input's validity.
    } // I finish checking all fields.
    if (form.id === "quoteForm") { // I add travel-specific checks for the quotation form.
        var departure = document.getElementById("quoteDepart"); // I find the departure date.
        var returning = document.getElementById("quoteReturn"); // I find the return date.
        if (departure.value && departure.value < todayText()) { showError(departure, "Departure cannot be in the past."); valid = false; } // I reject past departure dates.
        if (returning.value && departure.value && returning.value < departure.value) { showError(returning, "Return cannot be before departure."); valid = false; } // I reject a return before departure.
    } // I finish the quotation-specific checks.
    if (!valid) { // I check whether any information was incorrect.
        var first = form.querySelector('[aria-invalid="true"]'); // I find the first incorrect field.
        if (first) { first.focus(); } // I move keyboard focus to help the visitor correct it.
    } // I finish handling invalid information.
    return valid; // I tell the form whether it can be submitted.
} // I finish the shared validation function.

/* SECTION 11: AJAX - I send validated forms without reloading the webpage. */
function sendForm(form, status) { // I use FormSubmit's documented AJAX endpoint for email submissions.
    if (form.action.includes("YOUR_EMAIL@example.com")) { // I check whether the real recipient email is missing.
        setStatus(status, "The form is valid, but email sending needs a verified recipient address.", "info"); // I avoid giving a false success message.
        return; // I do not submit the information to a placeholder address.
    } // I finish checking the email configuration.
    var button = form.querySelector('button[type="submit"]'); // I find the form's submit button.
    button.disabled = true; // I prevent duplicate submissions while a request is in progress.
    setStatus(status, "Sending your enquiry...", "info"); // I let visitors know their information is being processed.
    var values = new FormData(form); // I collect the completed form fields.
    var information = {}; // I prepare a simple JavaScript object for the request.
    values.forEach(function (value, key) { information[key] = value; }); // I copy the form information into the object.
    fetch(form.action, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(information) }) // I send the information through AJAX using MDN's Fetch API.
    .then(function (response) { // I inspect the server's response.
        if (!response.ok) { throw new Error("Request failed"); } // I reject unsuccessful HTTP responses.
        return response.json(); // I read the service's JSON response.
    }) // I finish reading the initial response.
    .then(function (result) { // I check whether the service accepted the submission.
        if (String(result.success).toLowerCase() !== "true") { throw new Error("Not confirmed"); } // I require a positive service response.
        setStatus(status, "Your enquiry was accepted by the form service. Thank you!", "success"); // I show success only after acceptance.
        form.reset(); // I clear the form after a confirmed submission.
    }) // I finish handling the accepted submission.
    .catch(function () { // I handle errors such as network or service failures.
        setStatus(status, "Your enquiry could not be sent. Check the connection and try again.", "failure"); // I show an honest failure message.
    }) // I finish handling submission failures.
    .finally(function () { button.disabled = false; }); // I make the submission button available again.
} // I finish my reusable AJAX function.

/* SECTION 12: QUOTE AND CONTACT - I connect validation and submission. */
function setupForms() { // I activate the forms that exist on the current page.
    var forms = document.querySelectorAll("#quoteForm, #contactForm"); // I collect the two possible forms.
    for (var i = 0; i < forms.length; i++) { // I connect the forms one by one.
        forms[i].addEventListener("submit", function (event) { // I listen for the visitor pressing Submit.
            event.preventDefault(); // I prevent a page reload before validation.
            var status = document.getElementById(this.id === "quoteForm" ? "quoteStatus" : "contactStatus"); // I choose the correct feedback box.
            if (!validateForm(this)) { // I check whether the entered information is correct.
                setStatus(status, "Please correct the highlighted fields before submitting.", "failure"); // I explain why submission was stopped.
                return; // I stop before sending an invalid form.
            } // I finish the invalid-form condition.
            if (this.id === "quoteForm") { // I check whether I am processing a travel quotation.
                var destination = document.getElementById("quoteDestination").value; // I read the selected destination.
                if (destination === "Other") { destination = document.getElementById("quoteOther").value.trim(); } // I use the visitor's custom destination when required.
                var summary = document.getElementById("quoteSummary"); // I find the travel summary panel.
                summary.hidden = false; // I make the summary visible.
                document.getElementById("summaryText").textContent = "Destination: " + destination + "\nDeparture: " + document.getElementById("quoteDepart").value + "\nReturn: " + document.getElementById("quoteReturn").value + "\nTravellers: " + document.getElementById("quoteTravellers").value + "\nAccommodation: " + document.getElementById("quoteStay").value + "\nPrice: To be confirmed."; // I create a summary without inventing prices.
            } // I finish creating the quotation summary.
            sendForm(this, status); // I attempt the AJAX submission only after successful validation.
        }); // I finish connecting the submit event.
    } // I finish connecting both forms.
} // I finish my form setup function.
