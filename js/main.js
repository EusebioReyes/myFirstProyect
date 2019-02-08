$(document).ready(function(){
	printCars();
});
var someArray = ["Mazda",
"Honda",
"Toyota"
]

var someObject = {
	company:"Mazda",
	model:"Mazda 6",
	color:"red",
	horsePower:"250hp",
	cilinders:"6"

}

var mazdaCars = [
{
	company:"Mazda",
	model:"Mazda 6",
	color:"red",
	horsePower:"250hp",
	cilinders:"6"

},{
	Company:"Mazda",
	model:"Mazda 2",
	color:"red",
	horsePower:"150hp",
	cilinders:"4"

},{
	Company:"Mazda",
	model:"Mazda 3",
	color:"red",
	horsePower:"150hp",
	cilinders:"4"

},{
	Company:"Mazda",
	model:"Mazda 4",
	color:"red",
	horsePower:"150hp",
	cilinders:"4"

}
]

function printCars(){
	$("#cars-list").empty();
	for (var i = 0; i < mazdaCars.length; i++) {
		var objeto1 = mazdaCars[i];
		
		var carCompany = objeto1.company;
		var carModel = objeto1.model;
		var carColor = objeto1.color;
		var carHorseP = objeto1.horsePower;
		var carCillinder = objeto1.cilinders;
		var rowHtml = "<tr>"+
						"<td>"+carCompany+"</td><td>"+
						carModel+"</td><td>"+
						carColor+"</td><td>"+
						carHorseP+"</td><td>"+
						carCillinder+"</td>"+
					  "</tr>"
		$("#cars-list tbody").append(rowHtml);

	}
	

}

function getCarData(){
	var carCompany = $("#car-company").val();
	var carModel = $("#car-model").val();
	var carColor = $("#car-color").val();
	var carHorseP = $("#car-horsePoer").val();
	var carCillinder = $("#car-cillinder").val();
	var carObject = {
		company:carCompany,
		model:carModel,
		color:carColor,
		horsePower:carHorseP,
		cilinders:carCillinder
	}

	mazdaCars.push(carObject)
}

