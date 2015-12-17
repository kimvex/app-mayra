document.addEventListener('DOMContentLoaded',function(){

	function conectar(e){
		var ip = document.getElementById('ip').value;
		console.log(ip)
		/*$.get('http://' + ip,function(data){
			document.getElementById('action').innerHTML = data;
		});*/
		document.getElementById('action').innerHTML = '<object class="servervid" data="http://192.168.1.'+ ip +':5000" type="text/html"></object>';
		e.preventDefault();
	}

	document.getElementById('boton').addEventListener('click',conectar);
});
