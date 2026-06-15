---
title: "About"
layout: gridlay
sitemap: true
permalink: /about/
---

<div class="section-kicker" markdown="0">About</div>
# About the MATCH Lab

<p class="lead-text" markdown="0">
The <strong>MATCH Lab &amp; Friends</strong> — <em>Mobility, Accessibility, and Computational HCI</em> —
is led by Dr. Mark Colley at the <a href="https://www.ucl.ac.uk/uclic" target="_blank" rel="noopener">UCL
Interaction Centre (UCLIC)</a>. We research how people interact with advanced mobility technologies,
with a focus on accessibility for all users and on building appropriate trust in automation.
</p>

## Group Lead

{% for member in site.data.pi %}
<div class="row" markdown="0">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" alt="{{ member.name }}" class="img-responsive" width="28%" style="float: left; border-radius: 10px;" />
  <h3>{{ member.name }}</h3>
  <i style="font-size:18px">{{ member.info }}</i><br>

  {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a> {% endif %}
  {% if member.email %}<a href="mailto:{{ member.email }}"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
  {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}

  <p style="margin-top: 14px;">Mark is a tenure-track Lecturer (Assistant Professor) in HCI at UCLIC and a
  Fellow of the Higher Education Academy (FHEA). Before joining UCL he was a Research Associate in the
  Institute of Media Informatics at Ulm University with Enrico Rukzio, and in 2023 he visited the Future
  Automation Research Laboratory at Cornell Tech with Wendy Ju. He defended his PhD — <em>"Calibrating
  Trust in Automated Vehicles"</em> — in 2024, and has held visiting professorships at the University of
  Tokyo (Canon Foundation Fellowship), TU Eindhoven, and TH Ingolstadt. His multidisciplinary work in
  HCI, accessibility, and computational modelling has been recognised with a SIGCHI Special Recognition,
  the UCL Computer Science Early Career Researcher of the Year 2025, and multiple paper awards.</p>
</div>
{% endfor %}

## Research agenda

Mobility is a cornerstone of societal participation and growth. As we move towards automated systems
and explore new transport modes such as urban air mobility, we face both challenges — like *undertrust*
in technology — and opportunities — like *enhanced accessibility*. Our research pursues three goals:

1. **Characterising novel mobility systems** — empirical studies that surface the challenges and
   opportunities of emerging mobility, with a particular focus on accessibility.
2. **Behavioural analytics** — understanding the travel behaviour and needs of the general public and
   vulnerable groups across diverse traffic scenarios.
3. **Human-centric solutions** — turning those insights into prototypes, guidelines, simulation tools,
   and collaborations that make traffic safer and more accessible for all.

{% if site.data.awards and site.data.awards.first.name != "x" %}
## Selected awards &amp; honours

{% for award in site.data.awards %}
* {{ award.name }}
{% endfor %}
{% endif %}

{% if site.data.grants and site.data.grants.first.name != "x" %}
## Fellowships &amp; grants

{% for grant in site.data.grants %}
* {{ grant.name }}
{% endfor %}
{% endif %}

## Friends of the lab

The "&amp; Friends" in our name is deliberate — much of our work is collaborative. We are fortunate to
work with outstanding researchers and groups, including:

* <a href="https://tech.cornell.edu/people/wendy-ju/" target="_blank" rel="noopener">Prof. Wendy Ju</a> — Future Automation Research Lab, Cornell Tech
* <a href="https://www.uni-ulm.de/en/in/mi/institut/personal/er/" target="_blank" rel="noopener">Prof. Enrico Rukzio</a> — Institute of Media Informatics, Ulm University
* <a href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/" target="_blank" rel="noopener">Prof. Takeo Igarashi</a> — User Interface Research Group, University of Tokyo
* <a href="https://scholar.google.de/citations?user=cR1_0-EAAAAJ&hl=en" target="_blank" rel="noopener">Dr. Pascal Jansen</a> — Ulm University
* <a href="https://debdey.com/" target="_blank" rel="noopener">Dr. Debargha "Dave" Dey</a> — Assistant Professor, Eindhoven University of Technology
* <a href="https://hpi.de/en/research/research-groups/computational-interaction.html" target="_blank" rel="noopener">Prof. Patrick Ebel</a> — Computational Interaction, Hasso Plattner Institute (HPI)
* <a href="https://bazilinskyy.github.io/" target="_blank" rel="noopener">Dr. Pavlo Bazilinskyy</a> — Assistant Professor, Eindhoven University of Technology

## Where to find us

We are part of the [UCL Interaction Centre]({{ site.url }}{{ site.baseurl }}), 66–72 Gower Street, London.
Get in touch at [m.colley@ucl.ac.uk](mailto:m.colley@ucl.ac.uk).
