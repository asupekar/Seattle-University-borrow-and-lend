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
			text: "User Trends"
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
						{ y: 12, label: "1st"},
						{ y: 14, label: "2nd"},
						{ y: 16, label: "2rd"},
						{ y: 16, label: "3rd"},
						{ y: 24, label: "4th"},
						{ y: 27, label: "5th"},
						{ y: 31, label: "6th"},
						{ y: 45, label: "7th"},
						{ y: 56, label: "8th"},
						{ y: 57, label: "9th"},
						{ y: 58, label: "10th", indexLabel:"Total", markerColor: "DarkSlateGrey", markerType: "" },
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
				{ y: 28, label: "NURS" },
				{ y: 27, label: "CSE" },
				{ y: 17, label: "MATH" },
				{ y: 11, label: "CHEM" },
				{ y: 9, label: "BIOL" },
				{ y: 8, label: "ECON" }
			]
		}]
	});

	chart.render();

}