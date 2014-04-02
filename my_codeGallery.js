// JavaScript Document
var clickOnImage = function()
					  {
							var source = $(this).attr("src");
								
								
							$("#imagine").css("background-image", "url(" + source + ")");
									
							$("#zoomedPic").slideDown(1000, function () { $("#imagine").fadeIn(1000);	});	
							
							$("img.gallery").unbind("click");	
							
							//store the index in the curIndex variable
							curIndex = $(this).index();	
					  };
					  
var images = new Array();	//an array containing images objects for the gallery

var curIndex = -1;

					  
/*==============================================================================================
						*** FUNCTIONS ***
================================================================================================*/
function preload() {
	for (i = 0; i < preload.arguments.length; i++) 
	{
					images[i] = new Image();
					images[i].src = preload.arguments[i];
	}
}

function preload(core, n)
{
	for(i = 0; i < n; i++)
	{
		images[i] = new Image();
		images[i].src = core + (i+1) + ".jpg";	
		
	   
	}
	
	var galleryArray = $("img.gallery").get();
	for(i = 0; i < galleryArray.length; i++)
	{
	   galleryArray[i].src = images[i].src;
	}
}

function incr(i)
{
	i += 1;
	if(i >= images.length)
	return 0;
	else
	return i;	
}

function decr(i)
{
	i -= 1;
	if(i < 0)
	return (images.length - 1);
	else
	return i;	
}

/*==============================================================================================
						*** ON LOAD FUNCTION ***
================================================================================================*/

$(function() 	
				  {
					
						
				   });
				   
				   