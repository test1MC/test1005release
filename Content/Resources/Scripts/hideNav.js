var navFrame = document.getElementsByClassName("tab-bar");
var footFrame = document.getElementsByClassName("footer");
/*var parentType = navFrame[0].parentElement;*/
var iAmInAFrame = (window.top == window.self);
if (!iAmInAFrame)
{
	navFrame[0].innerHTML = '<p style=text-align:right;padding-right:50px>Click anywhere outside this frame to close it.</p>';
	navFrame[0].style.marginBottom = "0px";
	navFrame[0].style.backgroundColor = "#000099";
	navFrame[0].style.paddingBottom = "0px";
	navFrame[0].style.backgroundColor = "#FFFFFF";
	navFrame[0].style.color = "#404040";
	navFrame[0].style.paddingBottom = "100px";
	footFrame[0].style.display = "none";
};

