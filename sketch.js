var spinal = new Spinal();

function kitLoopBack(callback)
{
	var key = 'kit.x';
	spinal.get(key, function(r)
	{
		var kit = r[key];

		/* kit is now a fully parsed object. change things and send it back! */

		spinal.post(kit, function(r)
		{
			callback();
		});
	});
}

kitLoopBack(function()
{
	console.log('done!');
});
