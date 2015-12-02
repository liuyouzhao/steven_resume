function getPointOnCanvas(canvas, x, y) {
	var bbox = canvas.getBoundingClientRect();
	return { x: x - bbox.left * (canvas.width  / bbox.width),
	        y: y - bbox.top  * (canvas.height / bbox.height) 
	};
}  

function index_header_letsGo() {
	var canvas = document.getElementById("title_canvas0");

	//canvas.width = document.body.clientWidth;
    //canvas.height = document.body.clientHeight;


	var context = canvas.getContext('2d');
	var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var startX = canvasWidth / 4;
    var startY = canvasHeight / 2;
    var mouthSize = canvasWidth / 12;
   

	function draw() {
		context.beginPath();
	    context.moveTo( startX, startY );
	    context.arc( startX , startY, mouthSize, 0.2, 6.0, false );
	    context.lineTo( startX, startY );
	    context.fillStyle = "#EFEF28";
	    context.fill();
	    context.strokeStyle = "#545412";
	    context.stroke();
	    context.closePath();
	}
	draw();
}