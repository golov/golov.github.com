---
layout: post
title: "KHL attendance stats 14-15"
description: ""
category: 
tags: [khl,graphs]
customjs:
 - http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
 - /assets/js/libs/highcharts.4.1.3.min.js
 - /assets/js/khl_stats.js
---
{% include JB/setup %}

KHL regular season just finished. This was the 7th season, with one of the most turbulent off-seasons the league has had. 3 teams - Donbass, Lev Prague, Spartak Moscow, have left the league since last year (although Spartak and Donbass are planning to return). 3 new teams have joined - Jokerit Helsinki, Lada Tolyati and Sochi. The league has had a general trend of growth throughout it's history, and I wanted to analyze this year to see how it fared. Data was collected from the [KHL official website](http://khl.ru).

Overall Average attendance
--------------------------

Good news! The average attendance this year was 6,422, an increase of 341 (5.6%) per game! This is a total 5,395,035 fans that visited games. Taking a game at roughly 3 hours (and every fan stays until the end of each game, obviously), that's 16 million man-hours, or 1847 man-years. 

<table class="table">
  <tr>
    <th>Season</th>
    <th>Average Attendance</th>
  </tr>
  <tr>
    <td>2008-09</td>
    <td>5,298</td>
  </tr>
  <tr>
    <td>2009-10</td>
    <td>5,474</td>
  </tr>
  <tr>
    <td>2010-11</td>
    <td>5,785</td>
  </tr>
  <tr>
    <td>2011-12</td>
    <td>5,891</td>
  </tr>
  <tr>
    <td>2012-13</td>
    <td>6,106</td>
  </tr>
  <tr>
    <td>2013-14</td>
    <td>6,081</td>
  </tr>
  <tr>
    <td>2014-15</td>
    <td>6,422</td>
  </tr>
</table>

New teams
-------------------

First thing that interests me here, is how much an effect the new teams, and the newly departed teams have had. The 3 new teams that joined the league Jokerit, Sochi and Lada, averaged 10932, 7556 and 5330. Without those 3 teams, the league average would have been 6253, about half way to the 13-14 average. Lev, Donbass and Spartak had average attendances of 5410, 3912 and 3505 [source](http://hfboards.hockeysfuture.com/showthread.php?t=1571003). If replace Jokerit, Sochi and Lada with the Lev, Donbass and Spartak of 13-14, we go slightly below the overall 13-14 average at 6055. This means that for the 27 teams that stayed in the league in the 2 seasons of 13-15, there has been a 0.4% drop. It also means that the league is moving to more receptive hockey areas, a trend I hope continues.

<div id="container" style="width:100%; height:800px;"></div>