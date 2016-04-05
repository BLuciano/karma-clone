window.onload = function(){
	var navMenu = document.getElementById("nav-links");
	var links = navMenu.getElementsByTagName("a");
	var dropDown = document.getElementById("drop-down");
	
	//toggle drop down menu
	dropDown.onclick = function(){
		navMenu.classList.toggle("showNav");
	};

	//set nav menu links to hide menu when clicked
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			navMenu.classList.remove("showNav");
		}
	}
};