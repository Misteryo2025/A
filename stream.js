function toggleStream(url){
	var stream = document.getElementById("stream");

	if (stream.getAttribute("data-playing")) {
		stream.setAttribute("data-playing", "");
		stream.data = "";
		$('.linkstream').addClass('tesinfo');
		$('#stream').addClass('hidden');
		$('.info').removeClass('hidden');
	}else{
		stream.setAttribute("data-playing", "true")
		stream.data = "http://www.bgselalu.com:8013/stream/stream.html?stream=" + url;
		$('.linkstream').removeClass('tesinfo');
		$('#stream').removeClass('hidden');
		$('.info').addClass('hidden');
	}
}
