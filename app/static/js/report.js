var d=0;
  $(document).ready(function() {
    $("#download").hide();
    select = document.getElementById('selectElementId');
    var tableId = document.getElementById('Tables');
    var Download = document.getElementById('download');
    var TableStatus = 0;
    
    
    $("#driver").click(function(event){
      $.post(
        "/getData",
        $("#testform").serialize(),
        function(data) {
          $("#download").show();
	  if (data.table == "Invalid Input" || data.table == "No Production At this Duration")
                {
                sweetAlert("Oops....!!",data.table)
                }
            else
            {
            
        if (data.table !== undefined) {
           if (TableStatus == 1) {
              $("Table").find("tr:gt(0)").remove();}
              for (var i = 1; i<=data.table.length; i++){
     			var row = tableId.insertRow(i);
                for(j=0 ; j<data.table[0].length; j++){
                  var cell = row.insertCell(j);
                  cell.innerHTML = data.table[i-1][j];
                  }
     			}
           TableStatus = 1;
           	 }
            Download.onclick = function() {
              w = window.open(data.flname);
             };
        }
      }
      );
    });
  });
