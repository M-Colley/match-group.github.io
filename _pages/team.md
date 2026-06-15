---
title: "Team"
layout: gridlay
sitemap: true
permalink: /team/
---

<div class="section-kicker" markdown="0">People</div>
# The Team

<p class="lead-text" markdown="0">
The MATCH Lab is growing. Below is our team today — and we are actively recruiting students and
researchers who want to work at the intersection of HCI, accessibility, and mobility.
</p>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row" markdown="0">
{% endif %}

<div class="col-sm-6 clearfix" markdown="0">
  {% if member.photo %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" alt="{{ member.name }}" class="img-responsive" width="38%" style="float: left" />
  {% else %}
  {% assign np = member.name | strip | split: ' ' %}
  <div class="team-initials" aria-hidden="true">{{ np.first | slice: 0 }}{% if np.size > 1 %}{{ np.last | slice: 0 }}{% endif %}</div>
  {% endif %}
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br></i>
  <p style="white-space: nowrap; display: flex; align-items: center; justify-content: flex-start; gap: 3px ">
    {% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener"><i class="fa fa-home fa-2x"></i></a> {% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank" rel="noopener"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
    {% if member.cv %}<a href="{{ member.cv }}" target="_blank" rel="noopener"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank" rel="noopener"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
    {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank" rel="noopener"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}
  </p>

  {% if member.education1 %}
  <i> Research Interests: </i>
  <ul style="overflow: hidden">
  {% if member.number_educ >= 1 %}<li> {{ member.education1 }} </li>{% endif %}
  {% if member.number_educ >= 2 %}<li> {{ member.education2 }} </li>{% endif %}
  {% if member.number_educ >= 3 %}<li> {{ member.education3 }} </li>{% endif %}
  {% if member.number_educ >= 4 %}<li> {{ member.education4 }} </li>{% endif %}
  {% if member.number_educ >= 5 %}<li> {{ member.education5 }} </li>{% endif %}
  </ul>
  {% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if site.data.alumni_members.size > 0 %}
## Alumni

{% for member in site.data.alumni_members %}
* **{{ member.name }}** — {{ member.info }}
{% endfor %}
{% endif %}

## Affiliated PhD researchers

PhD students and candidates Mark co-mentors at partner institutions.

<div markdown="0">
{% assign aff_groups = site.data.affiliates | group_by: "affiliation" %}
{% for g in aff_groups %}
<h4 class="aff-group">{{ g.name }}</h4>
<ul class="aff-list">
{% for p in g.items %}<li>{{ p.name }} <span class="aff-since">· since {{ p.since }}</span></li>{% endfor %}
</ul>
{% endfor %}
</div>

## Recent &amp; upcoming visiting researchers

<div markdown="0">
<ul class="aff-list">
{% for p in site.data.visiting %}<li>{{ p.name }} <span class="aff-since">· {{ p.period }}</span></li>{% endfor %}
</ul>
</div>

## Friends of the lab

Senior collaborators we regularly work with — the "&amp; Friends" in MATCH Lab &amp; Friends:

* <a href="https://tech.cornell.edu/people/wendy-ju/" target="_blank" rel="noopener">Prof. Wendy Ju</a> — Cornell Tech
* <a href="https://www.uni-ulm.de/en/in/mi/institut/personal/er/" target="_blank" rel="noopener">Prof. Enrico Rukzio</a> — Ulm University
* <a href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/" target="_blank" rel="noopener">Prof. Takeo Igarashi</a> — University of Tokyo
* <a href="https://debdey.com/" target="_blank" rel="noopener">Dr. Debargha "Dave" Dey</a> — Assistant Professor, TU Eindhoven
* <a href="https://hpi.de/en/research/research-groups/computational-interaction.html" target="_blank" rel="noopener">Prof. Patrick Ebel</a> — Computational Interaction, Hasso Plattner Institute (HPI)

<div class="join-box" markdown="0">
  <h3>🎓 Work with us</h3>
  <p>We are open to mentoring <strong>Bachelor, Master, and PhD students</strong> and welcome
  <strong>visiting researchers</strong> and <strong>collaborators</strong>. If you are excited about
  human-computer interaction for accessible, trustworthy mobility — automated vehicles, eHMIs, urban
  air mobility, or computational modelling of interaction — we would love to hear from you.</p>
  <a href="mailto:m.colley@ucl.ac.uk" class="btn-match">Email Mark</a>
  &nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/research" class="btn-ghost">See our research</a>
</div>
