$(document).ready(function() {
	$('#accordion').accordion({	active: 2	});
	$('.datepicker').datepicker();
	$('#dialog').hide();
	$('#dialog_button').click(function()	{
		$('#dialog').dialog({ title: "Dialog Box"	});
	});
	$('#tabs').tabs();
//start new plugin code
	$('#boom').click(function() {
		$('#ninja').effect('explode'); 
	});
});