---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---

<div class="section-kicker" markdown="0">Talks</div>
# Talks &amp; Seminars

{% if site.data.conference_talks.size > 0 %}
## Conference Talks

{% for publi in site.data.conference_talks %}
* <strong>{{ publi.title }}</strong> <br/> <i>{{ publi.authors }}</i>, {{ publi.conf }} ({{ publi.year }})
{% endfor %}
{% endif %}

{% if site.data.invited_talks.size > 0 %}
## Invited Talks &amp; Seminars

{% for publi in site.data.invited_talks %}
* {{ publi.name }}
{% endfor %}
{% endif %}
