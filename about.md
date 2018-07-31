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
      <h2>Hello, <br>My Name <br>Is Stephen</h2>
      <p>I've been working professionally for the last 12 years. My background began in advertising where I developed print and marketing campaigns. From there I fell in love with web development, design, branding, and building products for the web.</p>
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
    <p class="display-text">
      I'm always looking for challenges and self improvement
    </p>
  </div>
</section>

{% include skills-icons.html %}
