$(document).ready(function(){
	
	$("#btnMatchId").click(function(){
		$("#displayData ul").html("");

		var key = $("#key").val();
		var matchId = $("#matchId").val();
		var region = $("#region").val();
		
		var url = "https://"+region+".api.riotgames.com/lol/match/v4/matches/"+matchId+"?api_key="+key;

		var iframe = window.open(url, "jsoniframe");

		$("#displayData").html("Loading...");	


		setTimeout(function(){ 
			//var data = $("#jsoniframe").contents(); 
			
			var data = document.getElementById('jsoniframe').contentWindow.document.body.innerHTML;
			//var json = JSON.parse(JSON.stringify(data))
			console.log(data)
			//$.each(data, function(index, value){
			//	$("#displayData ul").append("<li>"+index+": "+value+"</li>");
			//});
			//console.log(json)	
		}, 2000);
		
		$("#displayData").show();   

	});

});