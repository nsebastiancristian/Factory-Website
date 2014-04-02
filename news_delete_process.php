<?php
include 'auth_inc.php';
?>
<?php
$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

if(isset($_GET['id']))
{
	$news_id = $_GET['id'];
}
else
{
	$news_id = -1;	
}


?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<script type="text/javascript" src="form_javascript.js"></script>

<link href="form.css" rel="stylesheet" type="text/css" />


</head>

<body>
<div id="left-col">
<?php

	//first delete the thumbnail (if there is any)
	$query = 'SELECT * FROM news WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	$row = mysql_fetch_assoc($result);
	
	if($row['news_thumb'] !== NULL)
	{
		unlink(dirname(__FILE__) . "/thumbs/" . $row['news_thumb']);
	}
	
	//... delete the data from the news table
	$query = 'DELETE FROM news WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	
	echo "<p> THE DELETE PROCESS IS COMPLETE FOR THE NEWS DATABASE </p>";	

	$query = 'SELECT * FROM photos WHERE photos_newsid='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
			
	
			
	echo "<p> The folowing photos are being deleted : </p>";
	echo "<ul>";
	 while ($row = mysql_fetch_assoc($result)) 
	{
		echo '<li>'.$row['photos_filename'].'</li>';
		unlink(dirname(__FILE__) . "/News Images/" . $row['photos_filename']);
	}
	echo "</ul>";
	
	$query = 'DELETE FROM photos WHERE photos_newsid='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	
	echo "<p> ALL THE PHOTOS FOR THE REQUESTED ARE DELETED FROM THE DATABASE </p></br></br>";
	echo 'Click <a <a href="form_list.php">here</a> to go back to the main page';		
		    
?>        
    
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