var http = require('http');

/**
 * Makes an HTTP request to insultgenerator.org and parses the html.   
 * @param  {function} callback Function to call with the insult.
 * @return {string}            Insult from insultgenerator.org.
 */
module.exports = function (callback)
{
	http.get(
	{
		host: 'insultgenerator.org',
		path: '/'
	}, function(response)
	{
		var body = '';
		response.on('data', function(d)
		{
			body += d;
		});
		response.on('end', function()
		{
			var start = body.substring(body.indexOf("<br><br>") + 8);
			var insult = start.substring(0, start.indexOf("</div>"));
			callback(insult);
		});
	});
};