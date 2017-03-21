---
layout: tutorial
title: 'Creating an instagram powered gallery'
date: 2017-03-17
read: '15min'
tags: HTML Flexbox SCSS
lead_text: 'Display your instagram feed on your site.'
padding: no
---

<div class="tutorial-body">

  <p class="tutorial-paragraph">
    With over 300 million daily images posted to instagram, it is
    the number one social network for sharing images and videos.
    This tutorial will show you how to display your instagram feed
    on your website.
  </p>

  <p class="tutorial-paragraph">
    Before we begin it is important to mention that this tutorial is not
    exclusive to Instagram, for the purpose of this demo I will be using
    Instagram. If you are more interested in the 
    <span class="code-font">SCSS</span> then click
    <span class="underline-definition">
      <a href="https://codepen.io/andrewrock/pen/MpVgpw"> Here </a>
    </span>
    for the core <span class="code-font">SCSS</span>,
    <span class="code-font">Flexbox</span>.
  </p>

  <p class="tutorial-paragraph">
    Lets get started, to follow this demo you will need the following
    <span class="underline-definition">
      <a href="http://instafeedjs.com/"> Instafeed.js </a>
    </span> and
    <span class="underline-definition">
      <a href="https://www.instagram.com/developer/"> Instagram developer access </a>
    </span>
  </p>

  <h2 class="tutorial-section-heading"> Getting started </h2>
  <p class="tutorial-paragraph">
    To start we must add
    <span class="underline-definition">
      <a href="http://instafeedjs.com/"> Instafeed.js </a>
    </span>
    to our project. Download the file and put in the javascript directory.
    For detailed information about the API head over to the
    <span class="underline-definition">
      <a href="https://github.com/stevenschobert/instafeed.js"> Github page </a>
    </span>.
  </p>

  <div class="code-container">
    <pre class="code code-html"><code class="no-padding">&lt;script type="text/javascript" src="js/instafeed.min.js"&gt;</code></pre>
  </div>

  <p class="tutorial-paragraph"> Then we add it to our html </p>

  <div class="code-container">
    <pre class="code code-html"><code class="no-padding">&lt;div id="instafeed-tutorial"&gt;&lt;/div&gt;</code></pre>
  </div>

  <h2 class="tutorial-section-heading"> Instagram Developer </h2>
  <p class="tutorial-paragraph">
    To use <span class="code-font">instafeed</span> first we must first register our application with
    Instagram. Follow the following steps to get step up.
  </p>
  <ul class="instafeed-setup">
    <li> Head to the
      <span class="underline-definition">
        <a href="https://www.instagram.com/developer/"> Instagram developer portal </a>
      </span>
    </li>
    <li> Click the
      <span class="underline-definition">'Register Your Application'</span>
      button
    </li>
    <li>Fill out the form, Let's quickly go through what should go in each field. </li>
  </ul>

  <div class="definition-wrapper">
    <table class="definition-list">
      <tr>
        <td>
          <p>Application Name:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">This can be anything,
            As long as it does not contain any of the following:
            ‘insta’, ‘gram’, ‘IG’ or ‘Instagram’ 
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Description:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Best to keep this simple,
            e.g. "Gallery for personal site" 
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Company Name:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Company name can be your name</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Website URL:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">This is the url of your website</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Valid Redirect URIs:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Have you ever used Facebook or
            Twitter to sign in to another website, this is what a valid
            redirect URI is, for the purpose of this demo nobody will be
            logging into our application as we are running in Sandbox mode.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Privacy Policy:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">If you have a privacy policy
            include it here, if not just add your site URL.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Contact Email:</p>
        </td>
        <td>
          <p class="tutorial-paragraph">Add your email</p>
        </td>
      </tr>
    </table>
  </div>

  <p class="tutorial-paragraph">Finally, switch to the Security tab and
    deselect the <span class="tutorial-definition">‘Disable implicit OAuth’</span>
    checkbox, then hit Register.
  </p>

  <p class="tutorial-paragraph">
    Having set up our developer access it is now time to hook up
    <span class="code-font">instafeed</span> to display our photos.
    There are a number of steps involved here, it may take one or two tries
    to get it all correct.
  </p>

  <div class="definition-wrapper">
    <table class="definition-list">
      <tr>
        <td>
          <p> userId: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> Click
            <span class="underline-definition">
              <a href="https://smashballoon.com/instagram-feed/find-instagram-user-id/"> here</a>
            </span>
            and enter you instagram username (the one you login with).
            Once you have your userID keep it handy as you will need it soon.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>clientId:</p>
        </td>
        <td>
          <p class="tutorial-paragraph"> Now paste the following in to your browser </p>
          <div class="code-container">
            <pre class="code code-html"><code class="no-padding">https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token</code></pre>
          </div>
          <p class="tutorial-paragraph">
            Now replace <span class="underline-definition">CLIENT-ID</span>
            with the client ID generated.
          </p>
          <p class="tutorial-paragraph">
            Now replace <span class="underline-definition">REDIRECT-URI</span>
            with the redirect URI that you included when setting up.
          </p>
          <p class="tutorial-paragraph"> Load the URL.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>accessToken</p>
        </td>
        <td>
          <p class="tutorial-paragraph"> Once you have loaded the URL,
            your access token should be in the URL
          </p>
          <div class="code-container">
            <pre class="code code-html"><code class="no-padding">'http://your-redirect-uri#access_token=ACCESS-TOKEN'</code></pre>
          </div>
          <p class="tutorial-paragraph">
            Copy the <span class="underline-definition">ACCESS-TOKEN</span>
          </p>
        </td>
      </tr>
    </table>
  </div>

  <h2 class="tutorial-section-heading"> Instafeed Options </h2>
  <p class="tutorial-paragraph"> We now have everyhting that is needed to
    use <span class="code-font">instafeed</span>, now lets explore the api options
  </p>

  <div class="definition-wrapper">
    <table class="definition-list">
      <tr>
        <td>
          <p> Resolution: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> 
           <span class="code-font">instafeed</span> allows us to select 
           an image size,There are currently three options
          </p>
          <ul class="instafeed-setup">
            <li>thumbnail (default) - 150 x 150 </li>
            <li>low_resolution - 306 x 306 </li>
            <li>standard_resolution - 612 x 612 </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <p> Target </p>
        </td>
        <td>
          <p class="tutorial-paragraph">
            Either the ID name or the DOM  element itself where you want
            to add the images to.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Template: </p>
        </td>
        <td>
          <p class="tutorial-paragraph">Allows us to use a custom 
          <span class="code-font">HTML</span> template to use for images,
          I will explain this further as we will be using the template to
          create our gallery
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Get: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> There are a number of options here </p>
          <ul class="instafeed-setup">
            <li> popular (default) - Images from the popular page </li>
            <li> tagged - Images with a specific tag. Use tagName to specify the tag. </li>
            <li> location - Images from a location. Use locationId to specify the location </li>
            <li> user - Images from a user. Use userId to specify the user. </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <p> SortBy: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> There are a number of options here </p>
          <ul class="instafeed-setup">
            <li>none (default) - As they come from Instagram. </li>
            <li>most-recent - Newest to oldest. </li>
            <li>least-recent - Oldest to newest. </li>
            <li>most-liked - Highest # of likes to lowest.</li>
            <li>least-liked - Lowest # likes to highest.</li>
            <li>most-commented - Highest # of comments to lowest.</li>
            <li>least-commented - Lowest # of comments to highest.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Links:
          </p>
        </td>
        <td>
          <p class="tutorial-paragraph">Wrap the image in a link to
            allow users to interact with the photo
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Limit: </p>
        </td>
        <td>
          <p class="tutorial-paragraph">
            By default our instagram photos will run in sandbox mode,
            This means tht we are capped at a maximum of twenty images,
            by adding a limit that is less than the maximum twenty
            we can paginate through our images and take advantage of lazy
            loading.
          </p>
        </td>
      </tr>
    </table>
  </div>

  <h2 class="tutorial-section-heading"> Advanced Options </h2>
  <p class="tutorial-paragraph"> 
  <span class="code-font">instafeed</span> also allows us to specify 
  some advanced options such as what to do before an after images 
  are returned.
  </p>

  <div class="definition-wrapper">
    <table class="definition-list">
      <tr>
        <td>
          <p> Before: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> A callback function called 
           before fetching images from Instagram </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> After: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> A callback function called 
          when images have been added to the page.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Success: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> A callback function called when
           Instagram returns valid data.
           </p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Error: </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> A callback function called when
           there is an error fetching images. 
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Filter:
          </p>
        </td>
        <td>
          <p class="tutorial-paragraph"> A function used to exclude 
          images from your results, e.g Show only photos, videos
          </p>
        </td>
      </tr>
    </table>
  </div>

  <h2 class="tutorial-section-heading"> Putting it all together </h2>
  <div class="code-container">
    <pre class="code code-css"><label>JS</label><code>document.addEventListener("DOMContentLoaded", function() {
      var tutorialFeed = new Instafeed ({
      get: 'user',
      userId: '623597756',
      clientId: 'Client',
      target: 'tutorial-instafeed',
      accessToken: 'Access-Token',
      resolution: 'standard_resolution',
      sortBy: 'most-recent',
      limit: 9,
      template: '&lt;div class="image-item insta-page"&gt;' +
      '&lt;a class="image insta-image" href="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;img alt="&#123;&#123;user.full_name&#125;&#125;" src="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;div class="img-backdrop-tutorial"&gt;' +
      '&lt;div class="insta-caption"&gt;' +
      '&lt;p&gt;&#123;&#123;caption&#125;&#125;&lt;/p&gt;' +
      '&lt;/div&gt;' +
      '&lt;/div&gt;' +
      '&lt;div class="captions"&gt;' +
      '&lt;a&gt;&lt;/a&gt;' +
      '&lt;/div&gt;' +
      '&lt;/a&gt;' +
      '&lt;/div&gt;'

   });
    
   tutorialFeed.run();
   
  });</code></pre>
 </div>

  <p class="tutorial-paragraph">
    We briefly discussed the advanced instafeed options, now lets explore
    how to use the <span class="underline-definition">Filter</span>
    and the <span class="underline-definition">After</span> functions.
  </p>

  <div class="code-container">
    <pre class="code code-css"><label>JS</label><code>document.addEventListener("DOMContentLoaded", function() {
      var tutorialFeed = new Instafeed ({
      get: 'user',
      userId: '623597756',
      clientId: 'Client',
      target: 'tutorial-instafeed',
      accessToken: 'Access-Token',
      resolution: 'standard_resolution',
      sortBy: 'most-recent',
      limit: 9,
      template: '&lt;div class="image-item insta-page"&gt;' +
      '&lt;a class="image insta-image" href="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;img alt="&#123;&#123;user.full_name&#125;&#125;" src="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;div class="img-backdrop-tutorial"&gt;' +
      '&lt;div class="insta-caption"&gt;' +
      '&lt;p&gt;&#123;&#123;caption&#125;&#125;&lt;/p&gt;' +
      '&lt;/div&gt;' +
      '&lt;/div&gt;' +
      '&lt;div class="captions"&gt;' +
      '&lt;a&gt;&lt;/a&gt;' +
      '&lt;/div&gt;' +
      '&lt;/a&gt;' +
      '&lt;/div&gt;'

   filter: function(image) {
    return image.type === 'image';
   }
  
  tutorialFeed.run();

});</code></pre>
 </div>

  <p class="tutorial-paragraph"> By using the filter function we can tell
    <span class="code-font">instafeed</span> to ignore certain fil types.
     In this example I have requested we only return images
  </p>

  <p class="tutorial-paragraph">
    We can now use the <span class="underline-definition">After</span> 
    function to add display a loading animation while the photos are 
    being returned.
  </p>

  <p class="tutorial-paragraph">
    We are also using the <span class="underline-definition">After</span>
    function. To check if any more images are available, if images are
    available we show the load more button, if no images are 
    available we hide the button.
  </p>

  <div class="code-container">
    <pre class="code code-css"><label>JS</label><code>document.addEventListener("DOMContentLoaded", function() {
      var tutorialFeed = new Instafeed ({
      get: 'user',
      userId: '623597756',
      clientId: 'Client',
      accessToken: 'Access-Token',
      resolution: 'standard_resolution',
      sortBy: 'most-recent',
      limit: 9,
      template: '&lt;div class="image-item insta-page"&gt;' +
      '&lt;a class="image insta-image" href="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;img alt="&#123;&#123;user.full_name&#125;&#125;" src="&#123;&#123;image&#125;&#125;&gt;' +
      '&lt;div class="img-backdrop-tutorial"&gt;' +
      '&lt;div class="insta-caption"&gt;' +
      '&lt;p&gt;&#123;&#123;caption&#125;&#125;&lt;/p&gt;' +
      '&lt;/div&gt;' +
      '&lt;/div&gt;' +
      '&lt;div class="captions"&gt;' +
      '&lt;a&gt;&lt;/a&gt;' +
      '&lt;/div&gt;' +
      '&lt;/a&gt;' +
      '&lt;/div&gt;'
      
   filter: function(image) {
    return image.type === 'image';
   },
   after: function () {
    loader.style.display = 'none';
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }
  }
});
  
  tutorialFeed.run();

});</code></pre>
</div>

</div>

<div class="tutorial-insta-container">
  <div class="image-wrapper" id="tutorial-instafeed">
    <div class="loader" id="loader">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
  <button id="insta-btn" class="insta-btn">See more</button>
</div>

<div class="tutorial-body">
  <p class="tutorial-paragraph"> As you can see 
  <span class="code-font">instafeed</span> will return our images, if 
  you hover the image you can see that I have added the caption also.
  </p>

  <p class="tutorial-paragraph"><span class="code-font">instafeed</span>
   also allows us to return more than  the caption, we can return likes,
    comments, post type etc.
    See  <span class="underline-definition">
    <a href="https://github.com/stevenschobert/instafeed.js/issues/21">
      here 
    </a>
     </span> 
    for a full list of model options
  </p>

  <h2 class="tutorial-section-heading"> Styling Images </h2>
  <p class="tutorial-paragraph"> We are going to use 
  <span class="code-font">flexbox</span> to display our images, combine
   this with SCSS and we can style our images quickly, we can also add 
   animations and transition delays using the native
   <span class="code-font">SCSS</span> forLoops.
  </p>

  <p class="tutorial-paragraph">
    Using flexbox we set the image-wrapper to display as a row that will
    wrap when there is no more space left.
  </p>

  <p class="tutorial-paragraph">
    Don't let the <span class="code-font">SCSS</span> put you off, 
    it's really quite simple, we already
    set a limit of ten images so we set the loop to run for every image.
    We put the image-item in the loop.
  </p>

  <p class="tutorial-paragraph">
    To keep our images fluid, we use the flex property. I could write a 
    whole post on <span class="code-font">flexbox</span>, but for now 
    I will just briefly explain.
  </p>

  <div class="code-container">
    <pre class="code code-css"><code class="no-padding">flex: 1 0 33%;</code></pre>
  </div>

  <p class="tutorial-paragraph">
    What does it tell all image items to grow and shrink at the same rate
    while maintaining 33% of the space available
  </p>

  <p class="tutorial-paragraph">
    We use the loop to add a new animation delay to each item adding 1s
    second for each item. Setting each item to be invisible prior to the
    animation running.
  </p>

  <div class="code-container">
    <pre class="code code-css"><code class="no-padding">animation-delay: (#{$i * .1s});</code></pre>
  </div>

<div class='code-container'>
<pre class='code code-css'><label>SCSS</label><code>$insta-wrapper-max-width: 965px;
  $insta-wrapper-min-height: 100px;
  $transition: all .17s cubic-bezier(.4, 0, 1, 1);

  .image-wrapper {
   box-sizing: border-box;
   display: flex;
   flex-flow: row wrap;
   flex-grow: 1;
   justify-content: space-around;
   margin: 0 auto 30px;
   max-width: $insta-wrapper-max-width;
   min-height: $insta-wrapper-min-height;
   position: relative;
   width: $width;
  }

  @for $i from 1 through 10 {
  .image-item {
   animation: slide-item .3s ease forwards;
   box-sizing: border-box;
   flex: 1 0 33%;
   transform: translateY(250px);
   visibility: hidden;
   width: $width;

   &:nth-child(#{$i}) {
     animation-delay: (#{$i * .1s});
   }
 }

  .insta-page { padding: 10px; }
}

  .image {
   display: block;
   position: relative;
   transition: $transition;
   width: $width;

  img {
   display: block;
   max-width: $width;
  }
 }</code></pre>
</div>

<p class="tutorial-paragraph"> And finally the animations </p>

<pre class='code code-css'><label>SCSS</label><code>@keyframes slide-item {
  60% { transform: translateY(-10px); }
  
  100% {
   opacity: 1;
   transform: translateY(0);
   visibility: visible;
  }
 }</code></pre>
</div>

