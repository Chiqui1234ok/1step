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

# Corrections after first meet

Above code was "bad for SEO" and we changed first H2 by a P (paragraph).
```html
<section id="services">
    <h2>Service</h2> <!-- This line was changed to <p> (tag) during first Google Meet -->
    <h2>
        キレイなデザインは<br />
        当たり前のこと
    </h2>
```
However, in the mockup that title (and many others) shows the following text: "HEADING2 ENGLISH", so I suppose you preffer the old H2 but with a new **.en** class, lowering the normal H2 font-size.

# Remaining tasks for Mario

* Section: Works (pending)
* Section: Flow (Done)
* Section: Voice and Q&A (in progress)
* Section: Footer (pending)
* Section: Blog (pending)

# Remaining tasks for Santiago

* Sidebar for smartphone (Done)
* Section: Contact (Done)
* Compatibility mode for IE11 (Done : It only remains to change the CSS variables for hard-coded values)
* Check typos, sizes, margins and revisit entire project (Done)
* Image optimizations for mobile and desktop (Done)
* Home buttons (Done)
* "SCROLL" text & line effect (Done)
* Animated menu icon in responsive mode (class 'menu removeDesktop') (Done)

# Questions and notes for next Google Meet
* Note the button swipe effect (https://codepen.io/kjbrum/pen/wBBLXx) uses JQuery library. Rubén needs native CSS & JS, so we will convert that code to Vanilla (Native) Javascript for straping out JQuery dependency.
* This project will get full IE11 compatibility when color codes are hard-coded and not stored in variables. This process will be complete at the very end of the development.
* All CSS files will be compiled into one large and optimized file when the development are finished. Right now, we use at least 7 separated CSS files because it's human-readable :)