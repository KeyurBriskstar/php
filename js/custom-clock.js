setInterval(function(){
    showClock( "canvas","Asia/Calcutta" ); /* Give Time Zone of the Country eg: Bombay - "+5.5"*/
    showClock( "canvas1","Europe/London" );
    showClock( "canvas2","America/New_York" );
    showClock( "canvas3","America/New_York" );
}, 1000);

function showClock(canvasId, offset) {
	// DEFINE CANVAS AND ITS CONTEXT.
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext('2d');
	
	// var offsetVal = offset || (new Date().getTimezoneOffset())/60;
	// var d = new Date();
	// var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
	// var date = new Date(utc + (3600000*offsetVal));	
	var date = new Date(new Date().toLocaleString('en-US', { timeZone: offset, hour12 : false }));
	var isDayTime = date.getHours() < 18;

	var angle;
	var secHandLength = 37;

	// CLEAR EVERYTHING ON THE CANVAS. RE-DRAW NEW ELEMENTS EVERY SECOND.
	ctx.clearRect(0, 0, canvas.width, canvas.height);        

	OUTER_DIAL1(isDayTime);
	OUTER_DIAL2(isDayTime);
	CENTER_DIAL(isDayTime);
	MARK_THE_HOURS();
	MARK_THE_SECONDS();

	SHOW_SECONDS();
	SHOW_MINUTES();
	SHOW_HOURS();
	
	function OUTER_DIAL1(isDayTime) {
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 6, 0, Math.PI * 2);
		ctx.lineWidth = 0;
		if(isDayTime){
			ctx.fillStyle = '#F0562D';
			ctx.strokeStyle = '#F0562D';
		}
		else{
			ctx.fillStyle = '#041154';
			ctx.strokeStyle = '#041154';
		}
		
		ctx.stroke();
	}
	function OUTER_DIAL2(isDayTime) {
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 4, 0, Math.PI * 2);
		ctx.lineWidth = 4;
		if(isDayTime){
			ctx.fillStyle = '#F0562D';
			ctx.strokeStyle = '#F0562D';
		}
		else{
			ctx.fillStyle = '#041154';
			ctx.strokeStyle = '#041154';
		}
		
		ctx.stroke();
	}
	function CENTER_DIAL(isDayTime) {
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
		if(isDayTime){
			ctx.fillStyle = '#F0562D';
			ctx.strokeStyle = '#F0562D';
		}
		else{
			ctx.fillStyle = '#041154';
			ctx.strokeStyle = '#041154';
		}
		ctx.lineWidth = 3;
		
		ctx.stroke();
	}

	function MARK_THE_HOURS() {

		for (var i = 0; i < 12; i++) {
		angle = (i - 3) * (Math.PI * 2) / 12;       // THE ANGLE TO MARK.
		ctx.lineWidth = 2;            // HAND WIDTH.
		ctx.beginPath();

		var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
		var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
		var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 10));
		var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 10));

		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);

		ctx.strokeStyle = '#041154';
		ctx.stroke();
		}
	}

	function MARK_THE_SECONDS() {

		for (var i = 0; i < 60; i++) {
		angle = (i - 3) * (Math.PI * 2) / 60;       // THE ANGLE TO MARK.
		ctx.lineWidth = 1;            // HAND WIDTH.
		ctx.beginPath();

		var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
		var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
		var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 0));
		var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 0));

		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.strokeStyle = '#041154';
		ctx.stroke();
		}
	}

	function SHOW_SECONDS() {

		var sec = date.getSeconds();
		angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
		ctx.lineWidth = 1;              // HAND WIDTH.

		ctx.beginPath();
		// START FROM CENTER OF THE CLOCK.
		ctx.moveTo(canvas.width / 2, canvas.height / 2);   
		// DRAW THE LENGTH.
		ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
				canvas.height / 2 + Math.sin(angle) * secHandLength);

		// DRAW THE TAIL OF THE SECONDS HAND.
		ctx.moveTo(canvas.width / 2, canvas.height / 2);    // START FROM CENTER.
		// DRAW THE LENGTH.
		ctx.lineTo((canvas.width / 2 - Math.cos(angle) * 10),
		canvas.height / 2 - Math.sin(angle) * 10);

		ctx.strokeStyle = 'red';        // COLOR OF THE HAND.

		if(isDayTime){
			ctx.strokeStyle = '#F0562D';
		}
		else{
			ctx.strokeStyle = '#041154';
		}

		ctx.stroke();
	}

	function SHOW_MINUTES() {

		var min = date.getMinutes();
		angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
		ctx.lineWidth = 1.5;              // HAND WIDTH.

		ctx.beginPath();
		ctx.moveTo(canvas.width / 2, canvas.height / 2);  // START FROM CENTER.
		// DRAW THE LENGTH.
		ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),      
				canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);

		ctx.strokeStyle = '#999';  // COLOR OF THE HAND.
		ctx.stroke();
	}

	function SHOW_HOURS() {

		var hour = date.getHours();
		var min = date.getMinutes();
		angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
		ctx.lineWidth = 1.5;              // HAND WIDTH.

		ctx.beginPath();
		ctx.moveTo(canvas.width / 2, canvas.height / 2);     // START FROM CENTER.
		// DRAW THE LENGTH.
		ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),      
				canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);

		ctx.strokeStyle = '#000';   // COLOR OF THE HAND.
		ctx.stroke();
	}
}