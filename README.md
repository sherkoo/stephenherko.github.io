# Personal Portfolio
My personal portfolio of work containing UX, web design and front-end development. This site is powered by Jekyll, HTML, SCSS and just a tiny bit of JavaScript.

## Prerequisites
- Ruby 2.0 or higher
- Jekyll https://jekyllrb.com/docs/installation/
- Sass
- CSS is compiled using SASS found in the ```css/main.scss``` folder
- Work posts are found in ```_posts/works/**```
- Images for the portfolio are found in ```img/work/**```

## Installing
Assuming Jekyll is installed, and this repo is cloned
- ```$ cd <project name>```
- To run: ```$ jekyll server --watch```

## Deployment
- ```$ jekyll build```
- ```$ git add .```
- ```$ git commit -m <message>```
- ```$ git push master```

This site is hosted on GitHub pages. Just push the master branch to deploy.

## Posting New work
Posts for new work are found in ```_posts/work```

### Images
Since markdown wraps images in a ```<p>``` tag. This makes it difficult to style images independently of the text. To make images larger than the width of the paragraph styles, wrap them in a ```<div>``` tag.

To keep images inline (same width as the copy) simply use markdown for images
```![](/path/to/img)```

### Example
```
<div>
  <img src="/path to image" alt="">
</div>
```

## Built With
* [Jekyll](https://jekyllrb.com/) - The web framework used
* [SASS](https://sass-lang.com/) - Styling & CSS management
* [GitHub Pages](https://pages.github.com/) - Hosting

## Contributing
Got an idea to make it better? Let me know with a pull request.

## Authors
* **Stephen** - *Design & Development*

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Thanks to github pages for hosting
