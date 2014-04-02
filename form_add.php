<?php
include 'auth_inc.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<!-- SCRIPTS -->
<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<script type="text/javascript" src="form_javascript.js"></script>


<link href="form.css" rel="stylesheet" type="text/css" />




</head>

<body>


<?php
	$limit = 5;
?>

<div id="left-col">
<table>
<form id="form_add_news" action="form_add_process.php?date=auto"  method="post" enctype="multipart/form-data">
	 <tr>
    	<td colspan="3" style="text-align: center; background-color: #F99531; padding: 7px">
        	<b>NEWS ITEM CONTENT SECTION</b>
        </td>
    </tr>
    <tr>
    	<td class="orange centered">TITLE*:</td>
        <td colspan="2" class="orange">
        	<input id="tit" type="text" name="title" value="" maxlength="90" style="width:300px; height:20px;" class="required" />
        </td>
    </tr>
    
    <tr>
    	<td class="req orange centered">CONTENT*:</td>
        <td  colspan="2" class="orange">
        	<textarea name="content" rows="10" cols="60" class="required" ></textarea>
        </td>
    </tr>
    <tr>
    	<td class="orange" colspan="3" style="text-align: center">
        	<a href="#" class="add_date">
            	Click to add the date manually (else the current date will be used)
            </a>
        </td>
    </tr>
    <tr>
    	<td class="orange" colspan="3" >
    	<div id="date_box">
        	<table style="width:80%; margin-right:auto; margin-left:auto">
            	<tr>
                	<td class="spaced5px orange" style="width: 19%">
                    	DAY: 
                    </td>
                    <td class="spaced5px orange" >
                    	<select name="day">
                        	<?php
								//populate the list with the day numbers
								for($day = 1; $day <= 31; $day++)
								{
										echo '<option value="'.$day.'" >'.$day.'</option>';
								}
							?>
                        </select>
                    </td>
                </tr>
                <tr>
                	<td class="spaced5px orange" >
                    	MONTH: 
                    </td>
                    <td class="spaced5px orange" >
                    	<select name="month">
                        	<?php
								//populate the list with the month numbers
								for($month = 1; $month <= 12; $month++)
								{
										echo '<option value="'.$month.'" >'.$month.'</option>';
								}
							?>
                        </select>
                    </td>
                </tr>
                <tr>
                	<td class="spaced5px orange"  >
                    	YEAR:
                    </td>
                	<td class="spaced5px orange" >
                    <select name="year">
                    	   <?php
								//populate the list with the years
								for($yr = date("Y"); $yr >= 1970; $yr--)
								{
										echo '<option value="'.$yr.'" >'.$yr.'</option>';
								}
							?>
                    </select>
                    </td>
                </tr>
            </table>
        </div>	<!-- /date_box (div) -->
        </td>
    </tr>
    <tr>
    	<td colspan="3" style="text-align: center; background-color: #F99531; padding: 7px">
        	<b>PHOTOS UPLOADING SECTION*</b>
        </td>
    </tr>
    
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile01" name="uploadfile01" /></td> <td class="orange"> <label class="rad1" > Thumbnail </label> <input class="rad1" type="radio" name="thumb" value="1" checked="checked" />  </td> </tr> 
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile02" name="uploadfile02" /></td> <td class="orange"> <label class="rad2"> Thumbnail </label> <input class="rad2" type="radio" name="thumb" value="2" /> </td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile03" name="uploadfile03" /></td> <td class="orange"> <label class="rad3"> Thumbnail </label> <input class="rad3" type="radio" name="thumb" value="3" /> </td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile04" name="uploadfile04" /></td> <td class="orange"> <label class="rad4"> Thumbnail </label> <input class="rad4" type="radio" name="thumb" value="4" /> </td> </tr>
    <tr>	<td class="spaced orange">Upload Image**</td>  <td class="orange" style="text-align: center" ><input type="file" class="uploadf" id="uploadfile05" name="uploadfile05" /></td> <td class="orange"> <label class="rad5"> Thumbnail </label> <input type="radio" class="rad5" name="thumb" value="5" /> </td> </tr>  
    
    <tr>
    	<td colspan="3" class="spaced orange">
        	<small><em> * These fields must be completed in order for the form to be submitted </em></small>
        </td>
    </tr>
    <tr>     
        <td colspan="3" class="spaced orange">
        	<small><em> ** Acceptable image formats include : GIF, JPG/JPEG and PNG. </em></small>
        </td>
    </tr>
    <tr>
    	<td colspan="3" class="spaced orange">
        	<small><em> *** Click on one of the radio buttons to set the corresponding image to be the thumbnail to appear on the website </br>
             Note that the picture has to be in the landscape format in order to be a valid thumbnail picture</em></small>
        </td>
    </tr>
           
    <tr>
    	<td class="orange" colspan="3" style="text-align:center; padding: 10px" >
        	<input type="submit" name="submit" value="Submit" />
        </td>
    </tr>
</form>
</table>
</div>	<!-- /left-col -->

<div id="right-col">
	<pre><h1> ~ MENU ~ </h1></pre>
    
    <ul>
    	<li> <a href="form_add.php"> ADD NEWS ITEM </a> </li>
        <li> <a href="form_list.php"> LIST NEWS </a> </li>
    </ul>
</div>


</body>
</html>