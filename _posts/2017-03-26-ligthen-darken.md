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

<p class="tutorial-paragraph"> Sass offers us plenty of options for 
creating unique and different color combinations. Lets look at the following</p>

  <ul class="instafeed-setup">
    <li>
      <p> Shade & Tint </p>
    </li>
    <li>
      <p> Lighten & Darken </p>
    </li>
    <li>
      <p> Combine effects </p>
    </li>
  </ul>


<div class="color-functions">
<h2 class="tutorial-section-heading">Shade & Tint</h2>
<p class="tutorial-paragraph"> Adding tints and shades to your color, 
can result in a whole palette, or even introduce colors you may not 
previously have considered.
</p>

<p class="tutorial-paragraph"> To use the <span class="code-font">
tint</span> and <span class="code-font"> shade</span> 
we use the the <span class="code-font">mix()</span> function.
We mix our color with a value of white ( <span class="code-font">tint</span> ) 
and black ( <span class="code-font">shade</span> )
</p>


<div class='code-container'>
  <pre class='code code-css'><code>
$body-color: #282828;
$grey: #999;

@function shade($color, $percentage) {
  @return mix($body-color, $color, $percentage);
}

@function tint($color, $percentage) {
  @return mix($white, $color, $percentage);
}
</code></pre>
</div>

<p class="tutorial-paragraph"> As we will be using these color functions
 more than once it is best to make them into a reusable function
 We name our function "shade" and "tint" so it is easy to recognise what
 each one does. 
</p>

<p class="tutorial-paragraph"> The benefits of using the 
<span class="code-font"> tint</span> and
<span class="code-font"> shade</span> allow us to create more colors 
while retaining consistency and adhering to your original colour/colours.
</p>

<div class='code-container'>
  <pre class='code code-css'><code>
@function shade($color, $percentage) {
  @return mix($body-color, $color, $percentage);
}

$body-color: #282828;
$grey: #999;
$purple: #6534ff;

.tint li
.shade li {
  background: $blue;
  flex: 1 0 auto;
}

.tint li {
  $tint-num: 6;

  @for $i from 1 through $shade-num {
    &:nth-of-type(#{$i}) {
      background-color: tint($purple, ($i * 10%));
    }
  }
}

.shade li {
  $shade-num: 6;

  @for $i from 1 through $shade-num {
    &:nth-of-type(#{$i}) {
      background-color: shade($purple, ($i * 10%));
    }
  }
}</code></pre>
</div>

<h4 class="code-font"> Shade </h4>
<ul class="shade">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>
<h4 class="code-font"> Tint </h4>
<ul class="tint">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>

<p class="tutorial-paragraph"> Starting at 0 we increase the 
<span class="code-font"> tint</span> and <span class="code-font"> shade</span>
applied to each item in increments of ten until we reach 100.
</p>

<p class="tutorial-paragraph"> To add the increment we know there are
six items, so we loop through each and apply our desired 
<span class="code-font">shade</span> or <span class="code-font">tint</span>
</p>

<div class='code-container'>
 <pre class='code code-css'><code>
 $shade-num: 6;
 $tint-num: 6;
  
 @for $i from 1 through $shade-num {
   &:nth-of-type(#{$i}) {
     background-color: shade($purple, ($i * 10%));
  }
   
 @for $i from 1 through $shade-num {
   &:nth-of-type(#{$i}) {
    background-color: tint($purple, ($i * 10%));
 }

}</code></pre>
</div>

<p class="tutorial-paragraph">
A good way to know when to use either function is to remember that
<span class="code-font">shade</span> is the mixture of a color with black,
which reduces lightness
<span class="code-font">tint</span> is the mixture of a color with white,
which increases lightness

</p>

<h4 class="tutorial-section-heading">Possible blend combinations</h4>
<ul class="tint-shade">
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


<h2 class="tutorial-section-heading">lighten & darken</h2>
<p class="tutorial-paragraph"> Often, All that is needed is just 
a single shade or highlight variation of our base color. To achieve this
we use the <span class="code-font"> Sass </span> 
<span class="code-font">darken</span> and 
<span class="code-font">lighten</span>. These functions are pretty simple.
</p>

<div class='code-container'>
 <pre class='code code-css'><code>darken($color, 10%);
lighten($color, 10%);</code></pre>
</div>


<p class="tutorial-paragraph"> As the lighten and darken functions can 
quickly result in white and black, it is usually best to stay in the 
range of 3-20%. Sass will produce an error if the amount applied is
over 100%, this is important to know especially if using a single 
color for multiple items 
</p>

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

<h4 class="tutorial-section-heading">Possible blend combinations</h4>
<ul class="light-dark-mix">
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


<h4 class="tutorial-section-heading"><span class="code-font"> tint </span>
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
</h4>

<p class="tutorial-paragraph">
Now that we have already seen how the 
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
<span class="code-font">darken</span> change the original color.
Lets put everything together, starting with
<span class="code-font"> tint </span>,
<span class="code-font"> lighten </span>,
<span class="code-font"> shade </span> and 
<span class="code-font">darken</span>. Notice the difference between
each.
</p>

<ul class="all-together">
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


<h2 class="tutorial-section-heading">Combining colours</h2>
<p class="tutorial-paragraph"> So far we looked at
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
<span class="code-font">darken</span>. However so far we have only worked
with one singular color <span class="code-font purple">#6534ff</span>
</p>

<p class="tutorial-paragraph"> We also have the ability to perform the 
same actions using multiple colors. Needless to say to use multiple 
colours we need more than one color, lets use
<span class="code-font purple">#6534ff</span>
<span class="code-font pink">#fc0152</span>
</p>

<ul class="combined">
  <li>0</li>
  <li>20</li>
  <li>40</li>
  <li>60</li>
  <li>80</li>
  <li>100</li>
</ul>

<div class='code-container'>
 <pre class='code code-css'><code>$purple: #6534ff;
$pink: #fc0152;

.combined li {
  background: $nav-link-color;
  flex: 1 0 auto;
  $combine-num: 6;

  @for $i from 1 through $combine-num {
    &:nth-of-type(#{$i}) {
      background-color: mix(darken($nav-link-color,($i * 7.5%)),lighten($pink,($i * 10%)));
    }
  }
}</code></pre>
</div>
<h4 class="code-font"> lighten & darken </h4>
<ul class="combined-blend">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<h4 class="code-font"> tint & shade </h4>
<ul class="combined-blend darken-lighten">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<p class="tutorial-paragraph">We already compared the differences
 between
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
<span class="code-font">darken</span> with a single colour, now lets 
compare with two colours.
</p>


<ul class="all-together-two">
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

<div class='code-container'>
 <pre class='code code-css'><code>.all-together-two li {
$tint-num: 10;
$darken-num: 20;
background-blend-mode: overlay;
flex: 1 0 20%;

 @for $i from 1 through $tint-num {
   &:nth-of-type(#{$i}) {
     background: $image-one mix(tint($nav-link-color,($i * 5%)),shade($pink,($i * 2%))) center center / cover no-repeat;
   }
 }

 @for $i from 11 through $darken-num {
   &:nth-of-type(#{$i}) {
    background: $image-one mix(darken($nav-link-color,($i * 5%)),lighten($pink,($i * 2%))) center center / cover no-repeat;
  }
 }
}</code></pre>
</div>

<p class="tutorial-paragraph"> For the ultimate comparison, lets combine
all the effects together </p>


<ul class="all-together-all">
  <li>tint</li>
  <li>tint</li>
  <li>tint</li>
  <li>tint</li>
  <li>tint</li>
  
  
  <li>lighten</li>
  <li>lighten</li>
  <li>lighten</li>
  <li>lighten</li>
  <li>lighten</li>
  
  
  <li>shade</li>
  <li>shade</li>
  <li>shade</li>
  <li>shade</li>
  <li>shade</li>
  
  
  <li>darken</li>
  <li>darken</li>
  <li>darken</li>
  <li>darken</li>
  <li>darken</li>
  
  <li>tint-shade</li>
  <li>tint-shade</li>
  <li>tint-shade</li>
  <li>tint-shade</li>
  <li>tint-shade</li>
  
  
  <li>light-dark</li>
  <li>light-dark</li>
  <li>light-dark</li>
  <li>light-dark</li>
  <li>light-dark</li>
  
  <li> original </li>
  
</ul>




<p class="tutorial-paragraph"> Just as my art teacher urged us to play
with colours, I encourage you to experiment with colours in your own 
designs, the results may surprise you.


</div>