---
layout: page
title: Articles
permalink: /articles/
---

<main role="main">
  <section class="articles">
    <div class="container">
      <div class="row">
        {% for post in site.posts %}
        <div class="col-2 col-md-3 col-sm-6">
          <article class="article">
            <time class="article__time" datetime="{{ post.date | date: "%F %H:%M:%S" }}"></time>
            <h2 class="article__title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
            <p class="article__body">{{ post.excerpt | strip_html | truncatewords:135 }}</p>
            <a class="article__read" href="{{ post.url | prepend: site.baseurl }}">Read</a>
          </article> <!-- /.article -->
        </div> <!-- /.col-2 -->
        {% endfor %}
      </div> <!-- /.row -->
    </div> <!-- /.container -->
  </section> <!-- /section articles -->
</main>