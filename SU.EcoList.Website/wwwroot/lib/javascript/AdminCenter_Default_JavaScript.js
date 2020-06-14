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
			text: "Listings"
		},
		axisY: {
			includeZero: false
		},
		axisX: {
			title: "Week",
			minimum: 1,
			maximum: 10
        },
		data: [
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 50, label: "1st"},
						{ y: 58, label: "2nd"},
						{ y: 60, label: "2rd"},
						{ y: 65, label: "3rd"},
						{ y: 69, label: "4th"},
						{ y: 75, label: "5th"},
						{ y: 120, label: "6th"},
						{ y: 129, label: "7th"},
						{ y: 140, label: "8th"},
						{ y: 220, label: "9th"},
						{ y: 234, label: "10th", indexLabel:"Total", markerColor: "DarkSlateGrey", markerType: "" },
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
				{ y: 67, label: "NURS" },
				{ y: 28, label: "CSE" },
				{ y: 10, label: "MATH" },
				{ y: 7, label: "CHEM" },
				{ y: 15, label: "BIOL" },
				{ y: 6, label: "ECON" }
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
				{ x: new Date(2020, 2), y: 60 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Electronics",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2020, 2), y: 8 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Desk Toys",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2020, 2), y: 10 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Others",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2020, 2), y: 22 },
			]
		}]
	});

	chart.render();

}