$(document).ready(function() {
	namespace = '/nameSpaceMain';
	var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
	var textVar = document.getElementById('textId');
	document.cookie="NO";
	var diameterMax = document.getElementById('diameterMax');
    var diameterMin = document.getElementById('diameterMin');
    var diameterMean = document.getElementById('diameterMean');
	var bake_measure = document.getElementById('bake_measure');
	
	console.info('done upto var initilization');

	function looping(){
       	socket.emit('fetchRequest', {data:'None'});}

	looping();

	socket.on('responseForRequest', function(UpdateDisplay) {
		
		diameterMax.innerHTML = ": "+UpdateDisplay.diameterMax;
        diameterMin.innerHTML = ": "+UpdateDisplay.diameterMin;
        diameterMean.innerHTML = ": "+UpdateDisplay.diameterMean;
		bake_measure.innerHTML = ": " +UpdateDisplay.bake_value;
		
		console.info('in socket.on loop');
		//var dataURL_original="data:image/jpeg;base64,"+UpdateDisplay.original_image;
        var dataURL_processed="data:image/jpeg;base64,"+UpdateDisplay.processed_image;
        //document.getElementById("imageId").src = dataURL_original;
        document.getElementById("imageId2").src = dataURL_processed;
        //document.getElementById("imageId2").src = dataURL;
//		var dataURL="data:image/jpeg;base64,"+msg.Data2;
		//document.getElementById("image_duplicate").src = dataURL;
		looping();
		});

});
