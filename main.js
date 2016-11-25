$(function() {
  var userName = 'MyUserName'; // Add your Username Here
	var results = $('.results');

	$('#search').on('click', function(event) {
		event.preventDefault();
		var codeSearch = $('input[name=cp]').val();
		var url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode='+ codeSearch +'&country=MX&maxRows=2&username='+userName;

		console.log('get');
		$.get(url, function(dataResult){

			dataResult.postalCodes.forEach(function(currentElement){
				var placeName = currentElement.placeName;
				var postalCode = currentElement.postalCode;

				var row = '<tr><td>'+ placeName +'</td><td>'+ postalCode +'</td></tr>'
				results.append(row);
			});
		});


	});

});
