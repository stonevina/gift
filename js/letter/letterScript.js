$(function() {
   //待写入div
    var vLetter = $("#letter");
	//颜色值的变化量
    var iSpeedInk = 3;

    //内容源
    var sText = $("#letter_src").html();
	//当前字符串的index
    var iCurChar = 0;
	//待更新文本初始值
    var sChars = '<span>';
	//当前字符的RGB单值
    var iCurInk = 0;
	//笔的状态
    var sCurCaret = '';
	//笔的样式
    var sCaret = "&nbsp;<img src='images/letter/pen.gif' style='position:absolute' />";

    var doStep = function () {

		//对于字符串来说，取出当前单个字符，对于汉字来说，就要另外处理。。。
		//从第0个开始取
        var sChar = sText.charAt(iCurChar);
		var reg = /\s/;
		
		if(reg.test(sChar)) {iCurChar++;doStep();return;}
        // default char delay
		//延时
        var iDelay = 260;

		//根据当前字符的内容进行不同处理
		
		//当前字符为空，不显示笔的状态
        if (sChar == '.') {
            sCurCaret = '';
			sChar = "<div style='display:inline-block;width:2em;'></div>";
		//当前字符为“|”，删掉前一个
        } else if (sChar == '|') { // we use | symbol to emulate 'error' symbol
            sChar = '';
            sChars = sChars.substring(0, sChars.length-1);
            iDelay = 500;
		//当前字符为“<”
        } else if (sChar == '<') { // pass tags
			//从当前位置开始查找“>”
            var iPos = sText.indexOf('>', iCurChar);
			//取出“<>”的内容
            sChar = sText.substring(iCurChar, iPos + 1);
			//重置index的位置
            iCurChar = iPos;
		//当前字符为“&”
        } else if (sChar == '#') { // pass html entities
            sCurCaret = '';
			sChar = "<div style='border-bottom: 1px dashed black;'></div>";
		//当前字符为“.”，延时300ms
        } else if (sChar == '.') { // custom delay in case of . symbol
            iDelay = 300;
		//当前字符为“,”，延时100ms
        } else if (sChar == ',') { // custom delay in case of , symbol
            iDelay = 100;
		//当前字符为“  ”，延时32ms
        } else if (sChar == ' ') { // custom delay in case of space symbol
            iDelay = 32;
		//当当前的index大于5时，显示笔的状态
        } else if (iCurChar > 0) {
            sCurCaret = sCaret;
        }

        // expenditure of ink
		//没有墨水，当前字符为空格
		//将当前的字符颜色设置为淡颜色，模拟没墨水
		//遇到一个空格颜色值+5
        if (sChar != '' && sChar != "|") {
            iCurInk += iSpeedInk;
            sChar = '</span><span style="color:RGB(' + (iCurInk) + ',' + (iCurInk) + ',' + (iCurInk) + ')">' + sChar;
        } 

		//当取墨水的图片可见时，重置图片，并且重新设置字体的颜色为黑色，隐藏蘸取墨水的图片
        if ($("#inkwell2").is(":visible")) {
            sCurCaret = sCaret;
			$("#inkwell2").fadeOut();
            sChar = '</span><span style="color:RGB(0,0,0)">' + sChar;
        }

		//重新蘸取墨水
        // refresh Ink
		//当字符的R G B值大于160时，重置为0，显示蘸墨水
        if (iCurInk > 160) {
            iCurInk = 0;
			$("#inkwell2").fadeIn();
            iDelay = 1000;
            sCurCaret = '';
        }

        // add current char to chars
		//添加当前字符到信纸中
        sChars += sChar;

        // hide the caret at the end of the letter
		//打印出所有字符后隐藏笔
        if (iCurChar == sText.length - 1)
            sCurCaret = '';

        // update letter with new chars
		//更新当前信纸内容，使用文字内容加上图片
        vLetter.html(sChars + sCurCaret);

        // goto next char
		//当前取字符的指针++
        iCurChar++;

        // next step
		//循环取出所有文本
        if (iCurChar < sText.length) {
            setTimeout(doStep, 20 + iDelay);
        }
    };

    doStep();
});