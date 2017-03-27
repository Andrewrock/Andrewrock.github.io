---
layout: tutorial
title: 'The lighten and darken functions'
date: 2017-03-15
read: '5min'
tags: HTML SCSS
lead_text: Creating interesting color combinations.
---

<div class="tutorial-body">
<p class="tutorial-paragraph"> Thinking back to school, I can remember I
 was never any good at drawing, most of the time I was just happy to be 
 sitting in a double art class rather than a french class, but like all 
 good teachers, Mr Barrett had a way of making you remember the important
 things, and just as the history teacher would say 'In 1492 Columbus 
 sailed the ocean blue.', Mr Barrett would encourage the use of the color
 to tell a story, influence moods.
</p>

<p class="tutorial-paragraph"> It's ten years since those art classes and
 the way use color throughout our sites has been curtailed, with
 limited choices available before having to turn to javascript. However 
 now we have the ability to easily manipulate a single color resulting 
 in a myriad of different colors.
 </p>
 

<p class="tutorial-paragraph">To start we need one color, we will use
this color as our base color. The color I have used for my own site is
<span class="code-font purple">#6534ff </span>
</p>

<p class="tutorial-paragraph">T Sass offers us plenty of options for 
creating unique and different color combinations. Lets look at the following</p>

  <ul class="instafeed-setup">
    <li>
      <p> Shade</p>
    </li>
    <li>
      <p> Tint </p>
    </li>
    <li>
      <p> Lighten </p>
    </li>
    <li>
      <p> Darken </p>
    </li>
    <li>
      <p> Combine effects </p>
    </li>

  </ul>



<div class="color-functions">
<h2 class="tutorial-section-heading">Shade</h2>
<p class="tutorial-paragraph">
Adding tints and shades to your color palette will give you a greater 
number of colors to work with in your project, while still achieving 
consistency and adhering to your original color palette. To get the 
tints and shades of a color in Sass, the mix() function can be used with
 white and black, respectively:
</p>

<div class='code-container'>
  <pre class='code code-css'><code>
@function shade($color, $percentage) {
  @return mix($body-color, $color, $percentage);
}

$body-color: #282828;
$grey: #999;
$purple: #6534ff;

.shade li {
  background: $purple;
  flex: 1 0 auto;
  $shade-num: 6;

  @for $i from 1 through $shade-num {
    &:nth-of-type(#{$i}) {
      background-color: shade($purple, ($i * 10%));
    }
  }
}</code></pre>
</div>

<p class="tutorial-paragraph"> He we created a function to add shade to
our item. The color uses a color and a percentage, using 
<span class="code-font"> SCSS </span> we can increase the amount of shade
applied to each item.
</p>

<p class="tutorial-paragraph"> Knowing we have six items and we want to
show the gradual increase of shading from 0-100. We write a loop for six 
items, indidicating that the shading should increase by 10%;
</p>

<div class='code-container'>
 <pre class='code code-css'><code>
 $shade-num: 6;
  
 @for $i from 1 through $shade-num {
   &:nth-of-type(#{$i}) {
     background-color: shade($purple, ($i * 10%));
  }
}</code></pre>
</div>

<ul class="shade">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>


<h2 class="tutorial-section-heading">Tint</h2>
<ul class="tint">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>
<h2 class="tutorial-section-heading">lighten</h2>
<ul class="light-dark">
  <li>Original color</li>
  <li>Lighten (2.5%)</li>
  <li>Lighten (5%)</li>
  <li>Lighten (7.5%)</li>
  <li>Lighten (10%)</li>
  <li>Lighten (12.5%)</li>
  <li>Original color</li>
  <li>Darken (2.5%)</li>
  <li>Darken (5%)</li>
  <li>Darken (7.5%)</li>
  <li>Darken (10%)</li>
  <li>Darken (12.5%)</li>
</ul>


<h2 class="tutorial-section-heading">Possible blend combinations</h2>
<ul class="alternate-blend">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>


<h2 class="tutorial-section-heading">Combined</h2>
<ul class="combined">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>
</div>



  


</div>