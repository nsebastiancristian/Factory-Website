<?php
include 'auth_inc.php';
?>
<?php
$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

if(isset($_GET['news_id']))
{
	$news_id = $_GET['news_id'];
}
else
{
	$news_id = 1;	
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
<?php

	$query = 'SELECT * FROM news WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	
	$row = mysql_fetch_assoc($result);
	
	/*
	echo "<pre>";
	print_r($row);
	echo "</pre>";
	*/
?>

<div id="left-col">
	
    	<table style="width: 65%; margin-top: 100px; margin-bottom: 100px">
        	<tr>
            	<td class="orange centered up10" > <img src="<?php 
					$pretrimmed = trim($row['news_thumb']);
				
					if($row['news_thumb'] ===  NULL)
					{
						echo "thumbs/default.jpg";
						
					}
					else
					{
						
						echo "thumbs/".$row['news_thumb'];
					}
				?>" /> </td>
            	<td class="orange centered up10"> <?php echo $row['news_title']; ?> </td>                
            </tr>
            <tr>
            	<td class="orange formated" colspan="2"> <?php echo $row['news_body']; ?>  </td>
                
            </tr>
        </table>
        
		<?php
			$query = 'SELECT * FROM photos WHERE photos_newsid='.$news_id;
			$result = mysql_query($query, $db) or die (mysql_error($db));
			//echo '<p> '.$query.' </p>';
			
			echo '<div id="photo_content" >';
			 while ($row = mysql_fetch_assoc($result)) 
    		{
				echo '<a href="News Images/'.$row['photos_filename'].'"><img src="News Images/'.$row['photos_filename'].'" width="500px" /></a>';
				//echo '<p>'.$row['photos_filename'].'</p>';
				echo "</br></br>";
			}
		    echo '</div>';
		?>        
    
</div>	<!-- /left-col -->	
<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="form_add.php"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php"> LIST NEWS </a> </li>
        <li> <a href="news_delete.php?news_id=<?php echo $news_id ?>"> DELETE THIS ITEM </a> </li>
    </ul>
</div> <!-- /right-col --> 

</body>
</html>