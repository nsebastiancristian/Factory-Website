<?php
include 'auth_inc.php';
?>
<?php
$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

if(isset($_POST['news_id']))
{
	$news_id = $_POST['news_id'];
}
else
{
	$news_id = 143;	
}

/*
echo "<pre>";
print_r($_POST);
echo "</pre>";
*/

$title = $_POST['title'];
$content = $_POST['content'];

?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Edit Process Complete</title>

<link href="form.css" rel="stylesheet" type="text/css" />

</head>

<body>

<div id="left-col">
	<div class="wrapper">
<?php

	$query = 'UPDATE news SET news_title="'.$title.'", news_body="'.$content.'" WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));

	$last_id = $news_id;	//this is not really necessary but we do it because the next part of the code use $last_id instead of $news_id

	for($i = 1; $i <= 5; $i++)
	{
		$uploadfile = "uploadfile0" . $i;
		
		echo "<strong> Photo #".$i.": </strong></br>";
		
		if(isset($_FILES[$uploadfile]))
		{
			//change this path to match your images directory
			//$dir = 'C:/Program Files/Apache Software Foundation/Apache2.2/htdocs/images';	//you have to change this
			$dir = dirname(__FILE__) . "/News Images";
			$safe = true;
		
			//make sure the uploaded file transfer was successful
			if ($_FILES[$uploadfile]['error'] != UPLOAD_ERR_OK) 
			{
				switch ($_FILES[$uploadfile]['error']) 
				{
					case UPLOAD_ERR_INI_SIZE:
					die('The uploaded file exceeds the upload_max_filesize directive ' .
					'in php.ini.');
					break;
					case UPLOAD_ERR_FORM_SIZE:
					die('The uploaded file exceeds the MAX_FILE_SIZE directive that ' .
					'was specified in the HTML form.');
					break;
					case UPLOAD_ERR_PARTIAL:
					die('The uploaded file was only partially uploaded.');
					break;
					case UPLOAD_ERR_NO_FILE:
					//die('No file was uploaded.');
					echo "<p>No file was uploaded </p> ";
					$safe = false;
					break;
					case UPLOAD_ERR_NO_TMP_DIR:
					die('The server is missing a temporary folder.');
					break;
					case UPLOAD_ERR_CANT_WRITE:
					die('The server failed to write the uploaded file to disk.');
					break;
					case UPLOAD_ERR_EXTENSION:
					die('File upload stopped by extension.');
					break;
				}
			}
			
			if($safe)
			{
				//get info about the image being uploaded
				list($width, $height, $type, $attr) = getimagesize($_FILES[$uploadfile]['tmp_name']);
					
				// make sure the uploaded file is really a supported image
				switch ($type) 
				{
					case IMAGETYPE_GIF:
					$image = imagecreatefromgif($_FILES[$uploadfile]['tmp_name']) or die('The file you uploaded was not a supported filetype.');
					
					break;
					case IMAGETYPE_JPEG:
					$image = imagecreatefromjpeg($_FILES[$uploadfile]['tmp_name']) or die('The file you uploaded was not a supported filetype.');
					
					break;
					case IMAGETYPE_PNG:
					$image = imagecreatefrompng($_FILES[$uploadfile]['tmp_name']) or die('The file you uploaded was not a supported filetype.');
					
					break;
					
					default:
					die('The file you uploaded was not a supported filetype.');
				}
				
				//insert information into image table
				$query = 'INSERT INTO photos
				(photos_newsid)
				VALUES
				('.$last_id.')';
				
				$result = mysql_query($query, $db) or die (mysql_error($db));
				//retrieve the image_id that MySQL generated automatically when we inserted
				//the new record
				$last_photo_id = mysql_insert_id();
				
				//because the id is unique, we can use it as the image name as well to make 
				//sure we don’t overwrite another image that already exists
				$imagename = $last_photo_id  . '.jpg';
				
				// update the image table now that the final filename is known.
				$query = 'UPDATE photos SET photos_filename = "' . $imagename . '" WHERE photos_id = ' . $last_photo_id;
				$result = mysql_query($query, $db) or die (mysql_error($db));
				
				// save the image to its final destination	
				imagejpeg($image, $dir . '/' . $imagename);
				imagedestroy($image);
				
				echo "<p>Image uploaded succesfully!</p>";	
			}	
		}
		else
		{
			echo "<p> This field has not been set </p>";
		}
		
	}

	echo "<p> <b> The database has been updated succesfully! </b> </p></br></br>";
	echo 'Click <a <a href="form_list.php">here</a> to go back to the main page';	
?>

	</div> <!-- /wrapper -->
</div>

</div>	<!-- /left-col -->	
<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="form_add.php"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php"> LIST NEWS </a> </li>
    </ul>
</div> <!-- /right-col --> 

</body>
</html>