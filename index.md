---
layout: page
title: Hi! I'm Peter Golov
tagline: and this is my website
---
{% include JB/setup %}

<p>
  I'm a 27 year old <a href="http://www.ruby-lang.org/en/">ruby</a> developer based in Moscow, Russia. I am currently available for hire for remote contracts/freelance work.
</p>

<p>
  After studying Physics at the University of 
  <a href="http://www.dur.ac.uk/">Durham</a>, I fell in love with programming, and never looked back.
</p>
<p>
  Currently, I'm freelancing/contracting, and writing cool apps with 
  <a href="http://rubyonrails.org/">Rails</a>, 
  <a href="http://puppetlabs.com/">Puppet</a>, 
  <a href="http://jquery.com/">jQuery</a>, 
  <a href="http://documentcloud.github.com/backbone/">Backbone</a> and all that jazz.
</p>

<p>Here are a couple of front facing websites that I have recently developed, and places where I used to work.</p>
<h3>Recent Projects:</h3>
<div class="row">
  <div class="col-xs-6">
    <a href="https://www.moneyadviceservice.org.uk/" class="thumbnail">
      <img src="/images/projects/mas-thumb.png">
    </a>    
    <a href="http://nature.com/natureevents/science/calendar" class="thumbnail">
      <img src="images/projects/natureevents.jpg">
    </a>
    <a href="http://www.bartenderapp.com" class="thumbnail">
      <img src="images/projects/bartenderapp.jpg">
    </a>
    <a href="http://www.warsquaregame.com" class="thumbnail">
      <img src="images/projects/warsquare.jpg">
    </a>
  </div>
</div>

<h3>Worked at:</h3>
<div class="row">
  <div class="col-xs-6">
    <a href="http://www.onthebeach.co.uk" class="thumbnail">
      <img src="images/employers/otb.jpg">
    </a>
    <a href="http://mymobileworkers.com/" class="thumbnail">
      <img src="images/employers/momote.jpg">
    </a>
  </div>
</div>

{% for post in site.posts %}

  <article class="home">

    <span class="post-date">
      {% assign d = post.date | date: "%d" | plus:'0' %}
      {{ post.date | date: "%B" }}
      {% case d %}
        {% when 1 or 21 or 31 %}{{ d }}st,
        {% when 2 or 22 %}{{ d }}nd,
        {% when 3 or 23 %}{{ d }}rd,
        {% else %}{{ d }}th,
      {% endcase %}
      {{ post.date | date: "%Y" }}
    </span>

    <h2>
      <a href="{{ site.BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </h2>

    <div>
      {% if post.fullview %}
        {{ post.content }}
      {% else %}
        {% if post.shortinfo %}
          {{ post.shortinfo }}
        {% elsif post.description %}
          {{ post.description }}
        {% else %}
          {{ post.excerpt }}
        {% endif %}
      {% endif %}
    </div>

  </article>
{% endfor %}