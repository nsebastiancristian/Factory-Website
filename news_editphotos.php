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


function alert($str)
{
		echo '<script type="text/javascript"> alert("'.$str.'"); </script>';
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Edit Photos</title>

<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<script type="text/javascript" src="form_javascript.js"></script>

<link href="form.css" rel="stylesheet" type="text/css" />

</head>

<body>
<div id="left-col">
	
    <table>
    	<form method="post" action="news_editphotos_process.php">
         <tr>
         	<th class="spaced"> IMAGE </th>
            <th class="spaced"> IS THUMBNAIL </th> 
            <th class="spaced"> DELETE </th>
         </tr>
         <?php 
		 
		 	//do a quick check before anything else to find out the name of the thumbnail (if it exists)
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
			 
			
		 
		 	$query = 'SELECT * FROM photos WHERE photos_newsid='.$news_id;
			$result = mysql_query($query, $db) or die (mysql_error($db));
			
			$i = 1;
			
			 while ($row = mysql_fetch_assoc($result)) 
    		{
		 		
				
				
                echo '<tr>';
				echo '<td class="orange centered"> <img width="300px" src="News Images/'.$row['photos_filename'].'" /> </td>';
				echo '<td class="orange centered"> <input class="'.$i.'" type="radio" name="thumbn" value="'.$row['photos_filename'].'" ';
				if($thumbfile == $row['photos_filename'])
				{
					echo 'checked="checked"';	
					
				}
				
				echo ' /></td>';
				
				//replace the complete name of the file ex: "56.jpg" becomes just "56"
				$new_val = str_replace(".jpg", "", $row['photos_filename']);
				
				echo '<td class="orange centered"> <input class="'.$i.'" type="checkbox" name="'.$new_val.'" /> </td>';
				echo '</tr>';
         		$i++;	//increment the counter
            }
         ?>
         	
         	<tr> <td  class="orange centered" colspan="3"><input type="submit" value="Submit" /> </td> </tr>
            
            <input type="hidden" name="id" value="<?php echo $news_id; ?>"  />
        </form>
    </table>
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