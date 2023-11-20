//your JS code here. If required.
function increasedcount(){
	let p  = document.getElementBYId("counter");
	let button = document.getElementById("incrementBtn");
	
	alert(Number(p.innertext));
	p.innerText++;
}