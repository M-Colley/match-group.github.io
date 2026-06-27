---
title: "Home"
layout: gridlay
sitemap: true
permalink: /
description: "MATCH (Mobility, Accessibility, and Computational HCI) Lab & Friends, led by Dr. Mark Colley at the UCL Interaction Centre — HCI for accessible, trustworthy mobility."
image: /images/hero-road.jpg
---

<!-- ===================== HERO ===================== -->
<div class="match-hero" markdown="0">
  <h1>The <span class="match-acronym">MATCH</span> Lab <span class="match-amp">&amp; Friends</span></h1>
  <div class="match-sub">Mobility · Accessibility · Computational HCI</div>
  <p>
    We are a Human-Computer Interaction research group at the
    <a href="https://www.ucl.ac.uk/uclic" target="_blank" rel="noopener" style="color:#ffd86b;">UCL Interaction Centre</a>.
    We design and study interactions that make the future of mobility — automated vehicles, urban air
    mobility, and the streets around them — <strong>accessible to everyone</strong> and
    <strong>worthy of people's trust</strong>, combining empirical user research with computational
    modelling and simulation.
  </p>
  <div class="hero-cta">
    <a href="{{ site.url }}{{ site.baseurl }}/research" class="btn-ghost">Our research</a>
    <a href="{{ site.url }}{{ site.baseurl }}/publications" class="btn-ghost">Publications</a>
    <a href="{{ site.url }}{{ site.baseurl }}/team" class="btn-ghost">Join us</a>
  </div>
</div>

<!-- ===================== STATS ===================== -->
<div class="stat-grid" markdown="0">
  <div class="stat"><div class="stat-num">80+</div><div class="stat-label">First-author papers</div></div>
  <div class="stat"><div class="stat-num">30+</div><div class="stat-label">CHI full papers</div></div>
  <div class="stat"><div class="stat-num">10+</div><div class="stat-label">IMWUT full papers</div></div>
  <div class="stat"><div class="stat-num">Multiple</div><div class="stat-label">Best-paper awards</div></div>
</div>

<!-- ===================== MISSION ===================== -->
<div class="row" markdown="0" style="margin-bottom: 10px;">
  <div class="col-sm-12">
    <div class="section-kicker">What we do</div>
    <h2 class="section-heading">Human-centred interaction for accessible, trustworthy mobility</h2>
    <p class="lead-text">
      Mobility is a cornerstone of participation in society. As transport becomes automated and
      reaches into new spaces such as urban air mobility, we face a dual challenge: building
      <em>appropriate trust</em> in systems people cannot fully see, and ensuring these systems
      work for <em>everyone</em>, including people with disabilities and vulnerable road users.
      We tackle this by pairing rigorous empirical studies with simulation and computational
      models that let us evaluate interfaces at scale — often before the first user study is run.
    </p>
  </div>
</div>

<!-- ===================== RESEARCH PILLARS ===================== -->
<div class="pillars" markdown="0">
  <div class="pillar-card">
    <span class="pillar-icon" aria-hidden="true">♿</span>
    <h4>Accessibility &amp; Inclusive Design</h4>
    <p>Inclusive external communication and in-vehicle interfaces so automated mobility works for
       people with visual, hearing, and other impairments — not just the average user.</p>
  </div>
  <div class="pillar-card">
    <span class="pillar-icon" aria-hidden="true">🚗</span>
    <h4>Mobility &amp; AV Interaction</h4>
    <p>External Human-Machine Interfaces (eHMIs), automated vehicles, cooperative driving, urban air
       mobility, and the safety of vulnerable road users.</p>
  </div>
  <div class="pillar-card">
    <span class="pillar-icon" aria-hidden="true">🧠</span>
    <h4>Computational Modelling &amp; Simulation</h4>
    <p>Bayesian optimisation of interfaces, large-scale traffic simulation (e.g. PedSUMO), and
       human-centred models that predict and improve user experience.</p>
  </div>
</div>
<div style="margin: 6px 0 26px;" markdown="0">
  <a href="{{ site.url }}{{ site.baseurl }}/research" class="btn-match">Explore our research →</a>
</div>

<!-- ===================== SELECTED PUBLICATIONS ===================== -->
<div class="row" markdown="0">
  <div class="col-sm-12">
    <div class="section-kicker">Highlights</div>
    <h2 class="section-heading">Selected publications</h2>
  </div>
</div>
<div class="pub-list" markdown="0">
{% assign selected = site.data.publist | where: "selected", true %}
{% for pub in selected limit:3 %}
  <div class="pub-card">
    <div class="pub-thumb{% if pub.preview %} has-video{% endif %}"><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ pub.image }}" alt="{{ pub.title | escape }} teaser" loading="lazy">{% if pub.preview %}<video class="pub-video-preview" muted loop playsinline preload="none"><source src="{{ site.url }}{{ site.baseurl }}/files/videos/previews/{{ pub.preview }}" type="video/mp4"></video>{% endif %}</div>
    <div class="pub-body">
      <div class="pub-title">{{ pub.title }}{% if pub.award %}<span class="award-badge">★ {{ pub.award }}</span>{% endif %}</div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">{{ pub.venue }} · {{ pub.year }}</div>
      <div class="pub-links">
        {% for link in pub.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
      </div>
    </div>
  </div>
{% endfor %}
</div>
<div style="margin: 2px 0 26px;" markdown="0">
  <a href="{{ site.url }}{{ site.baseurl }}/publications" class="btn-ghost">All publications →</a>
</div>

<!-- ===================== RECENT NEWS ===================== -->
<div class="row" markdown="0">
  <div class="col-sm-12">
    <div class="section-kicker">Latest</div>
    <h2 class="section-heading">News</h2>
  </div>
</div>
<div class="news-feed" markdown="0">
{% for article in site.data.news limit:5 %}
  {% if article.headline %}
  <div class="news-item">
    <div class="news-date">{{ article.date }}</div>
    <div class="news-body">{{ article.headline }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>
<div style="margin: 2px 0 26px;" markdown="0">
  <a href="{{ site.url }}{{ site.baseurl }}/news" class="btn-ghost">More news →</a>
</div>

<!-- ===================== JOIN ===================== -->
<div class="join-box" markdown="0">
  <h3>🎓 Join the MATCH Lab</h3>
  <p>We are open to mentoring Bachelor, Master, and PhD students, and welcome collaborators and friends
     in HCI, accessibility, and mobility. Prospective PhD students and visitors are encouraged to get in touch.</p>
  <a href="mailto:m.colley@ucl.ac.uk" class="btn-match">Get in touch</a>
</div>
