function czas()
{
	var dzisiaj = new Date();
					
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();
					
	var godzina = dzisiaj.getHours();
	if (godzina<10) godzina = "0"+godzina;
					
		 minuta = dzisiaj.getMinutes();
	if (minuta<10) minuta = "0"+minuta;
					
	var sekunda = dzisiaj.getSeconds();
	if (sekunda<10) sekunda = "0"+sekunda;
					
	document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
	setTimeout("czas()", 250);
		
}

var rozbij = function()
{
	var div = document.getElementById("szklo");
	div.innerHTML += '<img src="glass.png">';
};
var trigger = document.getElementById("spust");
//trigger.addEventListener("click", rozbij);