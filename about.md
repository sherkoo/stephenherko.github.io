---
layout: page
title: About
permalink: /about/
---

<section class="about-page-intro">
  <div class="container">
    <div class="about-page-intro-img">
    </div>
    <div class="about-page-intro-meta">
      <h2>Hello, <br>My Name Is Stephen</h2>
      <p>I've been working professionally for the last 10 years. My background began in advertising where I developed print and marketing campaigns. From there I fell in love with web development, design, branding, and building products for the web.</p>
    </div>
  </div>
</section>

<section class="about-page-clients">
  <div class="container">
    {% for client in site.data.clients %}
      <div class="about-page-client">
        <div class="about-page-client-img">
          <img src="{{ site.baseurl }}/img/clients/{{ client.img }}" alt="{{ client.name }}" />
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="about-page-quote">
  <div class="container">
    I'm always looking for challenges and self improvement. Two things I believe are essential to any creative's career.
  </div>
</section>

{% include skills-icons.html %}



<!-- I've been working professionally for the last 10 years. My background began in advertising where I developed print and marketing campaigns. From there I fell in love with web development, design, branding, and building products for the web. Originally from the Philadelphia area, I'm now residing in Texas. I'm always looking for challenges and self improvement. Two things I believe are essential to any creative's career. I'm currently working as a designer and front end developer. I'm interested in skill sets like Branding and UI/UX Design. HTML5, CSS3, Sketch3, Sass/Scss, Gulp.js, Jquery/Javascript, Angular.js, Git/Github, Responsive Web Design, Wordpress (Custom Themes), Bootstrap, BEM Methodology, SMACSS Methodology, Photoshop CC, Illustrator CC, InDesign CC, Sublime Text, Google Analytics, Google Webmaster Tools -->
