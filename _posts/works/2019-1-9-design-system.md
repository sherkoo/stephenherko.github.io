---
layout: work
title: Design System
slug: design-system
date: 2019-01-09 15:44:10
categories:
  - works
description: "When the UX team was approached to develop a new visual design system for our e-commerce client, there was a lot of questions that needed to be discussed. Large E-commerce sites preset their own set of unique challenges and needs. Typography plays a big role in this. Between product titles, prices, descriptions, bullet points, urgency tags, and etc."
thumbnail: illustration-2.jpg
color: "#3a4c95"
published: false
tags:
  - Architecture
  - Development
  - Ensuring Web Accessibility
  - Front end Management
  - Quality Assurance
---

<div class="container">
  <div class="grid">
    <div>
      <img src="/img/work/design-system/Illustration-1.jpg" alt="">
    </div>
  </div>

  <br>

  <div class="container">
    <h2 class="display">Challenges</h2>
    <div class="grid col-8-4">
      <div>
        <p>This was a massive E-commerce platform built from scratch on React and Node. Due to the scale of the site, the developemnt teams worked in silos. This had a negative impact on the customer facing side. Not every engineering group would deploy code at the same time. This meant that UI elements and updates would not be consistent across the site. Customers going through a beginning and end journey could see an inconsistent experience. This causes confusion and looks unprofessional. This is obviously unfavorable when you’re working with a site that sees millions of users a day. Using my knowledge in engineering and UX, It was my role to figure out why this was happening, and how it can be solved for.</p>
      </div>
    </div>
  </div>

  <div class="grid">
    <div>
      <img src="/img/work/design-system/Illustration-2.jpg" alt="">
    </div>
  </div>

  <div class="container">
    <h2 class="display">Research and User Interviews</h2>
    <div class="grid col-8-4">
      <div>
        <p>Interviews took place in-house within the organization, and were conducted regularly. I worked with the lead UX designer, UI designers and developers on the project. I used my experience in development to understand the challenges from both parties, and to bridge communication. The pages on the site where set up to only load the code it needed to. It would be too costly to load the entire code base on every page.</p>
        <p>"We dont have an authority to manage code, so things get rushed."</p>
        <p>Developers were coding the same elements over and over again. Since the teams were so big, communication was difficult and time costly. Another challenge was going to come up with a language designers and developers can both understand.</p>
      </div>
    </div>
  </div>

  <div class="grid">
    <div>
      <img src="/img/work/design-system/Illustration-3.jpg" alt="">
    </div>
  </div>

  <br>

  <div class="grid col-6">
    <div>
        <h2 class="display">Solutions</h2>
          <p>We decided on two solutions. 1.) The UX team should develop the front end code 2.) We needed to split the codebase up to allow quicker, and more consistent deployment, and 3.) Code deserves a "design system" just as much as the UI. We pushed for the UX team to develop the code whilst we were designing the system to allow for accuracy and quick changes on the fly. If we ran into a challenge with the UI of the design system, we could easily change it on the code side, and validate it on screen. Since coding UI has a tendency to appear differently from the intended mocks, we used how as our source of truth.</p>

          <p>For example, in the design mocks, something looked good with 24px of padding, but on screen appeared as too much. I would adjust the spacing on the code side until we reached a desirable result. After that, we would update the mocks with the UX team.</p>
        </div>

        <div>
        <h2 class="display">Naming Conventions</h2>
          <p>I wanted to put a lot of emphasis on the architecture of the code, and naming of elements. The development team and the UX team had their own nomenclature which was seperate from one another. We wanted to increase the communication between designers and developers, and improve upon the experience of handing designs off to be coded. When a designer is communicating with a developer, or vice versa, it should be as easy as saying "Please change the headline to the Large size", or "Use the margin-L sizing for that component".
    .price-L
    .price-M
    .mrk-lbl-L
    .mrk-lbl-M</p>
        </div>
  </div>

  <div class="container">
    <div class="grid col-6">
      <div>
        <img src="img/work/design-system/lincoln-1.png" alt="">
      </div>
      <div>
        <img src="img/work/design-system/lincoln-2.png" alt="">
      </div>
      <div>
        <img src="img/work/design-system/lincoln-3.png" alt="">
      </div>
    </div>
    <div class="grid col-6">
      <div>
        <img src="img/work/design-system/code1.png" alt="">
      </div>
      <div>
        <img src="img/work/design-system/code2.png" alt="">
      </div>
    </div>
    <h2 class="display">Rules & Regulations</h2>
    <div class="grid col-8-4">
      <div>
        <p>By creating a source for the developers to turn to if they get stuck. Alleviating spent thinking about the small things, and leaving more time solving the more complicated problems. We used the ATOMIC design system styling for this, and wanted to show stakeholders and developers how it works with the entire team. This guide was built in HTML and hosted so in-house and off-shore developers could access it.</p>
      </div>
    </div>
  </div>
</div>
