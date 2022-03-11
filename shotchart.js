var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
var data = [trace1, trace2, trace3];
  
var layout = {

    // to highlight the timestamp we use shapes and create a rectangular

    shapes: [
        // Rink Outline
        {
             type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-250',
            y0: '0',
            x1: '250',
            y1: '516.2',
            line: {
                width: 1
            }
        },

        // Rink Edge Arcs
        {
             type: 'path',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            path: 'M 200 580 C 217 574, 247 532, 250 516.2',
            line: {
                width: 1
            }
        },
        
        {
             type: 'path',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            path: 'M -200 580 C -217 574, -247 532, -250 516.2',
            line: {
                width: 1
            }
        },
        
        // Middle Line
        
        {
            type: 'line',
            xref: 'x',
            yref: 'y',
            x0: '200',
            y0: '580',
            x1: '-200',
            y1: '580',
            line: {
                width: 1
            }
        },
        
        // Center Ice Line
        {
            type: 'line',
            xref: 'x',
            yref: 'y',
            x0: '-250',
            y0: '0',
            x1: '250',
            y1: '0',
            line: {
                width: 3,
                color: 'rgba(255,0,0,1)'
            }
        },
        
        // Goal Line
        {
            type: 'line',
            xref: 'x',
            yref: 'y',
            x0: '-250',
            y0: '516.2',
            x1: '250',
            y1: '516.2',
            line: {
                width: 1,
                color: 'rgba(255,0,0,1)'
            }
        },
        
        // Blue Line
        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-250',
            y0: '150.8',
            x1: '250',
            y1: '150.8',
            line: {
                color: 'rgba(0,0,255,1)',
                width: 2
            } 
        },
        
        // Center Ice dot
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '2.94',
            y0: '2.8',
            x1: '-2.94',
            y1: '2.94',
            line: {
                color: 'rgba(0,0,255,1)',
                width: 1,
                fillcolor: 'rgba(0,0,255,1)'
            } 
        },  
 
         // Scoring Area
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-120',
            y0: '515',
            x1: '125',
            y1: '360',
            line: {
                color: '#008C00',
                width: 2,
                dash: 'dash'
            } 

        },  
        
        // offsidedot1
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '135.5',
            y0: '121.8',
            x1: '123.5',
            y1: '110.2',
            fillcolor: 'rgba(255,0,0,1)',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
                fillcolor: 'rgba(255,0,0,1)'
            } 
        },
        
        // offsidedot2
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-135.5',
            y0: '121.8',
            x1: '-123.5',
            y1: '110.2',
            fillcolor: 'rgba(255,0,0,1)',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
                fillcolor: 'rgba(255,0,0,1)'
            } 
        },
         
        // faceoffdot1
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-135.5',
            y0: '405.8',
            x1: '-123.5',
            y1: '394.2',
            fillcolor: 'rgba(255,0,0,1)',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
                fillcolor: 'rgba(255,0,0,1)'
            } 
        },
         
        // faceoffdot2
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '135.5',
            y0: '405.8',
            x1: '123.5',
            y1: '394.2',
            fillcolor: 'rgba(255,0,0,1)',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
                fillcolor: 'rgba(255,0,0,1)'
            } 
        },
                
        // faceoffcircle1
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '217.6',
            y0: '487.2',
            x1: '41.2',
            y1: '313.2',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
            } 
        },
        
        // faceoffcircle2
        {
            type: 'circle',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-217.6',
            y0: '487.2',
            x1: '-41.2',
            y1: '313.2',
            line: {
                color: 'rgba(255,0,0,1)',
                width: 1,
            } 
        },
      

        // Goal lines
        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '64.7',
            y0: '516.2',
            x1: '82.3',
            y1: '580',
            line: {
                width: 1,
            } 
        },        
        
        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '23.5',
            y0: '516.2',
            x1: '23.5',
            y1: '493',
            line: {
                width: 1,
            } 
        },        

        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-64.7',
            y0: '516.2',
            x1: '-82.3',
            y1: '580',
            line: {
                width: 1,
            } 
        },        
        
        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            x0: '-23.5',
            y0: '516.2',
            x1: '-23.5',
            y1: '493',
            line: {
                width: 1,
            } 
        },        

        // Crease
        {
            type: 'path',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            path: 'M 23.5 493 C 20 480, -20 480, -23.5 493',
            line: {
                width: 1
            }
        },
        
        {
             type: 'path',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'y',
            path: 'M 17.6 516.2 C 15 530, -15 530, -17.6 516.2',
            line: {
                width: 1
            }
        },
                                                              
],
    height: 700,
    width: 700
}

Plotly.newPlot('myDiv', data, layout);

  