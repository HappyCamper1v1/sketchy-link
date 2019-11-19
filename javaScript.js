let body = document.querySelector("body");
let text = document.querySelector("a")
let vx = 1;
let x = 0;
let grow = 61;
let degrow = 0.1;

function animation(){
	window.requestAnimationFrame(animation);
	body.style.background = "rgb(" + x + "," + x + "," + x + ")";
	if (x > 255 || x < 0){
		vx = -vx;
	}
	text.style.fontSize = grow + "px";
	if (grow < 60 || grow > 70){
		degrow = -degrow;
	}
	console.log(grow);
	x+=vx;
	grow += degrow;

}
animation();
