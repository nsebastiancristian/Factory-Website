// JavaScript Document
var speed = 6;	//speed with which the pictures move within the scroller
var fps = 20;	//frames per second
var interval = Math.round(1000/fps);
var repetition = null;	//this will hold the setInterval() animation and will be used to stop the animation
	
var $selImages = $("#photo-gallery-box div.scroller img");

var images = new Array();	//an array containing images objects for the gallery

//in order to calculate the width
var scrollerWidth = 0;
var picsTailLength = 0;
var marginWidth = -1;
var x = -1; 	// the difference between the scrollerbox width and the length of the tail of pictures
var mainDisplayWidth = -1;
var mainDisplayHeight = -1;
var displayImgWidth = 650;
var displayImgHeight = 320;
var galleryBoxWidth = -1;
var galleryBoxHeight = -1;

var superSpeedCount = 0;			
var cMaxSuperSpeedCount = 10;
var superSpeed = 20;
var superSpeedFlag = 0;			//this flag is set whenever we allready clicked on one of the arrows and the purpose of it is that further clicks on the arrow will not have any effect	

/*==============================================================================================
						*** FUNCTIONS ***
================================================================================================*/
function preload() {
	count = images.length;
	
	for (i = 0; i < preload.arguments.length; i++) 
	{
			images[count] = new Image();
			images[count].src = preload.arguments[i];
			
			//increase the count
			count++;
	}
}

function preloadCore(core, n)
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

//this function appends the newly loaded images in the images array to the scrooleBox (and calculates the length of the "tail" of photos )
function appendToScrollerBox()
{
	
	
	for(i = 0; i < images.length; i++)
	{
		var newImage = $('<img src="' + images[i].src + '" />');
		
		//append the loaded image to the scroller box
		$("#photo-gallery-box div.scroller").append(newImage);
		
		//sum up the newly loaded width
		if(marginWidth == -1)
		{
			marginWidth = $("#photo-gallery-box div.scroller img").css("margin-left");
	    	marginWidth = parseInt(marginWidth);	//we need the number (get rid of the "px" suffix)
		}
		
		var w = $("#photo-gallery-box div.scroller img:last").width();
		var h = $("#photo-gallery-box div.scroller img:last").height();
		
		picsTailLength += 2 * marginWidth + w;
		//alert("The width: " + w + " , the height: " + h + " ");
	}
	
	//finally, substract 2 times the margin-left css property because we added it in the for loop and it wasn't necessary
	picsTailLength -= 2 * marginWidth;
	
	//now we need one final piece in order to prevent the tail animation from "overflowing" to the right side
	scrollerWidth = $("#photo-gallery-box div.scroller").css("width");
	scrollerWidth = parseInt(scrollerWidth);
	
	x = picsTailLength - scrollerWidth;
	x *= -1;
}

function preloadPictures()
{
	//preloading part
	preload("Images/Pics/factory4.jpg", "Images/Pics/gmx03.jpg", "Images/Pics/vtbm02.jpg");
	preloadCore("Images/Pics/hbmm0", 5);
	preloadCore("Images/Pics/factory", 4);
	preloadCore("Images/Pics/bag-o-form", 3);
	preloadCore("Images/Pics/otr-bom", 2);
	preloadCore("Images/Pics/gmx0", 4);
	preloadCore("Images/Pics/factory", 4);
	
	appendToScrollerBox();
}


/*==============================================================================================
						*** BEHAVIOUR FUNCTIONS ***
================================================================================================*/
function moveLeft()
{
	    var firstElemLeft = $("#photo-gallery-box div.scroller img:first").css("left");
		firstElemLeft = parseInt(firstElemLeft);
		
		if(firstElemLeft != 0)
		{
			$("#photo-gallery-box div.scroller img").css("left", "+=" + speed + "px");	
		}
		
}

function moveRight()
{
	    var lastElemLeft = $("#photo-gallery-box div.scroller img:last").css("left");
		lastElemLeft = parseInt(lastElemLeft);
		
		if(lastElemLeft >= x)
		{
			/*$("#photo-gallery-box div.scroller img").each(function(){$(this).css("left", "-=" + speed + "px");});
			$("#photo-gallery-box div.scroller img").each(function(){
				$(this).css("left", "-=" + speed + "px");
				var testLeft = $(this).css("left");
				console.log(testLeft);
				});
			*/
			$("#photo-gallery-box div.scroller img").css("left", "-=" + speed + "px");	
		}
		
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

function centerImageHoriz(width, height, newImage)
{
	var leftDist = (galleryBoxWidth - width)/2;
	var topDist = (galleryBoxHeight - height)/2;
	
	newImage.css({"position":"absolute" , "padding-left" : leftDist + "px", "padding-top" : topDist + "px"});
}

//this functions are used when moving the scrolling pictures with super speed (this is triggered by clicking on the arrows as opposed to just hovering on them)
function superSpeedMoveRight()
{
	   if(--superSpeedCount > 0)
	   {
			var lastElemLeft = $("#photo-gallery-box div.scroller img:last").css("left");
			lastElemLeft = parseInt(lastElemLeft);
			
			if(lastElemLeft >= x)
			{
				
				$("#photo-gallery-box div.scroller img").css("left", "-=" + superSpeed + "px");	
			}
			
			setTimeout(superSpeedMoveRight, interval);
	   }
	   else
	   {
		    superSpeedFlag = 0;  //set the flag back to the original state
	   }
}

function superSpeedMoveLeft()
{
		if(--superSpeedCount > 0)
	   {
		   var firstElemLeft = $("#photo-gallery-box div.scroller img:first").css("left");
			firstElemLeft = parseInt(firstElemLeft);
			
			if(firstElemLeft != 0)
			{
				$("#photo-gallery-box div.scroller img").css("left", "+=" + superSpeed + "px");	
			}
			
				
			setTimeout(superSpeedMoveLeft, interval);
	   }
	   else
	   {
		    superSpeedFlag = 0;  	//set the flag back to the original state
	   }
}

/*==============================================================================================
						*** INITIALIZATION FUNCTIONS ***
================================================================================================*/
function initPhotoGallery()
{
	//find out the width and height of the gallery box (we will need this latter)
	galleryBoxWidth = $("#photo-gallery-box").width();
	galleryBoxHeight = $("#photo-gallery-box div.main-display").height();
	
	//preload the pictures
	preloadPictures();
	var path = $("#photo-gallery-box div.scroller img:first").attr("src");
	$("#photo-gallery-box div.main-display img:first").attr("src", path);
	
	//...and center the default displayed image
	var imgcopy = $("#photo-gallery-box div.main-display img:first").clone();
    $('#store > img').remove();
	$('#store').append(imgcopy);
	var imgHeight = imgcopy.height();
	var imgWidth =  imgcopy.width();
	
	var dispImg = $("#photo-gallery-box div.main-display img:first");
		//... this is actually the process on centering the image but it's done for the first time (it could have been in a function as the process is basically the same ... but ... meh ... too lazy)
		//set the width and height of the new image so as to fit in the display box
		if(imgWidth <= displayImgWidth && imgHeight <= displayImgHeight)
		{
			//this is if everything is normal so don't do anything as resizing the picture programatically will probably result in a loss of clarity within the image
			centerImageHoriz(imgWidth, imgHeight, dispImg);
		}
		else
		{
			if(imgWidth >= displayImgWidth && imgHeight >= displayImgHeight)
			{
				if(imgWidth >= imgHeight)
				{
					dispImg.css("width", displayImgWidth + "px");
					
					var newHeight = getDisplayedHeight(dispImg);
					
					centerImageHoriz(displayImgWidth, newHeight, dispImg);
				}
				else
				{
					dispImg.css("height", displayImgHeight + "px");
					
					var newWidth = getDisplayedWidth(dispImg);
					
					centerImageHoriz(newWidth, displayImgHeight, dispImg);
				}
			}
			else if(imgWidth >= displayImgWidth)
			{
				dispImg.css("width", displayImgWidth + "px");
				
				var newHeight = getDisplayedHeight(dispImg);
				
				centerImageHoriz(displayImgWidth, newHeight, dispImg);
			}
			else
			{
				dispImg.css("height", displayImgHeight + "px");
				
				var newWidth = getDisplayedWidth(dispImg);
				
				
				centerImageHoriz(newWidth, displayImgHeight, dispImg);
			}
			
			
		}
	
	
	
	
	//move the gallery photos to the right when hovering with mouse
	$("#photo-gallery-box div.right-arrow").hover(function (){
				$("#photo-gallery-box div.right-arrow img").attr("src", "Images/Icons/Photogallery_Arrow_right_highlighted.png");
				
				repetition = setInterval(function(){ moveRight();}, interval);
				
			}, function(){
				$("#photo-gallery-box div.right-arrow img").attr("src", "Images/Icons/Photogallery_Arrow_right.png");
				repetition = clearInterval(repetition);
			});
			
	$("#photo-gallery-box div.right-arrow").click(function(){
			if(superSpeedFlag == 0)
			{
				superSpeedCount = cMaxSuperSpeedCount;
				
				setTimeout(superSpeedMoveRight, interval);
			}
			
			return false;
		});		
	
	//move gallery photos to the left when hovering with mouse
	$("#photo-gallery-box div.left-arrow").hover(function (){
			    $("#photo-gallery-box div.left-arrow img").attr("src", "Images/Icons/Photogallery_Arrow_left_highlighted.png");
				
				repetition = setInterval(function(){ moveLeft();}, interval);
			}, function(){
				$("#photo-gallery-box div.left-arrow img").attr("src", "Images/Icons/Photogallery_Arrow_left.png");
				repetition = clearInterval(repetition);
			});
			
			//set a thin "default" border around the scroller images
			$("#photo-gallery-box div.scroller img").css("border", "1px solid");
			$("#photo-gallery-box div.scroller img").css("border-color", "#92cdfb");
			
	$("#photo-gallery-box div.scroller img").hover(function(){
			$(this).css("border-color", "red");
		}, function() {
				$(this).css("border-color", "#92cdfb");
			});
	
	$("#photo-gallery-box div.left-arrow").click(function(){
			if(superSpeedFlag == 0)
			{
				superSpeedCount = cMaxSuperSpeedCount;
				
				setTimeout(superSpeedMoveLeft, interval);
			}
			return false;
		});
	
	
	//when clicking on a image on the scroller something awsome will happen ... (not really :p )		
	$("#photo-gallery-box div.scroller img").click(function()
	{
		// Copy the image, and insert it in an offscreen DIV
		var aimgcopy = $(this).clone();
		$('#store > img').remove();
		$('#store').append(aimgcopy);

		// Remove the height and width attributes
		aimgcopy.removeAttr('height');
		aimgcopy.removeAttr('width');

		// Now the image copy has its "original" height and width
		var imgHeight = aimgcopy.height();
		var imgWidth =  aimgcopy.width();
				
		
		
		var imgPath = $(this).attr('src');
        var oldImage = $('#photo-gallery-box div.main-display img');
        var newImage = $('<img src="' + imgPath +'">');
		
		 newImage.hide();
		
		//set the width and height of the new image so as to fit in the display box
		if(imgWidth <= displayImgWidth && imgHeight <= displayImgHeight)
		{
			//this is if everything is normal so don't do anything as resizing the picture programatically will probably result in a loss of clarity within the image
			centerImageHoriz(imgWidth, imgHeight, newImage);
		}
		else
		{
			if(imgWidth >= displayImgWidth && imgHeight >= displayImgHeight)
			{
				if(imgWidth >= imgHeight)
				{
					newImage.css("width", displayImgWidth + "px");
					
					var newHeight = getDisplayedHeight(newImage);
					
					centerImageHoriz(displayImgWidth, newHeight, newImage);
				}
				else
				{
					newImage.css("height", displayImgHeight + "px");
					
					var newWidth = getDisplayedWidth(newImage);
					
					centerImageHoriz(newWidth, displayImgHeight, newImage);
				}
			}
			else if(imgWidth >= displayImgWidth)
			{
				newImage.css("width", displayImgWidth + "px");
				
				var newHeight = getDisplayedHeight(newImage);
				
				centerImageHoriz(displayImgWidth, newHeight, newImage);
			}
			else
			{
				newImage.css("height", displayImgHeight + "px");
				
				var newWidth = getDisplayedWidth(newImage);
				
				
				centerImageHoriz(newWidth, displayImgHeight, newImage);
			}
			
			
		}
		
		//newImage.css("margin-top", "auto");
		//newImage.css("margin-left", "auto");
	
		
       
        $('#photo-gallery-box div.main-display').prepend(newImage);
		//centerImageHoriz(displayImgWidth, newImage);
        newImage.fadeIn(1000);
		oldImage.fadeOut(1000,function(){
        $(this).remove();
		});
	});
	
}