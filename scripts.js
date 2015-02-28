 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,

	function drawChart() {

		var arraysData = [];

		for(var i=0;i<JSONFredData.observations.length; i++){
		
		var FredObs = JSONFredData.observations[i]
      		
		var vegetableArray = [];
			vegetableArray.push(FredObs.date);
			vegetableArray.push(Number(FredObs.value));
			arraysData.push(vegetableArray);
			
		}

		// Create the data table.
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		data.addRows(arraysData);
		
		var myHtitle = 'Horizontal Axis Title'
		var myVtitle = 'Vertical Axis Title'

        // Set chart options
        var options = {'title':'How Many Vegetables I Knocked Off My Plate Last Night',
						'width':600,
						'height':500,
						'hAxis':{},
						'vAxis':{}
						};
				options.hAxis.title = myHtitle;		
				options.vAxis.title = myVtitle;


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
		}