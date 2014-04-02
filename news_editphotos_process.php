<?php
include 'auth_inc.php';
?>

<?php
$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

if(isset($_POST['id']))
{
	$news_id = $_POST['id'];
}
else
{
	$news_id = 1;	
}


function alert($str)
{
		echo '<script type="text/javascript"> alert("'.$str.'"); </script>';
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Finish editing photos</title>

<link href="form.css" rel="stylesheet" type="text/css" />

</head>

<body>
<div id="left-col">
	<div class="wrapper">
<?php
	
	/*
	echo "<pre>";
	print_r($_POST);
	echo "</pre>";
	*/
	
	$query = 'SELECT * FROM news WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	$row = mysql_fetch_assoc($result);
	
	if($row['news_thumb'] !== NULL)
	{
		$thumbfile = $row['news_thumb'];		
	}
	else
	{
		$thumbfile = "";
	}
	
	$thumb_message = "No image thumbnail was created.";	//this is a message that will be displayed in the end saying that creating a filename was a succes or a fail
	
	//check to see that the thumbnail that the user has set is different from the thumbnail in the database
	if($_POST['thumbn'] != $thumbfile)
	{
		//delete local thumb file from the hard disk
		if($thumbfile != "")
		{
			unlink(dirname(__FILE__) . "/thumbs/" . $thumbfile);	
		}
		
		
		//delete news_thumb from news table
		$query = 'UPDATE news SET news_thumb=NULL WHERE news_id='.$news_id;
		$result = mysql_query($query, $db) or die (mysql_error($db));
	}
			
	$query = 'SELECT * FROM photos WHERE photos_newsid='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
		
	 while ($row = mysql_fetch_assoc($result)) 
	{
		//alert($row['photos_filename']);
		
		//check to see if we need to delete and/or create a new thumbnail
		if($_POST['thumbn'] != $thumbfile)
		{
			if($row['photos_filename'] == $_POST['thumbn'])
			{
				//create the thumbnail
				$dir = dirname(__FILE__) . "/News Images/";
				$thumbdir = dirname(__FILE__) . "/thumbs/";
				
				//get info about the image being uploaded
				list($width, $height, $type, $attr) = getimagesize($dir . $row['photos_filename']);
				
				if($width > $height)
				{
					$image = imagecreatefromjpeg($dir . $row['photos_filename']) or die('Could not create the image');	
					
					//set the dimensions of the thumbnail
					$thumb_width = $width * 0.10;
					$thumb_height = $height * 0.10;
					
					//create the thumbnail
					$thumb = imagecreatetruecolor($thumb_width, $thumb_height);
					imagecopyresampled($thumb, $image, 0, 0, 0, 0, $thumb_width, $thumb_height, $width, $height);
					imagejpeg($thumb, $thumbdir . '/' . $row['photos_filename'], 100);
					imagedestroy($thumb);
					imagedestroy($image);
					
					$thumb_message = "The thumbnail <b>".$_POST['thumbn']."</b> was created.";
					
					//update the news database with the new name of the thumbnail
					$query = 'UPDATE news SET news_thumb="'.$_POST['thumbn'].'" WHERE news_id='.$news_id;
					$result2 = mysql_query($query, $db) or die (mysql_error($db));
					
				}
				else
				{
					$thumb_message = "The thumbnail was not created because the format of the image selected was not landscape";	
				}
			}
		}
		
		
		//replace the complete name of the file ex: "56.jpg" becomes just "56"
		$new_val = str_replace(".jpg", "", $row['photos_filename']);
		
		
		//.. check to see that the file needs to be deleted
		if(isset($_POST[$new_val]))
		{		
			if ($_POST[$new_val] == "on") 
			{
				
				// delete the local file from the harddisk
				unlink(dirname(__FILE__) . "/News Images/" . $row['photos_filename']);
				
				//delete data from the photos table in the database
				$query = 'DELETE FROM photos WHERE photos_filename="'.$row['photos_filename'].'"';
				$result3 = mysql_query($query, $db) or die (mysql_error($db));
				
				echo "<p>  The image <b>".$row['photos_filename']."</b> was deleted! </p>";
			}
			else
			{
				echo "<p>  The image <b>".$row['photos_filename']."</b> has not been set! </p>";
			}
		}
	}
	
	echo "<p>".$thumb_message."</p>";
?>
	</div> <!-- /wrapper -->
</div> <!-- /left-col -->

<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="form_add.php"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php"> LIST NEWS </a> </li>
    </ul>
</div> <!-- /right-col --> 

</body>
</html>