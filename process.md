---
layout: page
title: Process
permalink: /process/
---

<section class="process-container">
  {% for pro in site.data.process %}
    <article class="process">
      <div class="process-meta">
        <h2>{{ pro.name }}</h2>
        <p>{{ pro.description }}</p>
      </div>
    </article>
  {% endfor %}
</section>
