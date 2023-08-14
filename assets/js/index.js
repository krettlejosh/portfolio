// Header
fetch("assets/json/banner.json")
  .then((response) => response.json())
  .then((data) => {
    const header = document.getElementById("header")
    header.innerHTML = data
      .map(
        (banner) => `
                
                  <h5>Hello I'm</h5>
                  <h2>${banner.name}</h2>
                  <p>${banner.position}</p>
                <div class="cta">
                  <a
                    href="${banner.download}"
                    download=""
                    class="btn"
                    >Download CV</a
                  ><a href="#contact" class="btn btn-primary">Let's Talk</a>
                </div>
                <div class="header__socials">
                   <a href=" ${banner.linkedinlink}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    ${banner.linkedin}
                  </svg></a>
                  <a href="${banner.telegramlink}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                    ${banner.telegram}
                  </svg></a>
                  <a href="${banner.facebooklink}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    ${banner.facebook}
                  </svg></a>
                </div>
                <div class="me">
                  <img src="${banner.me}" alt="me">
                </div>
                <a href="#contact" class="scroll__down">Scroll Down</a>
              `
      )
      .join("")
  })
// Header

// Nav


fetch("assets/json/nav.json")
  .then((response) => response.json())
  .then((data) => {
    const nav = document.getElementById("nav")
    const links = nav.querySelectorAll(".nav-links")
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault()
        links.forEach((link) => link.classList.remove("active"))
        link.classList.add("active")
      })
    })
    nav.innerHTML = data
      .map(
        (nav) => `
              <a href="#" class="nav-links active"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  ${nav.home}
                </svg></a
              >
              <a href="${nav.aboutlink}" class="nav-links"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   ${nav.about}
                </svg></a
              >
              <a href="${nav.educationlink}" class="nav-links"
                ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                   ${nav.education}
                </svg></a
              >
              <a href="${nav.skillslink}" class="nav-links"
                ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
                   ${nav.skills}
                </svg></a
              >
              <a href="${nav.experiencelink}" class="nav-links"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   ${nav.experience}
                </svg></a
              >
              <a href="${nav.portfoliolink}" class="nav-links"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cast"
                  viewBox="0 0 16 16"
                >
                  ${nav.portfolio}
                  <circle cx="9.5" cy="11.5" r="1.5"></circle>
                  <circle cx="14.5" cy="11.5" r="1.5"></circle>
                </svg>
              </a>
              <a href=" ${nav.contactlink}" class="nav-links"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   ${nav.contact}
                  <circle cx="9.5" cy="11.5" r="1.5"></circle>
                  <circle cx="14.5" cy="11.5" r="1.5"></circle>
                </svg>
              </a>

              `
      )
      .join("")
    // add click event listener to each anchor tag
    const navLinks = document.querySelectorAll("a.nav-links")
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        // remove "active" class from all anchor tags
        navLinks.forEach((link) => link.classList.remove("active"))
        // add "active" class to clicked anchor tag
        link.classList.add("active")
      })
    })
  })

  


// Nav


// About
fetch("assets/json/about.json")
  .then((response) => response.json())
  .then((data) => {
    const about = document.getElementById("about")
    about.innerHTML = data
      .map(
        (about) => `
                  <h5>Get to Know</h5>
                    <h2>About Me</h2>
                          <div class="container about__container">
                            <div class="about__me">
                              <div class="about__me-image">
                                <img src="${about.image}" alt="me" />
                              </div>
                            </div>
                            <div class="about__content">
                                  <div class="about__cards">
                                    <article class="about__card">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 384 512"
                                        class="about__icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        ${about.experienceImg}
                                      </svg>
                                      <h5>Experience</h5>
                                      <small>${about.experienceCount}</small>
                                    </article>
                                    <article class="about__card">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="about__icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        ${about.clientsImg}
                                      </svg>
                                      <h5>Clients</h5>
                                      <small>${about.clientsCount}</small>
                                    </article>
                                    <article class="about__card">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 16 16"
                                        class="about__icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                       ${about.projectImg}
                                        <rect x="8" y="8" width="1" height="6"></rect>
                                        <rect x="10" y="8" width="1" height="6"></rect>
                                        <rect
                                          x="12.0041"
                                          y="8.35193"
                                          width="1"
                                          height="6"
                                          transform="rotate(-20 12.0041 8.35193)"
                                        ></rect>
                                      </svg>
                                      <h5>Project</h5>
                                      <small>${about.projectCount}</small>
                                    </article>
                                  </div>
                                    ${about.info}
                                  <a href="#contact" class="btn btn-primary">Let's Talk</a>
                            </div>
                          </div>
        `
      )
      .join("")
  })
// About

// Education
fetch("assets/json/education.json")
  .then((response) => response.json())
  .then((data) => {
    const educ = document.getElementById("education")
    for (let i = 0; i < data.education.length; i++) {
      educ.innerHTML += `
                <article class="educations">
                  <div class="educations__head"><h3>${data.education[i].degree}</h3></div>
                  <ul class="educations__list">
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        class="educations__list-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        ${data.icon.school}
                      </svg>
                      <p>${data.education[i].name}</p>
                    </li>
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        class="educations__list-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        ${data.icon.book}
                      </svg>
                      <p>${data.education[i].school}</p>
                    </li>
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        version="1.1"
                        viewBox="0 0 16 16"
                        class="educations__list-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        ${data.icon.location}
                      </svg>
                      <p>${data.education[i].address}</p>
                    </li>
                  </ul>
                </article>
          `
    }
  })
// Education

// Skills
// fetch the data from the JSON file
fetch("assets/json/skills.json")
  .then((response) => response.json())
  .then((data) => {
    // loop through each skill category
    data.skills.forEach((category) => {
      // create a new div element for the category
      const categoryDiv = document.createElement("div")
      categoryDiv.classList.add( `${category.category[0]}` + "__content")

      let skillsHTML = ""

      // loop through each skill in the category
      category.skills.forEach((skill) => {
        skillsHTML += `<article  class='skills__details'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="skills__details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg><div><h4>${skill.name}</h4><small class="text-light">${skill.experience}</small></div></article>`
      })

      categoryDiv.innerHTML = `
        
            <h3>${category.category}</h3>
            <div class="skills__content">
              ${skillsHTML}
            </div>
          
      `
      // add the category div to the skills container
      const skillsContainer = document.getElementById("skills")
      skillsContainer.appendChild(categoryDiv)
    })
  })

// Skills

// Work Exp
// Fetch the work experience data from the JSON file
fetch('assets/json/work.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each work experience item
    data.forEach(workExperience => {
      // Create a new work experience details element
      const workExperienceDetails = document.createElement('div');
      workExperienceDetails.classList.add('workexperience__content');

      // Add the work experience data to the details element
      workExperienceDetails.innerHTML = `
      <article class="workexperience__details">
        <div>
          <h3>${workExperience.company} <sup>${workExperience.years}</sup></h3>
          <h5>${workExperience.position}</h5>
          <small class="text-light">${workExperience.description}</small>
        </div>
      </article>
      `

      // Add the details element to the work experience container
      const workExperienceContainer = document.getElementById('workexperience__content');
      workExperienceContainer.appendChild(workExperienceDetails);
    });
  });

// Work Exp

// Portfolio

const portfolio = document.getElementById("Marketrole")
const portfolio2 = document.getElementById("Mbm")
fetch("assets/json/portfolio.json")
    .then((response) => response.json())
    .then((data) => {
      let Marketrole = ""
      let Mbm = ""

      data.Marketrole.forEach((item) => {
        Marketrole += `
        
        <swiper-slide role="group" aria-label="NaN / 6" style="transform: translate3d(0px, 0px, -400px) rotateX(0deg) rotateY(200deg) scale(1); z-index: -3; transition-duration: 0ms;" class="">
          <a href="${item.link}" target="_blank">
            <img src="${item.image}" alt="${item.title}"> 
          </a>
           <h5>${item.title}</h5>
         
        <div class="swiper-slide-shadow-left" style="opacity: 4; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div></swiper-slide>
      `
      })

      data.Mbm.forEach((item) => {
        Mbm += `
        
        <swiper-slide role="group" aria-label="NaN / 6" style="transform: translate3d(0px, 0px, -400px) rotateX(0deg) rotateY(200deg) scale(1); z-index: -3; transition-duration: 0ms;" class="">
          <a href="${item.link}" target="_blank">
            <img src="${item.image}" alt="${item.title}"> 
          </a>
           <h5>${item.title}</h5>
         
        <div class="swiper-slide-shadow-left" style="opacity: 4; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div></swiper-slide>
      `
      })

      portfolio.innerHTML = Marketrole
      portfolio2.innerHTML = Mbm
    })
    .catch((error) => {
      console.error(error)
    })




// Portfolio

// Contact
const contact = document.getElementById("contactOption")

fetch("assets/json/contact.json")
  .then((response) => response.json())
  .then((data) => {
    let html = ""
    data.forEach((item) => {
      html += `
      <article class="contact__option">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="${item.icon}" viewBox="0 0 16 16">
          ${item.path}
            </svg>
            <h4>${item.type}</h4>
            <h5>${item.text}</h5><a href="${item.href}" target="_blank">Send a message</a>
          </article>
      `
    })
    contact.innerHTML = html
  })
  .catch((error) => {
    console.error(error)
  })

// Contact

// Footer
const footer = document.getElementById("footerlinks")
const copyright = document.getElementById("copyright")
const socials = document.getElementById("socials")
fetch("assets/json/footer.json")
  .then((response) => response.json())
  .then((data) => {
    let linksHTML = ""
    data.permalinks.forEach((links) => {
      linksHTML += `<li><a href="${links.href}">${links.text}</a></li></li>`
    })
    let html = ""
    
      html += `
        <a href="${data.logo.href}" class="footer__logo">${data.logo.text}</a>
      <ul class="permalinks">
        ${linksHTML}
      </ul>
        
      `
    footer.innerHTML = html

    // Socials
    let social = ""
    data.socials.forEach((links) => {
      social += `
      <a href="${links.href}" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="${links.icon}" viewBox="0 0 16 16">
          ${links.social}
        </svg>
      </a>`
    })
    
    socials.innerHTML = social

    // Copyright
    let copy = ""
    copy += `<small>${data.copyright.text}</small>`
    copyright.innerHTML = copy
  })
  .catch((error) => {
    console.error(error)
  })
// Footer

// Send Message
// Get the modal
      var modal = document.getElementById("myModal");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
// Send Message


