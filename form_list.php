<?php

include 'auth_inc.php';



$db = mysql_connect('localhost', 'bp6am', 'bp6ampass') or 
die ('Unable to connect. Check your connection parameters.');
mysql_select_db('tmg_database', $db) or die(mysql_error($db));

function alert($str)
{
		echo '<script type="text/javascript"> alert("'.$str.'"); </script>';
}

?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>List of news items</title>

<!-- SCRIPTS -->
<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<script type="text/javascript" src="form_javascript.js"></script>


<link href="form.css" rel="stylesheet" type="text/css" />

</head>

<body>

<?php
	/*
	echo "<pre>";
	print_r($_GET);
	echo "</pre>"; 
	*/
	
	if(isset($_GET['limit']))
	{
		$limit = $_GET['limit'];
	}
	else
	{
		$limit = 10;	
	}
	
	if(isset($_GET['index']))
	{
		$index = $_GET['index'];	
	}
	else
	{
		$index = 0;	
	}
	
	
	$offset = $index * $limit; 	
	
	
	$orderby = "";
	$order = "";
	
	if(isset($_GET['orderby']))
	{
		$orderby = $_GET['orderby'];
		
		if(isset($_GET['order']))
		{
			$order = $_GET['order'];
		}
		else
		{
				$orderby = "";
				$order = "";
		}
	}
	
	
?>

<div id="left-col">
<table style="width:75%;margin-top: 200px;" > 
    <tr> 
    <th style="background-color: #f99531;" colspan="3" > NEWS <a style="margin-left: 20px;" href="form_add.php" > [ADD] </a > </th > 
    </tr > 
    <tr>
    <th> <a href="<?php 
	if($order == "")
	{
		$new_order = 'DESC';
	}
	else if($order == 'ASC')
	{
		$new_order = 'DESC';	
	}
	else
	{
		$new_order = 'ASC';	
	}
	
	$href = 'form_list.php?orderby=news_date&order='.$new_order;
	echo $href;
	 ?>">Date Added</a> </th> 
     <th> <a href="<?php 
	
	
	$href = 'form_list.php?orderby=news_title&order='.$new_order;
	echo $href;
	 ?>"> Title </a> </th> <th> Actions </th>
    </tr>
    <?php
	$query = 'SELECT * FROM news';
    $result = mysql_query($query, $db) or die (mysql_error($db));
	$num_rows = mysql_num_rows($result);	//---> Num of records in the table
	
	/*
	//for testing purposes
	$num_rows = 45;
	*/
	
	$steps = ceil($num_rows / $limit);
	/*
	if($num_rows % $limit == 0)
	{
		$steps -= 1;	//there is the another screen if there is a remainder	
	}
	*/
	
	//alert("num rows = ".$num_rows." ; steps = ".$steps);
	
	/*echo "<script> alert(' num_rows = ".$num_rows." , steps = ".$steps." ') </script>";*/
	
	if($orderby != "")
	{
		$query = 'SELECT * FROM news ORDER BY '.$orderby.' '.$order;
	}
	else
	{
		$query = 'SELECT * FROM news';
	}
	
    $query .= ' LIMIT '.$offset.', '.$limit;
    $result = mysql_query($query, $db) or die (mysql_error($db));
    
    $odd = true;
    $i = 1;
    //var_dump($result);
    while ($row = mysql_fetch_assoc($result)) 
    {
        
    echo ($odd == true) ? ' <tr class="odd_row" > ' : ' <tr class="even_row" > ';
    
    //echo "$i </br>"; $i++;
    $odd = !$odd; 
    echo ' <td style="width:10%"> <div class="cell_block" > '; 
    echo $row['news_date'];
    echo ' </div> </td > <td class="centered" > ';
	echo '<a href="news_view.php?news_id='.$row['news_id'].'">'.$row['news_title'].'</a>';
	echo ' </td > <td style="width: 30%" > ';
    echo ' <div class="cell_block" > <a style="margin-right: 15px;"	href="news_edit.php?news_id=' . $row['news_id'] . '" > 
    [EDIT] </a > '; 
    echo ' <a style="margin-right: 15px;" href="news_delete.php?news_id=' . $row['news_id'] . '" > 
    [DELETE] </a >';
	echo ' <a href="news_editphotos.php?news_id='.$row['news_id'].'"> [PHOTOS] </a>';
	echo  '</div> ';
    echo ' </td > </tr > ';
    }
    ?> 
</table > 

<div id="index_nav"> 
 <?php
 	
 	$index_str = "";
	$self_link = "form_list.php?";
	
	if($orderby != "")
	{
		$self_link .= "orderby=".$orderby."&order=".$order."&";
	}
	
	$self_link .= "limit=".$limit."&index=";
	
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
		
		$index_str .= ' <a class="'.$first.'" href="'.$self_link."0".'">1</a> <a class="'.$sec.'" href="'.$self_link."1".'"> 2 </a>';
		
		if($steps >= 2)
		{	
			$index_str .= ' .. <a class="nav" href="'.$self_link.($index + 1).'"> > </a> <a class="nav" href="'.$self_link.($steps-1).'" > >> </a>';
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
		
		$index_str .= ' <a class="nav" href="'.$self_link."0".'"> << </a> <a class="nav" href="'.$self_link.($index - 1).'"> < </a> .. <a class="'.$first.'" href="'.$self_link.($steps - 2).'">'.($steps-1).' </a> <a class="'.$sec.'" href="'.$self_link.($steps - 1).'"> '.$steps."</a>" ;	
	}
	else
	{
		
		
		$index_str .= ' <a class="nav" href="'.$self_link."0".'"> << </a> <a class="nav" href="'.$self_link.($index - 1).'"> < </a> .. <a class="nav" href="'.$self_link.($index - 1).'">'.$index.' </a> </a>  <a class="navy" href="'.$self_link.$index.'">'.($index + 1).'</a> <a class="nav" href="'.$self_link.($index + 1).'">'.($index + 2).'</a> .. <a class="nav" href="'.$self_link.($index + 1).'"> > </a> <a class="nav" href="'.$self_link.$steps.'" > >> </a>';
	}
	
	
	
	
	/*
	if( $index == 0 || $index == 1 )
	{
		$index_str .= " 1 2";
		
		if($steps > 2)
		{	
			$index_str .= " .. >> >";
		}
	}
	else if( ($index == ($steps - 1) || $index  == $steps) && $steps >= 3)
	{
		$index_str .= " << < .. ".($steps - 1). " ".$steps ;	
	}
	else
	{
		$index_str .= " << < .. ".$index." ".($index + 1)." ".($index + 2)." .. > >>";
	}
	*/
	
	echo $index_str;
 ?>
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