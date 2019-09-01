
// ballanimation, ballshadow, light, demo animations
var element = document.getElementById("ball");
var element_sh = document.getElementById("ballShadow");
var element_light = document.getElementById("juegacon");
var element_demo = document.getElementById("demo");

// ballanimation animation
function ballanimation() {
	var tl = new TimelineMax();
	tl.fromTo(element, 0.4, { ease: Power1.easeIn, x:-10, y:0 }, { ease: Power1.easeIn, x:-20, y:195 })
	  .to(element, 0.37, { ease: Power1.easeOut, x:-60, y:50 })
	  .to(element, 0.37, { ease: Power1.easeIn, x:-90, y:195 })
	  .to(element, 0.31, { ease: Power1.easeOut, x:-120, y:100 })
	  .to(element, 0.31, { ease: Power1.easeIn, x:-145, y:195 })
	  .to(element, 0.23, { ease: Power1.easeOut, x:-170, y:140 })
	  .to(element, 0.23, { ease: Power1.easeIn, x:-190, y:195 })
	  .to(element, 0.13, { ease: Power1.easeOut, x:-210, y:160 })
	  .to(element, 0.13, { ease: Power1.easeIn, x:-225, y:195 })
	  .to(element, 0.08, { ease: Power1.easeOut, x:-238, y:170 })
	  .to(element, 0.08, { ease: Power1.easeIn, x:-245, y:195 })
	  .to(element, 0.07, { ease: Power1.easeOut, x:-250, y:175 })
	  .to(element, 0.07, { ease: Power1.easeIn, x:-254, y:195 })
	  .to(element, 0.02, { ease: Power1.easeOut, x:-258, y:180 })
	  .to(element, 0.02, { ease: Power1.easeIn, x:-260, y:195 })
	  .to(element, 3.8, { ease: Power1.easeOut, x:0, y:195 });
}

// ballshadow animation
function ballshadow() {
	var t2 = new TimelineMax();
	t2.fromTo(element_sh, 0.4, { ease: Power1.easeIn, x:120, y:0, scale:2, opacity:0.2 }, { ease: Power1.easeIn, x:-30, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.37, { ease: Power1.easeOut, x:90, y:0, scale:1.8, opacity:0.4 })
	  .to(element_sh, 0.37, { ease: Power1.easeIn, x:-90, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.31, { ease: Power1.easeOut, x:-40, y:0, scale:1.6, opacity:0.5 })
	  .to(element_sh, 0.31, { ease: Power1.easeIn, x:-145, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.23, { ease: Power1.easeOut, x:-100, y:0, scale:1.4, opacity:0.6 })
	  .to(element_sh, 0.23, { ease: Power1.easeIn, x:-190, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.13, { ease: Power1.easeOut, x:-120, y:0, scale:1.3, opacity:0.7 })
	  .to(element_sh, 0.13, { ease: Power1.easeIn, x:-225, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.08, { ease: Power1.easeOut, x:-150, y:0, scale:1.24, opacity:0.8 })
	  .to(element_sh, 0.08, { ease: Power1.easeIn, x:-245, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.07, { ease: Power1.easeOut, x:-180, y:0, scale:1.18, opacity:0.9 })
	  .to(element_sh, 0.07, { ease: Power1.easeIn, x:-254, y:0, scale:1, opacity:2 })
	  .to(element_sh, 0.02, { ease: Power1.easeOut, x:-200, y:0, scale:1.13, opacity:0.95 })
	  .to(element_sh, 0.02, { ease: Power1.easeIn, x:-260, y:0, scale:1, opacity:2 })
	  .to(element_sh, 3.8, { ease: Power1.easeOut, x:0, y:0, scale:1, opacity:2 });
}

// light animation
function light() {
	var t3 = new TimelineMax();
	t3.fromTo(element_light, 0.2, { ease: Power1.easeIn, opacity:0 }, { ease: Power1.easeIn, opacity:1 })
		.delay(2.7);
}

// demo animation
function demo() {
	var t3 = new TimelineMax();
	t3.fromTo(element_demo, 0.2, { ease: Power1.easeIn }, { ease: Power1.easeIn, backgroundColor: "#f39853" })
		.to(element_demo, 0.2, { ease: Power1.easeOut, backgroundColor: "#dddddd"})
		.delay(2.7);
}

ballanimation();
ballshadow();
light();
demo();
