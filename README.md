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

### Note SSL certificates can prevent older browsers (IE9 and older) when entering to your website
It's recommended a **http** version if you really need older browser support in Windows Vista, XP, etc.

# Dev notes
### Basically saying some elements will be finished at end of development, for optimization reasons.
* This project will get full IE11 compatibility later, because we store transitions and colors into variables which IE doesn't understand. We will hard-code all variables into plain text (old CSS3 revision) at the very end of the development.
* All CSS files will be compiled into one large and optimized file when the development are finished. Right now, we use at least 7 separated CSS files because it's human-readable :)
* All icons will be appearing when we finishes the development, because we like compress all icons into small package for data-saving. This icon selection and compression isn't a fast method, so isn't convenient doing this all the time.

# Ruben's notes and corrections (30/01/2021)

* Swipe effect en botones (Mario)
* Más separación entre SCROLL y H1 (Santiago) (Done)
* SCROLL tiene una tipografía errónea en IE11 (Santiago)
* Transiciones no funcionan en IE11 (Santiago)
* Icono de noticias lleva a pág de noticias (Santiago) 
* El carousel debe ser un bucle infinito (Mario)
* animaciones fadeIn con retraso (Santiago) (Done)
* FLOW: una linea de texto, no dos (en PC) (Mario)
* Dejar los márgenes en **blog** y **works** igual que en el mockup (Mario)
* Las flechas de **works** deben estar correctamente posicionadas (Mario)
* foto de CONTACT con mismo filtro azul que VOICE y Q&A (Santiago)
* chequear letter-spacing en IE11 (Santiago)
* agregar links a SUPER MENU (Santiago)
* lineas del icono de menu mas estilizadas (Santiago)
* más margen entre el ultimo link y el contorno de la sidebar, porque la barra del navegador molesta (Santiago)
* FLOW tiene que tener dos columnas en mobile, no una (Mario)