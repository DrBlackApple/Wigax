function sendEvent (sender, action) {
	$.ajax({
		url: "/"+$(sender).attr('id')+"%40"+action,
		dataType: "xml",
		method: "GET",
		async: true,
		success: function (data) {
			parseData(data);
		},
		error: function (jqxhr, error) {
			console.error(error+": "+jqxhr.statusText+"@"+jqxhr.status);
		}
	});
}

function sendForm (sender, action) {
	var data = new FormData(sender);
	$.ajax({
		url: '/'+$(sender).attr('id')+"%40"+action,
		async: true,
		method: 'POST',
		data: data,
		dataType: 'xml',
		processData: false,
		contentType: false,
		error: function (jqxhr, error) {
			console.error(error+": "+jqxhr.statusText+"@"+jqxhr.status);
		},
		success: function (data) {
			parseData(data);
		}
	});
}

function parseData(data) {
	var d = $(data);
	if(d.find('main').length > 0) {
		$('body').contents().remove();
		$('head').contents().remove();
		$('head').append(d.find('main>html>head').html());
		$('body').append(d.find('main>html>body').html());
		window.history.pushState({}, d.find('main>head>title').html(), d.find('main').attr('url'));
	} else {
		d.find('block').each(function () {
			$($(this).attr('target')).contents().replaceWith($(this).contents());
		});
		if(d.find('head>title').length > 0)
			$('head>title').contents().replaceWith(d.find('head>title').contents());
		if(d.find('head').attr('url'))
			window.history.pushState({}, $('title').html(), d.find('head').attr('url'));
	}
}