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
	$news_id = 143;	
}


?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Edit news item <?php echo $news_id; ?></title>

<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<script type="text/javascript" src="form_javascript.js"></script>

<link href="form.css" rel="stylesheet" type="text/css" />


</head>

<body>
<?php

	$query = 'SELECT * FROM news WHERE news_id='.$news_id;
	$result = mysql_query($query, $db) or die (mysql_error($db));
	
	$row = mysql_fetch_assoc($result);
?>

<div id="left-col">
	
    	<table style="width: 55%; margin-top: 100px; margin-bottom: 100px">
        	<form action="news_edit_process.php" method="post" enctype="multipart/form-data">
            <tr>
            	<td class="orange up10 centered" > THUMBNAIL: </td>
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
            </tr>            
            <tr>
            	<td class="orange up10 centered" > TITLE: </td>
            	<td class="orange up10" > <input type="text" name="title" maxlength="90" size="100" value="<?php echo $row['news_title']; ?>" />  </td>                
            </tr>
            <tr>
            	<td class="orange centered"> CONTENT: </td>
            	<td class="orange">
        			<textarea name="content" rows="10" cols="60" class="required" ><?php echo $row['news_body']; ?></textarea>
        		</td>
            </tr>
             <tr>
    	<td colspan="2" style="text-align: center; background-color: #F99531; padding: 7px">
        	<b>PHOTOS UPLOADING SECTION*</b>
        </td>
    </tr>
    
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile01" name="uploadfile01" /></td> </tr> 
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile02" name="uploadfile02" /></td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile03" name="uploadfile03" /></td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile04" name="uploadfile04" /></td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile05" name="uploadfile05" /></td> </tr>  
            <tr>
            		<td class="orange centered up10" colspan="2"  ><input type="submit" value="Submit" /></td>
            </tr>
            <input type="hidden" name="news_id" value="<?php echo $_GET['news_id']; ?>"  />
            </form>
        </table>
        
		<?php
			$query = 'SELECT * FROM photos WHERE photos_newsid='.$news_id;
			$result = mysql_query($query, $db) or die (mysql_error($db));
			//echo '<p> '.$query.' </p>';
			
			echo '<div id="photo_content" >';
			 while ($row = mysql_fetch_assoc($result)) 
    		{
				echo '<img src="News Images/'.$row['photos_filename'].'" />';
				//echo '<p>'.$row['photos_filename'].'</p>';
			}
		    echo '</div>';
		?>        
    
</div>	<!-- /left-col -->	
<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="#"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php?limit=10&index=4"> LIST NEWS </a> </li>
    </ul>
</div> <!-- /right-col --> 

</body>
</html>