---
layout: post
title: "KHL attendance stats 14-15"
description: ""
category: 
tags: [khl,graphs]
customjs:
 - http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
 - /assets/js/libs/underscore.1.8.2.min.js
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

Average attendance by team
--------------------------

<table id='team_attendance' class='table'>
  <tr>
    <th>Team</th>
    <th>Average</th>
    <th>Total attendance</th>
  </tr>
</table>

New teams
-------------------

First thing that interests me here, is how much an effect the new teams, and the newly departed teams have had. The 3 new teams that joined the league Jokerit, Sochi and Lada, averaged 10932, 7556 and 5330. Without those 3 teams, the league average would have been 6240, about half way to the 13-14 average. Lev, Donbass and Spartak had average attendances of 5410, 3912 and 3505 [source](http://hfboards.hockeysfuture.com/showthread.php?t=1571003). If replace Jokerit, Sochi and Lada with the Lev, Donbass and Spartak of 13-14, we go slightly below the overall 13-14 average at 6029. This means that for the 27 teams that stayed in the league in the 2 seasons of 13-15, there has been a 0.4% drop. It also means that the league is moving to more receptive hockey areas, a trend I hope continues.

Room for growth
---------------

There are many teams that work at over 90% capacity, and these are the obvious places of expansion. SKA, Slovan, Lokomotiv, Salavaat, Traktor, Medsevcak, Amur, Admiral, Torpedo, Avtomobilist, Neftekhimik abd Barys could all confidently expand, or build larger arenas. The league seems serious on growth. In Moscow, new stadiums are being built for Dynamo Moscow and CSKA, not sure about the other (do tell!). Both of these will increase arena capacity in the next few years by ~8000. Interestingly, even with CSKA's success on the ice this season, their attendances have been very irregular. There are many theories about why the Moscow teams tend to have half empty arenas, such as too much entertaintment competition in the capital, but the fact is, none of the 3 historically succesful teams in Moscow have had a modern arena in the KHL. Soon they will, and we will see if the 'if you build it, they will come' strategy will pay off. Most people in Russia expected Sochi to bring 2-3k fans a game, and the team to be a total failure, but this year they have averaged 7556, 7th in the league! Very impressively, they also made the playoffs :) Great infastructure adds to the enjoyment of many fans, I would expect Dynamo and CSKA to be filling their newly built arenas. In such a hypothetical situation, we would be looking at an average attendance jump for the whole league of 600-700, pulling north of 7k.

Pretty graph
------------

You can't say you're doing analysis, without a pretty graph. The graph is interactive, click on the legend to enable/disable teams and watch the average and total attendance update.

<div class='row'> 
  <div class='col-md-3'>
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Average Attendance</h3>
      </div>
      <div id="average_attendance" class="panel-body">
        6422
      </div>
    </div>
  </div>  
  <div class='col-md-3'>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Total Attendance</h3>
      </div>
      <div id="total_attendance" class="panel-body">
        5395035
      </div>
    </div>  
  </div> 
  <div class='col-md-6'>
    <h5>Click on the teams in the legend to see what the stats would have been like without certain teams.</h5>
  </div>  
</div>

<div id="container" style="width:100%; height:800px;"></div>
