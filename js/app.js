document.addEventListener('DOMContentLoaded',function(){

	function conectar(e){
		document.getElementById('action').innerHTML = '<object class="servervid" data="http://192.168.1.66:5000" type="text/html"></object>';
	}
	conectar();
});
