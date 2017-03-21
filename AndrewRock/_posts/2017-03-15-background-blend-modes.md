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

   <p class="tutorial-paragraph">
      If you browse the web frequently, there is a chance that you have 
      come across blending. This technique has been used for a long time
      especially in graphic design.
   </p>
   
   <p class="tutorial-paragraph">
      Blending essentially allows you to combine two different layers 
      together, typically an image and a color.
   </p>
   
   <p class="tutorial-paragraph">
      Blending has been gaining in popularity in recent months as sites
      such as <a href="#"> Fantasy Football </a> and <a href="#"> Spotify </a>
      have been using blends in their marketing campaigns.
   </p>    
   
   <div class='reference-image'>
     <img src="../img/fantasy-football.jpg">
   </div>

   <h2 class="tutorial-section-heading"> Why use 
     <span class="code-font">
      background-blend-mode
     </span>
   </h2>
   <p class="tutorial-paragraph">
    The benefit of using the <span class="code-font">background-blend-mode</span> property is that you
    are no longer required to perform image manipulation through photoshop.
    With browser support currently at over 75% with all major browsers supporting
    it with the exception of internet explorer and edge.
   </p>
   
   <h2 class="tutorial-section-heading"> Before we get started </h2>
   <p class="tutorial-paragraph">
    Before we begin creating our own background-blends, it is important 
    to try and understand what is actually happening and how the blend is created.
    When working with blends or reading about them online you will may 
    hear the following three words 
      <span class="underline-definition"> Destination </span>,
      <span class="underline-definition"> Source </span>, 
      <span class="underline-definition"> Backdrop </span>
      Next we shall explain what these three components are
   </p>
   
   <div class="definition-wrapper">
   <table class="definition-list">
    <tr>
      <td><p>Destination:</p></td>
      <td><p class="tutorial-paragraph">Bottom layer usually a color or gradient</p></td>
    </tr>
    <tr>
      <td><p>Source:</p></td>
      <td><p class="tutorial-paragraph">Top layer usually an image</p></td>
    </tr>
    <tr>
      <td><p>Backdrop:</p></td>
      <td><p class="tutorial-paragraph">The area below the source, this is where the blending occurs</p></td>
    </tr>
   </table>
  </div>

   <h2 class="tutorial-section-heading"> What's next </h2>
   <p class="tutorial-paragraph">
     Now that we know how blending is generated and how the resulting effect
     is dependent on the destination color and image,
     We can now move on to the different blending modes and how each will result in a different effect.
  </p>
  
 <h2 class="tutorial-section-heading"> The blend types </h2>
   <div class="blend-type">
      {% for blend in site.data.blend-modes %}
      {% if blend.title != null %}
        <h5 class="blend-list-title"> {{ blend.title }} </h5>
        <p class="blend-list-description"> {{ blend.description }} </p>
      {% endif %}
      {% endfor %}
      <a class="author-link" href='https://drafts.fxtf.org/compositing-1/#blending'>
        -per W3C
      </a>
   </div>


 <p class="tutorial-paragraph">
   Now that we know how blending is generated and how the resulting effect
   is dependent on the destination color and image,
   We can now move on to the syntax.
</p>

 <h2 class="tutorial-section-heading"> Syntax </h2>
<div class='code-container'>
<pre class='code code-css'><label>SCSS</label><code>.example-hero {
  background: url('../img/bg44.jpg') #6534ff;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: 'normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue |saturation | color | luminosity';
 }</code></pre></div>   
  
   
<p class="tutorial-paragraph">
  Putting it altogether can select one of the 16 blend modes to create 
  the layering effects over our image. Below you can see all the blend
  modes.
</p>

<h2 class="tutorial-section-heading"> Putting it all together </h2>
<div class="example-post">
<p class="tutorial-paragraph"> Previously we discussed that in order to achieve the blend effect, we need three things, 
<span> Destination </span>,<span> Source </span>,<span> Backdrop </span>.  
 In our case the destination will our hero with this the background color <span class="box"></span>  next we need a source we can use an image
 </p>   
 </div>
 <div class="example-hero"> </div>
 
 
<p class="tutorial-paragraph">
  Now we can put all the blend modes together, to create the animation 
we divide the total number of blend modes by a full cycle, 100 / 16 = 6.25%. 
This means we change the blend every 6.5%. Next we must decide on how long we
want each blend to be applied. I want each blend to be 3.5s long, to achieve this we
again multiply the number of blends by duration, 16 * 3.5s = 56s. This is how long we will
play the animation for.
</p>

 
   <div class="example-hero-container">
      <div class="caption"></div>
   </div>
    
<div class="code-container">
<pre class="code code-html"><label>HTML</label><code>&lt;div class="example-hero"&gt;&lt;/div&gt;</code></pre>
<pre class="code code-css"><label>SCSS</label><code>.example-hero {
  align-items: center;
  background: url('../img/bg44.jpg') lighten(#6534ff, 25%) center center / cover no-repeat;
  background-blend-mode: screen;
  box-sizing: border-box;
  display: flex;
  height: 220px;
  justify-content: center;
  margin: 20px auto;
  overflow: hidden;
  padding: 20px 0;
  width: 100%;
 }</code></pre>
 
<pre class="code code-css"><label>SCSS</label><code><span class="keyframe">@keyframes</span> blendTransition {
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
  
 <h2 class="tutorial-section-heading"> And Finally </h2>
 <p class="tutorial-paragraph">
 Since we know the background-blend-mode property is used to specify 
 a blend mode for each background layer (destination) of an element.
 We know that using this property allows background layers (destination and source) 
 to be blended together.
 </p>
 
  <p class="tutorial-paragraph">
  What we are yet to discuss is what happens when more than one 
  source is provided. Background blends treat multiple sources
  in the same order as images are treated by the background-image property.
  </p>
  
  <div class="code-container">
  <pre class="code code-css"><label>SCSS</label><code>.example-hero-double-blend {
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


<div class="example-hero-multiple-blend"></div>


<h2 class="tutorial-section-heading"> Play with code </h2>
<div class="codepen-wrapper">
<p data-height="265" data-theme-id="dark" data-slug-hash="qrPoaE" data-default-tab="result" data-user="andrewrock" data-embed-version="2" data-pen-title="Hero Blend Modes" class="codepen">See the Pen <a href="https://codepen.io/andrewrock/pen/qrPoaE/">Hero Blend Modes</a> by Andrew (<a href="http://codepen.io/andrewrock">@andrewrock</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

</div>