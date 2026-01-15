---
title: "Team"
layout: gridlay
sitemap: false
permalink: /team/
---


<!--- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

<!--- **You want to work with us? See our [open positions]({{ site.url }}{{ site.baseurl }}/vacancies).**-->



<!--- ## Team Lead

{% for member in site.data.team_members %}
  {% if member.position == "lead" %}
  
  <div class="row">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="18%" style="float: left" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.info }}</i><br>
    <p style="white-space: nowrap; display: flex; align-items: center; justify-content: flex-start; gap: 3px ">
    {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a> {% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
    {% if member.cv %}<a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
    {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}
    </p>

   <i> Research Interests: </i>
  <ul style="overflow: hidden">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  </ul>
</div>
{% endif %}
{% endfor %}
-->

## The Team

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% if member.position != "lead" %}
{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="38%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br></i>
  <p style="white-space: nowrap; display: flex; align-items: center; justify-content: flex-start; gap: 3px ">
    {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a> {% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
    {% if member.cv %}<a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
    {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}
  </p>

  <i> Research Interests: </i>
  <ul style="overflow: hidden">
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

{% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}
{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


## Alumni


{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}
{% if member.position != "lead" %}
{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="38%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br></i>
  <p style="white-space: nowrap; display: flex; align-items: center; justify-content: flex-start; gap: 3px ">
    {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a> {% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
    {% if member.cv %}<a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
    {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}
  </p>

  <i> Research Interests: </i>
  <ul style="overflow: hidden">
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

{% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}
{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}



[//]: # ({% if site.data.alumni_visitors %})

[//]: # (## Former M.S./B.S Students, Visitors)

[//]: # ()
[//]: # (<div class="row">)

[//]: # ()
[//]: # (<div class="col-sm-6 clearfix">)

[//]: # ()
[//]: # ({% for member in site.data.alumni_visitors %})

[//]: # ()
[//]: # ({{ member.name }})

[//]: # ()
[//]: # ({% endfor %})

[//]: # ()
[//]: # (</div>)

[//]: # ()
[//]: # (</div>)

[//]: # ()
[//]: # ({% endif %})

[//]: # ()
[//]: # (## Alumni)

[//]: # (- Juliette-Michelle Burkhardt &#40;Student Assistant, 2024&#41;)

## Bachelor and Master Students

### Ongoing
- Anton Gasse: _Modeling Visual Sampling Processes via Computational Rationality_ (Bachelor Thesis)

### Finished
- Hannah Bussmann: _Simulating Human-Like Touch Interactions Through RL-based Biomechanical Modeling_ (Master Thesis, 2025)
- Simon Lämmer: _GTA: Generative Traffic Agents for Simulating Realistic Traffic Behavior_ (Master Thesis, 2025)
- Niko Konzack: _A Computationally Rational Model of Human Visual Sampling for Atari Games_ (Master Thesis, 2025)
- Georg Schneeberger:  _End-to-End Reinforcement Learning Training of a Convolutional Neural Network for Autonmous
  Driving_ (Master Thesis, 2024)
- Moritz Wörmann: _Generating Aesthetic UI Alternatives under Constraints_ (Bachelor Thesis, 2024)
