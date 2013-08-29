$(document).ready(function() {
	$('#tabs').tabs();
	$('.my_images').click(function() {
		$(this).fadeOut('fast');
	});
	$('#restore_us').click(function(){
		$('.my_images').fadeIn('fast');
	});
	$('.datepicker').datepicker();
	$('#my_alert').hide();
	$('#my_submit').click(function()	{
		$('#alert_from').append($('#input_from').val());
		$('#alert_to').append($('#input_to').val());
		$('#my_alert').show();
		return false;
	});
});