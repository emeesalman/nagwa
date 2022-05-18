
$(function(){

    $('.chart').easyPieChart({
        animate: 1000,
        scaleColor:false,
    });
});

$(function(){

    Chart.defaults.font.family = "'Arial','FontAwesome'";  

    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {

    
    type: 'bar',
    
    data: {
        labels: ['19/5', '18/4', '17/6', '20/7', '22/7', '30/8','30/8','30/8','30/8','30/8','30/8','30/8','30/8','30/8','30/8'],
        datasets: [{
            label: 'Adam',
            borderDash: [10 ,10],
            data: [30, 35, 40, 45, 50, 55,60,65,30, 35, 40, 45, 50, 55,60,65],
            backgroundColor: [
                'rgba(229, 240, 247, 1)',
                
            ],
            borderColor: [
                'rgba(5, 117, 182, 1)',
            
            ],
            borderWidth: 1,
            borderRadius : 20,
            borderSkipped : false,
            barPercentage: 0.75,
     
        },
        {
            label: 'Average',
            data: [30, 35, 40, 45, 50, 55,60,65,30, 35, 40, 45, 50, 55,60,65],
            backgroundColor: [
                'rgba(229, 229, 229, 1)',
              
            ],
            borderColor: [
                'rgba(51, 51, 51, 1)',
                
            ],
            borderWidth: 1,
            borderRadius : 20,
            borderSkipped : false,
            barPercentage: 0.75,
       

        }]

        
    },
  
    options: {
        plugins: {

            
            subtitle: {
                display: true,
                text: 'Chemistry \f32d',
              align : 'end',
              
             
            },
            legend: {
                align: 'start' ,
                    labels: {
                        
                        
                        boxWidth :10,
                        boxHeight :20,
                        
                 
                    }              
            },
            
            
        },
        scales : {
            x: { grid : {
                display :false,
                drawBorder: 'borderDash',
            },
            
            axisY: {
                gridDashType :'dash'
            },
        },
        
        },
    },

    
    beginAtZero: false,

    
});

});
