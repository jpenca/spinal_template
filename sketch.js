
var spinal = new Spinal('http://localhost:5000');

function kitLoopBack(callback)
{
	var key = 'kit.x';
	spinal.get(key, function(response)
	{
		var kit = response[key];

		/* kit is now a fully parsed object. change things and send it back! */

		spinal.post(kit, function(response)
		{
			callback();
		});
	});
}

kitLoopBack(function()
{
	console.log('done!');
});
