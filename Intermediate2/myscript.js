$(document).ready(function() {
	$('#tabs').tabs();
	$('#puzzle_list').sortable();
//above is a test
	$('#tabs-2 #li_1 img').click(function() {
		$(this).attr('src', 'cat1.jpg');
	});
	$('#tabs-2 #li_2 img').click(function() {
		$(this).attr('src', 'cat2.jpg');
	});
	$('#tabs-2 #li_3 img').click(function() {
		$(this).attr('src', 'cat3.jpg');
	});
	$('#tabs-2 #li_4 img').click(function() {
		$(this).attr('src', 'cat4.jpg');
	});
	$('#tabs-2 #li_5 img').click(function() {
		$(this).attr('src', 'cat5.jpg');
	});
	$('p').style('background-color','red');
});