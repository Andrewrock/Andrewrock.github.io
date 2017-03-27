---
layout: tutorial
title: 'Color functions'
date: 2017-03-26
read: '5min'
tags: HTML SCSS
lead_text: Using Sass to play with colours .
---

<div class="tutorial-body">
<p class="tutorial-paragraph"> Thinking back to school, I can remember 
I was never any good at art, most of the time I was just happy to be 
sitting in a double art class rather than a French class, it often the 
classes that at fifteen you think cannot help you going forward but like
all good teachers, Mr Barrett had a way of making you remember the 
important things. Just as the history teacher would drill in to you 
that 'In 1492 Columbus sailed the ocean blue.', Mr Barrett would 
encourage the use of the colour to tell a story, influence moods and to
serve as a bridge to something new.
</p>

<p class="tutorial-paragraph"> Ten years have past since those art 
classes, I'm now a front-end developer and closer to colours and those 
art classes than my college degree.
</p>
 
<p class="tutorial-paragraph"> The way colour has been used on the web 
throughout those last ten years has been relatively stagnant, with 
limited choices available before having to turn to javascript or relying
on the support of a polyfill library. 
</p> 

<p class="tutorial-paragraph"> However now we have the ability to easily
manipulate a single colour which can result in a plethora of different 
colours.
</p>
 
<p class="tutorial-paragraph">To begin we use one colour, setting this 
as our base colour. The colour I have used for my own site 
is <span class="code-font purple">#6534ff</span>
</p>

<p class="tutorial-paragraph"> <span class="code-font">Sass</span> 
provides plenty of options out of the box allowing us to create unique 
and different colour combinations with ease. We will be looking at:
</p>

  <ul class="simple-list">
    <li> <p> Shade & Tint </p> </li>
    <li> <p> Lighten & Darken </p> </li>
    <li> <p> Multiple colours </p> </li>
  </ul>

<div class="color-functions">
<h2 class="tutorial-section-heading">Shade & Tint</h2>
<p class="tutorial-paragraph"> Adding a tint or shade to your colour, 
can result in a fresh palette, or even introduce colours you may not 
previously have considered.
</p>

<p class="tutorial-paragraph"> To use the <span class="code-font">
tint</span> and <span class="code-font"> shade</span> 
we use the <span class="code-font">mix()</span> function.
mixing the colour with white (<span class="code-font">tint</span>) 
and black (<span class="code-font">shade</span>)
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

<p class="tutorial-paragraph"> We name our function "shade" and "tint" 
so it is easy to differentiate between them. 
</p>

<p class="tutorial-paragraph"> The benefits of using the 
<span class="code-font"> tint</span> and
<span class="code-font"> shade</span> include allowing us to create 
more colors with less effort all while retaining consistency and 
adhering to your original colour/colours.
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
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<h4 class="code-font"> Tint </h4>
<ul class="tint">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<p class="tutorial-paragraph"> Starting at 0 we increase the amount of
<span class="code-font"> tint</span> and <span class="code-font"> shade</span>
in increments of ten until we reach 100.
</p>

<p class="tutorial-paragraph">To increase the increment every item, we 
first need to need know how many increments are needed. In this case it is
six. Using the loop we cycle through each and apply our desired 
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

<p class="tutorial-paragraph"> If you find yourself confused as to what
the purpose of each is, remember that
<span class="code-font">shade</span> is the mixture of a colour with 
black, which reduces lightness
<span class="code-font">tint</span> is the mixture of a colour with 
white, which increases lightness
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
<p class="tutorial-paragraph"> Often, we are just looking for a single 
shade or highlight variation of our base colour. To achieve this
we use the <span class="code-font">Sass</span> 
<span class="code-font">darken</span> and 
<span class="code-font">lighten</span>. These functions are pretty 
simple.
</p>

<div class='code-container'>
 <pre class='code code-css'><code>darken($color, 10%);
lighten($color, 10%);</code></pre>
</div>

<p class="tutorial-paragraph"> As the <span class="code-font">lighten</span>
and <span class="code-font">darken</span> functions can quickly result 
in over powering results of white and black, try staying in the range of
3-20%. <span class="code-font">Sass</span> will produce an error if the 
amount of <span class="code-font">shade</span> or 
<span class="code-font">tint</span> exceeds 100%, this is important to 
remember especially if using a single colour for multiple items, or 
outputting an incremented value from a large amount of items.
</p>

<ul class="light-dark">
  <li>Original colour</li>
  <li>Lighten (2.5%)</li>
  <li>Lighten (5%)</li>
  <li>Lighten (7.5%)</li>
  <li>Lighten (10%)</li>
  <li>Lighten (12.5%)</li>
  <li>Original colour</li>
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


<h4 class="tutorial-section-heading"><span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">darken</span>
<span class="code-font">lighten</span>
</h4>

<p class="tutorial-paragraph">
Have already seen how the 
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
<span class="code-font">darken</span> can change the original colour.
Lets put everything together, starting with
<span class="code-font">tint</span>,
<span class="code-font">lighten</span>,
<span class="code-font">shade</span> and 
<span class="code-font">darken</span>.
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


<h2 class="tutorial-section-heading">Multiple colours</h2>
<p class="tutorial-paragraph"> We looked at
<span class="code-font">tint</span>,
<span class="code-font">shade</span>,
<span class="code-font">lighten</span> and
<span class="code-font">darken</span>. However so far we have only worked
with one singular colour <span class="code-font purple">#6534ff</span>
</p>

<p class="tutorial-paragraph"> We also have the ability to perform the 
same actions using multiple colours. Needless to say to use multiple 
colours we need more than one colour, lets use
<span class="code-font purple">#6534ff</span>
<span class="code-font pink">#fc0152</span>
</p>

<ul class="combined">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<p class="tutorial-paragraph"> As you can see from the code below, the 
approach is similar to using a single colour.
</p>


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
between <span class="code-font">tint</span>,
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
</p>


</div>