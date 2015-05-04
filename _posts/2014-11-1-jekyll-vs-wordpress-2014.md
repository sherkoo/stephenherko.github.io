---
layout: post
title:  "Jekyll vs Wordpress 2014"
date:   2014-11-02 10:15:16
categories: 
  - blog
description: "Jekyll vs Wordpress against various qualities including speed, security, on site seo, speed and more. Which is better at blogging in 2014?"
thumbnail: blog
---

I’ve used wordpress a lot for projects. My preferred method is to design and write the theme from scratch. I’ve built a [blank wordpress shell](https://github.com/stephenherko/wordpressblank) to automate things a little better. I’ve been intrigued by [Jekyll](http://jekyllrb.com/) for a while now. I’ve built some sites locally but never put anything out in the “real world” with it. I like to build projects from the ground up, as opposed to starting with a bunch of code and hacking my way through until I get something I want.

1. ###Speed
Speed is very important. It makes a better user experience and improves your SEO.  
**Wordpress** - These days wordpress is getting pretty bloated. That was one of the reasons why I sought out an alternative to build my site with. I’m less likely to return to a site that feels very clunky and slow.  
**Jekyll** - Generates static html. It runs all on the client side. Every site I've visited that was built with Jekyll ran like a dream.

1. ###Git
**Wordpress** - Of course you can still use git with wordpress, but mainly for the design portion. Once your theme is set, your posting your blog posts to a database.  
**Jekyll** - You get to use git with Jekyll very often. Some may consider this a "pain", but personally I love it. I feel like using git for everything with Jekyll like posting, design changes, template changes, it automates the process much more.

1. ###Security
Call me a paranoid person but internet security is important.  
**Wordpress** - Are wordpress sites hackable? Oh yes. It took me all of 3 seconds to learn how to hack one [here](http://www.flippercode.com/how-to-hack-wordpress-site-using-sql-injection/).  
**Jekyll** - Theres no databases to connect to with jekyll so no log in required. You write, then push your changes to your git repository. If your site is set up with github pages, this will update automatically. Basically there's nothing to hack since it's all static.

1. ###Ease of use
Lets face it, were all busy with our lives, our significant others, families, our careers, you name it.  
**Wordpress** - With wordpress you have to navigate to www.yoursite.com/wp-admin, enter your username and password, click the button to make a new blog post, then start writing. Even tho its my own site, I feel like I’m logging on to someones else’s to post my own content.  
**Jekyll** - I feel so much more connected with jekyll then I do with a wordpress blog. You can easily write offline, on your own computer in the editor of your choice. I feel like I’m more connected to my writing and my blog. Which makes me want to write more!

1. ###Code
**Wordpress** - At the core wordpress is built with PHP, but when you’re writing blog posts you get to use a WYSIWYG editor. I feel so lost with these things. I’ve noticed many times if you want to put a headline in an <h2> tag, and then you backspace, it’ll delete the tag, or put everything in an <h2> tag. Not only are you affecting the design of your post, but the SEO as well.  
**Jeykll** - Is built with ruby and gives developers the opportunity to write their blog posts in markdown. Markdown is amazing to write with. In my opinion it's easier to manage. I'm a programmer, id rather just see the code.   

1. ###Templating
**Wordpress** -  Wordpress has some things over jekyll in this regard. In wordpress you have the luxury of a dropdown menu which lets you pick the template you’d like to use.      
**Jekyll** - With jekyll you need to type out which one you’d like. This could create problems if you had a 100 posts and wanted to change the template name.

1. ###On Site SEO
This really comes down to strategy, and I'm mainly talking about your title, meta description, and friendly URL's.  
**Wordpress** - You either need to do write some custom functions or download a plugin to handle that for you. I’m not a huge advocate for plugins. Personally I can’t stand bloated, unnecessary code that comes with a lot of them. The setting for friendly URL's is very easy to find, but doesn't come out of the box.  
**Jekyll** - Comes out of the box supporting friendly URL's. You'll have to incorporate your own logic to support meta descriptions. Which really isn't too difficult. I just added mine to post, then called it from my header template.  

1. ###Maintenance
**Wordpress** -  If you’re a wordpress developer or you use wordpress sites, you’ve of course ran into the white screen of death a time or two. If you’re just starting out with wordpress, it can be difficult to tell why that happend or where it came from. If you have plugins, those and the wordpress installation itself will most likely need to be updated every so often. If you don't keep up with wordpress updates, you could put your site at risk for hackers. Installed a plugin that wasn't friendly with your theme? Bam broken. Wordpress has been known to struggle under heavy load. This of course is situational and doesn't happen to every wordpress site.  
**Jekyll** - The static generated HTML files only puts a tiny amount of load on your site. You can still break a Jekyll site, but the great thing about that is your CLI will give you a heads up on what happened. 

1. ###Cost
**Wordpress** - For a "professional site", you'll need a custom domain and hosting that supplies PHP 5.2.4 or greater and MySQL 5.0 or greater.   
**Jekyll** - Can be hosted for free on your github account (if you choose to). You’ll need to purchase a domain name if you don't want your url to appear as username.github.io. Not a requirement tho.

**Conclusion:** I really like jekyll, and I'm going to try and use it as much as possible in the future. I'm not going to pick a "winner" because they both have pros and cons. I would use Wordpress over Jekyll when the project’s scope required certain features. Wordpress would absolutely be a better option for a team of bloggers, or a site that needs more control over it’s users. If you're a single programmer, you like git, and have been wanting to write, give [Jekyll](http://jekyllrb.com/) a try. Let me know if you have a preference between the two.
