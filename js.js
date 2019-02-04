var arr = []
$(function () {
   
    $('#container').highcharts({

        chart: {
            type: 'gauge',
           
         
              },
        
              
        title: {
            text: 'Speedometer'
        },

        pane: {
            startAngle: -110,
            endAngle: 110, 
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        
        // the value axis
        yAxis: {
            
            min: 0,
            max: 200,
            tickPixelInterval: 30,
            tickWidth: 1,
            tickPosition: 'inside',
            tickLength: 14,
            
            labels: {
                step: 2,
                rotation: 'auto'
            },
        
            title: {
                text: 'km/h'
            }
            
        },

        series: [{
            name: 'Speed',
            data: [00]
        },
        
    ]

    },

    
    function getVal(chart) {
        $('#input1').on('keypress',function(e) {
            if(e.which == 13) {
                console.log(document.getElementById('input1').value);
                var value1 = document.getElementById('input1').value;
                chart.series[0].points[0].y =  value1;
                chart.render();
            }
        });
    },
    
    
    );
});

