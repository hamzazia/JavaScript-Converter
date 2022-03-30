

let length=document.getElementById("length")
let volume=document.getElementById("volume")
let mass=document.getElementById("mass")

function show(){
	var number=document.getElementById("number").value	
	let value=meter(number)
	const finalfoot=value[0]
		  finalmeter=value[1]	
	let value1=liter(number)
	const finalGal=value1[0]
		  finalLiter=value1[1]	
  	let value2=kilo(number)
  	const finalKilo=value2[0]
		  finalPound=value2[1]	
		length.textContent=( number+" "+ "Meter = " +finalmeter +" "+"Feet" +" "+ "|" +" "+number+" "+ "Feet = "+" "+finalfoot+" "+ "Meter")
		volume.textContent=( number+" "+ "Liter = " + finalGal +" "+"Gal" +" "+ "|" +" "+number+" "+ "Gal = "+" "+finalLiter+" "+ "Liter")
		mass.textContent=( number+" "+ "Kilo = " + finalKilo +" "+"Pound" +" "+ "|" +" "+number+" "+ "Pound = "+" "+finalPound+" "+ "Kilo")
}
function meter(val){

	var variable = val;
	let footToMeter=variable/3.281
	let meterToFoot=variable*3.281
    let finalfoot=footToMeter.toFixed(2);
    let finalmeter=meterToFoot.toFixed(2);
  return [finalfoot,finalmeter]	
}
function liter(val){
	var number = val;
	let literToGal=number* 0.2641720524
	let galToliter=number*3.785411784
     finalGal=literToGal.toFixed(2);
     finalLiter=galToliter.toFixed(2);
	 return [finalGal, finalLiter]
}
function kilo(val){
		var number = val;
	let kiloToPound=number*2.205
	let poundToKilo=number/2.205
     finalKilo=kiloToPound.toFixed(2);
     finalPound=poundToKilo.toFixed(2);
     return[finalKilo,finalPound]
}


