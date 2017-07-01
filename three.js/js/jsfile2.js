Hello();


var Width, Height;
var renderer;

  function Init(){
  "use strict";
  Width = 400;
  Height = 400;
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(Width, Height);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xFFFFFF, 1.0);



var scene =new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth /window.innerHeight, 0.1, 1000);
document.body.appendChild(renderer.domElement);

}
/*
var width, height, renderer;

function init() {
	"use strict";
	width = 400;
	height = 400;
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	renderer.setClearColor(0xFFFFFF, 1.0);
}
*/
function three(){
  "use strict";
  Init();
}
