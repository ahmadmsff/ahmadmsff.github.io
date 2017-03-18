$("#inputEncodeUrl").focus(function(){
		$("#outDecodeUrl").addClass('hidden');
		$("#outEncodeUrl").removeClass('hidden');
	});
	$("#inputDecodeUrl").focus(function(){
		$("#outEncodeUrl").addClass('hidden');
		$("#outDecodeUrl").removeClass('hidden');
	});
	$("#inputEncodeUrl").keyup(function() {
		var getVal 		= $("#inputEncodeUrl").val();
		var encodeUri 	= encodeURIComponent(getVal);
		$("#outputEncodeUrl").val(encodeUri);
	});
	$("#inputDecodeUrl").keyup(function() {
		var getVal 		= $("#inputDecodeUrl").val();
		var decodeUri 	= decodeURIComponent(getVal);
		$("#outputDecodeUrl").val(decodeUri);
	});