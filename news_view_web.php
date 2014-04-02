<?php
$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

if(isset($_GET['id']))
{
	$id = $_GET['id'];
}
else
{
	$id = 1;	
}

	$index = $_GET['index'];

	//make the selection query 
	$query = 'SELECT * FROM news WHERE news_id='.$id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	
	$row = mysql_fetch_assoc($result);

?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<script type="text/javascript">
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

$(function()
{
	picture_manipulate();
	
	$("a#news_list").click(function()
	{
		var href = $(this).attr('href');
 		var querystring = href.slice(href.indexOf('?')+1);
 		$.get('news_list.php', querystring, process_news_list);
		
		return false;	
	})
	
	/* IE 10 Hack */
	if (/*@cc_on!@*/false) 
	{
		$("#sub-mainContent").css("height", "92%");
		//$("#sub-mainContent").css("margin-top", "0px");
		$("#sub-mainContent_News").css("height", "590px");
	}
});
</script>
</head>

<body>
<div id="store"></div>

	 <ul class="sub-menu">
            	<li class="twoSubMenus specifications"> <div class="adjustable-sub-div" >  </div></li>
                <li class="twoSubMenus photos"> <div class="adjustable-sub-div">  </div> </li>
            </ul>

<div id="sub-mainContent_News">
         
        
            	
        <div id="news_item_container">
             <h1><?php echo $row['news_title']; ?></h1> 
              <?php
			  	/*if($row['news_thumb'] !==  NULL)
				{
					$path = "News Images/".$row['news_thumb'];	
					
					echo '<img class="main_thumb" src="'.$path.'" />';
				}
				*/
			  ?>
                           
            <div class="content">
              <?php echo $row['news_body']; ?> 
            </div>	<!-- /.content -->
                          
                          
           <div id="photo_landscape" style="text-align: center">
           		<?php
					$query = 'SELECT * FROM photos WHERE photos_newsid='.$id;
					$result = mysql_query($query, $db) or die (mysql_error($db));   
					
					 while ($row = mysql_fetch_assoc($result)) 
    		{
				?>	                  
                                 <a href="News Images/<?php echo $row['photos_filename']; ?>" rel="gallery" title="Press #1"> <img src="News Images/<?php echo $row['photos_filename']; ?>" /> </a>
                                 
     
      <?php } ?>
           </div>
           </br>
           <div id="photo_portrait" style="text-align: center">
                              
           </div>
             <p style="margin-bottom: 20px; padding-bottom: 20px; text-align: center"> <a id="news_list" href="news_list.php?index=<?php echo $index; ?>"> GO BACK </a></p>   
                
              </div>	<!-- /#news_item_container -->
            
</div> <!-- /sub-mainContent -->

</body>
</html>