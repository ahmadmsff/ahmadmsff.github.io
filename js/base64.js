$("#inputEncodeBase64").focus(function() {
		$("#outDecodeBase64").addClass('hidden');
		$("#outEncodeBase64").removeClass('hidden');
	});
	$("#inputDecodeBase64").focus(function() {
		$("#outDecodeBase64").removeClass('hidden');
		$("#outEncodeBase64").addClass('hidden');
	});
	$("#inputEncodeBase64").keyup(function() {
		var getval = $("#inputEncodeBase64").val();
		var result = $.base64.encode(getval)
	  $("#outputEncodeBase64").val(result);
	});

	$("#inputDecodeBase64").keyup(function() {
		var getval = $("#inputDecodeBase64").val();
		var result = $.base64.decode(getval)
	  $("#outputDecodeBase64").val(result);
	});