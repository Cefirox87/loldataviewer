$(document).ready(function(){
	
	var key = "RGAPI-c898e6b3-9c88-4c37-abdc-5e1fcb53af26";	
	$("#btnMatchId").click(function(){
		$("#displayData ul").html("");

		var matchId = $("#matchId").val();
		var region = $("#region").val();
		
		var url = "https://"+region+".api.riotgames.com/lol/match/v4/matches/"+matchId+"?api_key="+key;
		/*
		$.ajaxSetup({
			headers : {
			    "Origin": "*",
			    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
			    "X-Riot-Token": key,
			    "Accept-Language": "es,en;q=0.9,ca;q=0.8,gl;q=0.7",
			}
		});
		*/

		$.getJSON(url)
		.done(function(WsData){
			$("#displayData ul").append("<li>"+url+"</li>");
			$.each(WsData, function(index, value){
				$("#displayData ul").append("<li>"+index+": "+value+"</li>");
			});

			$("#displayData").show();
		})
		.fail(function(WsData, textStatus, errorThrown ) {
			$("#displayData ul").append("<li>"+url+"</li>");
            $.each(WsData, function(index, value){
			$("#displayData ul").append("<li>"+index+": "+value+"</li>");
		});

			$("#displayData").show();
	        
    	});
		
	});

});

