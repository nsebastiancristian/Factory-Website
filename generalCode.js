// JavaScript Document
var clickFlag1 = 0;
var clickFlag2 = 0;

/*===================================================================================================
				##### FUNCTIONS FOR DISPLAY #####
====================================================================================================*/
function arrange_table()
{
	$("td").each(function(index, element) {
            if($(this).attr("bgcolor") == "#ffffff" )
			{
				$(this).css("font-size", "0.8em");
			}
			if($(this).attr("bgcolor") == "#c0c0c0" )
			{
				$(this).css("font-size", "0.8em");
			}
			if($(this).attr("bgcolor") == "#e0e0e0" )
			{
				$(this).css("font-size", "0.8em");
			}
        });
}


/*===================================================================================================
				##### REGULAR FUNCTION #####
====================================================================================================*/
function prevDef()
{
	
	return false;

}



/*==================================================================================================
				***** FUNCTION FOR THE DATE AND CLOCK *****
====================================================================================================*/
function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	
	//check the month, day, year
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	
	$("#dateBox div.leftF").text(weekday[today.getDay()]);
	
	var month = today.getMonth();
	var day = today.getDate();
	var year = today.getFullYear();
	
	month = checkTime(month);
	day = checkTime(day);
	
	//document.getElementById('txt').innerHTML=h+":"+m+":"+s;
	$("#dateBox div.rightF").text(day+"."+month+"."+year+"  "+h+":"+m+":"+s);
	
	t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
	if (i<10)
	  {
	  i="0" + i;
	  }
	return i;
}

/*=================================================================================
  ----------------------------  Onload Fuction  -----------------------------------
  ==================================================================================*/
function refreshPage()
{
	$('body').hide().fadeIn(2000);
	
	//load the preview news items
	$.get('news_home_page_preview.php', process_news_preview);
	
	//when clicking on the news link
	$("a#news_list").click(function()
	{
		var href = $(this).attr('href');
 		var querystring = href.slice(href.indexOf('?')+1);
 		$.get('news_list.php', querystring, process_news_list);
		
		return false;	
	})
	
	//animate the header
	headerAnimation();
	
	//add the functionality for the menu
	menuFunctionality();
	
	//Script for the tables
	$("tr:nth-child(odd)").css("background-color" , "#CCCCCC");
	$("th").css("background-color", "#999");
	$("tr.shownFirst").show();
	$("span#shownFirst").show();
	$("span#notShownFirst").hide();
	
	$("th.clickToExpand").hover(function(){$(this).css("background-color", "#9C9");}, function(){$(this).css("background-color", "#999");});
	
	$("th.first").click(function(){
			$("tr.first").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		
		});
	$("th.second").click(function(){
			$("tr.second").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});
	$("th.third").click(function(){
			$("tr.third").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});
	$("th.fourth").click(function(){
			$("tr.fourth").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});	
	//Insert script for the fancybox gallery here..
	$("#gallery a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gallery-float a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gallery-contract a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gal-1 a").fancybox();
	$("#gal-2 a").fancybox();
	$("#gal-3 a").fancybox();
	
	//clock display
	startTime();
	
	//this is for the arrows in the news-box to highlight when you hover the mouse over them
	$("#newsBox img.leftArrow").hover(function(){ $(this).attr("src", "Images/Icons/rounded corner grey/arrow-left_grey.png");}, function() {$(this).attr("src", "Images/Icons/rounded corner black/arrow-left_black.png");});
	
	$("#newsBox img.rightArrow").hover(function(){ $(this).attr("src", "Images/Icons/rounded corner grey/arrow-right_grey.png");}, function() {$(this).attr("src", "Images/Icons/rounded corner black/arrow-right_black.png");});
	
	
	/*=====================================================================================================
										***** Sub Main Content *****
	======================================================================================================*/
	//initially the specifications are visible by default
	$("#photos").fadeOut("fast");
	$("#features").fadeOut("fast");
	$("li.specifications").css("background-color", "#009966");
	
	
	
	$(".sub-menu li").hover(function(e) {
        $(this).css("background-color", "#009966");
		$(".sub-menu li").not(this).css("background-color", "#1288e6");
		
		
		//$(".sub-menu").css("border-bottom", "2px solid #009966");
    });
	
	$("li.specifications").hover(function(e) {
        $("#photos").fadeOut('fast');
		$("#features").fadeOut('fast');
		$("#specifications").fadeIn('slow');
		
		
    });
	
	$("li.photos").hover(function(e) {
        $("#specifications").fadeOut('fast');
		$("#features").fadeOut('fast');
		$("#photos").fadeIn('slow');
		
		
    });
	
	$("li.features").hover(function(e) {
        $("#specifications").fadeOut('fast');
		$("#photos").fadeOut('fast');
		$("#features").fadeIn('slow');
    });
	
	
	
	
	
	$("#photo_landscape a").fancybox();
	$("#photo_portrait a").fancybox();
	
	//IE 10 hack
	if (/*@cc_on!@*/false) 
	{
		//$("#wrapOverall #leftColumn #menu ul li:last").css("color", "green");
		$("li.second:nth-child(6)").css("border-bottom", "3px solid #67bafb");
		$("#newsBox .arrowBox").css("bottom", "-15px");
		
		$("#menu li > ul.secFloor").css("top", "200px");
		$("#menu li > ul.thirdFloor").css("top", "236px");
	}
}

function initSubMainContent()
{
	$(".bulletListBox-horiz-spa").css("margin-top", "80px");
	
	//IE 10 hack
	if (/*@cc_on!@*/false) 
	{
		
		//contract manufacturing
		$(".cm1-p1-eng").removeClass("cm1-p1-eng").addClass("cm1-p1-eng-IE");
		$("#cm-p1-ro").removeAttr("cm-p1-ro").attr("id", "cm-p1-ro-IE");
		$("#cm-p2-ro").removeAttr("cm-p2-ro").attr("id", "cm-p2-ro-IE");
		
		$("#cm-p1-fra").removeAttr("cm-p1-fra").attr("id", "cm-p1-fra-IE");
		$("#cm-p2-fra").removeAttr("cm-p2-fra").attr("id", "cm-p2-fra-IE");	
			
		$("#cm-p1-de").removeAttr("cm-p1-de").attr("id", "cm-p1-de-IE");
		$("#cm-p2-de").removeAttr("cm-p2-de").attr("id", "cm-p2-de-IE");
		
		$("#cm-p1-spa").removeAttr("cm-p1-spa").attr("id", "cm-p1-spa-IE");
		
		$("#cm-p1-it").removeAttr("cm-p1-it").attr("id", "cm-p1-it-IE");
		$("#cm-p2-it").removeAttr("cm-p2-it").attr("id", "cm-p2-it-IE");
		
		//-----------------------------------------------------------------
		
		$(".contract-header").css("margin-top", "30px");
		$(".first-contract-header").css("margin-top", "50px");
		
		//--------------------------------------------------------------------------------
		
		$(".mtrr-p1-eng").removeClass("mtrr-p1-eng").addClass("mtrr-p1-eng-IE");
		$("ul.mtrr-ul-eng").removeClass("mtrr-ul-eng").addClass("mtrr-ul-eng-IE");
		
		$(".mtrr-p1-ro").removeClass("mtrr-p1-ro").addClass("mtrr-p1-ro-IE");
		$("ul.mtrr-ul-ro").removeClass("mtrr-ul-ro").addClass("mtrr-ul-ro-IE");
		
		$("p.mtrr-p1-de").removeClass("mtrr-p1-de").addClass("mtrr-p1-de-IE");
		$("ul.mtrr-ul-de").removeClass("mtrr-ul-de").addClass("mtrr-ul-de-IE");
		
		$("p.mtrr-p1-fra").removeClass("mtrr-p1-fra").addClass("mtrr-p1-fra-IE");
		$("ul.mtrr-ul-fra").removeClass("mtrr-ul-fra").addClass("mtrr-ul-fra-IE");
		
		$("p.mtrr-p1-spa").removeClass("mtrr-p1-spa").addClass("mtrr-p1-spa-IE");
		$("ul.mtrr-ul-spa").removeClass("mtrr-ul-spa").addClass("mtrr-ul-spa-IE");
		
		$("p.mtrr-p1-it").removeClass("mtrr-p1-it").addClass("mtrr-p1-it-IE");
		$("ul.mtrr-ul-it").removeClass("mtrr-ul-it").addClass("mtrr-ul-it-IE");
		
		$("#rebuild-retrofit-eng").removeAttr("rebuild-retrofit-eng").attr("id", "rebuild-retrofit-eng-IE"
);		
		$("#rebuild-retrofit-rom").removeAttr("rebuild-retrofit-rom").attr("id", "rebuild-retrofit-rom-IE"
);
		$("#rebuild-retrofit-fra").removeAttr("rebuild-retrofit-fra").attr("id", "rebuild-retrofit-fra-IE"
);
		$("#rebuild-retrofit-deu").removeAttr("rebuild-retrofit-deu").attr("id", "rebuild-retrofit-deu-IE"
);
		$("#rebuild-retrofit-spa").removeAttr("rebuild-retrofit-spa").attr("id", "rebuild-retrofit-spa-IE"
);
		$("#rebuild-retrofit-ita").removeAttr("rebuild-retrofit-ita").attr("id", "rebuild-retrofit-ita-IE"
);

		$("#sub-mainContent").css("height", "582px");
		
		$("#mainContent #specifications .TMG-factory").removeClass("TMG-factory").addClass("TMG-factory-IE");
		$("#mainContent #features .TMG-factory").removeClass("TMG-factory").addClass("TMG-factory-2-IE");
		$("#mainContent #photos .TMG-factory").removeClass("TMG-factory").addClass("TMG-factory-3-IE");
		
		$("#mainContent #specifications .TMG-factory-ro-1").removeClass("TMG-factory-ro-1").addClass("TMG-factory-ro-1-IE");
		$("#mainContent #features .TMG-factory-ro-2").removeClass("TMG-factory-ro-2").addClass("TMG-factory-ro-2-IE");
		$("#mainContent #photos .TMG-factory-ro-3").removeClass("TMG-factory-ro-3").addClass("TMG-factory-ro-3-IE");
		
		$("#mainContent #specifications .TMG-factory-fra-1").removeClass("TMG-factory-fra-1").addClass("TMG-factory-fra-1-IE");
		$("#mainContent #features .TMG-factory-fra-2").removeClass("TMG-factory-fra-2").addClass("TMG-factory-fra-2-IE");
		$("#mainContent #features .TMG-factory-fra-2-IE").css("margin-top", "60px");
		$("#mainContent #photos .TMG-factory-fra-3").removeClass("TMG-factory-fra-3").addClass("TMG-factory-fra-3-IE");
		
		$("#mainContent #specifications .TMG-factory-de-1").removeClass("TMG-factory-de-1").addClass("TMG-factory-de-1-IE");
		$("#mainContent #features .TMG-factory-de-2").removeClass("TMG-factory-de-2").addClass("TMG-factory-de-2-IE");
		$("#mainContent #features .TMG-factory-de-2-IE").css("margin-top", "60px");
		$("#mainContent #photos .TMG-factory-de-3").removeClass("TMG-factory-de-3").addClass("TMG-factory-de-3-IE");
		
		$("#mainContent #specifications .TMG-factory-spa-1").removeClass("TMG-factory-spa-1").addClass("TMG-factory-spa-1-IE");
		$("#mainContent #features .TMG-factory-spa-2").removeClass("TMG-factory-spa-2").addClass("TMG-factory-spa-2-IE");
		$("#mainContent #photos .TMG-factory-spa-3").removeClass("TMG-factory-spa-3").addClass("TMG-factory-spa-3-IE");
		
		$("#mainContent #specifications .TMG-factory-ita-1").removeClass("TMG-factory-ita-1").addClass("TMG-factory-ita-1-IE");
		$("#mainContent #features .TMG-factory-ita-2").removeClass("TMG-factory-ita-2").addClass("TMG-factory-ita-2-IE");
		$("#mainContent #features .TMG-factory-ita-2-IE").css("margin-top", "60px");
		$("#mainContent #photos .TMG-factory-ita-3").removeClass("TMG-factory-ita-3").addClass("TMG-factory-ita-3-IE");
		
		//---fabricatie sub contract section
		$("#cm-b2-ro").removeAttr("cm-b2-ro").attr("id", "cm-b2-ro-IE");
		
		$("#cm-b1-fra").removeAttr("cm-b1-fra").attr("id", "cm-b1-fra-IE");
		$("#cm-b2-fra").removeAttr("cm-b2-fra").attr("id", "cm-b2-fra-IE");
		
		$("#cm-b1-de").removeAttr("cm-b1-de").attr("id", "cm-b1-de-IE");
		$("#cm-b2-de").removeAttr("cm-b2-de").attr("id", "cm-b2-de-IE");
		
		$("#gallery-contract").removeAttr("gallery-contract").attr("id", "gallery-contract-IE");
		
		$(".contract-picture-display").removeClass("contract-picture-display").addClass("contract-picture-display-IE");
		$("#gal-1 img").removeClass("height-120").addClass("height-110");
		$("#gal-2 img").removeClass("width-130").removeClass("width-150").removeClass("height-var").addClass("height-110");
		$("#gal-3 img").removeClass("height-120").addClass("height-110");
		
		$("#last-contract-header").addClass("last-contract-header");
		
		//$("#world-map").css("margin-top", "50px");
		
		
	}
	
	
	
	//init fancybox for the machine tools specifications links (if applicable)
	$('.fancybox').fancybox({
	width : '60%',
	height : '60%'
	});	
	
	//Script for the tables
	$("tr:nth-child(odd)").css("background-color" , "#CCCCCC");
	$("th").css("background-color", "#999");
	$("tr.shownFirst").show();
	$("span#shownFirst").show();
	$("span#notShownFirst").hide();
	
	$("th.clickToExpand").hover(function(){$(this).css("background-color", "#9C9");}, function(){$(this).css("background-color", "#999");});
	
	$("th.first").click(function(){
			$("tr.first").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		
		});
	$("th.second").click(function(){
			$("tr.second").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});
	$("th.third").click(function(){
			$("tr.third").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});
	$("th.fourth").click(function(){
			$("tr.fourth").toggle();
			$("span.showLess", this).toggle();
			$("span.showMore", this).toggle();
		});	
	//Insert script for the fancybox gallery here..
	$("#gallery a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gallery-float a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gallery-contract a").fancybox({transitionIn : 'elastic', transitionOut : 'elastic'});
	$("#gal-1 a").fancybox();
	$("#gal-2 a").fancybox();
	$("#gal-3 a").fancybox();
	
	/*=====================================================================================================
										***** Sub Main Content *****
	======================================================================================================*/
	//initially the specifications are visible by default
	/*$("#photos").fadeOut("fast");
	$("#features").fadeOut("fast");*/
	$("#photos").hide();
	$("#features").hide();
	$("li.specifications").css("background-color", "#009966");
	
	
	
	$(".sub-menu li").hover(function(e) {
        $(this).css("background-color", "#009966");
		$(".sub-menu li").not(this).css("background-color", "#1288e6");
		
		
		//$(".sub-menu").css("border-bottom", "2px solid #009966");
    });
	
	$("li.specifications").hover(function(e) {
       /* $("#photos").fadeOut('fast');
		$("#features").fadeOut('fast');
		$("#specifications").fadeIn('slow');
		*/
		
		$("#photos").hide();
		$("#features").hide();
		$("#specifications").show();
    });
	
	$("li.photos").hover(function(e) {
       /* $("#specifications").fadeOut('fast');
		$("#features").fadeOut('fast');
		$("#photos").fadeIn('slow');
		*/
		
		$("#specifications").hide();
		$("#features").hide();
		$("#photos").show();
		
    });
	
	$("li.features").hover(function(e) {
       /* $("#specifications").fadeOut('fast');
		$("#photos").fadeOut('fast');
		$("#features").fadeIn('slow'); */
		
		$("#specifications").hide();
		$("#photos").hide();
		$("#features").show();
    });
	
}

/*---------------------------------------------------------------------------------------------
						   ******** Map application function ***********
-----------------------------------------------------------------------------------------------*/
var maxBlinkSize = 40;
var minBlinkSize = 20;
var direction = 1;

function checkWidth(locationStr)
{
	locationDiv = "#" + locationStr;
	
	var widthStr = $(locationDiv + " img").attr("width");
	width = parseInt(widthStr);
	
	return width;	
}

function BucBlink()
{
	var width = checkWidth("Buc");
	
	if(width <= minBlinkSize)
	{
		direction = 1;
	}
	
	if(width >= maxBlinkSize)
	{
		direction = -1;	
	}
	
	if(direction == 1)
	{
		incrBlink("Buc");		
	}
	else
	{
		decrBlink("Buc");
	}
	
	
	setTimeout(BucBlink, 80);
}

function ParisBlink()
{
	var width = checkWidth("Paris");
	
	if(width <= minBlinkSize)
	{
		direction = 1;
	}
	
	if(width >= maxBlinkSize)
	{
		direction = -1;	
	}
	
	if(direction == 1)
	{
		incrBlink("Paris");		
	}
	else
	{
		decrBlink("Paris");
	}
	
	
	setTimeout(ParisBlink, 80);
}

function AkronBlink()
{
	var width = checkWidth("Akron");
	
	if(width <= minBlinkSize)
	{
		direction = 1;
	}
	
	if(width >= maxBlinkSize)
	{
		direction = -1;	
	}
	
	if(direction == 1)
	{
		incrBlink("Akron");		
	}
	else
	{
		decrBlink("Akron");
	}
	
	
	setTimeout(AkronBlink, 80);
	
}

function CalifBlink()
{
	var width = checkWidth("Calif");
	
	if(width <= minBlinkSize)
	{
		direction = 1;
	}
	
	if(width >= maxBlinkSize)
	{
		direction = -1;	
	}
	
	if(direction == 1)
	{
		incrBlink("Calif");		
	}
	else
	{
		decrBlink("Calif");
	}
	
	
	setTimeout(CalifBlink, 80);
	
} 

function decrBlink(locationStr)
{
	locationDiv = "#" + locationStr;
	
	var widthStr = $(locationDiv + " img").attr("width");
	width = parseInt(widthStr);
	width -= 2;	//add 2 pixels
	
	var heightStr = $(locationDiv + " img").attr("width");
	height = parseInt(widthStr);
	height -= 2;	//add 2 pixels
	
	//rearrange the top and left margins so the dot will not leave the impresion that it's leaving its place
	var topStr = $(locationDiv).css("top");
	topN = parseInt(topStr);
	topN += 1;
	
	var leftStr = $(locationDiv).css("left");
	leftN = parseInt(leftStr);
	leftN += 1;
	
	$(locationDiv + " img").attr("width", width+"px").attr("height", height+"px");
	$(locationDiv).css({"top" : topN + "px", "left" : leftN +"px"});
	
}

function incrBlink(locationStr)
{
	locationDiv = "#" + locationStr;
	
	var widthStr = $(locationDiv + " img").attr("width");
	width = parseInt(widthStr);
	width += 2;	//add 2 pixels
	
	var heightStr = $(locationDiv + " img").attr("width");
	height = parseInt(widthStr);
	height += 2;	//add 2 pixels
	
	//rearrange the top and left margins so the dot will not leave the impresion that it's leaving its place
	var topStr = $(locationDiv).css("top");
	topN = parseInt(topStr);
	topN -= 1;
	
	var leftStr = $(locationDiv).css("left");
	leftN = parseInt(leftStr);
	leftN -= 1;
	
	$(locationDiv + " img").attr("width", width+"px").attr("height", height+"px");
	$(locationDiv).css({"top" : topN + "px", "left" : leftN +"px"});
	
}

function hideInfoBox()
{
	$("#info-box-map").fadeOut(5000);	
}

var flagAkron = 0;
var flagBuc = 0;
var flagParis = 0;
var flagCalif = 0;

function initMap()
{
	//IE 10 hack
	if (/*@cc_on!@*/false) 
	{
		$("#world-map").css("margin-top", "70px");
				

		$(".global-ro-1").removeClass("global-ro-1").addClass("global-ro-1-IE");
		$(".global-fra-1").removeClass("global-fra-1").addClass("global-fra-1-IE");
		$(".global-de-1").removeClass("global-de-1").addClass("global-de-1-IE");
		$(".global-spa-1").removeClass("global-spa-1").addClass("global-spa-1-IE");
		$(".global-it-1").removeClass("global-it-1").addClass("global-it-1-IE");
	}
	
	AkronBlink();
	ParisBlink();
	BucBlink();
	CalifBlink();
	
	setInterval( hideInfoBox, 3000);
	
	//---------------------------------### Calif ###-------------------------------------------------------
		$("#Calif").hover(function(){$("#Calif img").attr("src", "Images/Icons/map-dot-green.png"); $(this).css("cursor", "pointer");	}, function(){$("#Calif img").attr("src", "Images/Icons/map-dot-red.png");/*$("#Akron-info").stop().slideUp(500);*/});
		
		$("#Calif").click(function() {
		if(flagCalif == 0)
		{
			//first close the other popups (if they are open)
			if($("#Buc-info").css("display") == "block")
			{
				$("#Buc-info").fadeOut(500, function() {
						$("#Calif-info").stop().fadeIn(500);
		    	
		    			flagCalif = 1;
				});
			}
			else if($("#Paris-info").css("display") == "block")
			{
				$("#Paris-info").fadeOut(500, function (){
						$("#Calif-info").stop().fadeIn(500);
		    	
		    			flagCalif = 1;
				});
			}
			else if($("#Akron-info").css("display") == "block")
			{
				$("#Akron-info").fadeOut(500, function (){
						$("#Calif-info").stop().fadeIn(500);
		    	
		    			flagCalif = 1;
				});
			}
			else
			{
				
				
				$("#Calif-info").stop().fadeIn(500);
		    	
		    	flagCalif = 1;
			}
			
		}
		else
		{
			
			
			$("#Calif-info").stop().fadeOut(500);
						
			flagCalif = 0;
		}
	});	
	
	$("#Calif-info div.x img").click(function() {
		
			$("#Calif-info").stop().fadeOut(500);
			
			flagCalif = 0;
		
	});	
	
	$("#Calif-info div.x").hover(function(){$("#Calif-info div.x img").attr("src", "Images/Icons/Exit_x_yellow.png"); $("#Calif-info div.x img").css("cursor", "pointer");}, function(){$("#Calif-info div.x img").attr("src", "Images/Icons/Exit_x_black.png")});
		
	//---------------------------------### Akron ###-------------------------------------------------------
	$("#Akron").hover(function(){$("#Akron img").attr("src", "Images/Icons/map-dot-green.png"); $(this).css("cursor", "pointer");	}, function(){$("#Akron img").attr("src", "Images/Icons/map-dot-red.png");/*$("#Akron-info").stop().slideUp(500);*/});
	
	$("#Akron").click(function() {
		if(flagAkron == 0)
		{
			//first close the other popups (if they are open)
			if($("#Buc-info").css("display") == "block")
			{
				$("#Buc-info").fadeOut(500, function() {
						$("#Akron-info").stop().fadeIn(500);
		    			
		    			flagAkron = 1;	
				});
			}
			else if($("#Calif-info").css("display") == "block")
			{
				$("#Calif-info").fadeOut(500, function (){
						$("#Akron-info").stop().fadeIn(500);
		    			
		    			flagAkron = 1;
				});
			}
			else if($("#Paris-info").css("display") == "block")
			{
				$("#Paris-info").fadeOut(500, function (){
						$("#Akron-info").stop().fadeIn(500);
		    			
		    			flagAkron = 1;
				});
			}
			else
			{
				
				
				$("#Akron-info").stop().fadeIn(500);
		    	
				
				
		    	flagAkron = 1;
			}
			
		}
		else
		{
			
			
			$("#Akron-info").stop().fadeOut(500);
			
						
			flagAkron = 0;
		}
	});	
	
	$("#Akron-info div.x img").click(function() {
		
			$("#Akron-info").stop().fadeOut(500);
			
			flagAkron = 0;
		
	});	
	
	
	
	$("#Akron-info div.x").hover(function(){$("#Akron-info div.x img").attr("src", "Images/Icons/Exit_x_yellow.png"); $("#Akron-info div.x img").css("cursor", "pointer");}, function(){$("#Akron-info div.x img").attr("src", "Images/Icons/Exit_x_black.png")});
	
	
	
	
	//---------------------------------### Paris ###-------------------------------------------------------
	$("#Paris").hover(function(){$("#Paris img").attr("src", "Images/Icons/map-dot-green.png");	 $(this).css("cursor", "pointer")}, function(){$("#Paris img").attr("src", "Images/Icons/map-dot-red.png");});
	
	$("#Paris").click(function() {
		if(flagParis == 0)
		{
			//first close the other popus (if they are open)
			if($("#Buc-info").css("display") == "block")
			{
				$("#Buc-info").fadeOut(500, function() {
						$("#Paris-info").stop().fadeIn(500);
			
						flagParis = 1;
				});
			}
			else if($("#Calif-info").css("display") == "block")
			{
				
				$("#Calif-info").fadeOut(500, function (){
						$("#Paris-info").stop().fadeIn(500);
			
						flagParis = 1;
				});
			}
			else if($("#Akron-info").css("display") == "block")
			{
				
				$("#Akron-info").fadeOut(500, function (){
						$("#Paris-info").stop().fadeIn(500);
			
						flagParis = 1;
				});
			}
			else
			{
				$("#Paris-info").stop().fadeIn(500);
			
				flagParis = 1;
			}
			
		}
		else
		{
			$("#Paris-info").stop().fadeOut(500);
			
			flagParis = 0;
		}
	});	
	
	$("#Paris-info div.x img").click(function() {
		
			$("#Paris-info").stop().fadeOut(500);
			
			flagParis = 0;
		
	});	
	
	
	
	$("#Paris-info div.x").hover(function(){$("#Paris-info div.x img").attr("src", "Images/Icons/Exit_x_yellow.png"); $("#Paris-info div.x img").css("cursor", "pointer");}, function(){$("#Paris-info div.x img").attr("src", "Images/Icons/Exit_x_black.png")});

	
	//---------------------------------### Buc ###-------------------------------------------------------
	$("#Buc").hover(function(){$("#Buc img").attr("src", "Images/Icons/map-dot-green.png"); $(this).css("cursor", "pointer");	}, function(){$("#Buc img").attr("src", "Images/Icons/map-dot-red.png");/*$("#Akron-info").stop().slideUp(500);*/});
	
	
	
	$("#Buc").click(function() {
		if(flagBuc == 0)
		{
			//first close the other popus (if they are open)
			if($("#Akron-info").css("display") == "block")
			{
				$("#Akron-info").fadeOut(500);
				$("#Akron-info2").fadeOut(500, function() {
						$("#Buc-info").stop().fadeIn(500);
			
						flagBuc = 1;
				});
			}
			else if($("#Calif-info").css("display") == "block")
			{
				
				$("#Calif-info").fadeOut(500, function (){
						$("#Buc-info").stop().fadeIn(500);
			
						flagBuc = 1;
				});
			}
			else if($("#Paris-info").css("display") == "block")
			{
				
				$("#Paris-info").fadeOut(500, function (){
						$("#Buc-info").stop().fadeIn(500);
			
						flagBuc = 1;
				});
			}
			else
			{
				$("#Buc-info").stop().fadeIn(500);
			
				flagBuc = 1;
			
			}
			
		}
		else
		{
			$("#Buc-info").stop().fadeOut(500);
			
			flagBuc = 0;
		}
	});	
	
	$("#Buc-info div.x img").click(function() {
		
			$("#Buc-info").stop().fadeOut(500);
			
			flagBuc = 0;
		
	});	
	
	
	
	$("#Buc-info div.x").hover(function(){$("#Buc-info div.x img").attr("src", "Images/Icons/Exit_x_yellow.png"); $("#Buc-info div.x img").css("cursor", "pointer");}, function(){$("#Buc-info div.x img").attr("src", "Images/Icons/Exit_x_black.png")});

}	// end initMap()

/*--------------------------------------------------------------------------------------------------------
					********* Contact **********
----------------------------------------------------------------------------------------------------------*/
function initContact()
{
	$("#map").goMap(
	{ 
 		latitude : 44.433094,
 		longitude : 26.175533,
		zoom : 17
  });
}

/*--------------------------------------------------------------------------------------------------------
					********* NEWS ITEMS **********
----------------------------------------------------------------------------------------------------------*/

function process_news_preview(data, status)
{
	$("#newsBox").prepend(data);		
}

function process_news_list(data, status)
{
	$("#mainContent").html(data);
}

function process_news_view(data, status)
{
		$("#mainContent").html(data);
}

//picture manipulation function inside the news view
function picture_manipulate()
{
		$("#photo_landscape img").each(function(index, element) {
        var img = $(this);
		
		var imgWidth = getDisplayedWidth(img);
		var imgHeight =  getDisplayedHeight(img);
		
		if(imgWidth <= imgHeight)
		{
			$(this).parent("a").appendTo("#photo_portrait");
		}

    });	
	
	$("#photo_landscape").show();
	$("#photo_portrait").show();
}

function getDisplayedWidth(newImage)
{
		var aimgcopy = newImage.clone();
		$('#store > img').remove();
		$('#store').append(aimgcopy); 
		
		var theWidth = aimgcopy.width();
		
		return theWidth;
		
}

function getDisplayedHeight(newImage)
{
		var aimgcopy = newImage.clone();
		$('#store > img').remove();
		$('#store').append(aimgcopy); 
		
		var theHeight = aimgcopy.height();
		
		return theHeight;
		
}



/*--------------------------------------------------------------------------------------------
					******** This is actually the onload function ***********
----------------------------------------------------------------------------------------------*/
$(function(){
	refreshPage();
	
	preloadBackPictures();
	
	changeHomeBackground();
	
	//...and set the behaviour for when clicking on the "Read more" link
	$("#newsBox a.view_news").click(function()
		{
			var href = $(this).attr('href');
			var querystring = href.slice(href.indexOf('?')+1);
			$.get('news_view_web.php', querystring, process_news_view);
			
			return false;	
		});
	
	//initPhotoGallery()
	//initContact();
	//initMap();
})