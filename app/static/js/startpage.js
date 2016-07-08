$(document).ready(function() {
	namespace = '/test';
	var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);   
	select = document.getElementById('selectElement');	
	var b1 = document.getElementById('submit');
	
	var pageStatus = "YES";
	
	function login(showhide){
				if(showhide == "show"){
					document.getElementById('popupbox').style.visibility="visible";
				}else if(showhide == "hide"){
				  document.getElementById('popupbox').style.visibility="hidden"; 
						}
				}
			
			if (pageStatus == "NO"	){
				$("#popupbox").show();
				$("#Main").hide();
			}
			else{
				$("#Main").show();
				$("#popupbox").hide();
			}
	
		var status = true;
			
			$("#login").click(function(event) {
				$.post(
					"/passcheck",
					$("#testform").serialize(),
					function(data) {
					if (data == "YES")
							{
							$("#Main").show();
							$("#popupbox").hide();
							document.cookie="YES";
							}
					else{
							sweetAlert("Oppss..!!","Wrong Username and Password")
							document.getElementById('Uname').value = "";
							document.getElementById('Passwd').value = "";
						}
					}
							);
				});

	$.post(
      "/options",
      function (msg) {
        if (msg !== undefined)
                {
					
					for (var i = 0; i<msg.name.length; i++){
						var opt = document.createElement('option');
						opt.value = msg.value[i];
						opt.innerHTML = msg.name[i];
						select.appendChild(opt);
					}
				}
				else{
                    window.alert("Configuration folder is empty")
                }
      }
    );

	b1.onclick = function() {
	  var data = $("#tyreType").serializeArray();
	  socket.emit('forward', {data:data});
	  
	  window.location.href = "/";
      
	  };	
		

});