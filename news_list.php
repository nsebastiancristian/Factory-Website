<?php
	//Try to connect to the database
	$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or die ('Unable to connect. Check your connection parameters.');
	mysql_select_db('tmg_database', $db) or die(mysql_error($db));
	
	//SET HERE THE LIMIT (i.e. the num of news item shown per page)
	$limit = 4;
	
	//set the index parameter
	if(isset($_GET['index']))
	{
		$index = $_GET['index'];	
	}
	else
	{
		$index = 0;	
	}
	
	$offset = $index * $limit; 
	
	$query = 'SELECT * FROM news';
    $result = mysql_query($query, $db) or die (mysql_error($db));
	$num_rows = mysql_num_rows($result);	//---> Num of records in the table
	
	$steps = ceil($num_rows / $limit);
	
	//now do the real interogation of the database
	//$query = 'SELECT * FROM news LIMIT '.$offset.', '.$limit.' ORDER BY news_date DESC';
	$query = 'SELECT * FROM news ORDER BY news_date DESC LIMIT '.$offset.', '.$limit;
	$result = mysql_query($query, $db) or die (mysql_error($db));
?>
<html>
<head>

<script type="text/javascript">
	$(function()
	{
		  if (/*@cc_on!@*/false) 
		{
			$("table.news_wrapper").css({"margin-top": "50px"});
		}
		
		$("a.nav, a.navy").hover(function()
		{
			$(this).addClass("green");
			}, function (){
			$(this).removeClass("green");
		});
		
		//when clicking on the news link
		$("a#news_list").click(function()
		{
			var href = $(this).attr('href');
			var querystring = href.slice(href.indexOf('?')+1);
			$.get('news_list.php', querystring, process_news_list);
			
			return false;	
		});
		
		$("a.view_news").click(function()
		{
			var href = $(this).attr('href');
			var querystring = href.slice(href.indexOf('?')+1);
			$.get('news_view_web.php', querystring, process_news_view);
			
			return false;	
		});
		
		//alert("Display height: " + $("#mainContent").height() + "px, table height: " +  $("table").height() + "px");
		
		if($("#mainContent").height() - $("table").height() <= 65)
		{
			//$("table.news_wrapper").css({"position": "relative", "top" : "-20px"});
			//$("#news_navigation").css({"position": "relative", "top" : "-40px"});
		}
	});
</script>

</head>
<body>
<div class="top-bar-news"></div>
<table border="0" class="news_wrapper"  >
<?php
	
	 while ($row = mysql_fetch_assoc($result)) 
    {
?>
       <tr class="distanced">
            <td class="news_h left" style="padding-right:15px;">
                <div class="thumb">
                    <img src="<?php
						if($row['news_thumb'] ===  NULL)
						{
							echo "thumbs/default.jpg";
						}
						else
						{
					    	echo "thumbs/".$row['news_thumb'];
						}
					 ?>" style="width: 80px" />
                </div>
                <div class="date" style="padding-right: 10px">
                    <b>Date:</b> <?php echo $row['news_date']; ?>
                </div>
            </td>
            <td class="news right">
                <div class="title">
                    <a href="news_view_web.php?index=<?php echo $index; ?>&id=<?php echo $row['news_id']; ?>" class="view_news"> <h1><?php echo $row['news_title']; ?></h1> </a>
                </div>
                <div class="content">
                	<?php
					$string = $row['news_body'] ;
					$string = (strlen($string) > 350) ? substr($string,0,350).'...' : $string;
					echo $string; ?>
                    <a href="news_view_web.php?index=<?php echo $index; ?>&id=<?php echo $row['news_id']; ?>" class="view_news">
                    	Read more...
                    </a>
                </div>
           </td>
       </tr>
<?php
	}	//end while loop
?>
</table>

<div id="news_navigation">
<?php
	

	$index_str = "";
	$self_link = "news_list.php?index=";
	
	if($num_rows <= $limit)
	{
		
	}
	else if( $index == 0 || $index == 1 )
	{
		if($index == 0)
		{
			$first = "navy";
			$sec = "nav";	
		}
		else
		{
			$first = "nav";
			$sec = "navy";	
		}
		
		$index_str .= ' <a id="news_list" class="'.$first.'" href="'.$self_link."0".'">1</a> <a id="news_list" class="'.$sec.'" href="'.$self_link."1".'"> 2 </a>';
		
		if($steps >= 2)
		{	
			$index_str .= ' .. <a id="news_list" class="nav" href="'.$self_link.($index + 1).'"> <img src="Images/Icons/news_nav_right.gif" /> </a> <a id="news_list" class="nav" href="'.$self_link.($steps-1).'" > <img src="Images/Icons/news_nav_double_right.gif" /> </a>';
		}
	}
	else if( ($index == ($steps - 2) || $index  == ($steps-1)) && $steps >= 3)
	{
		if($index == ($steps - 2))
		{
			$first = "navy";
			$sec = "nav";	
		}
		else
		{
			$first = "nav";
			$sec = "navy";
		}
		
		$index_str .= ' <a id="news_list" class="nav" href="'.$self_link."0".'"> <img src="Images/Icons/news_nav_double_left.gif" /> </a> <a id="news_list" class="nav" href="'.$self_link.($index - 1).'"> <img src="Images/Icons/news_nav_left.gif" /> </a> .. <a id="news_list" class="'.$first.'" href="'.$self_link.($steps - 2).'">'.($steps-1).' </a> <a id="news_list" class="'.$sec.'" href="'.$self_link.($steps - 1).'"> '.$steps."</a>" ;	
	}
	else
	{
		
		
		$index_str .= ' <a id="news_list" class="nav" href="'.$self_link."0".'"> <img src="Images/Icons/news_nav_double_left.gif" /> </a> <a id="news_list" class="nav" href="'.$self_link.($index - 1).'"> <img src="Images/Icons/news_nav_left.gif" /> </a> .. <a id="news_list" class="nav" href="'.$self_link.($index - 1).'">'.$index.' </a> <!-- </a> --> <a id="news_list" class="navy" href="'.$self_link.$index.'">'.($index + 1).'</a> <a id="news_list" class="nav" href="'.$self_link.($index + 1).'">'.($index + 2).'</a> .. <a id="news_list" class="nav" href="'.$self_link.($index + 1).'"> <img src="Images/Icons/news_nav_right.gif" /> </a> <a id="news_list" class="nav" href="'.$self_link.$steps.'" > <img src="Images/Icons/news_nav_double_right.gif" />  </a>';
	}
	
	echo $index_str;
	
?>
</div> <!-- /news_navigation -->
</body>