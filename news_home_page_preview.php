<?php
	//Try to connect to the database
	$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or die ('Unable to connect. Check your connection parameters.');
	mysql_select_db('tmg_database', $db) or die(mysql_error($db));
	
	
	$query = 'SELECT * FROM news ORDER BY news_date DESC LIMIT 0, 3';
	$result = mysql_query($query, $db) or die (mysql_error($db));
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script type="text/javascript">
	$(function()
	{
		
		
		$("a.view_news").click(function()
		{
			var href = $(this).attr('href');
			var querystring = href.slice(href.indexOf('?')+1);
			$.get('news_view_web.php', querystring, process_news_view);
			
			return false;	
		});
		
		
	});
</script>

</head>

<body>
<?php 


 	while ($row = mysql_fetch_assoc($result)) 
    {
	 ?>
			<div id="newsItem">
            	<!--<div id="date">
                21.01.2013 |
                </div> -->
                <div id="link">
                <a href=""><?php echo $row['news_title']; ?></a>
                </div>
                <div id="content">
               	
                <div id="sub-sub-content">
			   <?php
					$string = $row['news_body'] ;
					$string = (strlen($string) > 150) ? substr($string,0,200).'...' : $string;
					echo $string; ?>
                   
                </div> <!-- /sub-sub-content -->
                
                <div class="leftColReadMore">
                    <a href="news_view_web.php?index=0&id=<?php echo $row['news_id']; ?>" class="view_news">
                    	Read more...
                    </a>           
                </div>
                <div class="leftColDate">
                	<b style="color: #706C65">Date: <?php echo $row['news_date']; ?></b>
               
               </div>
               
                </div>	<!--  /content -->
               
             
               
            </div><!-- /newsItem -->
<?php 
	}
?>   

 
</body>
</html>