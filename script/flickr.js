window.onload = function() {
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=';

	var searchButton = document.getElementById("searchForm");
	searchButton.onsubmit = function(){
		var keyword = document.getElementById("keyword"),
			jsonp = document.createElement("script");
		jsonp.src = url + encodeURI(keyword.value);
		document.body.appendChild(jsonp);

		// 以下、余計なこと
		var extraText = "";
		switch(keyword.value){
			case "猫":
			case "ねこ":
			case "ぬこ":
			case "cat":
				extraText = "< にゃー";
				break;
			case "犬":
			case "いぬ":
			case "dog":
				extraText = "< わん";
				break;
			case "mixi":
				extraText = "<3";
				break;
			case "QB":
				extraText = "< ボクと契約して、魔法少女になってよ！";
				break;
		}
		document.getElementById("extra").innerText = extraText;
		// ここまで、余計なこと
		return false;
	};
};

function drawImg(result) {
	var resultArea = document.getElementById("resultArea");
	resultArea.innerHTML = "";
	if(result.items.length){
		result.items.forEach(function(item){
			var a = document.createElement("a");
			a.href = item.link;
			var img = document.createElement("img");
			img.src = item.media.m;
			img.title = item.title;
			a.appendChild(img);
			resultArea.appendChild(a);
		});
	}else
		resultArea.innerText = "No photos found.";
}


