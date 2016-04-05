window.onload = function(){
	var navMenu = document.getElementById("nav-links");
	var links = navMenu.getElementsByTagName("a");
	var dropDown = document.getElementById("drop-down");
	
	/*Set display to none for first click to fire correctly*/
	navMenu.style.display = "none";
	
	//toggle drop down menu
	dropDown.onclick = function(){
		if(navMenu.style.display === "none"){
			navMenu.style.display = "block";
		}
		else{
			navMenu.style.display = "none";
		}
	};

	//set nav menu links to hide menu when clicked
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			navMenu.style.display = "none";
		}
	}
};