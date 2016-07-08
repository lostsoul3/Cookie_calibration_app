$(document).ready(function() {
	namespace = '/test';
	var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);   
	
	var status = true;
    var b1 = document.getElementById('stop');
    var b2 = document.getElementById('start');
	var title = document.getElementById('mod-title');
	//stop button action
	b1.onclick = function() {
	  socket.emit('control', {data:'Stop'});
      status = false; };

	//start butto action
	b2.onclick = function() {
		//which helps solve to double click error of start button
		if (status !== true) {
			status = true;
			socket.emit('control', {data:'Start'});
			looping();
		}};
		
	function looping(){
		if (status == true) {
                socket.emit('my event', {data:'None'});}}
	
	looping();
        
	socket.on('my response1', function(msg) {
		
			title.innerHTML = msg.Title;	
			var dataURL="data:image/jpeg;base64,"+msg.Data1;
			document.getElementById("image").src = dataURL;
			
			var dataURL="data:image/jpeg;base64,"+msg.Data2;
			document.getElementById("image_duplicate").src = dataURL;
			looping();
		 	});

			});