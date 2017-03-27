---
layout: tutorial
title: 'Background-blend modes'
date: 2017-03-15
read: '5min'
tags: HTML SCSS
definition: The background-blend-mode CSS property describes how the 
            element's background images should blend with each other 
            and the element's background color. .
definition-link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode'
definition-source: 'MDN'
lead_text: Exploring the <span class="code-font">background-blend-mode</span> Property
---

<div class="tutorial-body">
  <p class="tutorial-paragraph"> If you browse the web, read newspapers,
    glance at advertising or even watch television, there is
    a chance that you are familiar with blending.
  </p>
  <p class="tutorial-paragraph"> Blending essentially allows you to
    combine two different layers together to create a new layer,
    typically we combine an image and a color, however our options are
    not just limited to colors and images.
  </p>
  <p class="tutorial-paragraph"> This technique has been used for a
    long time especially in graphic design. While still relatively new
    in web design, it has been  gaining in popularity in recent times
    with sites such as <a href="#"> Fantasy Football </a>  and
    <a href="#"> Spotify </a> utilising these techniques in recent
    brand design overhauls.
  </p>
  <div class='reference-image'>
    <img src="../img/fantasy-football.jpg">
  </div>
  <h2 class="tutorial-section-heading"> Hello,
    <span class="code-font">background-blend-mode</span>
  </h2>
  <p class="tutorial-paragraph"> With browser support currently at over
    75% with the exception of internet explorer and edge. The benefit of
    using the <span class="code-font">background-blend-mode</span>
    property is that you are no longer required to perform image
    manipulation through photoshop.
  </p>
  <h2 class="tutorial-section-heading"> Getting started </h2>
  <p class="tutorial-paragraph"> Before we begin creating our own 
    background-blends, there are three terms that will feature heavily
    throughout this tutorial, take time to familiarise yourself with 
    <span class="underline-definition">Destination</span>,
    <span class="underline-definition">Source</span>, 
    <span class="underline-definition">Backdrop</span>
  </p>
  <div class="definition-wrapper">
    <table class="definition-list">
      <tr>
        <td>
          <p>Destination:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Bottom layer usually a color or gradient</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Source:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Top layer usually an image</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Backdrop:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">The area below the source, this is where the blending occurs</p>
        </td>
      </tr>
    </table>
  </div>
  <p class="tutorial-paragraph">Understanding the relationship between
    <span class="underline-definition">Destination</span>,
    <span class="underline-definition">Source</span>, 
    <span class="underline-definition">Backdrop</span> means that we are 
    ready to experiment with the different
    <span class="code-font">background-blend-modes</span>
  </p>
  <h2 class="tutorial-section-heading"> The blend types </h2>
  <div class="blend-type">
    {% for blend in site.data.blend-modes %}
    {% if blend.title != null %}
    <h5 class="blend-list-title">{{ blend.title }}</h5>
    <p class="blend-list-description">{{ blend.description }}</p>
    {% endif %}
    {% endfor %}
    <a class="author-link" href='https://drafts.fxtf.org/compositing-1/#blending'>
    -per W3C
    </a>
  </div>
  <p class="tutorial-paragraph"> Remembering that each 
    <span class="code-font">background-blend-mode</span> result is 
    dependent on the destination color and the source, Let's look at how 
    we apply an effect in a typical scenario, a hero image.
  </p>
  <h2 class="tutorial-section-heading"> Syntax </h2>
  <div class='code-container'>
    <pre class='code code-css'><code>.example-hero {
 background: url('../img/bg44.jpg') #6534ff;
 background-repeat: no-repeat;
 background-size: cover;
 background-blend-mode: 'normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue |saturation | color | luminosity';
}</code></pre>
  </div>
  <h2 class="tutorial-section-heading"> Putting it all together </h2>
  <div class="example-post">
    <p class="tutorial-paragraph"> Previously we discussed that in order to
      achieve the blend effect we need three things
      <span class="underline-definition">Destination</span>,
      <span class="underline-definition">Source</span>, 
      <span class="underline-definition">Backdrop</span>
    </p>
    <p class="tutorial-paragraph"> In our case the 
      <span class="underline-definition">Destination</span> will our hero with
      this the background color <span class="box"></span> 
      next we need a <span class="underline-definition">Source</span>
      we can use the following image.
    </p>
  </div>
  <div class="example-hero"> </div>
  <div class="code-container">
    <pre class="code code-html"><code>&lt;div class="example-hero"&gt;</code></pre>
  </div>
  <p class="tutorial-paragraph"> Deciding on a particular blend in my 
    experience is more trial and error than anything else. To speed the 
    process up, I will apply each
    <span class="code-font">background-blend-mode</span> to our hero to
    determine which suits us best.
  </p>
  <p class="tutorial-paragraph">
     To create the animation, there are a few things to consider.
    We want each blend to have the same amount of time, to achieve this
    we divide the total number of blend types by 100%.
  </p>
  <p class="tutorial-paragraph">
    <span class="code-font"> 100 / 16 = 6.25%</span>
  </p>
  <p class="tutorial-paragraph"> 
    This means we change the <span class="code-font">blend-mode</span>
    every 6.5%. Next we must decide on how long we want each blend to be applied.
  </p>
  <p class="tutorial-paragraph"> 
    We want each blend to be 3.5s long, to achieve this we
    again multiply the number of blends by duration,
  </p>
  <p class="tutorial-paragraph"> 
    <span class="code-font">16 * 3.5s = 56s </span>
  </p>
  <p class="tutorial-paragraph"> 
    This is how long we will play the animation for. As you can see in 
    the image below the image will alternate between blends every 3.5s
  </p>
  <div class="example-hero-container">
    <div class="caption"></div>
  </div>
  <p class="tutorial-paragraph"> 
    To alternate between blends we can use <span class="code-font">CSS Keyframes</span>.
  </p>
  <p class="tutorial-paragraph"> 
    Remembering that we have already calculated that we want the 
    animation to run for a total of 56s and that we have 16 blend modes. 
    We use our animation time as a full cycle or 100%. 
    This means that change each blend every 6.5% of our full animation.
  </p>
  <div class="code-container">
    <pre class="code code-css"><code><span class="keyframe">@keyframes</span> blendTransition {
 0% { background-blend-mode: normal; }
 6.25% {background-blend-mode: multiply; }
 12.5% { background-blend-mode: screen; }
 18.75% { background-blend-mode: overlay; }
 25% { background-blend-mode: darken; }
 31.25% { background-blend-mode: lighten; }
 37.5% { background-blend-mode: color-dodge; }
 43.75% { background-blend-mode: color-burn; }
 50% { background-blend-mode: hard-light; }
 56.25% { background-blend-mode: soft-light; }
 62.5% { background-blend-mode: difference; }
 68.75% { background-blend-mode: exclusion; }
 75% { background-blend-mode: hue; }
 81.25% { background-blend-mode: saturation; }
 87.5% { background-blend-mode: color; }
 93.75% { background-blend-mode: luminosity; }
 100% {background-blend-mode: normal;}
}</code></pre>
  </div>
  <p class="tutorial-paragraph">
    We can also print the <span class="code-font">blend-mode</span> over
    our image, this will allow us to identify the 
    <span class="code-font">blend-mode</span>. Add the caption to our
    <span class="code-font">HTML</span>
  </p>
  <p class="tutorial-paragraph">
    To print the <span class="code-font">blend-mode</span> we use the 
    <span class="code-font">::after</span> selector to fetch the blend name.
  </p>
  <div class="code-container">
    <pre class="code code-html"><code>&lt;div class="example-hero"&gt;
   &lt;div class="caption"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
<pre class="code code-css"><code>.caption {
 background-color: $white;
 bottom: 0;
 color: #6534ff;
 font-family: $lora;
 font-size: $h5;
 left: 0;
 padding: 12px;
 position: absolute;
 text-align: center;
 z-index: 2;

  &::after {
    animation: blend 56s ease infinite;
    color: #6534ff;
    content: '';
  }
}</code></pre>

<pre class="code code-css"><code><span class="keyframe">@keyframes</span> blendType {
 0% { content: 'normal';}
 6.25% { content: 'multiply';}
 12.5% { content: 'screen';}
 18.75% { content: 'overlay';}
 25% { content: 'darken';}
 31.25% { content: 'lighten';}
 37.5% { content: 'color-dodge';}
 43.75% { content: 'color-burn';}
 50% { content: 'hard-light';}
 56.25% { content: 'soft-light';}
 62.5% { content: 'difference';}
 68.75% { content: 'exclusion';}
 75% { content: 'hue';}
 81.25% { content: 'saturation';}
 87.5% { content: 'color'; }
 93.75% { content: 'luminosity';}
 100% {content: 'unset';}
}</code></pre>
</div>
  
  
  <h2 class="tutorial-section-heading"> Multiple images </h2>
  <p class="tutorial-paragraph">
    What we are yet to discuss is what happens when we provide more than one 
    <span class="underline-definition">Source</span>. 
  </p>
  <p class="tutorial-paragraph">
    If you have used multiple background images before, you are aware
    that you can style each image individually, the same principal applies
    here.
  </p>
  <p class="tutorial-paragraph"> In other words we have the ability
    to assign a different effect different images.
  </p>
  <div class="code-container">
<pre class="code code-css"><code>.example-hero-double-blend {
 animation: multipleBlendTransition 56s infinite;
 background-image: url('../img/bg44.jpg'), url('../img/bg13.jpg')
 background-color: lighten(#6534ff, 25%);
 background-repeat: no-repeat;
 background-size: cover;
 background-blend-mode: screen, darken;
 box-sizing: border-box;
 display: flex;
 height: 220px;
 justify-content: center;
 margin: 20px auto;
 overflow: hidden;
 padding: 20px 0;
 width: 100%;
}</code></pre>
</div>


  <p class="tutorial-paragraph"> 
    As you can see we have passed two images, we have also passed
    two <span class="code-font">blend-modes</span>
  </p>
  
  <div class="example-hero-multiple-blend"></div>
  <p class="tutorial-paragraph"> 
    The possibilities are endless when it comes to 
    <span class="code-font">blend-modes</span>
  </p>
  <h2 class="tutorial-section-heading"> Play with code </h2>
  <div class="codepen-wrapper">
    <p data-height="265" data-theme-id="dark" data-slug-hash="qrPoaE" data-default-tab="result" data-user="andrewrock" data-embed-version="2" data-pen-title="Hero Blend Modes" class="codepen">See the Pen <a href="https://codepen.io/andrewrock/pen/qrPoaE/">Hero Blend Modes</a> by Andrew (<a href="http://codepen.io/andrewrock">@andrewrock</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </div>
</div>