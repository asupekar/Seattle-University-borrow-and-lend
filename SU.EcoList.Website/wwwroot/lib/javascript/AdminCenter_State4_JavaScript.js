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
			text: "Listings & Claims"
		},
		axisY: {
			includeZero: false
		},
		axisX: {
			title: "Month",
			minimum: 0,
			maximum: 11
        },
		data: [
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 62, label: "Jul."},
						{ y: 76, label: "Aug."},
						{ y: 92, label: "Sept."},
						{ y: 113, label: "Oct."},
						{ y: 134, label: "Nov."},
						{ y: 159, label: "Dec."},
						{ y: 171, label: "Jan."},
						{ y: 199, label: "Feb."},
						{ y: 311, label: "Mar."},
						{ y: 339, label: "Apr." },
						{ y: 465, label: "May." },
						{ y: 648, label: "Jun.", indexLabel:"Today", markerColor: "DarkSlateGrey", markerType: "" },
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
				{ y: 54, label: "NURS" },
				{ y: 20, label: "CSE" },
				{ y: 8, label: "MATH" },
				{ y: 7, label: "CHEM" },
				{ y: 6, label: "BIOL" },
				{ y: 5, label: "ECON" }
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