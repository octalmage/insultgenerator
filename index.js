var http = require('http');

/**
 * Makes an HTTP request to insultgenerator.org and parses the html.   
 * @param  {function} callback Function to call with the insult.
 * @return {string}            Insult from insultgenerator.org.
 */
module.exports = function(callback)
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

			//Fix random HTML entities.
			insult = insult.replace(/&nbsp;/g, " "); //Replace "&nbsp;".
			insult = insult.replace(/&#44;/g, ","); //Replace "&#44;".
			insult = insult.replace(/&amp;/g, "&"); //Replace "&amp;".
			insult = insult.replace(/&lt;/g, "<"); //Replace "&lt;".
			insult = insult.replace(/&gt;/g, ">"); //Replace "&gt;".
			insult = insult.replace(/&quot;/g, "\""); //Replace "&quot;".
			insult = insult.replace(/&#96;/g, "`"); //Replace "&#96;".
			insult = insult.replace(/&#x27;/g, "'"); //Replace "&#x27;".
			insult = insult.replace(/\n/g, ""); //Remove newlines.

			callback(insult);
		});
	});
};