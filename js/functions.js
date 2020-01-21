$(document).ready(function(){
	
	$("#btnMatchId").click(function(){
		$("#displayData ul").html("");

		var key = $("#key").val();
		var matchId = $("#matchId").val();
		var region = $("#region").val();
		
		var url = "https://"+region+".api.riotgames.com/lol/match/v4/matches/"+matchId+"?api_key="+key;
		
		$.ajaxSetup({
			headers : {
				"crossDomain" : "true",
			    "Origin": "https://developer.riotgames.com",
			    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
			    "Accept-Language": "es,en;q=0.9,ca;q=0.8,gl;q=0.7",
			    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
			}
		});
		
		$.getJSON(url)
		.done(function(WsData){
			$("#displayData ul").append("<li>"+url+"?api_key="+key+"</li>");
			$.each(WsData, function(index, value){
				$("#displayData ul").append("<li>"+index+": "+value+"</li>");
			});

			$("#displayData").show();
		})
		.fail(function(WsData, textStatus, errorThrown ) {
			$("#displayData ul").append("<li>"+url+"?api_key="+key+"</li>");
	        $.each(WsData, function(index, value){
			$("#displayData ul").append("<li>"+index+": "+value+"</li>");
		});

		$("#displayData").show();
	        
		});

	});

});

