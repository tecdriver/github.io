$(document).ready(function(){
	$("#esconder").click(function(){
		$('#uno').hide("slow");
		$('#dos').hide(3000);
	});
	$("#mostrar").click(function(){
		$('#uno').show(5000);
		$('#dos').show(5000);
	});
});