<?php
include 'auth_inc.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<link href="form.css" rel="stylesheet" type="text/css" />

</head>

<body>
<div id="left-col">
<?php
	
	echo '<div class="wrapper">';
	
	/*
	echo "<pre>";
	print_r($_POST);
	echo "</pre>";
	echo "<pre>";
	print_r($_GET);
	echo "</pre>";
	echo "<pre>";
	print_r($_FILES);
	echo "</pre>";
	*/

	//connect to the database
	$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or die ('Unable to connect. Check your connection parameters.');
	mysql_select_db('tmg_database', $db) or die(mysql_error($db));

	//store the values from the POST array into local variables
	$title = $_POST['title'];
	$content = $_POST['content'];
	
	$day = $_POST['day'];
	if($day <= 9)
	$day = "0".$day;
		
	$month = $_POST['month'];
	if($month <= 9)
	$month = "0".$month;
	
	$year = $_POST['year'];
	$date = $year."-".$month."-".$day;
	
	
	
	//insert into database
	if($_GET['date'] == 'auto')
	{
		$query = 'INSERT INTO
							news
							(news_title, news_body, news_date)
							VALUES
							("' . $title . '", "' . $content . '", curdate() )';
	}
	else
	{
		$query = 'INSERT INTO
							news
							(news_title, news_body, news_date)
							VALUES
							("' . $title . '", "' . $content . '", "' . $date . '")';
	}
	
	
	//!!-- UPDATE THE NEWS TABLE						
	mysql_query($query, $db) or die(mysql_error($db));
	
	echo "<p><em> Succesfully updated the database with the news item! </em></p>";
	
	//retrieve the image_id that MySQL generated automatically when we inserted the new record (we will use this later when we are going to insert info about the image in the database
	$last_id = mysql_insert_id();
	
	/*-----------------------------------------------------------------------------------
									PHOTOS 
	  -----------------------------------------------------------------------------------*/
	
	for($i = 1; $i <= 5; $i++)
	{
		$uploadfile = "uploadfile0" . $i;
		
		echo "<strong> Photo #".$i.": </strong></br>";
		
		if(isset($_FILES[$uploadfile]))
		{
			//change this path to match your images directory
			//$dir = 'C:/Program Files/Apache Software Foundation/Apache2.2/htdocs/images';	//you have to change this
			$dir = dirname(__FILE__) . "/News Images";
			$thumbdir = dirname(__FILE__) . "/thumbs";
			
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
				
				$i_str = "" + $i;
				//see if this image must be a thumbnail
				if($_POST['thumb'] == $i_str)
				{
					//try to create a thumbnail image
					if($width > $height)	//... but only if it has landscape format
					{
						//set the dimensions of the thumbnail
						$thumb_width = $width * 0.10;
						$thumb_height = $height * 0.10;
						
						//create the thumbnail
						$thumb = imagecreatetruecolor($thumb_width, $thumb_height);
						imagecopyresampled($thumb, $image, 0, 0, 0, 0, $thumb_width, $thumb_height, $width, $height);
						imagejpeg($thumb, $thumbdir . '/' . $imagename, 100);
						imagedestroy($thumb);
						
						//now update the news table with the name of the thumbnail
						$query = 'UPDATE news SET news_thumb = "' . $imagename . '" WHERE news_id = ' . $last_id;
				$result = mysql_query($query, $db) or die (mysql_error($db));
					}
				}
				
				imagedestroy($image);
				
				echo "<p>Image uploaded succesfully!</p>";	
			}	
		}
		else
		{
			echo "<p> This field has not been set </p>";
		}
		
		
	
		
	}
	
	
	
	echo 'TMG database successfully updated!</br></br>';
	echo 'Click <a <a href="form_list.php">here</a> to go back to the main page';					
	
	
?> 
</div> <!-- /wrapper -->

</div>


<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="form_add.php"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php"> LIST NEWS </a> </li>
    </ul>
</div>
</body>
</html>