$(function() {
	jQuery('#demo1-audio').acornMediaPlayer();
	jQuery("#musicList ul").delegate("li","click",function() {
		var src = $(this).attr("name");
		$("#demo1 source").attr("src",src);
		alert($("#demo1 source").attr("src"));
	});
});