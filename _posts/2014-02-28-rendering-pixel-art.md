---
layout: post
title: "Rendering pixel art"
description: "Koiba uses a pixelated, retro look. This style is quite popular at the moment, because it looks great and is much easier for indie devs to create. For a great pixel art look, you need the expanded pixelated images to look sharp and crisp. Unfortunately for pixel artists, modern browsers are made to smooth images and perform anti-aliasing on fonts, so expanded images/fonts don't have a grainy look. Let's turn this off where we can, and use some workarounds where we can't."
categories: [pixel art, koiba]
tags: [koiba, pixel art, smoothing, anti-aliasing]
---
{% include JB/setup %}

[Koiba](http://staging.golov.me) uses a pixelated, retro look. This style is quite popular at the moment, because it looks great and is much easier for indie devs to create. For a great pixel art look, you need the expanded pixelated images to look sharp and crisp. Unfortunately for pixel artists, modern browsers are made to smooth images and perform anti-aliasing on fonts, so expanded images/fonts don't have a grainy look. Let's turn this off where we can, and use some workarounds where we can't.

Disclaimer: modern browsers only.

Fonts
-----
We'll start with fonts, as this is the easiest. Koiba uses the [pxlplz](http://www.dafont.com/pxlplz.font) font, which I will use to demonstrate this.

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/posts/rendering_pixel_art/before_font.png" alt="Font with anti-aliasing">
      <div class="caption">
        With anti-aliasing
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/posts/rendering_pixel_art/after_font.png" alt="Font with anti-aliasing turned off">
      <div class="caption">
        Anti-aliasing turned off
        <pre>
          <code>
html {
  -webkit-font-smoothing: none;
}
          </code>
        </pre>
      </div>
    </div>
  </div>
</div>

And we're done! Now let's render some images.

Canvas
------
Canvas has also made it easy for us to render pixel art. Let's take the small Koiba logo:

<img src="/images/posts/rendering_pixel_art/logo_small.png" alt="small Koiba logo" class="img-thumbnail"/>

Now, we want to scale this, so we get a pixelated effect. How you do this in canvas is up to you. Canvas will by default smooth scaled images, but let's us disable this very easily.

<div class="thumbnail">
  <img src="/images/posts/rendering_pixel_art/before_canvas.png" alt="canvas image with smoothing" class="img-rounded">
  <div class="caption">
    With canvas image smoothing
  </div>
</div>
<br/>

Boo! This is not the pixelated effect we wanted. Luckily, all we have to do is disable the image smoothing.

<pre>
  <code>
$.each($('canvas'), function(i, canvas) {
  context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.oImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
});
  </code>
</pre>

<div class="thumbnail">
  <img src="/images/posts/rendering_pixel_art/after_canvas.png" alt="canvas image with smoothing disabled" class="img-rounded">
  <div class="caption">
    Canvas image with smoothing disabled
  </div>
</div>
<br/>

Wonderful!

HTML
----
Unfortunately, this is where it gets a little more difficult. Currently, you can scale up in IE, Firefox and Opera with the following:

<pre>
  <code>
img {
  image-rendering: -moz-crisp-edges;
  image-rendering: optimizeSpeed
  -ms-interpolation-mode: nearest-neighbor; 
}
  </code>
</pre>

But Chrome and Safari don't support this! Hopefully they will in the near future, but for now, you're out of luck. Scaling the image up in your favourite image editor is unfortunately the best option.