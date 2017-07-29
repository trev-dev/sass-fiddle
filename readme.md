# Fiddling with Sass
#### I wanted to try building a basic responsive grid using Sass, the bourbon family and grunt-autoprefixer. The purposes of this is to practice developing compatible css.

Check out the frameworks/tech I used here:
* [Sass](http://sass-lang.com/)
* [Bourbon](http://bourbon.io) (with neat and bitters) - Sass frameworks for scaffolding styles and implementing a grid system
* [Autoprefixer](https://css-tricks.com/autoprefixer/) - There's lots of ways to setup autoprefixer. The link goes to a great article that showed me how to set it up with grunt.

##### What's happening here?

Sass is watching for changes to my main.sass, it then processes that into regular in the sass/processed directory. Grunt detects a change to main.css and runs autoprefixer to insert compatibility prefixes and outputs the finished file into static/css/style.css where it is now ready for deployment/testing.