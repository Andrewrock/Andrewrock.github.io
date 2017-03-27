---
layout: tutorial
title: ':not() selector'
date: 2017-03-27
read: '5min'
tags: HTML SCSS
definition: <span class="code-font">:not()</span> is a CSS negation 
            pseudo-class selector. It is a functional pseudo-class 
            selector that takes a <span class="underline-definition">
            <a href="https://www.w3.org/TR/selectors/#simple-selectors-dfn">
            simple</a></span> selector as an argument, and then matches 
            one or more elements that are not represented by the argument.
definition-link: 'https://developer.mozilla.org/en/docs/Web/CSS/:not'
definition-source: 'MDN'
lead_text: Using the alphabet to explore <span class="code-font">:not()</span>
---


<div class="tutorial-body">
  
<p class="tutorial-paragraph"> The <span class="code-font">:not()</span>
may be one of the least used css selectors however it is packed with
potential. <span class="code-cont">:not()</span> can used with all 
simple selectors, in other words any regular selector
</p>

<div class="code-container">  
<pre class="code code-css"><code>:not(selector) {
 css declarations;
}
</code></pre>
</div>
  
 
<ul class="simple-list">
 <li><p>Type selector (e.g p, button, pre etc)</p></li>
 <li><p>Class selector (e.g .header, .footer, .nav etc)</p></li>
 <li><p>ID selector (e.g #logo)</p> </li>
 <li><p>Pseudo-class selector (e.g :checked, :active)</p></li>
 <li><p>Attribute selector (e.g [type="submit"])</p> </li>    
</ul>
  
<p class="tutorial-paragraph"> There are however a few exceptions as to
what we can use <span class="code-font">:not()</span>. The list of 
un-supported selectors is smaller than the supported so it may be easier
to learn the not supported list 
</p>
  
<div class="code-container">  
<pre class="code code-css"><code>/* The following example will not work */

div:not(:not(.same)) {}

li:not(:not(:last-child)) {}

:not(::first-letter) {}

a:not(::after) {}

p:not(::before) {}

/* :not() cannot be nested either */
</code></pre>
</div>
  
  
<h2 class="tutorial-section-heading">Using the alphabet to test
 <span class="code-font">:not()</span>
</h2>

<p class="tutorial-paragraph"> We can use the alphabet to illustrate the
power of the <span class="code-font">:not()</span>
</p>

<div class="alphabet-container">
<ul class="alphabet">
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li>e</li>
    <li>f</li>
    <li>g</li>
    <li>h</li>
    <li>i</li>
    <li>j</li>
    <li>k</li>
    <li>l</li>
    <li>m</li>
    <li>n</li>
    <li>o</li>
    <li>p</li>
    <li>q</li>
    <li>r</li>
    <li>s</li>
    <li>t</li>
    <li>u</li>
    <li>v</li>
    <li>y</li>
    <li>x</li>
    <li>y</li>
    <li>z</li>
</ul>

<p class="tutorial-paragraph"> Now lets say we want to only show vowels.
To achieve this I have added a <span class="code-font">vowel</span>
class. This is the hook our <span class="code-font">:not()</span>
selector will check against before returning items.
</p>
<div class="code-container">  
<pre class="code code-css"><code>.alphabet > li:not(.vowel) {
display: none;
}
</code></pre>
</div>
<ul class="alphabet vowel">
    <li class="vowel">a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li class="vowel">e</li>
    <li>f</li>
    <li>g</li>
    <li>h</li>
    <li class="vowel">i</li>
    <li>j</li>
    <li>k</li>
    <li>l</li>
    <li>m</li>
    <li>n</li>
    <li class="vowel">o</li>
    <li>p</li>
    <li>q</li>
    <li>r</li>
    <li>s</li>
    <li>t</li>
    <li class="vowel">u</li>
    <li>v</li>
    <li>y</li>
    <li>x</li>
    <li>y</li>
    <li>z</li>
</ul>

<p class="tutorial-paragraph"> Now lets say we want to only change the
background color for vowels
</p>

<div class="code-container">  
<pre class="code code-css"><code>.alphabet-test > li {
background-color: $nav-link-color;
  &:not(.vowel) {
   background-color: grey;
   color: $body-color;
  }
}</code></pre>
</div>

<ul class="alphabet-test">
    <li class="vowel">a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li class="vowel">e</li>
    <li>f</li>
    <li>g</li>
    <li>h</li>
    <li class="vowel">i</li>
    <li>j</li>
    <li>k</li>
    <li>l</li>
    <li>m</li>
    <li>n</li>
    <li class="vowel">o</li>
    <li>p</li>
    <li>q</li>
    <li>r</li>
    <li>s</li>
    <li>t</li>
    <li class="vowel">u</li>
    <li>v</li>
    <li>y</li>
    <li>x</li>
    <li>y</li>
    <li>z</li>
</ul>
</div>
</div>