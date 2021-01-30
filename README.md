# 1step

This project is based in Jekyll, so, the demo project is inside **_site** folder.

* site
  * _site

You can try a [demo](https://chiqui1234.github.io/1step/) here.

# Build

You need *Ruby* and *Ruby Gems* installed and in your OS and PATH. Then, you can execute these actions in a terminal (in this project directory):
```bash
gem install bundler jekyll
cd site
bundle exec jekyll serve # This will build the site and you can test a demo on localhost:4000
```

# Compatibility

This template is fully-compatible with older web browsers, especifically: 
* IE10 (late 2012)
* Safari 10.1 (early 2017)
* Any newer browser, except **Opera Mini** (all versions), **Samsung Internet 4** (early 2016)

However, you can get a good experience (with minor centering problems in certain elements) with:

* IE9 (early 2011) and older
* Chrome 56 (early 2017) and older
* Firefox 51 (early 2017) and older
* Safari 10 (late 2016) and older
* Opera Mini (any version)
* Samsung Internet 4 (early 2016)

# Remaining tasks for Mario

* Section: Works (Done, but needs horizontal swipe gesture support)
* Section: Flow (Done)
* Section: Footer (Done, but needs 20px hover effect)
* Section: Blog (Pending)

# Remaining tasks for Santiago

* Sidebar for smartphone (Done)
* Section: Contact (Done)
* Compatibility mode for IE11 (Done : It only remains to change the CSS variables for hard-coded values)
* Check typos, sizes, margins and revisit entire project (Done)
* Image optimizations for mobile and desktop (Done)
* Home buttons (Done)
* Section: Voice and Q&A (Done)
* "SCROLL" text & line effect (Done)
* Animated menu icon in responsive mode (class 'menu removeDesktop') (Done)
* Navbar display:none bug (Resolved)
* Menu icon with is bad positioned (Pending)

# Questions and notes for next Google Meet (23/01/2021)
* Note the button swipe effect (https://codepen.io/kjbrum/pen/wBBLXx) uses JQuery library. Rubén needs native CSS & JS, so we will convert that code to Vanilla (Native) Javascript for straping out JQuery dependency.
* This project will get full IE11 compatibility when color codes are hard-coded and not stored in variables. This process will be complete at the very end of the development.
* All CSS files will be compiled into one large and optimized file when the development are finished. Right now, we use at least 7 separated CSS files because it's human-readable :)
* The sidebar in tablet mode is smaller than screen size, is like the sidebar's mockup was copy & pasted from smartphone mode. Do you want the sidebar from tablet like showed in the mockup or like the DEMO? (the sidebar text, buttons, etc; is bigger in the DEMO)

# Ruben's notes (30/01/2021)

Write here!