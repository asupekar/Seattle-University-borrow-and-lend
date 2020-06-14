window.onload = function () {

	CanvasJS.addColorSet("EcoList",
		[//colorSet Array
			"#188C1C",
			"#5BBC5E",
			"#FF9B01",
			"#FDC268",
			"#2F53C4",
			"#9DB5FF",
			"#7058A5",
			"#C5AEF9",
			"#B8555E",
			"#FFB8BF",
		]);

	var chart = new CanvasJS.Chart("chartContainer1", {
		colorSet: "EcoList",
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Claims"
		},
		axisY: {
			includeZero: false
		},
		axisX: {
			title: "Week",
			minimum: 0,
			maximum: 11
        },
		data: [
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 39, label: "Aug."},
						{ y: 43, label: "Sept."},
						{ y: 49, label: "Oct."},
						{ y: 53, label: "Nov."},
						{ y: 59, label: "Dec."},
						{ y: 67, label: "Jan."},
						{ y: 78, label: "Feb."},
						{ y: 84, label: "Mar."},
						{ y: 96, label: "Apr." },
						{ y: 112, label: "May." },
						{ y: 156, label: "Jul" },
						{ y: 170, label: "Jun.", indexLabel:"Today", markerColor: "DarkSlateGrey", markerType: "" },
					]
			}
		]
	});

	chart.render();

	var chart = new CanvasJS.Chart("chartContainer2", {
		colorSet: "EcoList",
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "By Department",
			fontSize: 15,
			horizontalAlign: "center",
			fontFamily: "tahoma",
		},
		data: [{
			type: "doughnut",
			startAngle: 60,
			//innerRadius: 60,
			indexLabelFontSize: 10,
			indexLabel: "{label} - #percent%",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 50, label: "NURS" },
				{ y: 24, label: "CSE" },
				{ y: 10, label: "MATH" },
				{ y: 8, label: "CHEM" },
				{ y: 7, label: "BIOL" },
				{ y: 1, label: "ECON" }
			]
		}]
	});

	chart.render();

	var chart = new CanvasJS.Chart("chartContainer3", {
		colorSet: "EcoList",
		animationEnabled: true,
		theme: "light2",
		title: {
			fontFamily: "tahoma",
			text: "Catagory Spread",
			fontSize: 15,
			horizontalAlign: "Center",

		},
		axisY: {
			suffix: "%"
		},
		toolTip: {
			shared: true
		},
		legend: {
			reversed: true,
			verticalAlign: "center",
			horizontalAlign: "right"
		},
		data: [{
			type: "stackedColumn100",
			name: "Furniture",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 45 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Medical Training Supplies",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 20 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Electronics",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 20 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Others",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 15 },
			]
		}]
	});

	chart.render();

}