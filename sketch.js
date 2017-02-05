
var s = new Spinal('http://Jakobs-MacBook-Air.local:5000/');

s.get ( 

	'kit.x', 
	
	function(res) {
		// var kit = r['kit.x'];
		console.log('get success!' + res);
		console.log(res);

		
		s.post(res['kit.x'], 
			function(res) {
				console.log('post success! ' + res);
			}),
			function(err) {
				console.log('post fail! ' + err);
			}
	},

	function(res) {

		console.log('get fail! ' + res);
		console.log(res);

	}

	);
