
document.body.onload = () => {

	var btn = document.createElement("input")
	btn.type = "button"
	btn.value = "rename kit to hello world!"

	btn.onclick = () => {

		let s = new Spinal()		
		s.get ('kit.x', r => {

			console.log(r)

			let kit = r['kit.x']
			kit.name = "hello world"
			
			s.post(kit, r => {
				console.log('success!')
			})
		})
	}

	document.body.appendChild(btn)
}