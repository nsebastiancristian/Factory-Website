// JavaScript Document

/*--------------------------------------------------------------------------
				~~~ THE SET OF IMAGES ~~~
  --------------------------------------------------------------------------*/
var backHomeIm = new Array();		//array containing images for the Home Page 
var backHomeImBack = new Array();

var backImages = new Array();	//an array containing images objects for the gallery
var backImages2 = new Array();
var backImage_Yared_Group = new Array();
var backImage_Contact = new Array();
var backImage_TMG_Factory = new Array();
var backImage_TEN = new Array();
var backImage_Contract_Manuf = new Array();
var backImage_MTools = new Array();

var type_of_stripe_anim = 0;

var hs_west_east = 1;
var vs_top_down = 1;

var i = 0;

/*--------------------------------------------------------------------------
				~~~ GENERAL PURPOSE VARIABLES ~~~
  --------------------------------------------------------------------------*/
var backAnimation = null;
var index = 0;	//the index for the image array that is currently swapped
var curImgArray = null; //the current image array that is to be animated


//-------------------------------for the homepage background--------------------
var indexHomePage = 0;
var backHomeAnimation = null;

var numVariants = 3;	//the number of variants for the homepage background

var topBarColors = new Array("#FF0000","#009900","#0033FF");		//array holding the topbar colors
var colorIdx = 0;
/*--------------------------------------------------------------------------
				~~~ PRELOADING FUNCTIONS ~~~
  --------------------------------------------------------------------------*/
function preloadBack(images) {
	count = images.length;
	
	for (i = 1; i < preloadBack.arguments.length; i++) 
	{
			images[count] = new Image();
			images[count].src = preloadBack.arguments[i];
			
			//increase the count
			count++;
	}
}

function preloadCoreBack(core, n, images)
{
	count = images.length;
	
	for(i = 0; i < n; i++)
	{
		images[count] = new Image();
		images[count].src = core + (i+1) + ".jpg";	
		
		//increase the count
		count++;
	}
}

function preloadBackPictures()
{
	//preload the home page image array first
	var randomnumber=Math.floor(Math.random()*numVariants);
	//alert("the number is "  + randomnumber);
	
	preloadBack(backHomeIm,  "Images/Background Images/home_page_0" + randomnumber + "_a.jpg",  "Images/Background Images/home_page_0" + randomnumber + "_b.jpg", "Images/Background Images/home_page_0" + randomnumber + "_c.jpg");
	preloadBack(backHomeImBack, "Images/Background Images/home_page_0" + randomnumber + ".jpg"); 
	
	//preload the other pages image array
	preloadBack(backImages, "Images/Background Images/test_background_blue.jpg", "Images/Background Images/test_background_green.jpg", "Images/Background Images/test_background_red.jpg");
	preloadBack(backImages2, "Images/Background Images/test_background_black-n-white.jpg", "Images/Background Images/test_background_red.jpg");
	preloadBack(backImage_Yared_Group, "Images/Background Images/yared_group_page_01.jpg", "Images/Background Images/yared_group_page_02.jpg", "Images/Background Images/yared_group_page_03.jpg" );
	preloadBack( backImage_Contact, "Images/Background Images/contact_page_01.jpg", "Images/Background Images/contact_page_02.jpg");
	preloadBack( backImage_TMG_Factory, "Images/Background Images/tmg_factory_page_01.jpg", "Images/Background Images/tmg_factory_page_02.jpg" );
	preloadBack( backImage_TEN, "Images/Background Images/ten_page_01.jpg", "Images/Background Images/ten_page_02.jpg" );
	preloadBack( backImage_Contract_Manuf, "Images/Background Images/contract_manuf_page_01.jpg", "Images/Background Images/contract_manuf_page_02.jpg", "Images/Background Images/contract_manuf_page_03.jpg", "Images/Background Images/contract_manuf_page_04.jpg", "Images/Background Images/contract_manuf_page_05.jpg");
	
	preloadBack( backImage_MTools, "Images/Background Images/machine_tools_page_01.jpg", "Images/Background Images/machine_tools_page_02.jpg", "Images/Background Images/machine_tools_page_03.jpg");
}

/*--------------------------------------------------------------------------------------------------------
									~~~ BEHAVIOUR FUNCTIONS ~~~
  --------------------------------------------------------------------------------------------------------*/
function resetStripeCSSVals()
{
	console.log("--------------- We now reset css values --------------------------");
	
	var floatvalue = Math.random();
	type_of_stripe_anim = Math.floor( floatvalue * 100);
	
	type_of_stripe_anim = type_of_stripe_anim  % 2;
		
	if(type_of_stripe_anim == 0)
	{
		//animation with 3 stripes (2 horizontal and 1 vertical)
		console.log("- reset css values for 3 stripes animation");
		
		var sh_fl_height = Math.random();
		var sh_int_height = 50 + Math.floor( sh_fl_height * 100);
		
		var sh_fl_top = Math.random();
		var sh_int_top =  Math.floor( sh_fl_top * 292);
		
		if((sh_int_top + sh_int_height) >= 292 )
		{
			sh_int_top = 292 - sh_int_height;
		}
		
		var sv_fl_width = Math.random();
		var sv_int_width = 75 + Math.floor( sv_fl_width * 250);
		
		var sv_fl_left = Math.random();
		var sv_int_left = Math.floor( sv_fl_left * 802);
		
		if((sv_int_left + sv_int_width) >= 802 )
		{
			sv_int_left = 802 - sv_int_width;
		}
	
		var opacity_horiz = 0.2 + 0.4 * Math.random();
		var opacity_vert = 0.2 + 0.4 * Math.random();
		
		$("#stripe-horizontal").css({top: sh_int_top+"px", left: "0px", width : "0px", height: sh_int_height+"px", opacity : opacity_horiz+"", display: "block"});
		$("#stripe-vertical").css({top: "0px", left: sv_int_left+"px", width : sv_int_width+"px", height: "0px", opacity : opacity_vert+"", display: "block"});
		
	
		if((sh_fl_top + sh_fl_height) <= 145)
		{
			
			var sh_fl_height2 = Math.random();
			var sh_int_height2 = sh_fl_top + sh_fl_height + 50 + Math.floor( sh_fl_height2 * 50);
			
			var sh_fl_top2 = Math.random();
			var sh_int_top2 = sh_int_top + sh_int_height + 50 +  Math.floor( sh_fl_top2 * 25);
				
			if((sh_int_top2 + sh_int_height2) >= 292 )
			{
				sh_int_top2 = 292 - sh_int_height2;
			}
			
			$("#stripe-horizontal2").css({top: sh_int_top2+"px", left: "802px", width : "0px", height: sh_int_height2+"px", opacity : opacity_horiz+"", display: "block"});
		}
		else
		{
			$("#stripe-horizontal2").css({top: "0px", left: "802px", width : "0px", height: "0px", opacity : opacity_horiz+"", display: "block"});	
		}	
	}
	else
	{	//===================================================================
		//animation with 2 stripes (1 horizontal and 1 vertical)
		//===================================================================
		console.log("- reset css values for 2 stripes animation");
		
		var opacity = 0.2 + 0.4 * Math.random();
		
		//HORIZONTAL STRIPE
		var sh2_fl_height = Math.random();
		var sh2_int_height = 50 + Math.floor( sh2_fl_height * 100);
		
		//choose the direction (east-west or west-east)
		var floatvalue = Math.random();
		var choice = Math.floor( floatvalue * 100);
		
		if(choice % 2 == 0)
		{
			hs_west_east = 1;	
		}
		else
		{
			hs_west_east = 0;
		}
		
		//choose where to animate the horizontal stripe (top of bottom)
		floatvalue = Math.random();
		choice = Math.floor( floatvalue * 100);
			
		if(choice % 2 == 0)
		{
			//top
			if(hs_west_east == 1)
			{
				$("#stripe2-horizontal").css({top: "0px", left: "0px", width : "0px", height: sh2_int_height+"px", opacity : opacity+"", display: "block"});
			}
			else
			{
				$("#stripe2-horizontal").css({top: "0px", left: "802px", width : "0px", height: sh2_int_height+"px", opacity : opacity+"", display: "block"});
			}
		}
		else
		{
			//bottom
			if(hs_west_east == 1)
			{
				$("#stripe2-horizontal").css({top: (292 - sh2_int_height) + "px", left: "0px", width : "0px", height: sh2_int_height+"px", opacity : opacity+"", display: "block"});
			}
			else
			{
				$("#stripe2-horizontal").css({top: (292 - sh2_int_height) + "px", left: "802px", width : "0px", height: sh2_int_height+"px", opacity : opacity+"", display: "block"});
			}
		}
		
		//VERTICAL STRIPE
		var sv2_fl_width = Math.random();
		var sv2_int_width = 100 + Math.floor( sv2_fl_width * 100);
		
		//choose the direction (top-down or down-top)
		floatvalue = Math.random();
		choice = Math.floor( floatvalue * 100);
		
		if(choice % 2 == 0)
		{
			vs_top_down = 1;	
		}
		else
		{
			vs_top_down = 0;
		}	
		
		console.log("hs_west_east = " + hs_west_east + ", vs_top_down = " + vs_top_down);
		
		//choose where to animate the horizontal stripe (east or west)
		floatvalue = Math.random();
		choice = Math.floor( floatvalue * 100);
		
		if(choice % 2 == 0)
		{
			//west	
			if(vs_top_down == 1)
			{
				$("#stripe2-vertical").css({top: "0px", left: "0px", width : sv2_int_width + "px", height: "0px", opacity : opacity+"", display: "block"});
			}
			else
			{
				$("#stripe2-vertical").css({top: "292px", left: "0px", width : sv2_int_width + "px", height: "0px", opacity : opacity+"", display: "block"});
			}
		}
		else
		{
			//east
			if(vs_top_down == 1)
			{
				$("#stripe2-vertical").css({top: "0px", left: (802 - sv2_int_width ) + "px", width : sv2_int_width + "px", height: "0px", opacity : opacity+"", display: "block"});
			}
			else
			{
				$("#stripe2-vertical").css({top: "292px", left: (802 - sv2_int_width ) + "px", width : sv2_int_width + "px", height: "0px", opacity : opacity+"", display: "block"});
			}
		}
		
		
	}
	
}

function hideStripes()
{
	$("#stripe-horizontal").css({display: "none"});
	$("#stripe-vertical").css({display: "none"});
	$("#stripe-horizontal2").css({display: "none"});
	$("#stripe-vertical2").css({display: "none"});
	
	$("#stripe2-horizontal").css({display: "none"});
	$("#stripe2-vertical").css({display: "none"});
}

function stopStripeAnimation()
{
	$("#stripe-horizontal").stop(true, true);
	$("#stripe-vertical").stop(true, true);
	$("#stripe-horizontal2").stop(true, true);
	$("#stripe-vertical2").stop(true, true);
	
	$("#stripe2-horizontal").stop(true, true);
	$("#stripe2-vertical").stop(true, true);
	
	resetStripeCSSVals();
}

function showStripes()
{
	
		
	resetStripeCSSVals();	
		
	if(type_of_stripe_anim == 0)
	{
		//3 stripes
		console.log(++i + " We have a 3 stripe animation now");
		
		$("#stripe-horizontal").animate({width: "802px"}, 5000);
		$("#stripe-vertical").delay(800).animate({height: "292px"}, 2000).delay(4000).animate({top: "292px", height: "0px"},1500);
		$("#stripe-horizontal").delay(4500).animate({left: "802px", width: "0px"}, 1000);
		
		
		$("#stripe-horizontal2").animate({width: "802px", left: "0px"}, 5000).delay(5500).animate({width: "0px"}, 1000);	
	}
	else
	{
		
		console.log(++i + " We have a 2 stripe animation now");
		
			if(hs_west_east == 1)
			{
				$("#stripe2-horizontal").animate({width : "802px"},4000).delay(3000).animate({left: "802px", width : "0px"},4000);
			}
			else
			{
				$("#stripe2-horizontal").animate({left : "0px", width : "802px"},4000).delay(3000).animate({width : "0px"},4000);
			}
			
			if(vs_top_down == 1)
			{
				$("#stripe2-vertical").animate({height : "292px"},4000).delay(3000).animate({top: "292px", height : "0px"},4000);
			}
			else
			{
				$("#stripe2-vertical").animate({top : "0px" , height : "292px"},4000).delay(3000).animate({top: "292px", height : "0px"},4000);
			}
	}
	//-------------------------
	
	
		
	
	
	
}


function changeBackground(imageArray)
{
	stopStripeAnimation();	//first of all we must stop and hide those animating stripes 
	
	//now let us begin...
	
	index = 0; 	//reset the index 
		
	curImgArray = imageArray;	//change the current image array with this one
	
	if(backAnimation != null)
	{
		clearInterval(backAnimation);
		backAnimation = null; 	
	}
	
	$("#mainContentPic").css("background-image", "none");
	
	if(backHomeAnimation != null)
	{
		clearInterval(backHomeAnimation);
		backHomeAnimation = null; 	
	}
	
	//change the background for the first time (this is done because we need the change the background immediately when the user clicks on the menu item (if there wasn't this we would 
	//have had to wait for the duration of the set interval specified in the setInterval() function before the background would be changed
	changeImageBground();
	
	backAnimation = setInterval(changeImageBground, 12000);
	
}

function changeImageBground()
{
		if(index == curImgArray.length)
		{
			//go back to the beginning
			index = 0;	
		}
	
		var imgPath = curImgArray[index].src;
        var oldImage = $('#mainContentPic img');
        var newImage = $('<img src="' + imgPath +'" class="back-img" />');
		
		//hide the newly created image
	    newImage.hide();
		
		 $('#mainContentPic').prepend(newImage);
		//centerImageHoriz(displayImgWidth, newImage);
        newImage.fadeIn(1500);
		oldImage.fadeOut(1000,function(){
        $(this).remove();
		});
		
		//increment the index so as to see the next picture the next time
		index++;
		
		showStripes();
}

//--------------------------------------------------------------------------------------------
//			This function is the same as changeBackground() but it's for the homepage
//--------------------------------------------------------------------------------------------
function changeHomeBackground()
{
	//stopStripeAnimation();	//first of all we must stop and hide those animating stripes 
	
	//now let us begin...
	
	$("#mainContentPic").css("background-image", "url(" + backHomeImBack[0].src + ")");
	
	indexHomePage = 0; 	//reset the index 
	colorIdx = 0; //reset the color index
		
	//curImgArray = imageArray;	//change the current image array with this one
	
	if(backHomeAnimation != null)
	{
		clearInterval(backHomeAnimation);
		backHomeAnimation = null; 	
	}
	
	//change the background for the first time (this is done because we need the change the background immediately when the user clicks on the menu item (if there wasn't this we would 
	//have had to wait for the duration of the set interval specified in the setInterval() function before the background would be changed
	changeHomeImgBground();
	
	backHomeAnimation = setInterval(changeHomeImgBground, 5000);
	
}


//--------------------------------------------------------------------------------------------
//			This function is the same as changeImageBground() but it's for the homepage
//--------------------------------------------------------------------------------------------
function changeHomeImgBground()
{
		if(indexHomePage == backHomeIm.length)
		{
			//go back to the beginning
			indexHomePage = 0;	
		}
		
		/*
		if(colorIdx == topBarColors.length)
		{
			//go back to the beginning for the color index
			colorIdx = 0;
		}
		*/
		
		//change the color for the top bar first (before doing anything else)
		//$("div.top-bar-home").css("background-color", topBarColors[colorIdx]);
		
		//change the background picture
		var imgPath = backHomeIm[indexHomePage].src;
        var oldImage = $('#mainContentPic img');
        var newImage = $('<img src="' + imgPath +'" class="back-img" />');
		
		//hide the newly created image
	    newImage.hide();
		
		 $('#mainContentPic').prepend(newImage);
		//centerImageHoriz(displayImgWidth, newImage);
        newImage.fadeIn(1500);
		oldImage.fadeOut(1000,function(){
        $(this).remove();
		});
		
		//increment the index so as to see the next picture the next time
		indexHomePage++;
		
		/*
		//increment the index for the color of the top bar
		colorIdx++;
		*/
	
}