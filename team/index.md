---
layout: team
title: Our Team
---

{% for team_member in site.categories.team %}

  <div class="profile">
  
    <a href="{{team_member.url}}">
      <div class="circle-small center_image"><img src="{{site.assets.team}}{{team_member.image}}" style="{{team_member.small-circle-adjustments}}" /></div><img src="{{site.assets.img }}click-bio.png" style="margin-right: -130px;" />
    </a>

    <h3><a href="{{team_member.url}}">{{team_member.name}}</a></h3>
    <span>{{team_member.teaser}}</span>

{% endfor %}

<br />

<p>
<h3> Other Expert Team Members </h3>
CCG draws on a network of trusted associates and experts to meet diverse client requirements fully. This network includes highly qualified economists, engineers, lawyers and academics in the ICT sector.
</p>

</div>