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
			text: "Listings By Department",
			fontSize: 10,
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

	var chart = new CanvasJS.Chart("chartContainer2", {
		colorSet: "EcoList",
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Listings By Category",
			fontSize: 10,
			horizontalAlign: "center",
			fontFamily: "tahoma",
		},
		axisX: {
			interval: 1
		},
		axisY: {
			title: "Percent of Listings",
		},
		data: [{
			type: "bar",
			toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP",
			dataPoints: [
				{ label: "Electronics", y: 8 },
				{ label: "Other", y: 10},
				{ label: "Desk Toys", y: 10},
				{ label: "Lighting", y: 12},
				{ label: "Furniture", y: 60},
			]
		}]
	});
	chart.render();

}