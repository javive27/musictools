//Carrega anteriormente todos os recursos
 resUrls = ['/static/sound-res/corda1.ogg','/static/sound-res/corda2.ogg','/static/sound-res/corda3.ogg','/static/sound-res/corda4.ogg','/static/sound-res/corda5.ogg','/static/sound-res/corda6.ogg'];
var audioCollection = {};
var selectedString;
var repeat = false;
var intervalTime = 2500;
function loadsounds(){
	for(url in resUrls){
		url = resUrls[url]//url antes era apenas o index
		som = new Audio();
		som.src = url;
		som.load();
		audioCollection[url] = som;
	}
}

function select(string){
	$('.cordas').css("background-color","white");
	$('#'+string).css('background-color','#CBCBEC');
	selectedString = string;
}
//Zepto para lidar com os triggers do audio
$(document).ready(function() {
	loadsounds();
        $('.cordas').on('click tap',function (e){
		var filename = $(this).attr('id');
		select(filename);
		clearInterval(window.playInterval);

        });
	$('#repeat').on('click tap',function (e){
		repeat = !repeat;	
		if (repeat){$(this).css('background-color','#CBCBEC');}
		else{$(this).css('background-color','white');}		
		clearInterval(window.playInterval);
	});
	$('#play').on('click tap',function (e){
		var url = '/static/sound-res/' + selectedString + ".ogg";
		clearInterval(window.playInterval);
		var som = audioCollection[url];
		if (!som.ended){som.load();}
		som.play();
		if (repeat){
			som.play();
			window.playInterval = setInterval(function() {som.load();som.play()},intervalTime);	
		}
	});
});

