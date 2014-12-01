---
layout: post
title:  "The Importance of Commenting HTML"
date:   2014-12-01 21:06:35
categories:
description: "The Importance of Commenting HTML is crucial. There are a lot of benefits to keeping your code structured."
thumbnail: code
---

##Benefits
- Easy for team members to understand
- Discern what’s going on more quickly in old code
- Much easier to read when your code gets lengthy
- Sublime Text makes it very easy with the shortcut cmd+/
- Ensure your end div tags exist

##Application
{% highlight ruby %}
<!-- opening comment -->
<!-- /closing comment -->
{% endhighlight %}

##Example
{% highlight ruby %}
<!-- container -->
<div class="container">
  <!-- main-header -->
  <header id="main-header" role="banner">
    <h1 id="logo">Logo</h1>
    <!-- main-navigation -->
    <nav id="main-navigation" role="navigation">
      <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </nav>
    <!-- /main-navigation -->
  </header>
  <!-- /main-header -->
</div>
<!-- /container -->
{% endhighlight %}

