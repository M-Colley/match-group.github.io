---
title: "News"
layout: gridlay
sitemap: true
permalink: /news/
---

<div class="section-kicker" markdown="0">Latest</div>
# News

<div class="news-feed" markdown="0">
{% for article in site.data.news %}
  {% if article.headline %}
  <div class="news-item">
    <div class="news-date">{{ article.date }}</div>
    <div class="news-body">{{ article.headline }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>
