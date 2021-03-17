# **Milestone Project 2**

# Table of Contents


## Come Visit The Burren website

### Purpose

The purpose of this website is to provide relevant information for tourists visiting The Burren, Co. Clare, 
possibly as part of The Wild Atlantic Way. The website provides accessible information in the form of text, 
images and external links to restaurants, accommodation and tourist attractions. The places listed are displayed 
on the map (Google Maps API) available on the page. Site visitors can also submit a query via a user form. 

The site is laid out as a single, scrollable page, and is responsive on a variety of devices, both landscape and 
portrait. Each section is accessible via the navigation menu list. 

### **Details**

#### **'Homepage' section**
The 'Home' page header contains a simple navigation menu with brand text and section links. This menu is displayed 
as a drop-down toggle menu with hamburger button in mobile view. 

The navigation menu contains Home, About and Contact links (3-page website). 

The majority of the home page section contains a carousel slideshow, with 4 rotating images and a text overlay 
inviting users to ‘Come Visit The Burren’.  

#### **'About The Burren' section**
The first navigation menu link brings the site visitor to an ‘About The Burren’ section, which contains 
historical and factual details about the region. This section appears directly beneath the carousel slideshow, 
and can also be reached by scrolling down from the top of the home page section.  

#### **'Things To Do' section**
The ‘Things To Do’ section contains 3 inline images with headings. These are animated with a JavaScript fadeBox 
function on initial page load. Animation is visibile when scrolling down for the first time visiting the page 
(reload required to view the animation again). 

Text relating to ‘things to do’ in The Burren accompanies the images. 

#### **'Map' section**
The ‘Maps’ section is comprised of 2 parts – buttons and links, and the map itself. The 3 buttons update from 
displaying text to font awesome icons when in mobile view.  
JavaScript has been used to ensure that interchangeable lists are linked to the buttons and also the map display.

#### **'Climate and Weather' section**
The Climate and Weather section contains text regarding local climate, plus a weather widget, which adds to the 
information-providing feel of the site.

#### **'Contact Us' section**
The contact form uses the EmailJS to send the site visitor’s details and message to a designated, checkable email 
address. A separate javascript script file, sendEmail.js, contains the function required to achieve this (a function 
is also present in the <head> section of the HTML file). 

Once the form is submitted a pop-up box containing a 'success' message is displayed, and the form fields are cleared.

### **Responsivity**
The Burren website is responsive across a number of browsers, devices and orientations. The site is contained on one 
vertical, scrollable page. The navigation links bring the user down the page to the relevant sections. Many of the elements 
are side-by-side in desktop view, but placed on top of each other in mobile view. This provides an intuitive experience for 
the user. The 'Map' section, for example, displays the buttons, list and map, easily visible together vertically on a mobile 
screen. 
The mock-ups below display various sections of the overall website. 


### **UX (User Experience)** 

#### **Strategy Plane**
This website could be used as part of a tourism drive for the area, possibly a government funded initiative to bring more 
tourists to the area, and boost the economy. The website could also improve the area’s presence online.  
User needs are met, as inspiring imagery encourages further exploration of the site, which leads to relevant information 
on the region. The site owner’s objectives are also met, as the content and ease of use provide relevant information to site 
visitors. 

#### **Strategy Plane**
The website contains a variety of features that enhance the tourism aspect of the site. The carousel slideshow provides 
auto-changing imagery. Three images above the ‘Things To Do’ section fade in as the user’s scroll down, encouraging them to 
take more notice of the imagery and leading down to the descriptive text beneath. 
Three buttons are present that when pressed display lists (links) and related markers on the accompanying map for each topic 
(i.e. Restaurants, Accommodation, Attractions). 
A weather widget is present, which displays the time, temperature and windspeed for Co. Clare. 
A contact form (utilising EmailJS) is also present. Users can enter their name, email address and query. The form then resets 
once ‘Submit’ is pressed. A success pop-up message is displayed. Messages are successfully sent to the related mailbox.

#### **Structure Plane**
Structurally, the website is light and uniform. It is easily navigated by either scrolling or by clicking on the navigation links. 
Navigation buttons and toggle work as expected, links also bring the user to the expected point on the page.  
The carousel is the only full-width feature on the desktop website, with the remaining content structured within a white 
background. On mobile, items appear vertically stacked. 

#### **Skeleton Plane**
Balsamiq wireframes were used to plan the layout of the website on both on desktop and mobile. The same features appear in both 
views, however the buttons x 3 linked to the URL lists change from text to font awesome icons on mobile. The overall layout 
works well as a single scrolling page, as some sections are not very content heavy and would not look as relevant as single html 
pages. 

#### **Surface Plane**
The colour palette was drawn mostly from the images used in the carousel, grey, beige, green and white. The pops of pink provided 
by the flowers are the only use of bright colour on the site. This evokes the bright, stark feel of the Burren, but also the 
serenity and pleasantness of the area. The layout of the website is minimal but informative. The menu and footer icons are 
minimalistic to reduce intrusiveness. The images and map are the main focus of the site.  

### **User Stories**

#### **First Time User**

- The site's purpose is clear, I am the intended user (tourist, visitor to the area, planning a visit to the area)
- I can navigate the single page website easily. Scrolling up and down the page is intuitive and error free
- The navigation links lead to the expected sections on the website
- I can find out the information I was expecting in the appropriate sectio (sometimes accompanied with images/widget)
- The map displays the list of restaurants, accommodation and attractions as expected when each button is clicked.
- The external links for each restaurant ect. listed are valid and take me to the external site
- The contact form allows me to send a query to the site owner, for example request for information on the area/tourist information.
- The social media icons link to relevant platforms
- The website is accessible and works on a variety of devices, including my laptop and my phone
- The website is also available via different browsers (Chrome, Safari, MS Edge)

#### **Returning User**

- I can check if new links have been added to the list of restaurants, accommodation or attractions
- I can check the map to help navigate the area
- I can read the information about the area, refresh my memory on things to do and check the weather widget
- I can send a query/message to the site owner via the contact form
- I can check the social media sites via the footer icons

#### **Frequent User**

- I can use the map to find the places listed
- I can contact the site owner with any questions on the area
- I can check for new sections/information on the area

### **Testing**

This is a partially static website with three main JavaScript features: fade in images, buttons and text/urls linked 
to the Google Maps map, and the EmailJS contact form.
Testing will cover JavaScript feature workability, visual inspection (layout, image clarity, alignment), text 
inspection, link and button inspection, browser/device compatability, responsivity, 

| Action                              | Expected Result  | Result           | Status|
| :----------------------------------- | :---------------- | :---------------- | :----- |
| Hover on logo/brand| Mild shadow present| Mild shadow present| Pass  |
| Click on the logo/brand| No action performed| No action performed| Pass  |
| Hover on each menu item| Bold on hover| Bold on hover| Pass  |
| Hover on each menu item via toggle button/mobile view| Bold on hover| Bold on hover| Pass  |
| Click on the navigation items        | Expected sections displayed| Expected sections displayed| Pass  |
| Click on the navigation items via toggle button/mobile view        | Expected sections displayed| Expected sections displayed| Pass  |
| Click on the toggle button and navigation buttons in mobile view       | Navigation items are displayed and expected pages open  | Navigation items are displayed and expected pages open  | Pass  |
| View the carousel slider images| Four images, auto-change at equal intervals | Four images, auto-change at equal intervals  | Pass  |
| Click on the carousel chevrons/arrows x 2 | Moves to next/previous image | Moves to next/previous image | Pass  |
| Scroll down from top of page | Text and 3 images with fade in JS animation displayed  | Text and 3 images with fade in JS animation displayed  | Pass  |
| Scroll up and down again | Image animation only displayed initially or on page reload | Image animation only displayed initially or on page reload | Pass  |
| Scroll down to the map section | Three buttons, list of links and map are present| Three buttons, list of links and map are present  | Pass  |
| View the buttons and list | The first button is active and displays the 'Restaurants' list| The first button is active and displays the 'Restaurants' list | Pass  |
| Click on each button| The three buttons work as expected, display the correct lists and map markers | The three buttons work as expected, display the correct lists and map markers| Pass  |
| Click on the listed links | External sites open in new tab | External sites open in new tab | Pass  |
| Zoom in on map to view | Markers and clusters can be zoomed in on and read |  Markers and clusters can be zoomed in on and read present  | Pass  |
| Check each map button/feature| Each map button works as expected |  Each map button works as expected present  | Pass  |
| Accept weather widget cookies and check info| Weather widget information is up to date |  Weather widget information is up to date | Pass  |
| Enter name, email and text in the ‘Contact Us' form| Fields can be populated correctly | Fields can be populated correctly  | Pass  |
| Click the 'Submit' button | The form is cleared, a success pop-up is displayed, message received to designated mailbox | The form is cleared, a success pop-up is displayed, message received to designated mailbox | Pass  |
| Click on each social media icon in the footer in turn | Each platform is displayed in a new tab| Each platform is displayed in a new tab| Pass  |
| Resize the screen | Each element of the page is displayed as expected | Each element of the page is displayed as expected| Pass  |
| Check each image for skew/pixelation | Each image is clear and unskewed | Each image is clear and unskewed | Pass  |

### **Design**

#### **Wireframes**

The site layout (desktop/mobile) was planned using Balsamiq (www.balsamiq.com). See below. Full size images are available [here] 

_Full Desktop View_<br>

_Mobile Views_<br>


#### **Color Palette**

Coolers website (www.coolors.com) was used to compile the colour palette. 
