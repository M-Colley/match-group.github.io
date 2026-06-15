---
title: "Publications"
layout: publications
sitemap: true
permalink: /publications/
---

<div class="section-kicker" markdown="0">Research output</div>
# Publications

<p class="lead-text" markdown="0">
A selection of the group's work in HCI, accessibility, and mobility. For the complete and
most up-to-date list, see
<a href="https://scholar.google.com/citations?user=Kt5I7wYAAAAJ&hl=de" target="_blank" rel="noopener">Google&nbsp;Scholar</a>.
Group members are shown in <strong>bold</strong>.
</p>

<!-- ---------- Selected ---------- -->
<h2 class="year-heading" markdown="0">★ Selected</h2>
<div class="pub-list" markdown="0">
{% assign selected = site.data.publist | where: "selected", true %}
{% for pub in selected %}
  <div class="pub-card">
    <div class="pub-thumb{% if pub.preview %} has-video{% endif %}"><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ pub.image }}" alt="{{ pub.title | escape }} teaser" loading="lazy">{% if pub.preview %}<video class="pub-video-preview" muted loop playsinline preload="none"><source src="{{ site.url }}{{ site.baseurl }}/files/videos/previews/{{ pub.preview }}" type="video/mp4"></video>{% endif %}</div>
    <div class="pub-body">
      <div class="pub-title">{{ pub.title }}{% if pub.award %}<span class="award-badge">★ {{ pub.award }}</span>{% endif %}</div>
      <div class="pub-authors">{{ pub.authors }}{% if pub.note %} <span class="pub-note">({{ pub.note }})</span>{% endif %}</div>
      <div class="pub-venue">{{ pub.venue }} · {{ pub.year }}</div>
      <div class="pub-links">
        {% for link in pub.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

<!-- ---------- All, grouped by year ---------- -->
<h2 class="year-heading" markdown="0">All publications by year</h2>
{% for y in site.data.years %}
  {% assign year_pubs = site.data.publist | where: "year", y.year %}
  {% if year_pubs.size > 0 %}
  <h3 class="year-heading" markdown="0">{{ y.year }}</h3>
  <div class="pub-list" markdown="0">
  {% for pub in year_pubs %}
    <div class="pub-card">
      <div class="pub-thumb{% if pub.preview %} has-video{% endif %}"><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ pub.image }}" alt="{{ pub.title | escape }} teaser" loading="lazy">{% if pub.preview %}<video class="pub-video-preview" muted loop playsinline preload="none"><source src="{{ site.url }}{{ site.baseurl }}/files/videos/previews/{{ pub.preview }}" type="video/mp4"></video>{% endif %}</div>
      <div class="pub-body">
        <div class="pub-title">{{ pub.title }}{% if pub.award %}<span class="award-badge">★ {{ pub.award }}</span>{% endif %}</div>
        <div class="pub-authors">{{ pub.authors }}{% if pub.note %} <span class="pub-note">({{ pub.note }})</span>{% endif %}</div>
        <div class="pub-venue">{{ pub.venue }} · {{ pub.year }}</div>
        <div class="pub-links">
          {% for link in pub.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
        </div>
      </div>
    </div>
  {% endfor %}
  </div>
  {% endif %}
{% endfor %}
