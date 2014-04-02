<?php
	session_start();
	
	
	//print_r($_POST);
	//print_r($_GET);
	
	// filter incoming values
	$username = (isset($_POST['username'])) ? trim($_POST['username']) : '';
	$password = (isset($_POST['password'])) ? $_POST['password'] : '';
	$redirect = (isset($_REQUEST['redirect'])) ? $_REQUEST['redirect'] : 'form_list.php';

	//echo $redirect."</br>";

if (isset($_POST['submit'])) 
{
	if (!isset($_SESSION['logged']) || $_SESSION['logged'] != 1) 
	{
		if (!empty($_POST['username']) && $_POST['username'] == 'tmg' && !empty($_POST['password']) && $_POST['password'] == 'tmg123') 
		{
			$_SESSION['username'] = $username;
			$_SESSION['logged'] = 1;
			header ('Refresh: 5; URL=' . $redirect);
			echo ' <p> You will be redirected to your original page request. </p> ';
			echo ' <p > If your browser doesn\'t redirect you properly ' . 	'automatically, <a href="' . $redirect . '" > click here </a > . </p > ';
			die();
		}
		else
		{
			// set these explicitly just to make sure
			$_SESSION['username'] = '';
			$_SESSION['logged'] = 0;
			$error = ' <p > <strong > You have supplied an invalid username and/or password! </strong > </p>';

		}
	}
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login Page</title>

<style>
	.left
	{
		float: left;	
	}
	
	.clear
	{
		clear: both;
	}
	
	.first_row
	{
			
	}
	
	.second_row
	{
		margin-top: 10px;	
	}
	
	body
	{
	 background-color: #FF8000;	
	}
	
	form
	{
		background-color: #CCC;
		width: 100%;	
		padding-top: 20px;
		padding-bottom: 20px;
		padding-left: 20px;
	}
	
	#container
	{
		width: 250px;
		margin-left: auto;
		margin-right: auto;	
		margin-top: 300px;
	}
	
</style>

</head>

<body>
<?php
	if (isset($error)) 
	{
		echo $error;
	}
?>

<div id="container">
<form action="form_login.php" method="post">

<label class="left">Username</label><input name="username" size="20" style="position:relative; left: 15px" type="text" class="left"  value=""/>
<div class="clear"></div>
<div class="second_row">
<label class="left">Password</label><input name="password" style="position:relative; left: 20px" type="password" class="left" value=""/>
</div>
<div class="clear"></div>
<div class="second_row">
<input type="hidden" name="redirect" value="<?php echo $redirect ?> "/>
<input style="width: 227px;" type="submit" name="submit" value="Login" />
</div>
</form>
</div>

</body>
</html>