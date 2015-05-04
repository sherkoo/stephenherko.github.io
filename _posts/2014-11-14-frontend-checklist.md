---
layout: post
title:  "Frontend Checklist"
date:   2014-11-14 17:22:20
categories:
  - blog
description: "A friendly frontend checklist for developers. Tips for CSS, Javascript, Gulp, SEO, Images, HTML, Load times."
thumbnail: code
---

I've put together a frontend checklist before you deploy your site. Or can be used as a friendly reminder. The list can be downloaded here: 
[https://github.com/stephenherko/frontend-checklist](https://github.com/stephenherko/frontend-checklist)

##CSS
1. <input type="checkbox"> CSS is linked first
1. <input type="checkbox"> CSS served concatenated
1. <input type="checkbox"> CSS is minified
1. <input type="checkbox"> Consider SASS instead of CSS
1. <input type="checkbox"> Make sure each CSS file has a comment and title at top
1. <input type="checkbox"> Never style ID's
1. <input type="checkbox"> Follow Structure
    * screen.scss (Contains all @include's)
    * vendor/ (CSS related to javascript)
    * modules/ (mixins, variables and utilities (such as icons))
    * patterns/ (global styles, buttons, and forms)
    * components/ (groups of patterns with small bits of layout)
    * layouts/ (page layouts go and any page-specific changes to patterns and components)
         

##Javascript
1. <input type="checkbox"> Javascript at bottom of page
1. <input type="checkbox"> Javascript served concatenated
1. <input type="checkbox"> Google API used when possible
1. <input type="checkbox"> Javascript is minified
1. <input type="checkbox"> Add Modernizr.js
1. <input type="checkbox"> Make sure each JS file has a comment and title at top

##Gulp.js
1. <input type="checkbox"> Use Gulp
1. <input type="checkbox"> Clone gulpfile.js <a href="https://github.com/stephenherko/gulpfile.js" target="blank">https://github.com/stephenherko/gulpfile.js</a>
1. <input type="checkbox"> CLI: npm init
1. <input type="checkbox"> CLI: npm install --save-dev gulp-(node module specific name)

##Head
1. <input type="checkbox"> Charset declared
1. <input type="checkbox"> Expires headers are used advantageously
1. <input type="checkbox"> Title tag is used - No more than 65 characters
1. <input type="checkbox"> Meta description - No more than 150 characters
1. <input type="checkbox"> Favicon
1. <input type="checkbox"> Link to sitemap < link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />"

##Load Times
1. <input type="checkbox"> Single pages are less than 500k
1. <input type="checkbox"> Run through Google page speed <a href="https://developers.google.com/speed/pagespeed/" target="blank">https://developers.google.com/speed/pagespeed/</a>

##Images
1. <input type="checkbox"> Images have height and width set
1. <input type="checkbox"> Images used sparingly
1. <input type="checkbox"> PNG's instead of GIF's
1. <input type="checkbox"> All images have alt tags
1. <input type="checkbox"> Minimize all images

##HTML
1. <input type="checkbox"> ID's are unique to a page
1. <input type="checkbox"> HTML5 semanticly used (header, nav, main, section, article, aside, footer)
1. <input type="checkbox"> Properly used H1-H6 tags
1. <input type="checkbox"> No broken Links
1. <input type="checkbox"> Validate with W3C <a href="http://validator.w3.org/" target="blank">http://validator.w3.org/</a>
1. <input type="checkbox"> Responsive if applicable
1. <input type="checkbox"> < header > has role="banner"
1. <input type="checkbox"> < nav > has role="navigation"
1. <input type="checkbox"> < main > has role="main"
1. <input type="checkbox"> 404 error page included
1. <input type="checkbox"> Clean up commented code/unnecessary code
1. <input type="checkbox"> Make sure to follow secton/article HTML5 standards <a href="https://github.com/stephenherko/html5blank/blob/master/index.html">https://github.com/stephenherko/html5blank/blob/master/index.html</a>

##SEO (On-Site)
1. <input type="checkbox"> Friendly URL's
1. <input type="checkbox"> Sitemap.xml - Submit to Google
1. <input type="checkbox"> Help pagination with rel="next" and rel="prev" tag
1. <input type="checkbox"> Make sure robots can access page
1. <input type="checkbox"> Use 301 instead of 302 when possible
1. <input type="checkbox"> Responsive sites are better for SEO
1. <input type="checkbox"> Use rel="canonical" for duplicate content
1. <input type="checkbox"> HTML sitemap
1. <input type="checkbox"> Sign up for Google pages <a href="https://plus.google.com/dashboard" target="blank">plus.google.com/dashboard</a>
1. <input type="checkbox"> Make use of rich snippets <a href="http://schema.org" target="blank">www.schema.org</a>

##SEO (On-Page)
1. <input type="checkbox"> Use hyphens to split urls
1. <input type="checkbox"> Single keyword per page
1. <input type="checkbox"> Keyword in URL
1. <input type="checkbox"> Keyword in title
1. <input type="checkbox"> Keyword in heading
1. <input type="checkbox"> Keyword in content

##SEO (Off-Page)
1. <input type="checkbox"> Google analytics <a href="http://www.google.com/analytics" target="blank">http://www.google.com/analytics</a>
1. <input type="checkbox"> Google webmaster <a href="http://www.google.com/webmasters" target="blank">http://www.google.com/webmasters</a>
1. <input type="checkbox"> Google Business <a href="http://www.google.com/business/" target="blank">http://www.google.com/business/</a>
1. <input type="checkbox"> Google Plus Page <a href="https://plus.google.com/" target="blank">https://plus.google.com//</a>
1. <input type="checkbox"> Add label and URL to Google plus page about contributor to section
1. <input type="checkbox"> <a href="http://www.google.com/webmasters/tools/richsnippets" target="blank">http://www.google.com/webmasters/tools/richsnippets</a>
1. <input type="checkbox"> Twitter Page <a href="https:/twitter.com/" target="blank">https://twitter.com//</a>
1. <input type="checkbox"> Facebook Page <a href="https:/facebook.com/" target="blank">https://facebook.com//</a>
1. <input type="checkbox"> Pinterest Page <a href="https:/pinterest.com/" target="blank">https://pinterest.com//</a>

##Wordpress
1. <input type="checkbox"> Yoast SEO plugin
1. <input type="checkbox"> W3 Total Cache plugin