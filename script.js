//your JS code here. If required.

	let p  = document.getElementBYId("counter");
	let button = document.getElementById("incrementBtn");

	button.addEventListener("click" , onclicking);

function onclicking(){
	

	alert(Number(p.innertext));
	p.innerText++;

}
