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
			title: "Month",
			minimum: 1,
			maximum: 13
        },
		data: [
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 4 },
						{ y: 4 },
						{ y: 5 },
						{ y: 6 },
						{ y: 6 },
						{ y: 9 },
						{ y: 10 },
						{ y: 12 },
						{ y: 14 },
						{ y: 18 },
						{ y: 22 },
						{ y: 22, indexLabel: "CSSE", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 2 },
						{ y: 4 },
						{ y: 4 },
						{ y: 6 },
						{ y: 10 },
						{ y: 12 },
						{ y: 13 },
						{ y: 17 },
						{ y: 22 },
						{ y: 26 },
						{ y: 29 },
						{ y: 34, indexLabel: "MATH", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 2 },
						{ y: 4 },
						{ y: 5 },
						{ y: 6 },
						{ y: 11 },
						{ y: 12 },
						{ y: 13 },
						{ y: 20 },
						{ y: 22 },
						{ y: 22 },
						{ y: 27 },
						{ y: 27, indexLabel: "CHEM", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 0 },
						{ y: 4 },
						{ y: 5 },
						{ y: 6 },
						{ y: 11 },
						{ y: 12 },
						{ y: 13 },
						{ y: 14 },
						{ y: 15 },
						{ y: 15 },
						{ y: 15 },
						{ y: 16, indexLabel: "BIOL", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 0 },
						{ y: 4 },
						{ y: 4 },
						{ y: 4 },
						{ y: 4 },
						{ y: 5 },
						{ y: 6 },
						{ y: 6 },
						{ y: 6 },
						{ y: 6 },
						{ y: 6 },
						{ y: 7, indexLabel: "ECON", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 2 },
						{ y: 6 },
						{ y: 9 },
						{ y: 9 },
						{ y: 9 },
						{ y: 9 },
						{ y: 9, indexLabel: "AAH", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 1 },
						{ y: 2 },
						{ y: 5 },
						{ y: 5 },
						{ y: 5 },
						{ y: 5 },
						{ y: 5 },
						{ y: 6, indexLabel: "ACCT", markerColor: "DarkSlateGrey", markerType: "" }
					]
			},
			{
				type: "line",
				indexLabelFontSize: 10,
				dataPoints:
					[
						{ y: 0 },
						{ y: 4 },
						{ y: 5 },
						{ y: 6 },
						{ y: 8 },
						{ y: 16 },
						{ y: 25 },
						{ y: 26},
						{ y: 28 },
						{ y: 36},
						{ y: 40 },
						{ y: 47 },
						{ y: 50, indexLabel: "NURS", markerColor: "DarkSlateGrey", markerType: "" }
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
				{ y: 67, label: "Inbox" },
				{ y: 28, label: "Archives" },
				{ y: 10, label: "Labels" },
				{ y: 7, label: "Drafts" },
				{ y: 15, label: "Trash" },
				{ y: 6, label: "Spam" }
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
			horizontalAlign: "Center",
			fontSize: 15,

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
				{ x: new Date(2010, 0), y: 40 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Electronics",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 28 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Lighting",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 15 },
			]
		},
		{
			type: "stackedColumn100",
			name: "Others",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2010, 0), y: 17 },
			]
		}]
	});
	chart.render();
	

}