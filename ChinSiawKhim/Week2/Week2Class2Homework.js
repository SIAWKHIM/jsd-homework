// Exercise #1: The DOM Detective
// Visit General Assembly's website in Google Chrome, and open up the JavaScript console.
//      https://generalassemb.ly/

// You'll have to do this all in the JavaScript console, so keep track of what you have written!

// Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

// The title of the page
// The logo in the nav
// The "Find Your Course" button in the nav
// The heading that says "Learning Today, Leading Tomorrow"
// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
// The amount of campuses around the world
// The number of instructors
// The logos of GA's featured clients and hiring partners
// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
// The input where you add your email to sign up for the newsletter (in the footer)


let title = document.querySelector("title");
let logo = document.querySelector(".navi_banner a");
let findYourCourse = document.querySelector(".navi_menu .highlight a");
let h1heading = document.querySelector(".g-row h1").innerHTML;
//let h1Heading = document.querySelector("h1")
let coursesName = document.querySelector(".navi_menu_dropdown_nested-dropdown");
let amtCampuses = document.querySelector(".facts_list_item_quantity");
let numInstructors = document.querySelector(".facts_list_item_quantity");
//document.querySelector('a[href="/locations"] div[class="facts_list_item_quantity"]')
//document.querySelectorAll(".facts_list_item_quantity")[2]
let logos = document.querySelector(".Employers__list___1cuG_");
let gaSocialLink1 = document.querySelector(".navi_footer-social-icons_facebook");
let gaSocialLink2 = document.querySelector(".navi_footer-social-icons_twitter");
let gaSocialLink3 = document.querySelector(".navi_footer-social-icons_linkedin");
let gaSocialLink4 = document.querySelector(".navi_footer-social-icons_instagram");
let gaSocialLink5 = document.querySelector(".navi_footer-social-icons_youtube");
let email = document.querySelector(".navi_footer-signup-email-input")





// Exercises #2: Working with the CSSOM
// Replace the Logo
// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
// Save the current src attribute into a variable
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead



let logo = document.querySelector(".lnXdpd");
let srcImage = logo.src;
//let srcImage = document.querySelector(".lnXdpd").src;

let image = document.querySelectorAll("img")
let srcImage = image[1].src
image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
//let gugelLogo = document.querySelector(".lnXdpd");
//gugelLogo.srcset = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png";

let search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")

search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")
search.value = "Yahoo!";




// Exercise 3: More DOM Manipulation
// a) About Me
// Every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>

//  </body>
// </html>
// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color "red".
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.




