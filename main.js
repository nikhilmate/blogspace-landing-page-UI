document.querySelector('div.toggle').addEventListener('click', function(e){
	if (document.querySelector(".toggle").getAttribute("data-toggle") == 'false') {
		document.querySelector(".navbar").classList.add("closed");
		document.querySelector(".toggle").setAttribute("data-toggle", "true");
	} else if (document.querySelector(".toggle").getAttribute("data-toggle") == 'true') {
		document.querySelector(".navbar").classList.remove("closed");
		document.querySelector(".toggle").setAttribute("data-toggle", "false");
	}
});