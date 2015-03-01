$(function () {
  var data = [{"name":"Dynamo Minsk","average":14120,"sum":423610,"data":[14090,14608,13094,12993,15003,14755,13132,13096,14152,14692,14100,12890,15086,10919,14158,15086,15086,15086,15086,15086,15086,15086,15086,13810,15086,11528,11545,14448,14651,15086]},{"name":"SKA","average":12124,"sum":363749,"data":[12481,11048,11011,11718,12281,12291,11589,12247,12279,12282,12327,12309,12077,12058,12181,12295,12228,12173,12191,12150,12257,12253,12281,12414,12192,12154,12177,12381,12098,12326]},{"name":"Jokerit","average":10932,"sum":327972,"data":[13178,9712,9034,10271,9676,12932,11574,9351,10157,10505,9583,11293,10109,10396,9319,13496,10386,9288,10322,9420,13216,13496,13317,9043,13396,9772,9591,12472,10271,13396]},{"name":"Slovan","average":8984,"sum":269544,"data":[10055,10055,8832,10055,7985,8025,8611,10055,9681,9619,8902,8728,9135,7719,10055,7741,7504,7240,8739,9058,10055,10055,10055,8784,10055,7856,7574,7307,9954,10055]},{"name":"Lokomotiv","average":8863,"sum":265911,"data":[9070,8837,8544,8857,8963,8989,8946,9021,8902,9043,8757,9040,8795,9070,8871,8816,9012,8815,9015,8409,8717,8657,8738,8811,8798,9007,8938,8999,8797,8677]},{"name":"Avangard","average":8665,"sum":259978,"data":[9770,8140,6270,7690,10178,9470,7980,8090,8590,8070,7840,8070,10070,10070,9850,8120,10300,10300,10300,7230,8790,8870,8230,10170,7120,7370,8240,7890,9120,7780]},{"name":"Sochi","average":7556,"sum":226696,"data":[8100,9126,8134,9209,8212,7942,5970,6847,10027,6378,6123,6856,5017,6537,7794,9112,8023,9112,9878,6348,7765,6123,6179,6723,6412,7542,7143,5762,11064,7238]},{"name":"Metallurg Mg","average":6914,"sum":207446,"data":[7523,6614,6084,6145,6618,6618,6762,6522,7051,7167,7257,7167,7500,7036,7188,6429,7223,6528,6744,7409,7430,7430,7343,6779,6641,7245,7099,6355,6947,6592]},{"name":"Sibir","average":6823,"sum":204694,"data":[7500,7500,6500,7400,7500,7400,6000,7300,7010,5500,7400,5500,5500,7400,6712,7400,7400,6811,5029,5654,7400,6715,6432,7400,7400,6231,6500,7400,7400,7400]},{"name":"Ak Bars","average":6707,"sum":201225,"data":[5626,4257,5647,6248,6245,6657,6963,7058,7884,6012,8460,7437,8460,7653,6403,8460,5205,6016,8071,5213,8460,7689,6391,7791,5670,7395,5495,7427,5367,5565]},{"name":"Salavat Yulaev","average":6699,"sum":200980,"data":[5450,6320,6100,7020,6850,6720,7420,6100,7870,6350,6650,6620,6380,5250,7250,6100,6350,6880,7780,6720,7600,8010,6030,8070,5400,5720,8070,7080,6450,6370]},{"name":"Traktor","average":6645,"sum":199360,"data":[7500,6500,4750,5500,6800,6000,7280,5700,5800,4610,6000,5800,6520,6150,6750,4800,7440,6800,7430,7300,7500,7450,7000,7000,7500,7380,7300,7500,7500,7800]},{"name":"Dynamo Riga","average":5940,"sum":178220,"data":[7750,3690,4170,5520,4280,5730,3770,3550,5480,5280,3770,4380,5750,8790,3480,9750,6770,5380,4860,4270,8780,5690,6380,4170,8590,5880,8390,6270,7630,10020]},{"name":"Amur","average":5875,"sum":176251,"data":[6785,6550,5600,6000,5650,5800,6100,6500,6100,6281,5600,6500,6500,6700,6700,6500,6650,6700,5200,4435,5350,5950,5200,4600,4500,6200,4500,5100,5000,7000]},{"name":"Atlant","average":5853,"sum":175600,"data":[6100,4100,5000,5900,6100,6100,6300,5800,5700,6500,5800,5600,5500,5700,5700,6200,6700,5200,6600,6200,6700,4900,6200,4700,5900,4300,6500,6300,6900,6400]},{"name":"Dynamo Moscow","average":5674,"sum":170230,"data":[6749,6259,5939,4178,5162,4260,5226,5937,5147,4614,8015,6859,5844,6208,4452,4487,8125,4221,4107,4672,8009,4765,4220,4951,7631,6022,4567,7763,6705,5136]},{"name":"Admiral","average":5493,"sum":164800,"data":[5400,5400,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500,5500]},{"name":"Medvescak","average":5369,"sum":161074,"data":[6250,5000,5800,5800,5800,5800,5000,5000,5500,5000,5000,5650,6100,5000,5500,5500,6200,4500,4500,4000,4500,5200,5200,5754,5000,6250,5150,5220,5700,6200]},{"name":"Lada","average":5330,"sum":159903,"data":[5351,3456,6100,4456,5860,5100,5120,4876,4287,6100,6200,6100,5200,5420,5432,5234,4256,5280,6100,5320,5736,5790,5080,4324,5210,6000,5280,5690,5545,6000]},{"name":"Torpedo","average":5191,"sum":155750,"data":[4850,5100,4700,4850,4800,5600,5100,5500,4500,5550,5600,5500,5100,5550,5250,5500,4800,4800,4900,4300,5200,5100,5200,5300,5500,5500,5500,5500,5550,5550]},{"name":"Avtomobilist","average":4427,"sum":132810,"data":[3550,2500,3850,3500,3500,2030,4500,4200,4500,4200,3500,4200,5500,5200,3800,4800,4500,5000,4500,5570,5000,5570,5500,5200,5300,5570,4000,4200,4000,5570]},{"name":"Neftekhimik","average":4393,"sum":131800,"data":[5500,5500,4800,5500,5500,5500,5000,4000,4500,4000,4000,4500,4000,3800,3500,4000,3500,4000,5000,4000,3000,3500,3500,4200,3500,4000,4500,5000,5000,5500]},{"name":"CSKA","average":4349,"sum":130495,"data":[2761,4013,3027,2711,5447,3440,5380,5511,2935,5600,5459,4432,4496,4215,4627,5600,2510,5600,3571,3656,5600,5308,4308,3542,3578,5570,4261,3547,4190,5600]},{"name":"Barys","average":3963,"sum":118897,"data":[4100,4070,4070,3902,3822,3972,3970,3045,4070,3723,3812,3820,3993,4012,4011,3723,4070,4070,4070,4070,4070,4070,4070,4012,4070,4070,4200,3920,4070,3950]},{"name":"Severstal","average":3525,"sum":105778,"data":[4350,3290,3345,2700,3112,3010,3620,3270,3200,3520,3220,4120,5685,3991,4460,2740,2580,2870,2950,2600,2850,3078,5700,5200,2690,2750,3960,4235,2500,4182]},{"name":"Vityaz","average":3472,"sum":104170,"data":[4000,3500,4000,4600,3500,4000,4200,5350,3450,4200,4000,3000,3565,4000,1500,1600,2000,5000,4500,4950,1500,3000,2900,4500,2015,4600,2820,1820,2600,3500]},{"name":"Metallurg Nk","average":3370,"sum":101112,"data":[5235,3452,3125,3503,5428,3598,2673,2988,3296,3073,3282,3275,2984,4020,4274,2986,3324,2300,2190,2150,2335,3617,2420,4480,4216,3586,3475,2358,3685,3784]},{"name":"Yugra","average":2566,"sum":76980,"data":[3200,2800,2400,2550,2350,3100,3800,2250,3100,2250,2100,2050,2120,2430,2320,2340,2020,3320,2420,3470,2850,2350,2150,2270,3170,2100,2500,2300,2500,2400]}];

  $('#container').highcharts({
      title: {
          text: 'KHL attendance 14-15',
          x: -20 //center
      },
      xAxis: {
      	title: {
            text: 'Game'
        }
      },
      yAxis: {
          title: {
              text: 'Team'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
        formatter: function() {
          console.log(this);
          return 'Game: ' + this.x + 1 + ' Attendance: <b>' + this.y + '</b> (' + this.series.name + ')';
        }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: data
  });
});
