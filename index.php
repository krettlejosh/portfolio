<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-icons.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
</head>

<body data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <header>
    <section id="header" class="container header__container"></section>
  </header>
  <nav id="nav"></nav>
  <main>
    <section class="about" id="about"></section>
    <section id="educations">
      <h2>Educational Attainment</h2>
      <div class="container educationsC__container" id="education"></div>
    </section>
    <section id="skill">
      <h2>Skills</h2>
      <div class="container skills__container" id="skills"></div>
    </section>
    <section id="workexperience">
      <h2>Work Experience</h2>
      <div class="container workexperience__container" id="workexperience__content">
        <!-- Work experience details will be dynamically generated here -->
      </div>
      <h5>
        Note: I did not include any prior work that was unrelated to web
        development.
      </h5>
    </section>
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div class="port__modal">
        <h2>Marketrole Asia Pacific Services Inc <sup>March 2023 - August 2023</sup></h2>
        <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" rewind="true" id="Marketrole">
        </swiper-container>
      </div>

      <div class="port__modal">
        <h2>Flying Dragon Network Inc. <sup>August 2022 - March 2023</sup></h2>
        <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" rewind="true" id="Mbm">
        </swiper-container>
      </div>
    </section>
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div class="container contact__container">
        <div class="contact__options" id="contactOption"></div>

        <form action="sendmail.php" method="post">
          <input type="email" name="email" value="" placeholder="Email" required="" />
          <input type="text" name="subject" value="" placeholder="subject" required="" />
          <textarea name="message" value="" rows="10" placeholder="Your Message" required="">
            </textarea>
          <button type="submit" name="send" class="btn btn-primary">Send Message</button>
        </form>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Your message has been sent.</p>
          </div>
        </div>
      </div>

    </section>

  </main>
  <footer id="footer">
    <div id="footerlinks"></div>
    <div class="footer__socials" id="socials"></div>
    <div class="footer__copyright" id="copyright"></div>
  </footer>
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/jquery-3.6.4.min.js"></script>
  <script src="assets/js/swiper-element-bundle.min.js"></script>
  <script src="assets/js/index.js"></script>
  <script src="assets/js/validate.js"></script>
</body>

</html>