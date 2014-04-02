<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TMG Main Page</title>



<!-- SCRIPTS -->
<script type="text/javascript" src="fancybox/lib/jquery-1.9.0.min.js"></script> 
<!-- <script type="text/javascript" src="my_codeGallery.js"></script> -->

<script type="text/javascript" src="my_codeMenu.js"></script>
<script type="text/javascript" src="headerAnimation.js"></script>

<!-- Fancybox script goes here -->
<script type="text/javascript" src="fancybox/source/jquery.fancybox.js"></script>

<!-- PURL Master script goes here -->
<script type="text/javascript" src="purl-master/purl.js"></script>

<script type="text/javascript" src="generalCode.js"></script>



<!--
<script type="text/javascript">
	var coreName = "bag-o-form";		//this is the start of the file name
	
	$(function() {
		//preload the images
		preload(coreName, 3);
	});
</script>
-->

<!-- STYLE -->
<link href="defaultGallery.css" rel="stylesheet" type="text/css" />
<link href="default.css" rel="stylesheet" type="text/css" />

<!-- Fancybox style goes here -->
<link href="fancybox/source/jquery.fancybox.css" rel="stylesheet" type="text/css" />


<style type="text/css">
	#mainContent
{
	background-image:none;
}
</style>





</head>

<body>
<div id="wrapOverall">
	
    <!-- ========================================================================================
    	-------------------------- HEADER ANIMATION ---------------------------------------------
        ========================================================================================= --> 
    <div id="headerBar">
    		<!-- -->  <img src="Images/Header Animation Images/Welding-Sparks-01.jpg"  /> 
            <div class="title"></div>
    </div> <!-- /headerBar -->
    
    
    <div id="countryBar">
    	<div class="countryFlag">
        	<a href="home_eng.html?lang=eng" ><img src="Images/flag1.jpg" /></a>
        </div>
        
        <div class="countryFlag">
        	<a href="home_rom.html?lang=rom"><img src="Images/flag1.jpg" /></a>
        </div>
        
        <div class="countryFlag">
        	<a href="home_fra.html?lang=fra"><img src="Images/flag1.jpg" /></a>
        </div>
        
         <div class="countryFlag">
        	<a href="home_ita.html?lang=ita"><img src="Images/flag1.jpg" /></a>
        </div>
        
        <div class="countryFlag">
        	<a href="home_spa.html?lang=spa"><img src="Images/flag1.jpg" /></a>
        </div>
        
        <div class="countryFlag">
        	<a href="home_deu.html?lang=deu"><img src="Images/flag1.jpg" /></a>
        </div>
    
    </div> <!-- /countryBar -->
    
    <!-- leftColumn -->
    <div id="leftColumn">
    	<div id="logo">
        	<a style="text-decoration:none;" href="index.html"><img src="Images/Icons/Sigla-TMG.jpg" /></a>
        </div> <!-- /logo -->
        <div id="menu">
        	<ul>
            	<li class="submenu"><a href="#" onclick="return prevDef();">ABOUT COMPANY</a> <div id="menu-arrow" class="first"></div>
                	<ul class="firstFloor">
                    	<li> <a href="">HISTORY </a></li>
                        <li> <a href="" class="sec">CONTACT </a></li>
                        <li> <a href="" class="sec">ANYTHING </a></li>
                    </ul>
                </li>
                <li class="second submenu"><a href="#" onclick="return prevDef();">MACHINE TOOLS</a> <div id="menu-arrow" class="first"></div>
                	<ul class="autowidth secFloor">
                    	<li> <a href="index_2.html" class="autowidth">VERTICAL TURNING AND BORING MILLS </a></li>
                        <li> <a href="" class="sec autowidth">HORIZONTAL BORING AND MILLING MACHINES</a></li>
                        <li> <a href="" class="sec">GANTRY MILLING MACHINES</a></li>
                        <li> <a href="" class="sec">REBUILDING AND RETROFITTING</a></li>
                    </ul>
                </li>
                <li class="second submenu"><a href="#" onclick="return prevDef();">TIRE MACHINERY</a> <div id="menu-arrow" class="first"></div>
                	<ul class="thirdFloor">
                    	<li> <a href="">AUTOLOCK </a></li>
                        <li> <a href="" class="sec autowidth">LT BAG-O-MATIC</a></li>
                        <li> <a href="" class="sec">BAG-O-FORM</a></li>
                        <li> <a href="" class="sec">OTR-BOM</a></li>
                        <li> <a href="" class="sec">REBUILDING</a></li>
                    </ul>
                </li>
                <li class="second"><a href="">NUCLEAR EQUIPMENT</a></li>
                <li class="second"><a href="">PHOTOGALLERY</a></li>
                <li class="second"><a href="">HOME</a></li>
            </ul>
        </div> <!-- /menu -->
        <div id="searchBox">
   	    	<!--<img src="Images/Placeholder-Search-Box.jpg" width="266" height="32" /> -->
            <form method="post">
            <div class="leftCol">SEARCH: <input type="text" /></div>
            
            <div class="rightCol">
            <button type="submit">
    <img src="Images/Search_Button_simple.jpg" onmouseover="this.src='Images/Search_Button_pressed.jpg';" onmouseout="this.src='Images/Search_Button_simple.jpg';" />
</button> </div>
          </form>
        </div> <!-- /searchbox -->
        <div id="dateBox">
        	<div class="leftF">
            	March
            </div>
            <div class="rightF">
            	11.03.2013 12:00
            </div>
        </div>
        <div id="newsBox">
        	<div id="newsItem">
            	<div id="date">
                21.01.2013 |
                </div>
                <div id="link">
                <a href="">SOLIGORSKIJ INSTITUT</a>
                </div>
                <div id="content">
                On 08.01.2013 at the end-user SOLIGORSKIJ INSTITUT has begun the final installation of the machine SKJ 63-114 D delivered in November 2012. Tests and commissioning of machine is planned in last week of March 2013. 
                </div>
            </div><!-- /newsItem -->
            
            <div id="newsItem">
            	<div id="date">
                21.01.2013 |
                </div>
                <div id="link">
                <a href="">SOLIGORSKIJ INSTITUT</a>
                </div>
                <div id="content">
                On 08.01.2013 at the end-user SOLIGORSKIJ INSTITUT has begun the final installation of the machine SKJ 63-114 D delivered in November 2012. Tests and commissioning of machine is planned in last week of March 2013. 
                </div>
            </div><!-- /newsItem -->
            
            <div id="newsItem">
            	<div id="date">
                21.01.2013 |
                </div>
                <div id="link">
                <a href="">SOLIGORSKIJ INSTITUT</a>
                </div>
                <div id="content">
                On 08.01.2013 at the end-user SOLIGORSKIJ INSTITUT has begun the final installation of the machine SKJ 63-114 D delivered in November 2012. Tests and commissioning of machine is planned in last week of March 2013. 
                </div>
            </div><!-- /newsItem -->
            
         <div class="arrowBox">   
           
            <img class="leftArrow" src="Images/Icons/rounded corner black/arrow-left_black.png" width="30px" height="30px" />
             <img class="rightArrow" src="Images/Icons/rounded corner black/arrow-right_black.png"  width="30px" height="30px" /> 
             
         </div> <!-- end div arrowBox -->
            
        </div> <!-- /newsBox -->
        
        <div class="clear"></div>
    </div>
    <!-- /leftColumn -->
    
    <!-- rightColumn -->
    <div id="rightColumn">
    	<div id="mainContentPic">
            
        </div> <!-- /mainContentPic -->
        
        <!-- =======================================================================================================================================================================================
        	 MAIN CONTENT STARTS FROM HERE!!!!
             =======================================================================================================================================================================================-->
        
        <div id="mainContent">
        
        	<!-- ****************** SUB MENU *************************** -->
            <ul class="sub-menu">
            	<li class="twoSubMenus specifications"> <div class="adjustable-sub-div" > SPECIFICATIONS </div></li>
                <li class="twoSubMenus photos"> <div class="adjustable-sub-div"> PHOTOS </div> </li>
            </ul>
            
        	<!--<div id="sub-main-content">-->
        	
            <div id="specifications">
            
            <div id="distantier"></div>
            <div id="distantier"></div>
            <div id="distantier"></div>
        	
        	<table class="small">
             <tr>
             	<th class="top clickToExpand first" colspan="2">
             	AUTOLOK® Curing Press Data <span id="notShownFirst" class="showMore">(click to display)</span>
                <span id="shownFirst" class="showLess">(click to show less)</span>
             	</th>
             </tr>
             <tr class="expandable first shownFirst">
             	<td class="left">
                Type:
                </td>
                <td>
                Twin-cavity platen all radial with both sectional mold and two-
piece split mold capability, and prepared to accept SMO field kit
                </td>
             </tr>
             <tr class="expandable first shownFirst">
             	<td>
                Bladder Mechanism:
                </td>
                <td>
                BT System (Patent Pending)
                </td>
             </tr>
              <tr class="expandable first shownFirst">
             	<td>
                Loader:
                </td>
                <td>
                Individual, Swing-in style precision with 6 shoe contact (Patent Pending)
                </td>
             </tr>
             
             <tr class="expandable first  shownFirst">
             	<td>
                Unloader:
                </td>
                <td>
                Fork type unloader. Carries tires from the press to a cooling conveyor or station.
Does not require exit conveyor.
                </td>
             </tr>
             
             <tr>
             	<th class="clickToExpand second" colspan="2">
            	General Capacities <span class="showMore">(click to display)</span>
                <span class="showLess">(click to show less)</span>
            	</th>
             </tr>
             
             <tr class="expandable second">
             	<td>
                Max press closing force
                </td>
                <td>
                385,000 Lbs.
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max mold O.D.
                </td>
                <td>
                1219 mm (48")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Min mold thickness
                </td>
                <td>
                228 mm (9")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max mold thickness
                </td>
                <td>
                460 mm (18")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max internal pressure
                </td>
                <td>
                28.8 kg/cm2 (410 psi)
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max. shaping pressure
                </td>
                <td>
                1.0 kg/cm2 (15 psi) for Seg. Molds
2.0 kg/cm2 (30 PSI) for 2 pc molds
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Bead diameter range
                </td>
                <td>
                	Loader 13"-18" or 14"-19" or 15"-20"
Press 12"-20"
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max green tire height
                </td>
                <td>
                	508 mm (20")
                </td>
             </tr>
              <tr class="expandable second">
             	<td>
                Min green tire height
                </td>
                <td>
                	254 mm (10")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max green tire O.D.
                </td>
                <td>
                		990 mm (39")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max cured tire O.D.
                </td>
                <td>
                	1016 mm (40")
                </td>
             </tr>
              <tr class="expandable second">
             	<td>
                Max green tire height
                </td>
                <td>
                	41 kg (90 lbs)
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Max top half mold weight
                </td>
                <td>
                	2,500 kg (5,500 lbs.)
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                Nom. stripping force
                </td>
                <td>
                		5,000 kg (11,000 lbs.)
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                	Top platen dia.
                </td>
                <td>
                	1212 mm (47.75")
                </td>
             </tr>
             <tr class="expandable second">
             	<td>
                	Bottom platen dia.
                </td>
                <td>
                	1194 mm (47.00")
                </td>
             </tr>
             
             <tr>
             	<th class="clickToExpand third" colspan="2">
            	Services <span class="showMore">(click to display)</span>
                <span class="showLess">(click to show less)</span>
            	</th>
             </tr>
             <tr class="expandable third">
             	<td>
                	Bladder Mechanism:
                </td>
                <td>
                	Hydraulic oil
                </td>
             </tr>
             <tr class="expandable third">
             	<td>
                	Unloader:
                </td>
                <td>
                	Air
                </td>
             </tr>
             <tr class="expandable third">
             	<td>
                	Mold Squeeze:
                </td>
                <td>
                	Hydraulic oil
                </td>
             </tr>
             <tr class="expandable third">
             	<td>
                	Press Lift:
                </td>
                <td>
                	Hydraulic oil
                </td>
             </tr>
             <tr class="expandable third">
             	<td style="font-weight:bold">
                	Loader:
                </td>
                <td>
                	Air
                </td>
             </tr>
             
             <tr>
             	<th class="clickToExpand fourth" colspan="2">
            	Performance Data <span class="showMore">(click to display)</span>
                <span class="showLess">(click to show less)</span>
            	</th>
             </tr>
              <tr class="expandable fourth" >
              	<td colspan="2" style="font-weight:bold">Press:</td>
              </tr>
             <tr class="expandable fourth">
             	<td>
                	Concentricity from top to bottom Platen registers:
                </td>
                <td>
                	±.127mm (±.005")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Concentricity from top to bottom Platen registers:
                </td>
                <td>
                	±.127mm (±.005")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Repeatability of above:
                </td>
                <td>
                	±.0127mm (±.0005")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Platen parallelism:
                </td>
                <td>
                	.333mm/m (.004"/ft.)
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Max. Bolster Deflection:
                </td>
                <td>
                	.500mm (.020")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Bolster Flatness:
                </td>
                <td>
                	±.025mm (±.001")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Repeatability of Press Squeeze:
                </td>
                <td>
                	±3%
                </td>
             </tr>
             <tr class="expandable fourth" >
              	<td colspan="2" style="font-weight:bold">Loader:</td>
              </tr>
              <tr class="expandable fourth">
             	<td>
                	Loader to Press Concentricity:
                </td>
                <td>
                	±.127mm (±.005")
                </td>
             </tr>
             <tr class="expandable fourth">
             	<td>
                	Repeatability of above:
                </td>
                <td>
                	±.127mm (±.005")
                </td>
             </tr>
             
             <tr >
             	<th colspan="2" class="unexpandable">
             	Due to the continuous research and improvement program, data presented is subject to change without notice.
                </th>
             </tr>
              
               
            </table>
        
        
        </div> <!-- /specifications -->
        
        
        <!-- HERE ARE THE PICTURES !!!! -------------------------------->
        <div id="photos">
        
        <div id="distantier"></div>
        <div id="distantier"></div>
        <div id="distantier"></div>
        <div id="distantier"></div>
                  
        <div id="gallery">
    <a href="Images/Pics/autolok1.jpg" rel="gallery" title="Press #1"><img class="thumbnail gallery fat" src="Images/Pics/autolok1.jpg"/></a>
    <a href="Images/Pics/autolok2.jpg" rel="gallery" title="Press #2"><img  class="thumbnail gallery fat" src="Images/Pics/autolok2.jpg"/></a>
    <a href="Images/Pics/autolok3.jpg" rel="gallery" title="Press #3"><img  class="thumbnail gallery fat" src="Images/Pics/autolok3.jpg"/></a>
    
    </div>
    
    
    
    <div id="distantier"></div>
   	
    	
     </div> <!-- /photos -->   
        <!--  </div> <!-- end sub main content -->
        
        <!-- =======================================================================================================================================================================================
        	 MAIN CONTENT ENDS HERE!!!!
             =======================================================================================================================================================================================-->
        
        </div> <!-- /mainContent -->
    </div> <!-- /rightColumn -->
   
    <div id="footer">
    	<div id="left">
         <ul>
         	<li class="first"><a href="">LAST CHANGES</a></li>
            <li><a href="">WEBMAP</a></li>
            <li><a href="">PRINT</a></li>
        </ul>
        </div> <!-- /left -->
        <div id="right">
        	<ul>
            	<li class="first"><a href="">ABOUT COMPANY</a></li>
                <li><a href="">PRODUCTION PROGRAMME</a></li>
                <li><a href="">PHOTOGALLERY</a></li>
                <li class="last"><a href="">CONTACTS</a></li>
            </ul>
        </div> <!-- /right -->
    </div> <!-- /footer -->
    
   
</div> <!-- /wrapOverall -->

</body>
</html>
